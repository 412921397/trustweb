<template>
  <div class="base-echart">
    <div ref="echartDivRef" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script setup>
import { ref, onMounted, defineProps, nextTick } from "vue";

import { useChart } from "@/hooks";

const props = defineProps({
  options: {
    type: Object,
    default: () => ({})
  },
  width: {
    type: String,
    default: ""
  },
  height: {
    type: String,
    default: ""
  }
});

const echartDivRef = ref();

onMounted(() => {
  nextTick(() => {
    const { setOptions } = useChart(echartDivRef.value);
    setOptions(props.options);
  });
});
</script>

<style scoped></style>
