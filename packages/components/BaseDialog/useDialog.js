import { ref, unref } from 'vue'

export const useDialog = props => {
    const _exposeData = ref(null)

    const getExposeData = () => unref(_exposeData)

    const register = data => {
        _exposeData.value = data
    }

    const componentProps = ref(props)

    const exposeData = {
        _componentProps: componentProps,
        componentProps: unref(componentProps),
        getInstance: () => {
            return getExposeData()?.dialogRef
        },
        setVisible: data => {
            getExposeData()?.setVisible(data)
        }
    }

    return [register, exposeData]
}
