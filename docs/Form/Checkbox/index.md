# BaseCheckboxGroup

## 基本使用

<Demo1></Demo1>

<<< docs/Form/Checkbox/Demo1.vue

## optionProps

`optionProps` 用于 转换 传入的 `options`, 转换后的内容作为 `ElCheckbox` / `ElCheckboxButton` 组件的 `props`

<Demo2></Demo2>

<<< docs/Form/Checkbox/Demo2.vue

## 插槽

::: tip 优先级
`rawOption.labelRenderer` > `props.labelRenderer` > `label slot` > 转换后的 `option.label`
:::

<Demo3></Demo3>

<<< docs/Form/Checkbox/Demo3.vue

## Template 插槽

<Demo4></Demo4>

<<< docs/Form/Checkbox/Demo4.vue

<script setup>
import Demo1 from 'docs/Form/Checkbox/Demo1.vue'
import Demo2 from 'docs/Form/Checkbox/Demo2.vue'
import Demo3 from 'docs/Form/Checkbox/Demo3.vue'
import Demo4 from 'docs/Form/Checkbox/Demo4.vue'
</script>