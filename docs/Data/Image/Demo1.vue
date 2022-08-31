<template>
    <el-button @click="preview">预览图片, 关闭时自动销毁</el-button>
</template>

<script setup>
import { BaseImageViewer } from 'element-plus-components-lib'

const genImage = (width = 100, height = 100, bgColor = '#fff') => {
    const canvasEl = document.createElement('canvas')
    canvasEl.width = width
    canvasEl.height = height
    const ctx = canvasEl.getContext('2d')
    ctx.fillStyle = bgColor
    ctx.fillRect(0, 0, canvasEl.width, canvasEl.height)
    return canvasEl.toDataURL('image/png')
}

const preview = () => {
    const instance = BaseImageViewer({
        urlList: [genImage(1000, 500, '#fff')]
    })
    // instance.component.props.hideOnClickModal = true
    // setTimeout(() => {
    //     instance.destroy()
    // }, 5000)
}
</script>

<style lang="scss" scoped></style>
