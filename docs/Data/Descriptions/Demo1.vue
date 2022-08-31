<template>
    <BaseDescriptions v-bind="info">
        <template #title>templateTitle</template>
        <template #extra>templateExtra</template>
    </BaseDescriptions>
</template>

<script lang="jsx" setup>
import { reactive, ref } from 'vue'
import { BaseDescriptions } from 'element-plus-components-lib'

const BaseDescriptionsRef = ref(null)

const info = reactive({
    ref: 'BaseDescriptionsRef',
    border: true,
    title: '标题',
    extra: '操作区',
    items: Array.from({ length: 5 }, (_, i) => {
        return {
            prop: `prop-${i + 1}`,
            label: `label-${i + 1}`,
            value: `value-${i + 1}`
        }
    }),
    titleRenderer: () => {
        return 'titleRenderer'
    },
    extraRenderer: () => {
        return 'extraRenderer'
    }
})
</script>

<style lang="scss" scoped></style>
