import { ref, unref } from 'vue'

export const useTable = props => {
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
            return getExposeData()?.tableRef
        },
        setSingleSelect: (...args) => {
            return getExposeData()?.setSingleSelect(...args)
        },
        getSingleSelect: (...args) => {
            return getExposeData()?.getSingleSelect(...args)
        },
        setMultipleSelect: (...args) => {
            return getExposeData()?.setMultipleSelect(...args)
        },
        setSingleItemMultipleSelect: (...args) => {
            return getExposeData()?.setSingleItemMultipleSelect(...args)
        },
        getMultipleSelect: (...args) => {
            return getExposeData()?.getMultipleSelect(...args)
        },
        clearSelection: () => {
            getExposeData()?.tableRef.clearSelection()
        }
    }

    return [register, exposeData]
}