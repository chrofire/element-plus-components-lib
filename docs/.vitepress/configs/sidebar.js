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
    },
    {
        text: 'Form 表单组件',
        collapsible: true,
        collapsed: false,
        items: [
            { text: 'Checkbox 多选框', link: '/Form/Checkbox/index.md' },
            { text: 'Form 表单', link: '/Form/Form/index.md' },
            { text: 'Radio 单选框', link: '/Form/Radio/index.md' },
            { text: 'Select 选择器', link: '/Form/Select/index.md' }
        ]
    },
    {
        text: 'Feedback 反馈组件',
        collapsible: true,
        collapsed: false,
        items: [
            { text: 'Dialog 对话框', link: '/Feedback/Dialog/index.md' }
        ]
    }
]