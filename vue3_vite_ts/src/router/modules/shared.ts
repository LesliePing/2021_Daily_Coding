import {RouteRecordRaw} from 'vue-router'
import {RouterTransition} from '/@/components/transition'
import {defineAsyncComponent} from "vue";

/**
 * 不需要授权就可以访问的页面
 */
const routes: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'login',
        component: defineAsyncComponent(() => import(/* webpackChunkName: "login" */ '/@/views/shared/login/index.vue'))
    },
    {
        path: '/icons',
        name: 'icons',
        component: defineAsyncComponent(() => import(/* webpackChunkName: "icons" */ '/@/views/shared/icons/index.vue'))
    },
]

export default routes
