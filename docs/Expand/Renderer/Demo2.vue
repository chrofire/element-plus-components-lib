<template>
    <BaseRenderer :render="render" :state="state"></BaseRenderer>
    <el-button @click="state.num++">add</el-button>
</template>

<script lang="jsx" setup>
import { reactive } from 'vue'
import { BaseRenderer } from 'element-plus-components-lib'

const state = reactive({
    num: 0
})

const render = ({ state }) => {
    return <div class="text-blue">{`渲染器-${state.num}`}</div>
}
</script>

<style lang="scss" scoped></style>
