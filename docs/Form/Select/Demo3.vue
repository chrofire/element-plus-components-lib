<template>
    <BaseSelect v-bind="info"></BaseSelect>
    <pre>{{ JSON.stringify(info.modelValue, null, 4) }}</pre>
</template>

<script setup>
import { reactive } from 'vue'
import { BaseSelect } from 'element-plus-components-lib'

const info = reactive({
    modelValue: '',
    'onUpdate:modelValue': value => info.modelValue = value,
    options: Array.from({ length: 10 }, (_, i) => {
        return {
            value: `value-${i + 1}`,
            label: `label-${i + 1}`
        }
    }),
    // 自定义 Option组件 的 props
    // optionProps: rawOption => {
    //     const { value, label, ...args } = rawOption
    //     // 绑定对象时 value 需要传入一个对象
    //     // 并且 传入 value-key 作为 对象 的 keyName
    //     return {
    //         key: value,
    //         // rawOption 作为 绑定的 值
    //         value: rawOption,
    //         // label 作为 显示在 select输入框 中的内容
    //         label
    //     }
    // },
    // 设置 bindObject 为 true 会启用绑定对象, 将整个 option 对象 作为 value 绑定
    bindObject: true,
    // valueKey 默认是 value, 作为 绑定的对象 的 key
    valueKey: 'value',
    // 对象 清空 会变成 空字符串
    clearable: true
})
</script>

<style lang="scss" scoped></style>