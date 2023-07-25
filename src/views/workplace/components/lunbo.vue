<template>
  <div class="lunbo">
    <!-- :navigation="true" -->
    <swiper
      :slidesPerView="1"
      :spaceBetween="30"
      :pagination="{
        clickable: true,
      }"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      :modules="modules"
      @slideChange="onSlideChange"
      class="mySwiper"
      ref="mySwiper"
    >
      <swiper-slide v-for="(item, index) in imgList" :key="index">
        <div class="lunbo-warp">
          <img :src="item" />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Autoplay, Navigation, Pagination, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { ref } from "vue";
import { getAssetsFile } from "@/utils/index.js";
const modules = [Autoplay, Pagination, Navigation, A11y];
const imgList = ref([
  getAssetsFile("home/1.jpg"),
  getAssetsFile("home/2.jpg"),
  getAssetsFile("home/3.jpg"),
  getAssetsFile("home/4.jpg"),
]);
const onSlideChange = (e) => {
  console.log(e, "改变了");
};
</script>
<style scoped lang="less">
@media (min-width:750px) {
  .lunbo{
    width: 100%;
    height: 698PX;
    &-warp{
        width: 100%;
        img{
            width: 100%;
            height: 100%;
        }
    }
  }
  
}
@media (max-width:750px) {
  .lunbo{
        width: 100vw;
    &-warp{
        width: 100%;
        img{
            width: 100%;
        }
    }
  }
  
}
</style>