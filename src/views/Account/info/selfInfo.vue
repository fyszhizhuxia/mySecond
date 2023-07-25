<template>
  <div class="sInfo">
    <a-form
      width="100%"
      name="basic"
      ref="Form"
      layout="vertical"
      autocomplete="off"
      @finish="onFinish"
      @finishFailed="onFinishFailed"
    >
      <a-form-item
        :label="$t('account.f8')"
        :rules="[{ required: true, message: 'Please input your username!' }]"
      >
        <a-input v-model:value="formState.type" :disabled="!isEdit" />
      </a-form-item>
      <a-form-item
        :label="$t('account.f9')"
        :rules="[{ required: true, message: 'Please input your nation!' }]"
      >
        <a-input v-model:value="formState.nation" :disabled="!isEdit" />
      </a-form-item>
      <a-form-item
        :label="$t('account.f10')"
        :rules="[{ required: true, message: 'Please input your nickName!' }]"
      >
        <a-input v-model:value="formState.nickName" :disabled="!isEdit" />
      </a-form-item>
      <a-form-item
        :label="$t('account.f11')"
        :rules="[{ required: true, message: 'Please input your character!' }]"
      >
        <a-select
          ref="select"
          v-model:value="formState.sex"
          :disabled="!isEdit"
        >
          <a-select-option value="1">{{ $t("account.f14") }}</a-select-option>
          <a-select-option value="2">{{ $t("account.f15") }}</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item
        :label="$t('account.f12')"
        :rules="[{ required: true, message: 'Please input your character!' }]"
      >
        <a-input v-model:value="formState.chara" :disabled="!isEdit" />
      </a-form-item>
      <a-form-item
        :label="$t('account.f13')"
        :rules="[{ required: true, message: 'Please input your picture!' }]"
      >
        <img :src="getAssetsFile(formState.idCard)" alt="" class="sInfo-img" />
      </a-form-item>
    </a-form>
  </div>
</template>
<script setup>
import { ref, onMounted, reactive } from "vue";
import { getAssetsFile } from "@/utils";
import Account from "@/api/account";
const formState = reactive({
  type: "",
  nation: "",
  nickName: "",
  sex: "",
  chara: "",
  idCard: "",
});
const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const isEdit = ref(false);
const getSelfInfo = async () => {
  const res = await Account.selfInfo({ id: 123456 });
  const { type, nation, nickName, sex, chara, idCard } = res.data;
  formState.type = type;
  formState.nation = nation;
  formState.nickName = nickName;
  formState.sex = sex;
  formState.chara = chara;
  formState.idCard = idCard;
};

onMounted(() => {
  getSelfInfo();
});
</script>
<style lang="less" scoped>
@media (max-width:750px) {
  .sInfo{
    width: 100%;
    padding: 40px 36px;
    &-img{
      width: 100%;
    }
  }
}
@media (min-width:750px) {
  .sInfo{
    width: 60%;
    padding: 40px 36px;
    &-img{
      width: 100%;
    }
  }
}
</style>