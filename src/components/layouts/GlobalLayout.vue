<template>
  <div class="layout">
    <Header v-if="!isMobile"></Header>
    <div class="layout-wrap">
      <Menu></Menu>
      <div class="layout-wrap__con">
        <slot></slot>
        <router-view></router-view>
      </div>
    </div>
    <Footer v-if="!isMobile"></Footer>
  </div>
</template>
<script setup>
import Footer from "../footer.vue";
import Header from "../header.vue";
import Menu from "@/components/menu/index.vue";
import { isMobile } from "@/utils";
</script>

<style scoped lang="less">

@media (min-width: 750px) {
  .layout{
    width: 1200PX;
    margin: 0 auto;
    &-wrap{
      min-height: 645PX;
      display: flex;
      justify-content: flex-start;
      &__con{
        width: 970PX;
        background: #fff;
        border-radius: 7PX;
        margin-left: 20PX;
      }
    }
  }
}
@media (max-width: 750px) {
  .layout{
    &-wrap{
      &__con{
        background: #fff;
      }

    }
  }
}

</style>

