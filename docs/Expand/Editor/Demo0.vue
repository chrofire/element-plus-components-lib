<template>
    <el-input class="mb-10px" v-model="value"></el-input>
    <BaseEditor v-if="BaseEditor" v-model="value"></BaseEditor>
    <div>{{ value }}</div>
</template>

<script lang="jsx" setup>
import { onBeforeMount, ref, shallowRef } from 'vue'

// SSR
let BaseEditor = shallowRef(null)
onBeforeMount(async () => {
    const module = (await import('@element-plus-components-lib/components/BaseEditor')).BaseEditor
    BaseEditor.value = module
})
const value = ref('')
</script>

<style lang="scss" scoped></style>
