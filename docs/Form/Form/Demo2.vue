<template>
    <BaseForm @register="registerForm" v-bind="formProps"></BaseForm>
    <!-- useForm 的方法 直接在模板中使用需要加 (), 否则会传入 Event, 导致异常 -->
    <el-button @click="validate()">校验</el-button>
    <el-button @click="clearValidate()">清除校验</el-button>
    <el-button @click="resetFields()">重置表单</el-button>
    <el-button @click="() => console.log(getFormData())">获取表单数据</el-button>
    <el-button @click="setFormData('field6', 'value-0-0-0')">设置表单数据</el-button>
    <el-button
        @click="
            () =>
                console.log(
                    formProps.items.find(item => item.prop === 'field6').defaultRenderer.instanceRef
                )
        "
    >
        表单项组件实例
    </el-button>
</template>

<script lang="jsx" setup>
import { ElInputNumber } from 'element-plus'
import { BaseForm, useForm } from 'element-plus-components-lib'

const genTreeData = (level = 3, length = 10) => {
    const genData = (parentData, index) => {
        return {
            value: `${parentData.value}-${index}`,
            label: `${parentData.label}-${index}`
        }
    }
    const genList = (parentData, count) => {
        count++
        return Array.from({ length }, (_, i) => {
            const data = genData(parentData, i)
            return {
                ...data,
                children: count > level ? [] : genList(data, count)
            }
        })
    }
    return genList({ value: `value`, label: `label` }, 1)
}

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
        },
        {
            prop: 'field6',
            label: '字段6',
            col: {
                span: 12
            },
            defaultRenderer: {
                component: 'tree-select',
                props: {
                    ref: expose =>
                        (formProps.items.find(
                            item => item.prop === 'field6'
                        ).defaultRenderer.instanceRef = expose),
                    class: 'w-100%',
                    data: genTreeData(3, 10),
                    clearable: true
                }
            }
        }
    ],
    modelValue: {}
})
</script>

<style lang="scss" scoped></style>
