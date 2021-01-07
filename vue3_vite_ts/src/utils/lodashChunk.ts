/**
 * 这里按需引入lodash的一些方法,方便维护
 */

//  export  {default as xxx} from 'lodash/xxx'
import {cloneDeep, intersection, get, upperFirst, omit, debounce} from 'lodash'

export {
    cloneDeep, intersection, get, upperFirst, omit, debounce
}

// export { default as cloneDeep } from 'lodash';
// export { default as intersection } from 'lodash/intersection';
// export { default as get } from 'lodash/get';
// export { default as upperFirst } from 'lodash/upperFirst';
// export { default as omit } from 'lodash/omit';
// export { default as debounce } from 'lodash/debounce';
