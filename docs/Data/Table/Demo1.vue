<template>
    <div class="h-300px">
        <BaseTable ref="BaseTableRef" v-bind="info"></BaseTable>
    </div>
</template>

<script lang="jsx" setup>
import { reactive, ref } from 'vue'
import { BaseTable } from 'element-plus-components-lib'

const BaseTableRef = ref(null)

const info = reactive({
    autoHeight: true,
    rowKey: row => row.id,
    columns: [
        {
            prop: 'field1',
            label: '字段1'
        },
        {
            prop: 'field2',
            label: '字段2'
        },
        {
            prop: 'field3',
            label: '字段3',
            cellRenderer: ({ column, row }) => {
                return <span class="text-red">{row[column.property]}</span>
            }
        }
    ],
    data: Array.from({ length: 20 }, (_, i) => {
        const id = i + 1
        return {
            id,
            field1: `字段1-${id}`,
            field2: `字段2-${id}`,
            field3: `字段3-${id}`
        }
    })
})
</script>

<style lang="scss" scoped></style>
