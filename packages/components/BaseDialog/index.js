import { withInstall } from '@element-plus-components-lib/utils'
import Component from './index.vue'

export const BaseDialog = withInstall(Component)

export default Component

export * from './useDialog'
export * from './createBaseDialog'