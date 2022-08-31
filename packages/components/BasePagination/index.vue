<script>
import { ElPagination } from 'element-plus'
import { defineComponent, h, ref } from 'vue'

export default defineComponent({
    name: 'BasePagination',
    inheritAttrs: false,
    props: {
        // 分页器数据
        pagination: {
            type: Object,
            default: () => ({
                pageNum: 1,
                pageSize: 10,
                total: 10
            })
        },
        defaultRenderer: {
            type: Function
        }
    },
    emits: ['change'],
    setup (props, { attrs, slots, emit, expose }) {
        const paginationRef = ref(null)

        const defaultProps = {
            background: true,
            pageSizes: [10, 50, 100, 300, 500],
            layout: `total, sizes, prev, pager, next, jumper`,
            pagerCount: 7
        }

        // 选中页改变
        const pageNumChange = value => {
            emit('change', {
                type: 'pageNum',
                value
            })
        }

        // 每页条数改变
        const pageSizeChange = value => {
            // 重置选中页
            props.pagination.pageNum = 1
            emit('change', {
                type: 'pageSize',
                value
            })
        }

        expose({
            paginationRef
        })

        return () => {
            return h(
                ElPagination,
                {
                    ref: paginationRef,
                    ...defaultProps,
                    currentPage: props.pagination.pageNum,
                    'onUpdate:currentPage': [
                        value => (props.pagination.pageNum = value),
                        pageNumChange
                    ],
                    pageSize: props.pagination.pageSize,
                    'onUpdate:pageSize': [
                        value => (props.pagination.pageSize = value),
                        pageSizeChange
                    ],
                    total: props.pagination.total,
                    ...attrs
                },
                (props.defaultRenderer && (() => props.defaultRenderer()))
                    || (slots.default && (() => slots.default()))
                    || null
            )
        }
    }
})
</script>

<style lang="scss" scoped></style>
