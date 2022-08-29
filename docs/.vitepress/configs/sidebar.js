/** @type {import('vitepress').DefaultTheme.Sidebar} */
export const sidebar = [
    {
        text: 'Guide 指南',
        // 是否 允许折叠
        collapsible: true,
        // 是否 默认折叠
        collapsed: false,
        items: [{ text: 'QuickStart 快速开始', link: '/Guide/QuickStart.md' }]
    },
    {
        text: 'Basic 基础组件',
        collapsible: true,
        collapsed: false,
        items: [{ text: 'Button 按钮', link: '/Basic/Button/index.md' }]
    }
]