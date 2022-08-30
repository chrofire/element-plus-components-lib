<template>
    <BaseSelect v-bind="info"></BaseSelect>
    <pre>{{ JSON.stringify(info.modelValue, null, 4) }}</pre>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { BaseSelect } from 'element-plus-components-lib'

const BaseSelectRef = ref(null)

const info = reactive({
    ref: 'BaseSelectRef',
    modelValue: '',
    'onUpdate:modelValue': value => info.modelValue = value,
    options: Array.from({ length: 10 }, (_, i) => {
        return {
            value: `value-${i + 1}`,
            label: `label-${i + 1}`
        }
    }),
    clearable: true
})
</script>

<style lang="scss" scoped></style>