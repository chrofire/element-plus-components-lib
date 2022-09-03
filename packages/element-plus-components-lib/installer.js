import {
    BaseButton,
    BaseCheckboxGroup,
    BaseForm,
    BaseRadioGroup,
    BaseSelect,
    BaseDescriptions,
    BasePagination,
    BaseTable,
    BaseTabs,
    BaseDialog,
    BaseRenderer
} from '@element-plus-components-lib/components'

const Components = [
    BaseButton,
    BaseCheckboxGroup,
    BaseForm,
    BaseRadioGroup,
    BaseSelect,
    BaseDescriptions,
    BasePagination,
    BaseTable,
    BaseTabs,
    BaseDialog,
    BaseRenderer
]

export const install = app => {
    Components.forEach(comp => {
        app.use(comp)
    })
}

export default {
    install
}