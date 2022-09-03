<template>
    <BaseForm @register="registerForm" v-bind="formProps"></BaseForm>
    <!-- useForm 的方法 直接在模板中使用需要加 (), 否则会传入 Event, 导致异常 -->
    <el-button @click="validate()">校验</el-button>
    <el-button @click="clearValidate()">清除校验</el-button>
    <el-button @click="resetFields()">重置表单</el-button>
    <el-button @click="() => console.log(getFormData())">获取表单数据</el-button>
    <el-button @click="setFormData('field1', 'set')">设置表单数据</el-button>
</template>

<script lang="jsx" setup>
import { h } from 'vue'
import { BaseForm, BaseFormComponentMap, useForm } from 'element-plus-components-lib'

BaseFormComponentMap.set('editor', {
    component: BaseEditor,
    customRenderer: ({ componentInfo, formItem, formData }) => {
        const { defaultRenderer, prop } = formItem
        const { props = {}} = defaultRenderer
        return h(componentInfo.component, {
            // 设置 expose
            ref: expose => (formItem.defaultRenderer.expose = expose),
            modelValue: formData.value[prop],
            'onUpdate:modelValue': value => (formData.value[prop] = value),
            ...props
        })
    }
})

const [
    registerForm,
    { componentProps: formProps, getFormData, setFormData, validate, resetFields, clearValidate }
] = useForm({
    labelWidth: '90px',
    items: [
        {
            prop: 'field1',
            label: '字段1',
            defaultRenderer: {
                component: 'editor',
                props: {
                    editorConfig: {
                        placeholder: '请输入内容'
                    },
                    editorBind: {
                        style: {
                            height: `500px`
                        }
                    }
                }
            },
            rules: [
                { required: true, message: '字段1不能为空', trigger: 'blur' },
                {
                    min: 5,
                    message: '字段1长度最短5个字符',
                    trigger: 'blur',
                    validator: (rule, value, callback) => {
                        const editor = formProps.items.find(item => item.prop === rule.field)
                            .defaultRenderer?.expose?.editorRef

                        const text = editor.getText()

                        if (text.length < rule.min) {
                            callback(new Error(rule.message))
                        } else {
                            callback()
                        }
                    }
                }
            ]
        }
    ],
    modelValue: {
        // 编辑器需要设置初始值, 不能为 undefined
        field1: ''
    }
})
</script>

<style lang="scss" scoped></style>