<template>
  <div class="aInfo">
    <ul>
      <li class="aInfo-item">
        <span class="font-family-regular">{{ $t("account.f1") }}</span
        ><span>{{ accountInfo.type }}</span>
      </li>
      <li class="aInfo-item">
        <span class="font-family-regular">{{ $t("account.f2") }}</span
        ><span>{{ accountInfo.id }}</span>
      </li>
      <li class="aInfo-item">
        <span class="font-family-regular">{{ $t("account.f3") }}</span
        ><span>{{ accountInfo.name }}</span>
      </li>
      <li class="aInfo-item">
        <span class="font-family-regular">{{ $t("account.f4") }}</span
        ><span>{{ accountInfo.phone }}</span>
      </li>
      <li class="aInfo-item">
        <span class="font-family-regular">{{ $t("account.f5") }}</span
        ><span>{{ accountInfo.email }}</span>
      </li>
      <li class="aInfo-item">
        <span class="font-family-regular">{{ $t("account.f6") }}</span
        ><span>{{ accountInfo.password }}</span>
      </li>
      <li class="aInfo-item">
        <span class="font-family-regular">{{ $t("account.f7") }}</span
        ><span>{{ accountInfo.time }}</span>
      </li>
    </ul>
  </div>
</template>
<script setup>
import Account from "@/api/account";
import { onMounted, ref } from "vue";
const accountInfo = ref({});
const accountType = async () => {
  const res = await Account.accType({ id: 123456 });
  accountInfo.value = res.data;
};

onMounted(() => {
  accountType();
});
</script>
<style lang="less" scoped>
@media (max-width:750px) {
.aInfo{
  &-item{
    font-size: 24px;
    height: 100px;
    padding: 0 48px;
    display: flex;
    align-items: center;
    span{
      width: 30%;
      &:last-child{
        font-size: 28px;
        font-family:StolzlMedium;
      }
    }
  }
}
}
@media (min-width:750px){
  :global(.ant-tabs-tab){
    padding: 5PX 20PX;
  }
  .aInfo{
    width: 60%;
    &-item{
      font-size: 14PX;
      height: 42PX;
      padding: 0 48px 0 10PX;
      display: flex;
      align-items: center;
      span{
        width: 20%;
        text-align: right;
        &:last-child{
          flex: 1;
          font-size: 16PX;
          font-family:StolzlMedium;
          text-align: left;
          margin-left: 40PX;
        }
      }
    }
}
}
</style>