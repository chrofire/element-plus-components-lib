<template>
    <BaseSelect v-bind="info"></BaseSelect>
    <pre>{{ JSON.stringify(info.modelValue, null, 4) }}</pre>
</template>

<script setup>
import { reactive } from 'vue'
import { BaseSelect } from 'element-plus-components-lib'

const info = reactive({
    ref: value => info.instanceRef = value,
    instanceRef: null,
    modelValue: '',
    'onUpdate:modelValue': value => info.modelValue = value,
    options: Array.from({ length: 10 }, (_, i) => {
        return {
            label: `group-${i + 1}`,
            disabled: i + 1 > 5 ? true : false,
            children: Array.from({ length: 10 }, (_, j) => {
                return {
                    value: `group-${i + 1}-value-${j + 1}`,
                    label: `group-${i + 1}-label-${j + 1}`
                }
            })
        }
    }),
    clearable: true
})
</script>

<style lang="scss" scoped></style>