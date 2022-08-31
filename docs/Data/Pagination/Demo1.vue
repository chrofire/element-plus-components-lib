<template>
    <BasePagination v-bind="info"></BasePagination>
    <pre>{{ JSON.stringify(info.pagination, null, 4) }}</pre>
</template>

<script lang="jsx" setup>
import { reactive, ref } from 'vue'
import { BasePagination } from 'element-plus-components-lib'

const BasePaginationRef = ref(null)

const info = reactive({
    ref: 'BasePaginationRef',
    pagination: {
        pageNum: 1,
        pageSize: 10,
        total: 50
    },
    onChange (params) {
        console.log(params)
    }
})
</script>

<style lang="scss" scoped></style>
