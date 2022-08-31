<template>
    <BaseDescriptions v-bind="info">
        <template #prop-1Label="item">
            <div>labelTemplate {{ item.label }}</div>
        </template>
        <template #prop-1="item">
            <div>valueTemplate {{ item.value }}</div>
        </template>
    </BaseDescriptions>
</template>

<script lang="jsx" setup>
import { reactive } from 'vue'
import { BaseDescriptions } from 'element-plus-components-lib'

const info = reactive({
    ref: value => info.instanceRef = value,
    instanceRef: null,
    border: true,
    items: Array.from({ length: 5 }, (_, i) => {
        return {
            // 作为 插槽名
            prop: `prop-${i + 1}`,
            label: `label-${i + 1}`,
            value: `value-${i + 1}`,
            labelRenderer: item => {
                return <div>labelRenderer {item.label}</div>
            },
            valueRenderer: item => {
                return <div>valueRenderer {item.value}</div>
            }
        }
    })
})
</script>

<style lang="scss" scoped></style>
