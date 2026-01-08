<template>
  <div>
    <div class="text-center">
      <h3 class="default-transition text-trustBlack text-[26px] font-wixMadefor font-bold dark:text-trustWhite mb-1!">
        Discover tokens with Trust Wallet
      </h3>
      <p
        class="default-transition font-inter text-mobileBodyLarge leading-mobileBodyLarge tablet:text-desktopBodyLarge tablet:leading-desktopBodyLarge mb-8 text-trustBlack/60 dark:text-trustWhite/60"
      >
        Explore different blockchains and ecosystems
      </p>
    </div>
    <SearchVue />
    <section class="mt-8!">
      <h2 class="font-bold desktop:text-[32px]">Trending Tokens</h2>
      <div class="mt-6 full-screen-section flex w-full items-stretch gap-4 overflow-x-auto pb-4 max:mx-0 max:w-[unset] max:gap-6 max:px-0">
        <n-card
          class="flex! flex-col! bg-tintBlue/20! rounded-[20px]! cursor-pointer! min-w-[280px] desk:max-w-[320px] transition-all tablet:max-w-[280px] dark:text-trustWhite!"
          v-for="item in trendingList"
          :key="item.id"
          @click="handleLink(item)"
        >
          <div class="flex items-center gap-3">
            <n-skeleton v-if="trendingLoading" width="40px" height="40px" />
            <div v-else class="relative shrink-0">
              <img class="w-10 h-10 rounded-full" :src="item.logo" alt="" />
              <div
                class="absolute bottom-0 right-0 flex items-center justify-center rounded-full bg-white dark:bg-lightBlack h-3 w-3 tablet:h-4 tablet:w-4 ring-2 ring-white dark:ring-lightBlack"
              >
                <img :src="item.logo" alt="" />
              </div>
            </div>
            <n-skeleton v-if="trendingLoading" class="min-w-0 flex-1" />
            <div v-else class="min-w-0 flex-1">
              <div>{{ item.name }}</div>
              <div class="text-[12px]! text-trustBlack/60 dark:text-trustWhite">{{ item.symbol }}</div>
            </div>
          </div>
          <div class="flex flex-row justify-between h-10 items-center">
            <div class="flex flex-col gap-1 font-bold">${{ item.price.toFixed(2) }}</div>
            <div :style="{ color: item.change24h >= 0 ? '#0aa838' : '#c21414' }">{{ fmtPercentage(item.change24h) }}</div>
          </div>
        </n-card>
      </div>
    </section>
    <section class="mt-8!">
      <n-tabs
        ref="tabsRef"
        type="line"
        class="tabs-scroll bg-baseWhite! rounded-t-[20px] dark:bg-trustBlack! dark:text-trustWhite!"
        animated
        @update:value="handleTab"
      >
        <template #prefix><div class="w-5"></div></template>
        <template #suffix><div class="w-5"></div></template>
        <n-tab-pane v-for="item in tabs" :key="item.id" :name="item.name" :data-index="item.value" :tab="item.value">
          <template #tab>
            <div class="dark:text-trustWhite!">{{ item.value }}</div>
          </template>
          <div
            class="grid grid-cols-[2fr_1fr] text-[12px] desktop:grid-cols-[2fr_1fr_1fr_1fr_1fr] text-trustBlack/60 items-center gap-4 border-b border-tintBlue/20 bg-softGray px-6 py-6 dark:border-tintBlack/20 dark:bg-tintBlack/50 dark:text-trustWhite!"
          >
            <div v-for="title in tabTitle" :key="title">{{ title }}</div>
          </div>
          <div
            v-if="loading"
            class="w-full! grid grid-cols-[auto_2fr_1fr_1fr] desktop:grid-cols-[auto_2fr_1fr_1fr_1fr_1fr] items-center gap-4 px-6 py-3 transition-all"
          >
            <div class="flex justify-between items-center gap-3">
              <n-skeleton width="20px" height="20px" />
              <n-skeleton class="w-10! h-10!" circle />
            </div>
            <n-skeleton width="120px" height="40px" />
            <n-skeleton width="120px" height="40px" />
            <n-skeleton width="120px" height="40px" />
            <n-skeleton width="120px" height="40px" />
            <n-skeleton width="120px" height="40px" />
          </div>
          <template v-else>
            <div
              class="default-transition cursor-pointer grid grid-cols-[auto_2fr_1fr] desktop:grid-cols-[auto_2fr_1fr_1fr_1fr_1fr] items-center gap-4 border-b bg-baseWhite border-tintBlue/20 px-6 py-3 transition-all hover:bg-[#dbdce5] dark:border-tintBlack/20 hover:dark:bg-tintBlack dark:bg-trustBlack dark:text-trustWhite"
              v-for="(item, index) in lists"
              :key="item.id"
              @click="handleLink(item)"
            >
              <div>{{ index + 1 }}</div>
              <div class="flex items-center gap-3">
                <div class="relative shrink-0">
                  <img class="w-10 h-10 rounded-full" :src="item.logo" alt="" />
                  <div
                    class="absolute bottom-0 right-0 flex items-center justify-center rounded-full bg-white dark:bg-lightBlack h-3 w-3 tablet:h-4 tablet:w-4 ring-2 ring-white dark:ring-lightBlack"
                  >
                    <img :src="item.logo" alt="" />
                  </div>
                </div>
                <div class="flex min-w-0 flex-col gap-1">
                  <div>
                    {{ item.name }}
                    <n-tag round class="ml-2 h-5! text-[10px]!" :bordered="false" type="success">Verified</n-tag>
                  </div>
                  <div class="text-[12px]! text-trustBlack/60 dark:text-trustWhite">{{ item.symbol }}</div>
                </div>
              </div>
              <div class="flex flex-col gap-1 font-bold">${{ item.price.toFixed(2) }}</div>
              <span
                class="default-transition font-inter text-mobileBodySmall leading-mobileBodySmall tablet:text-desktopBodyMedium tablet:leading-desktopBodyMedium hidden font-semibold tablet:block text-trustBuyLight"
                :style="{ color: item.change24h >= 0 ? '#0aa838' : '#c21414' }"
              >
                {{ fmtPercentage(item.change24h) }}
              </span>
              <span
                class="default-transition font-inter text-mobileBodySmall leading-mobileBodySmall tablet:text-desktopBodyMedium tablet:leading-desktopBodyMedium hidden text-trustBlack dark:text-trustWhite desktop:block"
              >
                ${{ formatMoney(item.volume24h) }}
              </span>
              <span
                class="default-transition font-inter text-mobileBodySmall leading-mobileBodySmall tablet:text-desktopBodyMedium tablet:leading-desktopBodyMedium hidden text-trustBlack dark:text-trustWhite desktop:block"
              >
                ${{ formatMoney(item.marketCap) }}
              </span>
            </div>
          </template>
        </n-tab-pane>
      </n-tabs>
    </section>
    <div class="mt-8 text-center text-[14px] desktop:px-8">
      <h3 class="font-bold mb-3!">Disclaimer</h3>
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
import { ref, nextTick, computed } from "vue";
import { useRouter } from "vue-router";

import { category } from "@/service/api";
import { useDevice } from "@/hooks";
import { formatMoney, fmtPercentage, setStorage } from "@/utils";

import SearchVue from "@/components/search/index.vue";

const { isMobile } = useDevice();
const router = useRouter();
const tabs = [
  { id: 0, name: "Memes", value: "memes" },
  { id: 1, name: "Hot", value: "hot" },
  { id: 2, name: "Solana Ecosystem", value: "solana-ecosystem" },
  { id: 3, name: "Gaming", value: "gaming" },
  { id: 4, name: "A.i", value: "ai" },
  { id: 5, name: "Binance Alpha Tokens", value: "alpha-tokens" },
  { id: 6, name: "Real World Assets Protocols", value: "real-world-assets" },
  { id: 7, name: "Layer1", value: "layer_1" },
  { id: 8, name: "Ethereum Ecosystem", value: "eth-ecosystem" },
  { id: 9, name: "Depin", value: "depin" },
  { id: 10, name: "Megadrop", value: "binance-megadrop" },
  { id: 11, name: "Launchpad", value: "binance-launchpad" },
  { id: 12, name: "Launchpool", value: "binance-launchpool" },
  { id: 13, name: "Dex", value: "dex" },
  { id: 14, name: "Defi2.0", value: "defi-2" },
  { id: 15, name: "Pump Fun", value: "pump-fun" },
  { id: 16, name: "Bonk", value: "bonk" },
  { id: 17, name: "xStocks", value: "xstocks-ecosystem" },
  { id: 18, name: "Tokenized Stock", value: "tokenized-stock" },
  { id: 19, name: "Ondo Global Markets Ecosystem", value: "ondo" },
  { id: 20, name: "Stabledcoins", value: "stablecoin" },
  { id: 21, name: "X402", value: "x402" }
];

const tablT = ["# Token", "Price", "24h Change", "24h Volume", "Market Cap"];
const tabTitle = computed(() => (isMobile.value ? tablT.filter((_item, i) => [0, 1].includes(i)) : tablT));
const lists = ref([]);
const loading = ref(false);
const trendingList = ref([]);
const trendingLoading = ref(false);
const tabsRef = ref(null);

const handleTab = (name) => {
  const activeTab = tabs.find((item) => item.name === name);

  nextTick(async () => {
    const active = tabsRef.value?.$el.querySelector(".n-tabs-tab--active");
    active?.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest"
    });
    await list({ name: activeTab.value });
  });
};

const handleLink = (item) => {
  setStorage("coinItem", item);
  router.push({ name: "MarketPriceDetails", params: { name: item.slug } });
};

const trending = async () => {
  try {
    trendingLoading.value = true;
    const res = await category({ id: "trending", limit: 30 });
    trendingList.value = res?.tokens ?? [];
  } catch (e) {
    console.log(e);
    trendingList.value = [];
  } finally {
    trendingLoading.value = false;
  }
};
trending();

const list = async (data = {}) => {
  try {
    loading.value = true;
    const res = await category({ id: data.name || "memes", limit: 50 });
    lists.value = res?.tokens ?? [];
  } catch (e) {
    console.log(e);
    lists.value = [];
  } finally {
    loading.value = false;
  }
};
list();
</script>

<style lang="scss" scoped></style>
