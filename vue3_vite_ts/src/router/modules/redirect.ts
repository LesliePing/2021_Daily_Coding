import {RouteRecordRaw} from 'vue-router'
import {RouterTransition} from '/@/components/transition'
import {createVNode} from "vue";

const routes: Array<RouteRecordRaw> = [{
    path: '/redirect/:path*',
    name: 'Redirect',
    component: createVNode(RouterTransition),
    meta: {
        title: '重定向',
        icon: 'SettingOutlined',
        hidden: true,
    },
    children: [
        {
            path: '',
            name: 'Redirect',
            component: import('/@/views/shared/redirect/'),
            meta: {
                title: '重定向',
                hidden: true,
            },
        }
    ]
}]

export default routes
