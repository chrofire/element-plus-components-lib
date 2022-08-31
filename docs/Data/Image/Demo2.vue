<template>
    <el-button :disabled="!!instance" @click="genInstance">创建实例</el-button>
    <el-button :disabled="instance === null" @click="open">打开</el-button>
    <el-button :disabled="instance === null" @click="destroy">销毁实例</el-button>
</template>

<script setup>
import { shallowRef, unref } from 'vue'
import { createBaseImageViewer } from 'element-plus-components-lib'

const genImage = (width = 100, height = 100, bgColor = '#fff') => {
    const canvasEl = document.createElement('canvas')
    canvasEl.width = width
    canvasEl.height = height
    const ctx = canvasEl.getContext('2d')
    ctx.fillStyle = bgColor
    ctx.fillRect(0, 0, canvasEl.width, canvasEl.height)
    return canvasEl.toDataURL('image/png')
}

let instance = shallowRef(null)

const genInstance = () => {
    instance.value = createBaseImageViewer({
        urlList: [genImage(1000, 500, '#fff')]
    })

    // instance.value = createBaseImageViewer()
    // unref(instance).props = {
    //     urlList: [genImage(1000, 500, '#fff')]
    // }
}

const open = () => {
    unref(instance).setVisible(true)
    setTimeout(() => {
        unref(instance).props.urlList = [genImage(1000, 500, '#000')]
    }, 1000)
}

const destroy = () => {
    unref(instance).destroy?.()
    instance.value = null
}
</script>

<style lang="scss" scoped></style>
