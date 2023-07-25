<template>
  <div class="intruduce">
    <!-- 顶部 -->
    <div class="intruduce-top">
      <p class="intruduce-top__tit font-family-bold">{{ $t("home.f2") }}</p>
      <p class="intruduce-top__tit1 font-family-bold">{{ $t("home.f3") }}</p>
      <ul class="intruduce-top__des">
        <li v-for="index in 3" :key="index">
          {{ $t("home.f" + (index + 3)) }}
        </li>
      </ul>
      <div class="intruduce-top__plat flexS">
        <img
          :src="item"
          alt=""
          v-for="(item, index) in platList"
          :key="index"
        />
      </div>
    </div>
    <!-- 中部 -->
    <div class="intruduce-mid">
      <p class="intruduce-mid__tit font-family-bold">{{ $t("home.f7") }}</p>
      <ul class="intruduce-mid__trade">
        <li v-for="(item, index) in tardeList" :key="index" class="flexB">
          <div class="left flexS">
            <img
              :src="
                index % 2
                  ? getAssetsFile('com/en.svg')
                  : getAssetsFile('com/zh.svg')
              "
              alt=""
            />
            <div class="info">
              <p class="font-family-bold">{{ item.coin }}</p>
              <span :class="index % 2 ? 'red' : 'green'">{{ item.num1 }}</span>
            </div>
          </div>
          <div
            :class="['right', 'font-family-bold', index % 2 ? 'red' : 'green']"
          >
            {{ item.num2 }}
          </div>
        </li>
      </ul>
    </div>
    <!-- 底部 -->
    <div class="intruduce-bot">
      <p class="intruduce-bot__tit font-family-bold">{{ $t("home.f8") }}</p>
      <p class="intruduce-bot__phone">{{ $t("home.f9") }}</p>
      <p class="intruduce-bot__phone">{{ $t("home.f10") }}</p>
      <div class="intruduce-bot__logos flexS">
        <i
          :class="['iconfont', item, 'icon']"
          v-for="(item, index) in logoList"
          :key="index"
        ></i>
      </div>
      <p class="intruduce-bot__des1 font-family-bold">{{ $t("home.f11") }}</p>
      <p class="intruduce-bot__des2">{{ $t("home.f12") }}</p>
      <p class="intruduce-bot__des3">{{ $t("home.f13") }}</p>
    </div>
  </div>
</template>
<script setup>
import { getAssetsFile } from "@/utils";
const platList = [
  getAssetsFile("com/icon1.webp"),
  getAssetsFile("com/icon2.webp"),
  getAssetsFile("com/icon3.webp"),
  getAssetsFile("com/icon4.webp"),
];
const tardeList = [
  { coin: "EUR/USE", num1: "+0.23(+0.03%)", num2: "1.07440" },
  { coin: "EUR/USE", num1: "+0.23(+0.03%)", num2: "1.07440" },
  { coin: "EUR/USE", num1: "+0.23(+0.03%)", num2: "1.07440" },
  { coin: "EUR/USE", num1: "+0.23(+0.03%)", num2: "1.07440" },
  { coin: "EUR/USE", num1: "+0.23(+0.03%)", num2: "1.07440" },
];
const logoList = [
  "icon-weixin",
  "icon-QQ",
  "icon-googleplus-circle-f",
  "icon-linkedin-fill",
  "icon-shejiaotubiao-45",
];
</script>
<style lang="less" scoped>

@media (min-width:750px) {
    .intruduce{
    width: 100%;
    margin: 0 20PX 0;
    color: @fontBlack;
    &-top{
        background: #f4f6fc;
        padding: 11PX 16PX 30PX;
        color: @fontBlack;
        font-size: 12PX;
        border-radius: 8PX;
        &__tit{
            font-size: 18PX;
        }
        &__tit1{
          padding: 4PX 0 9PX 0;
        }
        &__des{
            li{
                margin-bottom: 10PX;
            }
        }
        &__plat{
            margin-top: 30PX;
            img{
                height: 22PX;
                margin-right: 16PX;
            }
        }

    }
    &-mid{
        margin: 26PX 0 0 16PX;
        font-size: 12PX;
        &__tit{
            font-size: 12PX;
        }
        &__trade{
        
            li{
                align-items: center;
                padding: 14PX 0;
                border-bottom: 1PX solid  #EFF1F6;
                .left{
                    img{
                        margin-right: 9PX;
                    }
                    .info{
                        p{
                            margin-bottom: 5PX;
                        }
                    }
                }
                .right{
                    font-size: 14PX;
                    width: 100PX;
                    height: 38PX;
                    line-height: 38PX;
                    text-align: center;
                    background: #F4F6FC;
                    border-radius: 5PX;
                }
                .red{
                    color: #F4270B;
                }
                .green{
                    color: #11B873;
                }
            }
        }
    }
    &-bot{
        background: #f4f6fc;
        border-radius: 8PX;
        padding: 16PX;
        color:#858589;
        margin-top: 27PX;
        font-size: 12PX;
        &__tit{
            margin-bottom: 4PX;
        }
        &__phone{
            line-height: 1.5;
        }
        &__logos{
            margin-top: 15PX;
            .icon{
                color: #858589;
                font-size: 25PX;
                margin-right: 25PX;
            }
        }
        &__des1{
            margin: 40PX 0 4PX 0;
 
        }
        &__des2{
            font-size: 12PX;
            line-height: 1.5;
        }
        &__des3{
            margin-top: 16PX;
            line-height: 1.5;
        }
    }
    }
}
@media (max-width:750px) {
    .intruduce{
        display: none;
    }
}
</style>

