# BaseImage

## BaseImageViewer

函数式调用, 关闭时会销毁组件

可以在组件未销毁前修改 `vnode`

<Demo1></Demo1>

<<< docs/Data/Image/Demo1.vue

## createBaseImageViewer

函数式调用, 会保存 `props` 的状态

<Demo2></Demo2>

<<< docs/Data/Image/Demo2.vue
<script setup>
import Demo1 from 'docs/Data/Image/Demo1.vue'
import Demo2 from 'docs/Data/Image/Demo2.vue'
</script>