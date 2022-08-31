<script>
import { ElTable, ElTableColumn } from 'element-plus'
import { defineComponent, h, mergeProps, nextTick, onBeforeUnmount, ref, unref, watch } from 'vue'

export default defineComponent({
    name: 'BaseTable',
    inheritAttrs: false,
    props: {
        // 列
        columns: {
            type: Array,
            default: () => []
        },
        // 数据
        data: {
            type: Array,
            default: () => []
        },
        // 分页
        pagination: {
            type: Object,
            default: () => ({
                pageNum: 1,
                pageSize: 10,
                total: 0
            })
        },
        // 单选行
        singleSelect: {
            type: Boolean,
            default: false
        },
        // 单项多选
        singleItemMultipleSelect: {
            type: Boolean,
            default: false
        },
        // 自动高度
        autoHeight: {
            type: Boolean,
            default: false
        }
    },
    emits: ['register'],
    setup (props, { attrs, slots, emit, expose }) {
        const tableRef = ref(null)

        // 生成列
        const genColumns = columns => {
            return columns.map((columnInfo, columnInfoIndex) => {
                const { children, ...columnInfoArgs } = columnInfo

                let columnProps = {
                    key: columnInfo.prop || undefined,
                    'show-overflow-tooltip': true,
                    ...columnInfoArgs
                }

                let columnSlots = genColumnSlots(columnInfo)

                // 多选列
                if (columnInfo.type === `selection`) {
                    const { columnProps: multipleColumnProps, columnSlots: multipleColumnSlots }
                        = genMultipleColumn(columnInfo)
                    columnProps = multipleColumnProps
                    columnSlots = multipleColumnSlots
                }

                // 索引列
                if (columnInfo.type === `index`) {
                    const { columnProps: indexColumnProps, columnSlots: indexColumnSlots }
                        = genIndexColumn(columnInfo)
                    columnProps = indexColumnProps
                    columnSlots = indexColumnSlots
                }

                // 多级表头
                if (children?.length) {
                    return h(ElTableColumn, columnProps, () => genColumns(children))
                } else {
                    return h(ElTableColumn, columnProps, columnSlots)
                }
            })
        }

        // 生成列slots
        const genColumnSlots = columnInfo => {
            const columnSlots = {
                default: scope => {
                    const scopeData = { ...scope, columns: props.columns, columnInfo }
                    return (
                        columnInfo.cellRenderer?.(scopeData)
                        || slots[columnInfo.prop]?.(scopeData)
                        || scope.row[scope.column.property]
                    )
                },
                header: scope => {
                    const scopeData = { ...scope, columns: props.columns, columnInfo }
                    const headerSlotName = columnInfo.prop ? `${columnInfo.prop}Header` : null
                    return (
                        columnInfo.headerRenderer?.(scopeData)
                        || slots[headerSlotName]?.(scopeData)
                        || scope.column.label
                    )
                }
            }
            return columnSlots
        }

        // 生成多选列
        const genMultipleColumn = columnInfo => {
            const columnProps = {
                key: '_selection',
                type: 'selection',
                width: '60',
                align: 'center',
                'label-class-name': props.singleItemMultipleSelect
                    ? 'base-table-default-hidden-checkbox-header-class'
                    : '',
                ...columnInfo
            }

            const columnSlots = {}

            return { columnProps, columnSlots }
        }

        // 生成索引列
        const genIndexColumn = columnInfo => {
            const columnProps = {
                key: '_index',
                type: 'index',
                label: '序号',
                width: '60',
                align: 'center',
                index: index =>
                    index + 1 + (props.pagination.pageNum - 1) * props.pagination.pageSize,
                ...columnInfo
            }

            const columnSlots = genColumnSlots(columnInfo)

            if (!columnInfo.cellRenderer || columnInfo.index) delete columnSlots.default
            return { columnProps, columnSlots }
        }

        // 单选
        // 单选行
        const currentRow = ref(null)
        const onRowClickAffectSingleSelect = (row, column, event) => {
            props.singleSelect && setSingleSelect(row)
        }
        // 设置单选行
        const setSingleSelect = row => {
            if (row === unref(currentRow)) {
                currentRow.value = null
                unref(tableRef).setCurrentRow(null)
            } else {
                currentRow.value = row
                unref(tableRef).setCurrentRow(row)
            }
        }
        // 获取单选行
        const getSingleSelect = () => {
            return unref(currentRow)
        }

        // 多选
        // 设置多项多选
        const setMultipleSelect = rows => {
            if (props.singleItemMultipleSelect) {
                console.warn('启用 单项多选 时 禁止 设置多项多选')
                return
            }
            if (rows) {
                rows.forEach(row => {
                    unref(tableRef).toggleRowSelection(row)
                })
            } else {
                unref(tableRef).clearSelection()
            }
        }
        // 设置单项多选
        const setSingleItemMultipleSelect = row => {
            const selection = getMultipleSelect()
            unref(tableRef).clearSelection()
            if (!selection.includes(row)) {
                unref(tableRef).toggleRowSelection(row)
            }
        }
        // 限制单项多选只选一项
        const onSingleItemMultipleSelectSelect = (selection, row) => {
            if (!props.singleItemMultipleSelect) return
            if (selection.includes(row)) {
                unref(tableRef).clearSelection()
                unref(tableRef).toggleRowSelection(row)
            } else {
                unref(tableRef).clearSelection()
            }
        }
        // 获取当前已选择的多选选项
        const getMultipleSelect = () => {
            return unref(tableRef).getSelectionRows()
        }

        // 自动高度
        const useTableHeight = () => {
            const tableHeight = ref(undefined)
            let resizeObserver
            watch(
                () => props.autoHeight,
                async newVal => {
                    resizeObserver?.disconnect()

                    if (!newVal) {
                        tableHeight.value = undefined
                        unref(tableRef).$el.style.height = null
                        unref(tableRef).scrollBarRef.update()
                        return
                    }

                    resizeObserver = new ResizeObserver(entries => {
                        const { height } = entries.shift().contentRect
                        tableHeight.value = height
                        unref(tableRef).scrollBarRef.update()
                    })

                    await nextTick()
                    resizeObserver.observe(unref(tableRef).$el.parentElement)
                },
                {
                    immediate: true
                }
            )
            onBeforeUnmount(() => {
                resizeObserver?.disconnect()
            })
            return tableHeight
        }
        const tableHeight = useTableHeight()

        const exposeData = {
            // ref
            tableRef,
            // 单选行
            currentRow,
            setSingleSelect,
            getSingleSelect,
            // 多选
            setMultipleSelect,
            setSingleItemMultipleSelect,
            getMultipleSelect
        }
        emit('register', exposeData)
        expose(exposeData)

        return () => {
            const { height, ...attrsArgs } = attrs
            const defaultProps = {
                ref: tableRef,
                data: props.data,

                onRowClick: onRowClickAffectSingleSelect,
                onSelect: onSingleItemMultipleSelectSelect,

                'highlight-current-row': props.singleSelect,
                height: props.autoHeight ? unref(tableHeight) : height
            }
            const fullProps = mergeProps(defaultProps, attrsArgs)
            return h(ElTable, fullProps, () => genColumns(props.columns))
        }
    }
})
</script>

<style lang="scss">
.base-table-default-hidden-checkbox-header-class {
    .cell {
        .el-checkbox {
            visibility: hidden;
        }

        // .el-checkbox {
        //     display: none;
        // }
        // &::before {
        //     content: "选择";
        // }
    }
}
</style>
