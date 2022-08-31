<template>
    <BaseTabs v-bind="info">
        <template #name-1="item">
            <div class="w-100% h-50px flex justify-center items-center">
                <div>Template {{ item.name }}</div>
            </div>
        </template>
    </BaseTabs>
</template>

<script lang="jsx" setup>
import { reactive } from 'vue'
import { BaseTabs } from 'element-plus-components-lib'

const info = reactive({
    ref: value => info.instanceRef = value,
    instanceRef: null,
    modelValue: '',
    'onUpdate:modelValue': value => info.modelValue = value,
    items: Array.from({ length: 5 }, (_, i) => {
        return {
            name: `name-${i + 1}`,
            label: `label-${i + 1}`,
            labelRenderer: item => {
                return `labelRenderer ${item.label}`
            },
            valueRenderer: item => {
                return (
                    <div class="w-100% h-50px flex justify-center items-center">
                        <div>valueRenderer {item.name}</div>
                    </div>
                )
            }
        }
    })
})
</script>

<style lang="scss" scoped></style>
