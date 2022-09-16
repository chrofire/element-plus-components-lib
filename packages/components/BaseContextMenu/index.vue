<script lang="jsx">
import { computed, defineComponent, nextTick, reactive, ref, Transition, unref } from 'vue'
import { onClickOutside } from '@vueuse/core'

export default defineComponent({
    name: 'BaseContextMenu',
    props: {
        menuList: {
            type: Array,
            default: () => {}
        }
    },
    setup (props, { expose }) {
        const contextMenuRef = ref(null)
        onClickOutside(contextMenuRef, () => close())

        const state = reactive({
            visible: false,
            contextMenuPosition: {
                left: 0,
                top: 0
            }
        })

        const contextMenuPositionStyle = computed(() => {
            return getPositionStyle(state.contextMenuPosition)
        })

        const getPositionStyle = position => {
            const { left, top } = position
            return {
                left: `${left}px`,
                top: `${top}px`
            }
        }

        // @contextmenu event
        const open = async event => {
            if (!event) throw new Error('未传入event')
            event.preventDefault()

            // 每次打开 contextmenu 前先初始化
            if (state.visible) state.visible = false
            setDeepSelect(props.menuList)

            // 已经打开了菜单, 再次触发右键打开菜单, 需要等待深层次的菜单关闭
            await nextTick()

            const { clientX, clientY } = event

            Object.assign(state.contextMenuPosition, {
                // 鼠标x坐标偏移1px, 打开菜单不会立即选中菜单项
                left: clientX + 1,
                top: clientY
            })

            state.visible = true

            await nextTick()

            const wrapperRect = unref(contextMenuRef).firstElementChild.getBoundingClientRect()
            // 右边界
            // body内容宽度 - 鼠标x坐标 < 一级菜单宽度
            if (document.body.clientWidth - clientX < wrapperRect.width) {
                Object.assign(state.contextMenuPosition, {
                    // body内容高度 - 一级菜单宽度
                    left: document.body.clientWidth - wrapperRect.width - 1
                })
            }
            // 下边界
            // body内容高度 - 鼠标y坐标 < 一级菜单高度
            if (document.body.clientHeight - clientY < wrapperRect.height) {
                Object.assign(state.contextMenuPosition, {
                    // body内容宽度 - 一级菜单高度
                    top: document.body.clientHeight - wrapperRect.height - 1
                })
            }
        }

        // 关闭菜单
        const close = () => {
            state.visible = false
            setDeepSelect(props.menuList)
        }

        // 菜单项点击事件
        const handleClick = item => {
            if (!item.onClick) return
            const context = {
                item,
                state,
                close
            }
            item.onClick(context)
        }

        // 递归设置菜单项是否选中
        const setDeepSelect = (list, select = false) => {
            if (!Array.isArray(list)) return
            list.forEach(it => {
                it.select = false
                // 释放掉 wrapperEl 的引用
                if (it.wrapperEl) {
                    it.wrapperEl = null
                }
                setDeepSelect(it.children, select)
            })
        }

        const handleMenuItemMouseover = async (e, item, list) => {
            e.stopPropagation()
            setDeepSelect(list, false)
            item.select = true

            // 当前菜单项 rect
            const itemRect = e.currentTarget.getBoundingClientRect()

            // 子级菜单 subMenu wrapper position
            item.wrapperPosition = {
                left: itemRect.width,
                // 偏移 context-menu__wrapper padding 的 5px 与菜单项对齐
                top: -5
            }

            if (!item.children?.length) return
            await nextTick()

            const wrapperRect = item.wrapperEl.getBoundingClientRect()
            // body内容宽度 - 菜单项右边x坐标 < 菜单宽度
            if (document.body.clientWidth - itemRect.right < wrapperRect.width) {
                Object.assign(item.wrapperPosition, {
                    // 右侧不够位置, 反方向偏移
                    left: -wrapperRect.width
                })
            }
            // body内容宽度 - 菜单项上边y坐标 < 菜单宽度
            if (document.body.clientHeight - wrapperRect.top < wrapperRect.height) {
                Object.assign(item.wrapperPosition, {
                    // 底部不够位置, 反方向偏移
                    top: -wrapperRect.height + (5 + itemRect.height)
                })
            }
        }

        // 生成 label
        const genLabel = item => {
            if (typeof item.label === 'function') return item.label(item)
            return item.label
        }

        // 普通菜单项
        const genMenuItem = (item, list) => {
            return (
                <div
                    class={['context-menu__menu-item', { select: item.select }]}
                    onMouseover={e => handleMenuItemMouseover(e, item, list)}
                    onClick={() => handleClick(item)}
                    onContextmenu={e => e.preventDefault()}
                >
                    <div class="label">{genLabel(item)}</div>
                </div>
            )
        }

        // 具备子级的菜单项
        const genSubMenuItem = (item, list) => {
            return (
                <div
                    class={['context-menu__sub-menu-item', { select: item.select }]}
                    onMouseover={e => handleMenuItemMouseover(e, item, list)}
                    onClick={() => handleClick(item)}
                    onContextmenu={e => e.preventDefault()}
                >
                    <div class="label">{genLabel(item)}</div>
                    <div class="right-icon__wrapper">
                        <div class="right-icon"></div>
                    </div>
                    <Transition name="fade-in-linear">
                        {item.select && genMenuWrapper(item.children, item)}
                    </Transition>
                </div>
            )
        }

        // 菜单列表
        const genMenuWrapper = (list = [], item) => {
            // 子级菜单才会有item
            return (
                <div
                    class="context-menu__wrapper"
                    style={item && getPositionStyle(item.wrapperPosition)}
                    ref={el => item && (item.wrapperEl = el)}
                >
                    {list.map(it => {
                        if (it.children?.length) {
                            return genSubMenuItem(it, list)
                        }
                        return genMenuItem(it, list)
                    })}
                </div>
            )
        }

        expose({
            state,
            open,
            close
        })

        return () => {
            return (
                <Transition name="fade-in-linear">
                    {state.visible && (
                        <div
                            class="context-menu"
                            ref={contextMenuRef}
                            style={unref(contextMenuPositionStyle)}
                        >
                            {genMenuWrapper(props.menuList)}
                        </div>
                    )}
                </Transition>
            )
        }
    }
})
</script>

<style lang="scss" scoped>
.context-menu {
    position: fixed;
    z-index: 9999;
    width: 0;
    height: 0;

    --fade-linear-transition: opacity 0.15s linear;
    --context-menu-text-color: #606266;
    --context-menu-text-select-color: #409eff;
    --context-menu-item-select-bg-color: #ecf5ff;
}
.context-menu__wrapper {
    display: flex;
    flex-flow: column nowrap;
    box-shadow: 0 2px 4px rgb(0 0 0 / 12%), 0 0 6px rgb(0 0 0 / 4%);
    background: #fff;
    padding: 5px 0;
    position: absolute;
}
.context-menu__menu-item,
.context-menu__sub-menu-item {
    padding: 0 10px;
    display: flex;
    font-size: 14px;
    color: var(--context-menu-text-color);
    cursor: pointer;
    position: relative;
    transition: background-color 0.2s;
    .label {
        display: flex;
        align-items: center;
        min-height: 28px;
        user-select: none;
    }
    &.select {
        background: var(--context-menu-item-select-bg-color);
        color: var(--context-menu-text-select-color);
    }
}
.context-menu__sub-menu-item {
    padding: {
        left: 10px;
        right: 5px;
    }

    display: flex;
    align-items: center;
    justify-content: space-between;
    .label {
        white-space: nowrap;
    }
    .right-icon__wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 6px;
        .right-icon {
            width: 8px;
            height: 8px;
            border: {
                right: 1px solid var(--context-menu-text-color);
                bottom: 1px solid var(--context-menu-text-color);
            };

            transform: rotate(-45deg);
        }
    }
    &.select {
        & > .right-icon__wrapper {
            .right-icon {
                border-color: var(--context-menu-text-select-color);
            }
        }
    }
}
.fade-in-linear-enter-active,
.fade-in-linear-leave-active {
    transition: var(--fade-linear-transition);
}
.fade-in-linear-enter,
.fade-in-linear-leave,
.fade-in-linear-leave-active {
    opacity: 0;
}
</style>
