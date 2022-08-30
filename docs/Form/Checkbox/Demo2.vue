<template>
    <BaseCheckboxGroup v-bind="info"></BaseCheckboxGroup>
    <pre>{{ JSON.stringify(info.modelValue, null, 4) }}</pre>
</template>

<script setup>
import { reactive } from 'vue'
import { BaseCheckboxGroup } from 'element-plus-components-lib'

const info = reactive({
    ref: value => info.instanceRef = value,
    instanceRef: null,
    modelValue: [],
    'onUpdate:modelValue': value => info.modelValue = value,
    // optionType: 'button',
    options: Array.from({ length: 10 }, (_, i) => {
        return {
            label: `label-${i + 1}`
        }
    }),
    optionProps: rawOption => {
        const { label } = rawOption
        return {
            ...rawOption,
            key: label,
            label: `custom-${label}`
        }
    }
})
</script>

<style lang="scss" scoped></style>
