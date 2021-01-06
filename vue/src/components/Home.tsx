import { defineComponent, onMounted, reactive, watch } from 'vue';
/************************   新增开始  **************************/
const state = reactive({ count: 0 })
watch(
  () => state.count,
  (count, prevCount) => {
    console.log(count, prevCount);
  }
)
state.count = 3
//-------------------------------------------------------------//
//---- reactive 对象  ref 元素  computed追踪数据，对象，非响应式----//
/************************   新增结束  ***************************/

export default defineComponent({
  name: 'Main',
  props: {
    msg: String
  },
  setup(props) {
    onMounted(() => {
      console.log('组件挂载结束....')
    })

    return () => (
      <div class="hello text-center">
        <img alt="Vue logo" src={require('@/assets/img/logo.png')} />
        <h1>{props.msg}</h1>
        <div class="button mg-t10">
          <el-button>默认按钮</el-button>
          <el-button type="primary">主要按钮</el-button>
          <el-button type="success">成功按钮</el-button>
          <el-button type="info">信息按钮</el-button>
          <el-button type="warning">警告按钮</el-button>
          <el-button type="danger">危险按钮</el-button>
        </div>
      </div>
    )
  }
})