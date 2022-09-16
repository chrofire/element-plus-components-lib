import { h, reactive, render } from 'vue'
import BaseContextMenu from './index.vue'

export const useContextMenu = (_options = {}) => {
    let fragment = document.createDocumentFragment()

    const destroy = () => {
        render(null, fragment)
        vnode = null
        fragment = null
    }
    const options = reactive(_options)
    let vnode = h(BaseContextMenu, options)

    render(vnode, fragment)

    document.body.appendChild(fragment)

    const { exposed } = vnode.component

    return {
        instance: vnode.component,
        ...exposed,
        destroy,
        options
    }
}
