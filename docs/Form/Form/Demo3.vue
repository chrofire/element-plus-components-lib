<template>
    <BaseForm @register="registerForm" v-bind="formProps"></BaseForm>
    <!-- useForm 的方法 直接在模板中使用需要加 (), 否则会传入 Event, 导致异常 -->
    <el-button @click="validate()">校验</el-button>
    <el-button @click="clearValidate()">清除校验</el-button>
    <el-button @click="resetFields()">重置表单</el-button>
    <el-button @click="() => console.log(getFormData())">获取表单数据</el-button>
    <el-button @click="setFormData('field3', 'set')">设置表单数据</el-button>
</template>

<script lang="jsx" setup>
import { ElInput } from 'element-plus'
import { h } from 'vue'
import { BaseForm, BaseFormComponentMap, useForm } from 'element-plus-components-lib'

BaseFormComponentMap.set('custom-input', {
    component: ElInput,
    customRenderer: ({ componentInfo, formItem, formData }) => {
        const { defaultRenderer, prop } = formItem
        const { props = {}, slots = {}} = defaultRenderer
        return h(
            componentInfo.component,
            {
                modelValue: formData.value[prop],
                'onUpdate:modelValue': value => formData.value[prop] = value,
                ...props
            },
            {
                prepend: () => {
                    return 'custom'
                },
                ...slots
            }
        )
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
            rules: [
                { required: true, message: '字段1不能为空', trigger: 'blur' },
                { min: 3, message: '字段1长度最短3个字符', trigger: 'blur' },
                { max: 20, message: '字段1长度最长20个字符', trigger: 'blur' }
            ],
            defaultRenderer: {
                component: 'input',
                slots: {
                    prepend: () => 'prepend'
                }
            }
        },
        {
            prop: 'field2',
            label: '字段2',
            defaultRenderer: {}
        },
        {
            prop: 'field3',
            label: '字段3',
            defaultRenderer: {
                component: 'custom-input',
                props: {}
            }
        }
    ],
    modelValue: {}
})
</script>

<style lang="scss" scoped></style>
