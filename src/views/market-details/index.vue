<template>
  <div>
    <div class="flex flex-col justify-center items-center">
      <h2 class="default-transition">{{ dataItem.name }} ({{ dataItem.symbol }})</h2>
      <SearchVue class="w-full!" />
    </div>
    <div class="mt-8">
      <div class="mb-2 flex flex-col desktop:flex-row gap-2 items-center justify-between desktop:items-center desktop:justify-start">
        <div class="flex items-center gap-4 relative">
          <img class="relative h-12 w-12 shrink-0 rounded-full" :src="dataItem.logo" alt="" />
          <div
            class="absolute bottom-0 right-0 flex items-center justify-center rounded-full bg-white dark:bg-lightBlack h-5 w-5 ring-2 ring-white dark:ring-lightBlack"
          >
            <img class="rounded-full" :src="dataItem.logo" alt="" />
          </div>
        </div>
        <div
          class="default-transition font-wixMadefor text-mobileH3 leading-mobileH3 tablet:text-desktopH3 tablet:leading-desktopH3 text-trustBlack dark:text-baseWhite"
        >
          <div class="default-transition font-bold">{{ dataItem.name }}</div>
          <div
            class="default-transition font-inter text-mobileBodySmall leading-mobileBodySmall tablet:text-desktopBodyMedium tablet:leading-desktopBodyMedium truncate text-trustBlack/60 dark:text-trustWhite/60"
          >
            {{ dataItem.symbol }}
          </div>
        </div>
      </div>
    </div>
    <chats ref="chartsRef" />
    <section class="mt-8! grid grid-cols-1 desktop:grid-cols-2 gap-6">
      <n-card class="bg-[#f4f4f7]! rounded-[20px]! dark:bg-trustBlack! dark:text-trustWhite!">
        <h1 class="font-bold text-[24px] mb-5!">Stats</h1>
        <div class="flex flex-row justify-between h-10" v-for="item in statsArr" :key="item.id">
          <div>{{ item.name }}</div>
          <div class="font-bold text-[16px]">{{ item.values }}</div>
        </div>
      </n-card>
      <n-card class="bg-[#f4f4f7]! rounded-[20px]! dark:bg-trustBlack! dark:text-trustWhite!">
        <h1 class="font-bold text-[24px] mb-5!">About {{ dataItem.name }}</h1>
        <div class="flex flex-row justify-between desktop:h-10">{{ desc[0] }}</div>
      </n-card>
    </section>
    <section class="mt-8!">
      <div class="grid grid-cols-1 desktop:grid-cols-2 gap-6">
        <n-card class="bg-[#f4f4f7]! rounded-[20px]! dark:bg-trustBlack! dark:text-trustWhite!">
          <h1 class="font-bold text-[24px] mb-5!">Price history</h1>
          <div v-for="item in points" :key="item.id" class="flex items-center border-b border-tintBlue py-4 last:border-b-0 dark:border-tintBlack">
            <div>{{ item.label }}</div>
            <div>{{ item.value }}</div>
            <div></div>
          </div>
        </n-card>
        <n-card class="bg-[#f4f4f7]! rounded-[20px]! dark:bg-trustBlack! dark:text-trustWhite!">
          <h1 class="font-bold text-[24px] mb-5!">Hot cryptocurrencies</h1>
          <div class="grid grid-cols-3 gap-6 items-center">
            <div class="flex flex-row gap-2 items-center cursor-pointer" v-for="item in hotCrypto" :key="item.id">
              <img class="w-7 h-7 rounded-full" :src="item.item.small" alt="" />
              <div class="hover:underline">{{ item.item.name }}</div>
            </div>
          </div>
        </n-card>
      </div>
    </section>
    <section class="mt-8!">
      <n-card class="bg-[#f4f4f7]! rounded-[20px]! mb-8! dark:bg-trustBlack! dark:text-trustWhite!" v-for="item in cardArr" :key="item.id">
        <h1 class="font-bold text-[24px] mb-8!">{{ item.name }}</h1>
        <div class="desktop+:grid-cols- mt-1 grid grid-cols-2 gap-4 tablet:grid-cols-3 desktop:grid-cols-4">
          <div
            v-for="iten in item.arr"
            :key="iten.id"
            @click="handleLink(iten)"
            class="group relative flex flex-col rounded-2xl bg-baseWhite px-2 py-1 transition-all tablet:py-0.5 dark:bg-trustBlack"
          >
            <div class="flex items-center gap-2 tablet:gap-2">
              <div class="relative shrink-0 tablet:h-10 tablet:w-10 cursor-pointer">
                <img class="w-10 h-10 rounded-full" :src="iten.logo" alt="" />
                <div
                  class="absolute bottom-0 right-0 flex items-center justify-center rounded-full bg-white dark:bg-lightBlack h-3 w-3 tablet:h-4 tablet:w-4 ring-2 ring-white dark:ring-lightBlack"
                >
                  <img :src="iten.logo" alt="" />
                </div>
              </div>
              <div class="cursor-pointer">
                <p class="hover:underline">{{ iten.name }}</p>
                <p class="default-transition hover:underline text-lightBlack font-inter dark:text-trustWhite text-[10px]">{{ iten.symbol }}</p>
              </div>
            </div>
          </div>
        </div>
      </n-card>
    </section>
    <section class="mt-8!">
      <div class="mt-8 text-center text-[14px] desktop:px-8 font-bold">
        <h1>{{ $t("小心网路钓鱼诈骗") }}</h1>
        <div class="py-5!">
          {{ $t("请务必对要求提供钱包资讯的未经请求讯息或电子邮件感到怀疑") }}
        </div>
      </div>
      <div class="mt-6 border-b border-trustBlack" v-for="item in faqArr" :key="item.id">
        <div class="default-transition font-bold mb-6 cursor-pointer flex flex-row justify-between" @click="toggleFaq(item.id)">
          {{ item.title }}
          <img :class="{ 'arrow-down': item.isShow }" class="default-transition w-5 h-5" src="@/assets/svg/down.svg" alt="" />
        </div>
        <div v-if="item.isShow" class="default-transition desktop:mb-3">{{ item.dec }}</div>
      </div>
    </section>
    <div class="mt-8 text-center text-[14px] desktop:px-8">
      <h3 class="font-bold mb-3! desktop:text-[22px]">Disclaimer</h3>
      <span>
        Market data, including prices, charts, market capitalization, trading volumes, and price changes is provided by third parties and for
        informational purposes only. For complete terms and conditions, please review our
        <n-button class="text-trustBlue! dark:text-trustGreen!" text @click="$router.push('/terms-of-service')">Terms of Service</n-button>
        and
        <n-button text class="text-trustBlue! dark:text-trustGreen!" @click="$router.push('/privacy-notice')">Privacy Policy</n-button>
      </span>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";

import { getStorage, formatMoney, fmtDate, setStorage } from "@/utils";
import { category } from "@/service/api";

import SearchVue from "@/components/search/index.vue";
import chats from "./components/chart.vue";

import axios from "axios";
import dayjs from "dayjs";
import { useI18n } from "vue-i18n";

const api = "https://api.coingecko.com/api/v3";

const { t } = useI18n();
const router = useRouter();
const dataItem = computed(() => getStorage("coinItem"));
const chartsRef = ref(null);
const chat = computed(() => chartsRef.value?.data ?? {});
const desc = ref("");
const data = ref({});
const hotCrypto = ref([]);

const format = "DD-MM-YYYY";
const formatDate = "MMM DD, YYYY";
const points = [
  {
    id: 0,
    label: `Today (${dayjs().format(formatDate)})`,
    date: dayjs().format(format)
  },
  {
    id: 1,
    label: `24 hours ago (${fmtDate(1, "day", "day", formatDate)})`,
    date: fmtDate()
  },
  {
    id: 2,
    label: `1 week ago (${fmtDate(7, "day", "day", formatDate)})`,
    date: fmtDate(7)
  },
  {
    id: 3,
    label: `1 month ago (${fmtDate(1, "month", "day", formatDate)})`,
    date: fmtDate(1, "month")
  },
  {
    id: 4,
    label: `1 year ago (${fmtDate(1, "year", "day", formatDate)})`,
    date: fmtDate(1, "year")
  }
];

const cardArr = ref([
  { id: 0, name: "Memes", value: "memes" },
  { id: 1, name: "Solana Ecosystem", value: "solana-ecosystem" },
  { id: 2, name: "Gaming", value: "gaming" },
  { id: 3, name: "A.i", value: "ai" },
  { id: 4, name: "Binance Alpha Tokens", value: "alpha-tokens" },
  { id: 5, name: "Trending", value: "trending" },
  { id: 6, name: "Real World Assets Protocols", value: "real-world-assets" },
  { id: 7, name: "Ethereum Ecosystem", value: "eth-ecosystem" },
  { id: 8, name: "Depin", value: "depin" },
  { id: 9, name: "Launchpad", value: "binance-launchpad" },
  { id: 10, name: "Launchpool", value: "binance-launchpool" },
  { id: 11, name: "Pump Fun", value: "pump-fun" },
  { id: 12, name: "Bonk", value: "bonk" },
  { id: 13, name: "xStocks", value: "xstocks-ecosystem" },
  { id: 14, name: "Tokenized Stock", value: "tokenized-stock" },
  { id: 15, name: "Ondo Global Markets Ecosystem", value: "ondo" },
  { id: 16, name: "Stabledcoins", value: "stablecoin" },
  { id: 17, name: "X402", value: "x402" }
]);

const statsArr = computed(() => [
  { id: 0, name: "Market Cap", values: `$${formatMoney(data.value?.market_data?.market_cap?.usd)}` },
  { id: 1, name: "Total Volume (24h)", values: `$${formatMoney(data.value?.market_data?.total_volume?.usd)}` },
  { id: 2, name: "Volume / Market cap", values: data.value?.market_data?.atl?.usd?.toFixed(2) },
  { id: 3, name: "Circulating supply", values: data.value?.market_data?.total_supply?.toFixed(2) },
  { id: 4, name: "24h Low", values: `$${chat.value?.low?.toFixed(2)}` },
  { id: 4, name: "24h High", values: `$${chat.value?.high?.toFixed(2)}` }
]);

const faqStates = ref([
  {
    id: 0,
    title: "备份您的钱包",
    dec: "透过创建多个安全备份保护您的资产",
    isShow: false
  },
  {
    id: 1,
    title: "绝对不要分享您的密钥",
    dec: "您的助记词是您钱包的主要私钥",
    isShow: false
  },
  {
    id: 2,
    title: "让您的钱包和装置软体保持最新版本",
    dec: "过时软体容易受到骇客攻击而且有其他安全风险",
    isShow: false
  },
  {
    id: 3,
    title: "小心网路钓鱼诈骗",
    dec: "验证来源",
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

const handleLink = (item) => {
  setStorage("coinItem", item);
  router.push({ name: "MarketPriceDetails", params: { name: item.slug } });
};

// 没办法官方文档设置请求头了，请求次数多了就崩了，（要么自己起个服务，要么付费）
const getPriceAt = async (date) => {
  try {
    const res = await axios.get(`${api}/coins/${dataItem.value.slug}/history`, {
      params: {
        date,
        localization: false
      }
    });

    const price = res?.data?.market_data?.current_price?.["usd"];
    return typeof price === "number" ? price : null;
  } catch (e) {
    return null;
  }
};

// 获取历史价格
const historyPrice = async () => {
  const prices = await Promise.all(points.map((p) => getPriceAt(p.date)));

  points.forEach((point, index) => {
    point.value = prices[index];
  });
};
historyPrice();

// 获取币种
const list = async () => {
  try {
    await Promise.all(
      cardArr.value.map(async (item) => {
        const res = await category({
          id: item.value, // 每个 card 的 category
          limit: 16
        });
        item.arr = res?.tokens ? [...res.tokens] : [];
      })
    );
  } catch (e) {
    console.log(e);
  }
};
list();

// 获取价格以及简介
const init = async () => {
  try {
    const requests = [
      axios.get(`${api}/coins/${dataItem.value.slug}`), // desc
      axios.get(`${api}/search/trending`)
    ];
    const res = await Promise.allSettled(requests);
    data.value = res?.[0]?.value?.data ?? {};
    desc.value = res?.[0]?.value?.data?.description?.en?.split("\r\n\r\n") ?? "";
    hotCrypto.value = res?.[1]?.value?.data?.coins ?? [];
  } catch (e) {
    console.log(e);
  }
};
init();
</script>

<style lang="scss" scoped></style>
