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
            // umd | iife, 挂载到 window 上的属性名
            name: 'ElementPlusComponentsLib',
            // 入口
            entry: fileURLToPath(
                new URL('./packages/element-plus-components-lib/index.js', import.meta.url)
            )
        },
        rollupOptions: {
            // 作为外部依赖, 不打包
            external: ['vue', 'element-plus'],
            output: [
                {
                    format: 'es',
                    // 输出文件名
                    entryFileNames: '[name].js',
                    // 输出目录
                    dir: fileURLToPath(new URL('./dist/es', import.meta.url)),
                    // 保持模块结构
                    preserveModules: true
                },
                {
                    format: 'cjs',
                    entryFileNames: '[name].js',
                    dir: fileURLToPath(new URL('./dist/lib', import.meta.url)),
                    preserveModules: true,
                    exports: 'named'
                }
            ]
        }
    }
})
