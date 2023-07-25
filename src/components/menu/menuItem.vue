

<template>
  <div class="menu">
    <!-- 菜单 -->
    <a-menu
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      @select="select"
      style="width: 100%"
      mode="inline"
      :inlineIndent="4"
      @click="handleClick"
    >
      <template v-for="item in filteredRoutes">
        <!-- home单独处理 -->
        <a-menu-item
          v-if="item.name == 'Home'"
          :key="item.children[0].name"
          class="first"
        >
          <template #icon>
            <i class="iconfont" :class="item.meta.icon"></i>
          </template>
          <template #expandIcon>
            <i class="iconfont icon-a-Property1xia"></i>
          </template>
          <RouterLink :to="{ name: item.children[0].name }" :exact="true">
            {{ $t('routeName["' + item.children[0].name + '"]') }}
          </RouterLink>
        </a-menu-item>
        <!-- 有子菜单 -->
        <a-sub-menu v-else :key="item.name">
          <template #icon>
            <i class="iconfont" :class="item.meta.icon"></i>
          </template>
          <template #title>
            <span :title="$t('routeName.' + item.name)">{{
              $t('routeName["' + item.name + '"]')
            }}</span>
          </template>
          <a-menu-item
            v-for="child in item.children"
            :key="child.name"
            :title="$t('routeName.' + child.name)"
          >
            <RouterLink
              :to="{ name: routeNameHandle(item, child) }"
              :exact="true"
            >
              &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;{{
                $t('routeName["' + child.name + '"]')
              }}
            </RouterLink>
          </a-menu-item>
        </a-sub-menu>
      </template>
    </a-menu>
  </div>
</template>
  <script setup>
import { ref, reactive, watch, computed, watchEffect } from "vue";
import { filterRoutes, isMobile } from "@/utils";
import { userStore } from "@/store/modules/user";
import { useRouter, useRoute } from "vue-router";
const emit = defineEmits(["select"]);
const router = useRouter(); //路由跳转,所有路由的信息
const route = useRoute(); //路由参数,当前路由信息
const routers = reactive(router.options.routes);
const userSto = userStore();
const openKeys = ref([]);
const select = (value) => {
  emit("select", value);
};
const handleClick = (e) => {
  // console.log("click", e);
};
const titleClick = (e) => {
  // console.log("titleClick", e);
};

const routeNameHandle = (item, child) => {
  let routeName = child.name;
  if (isMobile) {
    // 移动端特殊处理
    if (item.name == "Info") {
      routeName = item.name;
    }
  } else {
    if (child.name == "Info" && route.name.includes("Info")) {
      //当前页面不用跳转
      routeName = route.name;
    }
  }
  return routeName;
};

watch(openKeys, (val) => {
  // console.log("openKeys", val);
});
const selectedKeys = ref([route.name]);

// 过滤路由
const filteredRoutes = computed(() => {
  return filterRoutes(routers, userSto.roleCode);
});

openKeys.value = filteredRoutes.value
  .filter((item) => item.name != "Home")
  .map((item) => item.name);
</script>
<style scoped lang="less">
  :global(.ant-menu-inline){
    border-right: none;
  }
  @media (min-width: 750px) {
    .menu{
      position: relative;
      width: 230PX;
    }
    
  }
  @media (max-width: 750px) {
    .menu{
      :global(.ant-menu-inline .ant-menu-item::after){
        display: none;
      }
      :global(.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected){
        background: #fff;
      }
      padding-top: 50px;
    }
    
  }

  
  </style>
  