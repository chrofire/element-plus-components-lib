<template>
    <BaseSelect v-bind="info">
        <template #prefix>template prefix</template>
        <template #empty>template empty</template>
    </BaseSelect>
    <pre>{{ JSON.stringify(info.modelValue, null, 4) }}</pre>
</template>

<script lang="jsx" setup>
import { reactive } from 'vue'
import { BaseSelect } from 'element-plus-components-lib'

const info = reactive({
    modelValue: '',
    'onUpdate:modelValue': value => info.modelValue = value,
    options: [],
    prefixRenderer: () => {
        return <div>renderer prefix</div>
    },
    emptyRenderer: () => {
        return <div class="flex justify-center items-center">renderer empty</div>
    }
})
</script>

<style lang="scss" scoped></style>