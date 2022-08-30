<script>
import { ElCol, ElForm, ElFormItem, ElRow } from 'element-plus'
import { computed, defineComponent, h, ref, unref } from 'vue'
import { BaseFormComponentMap } from './componentMap'

export default defineComponent({
    name: 'BaseForm',
    inheritAttrs: false,
    props: {
        // 表单项
        items: {
            type: Array,
            default: () => [],
            required: true
        },
        // 表单数据对象
        modelValue: {
            type: Object,
            default: () => ({}),
            required: true
        },
        // Row 组件 props
        row: {
            type: Object,
            default: () => ({})
        }
    },
    emits: ['update:modelValue', 'register'],
    setup (props, { attrs, slots, emit, expose }) {
        const formRef = ref(null)

        const formData = computed({
            // 外部 修改 modelValue
            // modelValue = {...} 触发 get
            get () {
                return props.modelValue
            },
            // 内部 修改 formData
            // formData.value = {...} 触发 set
            // 需要 外部 监听 update:modelValue 或 v-model 修改 modelValue 的 值
            set (val) {
                emit('update:modelValue', val)
            }
        })

        const genFormItems = formItems => {
            return formItems.map(formItem => {
                const {
                    col = {},
                    extra,
                    labelRenderer,
                    errorRenderer,
                    isShow,
                    ...formItemArgs
                } = formItem

                const formItemProps = {
                    ...formItemArgs
                }

                const formItemSlots = {
                    default: () => genFormItem(formItem),
                    label: () => labelRenderer?.(),
                    error: ({ error }) => errorRenderer?.(error)
                }

                const vnode = h(ElCol, { key: formItem.prop, ...col }, () =>
                    h(ElFormItem, formItemProps, formItemSlots)
                )
                if (typeof isShow === 'function') {
                    return isShow() ? vnode : null
                } else {
                    return vnode
                }
            })
        }

        const genFormItem = formItem => {
            const { defaultRenderer, prop } = formItem

            const scopeData = {
                formItem,
                formData: unref(formData)
            }

            if (!defaultRenderer) {
                return slots[prop]?.(scopeData)
            }

            if (typeof defaultRenderer === 'object') {
                const isRegistered = [...BaseFormComponentMap.keys()].includes(
                    defaultRenderer.component
                )
                if (!isRegistered) return h('span', '未注册组件')
                return genRegisteredComponent(formItem)
            }

            if (typeof defaultRenderer === 'function') {
                return defaultRenderer(scopeData)
            }
        }

        const genRegisteredComponent = formItem => {
            const { defaultRenderer, prop } = formItem
            const { component, props = {}, slots = {}} = defaultRenderer
            const componentInfo = BaseFormComponentMap.get(component)
            const hasCustomRenderer = typeof componentInfo.customRenderer === 'function'

            if (hasCustomRenderer) {
                return componentInfo.customRenderer({
                    componentInfo,
                    formItem,
                    formData
                })
            }

            return h(
                componentInfo.component,
                {
                    modelValue: formData.value[prop],
                    'onUpdate:modelValue': value => formData.value[prop] = value,
                    ...props
                },
                slots
            )
        }

        const validate = async () => {
            const result = {
                valid: null,
                errors: null
            }
            try {
                result.valid = await unref(formRef).validate()
            } catch (errors) {
                Object.assign(result, {
                    valid: false,
                    errors
                })
            }
            return result
        }
        const validateField = (...args) => unref(formRef).validateField(...args)
        const resetFields = (...args) => unref(formRef).resetFields(...args)
        const scrollToField = (...args) => unref(formRef).scrollToField(...args)
        const clearValidate = (...args) => unref(formRef).clearValidate(...args)

        const formMethods = {
            validate,
            validateField,
            resetFields,
            scrollToField,
            clearValidate
        }

        const exposeData = {
            formRef,
            ...formMethods
        }

        emit('register', exposeData)
        expose(exposeData)

        return () => {
            return h(
                ElForm,
                {
                    ref: formRef,
                    model: unref(formData),
                    labelWidth: '100px',
                    ...attrs
                },
                () =>
                    h(ElRow, props.row, () => {
                        return genFormItems(props.items)
                    })
            )
        }
    }
})
</script>

<style lang="scss" scoped></style>
