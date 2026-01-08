<template>
  <div class="overflow-hidden">
    <div class="grid grid-cols-1 desktop:grid-cols-2 gap-1 items-center">
      <div class="desktop:ml-22 mb-6">
        <TopIcon />
        <div class="py-8 text-[16px] desktop:text-[16px] desktop:w-[380px]">
          {{ $t("SWIFT是一种由帐户抽象化支援的智能合约钱包") }}
        </div>
        <n-button
          @click="$router.push('/download')"
          round
          size="large"
          class="bg-trustBlue! font-bold text-trustWhite! hover:bg-trustGreen! dark:bg-trustGreen! dark:text-trustBlack! dark:hover:bg-trustBlue! dark:hover:text-trustWhite!"
        >
          {{ $t("尝试公开测试版") }}
        </n-button>
      </div>
      <TopIcon2 />
    </div>
    <section class="mt-12!">
      <div class="default-transition font-bold text-[24px] text-center mb-6">{{ $t("由帐户抽象化支援") }}</div>
      <div class="grid grid-cols-3 gap-75 desktop:gap-6 desktop:px-24 overflow-x-auto">
        <n-card
          v-for="item in swiftArr"
          :key="item.id"
          class="min-w-[270px] max-w-[270px] w-full desktop:min-w-[301px] desktop:max-w-[301px] mt-2 rounded-[20px]! bg-baseWihte! border! border-[#e5e5e5]! dark:text-trustWhite! dark:border-tintBlack dark:bg-lightBlack!"
        >
          <div class="mb-6 desktop:h-58 flex flex-col justify-between">
            <div class="default-transition font-bold text-[24px] leading-[1.1]">{{ item.title }}</div>
            <div class="py-5">{{ item.desc }}</div>
          </div>
          <img class="mx-auto" :src="item.img" alt="" />
        </n-card>
      </div>
    </section>
    <section class="mt-12!">
      <div class="default-transition font-bold text-[24px] text-center">{{ $t("买卖及交换交易加密货币") }}</div>
      <div class="grid grid-cols-3 gap-75 desktop:gap-6 px-4 mt-6 overflow-x-auto">
        <n-card
          v-for="item in swiftArr1"
          :key="item.id"
          class="min-w-[270px] max-w-[270px] flex-col tablet:w-full desktop:min-w-[361px] desktop:max-w-[361px] mt-2 rounded-[20px]! bg-baseWihte! border! border-[#e5e5e5]! dark:text-trustWhite! dark:border-tintBlack dark:bg-lightBlack!"
        >
          <div class="default-transition h-20 font-bold text-[24px] leading-[1.1]">{{ item.title }}</div>
          <img class="mx-auto h-60 w-auto object-contain" :src="item.img" alt="" />
        </n-card>
      </div>
    </section>
    <section class="mt-8! flex! flex-col!">
      <n-card
        v-for="item in swiftArr2"
        :key="item.id"
        class="mt-6 rounded-[20px]! py-3 bg-baseWihte! border! border-[#e5e5e5]! dark:text-trustWhite! dark:border-tintBlack dark:bg-lightBlack!"
      >
        <div class="desktop:grid desktop:grid-cols-2 gap-6 justify-items-center desktop:items-center">
          <Swift8 class="mb-6" v-if="item.id === 1" />
          <img class="mb-6" v-else :src="item.img" alt="" />
          <div>
            <div class="default-transition font-bold text-[24px]">{{ item.title }}</div>
            <div class="py-6 text-[14px] desktop:text-[16px]">{{ item.desc }}</div>
          </div>
        </div>
      </n-card>
    </section>
    <n-card class="mt-8 rounded-[20px]! py-6 bg-baseWihte! border! border-[#e5e5e5]! dark:text-trustWhite! dark:border-tintBlack dark:bg-lightBlack!">
      <div class="font-bold text-[24px] text-center">{{ $t("由产业领导者独立审核及监控") }}</div>
      <div class="flex flex-wrap desktop:flex-row justify-center items-center gap-5 mt-6">
        <img class="h-auto w-[155px] desktop:w-[195px]" v-for="img in imgArr" :key="img.id" :src="img.img" alt="" />
      </div>
      <div class="text-center mt-5">{{ $t("SWIFT接受定期稽核并持续监控智能合约") }}</div>
    </n-card>
    <n-card
      class="mt-8 rounded-[20px]! py-0! bg-baseWihte! border! border-[#e5e5e5]! dark:text-trustWhite! dark:border-tintBlack dark:bg-lightBlack!"
    >
      <div class="grid grid-cols-1 desktop:grid-cols-2 gap-1 justify-items-center items-center">
        <div class="order-2 desktop:order-1 mt-5">
          <div class="font-bold text-[24px] leading-[1.1] py-5">
            {{ $t("取得适用于iOS和Android的") }}
            <br />
            {{ $t("SWIFTBeta") }}
          </div>
          <n-button
            round
            @click="$router.push('/download')"
            size="large"
            class="bg-trustBlue! font-bold text-trustWhite! hover:bg-trustGreen! dark:bg-trustGreen! dark:text-trustBlack! dark:hover:bg-trustBlue! dark:hover:text-trustWhite!"
          >
            {{ $t("尝试公开测试版") }}
          </n-button>
        </div>
        <img class="order-1 desktop:order-2" src="@/assets/svg/swift/swift12.svg" alt="" />
      </div>
    </n-card>
    <div class="flex flex-col py-6 mt-9">
      <h1 class="font-bold text-center">{{ $t("智能合约钱包和帐户抽象化对用户有什么益处") }}</h1>
      <div class="mt-6 border-b border-trustBlack" v-for="item in faqArr" :key="item.id">
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

import TopIcon from "@/assets/svg/swift/swift1.vue";
import TopIcon2 from "@/assets/svg/swift/swift2.vue";
import Swift8 from "@/assets/svg/swift/swift8.vue";

const { t } = useI18n();

const swiftArr = computed(() => [
  {
    id: 0,
    title: t("使用200多种代币支付燃料费"),
    desc: t("透过使用200多种代币支付交易手续费"),
    img: require("@/assets/svg/swift/swift1.svg")
  },
  { id: 1, title: t("一键交易"), desc: t("体验轻松直接的交易"), img: require("@/assets/svg/swift/swift2.svg") },
  {
    id: 2,
    title: t("透过人脸或指纹进行管理"),
    desc: t("保护和恢复您的钱包"),
    img: require("@/assets/svg/swift/swift3.svg")
  }
]);

const swiftArr1 = computed(() => [
  {
    id: 0,
    title: t("买卖及交换交易加密货币"),
    img: require("@/assets/svg/swift/swift4.svg")
  },
  { id: 1, title: t("收集NFT"), img: require("@/assets/svg/swift/swift5.svg") },
  {
    id: 2,
    title: t("探索DApp"),
    img: require("@/assets/svg/swift/swift6.svg")
  }
]);

const swiftArr2 = computed(() => [
  {
    id: 0,
    title: t("支援低成本可扩展的区块链"),
    desc: t("SWIFT支援的热门区块链"),
    img: require("@/assets/svg/swift/swift7.svg")
  },
  {
    id: 1,
    title: t("受通行密钥保护"),
    desc: t("不再需要管理复杂的密码"),
    img: ""
  }
]);

const faqStates = ref([
  {
    id: 0,
    title: "智能合约钱包和帐户抽象化对用户有什么益处",
    dec: "由帐户抽象化支援的智能合约钱包消除了常见的Web3",
    isShow: false
  },
  {
    id: 1,
    title: "我可以同时使用SWIFT",
    dec: "是的SWIFT智慧合约钱包",
    isShow: false
  },
  {
    id: 2,
    title: "使用通行密钥有什么好处",
    dec: "通行密鑰是錢包創建",
    isShow: false
  }
]);

const imgArr = [
  { id: 0, img: require("@/assets/svg/swift/swift9.svg") },
  { id: 1, img: require("@/assets/svg/swift/swift10.svg") },
  { id: 2, img: require("@/assets/svg/swift/swift11.svg") }
];

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
