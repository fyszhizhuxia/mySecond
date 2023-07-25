<template>
  <div class="info">
    <template v-if="!isMobile">
      <a-tabs v-model:activeKey="activeKey" @change="tabchange">
        <a-tab-pane
          v-for="item in acRouterList"
          :key="item.key"
          :tab="$t('routeName.' + item.key)"
        >
          <router-view /> </a-tab-pane
      ></a-tabs>
    </template>
    <template v-else>
      <ul class="info-nav" v-if="route.name == 'Info'">
        <li
          v-for="item in acRouterList"
          @click="tabchange(item.key)"
          class="flexS"
          :key="item.key"
        >
          <i class="iconfont" :class="item.icon"></i>
          <span>{{ $t("routeName." + item.key) }}</span>
        </li>
      </ul>
      <router-view v-else></router-view>
    </template>
  </div>
</template>
<script setup>
import { isMobile } from "@/utils";
import { useRoute, useRouter } from "vue-router";
import { ref, reactive, watch } from "vue";
const route = useRoute();
const router = useRouter();
const acRouterList = reactive([
  { key: "Account_Info1", icon: "icon-geren" },
  { key: "Account_Info2", icon: "icon-shenfen" },
]);
const tabchange = (key) => {
  router.push({ name: key });
};
let activeKey = ref(route.name);
watch(
  () => route.path,
  (newVal) => {
    if (newVal) {
      if (route.path.includes("1")) {
        activeKey.value = acRouterList[0].key;
        router.push({ name: acRouterList[0].key });
      }
    }
  }
);
const initRoute = () => {
  // pc端重定向一级子菜单
  if (!isMobile && route.name == "Info") {
    activeKey.value = acRouterList[0].key;
    router.push({ name: acRouterList[0].key });
  }
};
initRoute();
</script>
<style scoped lang="less">
@media (max-width:750px) {
  .info{
    &-nav{
      color: @fontBlack;
      li{
        height: 136px;
        align-items: center;
        padding: 0 40px;
        border-bottom: 1px solid #EFF1F6;
        .iconfont{
          font-size: 40px;
        }
        span{
          font-size: 28px;
          margin-left: 32px;
   
        }
      }
    }
  }
}

</style>