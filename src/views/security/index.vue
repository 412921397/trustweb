<template>
  <div class="overflow-hidden">
    <div class="bg-trustBlue rounded-[20px] py-12 grid grid-cols-1 desktop:grid-cols-2 justify-items-center items-center">
      <div class="default-transition text-trustWhite flex flex-col order-2 px-4 desktop:px-0 desktop:order-1">
        <h2 class="font-bold text-[30px] leading-[1.1]">
          {{ $t("您的安全") }}
          <br />
          {{ $t("隐私我们视为优先") }}
        </h2>
        <div class="text-[16px] mt-6 desktop:w-[400px]">{{ $t("安全和隐私是我们的行动核心") }}</div>
      </div>
      <img class="mb-3 order-1 desktop:order-2" src="@/assets/svg/security.svg" alt="" />
    </div>
    <n-card
      class="mt-8 rounded-[20px]! bg-baseWihte! border! border-[#e5e5e5]! dark:text-trustWhite! dark:border-tintBlack dark:bg-lightBlack! flex flex-col items-center"
    >
      <div class="grid grid-cols-1 desktop:grid-cols-2 gap-8 items-center py-6 default-transition">
        <img class="mb-6 desktop:mb-0" src="@/assets/img/security.avif" alt="" />
        <div>
          <div class="font-bold text-[24px]">{{ $t("我们建立足以保护您的资产的安全功能") }}</div>
          <div class="py-6">{{ $t("内建风险监控工具") }}</div>
          <n-button
            round
            @click="$router.push('/download')"
            size="large"
            class="bg-trustBlue! font-bold text-trustWhite! hover:bg-trustGreen! dark:bg-trustGreen! dark:text-trustBlack! dark:hover:bg-trustBlue! dark:hover:text-trustWhite!"
          >
            {{ $t("下载") }} Trust Wallet
          </n-button>
        </div>
      </div>
    </n-card>
    <n-card
      class="mt-8 rounded-[20px]! bg-baseWihte! border! border-[#e5e5e5]! dark:text-trustWhite! dark:border-tintBlack dark:bg-lightBlack! flex flex-col items-center"
    >
      <div class="default-transition flex flex-col items-center py-8">
        <h2 class="font-bold text-[24px]">{{ $t("由产业领导者独立审核") }}</h2>
        <div class="flex flex-wrap justify-center gap-3 desktop:flex-row mt-8 justify-space-between">
          <img class="h-auto w-[155px] tablet:w-[165px] desktop:mr-[30px]" v-for="img in imgArr" :key="img.id" :src="img.name" alt="" />
        </div>
      </div>
    </n-card>
    <n-card
      class="mt-8 rounded-[20px]! bg-baseWihte! border! border-[#e5e5e5]! dark:text-trustWhite! dark:border-tintBlack dark:bg-lightBlack! flex flex-col items-center"
    >
      <div class="flex flex-col items-center default-transition">
        <div class="font-bold text-[24px] py-6">{{ $t("ISO认证") }}</div>
        <div class="flex flex-row mb-2">
          <img class="mr-8 h-auto w-[100px]" :src="require('@/assets/svg/image.8354ab2c.svg')" alt="" />
          <img class="h-auto w-[100px]" :src="require('@/assets/svg/image.8354ab2c.svg')" alt="" />
        </div>
      </div>
    </n-card>
    <div class="mt-8">
      <h2 class="default-transition font-bold text-[24px]">{{ $t("透过主动安全警告保护您的加密货币") }}</h2>
      <div class="grid grid-cols-4 gap-75 desktop:gap-8 items-center py-8 overflow-x-auto">
        <n-card
          v-for="item in cardArr"
          :key="item.id"
          class="flex-1 min-w-[285px] desktop:min-w-[251px] rounded-[20px]! bg-baseWihte! border! border-[#e5e5e5]! dark:text-trustWhite! dark:border-tintBlack dark:bg-lightBlack! flex flex-col items-center"
        >
          <div class="font-bold h-24 text-[20px] mb-5 leading-[1.1]">{{ item.name }}</div>
          <img :src="item.img" alt="" />
        </n-card>
      </div>
    </div>
    <div class="mt-8">
      <h2 class="default-transition font-bold text-[24px]">
        {{ $t("自2017年起") }}
        <br />
        {{ $t("经历竞争测试") }}
      </h2>
      <div class="desktop:py-3 text-[16px]">{{ $t("受到全球超过") }}</div>
      <n-card
        class="mt-8 rounded-[20px]! bg-baseWihte! border! border-[#e5e5e5]! dark:text-trustWhite! dark:border-tintBlack dark:bg-lightBlack! flex flex-col items-center"
      >
        <div class="grid grid-cols-1 desktop:grid-cols-2 gap-1 items-center py-3">
          <div class="flex flex-col order-2 desktop:order-1">
            <div class="default-transition font-bold text-[24px]">{{ $t("自2017经历竞争测试") }}</div>
            <div class="default-transition py-3 text-[16px]">
              {{ $t("未来也是如此") }}
            </div>
          </div>
          <img class="order-1 desktop:order-2 mb-6 m-auto h-auto w-[60%] max-w-[280px] tablet:max-w-[170px]" src="@/assets/svg/nft/n4.svg" alt="" />
        </div>
      </n-card>
    </div>
    <section class="mt-8!">
      <div class="grid grid-cols-1 desktop:grid-cols-2 gap-6 desktop:px-4">
        <n-card
          v-for="item in cardArr1"
          :key="item.id"
          class="rounded-[20px]! bg-baseWihte! border! border-[#e5e5e5]! dark:text-trustWhite! dark:border-tintBlack dark:bg-lightBlack! flex flex-col items-center"
        >
          <div class="font-bold text-[24px] flex flex-row items-center">
            <component :is="item.component" class="mr-1" />
            {{ item.title }}
          </div>
          <div class="py-6">{{ item.desc }}</div>
          <div class="flex flex-row items-center cursor-pointer" @click="handleLink(item.path)">
            {{ $t("查看更多") }}
            <ArrowRight class="ml-3" />
          </div>
        </n-card>
      </div>
    </section>
    <section class="mt-8!">
      <n-card
        class="rounded-[20px]! bg-baseWihte! border! border-[#e5e5e5]! dark:text-trustWhite! dark:border-tintBlack dark:bg-lightBlack! flex flex-col items-center"
      >
        <h2 class="default-transition text-center! font-bold text-[24px] mb-10!">{{ $t("我们的安全合作伙伴") }}</h2>
        <div class="flex flex-wrap desktop:flex-row gap-5 justify-center items-center">
          <img class="h-auto w-[155px] desktop:w-[165px]" v-for="img in imgArr1" :key="img.id" :src="img.name" alt="" />
        </div>
      </n-card>
    </section>
    <section class="mt-8!">
      <div>
        <h2 class="default-transition font-bold text-[24px]">{{ $t("自我托管1") }}</h2>
        <div class="default-transition desktop:py-3 text-[16px]">{{ $t("我们绝不存取或储存您的私钥") }}</div>
      </div>
      <div class="mt-8 grid grid-cols-1 desktop:grid-cols-3 gap-6">
        <n-card
          v-for="item in cardArr2"
          :key="item.id"
          class="rounded-[20px]! bg-baseWihte! border! border-[#e5e5e5]! dark:text-trustWhite! dark:border-tintBlack dark:bg-lightBlack! flex flex-row items-center"
        >
          <div class="default-transition text-left! font-bold text-[24px] mb-8!">{{ item.name }}</div>
          <component :is="item.img" class="mx-auto mb-8 w-[60%]" />
          <div class="default-transition desktop:py-3 text-[16px]">{{ item.desc }}</div>
        </n-card>
      </div>
    </section>
    <section class="mt-8! grid! grid-cols-1 desktop:grid-cols-2! gap-6!">
      <div
        class="bg-trustBlue rounded-[20px] text-trustWhite flex flex-col-reverse desktop:flex-row items-center px-6 py-6"
        v-for="item in footerArr"
        :key="item.id"
      >
        <div class="flex flex-col">
          <h2 class="default-transition font-bold text-[24px] leading-[1.1]">{{ item.name }}</h2>
          <p>
            <n-button
              round
              size="large"
              class="bg-trustWhite! mt-8! font-bold text-trustBlue! hover:bg-trustGreen! dark:bg-trustGreen! dark:text-trustBlack! dark:hover:bg-trustBlue! dark:hover:text-trustWhite!"
            >
              {{ item.id === 0 ? $t("取得安全提示") : $t("联系客服") }}
            </n-button>
          </p>
        </div>
        <component :is="item.component" class="m-auto h-auto w-[193px] min-w-[193px] mb-6" />
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from "vue";

import { useI18n } from "vue-i18n";

import KeyIcon from "@/assets/svg/security/key.vue";
import SafeIcon from "@/assets/svg/security/safe.vue";
import GIcon from "@/assets/svg/security/gantan.vue";
import CIcon from "@/assets/svg/security/chong.vue";
import ArrowRight from "@/assets/svg/arrow-right.vue";
import LockIcon from "@/assets/svg/security/lock.vue";
import Key1Icon from "@/assets/svg/security/key1.vue";
import PcpicIcon from "@/assets/svg/security/pcpic.vue";
import F1Icon from "@/assets/svg/security/11.vue";
import F2Icon from "@/assets/svg/security/12.vue";

const { t } = useI18n();
const imgArr = [
  { id: 0, name: require("@/assets/svg/security/s1.svg") },
  { id: 1, name: require("@/assets/svg/security/s2.svg") },
  { id: 2, name: require("@/assets/svg/security/s3.svg") },
  { id: 3, name: require("@/assets/svg/security/s4.svg") },
  { id: 4, name: require("@/assets/svg/security/s5.svg") }
];

const imgArr1 = [
  { id: 0, name: require("@/assets/svg/security/biance.svg") },
  { id: 1, name: require("@/assets/svg/security/hashdit.svg") },
  { id: 2, name: require("@/assets/svg/security/hexagate.svg") }
];

const cardArr = computed(() => [
  { id: 0, name: t("透过主动安全警告保护您的加密货币"), img: require("@/assets/img/security/s1.avif") },
  { id: 1, name: t("使用加密云端备份保护您的资产"), img: require("@/assets/img/security/s2.avif") },
  { id: 2, name: t("连接硬体钱包以增加额外一层安全性"), img: require("@/assets/img/security/s3.avif") },
  { id: 3, name: t("隐藏和举报不安全的NFT"), img: require("@/assets/img/security/s4.avif") }
]);

const cardArr1 = computed(() => [
  {
    id: 0,
    title: t("强力加密"),
    component: KeyIcon,
    desc: t("我们的所有产品都经过强力加密"),
    path: "https://community.trustwallet.com/t/a-complete-overview-of-trust-wallet-security/628739#state-of-the-art-encryption-security-3"
  },
  {
    id: 1,
    title: t("独立安全审核"),
    component: SafeIcon,
    desc: t("确保您的资产和资料安全"),
    path: "https://trustwallet.com/zh-TW/blog/complete-overview-of-trust-wallet-security"
  },
  {
    id: 2,
    title: t("安全监控"),
    component: GIcon,
    desc: t("我们透过持续的安全监控主动识别风险"),
    path: "https://trustwallet.com/zh-TW/blog/a-safer-web3-experience-with-trust-wallet-security-scanner"
  },
  { id: 3, title: t("漏洞悬赏"), component: CIcon, desc: t("并能更快回应加密货币生态系中的威胁"), path: "https://bugcrowd.com/engagements/binance" }
]);

const cardArr2 = computed(() => [
  { id: 0, name: t("自我托管1"), img: Key1Icon, desc: t("我们绝不存取或储存您的私钥") },
  {
    id: 1,
    name: t("零个人追踪"),
    img: LockIcon,
    desc: t("我们绝不追踪或储存您的个人资讯")
  },
  { id: 2, name: t("无需注册"), img: PcpicIcon, desc: t("无需个人资料") }
]);

const footerArr = computed(() => [
  { id: 0, name: t("探索更多保障资产安全的方法"), component: F1Icon },
  { id: 1, name: "Get help when you need it", component: F2Icon }
]);

const handleLink = (link) => window.open(link);
</script>

<style lang="scss" scoped></style>
