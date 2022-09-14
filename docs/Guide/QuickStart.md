# QuickStart

## 安装

```sh
pnpm add element-plus-components-lib
```

## 完整导入

```js
import { createApp } from 'vue'

import ElementPlusComponentsLib from 'element-plus-components-lib'
import 'element-plus-components-lib/dist/es/style.css'

import App from './App.vue'

const app = createApp(App)
app.use(ElementPlusComponentsLib)
app.mount('#app')
```

## 按需导入

```js
import { BaseForm, useForm } from 'element-plus-components-lib'
import 'element-plus-components-lib/dist/es/style.css'
```