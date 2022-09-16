<template>
    <div class="p-20px w-100% h-100%">
        <div class="w-100% h-500px b-1px b-#000" @contextmenu="handleContextMenu"></div>
        <teleport to="body">
            <BaseContextMenu ref="BaseContextMenuRef" :menuList="menuList"></BaseContextMenu>
        </teleport>
    </div>
</template>

<script lang="jsx" setup>
import { h, onBeforeUnmount, reactive, ref, unref } from 'vue'
import { BaseContextMenu } from 'element-plus-components-lib'

const BaseContextMenuRef = ref(null)

const menuList = reactive([
    {
        label: item => h('div', { style: { color: item.select ? `blue` : `red` }}, '菜单1'),
        onClick: ({ item, state, close }) => {
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
])

const handleContextMenu = e => {
    unref(BaseContextMenuRef).open(e)
}

onBeforeUnmount(() => {
    unref(BaseContextMenuRef)?.destroy?.()
})
</script>

<style lang="scss" scoped></style>