<template>
  <div>
    <div class="flex flex-col bg-trustBlue text-trustWhite rounded-[20px] py-16 px-16">
      <h1 class="text-[32px] font-bold leading-[1.1]">
        {{ $t("可随您喜好的方式") }}
        <br />
        {{ $t("购买加密货币1") }}
      </h1>
      <div class="mt-6 desktop:w-[360px] text-[16px]">{{ $t("从超过110") }}</div>
    </div>
    <div class="mt-6 grid grid-cols-1 desktop:grid-cols-2 gap-1 py-1 desktop:px-16">
      <Iphone class="mx-auto" />
      <n-card
        class="shrink desktop:py-6 rounded-[20px]! bg-baseWihte! border! border-[#e5e5e5]! dark:text-trustWhite! dark:border-tintBlack dark:bg-lightBlack! flex flex-col justify-space-between"
      >
        <div class="font-bold text-[16px] text-center px-2 mb-2.5">{{ $t("透过值得信赖的合作伙伴和付款方式进行比较和购买") }}</div>
        <div class="grid grid-cols-3 gap-4 desktop:gap-12">
          <div
            v-for="img in iconArr"
            :key="img.id"
            class="w-[110px] desktop:w-full desktop:h-[135px] rounded-[10px] flex items-center justify-center px-[5px] border! border-[#e5e5e5]! dark:border-tintBlack"
            :class="{ 'bg-[#840DFF]!': +img.id === 3, 'bg-trustBlack': +img.id === 7, 'bg-[#fff]!': ![0, 3, 7].includes(+img.id) }"
          >
            <creadit v-if="img.id === 2" />
            <pix v-else-if="img.id === 5" />
            <img class="object-contain w-full" v-else :src="img.icon" alt="" />
          </div>
        </div>
      </n-card>
    </div>
    <div class="mt-6 grid grid-cols-3 gap-75 desktop:gap-6 py-1 overflow-x-auto">
      <n-card
        v-for="item in cardArr"
        :key="item.id"
        class="shrink min-w-[270px] max-w-[370px] desktop:py-1 rounded-[20px]! bg-baseWihte! border! border-[#e5e5e5]! dark:text-trustWhite! dark:border-tintBlack dark:bg-lightBlack! flex flex-col justify-center items-center"
      >
        <div class="flex flex-col h-[200px]">
          <div class="font-bold text-[30px] desktop:mb-[18px]">{{ item.name }}</div>
          <div class="mb-[18px]">{{ item.dec }}</div>
        </div>
        <img class="h-[180px] mx-auto" :src="item.img" alt="" />
      </n-card>
    </div>
    <div
      class="mt-6 grid grid-cols-1 desktop:grid-cols-2 items-center gap-6 bg-trustBlue text-trustWhite rounded-[20px] py-2 px-2 desktop:px-6 desktop:mt-26"
    >
      <div class="mx-auto order-2 desktop:order-1 px-3">
        <h2 class="font-bold text-[32px] leading-[1.1]">
          {{ $t("立即下载您的") }}
          <br />
          {{ $t("crypto钱包") }}
        </h2>
        <div class="py-6 desktop:text-[16px]">
          {{ $t("一款安全的自我托管加密货币钱包") }}
        </div>
        <n-button
          @click="$router.push('/download')"
          round
          size="large"
          class="bg-trustWhite! mb-6! font-bold text-trustBlue! hover:bg-trustGreen! dark:bg-trustGreen! dark:text-trustBlack! dark:hover:bg-trustBlue! dark:hover:text-trustWhite!"
        >
          {{ $t("马上下载") }}
        </n-button>
      </div>
      <Dun class="mx-auto order-1 desktop:order-2" />
    </div>
    <div class="flex flex-col py-1 mt-6">
      <h1 class="font-bold desktop:text-center">{{ $t("常见问题") }}</h1>
      <div class="mt-6 border-b border-trustBlack" v-for="item in faqArr" :key="item.id">
        <div class="font-bold desktop:mb-3 cursor-pointer flex flex-row justify-between" @click="toggleFaq(item.id)">
          {{ item.title }}
          <img :class="{ 'arrow-down': item.isShow }" class="default-transition w-5 h-5" src="@/assets/svg/down.svg" alt="" />
        </div>
        <div v-if="item.isShow" class="desktop:mb-3">{{ item.dec }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

import { useI18n } from "vue-i18n";

import Iphone from "@/assets/svg/iphone.vue";
import creadit from "@/assets/svg/creadit.vue";
import pix from "@/assets/svg/pix.vue";
import Dun from "@/assets/svg/dun.vue";

const { t } = useI18n();
const iconArr = computed(() => [
  { id: 0, icon: require("@/assets/img/pay.avif") },
  { id: 1, icon: require("@/assets/img/ramp.avif") },
  { id: 2, icon: require("@/assets/svg/creadit.vue") },
  { id: 3, icon: require("@/assets/img/moonPay.avif") },
  { id: 4, icon: require("@/assets/img/gpay.avif") },
  { id: 5, icon: require("@/assets/svg/pix.vue") },
  { id: 6, icon: require("@/assets/img/spa.avif") },
  { id: 7, icon: require("@/assets/img/simplex.avif") },
  { id: 8, icon: require("@/assets/img/mercuryo.avif") }
]);
const cardArr = computed(() => [
  {
    id: 0,
    name: t("用户遍及全球"),
    dec: t("使用多种付款方式"),
    img: require("@/assets/svg/erath.svg")
  },
  {
    id: 1,
    name: t("超过100种当地法币"),
    dec: t("将USD"),
    img: require("@/assets/svg/dun.svg")
  },
  { id: 2, name: t("具竞争力的费率"), dec: t("比较并取得各种加密货币中由值得信赖的支付供应商提供的最佳费率"), img: require("@/assets/svg/3qiu.svg") }
]);
const faqStates = ref([
  {
    id: 0,
    title: "有哪些费用",
    dec: "我們各個法幣入金合作夥伴",
    isShow: false
  },
  {
    id: 1,
    title: "我可以使用哪些付款方式",
    dec: "支援多種付款方式",
    isShow: false
  },
  {
    id: 2,
    title: "哪些货币可用来购买加密货币",
    dec: "我們的合球合作夥伴支援逾",
    isShow: false
  },
  {
    id: 3,
    title: "法币转加密货币支付合作伙伴有哪些",
    dec: "購買加密貨幣時",
    isShow: false
  },
  {
    id: 4,
    title: "有最低或最高购买金额吗",
    dec: "最低和最高購買金額取決於多種因素",
    isShow: false
  },
  {
    id: 5,
    title: "我可以透过钱包直接购买哪些加密货币",
    dec: "提供了多種加密貨幣供您自由挑選",
    isShow: false
  },
  {
    id: 6,
    title: "是否支援加密货币提领或加密货币转法币解决方案",
    dec: "我們的合作夥伴",
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
