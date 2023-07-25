<template>
  <div>{{ $t("report.f1") }}</div>
</template>
<script setup>
import { userStore } from "@/store/modules/user";
import { useRouter } from "vue-router";
import { ref } from "vue";
const user = userStore();
</script>