import {
    ElAutocomplete,
    ElCascader,
    ElColorPicker,
    ElDatePicker,
    ElInput,
    ElInputNumber,
    ElRate,
    ElSlider,
    ElSwitch,
    ElTimePicker,
    ElTimeSelect,
    ElTreeSelect
} from 'element-plus'

import BaseCheckboxGroup from '@element-plus-components-lib/components/BaseCheckboxGroup/index.vue'
import BaseRadioGroup from '@element-plus-components-lib/components/BaseRadioGroup/index.vue'
import BaseSelect from '@element-plus-components-lib/components/BaseSelect/index.vue'

export const BaseFormComponentMap = new Map()

BaseFormComponentMap.set('autocomplete', {
    component: ElAutocomplete
})
BaseFormComponentMap.set('cascader', {
    component: ElCascader
})
BaseFormComponentMap.set('checkbox-group', {
    component: BaseCheckboxGroup
})
BaseFormComponentMap.set('color-picker', {
    component: ElColorPicker
})
BaseFormComponentMap.set('date-picker', {
    component: ElDatePicker
})
BaseFormComponentMap.set('input', {
    component: ElInput
})
BaseFormComponentMap.set('input-number', {
    component: ElInputNumber
})
BaseFormComponentMap.set('radio-group', {
    component: BaseRadioGroup
})
BaseFormComponentMap.set('rate', {
    component: ElRate
})
BaseFormComponentMap.set('select', {
    component: BaseSelect
})
BaseFormComponentMap.set('slider', {
    component: ElSlider
})
BaseFormComponentMap.set('switch', {
    component: ElSwitch
})
BaseFormComponentMap.set('time-picker', {
    component: ElTimePicker
})
BaseFormComponentMap.set('time-select', {
    component: ElTimeSelect
})
BaseFormComponentMap.set('tree-select', {
    component: ElTreeSelect
})
