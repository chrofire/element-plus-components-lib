# BaseButton

## 控制Loading

`controlLoading` 属性设置为 `true` 时，拦截 `['click', 'dblclick', 'contextmenu']` 三个事件，修改事件参数为 `{ event, toggleLoading }`

<Demo1></Demo1>

<<< docs/Basic/Button/Demo1.vue

<script setup>
import Demo1 from 'docs/Basic/Button/Demo1.vue'
</script>