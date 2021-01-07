<template>
  <ConfigProvider v-bind="lockEvent" :locale="antConfigLocale">
    <AppProvider>
      <router-view />
    </AppProvider>
  </ConfigProvider>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ConfigProvider } from 'ant-design-vue'
import { AppProvider } from '/@/components/Application'

export default defineComponent({
  name: 'App',
  components: { ConfigProvider, AppProvider },
  setup() {
    return {}
  }
})
</script>
