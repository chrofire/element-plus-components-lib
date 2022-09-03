<template>
    <el-input class="mb-10px" v-model="value"></el-input>
    <BaseEditor v-model="value"></BaseEditor>
    <div>{{ value }}</div>
</template>

<script setup>
import { ref } from 'vue'

const value = ref('')
</script>

<style lang="scss" scoped></style>
