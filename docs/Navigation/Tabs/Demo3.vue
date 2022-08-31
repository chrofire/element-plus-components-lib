<template>
    <el-button @click="info.modelValue = 'name-1'">set name-1</el-button>
    <BaseTabs v-bind="info"></BaseTabs>
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
            name: `name-${i}`,
            label: `label-${i}`,
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
