<template>
    <el-button @click="setVisible(true)">打开</el-button>
    <BaseDialog @register="registerDialog" v-bind="dialogProps"></BaseDialog>
</template>

<script lang="jsx" setup>
import { ElButton } from 'element-plus'
import { BaseDialog, useDialog } from 'element-plus-components-lib'

const [registerDialog, { componentProps: dialogProps, setVisible }] = useDialog({
    title: '标题',
    confirmProps: {
        onClick: () => setVisible(false)
    },
    cancelProps: {
        onClick: () => setVisible(false)
    },
    // 关闭按钮拦截
    beforeClose: done => {
        done()
    },
    // headerRenderer: () => {
    //     return <div class="text-gray">headerRenderer</div>
    // },
    defaultRenderer: () => {
        return (
            <div>
                <div class="text-red">defaultRenderer</div>
                <ElButton
                    onClick={() => {
                        dialogProps.title = +new Date()
                    }}
                >
                    修改 title
                </ElButton>
            </div>
        )
    }
})
</script>

<style lang="scss" scoped></style>
