<template>
    <BaseTabs v-bind="info"></BaseTabs>
</template>

<script lang="jsx" setup>
import { reactive, ref } from 'vue'
import { BaseTabs } from 'element-plus-components-lib'

const BaseTabsRef = ref(null)

const info = reactive({
    ref: 'BaseTabsRef',
    modelValue: '',
    'onUpdate:modelValue': value => info.modelValue = value,
    items: Array.from({ length: 5 }, (_, i) => {
        return {
            name: `name-${i + 1}`,
            label: `label-${i + 1}`,
            valueRenderer: item => {
                return (
                    <div class="w-100% h-50px flex justify-center items-center">
                        <div>{item.name}</div>
                    </div>
                )
            }
        }
    })
})
</script>

<style lang="scss" scoped></style>
