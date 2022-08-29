<script>
import { ElButton } from 'element-plus'
import { defineComponent, h, mergeProps, reactive, ref } from 'vue'

export const controlLoadingEventName = ['click', 'dblclick', 'contextmenu']

export default defineComponent({
    name: 'BaseButton',
    props: {
        // 控制 Loading
        controlLoading: {
            type: Boolean,
            default: false
        }
    },
    emits: [...controlLoadingEventName],
    setup (props, { attrs, slots, emit, expose }) {
        const buttonRef = ref(null)

        const state = reactive({
            loading: false
        })

        const toggleLoading = bool => {
            state.loading = bool
        }

        const control = (event, name) => {
            if (!props.controlLoading) {
                emit(name, event)
                return
            }
            const params = { event, toggleLoading }
            emit(name, params)
        }

        expose({
            buttonRef,
            state
        })

        return () => {
            return h(
                ElButton,
                mergeProps(props, {
                    ref: buttonRef,
                    loading: props.controlLoading ? state.loading : props.loading,
                    onClick: event => control(event, 'click'),
                    onDblclick: event => control(event, 'dblclick'),
                    onContextmenu: event => control(event, 'contextmenu')
                }),
                slots
            )
        }
    }
})
</script>

<style lang="scss" scoped></style>
