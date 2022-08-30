import { h, render, mergeProps } from 'vue'

import BaseDialog from './index.vue'

export const createBaseDialog = (props = {}) => {
    let vnode = h(BaseDialog, props)

    let fragment = document.createDocumentFragment()
    render(vnode, fragment)

    const destroy = () => {
        if (!fragment) {
            console.warn('不能重复销毁组件')
            return
        }
        render(null, fragment)
        vnode = null
        fragment = null
    }

    return {
        vnode,
        component: vnode.component,
        ...vnode.component.exposed,
        destroy
    }
}

// BaseDialogService
export const BaseDialogService = (props = {}) => {
    const destroy = () => {
        instance.destroy?.()
        instance = null
        _props = null
    }
    let _props = mergeProps(props, {
        footerRenderer: () => null,
        onClosed: destroy
    })
    let instance = createBaseDialog(_props)
    instance.setVisible(true)
}
