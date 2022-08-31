import { useNamespace } from 'element-plus'
import { addClass, hasClass, removeClass } from 'element-plus/es/utils/index'

export const useLockscreen = () => {
    const ns = useNamespace('popup')

    const hiddenCls = ns.bm('parent', 'hidden')

    const lock = () => {
        if (hasClass(document.body, hiddenCls)) return
        addClass(document.body, hiddenCls)
    }

    const unlock = () => {
        removeClass(document.body, hiddenCls)
    }

    return {
        lock,
        unlock
    }
}