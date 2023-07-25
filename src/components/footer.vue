<template>
  <div class="foot">
    <p class="foot-copy">{{ $t("user.f4") }}</p>
  </div>
</template>
<script setup>
</script>
<style lang="less" scoped>
@media (min-width: 750px) {
  .foot{
    margin-top: 30PX;
    &-copy{
      color: @fontBlack;
    }
  }
}

</style>