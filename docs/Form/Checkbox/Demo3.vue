<template>
    <BaseCheckboxGroup v-bind="info"></BaseCheckboxGroup>
    <pre>{{ JSON.stringify(info.modelValue, null, 4) }}</pre>
</template>

<script lang="jsx" setup>
import { reactive } from 'vue'
import { BaseCheckboxGroup } from 'element-plus-components-lib'

const info = reactive({
    modelValue: [],
    'onUpdate:modelValue': value => info.modelValue = value,
    // optionType: 'button',
    options: Array.from({ length: 10 }, (_, i) => {
        if (i === 0) {
            return {
                label: `label-${i + 1}`,
                labelRenderer: (option, rawOption) => {
                    return <span class="text-red">{option.label}</span>
                }
            }
        }
        return {
            label: `label-${i + 1}`
        }
    }),
    // option组件 的 props, label 作为 结果值
    optionProps: rawOption => {
        const { label } = rawOption
        return {
            ...rawOption,
            key: label,
            label: `result-${label}`
        }
    },
    // option选项右侧 显示的内容
    labelRenderer: (option, rawOption) => {
        return `renderer-${option.label}`
    }
})
</script>

<style lang="scss" scoped></style>
