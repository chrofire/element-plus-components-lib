import { useLockscreen } from '@element-plus-components-lib/hooks'
import { ElImageViewer } from 'element-plus'
import { h, mergeProps, render, ref } from 'vue'

export const BaseImageViewer = (props = {}) => {
    const { lock, unlock } = useLockscreen()

    const onClose = () => {
        destroy()
    }

    let vnode = h(ElImageViewer, mergeProps({ onClose }, props))

    let fragment = document.createDocumentFragment()
    render(vnode, fragment)
    document.body.appendChild(fragment)
    lock()

    const destroy = () => {
        render(null, fragment)
        vnode = null
        fragment = null
        unlock()
    }

    return {
        component: vnode.component,
        destroy,
        lock,
        unlock
    }
}

export const createBaseImageViewer = (props = {}) => {
    const { lock, unlock } = useLockscreen()

    const imageViewerProps = ref(props)

    const Container = {
        inheritAttrs: false,
        props: {
            visible: {
                type: Boolean
            }
        },
        setup (props) {
            return () => {
                return props.visible
                    ? h('div', h(ElImageViewer, mergeProps({ onClose }, imageViewerProps.value)))
                    : null
            }
        }
    }

    let containerVNode = h(Container, { visible: false })

    let fragment = document.createDocumentFragment()
    render(containerVNode, fragment)
    document.body.appendChild(fragment)

    const setVisible = bool => {
        containerVNode.component.props.visible = bool
        bool ? lock() : unlock()
    }

    const onClose = () => {
        setVisible(false)
    }

    const destroy = () => {
        setVisible(false)
        render(null, fragment)
        containerVNode = null
        fragment = null
    }

    return {
        // 容器组件 实例
        containerComponent: containerVNode.component,
        // imageViewer 的 props
        get props () {
            return imageViewerProps.value
        },
        set props (value) {
            imageViewerProps.value = value
        },
        // 容器组件 显示 / 隐藏
        setVisible,
        // 销毁 容器组件
        destroy,
        // document.body 滚动
        lock,
        unlock
    }
}
