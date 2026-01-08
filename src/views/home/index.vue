<template>
  <div class="home default-transition">
    <Banner />
    <Content />
  </div>
</template>

<script setup>
import Banner from "@/views/home/components/home-banner/index.vue";
import Content from "@/views/home/components/home-content/index.vue";
</script>

<style lang="less" scoped>
.home {
  width: 100%;
  height: 100%;
}
</style>
