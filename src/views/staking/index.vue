<template>
  <div class="overflow-hidden">
    <div class="grid desktop:grid-cols-2 gap-6 items-center">
      <div class="desktop:ml-24">
        <h1 class="font-bold text-[36px] leading-[1.1]">
          {{ $t("质押您的加密货币") }}
          <br />
          {{ $t("并获得奖励") }}
          <br />
          {{ $t("只需几个步骤") }}
        </h1>
        <div class="py-6 desktop:text-[16px] desktop:w-[380px]">{{ $t("透过质押您的加密货币") }}</div>
        <p>
          <n-button
            @click="$router.push('/download')"
            round
            size="large"
            class="bg-trustBlue! font-bold text-trustWhite! hover:bg-trustGreen! dark:bg-trustGreen! dark:text-trustBlack! dark:hover:bg-trustBlue! dark:hover:text-trustWhite!"
          >
            {{ $t("马上下载") }}
          </n-button>
        </p>
      </div>
      <StakingIcon />
    </div>
    <div class="mt-38 w-full flex flex-row justify-center items-center overflow-x-auto full-screen-sectio">
      <StakingIcon2 class="min-w-[1000px]" />
    </div>
    <n-card
      class="mt-8 rounded-[20px]! py-6 bg-baseWihte! border! border-[#e5e5e5]! dark:text-trustWhite! dark:border-tintBlack dark:bg-lightBlack! flex flex-col items-center"
    >
      <div class="font-bold text-[24px]">{{ $t("收入估算器") }}</div>
      <div>{{ $t("潛在收入") }}</div>
    </n-card>

    <div class="mt-8 grid desktop:grid-cols-2 gap-6 px-4">
      <n-card
        v-for="item in cardArr"
        :key="item.id"
        class="rounded-[20px]! bg-baseWihte! border! border-[#e5e5e5]! dark:text-trustWhite! dark:border-tintBlack dark:bg-lightBlack! flex flex-col items-center"
      >
        <div class="font-bold text-[24px]">{{ item.title }}</div>
        <img class="py-8" :src="item.img" alt="" />
        <div>{{ item.dec }}</div>
      </n-card>
    </div>
    <div class="flex flex-col py-6">
      <h1 class="font-bold text-center">{{ $t("常见问题") }}</h1>
      <div class="mt-8 border-b border-trustBlack" v-for="item in faqArr" :key="item.id">
        <div class="font-bold mb-6 cursor-pointer flex flex-row justify-between" @click="toggleFaq(item.id)">
          {{ item.title }}
          <img :class="{ 'arrow-down': item.isShow }" class="default-transition w-5 h-5" src="@/assets/svg/down.svg" alt="" />
        </div>
        <div v-if="item.isShow" class="mb-6">{{ item.dec }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

import { useI18n } from "vue-i18n";

import StakingIcon from "@/assets/svg/staking/top.vue";
import StakingIcon2 from "@/assets/svg/staking/top2.vue";

const { t } = useI18n();

const cardArr = computed(() => [
  { id: 0, title: t("为区块链做出贡献"), dec: t("参与网路安全和去中心化"), img: require("@/assets/svg/staking/staking1.svg") },
  { id: 1, title: t("了解DeFi"), dec: t("探索更多链"), img: require("@/assets/svg/staking/staking2.svg") }
]);
const faqStates = ref([
  {
    id: 0,
    title: "什么是质押",
    dec: "质押涉及锁定您的加密货币以参与维护和保护区块链网路",
    isShow: false
  },
  {
    id: 1,
    title: "什么是质押中的验证人",
    dec: "在质押中",
    isShow: false
  },
  {
    id: 2,
    title: "质押借贷和收益挖矿有什么区别",
    dec: "质押涉及在链上锁定您的加密货币",
    isShow: false
  },
  {
    id: 3,
    title: "涉及哪些风险",
    dec: "无论您决定使用钱包内赚取选项还是透过",
    isShow: false
  }
]);

const faqArr = computed(() =>
  faqStates.value.map((item) => ({
    ...item,
    title: t(item.title),
    dec: t(item.dec)
  }))
);

// 切换显示状态
const toggleFaq = (id) => {
  const index = faqStates.value.findIndex((item) => item.id === id);
  if (index !== -1) {
    faqStates.value[index].isShow = !faqStates.value[index].isShow;
  }
};
</script>

<style lang="scss" scoped></style>
