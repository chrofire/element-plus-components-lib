# BaseDialog

## 基本使用

<Demo1></Demo1>

<<< docs/Feedback/Dialog/Demo1.vue

## useDialog

<Demo2></Demo2>

<<< docs/Feedback/Dialog/Demo2.vue

## createBaseDialog

函数式调用, 会返回实例

<Demo3></Demo3>

<<< docs/Feedback/Dialog/Demo3.vue

## BaseDialogService

弹窗服务, 基于 `createBaseDialog` 实现

屏蔽了 `footerRenderer`

会在 Dialog `onClosed` 的 时候 `销毁组件`

<Demo4></Demo4>

<<< docs/Feedback/Dialog/Demo4.vue
<script setup>
import Demo1 from 'docs/Feedback/Dialog/Demo1.vue'
import Demo2 from 'docs/Feedback/Dialog/Demo2.vue'
import Demo3 from 'docs/Feedback/Dialog/Demo3.vue'
import Demo4 from 'docs/Feedback/Dialog/Demo4.vue'
</script>