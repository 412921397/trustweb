<template>
  <div class="overflow-hidden">
    <div class="grid grid-cols-1 desktop:grid-cols-2 desktop:gap-8 items-center">
      <div class="desktop:ml-19">
        <h1 class="font-bold text-[36px] leading-[1.1]">
          {{ $t("顺畅") }}
          <br />
          {{ $t("交换选项") }}
        </h1>
        <div class="py-6 desktop:text-[16px] desktop:w-[380px]">{{ $t("直接从") }}</div>
        <p>
          <n-button
            @click="$router.push('/download')"
            round
            size="large"
            class="mb-6! bg-trustBlue! font-bold text-trustWhite! hover:bg-trustGreen! dark:bg-trustGreen! dark:text-trustBlack! dark:hover:bg-trustBlue! dark:hover:text-trustWhite!"
          >
            {{ $t("马上下载") }}
          </n-button>
        </p>
      </div>
      <SwapIcon class="mx-auto desktop:mx-0" />
    </div>
    <n-card
      class="desktop:py-1 mt-8 rounded-[20px]! bg-baseWihte! border! border-[#e5e5e5]! dark:text-trustWhite! dark:border-tintBlack dark:bg-lightBlack!"
    >
      <div class="grid grid-cols-1 desktop:grid-cols-2 gap-1 items-center">
        <div class="order-2 desktop:order-1 px-2 desktop:px-12">
          <h2 class="font-bold text-[30px]">{{ $t("最新交易永续合约") }}</h2>
          <div class="py-3">
            {{ $t("做多或做空") }}
            <br />
            {{ $t("个市场") }}
            <br />
            {{ $t("最高100倍杠杆") }}
            <br />
            {{ $t("自我托管") }}
            <n-button text class="text-trustBlue! underline!">{{ $t("了解更多") }}</n-button>
          </div>
          <p>
            <n-button
              @click="handleLink"
              round
              size="large"
              class="bg-trustBlue! font-bold text-trustWhite! hover:text-trustBlack! hover:bg-trustGreen! dark:bg-trustGreen! dark:text-trustBlack! dark:hover:bg-trustBlue! dark:hover:text-trustWhite!"
            >
              {{ $t("探索永续合约") }}
            </n-button>
          </p>
        </div>
        <img class="order-1 desktop:order-2 mb-6" src="@/assets/svg/wap/swap1.svg" alt="" />
      </div>
    </n-card>
    <n-card
      class="desktop:py-1 mt-8 rounded-[20px]! bg-baseWihte! border! border-[#e5e5e5]! dark:text-trustWhite! dark:border-tintBlack dark:bg-lightBlack!"
    >
      <div class="grid grid-cols-1 desktop:grid-cols-2 gap-1 items-center justify-items-center">
        <img class="mb-6" src="@/assets/svg/wap/swap2.svg" alt="" />
        <div>
          <h2 class="font-bold text-[30px]">{{ $t("运作方式") }}</h2>
          <div class="py-6">
            {{ $t("选取交换选项") }}
            <br />
            {{ $t("选择欲交换的资产") }}
            <br />
            {{ $t("输入您的交换金额") }}
            <br />
            {{ $t("查看交换详情") }}
          </div>
          <p>
            <n-button
              @click="$router.push('/download')"
              round
              size="large"
              class="bg-trustBlue! font-bold text-trustWhite! hover:text-trustBlack! hover:bg-trustGreen! dark:bg-trustGreen! dark:text-trustBlack! dark:hover:bg-trustBlue! dark:hover:text-trustWhite!"
            >
              {{ $t("马上下载") }}
            </n-button>
          </p>
        </div>
      </div>
    </n-card>
    <div class="font-bold text-[30px] mt-6">{{ $t("交换热门代币") }}</div>
    <div class="grid grid-cols-1 desktop:grid-cols-3 gap-1">
      <n-card
        v-for="item in daiArr"
        :key="item.id"
        class="desktop:py-1 mt-6 rounded-[20px]! bg-baseWihte! border! border-[#e5e5e5]! dark:text-trustWhite! dark:border-tintBlack dark:bg-lightBlack!"
      >
        <component :is="item.component" class="w-full h-[120px]" />
      </n-card>
    </div>
    <div class="grid grid-cols-4 gap-75 desktop:gap-6 mt-6 overflow-x-auto">
      <n-card
        v-for="item in cardArr"
        :key="item.id"
        class="desktop:py-1 min-w-[270px] max-w-[270px] flex flex-col justify-between content-center rounded-[20px]! bg-baseWihte! border! border-[#e5e5e5]! dark:text-trustWhite! dark:border-tintBlack dark:bg-lightBlack!"
      >
        <div class="desktop:h-60">
          <h2 class="font-bold text-[30px] leading-[1.1]">{{ item.title }}</h2>
          <div class="py-3">{{ item.dec }}</div>
        </div>
        <img class="mx-auto h-[180px] w-auto object-contain" :src="item.img" alt="" />
      </n-card>
    </div>
    <div class="mt-6 flex flex-col justify-center">
      <div class="mt-6 font-bold w-full text-[30px] mx-auto text-center">{{ $t("常见问题") }}</div>
      <div class="mt-6 border-b border-trustBlack" v-for="item in faqArr" :key="item.id">
        <div class="default-transition font-bold mb-6 cursor-pointer flex flex-row justify-between" @click="toggleFaq(item.id)">
          {{ item.title }}
          <img :class="{ 'arrow-down': item.isShow }" class="default-transition w-5 h-5" src="@/assets/svg/down.svg" alt="" />
        </div>
        <div v-if="item.isShow" class="default-transition desktop:mb-3">{{ item.dec }}</div>
      </div>
    </div>
    <div class="mt-10 desktop:mt-30 bg-trustBlue rounded-[20px] flex flex-col desktop:felx-row justify-around px-6 py-6 desktop:py-12">
      <div class="text-trustWhite font-bold text-[16px] desktop:text-[30px] desktop:mr-22">{{ $t("简单且方便") }}</div>
      <div class="felx felx-row relative py-6 desktop:py-0">
        <FooterIcon class="absolute -top-30" />
        <n-button
          round
          size="large"
          class="bg-trustWhite! font-bold text-trustBlack! hover:text-trustBlack! hover:bg-trustGreen! dark:bg-trustGreen! dark:text-trustBlack! dark:hover:bg-trustBlue! dark:hover:text-trustWhite!"
        >
          {{ $t("下载") }} Trust Wallet
        </n-button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

import { useI18n } from "vue-i18n";

import SwapIcon from "@/assets/img/swap/swap.vue";
import FooterIcon from "@/assets/svg/wap/footer.vue";
import dai1 from "@/assets/svg/dai1.vue";
import dai2 from "@/assets/svg/dai2.vue";
import dai3 from "@/assets/svg/dai3.vue";

const { t } = useI18n();
const cardArr = computed(() => [
  { id: 0, title: t("交换热门代币"), dec: t("在一个地方交换所有最新热门代币"), img: require("@/assets/svg/wap/card1.svg") },
  { id: 1, title: t("减少燃料费用"), dec: t("我们的交换功能可判定每笔交易最具燃料效益的流动性来源"), img: require("@/assets/svg/wap/tong.svg") },
  { id: 2, title: t("我们会找到最佳费率"), dec: t("我们的交换功能可保证您享有种类繁多的代币和最优惠的价格"), img: require("@/assets/svg/3qiu.svg") },
  { id: 3, title: t("滑价保护"), dec: t("订单会跨多个DEX"), img: require("@/assets/svg/wap/card4.svg") }
]);

const daiArr = () => [
  { id: 0, component: dai1 },
  { id: 1, component: dai2 },
  { id: 2, component: dai3 }
];

const faqStates = ref([
  {
    id: 0,
    title: "是否提供交换服务",
    dec: "通往去中心化",
    isShow: false
  },
  {
    id: 1,
    title: "您与谁合作提供交换",
    dec: "交换服务由一系列",
    isShow: false
  },
  {
    id: 2,
    title: "是否针对交换加密货币收取费用",
    dec: "不会针对交换交易收取任何额外服务费",
    isShow: false
  },
  {
    id: 3,
    title: "交换费用如何决定",
    dec: "供应商费用是第三方费用",
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

const handleLink = () => window.open("https://link.trustwallet.com/perp", "_blank");
</script>

<style lang="scss" scoped></style>
