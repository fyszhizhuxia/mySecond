

<template>
  <a-config-provider :locale="atlocale === 'en' ? enUS : zhCN">
    <div class="app">
      <RouteView />
    </div>
  </a-config-provider>
</template>

<script setup>
import i18n from "@/lang/index.js";
import { ref, watch } from "vue";
import RouteView from "./components/layouts/RouteView.vue";
import enUS from "ant-design-vue/es/locale/en_US";
import zhCN from "ant-design-vue/es/locale/zh_CN";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
const atlocale = ref(i18n.global.locale);
dayjs.locale(atlocale.value);
watch(atlocale, (val) => {
  dayjs.locale(val);
});
</script>

<style scoped lang="less">

@media (min-width: 750px) {
}

</style>
