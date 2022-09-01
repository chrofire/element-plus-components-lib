<template>
    <BaseRenderer :render="render" :state="state"></BaseRenderer>
    <el-button @click="state.num++">add</el-button>
</template>

<script setup>
import { createVNode, h, reactive } from 'vue'
import { BaseRenderer } from 'element-plus-components-lib'

const state = reactive({
    num: 0
})

const render = ({ state }) => {
    return h('div', { class: 'text-red' }, `渲染器-${state.num}`)
    // return createVNode('div', { class: 'text-red' }, `渲染器-${state.num}`)
}
</script>

<style lang="scss" scoped></style>