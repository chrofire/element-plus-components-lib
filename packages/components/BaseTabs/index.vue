<script>
import { ElTabPane, ElTabs } from 'element-plus'
import { defineComponent, h, ref } from 'vue'

export default defineComponent({
    name: 'BaseTabs',
    inheritAttrs: false,
    props: {
        // items 数组
        items: {
            type: Array,
            default: () => []
        }
    },
    setup (props, { attrs, slots, emit, expose }) {
        const tabsRef = ref(null)

        const filterAttrs = attrs => {
            const { labelRenderer, ...args } = attrs
            return {
                ...args
            }
        }
        const filterItemProps = item => {
            const { valueRenderer, labelRenderer, name, ...args } = item
            return {
                key: name,
                name,
                ...args
            }
        }

        expose({
            tabsRef
        })

        return () => {
            return h(
                ElTabs,
                {
                    ref: tabsRef,
                    ...filterAttrs(attrs)
                },
                () =>
                    props.items.map(item => {
                        return h(ElTabPane, filterItemProps(item), {
                            default:
                                (item.valueRenderer && (() => item.valueRenderer(item)))
                                || (slots[item.name] && (() => slots[item.name](item)))
                                || null,
                            label:
                                (item.labelRenderer && (() => item.labelRenderer(item)))
                                || (slots[`${item.name}Label`]
                                    && (() => slots[`${item.name}Label`](item)))
                                || (() => item.label)
                        })
                    })
            )
        }
    }
})
</script>

<style lang="scss" scoped></style>
