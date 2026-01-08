<template>
  <div class="flex justify-between items-start mb-2">
    <!-- 左侧价格信息 -->
    <div>
      <div class="default-transition text-3xl font-semibold text-gray-900 dark:text-white">${{ displayPrice }}</div>
      <div class="text-sm mt-1" :class="isUp ? 'text-green-500' : 'text-red-500'">
        {{ diffText }}
        <span class="text-gray-500 ml-2">{{ timeText }}</span>
      </div>
    </div>

    <div class="period-tabs gap-5">
      <span v-for="p in periods" :key="p.key" :class="['tab', period === p.key && 'active']" @click="changePeriod(p.key)">
        {{ p.label }}
      </span>
    </div>
  </div>

  <div class="mt-8" style="width: 100%; height: 350px">
    <baseEchart v-if="options && options.series[0].data.length" :options="options" width="100%" height="350px" />
  </div>
</template>

<script setup>
import { defineExpose, computed, ref } from "vue";

import { charts } from "@/service/api";
import { getStorage } from "@/utils";

import baseEchart from "@/components/echarts/base-echart.vue";

const dataItem = computed(() => getStorage("coinItem"));
const periods = [
  { key: "hour", label: "1H" },
  { key: "day", label: "1D" },
  { key: "month", label: "1M" },
  { key: "year", label: "1Y" },
  { key: "all", label: "All" }
];
const data = ref({});
const period = ref("day");
const seriesData = computed(() => {
  return data.value.data?.map((i) => [i.time * 1000, i.price]) || [];
});
const stats = computed(() => {
  if (!data.value) return [];

  return [
    { label: "All-time high", value: data.value.high },
    { label: "All-time low", value: data.value.low },
    { label: "Period Start", value: data.value.startPrice },
    { label: "Period End", value: data.value.endPrice }
  ];
});

const displayPrice = ref("--");
const diffText = ref("--");
const timeText = ref("--");

const isUp = computed(() => {
  if (seriesData.value.length < 2) return true;
  return seriesData.value.at(-1)[1] >= seriesData.value[0][1];
});

const options = computed(() => {
  const color = isUp.value ? "#0aa838" : "#c21414";

  return {
    grid: {
      left: 10,
      right: 60,
      top: 10,
      bottom: 100,
      containLabel: true
    },
    graphic: stats.value.map((item, index) => ({
      // 最底部的价格
      type: "group",
      left: `${(index + 0.2) * 25}%`, // 4 等分
      bottom: 60,
      bounding: "raw",
      children: [
        {
          type: "text",
          style: {
            text: item.label,
            fill: "#111827",
            fontSize: 12,
            align: "center"
          },
          top: 0
        },
        {
          type: "text",
          style: {
            text: `$${(+item.value).toFixed(2)}`,
            fill: "#111827",
            fontSize: 14,
            fontWeight: 600,
            align: "center"
          },
          top: 18
        }
      ]
    })),
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#111"
        }
      },
      formatter: (params) => {
        const p = params[0];
        const d = new Date(p.value[0]);
        return `
          <div>
            <div>${d.toLocaleString()}</div>
            <div style="color:${color}">
              <b>$${p.value[1]}</b>
            </div>
          </div>
        `;
      }
    },
    xAxis: {
      type: "time",
      boundaryGap: false,
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: { show: false },
      axisLabel: {
        show: false, // 隐藏时间
        color: "#6b7280",
        formatter: (value) => {
          const d = new Date(value);
          const h = d.getHours();
          const m = d.getMinutes();
          if (h === 0 && m === 0) {
            return `${d.getMonth() + 1}/${d.getDate()}`;
          }
          return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
        }
      }
    },
    yAxis: {
      type: "value",
      position: "right", // 右侧显示
      scale: true,
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        color: "#6b7280",
        formatter: (v) => `$${v}`
      },
      splitLine: {
        lineStyle: { color: "#e5e7eb" }
      }
    },
    dataZoom: [
      {
        type: "inside",
        throttle: 50
      }
    ],
    series: [
      {
        type: "line",
        smooth: true,
        symbol: "none",
        data: seriesData.value,
        lineStyle: {
          width: 2,
          color
        },
        areaStyle: {
          color: {
            type: "linear",
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              { offset: 0, color: `${color}55` },
              { offset: 1, color: `${color}05` }
            ]
          }
        },
        markPoint: {
          // data: [
          //   { type: "max", name: "High" },
          //   { type: "min", name: "Low" }
          // ],
          symbolSize: 40,
          label: {
            formatter: "{b}",
            color: "#fff"
          }
        }
      }
    ]
  };
});

const changePeriod = (p) => {
  period.value = p;
  fetchData();
};

const fetchData = async () => {
  try {
    const res = await charts(dataItem.value.id || dataItem.value.coinId, { period: period.value });
    data.value = res;
    displayPrice.value = data.value.endPrice;
  } catch (e) {
    console.log(e);
  }
};
fetchData();

defineExpose({ data });
</script>

<style lang="scss" scoped>
.period-tabs {
  display: flex;
  gap: 16px;
  justify-content: flex-end;
  margin-bottom: 8px;

  .tab {
    font-size: 12px;
    color: #6b7280;
    cursor: pointer;
    padding: 4px 10px;
    border-radius: 6px;

    &.active {
      color: #111;
      background: #f3f4f6;
      font-weight: 500;
    }
  }
}
</style>
