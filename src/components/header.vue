<template>
  <div class="header">
    <!-- PC端 -->

    <div class="head flexB">
      <div class="head-logo"><img src="@/images/com/logo.webp" alt="" /></div>
      <div class="head-lang">
        <a-popover
          v-model:visible="showChangeLang"
          placement="bottomRight"
          trigger="click"
        >
          <div class="head-lang__drop">
            <img
              :src="getAssetsFile('com/' + user.lang + '.svg')"
              alt=""
            /><span>{{ user.lang.toUpperCase() }}</span
            ><i class="iconfont icon-xiangxiajiantou"></i>
          </div>
          <template #content>
            <ul class="choose">
              <li
                v-for="item in langList"
                :key="item.value"
                @click="changeLang(item)"
              >
                <img
                  :src="getAssetsFile('com/' + item.value + '.svg')"
                  alt=""
                />
                <span>{{ item.label }}</span>
              </li>
            </ul>
          </template>
        </a-popover>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { userStore } from "@/store/modules/user";
import { getAssetsFile } from "@/utils";
import i18n from "@/lang/index.js";
const user = userStore();
const locale = ref(i18n.global.locale);
const langList = user.langList;
const showChangeLang = ref(false);
const changeLang = (item) => {
  user.setLang(item.value);
  showChangeLang.value = false;
  localStorage.setItem("lang", item.value);
  locale.value = item.value;
};
</script>
<style lang="less" scoped>
@media (min-width: 750px) {
  .header{
    .head{
      padding: 20PX 0;
      align-items: center;
      &-lang{
        &__drop{
        display: flex;
        align-items: center;
        img,span{
          margin-right: 5PX;
        }
        .icon-xiangxiajiantou{
          font-size: 16PX;
        }
        }
      }
    }
    :global(.ant-popover-inner-content .choose li){
      padding: 10px;
    }
    :global(.ant-popover-inner-content .choose li img){
     margin-right: 10px;
    }
  }
}
@media (max-width: 750px) {
  .header{
    .head{
      height: 96px;
      padding: 0 36px;
      align-items: center;
      color: @fontBlack;
      border-bottom: 1px solid #EFF1F6;
      &-liebiao{
        align-items: center;
        span{
          font-size: 28px;
          margin-left: 32px;
        } 
      }
 
    }
  }
}

</style>