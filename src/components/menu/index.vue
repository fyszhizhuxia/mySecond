<template>
  <div class="menuPanel">
    <template v-if="!isMobile">
      <MenuSubItem />
    </template>
    <template v-else>
      <!-- 移动的头部 -->
      <div class="head flexS">
        <template v-if="!route.meta.hideNav">
          <div class="head-liebiao flexS">
            <i
              class="iconfont icon-caidan1"
              v-if="!isShow"
              @click="isShow = !isShow"
            ></i
            ><i class="iconfont icon-close" v-else @click="isShow = !isShow"></i
            ><span class="font-family-bold">
              {{ $t('routeName["' + route.name + '"]') }}
            </span>
          </div>
          <img :src="getAssetsFile('com/logom.webp')" alt="" class="head-img" />
        </template>
        <template v-else>
          <i class="iconfont icon-fenxiang" @click="toBack"></i>
          <span class="head-name font-family-bold">{{
            $t('routeName["' + route.name + '"]')
          }}</span>
        </template>
      </div>
      <!-- 内容 -->
      <a-drawer
        placement="top"
        height="100%"
        :visible="isShow"
        :closable="false"
        :z-index="1"
      >
        <MenuSubItem @select="selectTab" />
      </a-drawer>
    </template>
  </div>
</template>
<script setup>
import MenuSubItem from "./menuItem.vue";
import { filterRoutes, isMobile, getAssetsFile } from "@/utils";
import { useRoute } from "vue-router";
import i18n from "@/lang/index.js";
import { ref } from "vue";

const _this = i18n.global;
console.log(_this.t("routeName.Account"));
const route = useRoute();
const isShow = ref(false);
// 关闭菜单选项
const selectTab = () => {
  isShow.value = false;
};
const toBack = () => {
  history.back();
};
</script>
<style scoped lang="less">
@media (min-width:750px) {
  .menuPanel{
    background: #fff;
    border-radius: 7PX;
    overflow: hidden;
  }
  .head{
    color: @fontBlack;
    :global(.ant-drawer-body){
        padding: 44px 10px 0;
    }
    &-name{
      font-size: 28px;
      margin-left: 32px;
    }
  }
  
}
@media (max-width:750px){
  .head{
    position: sticky;
    top: 0;
    z-index: 3;
    background: #fff;
    height: 88px;
    align-items: center;
    color: @fontBlack;
    padding: 0 36px;
    border-bottom: 1px solid #eff1f6;
    &-liebiao{
      flex: 1;
      span{
        font-size: 28px;
        margin-left: 32px;
      }
    }
    &-name{
        font-size: 28px;
        margin-left: 32px;
      }
  }
}


</style>