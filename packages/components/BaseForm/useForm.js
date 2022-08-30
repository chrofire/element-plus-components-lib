import { ref, unref } from 'vue'

export const useForm = props => {
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
            return getExposeData()?.formRef
        },
        getFormData: () => {
            return unref(props).modelValue
        },
        setFormData: (...args) => {
            if (typeof args[0] === 'string') {
                unref(componentProps).modelValue[args[0]] = args[1]
            } else {
                unref(componentProps).modelValue = args[0]
            }
        },
        validate: (...args) => {
            return getExposeData()?.validate(...args)
        },
        validateField: (...args) => {
            return getExposeData()?.validateField(...args)
        },
        resetFields: (...args) => {
            return getExposeData()?.resetFields(...args)
        },
        scrollToField: (...args) => {
            return getExposeData()?.scrollToField(...args)
        },
        clearValidate: (...args) => {
            return getExposeData()?.clearValidate(...args)
        }
    }

    return [register, exposeData]
}