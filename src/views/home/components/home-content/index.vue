<template>
  <div class="home-content mt-4 relative">
    <n-carousel autoplay class="my-1 rounded-[20px] border! h-[314px] w-full tablet:w-[90%] desktop:w-full mx-auto">
      <img class="w-full object-cover" src="@/assets/svg/blog/blog1.svg" />
      <img class="w-full object-cover" src="@/assets/svg/blog/blog2.svg" />
      <img class="w-full object-cover" src="@/assets/svg/blog/blog3.svg" />
    </n-carousel>
    <section
      class="m-auto mt-6! flex w-full flex-col-reverse justify-between text-trustWhite rounded-[20px] bg-trustBlue px-5 py-10! tablet:flex-row tablet:items-center desktop:rounded-[30px] desktop:p-16 desktop:px-[100px] gap-9 [&>div>p]:max-w-[60ch]!"
    >
      <div class="px-12">
        <div class="default-transition text-[18px]">
          <span class="text-[28px]! font-bold">{{ $t("在上创建") }}</span>
          <br />
          <div class="text-[15px] my-4">
            {{ $t("实施细节") }}
          </div>
        </div>
        <p class="mt-5! inline-block">
          <span
            @click="handleLink"
            class="mb-5! text-trustBlue! text-[16px]! cursor-pointer! px-8 py-2! bg-trustWhite! hover:bg-trustGreen! text-center! rounded-full!"
          >
            {{ $t("查看我们的开发人员文件") }}
          </span>
        </p>
      </div>
      <div class="mx-auto tablet:mx-[unset] py-8">
        <img class="h-auto w-[200px] tablet:w-[220px]" src="@/assets/svg/tou.svg" alt="" />
      </div>
    </section>
    <div class="mt-10 flex flex-col py-6 w-full rounded-[20px] bg-gradientLightBlueToBlue text-trustWhite relative z-9">
      <div class="flex flex-col items-center px-6">
        <div class="text-[36px] tablet:text-[36px] desktop:text-[48px] mx-auto font-bold text-center">{{ $t("一个平台") }}</div>
        <div class="text-[18px] desktop:text-[16px] mx-auto text-center desktop:w-[690px] break-all">
          {{ $t("多链平台") }}
        </div>
      </div>
      <div class="w-full py-6 flex flex-col items-center">
        <div class="w-[80%]">
          <n-input class="rounded-full! border! border-trustBlack!" v-model:value="value" @keydown.enter.prevent>
            <template #prefix>
              <n-icon :component="Search" />
            </template>
          </n-input>

          <div class="default-transition mt-8 bg-trustWhite rounded-[20px] text-trustBlack px-5 py-5">
            <div v-if="!isMobile" class="w-full flex flex-row mb-5">
              <div class="default-transition font-inter">
                {{ cTitle?.[0]?.name }}
              </div>
              <div class="w-[55%] ml-auto flex flex-row items-center justify-between">
                <div v-for="item in cTitle.filter((item) => +item.id !== 0)" :key="item.id">
                  {{ item.name }}
                </div>
              </div>
            </div>
            <div class="flex flex-row items-center" v-for="item in cArr" :key="item.id">
              <div class="flex desktop:flex-row items-center gap-5 mb-5">
                <img class="w-[45px] h-[45px] rounded-full" :src="item.img" alt="" />
                <span>
                  {{ item.name }}
                  <div v-if="isMobile">
                    <div v-for="item in cTitle.filter((item) => +item.id !== 0)" :key="item.id">
                      {{ item.name }}
                    </div>
                  </div>
                </span>
              </div>
              <div class="w-[10%] mb-6 desktop:mb-0 desktop:w-[55%] ml-auto flex flex-col desktop:flex-row gap-3 items-center justify-between">
                <img src="@/assets/svg/true.svg" alt="" />
                <img src="@/assets/svg/true.svg" alt="" />
                <img :src="![2].includes(item.id) ? require('@/assets/svg/true.svg') : require('@/assets/svg/false.svg')" alt="" />
                <img src="@/assets/svg/true.svg" alt="" />
                <img :src="![1, 2].includes(item.id) ? require('@/assets/svg/true.svg') : require('@/assets/svg/false.svg')" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col font-bold items-center desktop:flex-row tablet:items-center desktop:items-start! justify-center desktop:gap-16 py-2 text-[28px]"
      >
        <span>{{ $t("超过资产") }}</span>
        <span>{{ $t("超过NFT") }}</span>
        <span>{{ $t("超过区块链") }}</span>
      </div>
    </div>
    <div class="flex flex-col w-full rounded-[20px] bg-gradientYellowToPink text-trustBlack relative bottom-[30px] z-8">
      <div class="mx-auto py-[90px] flex flex-col items-center">
        <div class="text-[48px] font-bold">{{ $t("浏览世界") }}</div>
        <div class="desktop:text-[16px]">{{ $t("透过我们") }}</div>
      </div>

      <div
        class="bg-trustWhite w-[85%] mx-auto rounded-[20px] px-5 flex flex-col-reverse tablet:flex-col-reverse desktop:flex-row justify-space-between items-center mb-16 dark:bg-trustBlack! dark:text-trustWhite"
      >
        <div class="text-[20px] mb-1 px-2">
          <div class="font-bold text-[26px] tablet:text-[26px]! desktop:text-[36px] leading-[1.1] mt-5">{{ $t("交易所储值加密货币") }}</div>
          <div class="text-[14px] tablet:text-[14px] desktop:text-[16px] py-6">
            {{ $t("掌控钱包") }}
          </div>
          <p class="default-transition inline-block desktop:relative desktop:top-[30px]">
            <span
              @click="handleDownload"
              class="flex flex-row justify-center text-[14px] px-4! mb-6 h-10 text-trustBlue! cursor-pointer items-center rounded-full border border-trustBlue hover:bg-trustBlue hover:text-white! dark:border-trustGreen dark:bg-trustBlack! dark:text-trustGreen! dark:hover:bg-trustGreen! dark:hover:text-trustBlack!"
            >
              {{ $t("以储值跨出第一步") }}
            </span>
          </p>
        </div>
        <img
          class="bottom-0 h-auto w-full rounded-[20px] dark:bg-lightBlack tablet:w-[50%] desktop:max-w-[445px]"
          src="@/assets/img/iphone.avif"
          alt="iphone"
        />
      </div>
    </div>
    <div class="flex flex-col w-full rounded-[20px] bg-gradientYellowToGreen text-trustBlack relative bottom-[60px] z-7">
      <div class="mx-auto py-[90px] flex flex-col items-center px-6">
        <div class="text-[36px] desktop:text-[48px] font-bold">{{ $t("零个人追踪") }}</div>
        <div class="text-[14px] desktop:text-[16px]">{{ $t("确保您的钱包安全") }}</div>
      </div>

      <div
        class="bg-trustWhite w-[80%] mx-auto rounded-[20px] flex flex-col-reverse desktop:flex-row justify-space-between items-center px-3 desktop:px-5 mb-10 dark:bg-trustBlack! dark:text-trustWhite"
      >
        <div class="desktop:w-[50%] py-10 desktop:py-20">
          <div>
            <div class="font-bold desktop:text-[32px] py-6">{{ $t("加密货币资产的真正所有权") }}</div>
            <div class="desktop:text-[16px] mb-5">{{ $t("能控制或存取") }}</div>
          </div>

          <div
            @click="handleDownload"
            class="default-transition flex justify-center w-[110px] h-[45px] desktop:mt-5 text-trustWhite! bg-trustBlue cursor-pointer items-center rounded-full border border-trustBlue text-center hover:bg-trustBlue hover:text-white! dark:border-trustGreen dark:text-trustGreen! dark:hover:bg-trustGreen! dark:hover:text-trustBlack! before:transition before:[transition-property:width] before:duration-500"
          >
            {{ $t("新手指引") }}
          </div>
        </div>
        <img class="mx-auto h-auto w-full max-w-[280px]" src="@/assets/svg/key.svg" alt="iphone" />
      </div>
      <div class="mx-1 my-2 flex flex-wrap items-stretch justify-center gap-4 px-6">
        <div
          v-for="img in itemArr"
          :key="img.id"
          class="default-transition rounded-[20px] desktop:rounded-[30px] border border-tintBlue bg-trustWhite dark:border-tintBlack grid w-full min-w-[250px] flex-1 gap-10 p-5 dark:bg-trustBlack! dark:text-trustWhite"
        >
          <h4 class="default-transition text-[24px] text-trustBlack font-bold dark:text-trustWhite">
            {{ img.name }}
          </h4>
          <img class="m-auto h-40 w-auto tablet:h-[100px]" :src="img.path" alt="" />
          <div class="default-transition desktop:text-[15px] text-lightBlack font-inter dark:text-trustWhite">
            {{ img.text }}
          </div>
        </div>
      </div>
      <div
        @click="$router.push('/security')"
        class="default-transition px-6 mt-4 text-[16px] text-center mb-10 mx-auto flex flex-row justify-center h-[50px] text-trustBlack! cursor-pointer items-center rounded-full border border-trustBlack hover:bg-trustBlack hover:text-white! dark:border-trustGreen dark:text-trustGreen! dark:bg-trustBlack dark:hover:bg-trustWhite dark:hover:text-trustBlack!"
      >
        {{ $t("进一步了解隐私和安全性") }}
      </div>
    </div>

    <div class="grid w-full gap-2 tablet:min-h-[450px] tablet:grid-cols-2">
      <n-card
        class="rounded-[30px]! bg-baseWihte! border! dark:border-tintBlack dark:bg-lightBlack! flex flex-col items-center justify-space-between gap-5"
      >
        <div class="">
          <h3 class="default-transition text-trustBlack text-[24px] desktop:text-[32px] font-bold dark:text-trustWhite">
            {{ $t("您的一站式钱包") }}
          </h3>
          <div class="default-transition text-[14px] desktop:text-[16px] mt-4 font-inter dark:text-trustWhite">
            {{ $t("在同一個地方") }}
          </div>
        </div>
        <div
          class="default-transition mt-4 mb-4 flex w-full min-w-[220px] max-w-fit items-stretch rounded-full border border-trustBlack p-[5px] [transition-property:border-color] dark:border-tintBlack tablet:max-w-[280px]"
        >
          <button
            :class="[
              +activeIndex === 0 && theme !== 'dark'
                ? 'active'
                : +activeIndex === 0 && theme === 'dark'
                ? 'dark:bg-trustGreen! dark:text-trustBlack!'
                : ''
            ]"
            class="default-transition w-[50%] flex-1 rounded-full min-w-0 cursor-pointer py-3"
            @click="handleClick(0)"
          >
            {{ $t("手机") }}
          </button>
          <button
            class="default-transition w-[50%] flex-1 rounded-full min-w-0 cursor-pointer py-3 dark:text-trustWhite!"
            :class="[
              +activeIndex === 1 && theme !== 'dark'
                ? 'active '
                : +activeIndex === 1 && theme === 'dark'
                ? 'dark:bg-trustGreen! dark:text-trustBlack!'
                : ''
            ]"
            @click="handleClick(1)"
          >
            {{ $t("扩充功能") }}
          </button>
        </div>
        <n-button
          @click="handleDownload"
          round
          size="large"
          class="bg-trustBlue! font-bold text-trustWhite! hover:bg-trustGreen! hover:text-trustBlack! dark:bg-trustGreen! dark:text-trustBlack! dark:hover:bg-trustBlue! dark:hover:text-trustWhite!"
        >
          {{ +activeIndex === 0 ? `${$t("下载行动")}APP` : $t("下载附加元件") }}
        </n-button>
      </n-card>
      <n-card
        class="rounded-[30px]! bg-trustBlack! border! dark:border-tintBlack dark:bg-lightBlack flex flex-col items-center justify-space-between"
      >
        <video
          v-if="+activeIndex === 0"
          class="object-cover w-full h-full rounded-3xl"
          src="@/assets/video/mobile-application.mp4"
          autoplay
          loop
          muted
        />
        <img v-else class="object-cover w-full h-full rounded-3xl" src="@/assets/img/browser-extension.gif" alt="" />
      </n-card>
    </div>

    <div class="w-full max-w-screen-max mt-6">
      <h2 class="default-transition text-[28px] desktop:text-[32px] text-trustBlack font-wixMadefor font-bold dark:text-trustWhite max-w-[28ch]">
        {{ $t("受由社群驱动") }}
      </h2>
      <div class="default-transition text-lightBlack text-[16px] font-inter dark:text-trustWhite mt-1 max-w-[57ch] tablet:mt-5">
        {{ $t("加入我们充满活力") }}
      </div>
    </div>

    <div class="mt-10 flex gap-3.5 overflow-x-auto full-screen-section-mobile max-w-screen-max items-stretch">
      <div v-for="item in personArr" :key="item.id" class="min-w-[150px] tablet:min-w-[375px] desktop:min-w-[unset] desktop:flex-1">
        <img class="h-[253px] w-full object-cover tablet:h-[506px] rounded-[20px] mb-4" :src="item.src" alt="" />
        <strong class="text-[20px]">{{ item.name }}</strong>
        <div class="text-[16px]">{{ item.dec }}</div>
      </div>
    </div>
    <n-button
      @click="handleJoin"
      round
      size="large"
      class="bg-trustBlue! font-bold text-trustWhite! hover:bg-trustGreen! hover:text-trustBlack! dark:bg-trustGreen! dark:text-trustBlack! dark:hover:bg-trustBlue! dark:hover:text-trustWhite!"
    >
      {{ $t("Telegram社群") }}
    </n-button>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Search } from "@vicons/ionicons5";

import { useSystem } from "@/store";
import { useDevice } from "@/hooks";
import { storeToRefs } from "pinia";
import { useI18n } from "vue-i18n";
import router from "@/router";

const { theme } = storeToRefs(useSystem());
const { t } = useI18n();
const { isMobile } = useDevice();
const value = ref("");

const itemArr = computed(() => [
  { id: 0, name: t("透过加密提高安全性"), path: require("@/assets/svg/1.svg"), text: t("使用我们的加密云端") },
  { id: 1, name: t("零个人追踪"), path: require("@/assets/svg/2.svg"), text: t("我们不会追踪任何个人资讯") },
  { id: 2, name: t("风险交易的主动警报"), path: require("@/assets/svg/3.svg"), text: t("风险地址") }
]);

const cTitle = computed(() => [
  { id: 0, name: t("区块链") },
  { id: 1, name: t("购买") },
  { id: 2, name: t("出售") },
  { id: 3, name: t("交换交易") },
  { id: 3, name: t("理财") },
  { id: 3, name: t("DApp") }
]);

const cArr = [
  {
    id: 0,
    img: require("@/assets/img/copro/bnb.avif"),
    name: "BNB Smart Chain ( BNB )",
    buy: "",
    sell: "",
    swap: "",
    finance: "",
    dapp: ""
  },
  {
    id: 1,
    img: require("@/assets/img/copro/sol.avif"),
    name: "Solana ( SOL )",
    buy: "",
    sell: "",
    swap: "",
    finance: "",
    dapp: ""
  },
  { id: 2, img: require("@/assets/img/copro/sui.avif"), name: "Sui ( SUI )", buy: "", sell: "", swap: "", finance: "", dapp: "" },
  {
    id: 3,
    img: require("@/assets/img/copro/eth.png"),
    name: "Ethereum ( ETH )",
    buy: "",
    sell: "",
    swap: "",
    finance: "",
    dapp: ""
  }
];

const personArr = computed(() => [
  {
    id: 0,
    name: "Juan",
    dec: t("最简单的方法是亲手尝试"),
    src: require("@/assets/img/juan.avif")
  },
  { id: 1, name: "Jen", dec: t("保护您的私钥"), src: require("@/assets/img/jen.avif") },
  {
    id: 2,
    name: "Harry",
    dec: t("作为该领域的新手"),
    src: require("@/assets/img/harry.avif")
  },
  {
    id: 3,
    name: "Esmart",
    dec: t("我非常喜欢与DeFi"),
    src: require("@/assets/img/esmart.avif")
  }
]);
const activeIndex = ref(0);

const handleClick = (index) => {
  activeIndex.value = index;
};

const handleLink = () => window.open("https://developer.trustwallet.com/developer/", "_blank");

const handleDownload = () => router.push("/download");

const handleJoin = () => window.open("https://t.me/trustwallet", "_blank");
</script>

<style lang="less" scoped>
.active {
  background: #0500ff;
  color: #ffffff;
}
</style>
