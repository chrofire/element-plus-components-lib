<script>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'BaseRenderer',
    inheritAttrs: false,
    props: {
        // 渲染函数
        render: {
            type: Function,
            default: () => null
        }
    },
    setup (props, { attrs }) {
        return () => {
            return props.render(attrs)
        }
    }
})
</script>
