<template>
    <BasePagination v-bind="info">
        <div>template slot</div>
    </BasePagination>
    <pre>{{ JSON.stringify(info.pagination, null, 4) }}</pre>
</template>

<script lang="jsx" setup>
import { reactive } from 'vue'
import { BasePagination } from 'element-plus-components-lib'

const info = reactive({
    ref: value => info.instanceRef = value,
    instanceRef: null,
    pagination: {
        pageNum: 1,
        pageSize: 10,
        total: 50
    },
    layout: `total, sizes, prev, pager, next, slot`,
    defaultRenderer: () => {
        return 'defaultRenderer'
    }
})
</script>

<style lang="scss" scoped></style>
