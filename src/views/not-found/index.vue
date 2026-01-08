<template>
  <div class="notfound">
    <n-result status="404" title="404 资源不存在" description="生活总归带点荒谬">
      <template #footer>
        <n-button>找点乐子吧</n-button>
      </template>
    </n-result>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.notfound {
  width: 100%;
  height: 100svh;
  position: relative;
  top: 600px;
}
</style>
