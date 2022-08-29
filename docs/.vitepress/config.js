import { defineConfig } from 'vitepress'
import { sidebar } from './configs/sidebar'

export default defineConfig({
    title: 'Element Plus Components Lib',
    lang: 'zh-CN',
    lastUpdated: false,
    themeConfig: {
        sidebar,
        outlineTitle: '页面梗概',
        socialLinks: [
            {
                icon: 'github',
                link: 'https://github.com/chrofire/element-plus-components-lib'
            }
        ]
    },
    markdown: {
        lineNumbers: false
    }
})