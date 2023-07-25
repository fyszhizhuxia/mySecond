<template>
  <div class="home">
    <div class="home-left">
      <lunbo></lunbo>
      <!-- 表格 -->
      <a-table :dataSource="dataSource" :columns="columns" />
    </div>
    <div class="home-right">
      <intruduce></intruduce>
    </div>
  </div>
</template>
<script setup>
import lunbo from "./components/lunbo.vue";
import intruduce from "./components/intruduce.vue";
import User from "@/api/user";
import i18n from "@/lang/index.js";
import { ref, watch, reactive, onMounted } from "vue";

const locale = ref(i18n.global.locale);
const _this = i18n.global;
const dataSource = ref([]);
const getDate = async () => {
  const res = await User.getDate({ name: "13" });
  console.log(res);
  dataSource.value = res.data.obj;
};
const columns = ref([
  {
    title: _this.t("home.f1"),
    dataIndex: "name",
    key: "name",
  },
  {
    title: _this.t("home.f7"),
    dataIndex: "plat",
    key: "plat",
  },
  {
    title: _this.t("home.f8"),
    dataIndex: "phone",
    key: "phone",
  },
]);
watch(
  () => locale.value,
  () => {
    columns.value = [
      {
        title: _this.t("home.f1"),
        dataIndex: "name",
        key: "name",
      },
      {
        title: _this.t("home.f7"),
        dataIndex: "plat",
        key: "plat",
      },
      {
        title: _this.t("home.f8"),
        dataIndex: "phone",
        key: "phone",
      },
    ];
  }
);
onMounted(() => {
  getDate();
});
</script>
<style scoped lang="less">
@media (min-width:750px) {
  .home{
    display: flex;
    justify-content: flex-start;
    &-left{
      width: 640PX;
    }
    &-right{
      flex: 1;
    }
  }
}
@media (max-width:750px) {
  .home{
    &-left{
    }
  }
}
</style>
