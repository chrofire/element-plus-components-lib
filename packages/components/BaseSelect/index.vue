<script>
import { ElOption, ElOptionGroup, ElSelect } from 'element-plus'
import { defineComponent, h, ref } from 'vue'

export default defineComponent({
    name: 'BaseSelect',
    inheritAttrs: false,
    props: {
        // options 数组
        options: {
            type: Array,
            default: () => []
        },
        // 绑定 对象
        bindObject: {
            type: Boolean,
            default: false
        },
        // 转换 option数据 作为 Option Group 组件 的 props
        groupProps: {
            type: Function,
            default: props => {
                const { label, children, ...args } = props
                return {
                    key: label,
                    label,
                    ...args
                }
            }
        },
        // 转换 option数据 作为 Option 组件 的 props
        optionProps: {
            type: Function
        },
        // Select 组件头部内容 渲染器
        prefixRenderer: {
            type: Function
        },
        // 无选项时的列表 渲染器
        emptyRenderer: {
            type: Function
        },
        // label 渲染器
        labelRenderer: {
            type: Function
        }
    },
    setup (props, { attrs, slots, emit, expose }) {
        const selectRef = ref(null)

        const getOptionProps = () => {
            // 传入 optionProps
            if (props.optionProps) return props.optionProps
            // 绑定 对象
            if (props.bindObject) return objectOptionProps
            // 默认
            return defaultOptionProps
        }

        const optionRenderer = rawOption => {
            let optionProps = getOptionProps()

            const option = optionProps(rawOption)

            return h(
                ElOption,
                option,
                (rawOption.labelRenderer && (() => rawOption.labelRenderer(option, rawOption)))
                    || (props.labelRenderer && (() => props.labelRenderer(option, rawOption)))
                    || (slots.label && (() => slots.label({ option, rawOption })))
                    || (() => option.label)
            )
        }

        const defaultOptionProps = rawOption => {
            const { value, labelRenderer, ...args } = rawOption
            return {
                key: value,
                value,
                ...args
            }
        }

        const objectOptionProps = rawOption => {
            const { value, labelRenderer, ...args } = rawOption
            return {
                key: rawOption[attrs.valueKey] || rawOption[attrs['value-key']] || value,
                value: rawOption,
                ...args
            }
        }

        expose({
            selectRef
        })

        return () => {
            return h(
                ElSelect,
                {
                    ref: selectRef,
                    ...attrs
                },
                {
                    default: () => {
                        return props.options.map(option => {
                            if (option.children && Array.isArray(option.children)) {
                                // Option Group
                                return h(ElOptionGroup, props.groupProps(option), () =>
                                    option.children.map(opt => optionRenderer(opt))
                                )
                            } else {
                                // Option
                                return optionRenderer(option)
                            }
                        })
                    },
                    prefix:
                        (props.prefixRenderer && (() => props.prefixRenderer()))
                        || (slots.prefix && (() => slots.prefix()))
                        || null,
                    empty:
                        (props.emptyRenderer && (() => props.emptyRenderer()))
                        || (slots.empty && (() => slots.empty()))
                        || null
                }
            )
        }
    }
})
</script>

<style lang="scss" scoped></style>
