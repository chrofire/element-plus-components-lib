import { ElLoading } from 'element-plus'
import { unref } from 'vue'

export const useLoading = (options = {}) => {
    let instance = null

    // ref || () => dom
    let target = null

    const start = () => {
        if (instance) return

        const { target: _target } = options
        if (typeof _target === 'function') {
            target = _target()
        } else {
            target = unref(_target)
        }
        instance = ElLoading.service({
            ...options,
            target
        })
    }

    const stop = () => {
        instance?.close()
        instance = null
        target = null
    }

    return {
        start,
        stop
    }
}
