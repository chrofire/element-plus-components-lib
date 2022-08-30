<template>
    <el-button @click="open">打开</el-button>
</template>

<script lang="jsx" setup>
import { BaseDialogService } from 'element-plus-components-lib'

const open = () => {
    BaseDialogService({
        title: '标题',
        defaultRenderer: () => {
            return (
                <div>
                    <div class="text-cyan">defaultRenderer</div>
                </div>
            )
        }
    })
}
</script>

<style lang="scss" scoped></style>
