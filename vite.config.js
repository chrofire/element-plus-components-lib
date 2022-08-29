import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), vueJsx()],
    resolve: {
        alias: {
            '@element-plus-components-lib': fileURLToPath(new URL('./packages', import.meta.url))
        }
    },
    build: {
        lib: {
            entry: fileURLToPath(
                new URL('./packages/element-plus-components-lib/index.js', import.meta.url)
            ),
            name: 'element-plus-components-lib',
            fileName: 'index'
        },
        rollupOptions: {
            // 外部化处理不打包进库的依赖
            external: ['vue', 'element-plus'],
            output: {
                exports: 'named',
                globals: {
                    vue: 'Vue',
                    'element-plus': 'ElementPlus'
                }
            }
        }
    }
})
