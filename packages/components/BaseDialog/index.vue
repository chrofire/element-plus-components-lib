<script>
import { ElButton, ElDialog } from 'element-plus'
import { defineComponent, h, reactive, ref } from 'vue'

export default defineComponent({
    name: 'BaseDialog',
    inheritAttrs: false,
    props: {
        title: [String, Number],
        headerRenderer: Function,
        defaultRenderer: Function,
        footerRenderer: Function,
        confirm: {
            type: [Function, String],
            default: () => '确定'
        },
        confirmProps: {
            type: Object,
            default: () => ({})
        },
        cancel: {
            type: [Function, String],
            default: () => '取消'
        },
        cancelProps: {
            type: Object,
            default: () => ({})
        }
    },
    emits: ['register'],
    setup (props, { attrs, slots, emit, expose }) {
        const dialogRef = ref(null)

        const state = reactive({
            visible: false
        })

        const setVisible = (bool = false) => {
            state.visible = bool
        }

        // header
        const genHeaderRenderer = () => {
            return (
                (props.headerRenderer && (() => props.headerRenderer()))
                || (slots.header && (() => slots.header()))
                || (() =>
                    h(
                        'div',
                        {
                            class: `el-dialog__title`,
                            style: { minHeight: `var(--el-dialog-font-line-height)` }
                        },
                        props.title
                    ))
            )
        }

        // default
        const genDefaultRenderer = () => {
            return (
                (props.defaultRenderer && (() => props.defaultRenderer()))
                || (slots.default && (() => slots.default()))
                || null
            )
        }

        // footer
        const defaultFooterRenderer = () => {
            const confirmProps = {
                type: 'primary',
                size: 'default',
                ...props.confirmProps
            }

            const cancelProps = {
                size: 'default',
                ...props.cancelProps
            }

            return [
                h(
                    ElButton,
                    confirmProps,
                    typeof props.confirm === 'function'
                        ? props.confirm
                        : { default: () => props.confirm }
                ),
                h(
                    ElButton,
                    cancelProps,
                    typeof props.cancel === 'function'
                        ? props.cancel
                        : { default: () => props.cancel }
                )
            ]
        }
        const genFooterRenderer = () => {
            return (
                (props.footerRenderer && (() => props.footerRenderer()))
                || (slots.footer && (() => slots.footer()))
                || (() => defaultFooterRenderer())
            )
        }

        const exposeData = {
            dialogRef,
            state,
            setVisible
        }

        emit('register', exposeData)
        expose(exposeData)

        return () => {
            return h(
                ElDialog,
                {
                    ref: dialogRef,
                    modelValue: state.visible,
                    'onUpdate:modelValue': value => (state.visible = value),
                    'append-to-body': true,
                    'close-on-click-modal': false,
                    ...attrs
                },
                {
                    header: genHeaderRenderer(),
                    default: genDefaultRenderer(),
                    footer: genFooterRenderer()
                }
            )
        }
    }
})
</script>

<style lang="scss" scoped></style>
