# BaseSelect

## 基本使用

<Demo1></Demo1>

<<< docs/Form/Select/Demo1.vue

## 分组

`options` 第一层 传入了 `children` 数组 会开启 分组

<Demo2></Demo2>

<<< docs/Form/Select/Demo2.vue

## 绑定对象

设置 `bindObject` 为 `true` 会启用绑定对象, 将整个 `option` 对象 作为 `value` 绑定

<Demo3></Demo3>

<<< docs/Form/Select/Demo3.vue

## prefix 插槽 / empty 插槽

::: tip 优先级
`Renderer` > `Template 插槽`
:::

<Demo4></Demo4>

<<< docs/Form/Select/Demo4.vue

## label 插槽

::: tip 优先级
`rawOption.labelRenderer` > `props.labelRenderer` > `label slot` > 转换后的 `option.label`
:::

<Demo5></Demo5>

<<< docs/Form/Select/Demo5.vue

<script setup>
import Demo1 from 'docs/Form/Select/Demo1.vue'
import Demo2 from 'docs/Form/Select/Demo2.vue'
import Demo3 from 'docs/Form/Select/Demo3.vue'
import Demo4 from 'docs/Form/Select/Demo4.vue'
import Demo5 from 'docs/Form/Select/Demo5.vue'
</script>