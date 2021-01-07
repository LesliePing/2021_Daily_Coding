// const path = require('path')
//
// /********************************自动导包 start********************************/
// const file = require.context('./', true, /\.ts/);
// const modules = {};
// file.keys().forEach((key) => {
//     const name = path.basename(key, '.ts');
//     modules[name] = file(key).default || file(key);
// });
// /********************************自动导包 end********************************/
//
// export default modules
import AsyncRouter from './async-router'
import lockscreen from './lockscreen'
import TabsView from './tabs-view'
import menus from './menus'
import user from './user'

export default {
    'async-router': AsyncRouter,
    'tabs-view': TabsView,
    lockscreen,menus,user
}
