<template>
  <slot />
</template>
<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent, toRefs, ref } from 'vue'
export default defineComponent({
  name: 'AppProvider',
  inheritAttrs: false,
  props: {
    prefixCls: {
      type: String as PropType<string>
    }
  },
  setup(props) {
    const isMobileRef = ref(false)
    const { prefixCls } = toRefs(props)
    return {}
  }
})
</script>
