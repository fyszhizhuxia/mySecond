<template>
  <div class="user">
    <Header></Header>
    <div class="user-con flexS">
      <div class="user-con__banner">
        <h1 class="title font-family-bold">
          HSB Partner<span class="font-family-regular">Ship.</span>
        </h1>
        <p class="info font-family-regular">
          {{ $t("user.f2") }}
        </p>
      </div>
      <div class="user-con__page">
        <router-view></router-view>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
  
  <script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>
  
  <style lang="less" scoped>
  @media (min-width: 750px){
    .user{
        &-con{
            height: 894PX;
            &__banner{
                width: 440PX;
                padding: 40PX 0 0 40PX;
                background:  url("@/images/user/banner.webp") no-repeat left top / 100% 100% ;
                .title{
                    font-size: 40PX;
                    margin-bottom: 15PX;
                    span{
                        font-size: 20PX;
                    }
                }
                .info{
                    font-size: 18PX;
                }
            }
            &__page{
                flex: 1;
                display: flex;
                align-items: center;
                justify-content: center;
            }
        }
    }

  }
  
  @media (max-width: 750px){

  }
  
  </style>