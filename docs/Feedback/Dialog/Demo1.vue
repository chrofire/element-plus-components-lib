<template>
    <el-button @click="() => BaseDialogRef.setVisible(true)">打开</el-button>
    <BaseDialog v-bind="info" ref="BaseDialogRef">
        templateContent
    </BaseDialog>
</template>

<script setup>
import { reactive, ref, unref } from 'vue'
import { BaseDialog } from 'element-plus-components-lib'

const BaseDialogRef = ref(null)

const info = reactive({
    title: '标题',
    confirmProps: {
        onClick: () => unref(BaseDialogRef).setVisible(false)
    },
    cancelProps: {
        onClick: () => unref(BaseDialogRef).setVisible(false)
    }
})
</script>

<style lang="scss" scoped></style>
