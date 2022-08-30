<script>
import { ElCheckbox, ElCheckboxButton, ElCheckboxGroup } from 'element-plus'
import { defineComponent, h, ref } from 'vue'

export default defineComponent({
    name: 'BaseCheckboxGroup',
    inheritAttrs: false,
    props: {
        // 按钮类型
        optionType: {
            type: String,
            default: 'checkbox',
            validator: val => ['checkbox', 'button'].includes(val)
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
        const checkboxGroupRef = ref(null)

        expose({
            checkboxGroupRef
        })

        return () => {
            const OptionComponent = props.optionType === `button` ? ElCheckboxButton : ElCheckbox

            return h(
                ElCheckboxGroup,
                {
                    ref: checkboxGroupRef,
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
