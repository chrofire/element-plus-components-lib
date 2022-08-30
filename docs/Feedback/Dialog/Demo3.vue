<template>
    <el-button :disabled="!!instance" @click="genInstance">创建实例</el-button>
    <el-button :disabled="instance === null" @click="instance.setVisible(true)">打开</el-button>
    <el-button :disabled="instance === null" @click="destroy">销毁实例</el-button>
</template>

<script lang="jsx" setup>
import { ElButton } from 'element-plus'
import { shallowRef, unref } from 'vue'
import { createBaseDialog } from 'element-plus-components-lib'

let instance = shallowRef(null)

const genInstance = () => {
    if (unref(instance)) {
        console.warn('已经存在实例')
        return
    }
    instance.value = createBaseDialog({
        title: '标题',
        confirmProps: {
            onClick: () => instance.value.setVisible(false)
        },
        cancelProps: {
            onClick: () => instance.value.setVisible(false)
        },
        // 关闭按钮拦截
        beforeClose: done => {
            done()
        },
        defaultRenderer: () => {
            return (
                <div>
                    <div class="text-cyan">defaultRenderer</div>
                    <ElButton
                        onClick={() => {
                            unref(instance).component.props.title = +new Date()
                        }}
                    >
                        修改 title
                    </ElButton>
                </div>
            )
        }
    })
}

const destroy = () => {
    unref(instance).destroy?.()
    instance.value = null
}
</script>

<style lang="scss" scoped></style>
