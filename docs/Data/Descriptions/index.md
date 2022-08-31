# BaseDescriptions

## 基本使用 & 顶部插槽

::: tip title & extra
优先级: `Renderer` > `Template 插槽` > `props`
:::

<div class="vp-raw overflow-auto">
    <Demo1></Demo1>
</div>

<<< docs/Data/Descriptions/Demo1.vue

## 插槽

::: tip 优先级
`item.valueRenderer` > `[item.prop]`插槽 > `item.value`

`item.labelRenderer` > `[${item.prop}Label]`插槽 > `item.label`
:::

<div class="vp-raw overflow-auto">
    <Demo2></Demo2>
</div>

<<< docs/Data/Descriptions/Demo2.vue
<script setup>
import Demo1 from 'docs/Data/Descriptions/Demo1.vue'
import Demo2 from 'docs/Data/Descriptions/Demo2.vue'
</script>