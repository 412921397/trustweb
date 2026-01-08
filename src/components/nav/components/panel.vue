<template>
  <div>
    <template v-if="type === 'wallet'">
      <div class="grid desktop:grid-cols-2 gap-x-10">
        <img v-if="!isMobile" class="h-[200px] w-auto max-w-[200px] object-contain max:block mx-auto" src="@/assets/svg/panel/dun.svg" alt="" />
        <div class="flex flex-col desktop:flex-row gap-5 desktop:h-10">
          <div class="flex flex-row" v-for="item in walletArr" :key="item.id">
            <component class="mr-3" :is="item.icon" />
            <div class="cursor-pointer hover:underline" @click="handleLink(item)">
              <div>{{ item.name }}</div>
              <div class="text-[12px] text-[#999]">{{ item.desc }}</div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <template v-if="type === 'feature'">
      <div class="flex flex-row gap-x-3">
        <img v-if="!isMobile" class="h-[200px] w-auto max-w-[200px] object-contain max:block mx-auto" src="@/assets/svg/panel/1.svg" alt="" />
        <div class="grid desktop:grid-cols-3 gap-x-6 gap-y-3 desktop:gap-y-0 desktop:h-4">
          <div class="flex flex-row justify-start items-center" v-for="item in featureArr" :key="item.id">
            <component class="mr-3" :is="item.icon" />
            <div class="cursor-pointer hover:underline" @click="handleLink(item)">
              <div>{{ item.name }}</div>
              <div class="text-[12px] text-[#999]">{{ item.desc }}</div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <template v-if="type === 'build'">
      <div class="flex flex-row gap-x-10">
        <img v-if="!isMobile" class="h-[200px] w-auto max-w-[200px] object-contain max:block mx-auto" src="@/assets/svg/tou.svg" alt="" />
        <div class="grid desktop:grid-cols-3 gap-x-6 gap-y-3 desktop:gap-y-0 desktop:h-4">
          <div class="flex flex-row justify-start items-center" v-for="item in buildArr" :key="item.id">
            <component class="mr-3" :is="item.icon" />
            <div class="cursor-pointer hover:underline" @click="handleLink(item)">
              <div>{{ item.name }}</div>
              <div class="text-[12px] text-[#999]">{{ item.desc }}</div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <template v-if="type === 'help'">
      <div class="flex flex-row gap-x-10">
        <hand v-if="!isMobile" class="h-[200px] w-auto max-w-[200px] object-contain max:block mx-auto" />
        <div class="grid desktop:grid-cols-3 gap-x-6 gap-y-3 desktop:gap-y-0 desktop:h-4">
          <div class="flex flex-row justify-start items-center" v-for="item in faqArr" :key="item.id">
            <component class="mr-3" :is="item.icon" />
            <div class="cursor-pointer hover:underline" @click="handleLink(item)">
              <div>{{ item.name }}</div>
              <div class="text-[12px] text-[#999]">{{ item.desc }}</div>
            </div>
          </div>
        </div>
      </div>
    </template>

    <template v-if="type === 'about'">
      <div class="flex flex-row gap-x-10">
        <img v-if="!isMobile" class="h-[200px] w-auto max-w-[200px] object-contain max:block mx-auto" src="@/assets/svg/panel/trust.svg" alt="" />
        <div class="grid desktop:grid-cols-3 gap-x-6 gap-y-3 desktop:gap-y-0 desktop:h-4">
          <div class="flex flex-row justify-start items-center" v-for="item in aboutArr" :key="item.id">
            <component class="mr-3" :is="item.icon" />
            <div class="cursor-pointer hover:underline" @click="handleLink(item)">
              <div>{{ item.name }}</div>
              <div class="text-[12px] text-[#999]">{{ item.desc }}</div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { computed, defineProps, defineEmits } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

import { useDevice } from "@/hooks";

import Phone from "@/assets/svg/panel/phone.vue";
import Box from "@/assets/svg/panel/box.vue";
import huan from "@/assets/svg/panel/huan.vue";
import humbugger from "@/assets/svg/panel/humbugger.vue";
import kuai from "@/assets/svg/panel/kuai.vue";
import s from "@/assets/svg/panel/s.vue";
import buy from "@/assets/svg/panel/buy.vue";
import swift from "@/assets/svg/panel/swift.vue";
import s1 from "@/assets/svg/panel/s1.vue";
import wallet from "@/assets/svg/panel/wallet.vue";
import dapp from "@/assets/svg/panel/dapp.vue";
import report from "@/assets/svg/panel/report.vue";
import moon from "@/assets/svg/panel/moon.vue";
import hand from "@/assets/svg/hands.vue";
import h1 from "@/assets/svg/panel/h1.vue";
import h2 from "@/assets/svg/panel/h2.vue";
import a1 from "@/assets/svg/panel/a1.vue";
import a2 from "@/assets/svg/panel/a2.vue";
import a3 from "@/assets/svg/panel/a3.vue";
import a4 from "@/assets/svg/panel/a4.vue";
import a5 from "@/assets/svg/panel/a5.vue";
import a6 from "@/assets/svg/panel/a6.vue";
import a7 from "@/assets/svg/panel/a7.vue";

defineProps({
  type: {
    type: String,
    default: ""
  }
});

const emits = defineEmits(["close"]);

const router = useRouter();
const { t } = useI18n();
const { isMobile } = useDevice();

const walletArr = computed(() => [
  { id: 0, icon: Phone, name: t("行动版"), desc: t("Web3世界就在您的口袋里"), path: "/download" },
  { id: 1, icon: Box, name: t("浏览器附加元件"), desc: t("优化的桌面Web3体验"), path: "/browser-extension" }
]);

const featureArr = computed(() => [
  { id: 0, icon: huan, name: t("交换"), desc: t("安全顺畅地交换"), path: "/swap" },
  { id: 1, icon: humbugger, name: t("质押"), desc: t("赚取加密货币奖励同时确保网路安全"), path: "/staking" },
  { id: 2, icon: kuai, name: "NFT", desc: t("探索NFT世界"), path: "/nft" },
  { id: 3, icon: s, name: t("安全性"), desc: t("了解我们如何确保您的资产和Web3旅程安全"), path: "/security" },
  { id: 4, icon: buy, name: t("购买加密货币"), desc: t("在五分钟内购买加密货币"), path: "/buy-crypto" },
  { id: 5, icon: swift, name: t("SWIFT智能合约钱包"), desc: t("透过帐户抽象功能轻松探索Web3"), path: "/swift" }
]);

const buildArr = computed(() => [
  { id: 0, icon: s1, name: t("开发人员文件"), desc: t("取得建构强力Web3应用程式的指南"), url: "https://developer.trustwallet.com/developer/" },
  {
    id: 1,
    icon: wallet,
    name: t("钱包核心"),
    desc: t("开源以行动为中心的加密货币钱包库"),
    url: "https://developer.trustwallet.com/developer/wallet-core"
  },
  { id: 2, icon: dapp, name: t("提交DApp"), desc: t("让数百万人看见您的DApp"), url: "https://developer.trustwallet.com/developer/listing-new-dapps" },
  { id: 3, icon: report, name: t("让资产上架"), desc: t("提高资产曝光率"), url: "https://developer.trustwallet.com/developer/listing-new-assets" },
  {
    id: 4,
    icon: moon,
    name: "TRust Moon",
    desc: "Trust Wallet's accelerator helping Web3 builders launch and scale",
    url: "https://trustwallet.com/zh-TW/blog/announcements/introducing-trust-moon-the-web3-accelerator-by-trust-wallet"
  }
]);

const faqArr = computed(() => [
  { id: 0, icon: h1, name: t("常见问题"), desc: t("为您最迫切的问题取得解答"), url: "https://support.trustwallet.com/support/home" },
  { id: 1, icon: h2, name: t("联系我们"), desc: t("联系取得个人化支援"), url: "https://twtholders.trustwallet.com/" }
]);

const aboutArr = computed(() => [
  { id: 0, icon: a1, name: t("关于我们"), desc: t("了解我们是谁以及我们的动力"), path: "/about-us" },
  { id: 1, icon: a2, name: t("工作机会"), desc: t("和我们一起打造Web3的未来"), path: "/careers" },
  { id: 2, icon: a3, name: t("新闻工具"), desc: t("下载我们的官方标志和其他媒体资产"), path: "/press" },
  { id: 3, icon: a4, name: t("博客"), desc: t("随时了解Web3趋势与见解"), path: "/blog" },
  { id: 4, icon: a5, name: t("信任小队"), desc: t("领导学习并开启您的Web3旅程"), path: "/browser-extension" },
  { id: 5, icon: a6, name: t("服务条款"), desc: t("我们的服务使用须知"), path: "" },
  { id: 6, icon: a7, name: t("隐私政策"), desc: t("您的隐私很重要了解我们如何保护它"), path: "/privacy-notice" }
]);

const handleLink = (item) => {
  if (item.url) return window.open(item.url, "_blank");
  router.push(item.path);
  emits("close");
};
</script>

<style lang="scss" scoped></style>
