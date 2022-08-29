import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import { presetMini } from 'unocss'
import Unocss from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import postcssPrefixSelector from 'postcss-prefix-selector'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vueJsx(),
        Unocss({
            presets: [presetMini()]
        }),
        AutoImport({
            resolvers: [
                ElementPlusResolver({
                    importStyle: false
                })
            ]
        }),
        Components({
            resolvers: [
                ElementPlusResolver({
                    importStyle: false
                })
            ]
        })
    ],
    resolve: {
        alias: {}
    },
    ssr: {
        noExternal: ['element-plus']
    },
    css: {
        postcss: {
            plugins: [
                // .vp-raw 类名下的内容 不受 默认 vp-doc.css 样式 影响
                postcssPrefixSelector({
                    prefix: ':not(:where(.vp-raw *))',
                    includeFiles: [/vp-doc\.css/],
                    transform (prefix, _selector) {
                        const [selector, pseudo = ''] = _selector.split(/(:\S*)$/)
                        return selector + prefix + pseudo
                    }
                })
            ]
        }
    }
})
