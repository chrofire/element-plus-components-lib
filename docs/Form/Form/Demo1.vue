<template>
    <BaseForm v-bind="info"></BaseForm>
    <el-button @click="() => BaseFormRef.validate()">校验</el-button>
    <el-button @click="() => BaseFormRef.clearValidate()">清除校验</el-button>
    <el-button @click="() => BaseFormRef.resetFields()">重置表单</el-button>
</template>

<script lang="jsx" setup>
import { ElInputNumber } from 'element-plus'
import { reactive, ref } from 'vue'
import { BaseForm } from 'element-plus-components-lib'

const BaseFormRef = ref(null)

const info = reactive({
    ref: 'BaseFormRef',
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
                component: 'input'
            }
        },
        {
            prop: 'field2',
            label: '字段2',
            defaultRenderer: {
                component: 'checkbox-group',
                props: {
                    options: Array.from({ length: 5 }, (_, i) => {
                        return {
                            label: `label-${i + 1}`
                        }
                    })
                }
            }
        },
        {
            prop: 'field3',
            label: '字段3',
            defaultRenderer: {
                component: 'radio-group',
                props: {
                    options: Array.from({ length: 5 }, (_, i) => {
                        return {
                            label: `label-${i + 1}`
                        }
                    })
                }
            }
        },
        {
            prop: 'field4',
            label: '字段4',
            col: {
                span: 12
            },
            defaultRenderer: {
                component: 'select',
                props: {
                    class: 'w-100%',
                    options: Array.from({ length: 10 }, (_, i) => {
                        return {
                            value: `value-${i + 1}`,
                            label: `label-${i + 1}`
                        }
                    }),
                    clearable: true
                }
            }
        },
        {
            prop: 'field5',
            label: '字段5',
            col: {
                span: 12
            },
            defaultRenderer: ({ formItem, formData }) => {
                return (
                    <ElInputNumber
                        class="w-100%"
                        v-model={formData[formItem.prop]}
                        min={1}
                        max={10}
                    ></ElInputNumber>
                )
            }
        }
    ],
    modelValue: {}
})
</script>

<style lang="scss" scoped></style>
