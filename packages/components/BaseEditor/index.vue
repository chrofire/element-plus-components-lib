<template>
    <div class="editor__wrapper" ref="editorWrapperRef">
        <Toolbar
            class="editor__toolbar"
            :editor="editorRef"
            :defaultConfig="{
                ...defaultToolbarConfig,
                ...toolbarConfig
            }"
            v-bind="toolbarBind"
        />
        <Editor
            class="editor__main"
            :style="{
                // 覆盖默认样式 height: 100%;
                height: `350px`
            }"
            v-model="valueHtml"
            :defaultConfig="{
                ...defaultEditorConfig,
                ...editorConfig
            }"
            @onCreated="handleCreated"
            @onBlur="handleBlur"
            v-bind="editorBind"
        />
    </div>
</template>

<script>
export default {
    name: 'BaseEditor',
    inheritAttrs: false
}
</script>

<script setup>
import '@wangeditor/editor/dist/css/style.css'

import { onBeforeUnmount, shallowRef, computed, ref } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { useFormItem } from 'element-plus'
import { debugWarn } from 'element-plus/es/utils/index'
import { onClickOutside } from '@vueuse/core'

const { formItem } = useFormItem()

const props = defineProps({
    modelValue: {
        type: String
    },
    toolbarConfig: {
        type: Object,
        default: () => ({})
    },
    toolbarBind: {
        type: Object,
        default: () => ({})
    },
    editorConfig: {
        type: Object,
        default: () => ({})
    },
    editorBind: {
        type: Object,
        default: () => ({})
    },
    validateEvent: {
        type: Boolean,
        default: true
    }
})

const emit = defineEmits(['update:modelValue'])

// 编辑器实例
const editorRef = shallowRef()

const editorWrapperRef = ref(null)

// 内容 HTML
const valueHtml = computed({
    get () {
        return props.modelValue
    },
    set (value) {
        // 内容为空
        if (value === '<p><br></p>') {
            emit('update:modelValue', '')
        } else {
            emit('update:modelValue', value)
        }
        if (props.validateEvent) {
            formItem?.validate?.('change').catch(err => debugWarn(err))
        }
    }
})

onClickOutside(editorWrapperRef, () => {
    editorRef.value?.blur()
})

// 记录 editor 实例
const handleCreated = editor => {
    editorRef.value = editor
}

const handleBlur = () => {
    if (props.validateEvent) {
        formItem?.validate?.('blur').catch(err => debugWarn(err))
    }
}

/** @type {import('@wangeditor/editor').IToolbarConfig} */
const defaultToolbarConfig = {}

/** @type {import('@wangeditor/editor').IEditorConfig} */
const defaultEditorConfig = {
    autoFocus: false
}

// 销毁编辑器
onBeforeUnmount(() => {
    editorRef.value?.destroy()
})

defineExpose({
    editorRef
})
</script>

<style lang="scss" scoped>
.editor__wrapper {
    border-radius: var(--el-border-radius-base);
    border: 1px solid var(--el-border-color);
    transition: var(--el-transition-border);
    .editor__toolbar {
        border-bottom: 1px solid var(--el-border-color);
    }
    .editor__main {
        width: 100%;
        overflow-y: auto;
    }
}
</style>