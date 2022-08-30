<template>
    <BaseSelect v-bind="info">
        <template #label="{ option }">{{ `template-${option.label}` }}</template>
    </BaseSelect>
    <pre>{{ JSON.stringify(info.modelValue, null, 4) }}</pre>
</template>

<script lang="jsx" setup>
import { h, reactive } from 'vue'
import { BaseSelect } from 'element-plus-components-lib'

const info = reactive({
    modelValue: '',
    'onUpdate:modelValue': value => info.modelValue = value,
    options: Array.from({ length: 10 }, (_, i) => {
        return {
            label: `group-${i + 1}`,
            children: Array.from({ length: 10 }, (_, j) => {
                const option = {
                    value: `group-${i + 1}-value-${j + 1}`,
                    label: `group-${i + 1}-label-${j + 1}`
                }
                if (i === 0 && j === 0) {
                    return Object.assign(option, {
                        labelRenderer: (option, rawOption) => {
                            return <span class="text-red">{option.label}</span>
                        }
                    })
                }
                return option
            })
        }
    }),
    groupProps: props => {
        const { label, children, ...args } = props
        return {
            key: label,
            label: `custom-${label}`,
            ...args
        }
    },
    optionProps: rawOption => {
        const { value, label, ...args } = rawOption
        return {
            key: value,
            value: `custom-${value}`,
            // select 的 input 框 显示的是这里的 label
            // 下拉框 显示的内容 是 labelRenderer 返回的 内容
            label: `custom-${label}`,
            ...args
        }
    },
    labelRenderer: (option, rawOption) => {
        // return h('span', { style: { color: 'blue' }}, option.label)
        return h('span', { style: { color: 'blue' }}, rawOption.label)
    },
    clearable: true
})
</script>

<style lang="scss" scoped></style>