import {RouterView} from 'vue-router'
import {createVNode, defineAsyncComponent} from "vue";
import {RouterTransition} from "/@/components/transition";
import {Spin} from 'ant-design-vue'

// 异步加载组件
const asyncComponent = (path: string) => new Promise((resolve) => resolve(defineAsyncComponent({
    loader: () => import(path),
    errorComponent: createVNode('h2',{}, path + ' loading error！'),
    loadingComponent: Spin,
})))

export const constantRouterComponents = {
    '/system': createVNode(RouterTransition), // 系统管理
    '/system/access': asyncComponent("/@/views/auth/system/access/index.vue"), // 资源管理
    // '/system/access': defineAsyncComponent(() => import('/@/views/auth/system/access/index.vue')), // 资源管理
    '/system/account': asyncComponent('/@/views/auth/system/account/index.vue'), // 账号管理
    '/system/dict': asyncComponent('/@/views/auth/system/dict/index.vue'), // 字典管理
    '/system/role': asyncComponent('/@/views/auth/system/role/index.vue'), // 角色管理
    // '/system/role': asyncComponent('/@/views/auth/system/role/index.vue'), // 角色管理
}
