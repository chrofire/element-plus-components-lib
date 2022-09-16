<template>
    <div class="p-20px w-100% h-100%">
        <div class="w-100% h-500px b-1px b-#000" @contextmenu="handleContextMenu"></div>
    </div>
</template>

<script lang="jsx" setup>
import { h, onBeforeUnmount, onMounted } from 'vue'
import { useContextMenu } from 'element-plus-components-lib'

let contextMenuInstance

onMounted(() => {
    contextMenuInstance = useContextMenu({
        menuList: [
            {
                label: item => h('div', { style: { color: item.select ? `blue` : `red` }}, '菜单1'),
                onClick: ({ item, state, close }) => {
                    // contextMenuInstance.close()
                    close()
                }
            },
            {
                label: () => <div>菜单2</div>,
                onClick: ({ item, state, close }) => {
                    console.log(item, state)
                    close()
                }
            },
            {
                label: '菜单3',
                children: [
                    {
                        label: '菜单3-1'
                    },
                    {
                        label: '菜单3-2',
                        children: [
                            {
                                label: '菜单3-2-1'
                            },
                            {
                                label: '菜单3-2-2'
                            }
                        ]
                    }
                ]
            }
        ]
    })
})

const handleContextMenu = e => {
    contextMenuInstance.open(e)
    // setTimeout(() => {
    //     contextMenuInstance.options.menuList[0].label = 'test'
    // }, 3000)
}

onBeforeUnmount(() => {
    contextMenuInstance?.destroy?.()
})
</script>

<style lang="scss" scoped></style>