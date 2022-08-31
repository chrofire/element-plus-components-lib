<script>
import { ElDescriptions, ElDescriptionsItem } from 'element-plus'
import { defineComponent, h, ref } from 'vue'

export default defineComponent({
    name: 'BaseDescriptions',
    inheritAttrs: false,
    props: {
        // items 数组
        items: {
            type: Array,
            default: () => []
        },
        // 左上方 标题 渲染器
        titleRenderer: {
            type: Function
        },
        // 右上方 操作区 渲染器
        extraRenderer: {
            type: Function
        }
    },
    setup (props, { attrs, slots, emit, expose }) {
        const descriptionsRef = ref(null)

        const filterAttrs = attrs => {
            const { titleRenderer, extraRenderer, ...args } = attrs
            return {
                ...args
            }
        }
        const filterItemProps = item => {
            const { valueRenderer, labelRenderer, prop, ...args } = item
            return {
                // 取 prop 作为 key
                key: prop,
                ...args
            }
        }

        expose({
            descriptionsRef
        })

        return () => {
            return h(
                ElDescriptions,
                {
                    ref: descriptionsRef,
                    ...filterAttrs(attrs)
                },
                {
                    default: () =>
                        props.items.map(item => {
                            return h(ElDescriptionsItem, filterItemProps(item), {
                                default:
                                    (item.valueRenderer && (() => item.valueRenderer(item)))
                                    || (slots[item.prop] && (() => slots[item.prop](item)))
                                    || (() => item.value),
                                label:
                                    (item.labelRenderer && (() => item.labelRenderer(item)))
                                    || (slots[`${item.prop}Label`]
                                        && (() => slots[`${item.prop}Label`](item)))
                                    || (() => item.label)
                            })
                        }),
                    title:
                        (props.titleRenderer && (() => props.titleRenderer()))
                        || (slots.title && (() => slots.title()))
                        || null,
                    extra:
                        (props.extraRenderer && (() => props.extraRenderer()))
                        || (slots.extra && (() => slots.extra()))
                        || null
                }
            )
        }
    }
})
</script>

<style lang="scss" scoped></style>
