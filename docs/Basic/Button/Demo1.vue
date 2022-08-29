<template>
    <BaseButton :controlLoading="true" @click="handleControlClick">受控制</BaseButton>
    <BaseButton :controlLoading="false" @click="handleClick">不受控制</BaseButton>
</template>

<script setup>
import { BaseButton } from 'element-plus-components-lib'

const handleControlClick = ({ event, toggleLoading }) => {
    event.preventDefault()

    toggleLoading(true)
    setTimeout(() => {
        toggleLoading(false)
    }, 2000)
}

const handleClick = event => {
    console.log(event, `handleClick`)
}
</script>

<style lang="scss" scoped></style>
