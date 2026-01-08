<template>
  <div>
    <div class="grid grid-cols-1 desktop:grid-cols-2 gap-5 mt-2">
      <div>
        <div class="text-[20px] desktop:text-[28px]! font-bold">
          <h1 class="leading-[1.1]">
            {{ $t("在您的浏览器中") }}
            <br />
            {{ $t("探索Web3") }}
          </h1>
        </div>
        <div class="desktop:w-[350px] text-[14px] py-3">
          {{ $t("我们的浏览器附加元件是您的安全加密货币钱包") }}
        </div>
        <n-button
          @click="handleLink"
          round
          size="large"
          class="bg-trustBlue! border-0! font-bold text-trustWhite! hover:bg-trustGreen! hover:text-trustBlack! dark:bg-trustGreen! dark:text-trustBlack! dark:hover:bg-trustBlue! dark:hover:text-trustWhite!"
        >
          {{ $t("下载附加元件1") }}
        </n-button>
      </div>
      <PC />
    </div>
    <div class="flex flex-col justify-center items-center mt-6">
      <h2 class="default-transition text-[20px] desktop:text-[32px] text-trustBlack font-wixMadefor font-bold dark:text-trustWhite">
        {{ $t("浏览器附加元件适用于") }}
      </h2>
      <div class="w-[300px] grid grid-cols-2 gap-6 py-4">
        <n-card
          v-for="item in arr"
          :key="item.id"
          class="shrink rounded-[20px]! bg-baseWihte! border! border-[#e5e5e5]! dark:text-trustWhite! dark:border-tintBlack dark:bg-lightBlack! flex flex-col items-center"
        >
          <div class="flex flex-col justify-center items-center">
            <component class="w-[52px] h-[52px]" :is="item.icon" />
            <span class="text-[12px] text-center desktop:mt-2.5">{{ item.name }}</span>
          </div>
        </n-card>
      </div>
      <div>{{ $t("以及更多") }}</div>
    </div>
    <div class="default-transition bg-gradientLightBlueToBlue rounded-[30px] py-16 px-3 mt-6">
      <div class="flex flex-col justify-center items-center text-trustWhite">
        <h1 class="font-bold">{{ $t("支援的区块链") }}</h1>
        <p class="mt-2!">{{ $t("定期新增更多项目") }}</p>
        <div class="bg-trustWhite mt-5 rounded-[20px] w-[792px] text-trustBlack max-w-screen-max-reduced-content px-6 py-10">
          <div class="text-center font-bold text-[26px]">{{ $t("支援的区块链") }}</div>
          <div
            :style="{ height, overflow: 'hidden' }"
            class="my-9 tablet:my-6 default-transition mx-auto flex flex-wrap justify-center gap-x-7 desktop:gap-6"
          >
            <div class="flex flex-col items-center" v-for="item in CryptoList" :key="item.id">
              <img class="w-[42px] h-[42px] rounded-full" :src="item.img" alt="" />
              <div class="mt-1.5 max-w-[10ch] text-center">{{ item.name }}</div>
            </div>
          </div>
          <div class="w-full h-20 flex justify-center bg-trustWhite!">
            <button
              @click="height === '290px' ? (height = 'auto') : (height = '290px')"
              class="default-transition px-5 flex h-[45px] text-trustBlue! cursor-pointer justify-center items-center gap-1 rounded-full border border-trustBlue text-left hover:bg-trustBlue hover:text-white! dark:border-trustGreen dark:text-trustGreen dark:hover:bg-trustGreen dark:hover:text-trustBlack!"
            >
              {{ height === "290px" ? $t("查看所有网路") : $t("收起网路") }}
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-4 gap-74 desktop:gap-6 py-10 mt-6 overflow-x-auto">
      <n-card
        v-for="item in textArr"
        :key="item.id"
        class="min-w-[270px] shrink rounded-[20px]! bg-baseWihte! border! border-[#e5e5e5]! dark:text-trustWhite! dark:border-tintBlack dark:bg-lightBlack! flex flex-col items-center"
      >
        <div class="desktop:h-[180px]">
          <h3 class="font-bold text-[24px] leading-[1.1]">{{ item.name }}</h3>
          <div class="mt-1">{{ item.dec }}</div>
        </div>
        <img class="w-full h-[260px]" :src="item.icon" alt="" />
        <a class="cursor-pointer text-trustBlack! dark:text-trustWhite! flex">
          {{ $t("了解更多") }}
          <img class="w-5 h-5 ml-[5px]" src="@/assets/svg/arrow-right.svg" alt="" />
        </a>
      </n-card>
    </div>
    <n-card
      class="mt-6 rounded-[20px]! bg-baseWihte! border! border-[#e5e5e5]! dark:text-trustWhite! dark:border-tintBlack dark:bg-lightBlack! flex flex-col items-center"
    >
      <div class="flex flex-col desktop:flex-row items-center justify-around">
        <key class="w-[300px]" />
        <div class="desktop:ml-16">
          <h4 class="font-bold text-[24px]">
            {{ $t("您的钱包") }}
            <br />
            {{ $t("您的加密货币") }}
          </h4>
          <div class="mt-12">{{ $t("代表您始终可以完全控制") }}</div>
        </div>
      </div>
    </n-card>
    <div class="mt-6 grid grid-cols-1 desktop:grid-cols-2 gap-6 py-6 px-4 desktop:px-12">
      <n-card
        v-for="item in cardArr"
        :key="item.id"
        class="rounded-[20px]! bg-baseWihte! border! border-[#e5e5e5]! dark:text-trustWhite! dark:border-tintBlack dark:bg-lightBlack! flex flex-col items-center"
      >
        <div class="text-[30px] font-bold py-1 leading-[1.1]">{{ item.name }}</div>
        <div class="text-[16px] py-10">{{ item.dec }}</div>
      </n-card>
    </div>
    <n-card
      class="mt-6 rounded-[20px]! bg-baseWihte! border! border-[#e5e5e5]! dark:text-trustWhite! dark:border-tintBlack dark:bg-lightBlack! flex flex-col items-center"
    >
      <div class="flex flex-col desktop:flex-row items-center">
        <img class="w-[300px]" src="@/assets/svg/erath.svg" alt="" />
        <div class="py-2 flex flex-col ml-2 desktop:ml-8">
          <h4 class="font-bold text-[24px]">
            {{ $t("了解为什么") }}
            <br />
            {{ $t("人已") }}
            <br />
            {{ $t("信任我们的钱包") }}
          </h4>
          <div class="py-8 text-[16px] desktop:w-[420px]">{{ $t("体验的用户") }}</div>
          <p>
            <n-button
              @click="handleLink"
              round
              size="large"
              class="bg-trustBlue! border-0! font-bold text-trustWhite! hover:bg-trustGreen! hover:text-trustBlack! dark:bg-trustGreen! dark:text-trustBlack! dark:hover:bg-trustBlue! dark:hover:text-trustWhite!"
            >
              {{ $t("下载附加元件1") }}
            </n-button>
          </p>
        </div>
      </div>
    </n-card>
    <div class="mt-6 grid grid-cols-1 desktop:grid-cols-2 gap-6 py-1 desktop:px-12">
      <n-card
        v-for="item in cardArr1"
        :key="item.id"
        class="rounded-[20px]! bg-baseWihte! border! border-[#e5e5e5]! dark:text-trustWhite! dark:border-tintBlack dark:bg-lightBlack! flex flex-col items-center"
      >
        <div class="text-[30px] font-bold leading-[1.1] py-10">{{ item.name }}</div>
        <div class="desktop:w-[360px] mb-3 text-[16px]">{{ item.dec }}</div>
      </n-card>
    </div>
    <div class="mt-6 grid grid-cols-1 desktop:grid-cols-2 gap-1 py-1">
      <div class="flex flex-col my-auto px-4">
        <h2 class="font-bold text-[32px] leading-[1.1]">
          {{ $t("随时随地使用") }}
          <br />
          {{ $t("TrustWallet1") }}
        </h2>
        <div class="mt-6 desktop:text-[16px] desktop:w-[400px]">
          {{ $t("浏览器附加元件是我们行动App") }}
        </div>
      </div>
      <img class="h-auto w-full max-w-[335px] mx-auto desktop:max-w-[535px] self-center" src="@/assets/img/image.avif" alt="" />
    </div>
    <div class="mt-6 grid grid-cols-1 desktop:grid-cols-2 gap-6 py-1">
      <hand class="order-2 desktop:order-1 h-auto w-full max-w-[535px] self-center px-4" />
      <div class="order-1 desktop:order-2 flex flex-col my-auto">
        <h2 class="font-bold text-[28px] desktop:text-[32px] leading-[1.1]">
          {{ $t("与我们的社群") }}
          <br />
          {{ $t("一同建构并以其为核心") }}
        </h2>
        <div class="mt-3 text-[16px] desktop:w-[400px]">{{ $t("我们的社群一起建构") }}</div>
      </div>
    </div>
    <div
      class="mt-6 bg-trustBlue! desktop:h-[400px] py-6 desktop:px-8 grid grid-cols-1 desktop:grid-cols-2 gap-3 rounded-[20px] relative overflow-hidden"
    >
      <div class="flex flex-col my-auto px-8">
        <h2 class="default-transition text-trustWhite! font-bold text-[32px] leading-[1.1]!">
          {{ $t("优先透过测试版") }}
          <br />
          {{ $t("尝试新功能") }}
        </h2>
        <div class="default-transition my-4 text-trustWhite! desktop:text-[16px] desktop:w-[400px]">
          {{ $t("成为第一位尝试我们最新功能的人") }}
        </div>
        <p>
          <n-button
            @click="handleLink"
            round
            size="large"
            class="default-transition bg-trustWhite! border-0! font-bold text-trustBlue! hover:bg-trustGreen! hover:text-trustBlack! dark:text-trustBlack! dark:hover:bg-trustGreen! dark:hover:text-trustWhite!"
          >
            {{ $t("尝试测试版") }}
          </n-button>
        </p>
      </div>
      <img
        class="desktop:absolute desktop:right-0 desktop:-top-[10%] desktop:min-h-[520px] desktop:max:-right-[14%]"
        src="@/assets/svg/hand.svg"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { CryptoList } from "@/constants";

import PC from "@/assets/svg/pcB.vue";
import chrome from "@/assets/svg/chrome.vue";
import brave from "@/assets/svg/brave.vue";
import key from "@/assets/svg/key1.vue";
import hand from "@/assets/svg/hands.vue";

const { t } = useI18n();
const router = useRouter();
const height = ref("290px");

const arr = computed(() => [
  { id: 0, name: "Chrome", icon: chrome },
  { id: 1, name: "Brave", icon: brave }
]);

const textArr = computed(() => [
  {
    id: 0,
    name: t("轻松购买加密货币"),
    icon: require("@/assets/svg/browser1.svg"),
    dec: t("透过签帐卡或信用卡"),
    path: ""
  },
  {
    id: 1,
    name: t("赚取奖励并建构您的投资组合"),
    icon: require("@/assets/svg/browser2.svg"),
    dec: t("透过受信任的供应商获得奖励"),
    path: ""
  },
  { id: 2, name: t("探索和管理NFT"), icon: require("@/assets/svg/browser3.svg"), dec: t("探索顶级NFT"), path: "" },
  { id: 3, name: t("安全交换加密货币"), icon: require("@/assets/svg/browser4.svg"), dec: t("多种加密货币"), path: "" }
]);

const cardArr = computed(() => [
  { id: 0, name: t("连接您的硬体钱包"), dec: t("将硬体钱包连接到浏览器附加元件以获得额外一层安全性") },
  { id: 1, name: t("在一个地方管理您的所有钱包"), dec: t("汇入和管理所有钱包") }
]);

const cardArr1 = computed(() => [
  { id: 0, name: t("您的问题已有回应"), dec: t("浏览器附加元件的最常见问题的答案") },
  { id: 1, name: t("专为开发人员建构"), dec: t("测试您的DApp") }
]);

const handleLink = () => router.push("/download");
</script>

<style lang="scss" scoped></style>
