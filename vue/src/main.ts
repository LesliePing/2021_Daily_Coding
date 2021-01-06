import { createApp } from 'vue'
import App from './App'
import store from './store'
import Element from './plugins/element'

import '@/assets/css/base.css'

createApp(App).use(store).use(Element).mount('#app')

/**
 * import { createApp } from 'vue'  // vue创建实例方法
 * import App from './App'          // 导入入口文件
 * createApp(App).mount('#app')     // 入口文件挂载到根节点上
 */
