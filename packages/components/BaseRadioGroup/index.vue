<script>
import { ElRadio, ElRadioButton, ElRadioGroup } from 'element-plus'
import { defineComponent, h, ref } from 'vue'

export default defineComponent({
    name: 'BaseRadioGroup',
    inheritAttrs: false,
    props: {
        // 按钮类型
        optionType: {
            type: String,
            default: 'radio',
            validator: val => ['radio', 'button'].includes(val)
        },
        // options 数组
        options: {
            type: Array,
            default: () => []
        },
        // 转换 option数据 作为 option组件 的 props
        optionProps: {
            type: Function,
            default: rawOption => {
                const { label, labelRenderer, ...args } = rawOption
                return {
                    // 默认取 label 作为 key
                    key: label,
                    label,
                    ...args
                }
            }
        },
        // label 渲染器
        labelRenderer: {
            type: Function
        }
    },
    setup (props, { attrs, slots, emit, expose }) {
        const radioGroupRef = ref(null)

        expose({
            radioGroupRef
        })

        return () => {
            const OptionComponent = props.optionType === `button` ? ElRadioButton : ElRadio

            return h(
                ElRadioGroup,
                {
                    ref: radioGroupRef,
                    ...attrs
                },
                {
                    default: () =>
                        props.options.map(rawOption => {
                            const option = props.optionProps(rawOption)
                            return h(
                                OptionComponent,
                                option,
                                (rawOption.labelRenderer
                                    && (() => rawOption.labelRenderer(option, rawOption)))
                                    || (props.labelRenderer
                                        && (() => props.labelRenderer(option, rawOption)))
                                    || (slots.label && (() => slots.label({ option, rawOption })))
                                    || (() => option.label)
                            )
                        })
                }
            )
        }
    }
})
</script>

<style lang="scss" scoped></style>
