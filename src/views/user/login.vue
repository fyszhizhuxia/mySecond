<template>
  <div class="login">
    <div class="login-tit flexB">
      <span class="login-tit__left">{{ $t("user.f1") }}</span>
      <span class="login-tit__right">{{ $t("user.f3") }}</span>
    </div>
    <!-- 表单 -->
    <a-form
      :model="formState"
      @finish="onFinish"
      layout="vertical"
      autocomplete="off"
    >
      <a-form-item
        :label="$t('login.f1')"
        name="phoneNum"
        :rules="[{ required: true, message: 'Please input your phoneNum!' }]"
      >
        <div class="login-ipt">
          <div class="login-ipt__state">
            <img src="@/images/com/zh.svg" alt="" /><span>&nbsp;+86</span>
          </div>
          <a-input v-model:value="formState.phoneNum" />
        </div>
      </a-form-item>

      <a-form-item
        :label="$t('login.f2')"
        name="password"
        :rules="[{ required: true, message: 'Please input your password!' }]"
      >
        <div class="login-ipt">
          <a-input-password v-model:value="formState.password" />
        </div>
      </a-form-item>
      <p class="login-forget">
        <router-link to="/user/forget" class="font-family-regular">{{
          $t("login.f3")
        }}</router-link>
      </p>
      <a-form-item>
        <a-button
          class="login-button"
          type="primary"
          :loading="formState.loading"
          html-type="submit"
          :disabled="!formState.password || !formState.phoneNum"
          >{{ $t("common.f1") }}</a-button
        >
      </a-form-item>
    </a-form>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import { userStore } from "@/store/modules/user";
import User from "@/api/user";
import { reactive } from "vue";
const router = useRouter();
const formState = reactive({
  phoneNum: "",
  password: "",
});
const onFinish = async (values) => {
  formState.loading = true;
  const params = {
    username: formState.phoneNum,
    password: formState.password,
  };
  const res = await User.login(params);
  formState.loading = false;
  if (res.code == 200) {
    router.push({ name: "Home" });
  }
};
</script>
<style lang="less" scoped>
.login{
  width: 466PX;
  &-tit{
    color: @fontBlack;
    margin-bottom: 46PX;
    &__left{
      font-size: 32PX;
      color: #0B0B14;
    }
    &__right{
      font-size: 14PX;
      color: @blue;
    }
  }
  &-ipt{
    position: relative;
    &__state{
      display: flex;
      z-index: 2;
      position: absolute;
      align-items: center;
      padding: 0 20PX;
      height: 98%;
      border-right: 1PX solid #d9d9d9;
    }
    
  }
  &-forget{
    color: @blue;
  }
  &-button{
    display: block;
    width: 100%;
    margin-top: 82PX;
  }
  
}
:deep(.ant-input){
    padding: 0 11PX 0 100PX;
  }
</style>