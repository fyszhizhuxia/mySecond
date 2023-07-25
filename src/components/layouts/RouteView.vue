<template>
  <div class="route">
    <keep-alive>
      <router-view v-if="keepAlive" />
    </keep-alive>
    <router-view v-if="!keepAlive" />
  </div>
</template>
  
  <script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";
const route = useRoute();
const keepAlive = computed(() => {
  return route.meta.keepAlive;
});
</script>
  