<template>
    <BaseRadioGroup v-bind="info">
        <template #label="{ option }">{{ `template-${option.label}` }}</template>
    </BaseRadioGroup>
    <pre>{{ JSON.stringify(info.modelValue, null, 4) }}</pre>
</template>

<script setup>
import { reactive } from 'vue'
import { BaseRadioGroup } from 'element-plus-components-lib'

const info = reactive({
    modelValue: '',
    'onUpdate:modelValue': value => info.modelValue = value,
    optionType: 'button',
    options: Array.from({ length: 10 }, (_, i) => {
        return {
            label: `label-${i + 1}`
        }
    })
})
</script>

<style lang="scss" scoped></style>
