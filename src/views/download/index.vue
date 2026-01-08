<template>
  <div>
    <div
      class="m-auto flex w-full max-w-screen-max+padding flex-col-reverse justify-between gap-7 rounded-[20px] bg-trustBlue tablet:flex-row tablet:items-center desktop:rounded-[30px] p-12 desktop:px-[100px] max-w-screen-max"
    >
      <div class="text-[#ffffff] text-[32px]">
        <span class="font-bold">{{ $t("下载Wallet") }}</span>
        <br />
        <span class="font-bold">{{ $t("TrustWallet") }}</span>
        <div class="text-[16px] mt-2 desktop:w-[342px]">{{ $t("可提供做为行动App与桌面浏览器附加元件") }}</div>
      </div>
    </div>

    <div class="w-full mt-6 grid gap-8 tablet:grid-cols-2 desktop:flex-row desktop:px-3">
      <n-card
        v-for="item in cardArr"
        :key="item.id"
        class="shrink w-[500px] cursor-pointer desktop:py-2 rounded-[20px]! bg-baseWihte! border! border-[#e5e5e5]! dark:text-trustWhite! dark:border-tintBlack dark:bg-lightBlack! flex flex-col justify-space-between"
        @click="handleClick(item)"
      >
        <div>
          <img class="h-[58px] w-[58px] desktop:mb-2.5 desktop:h-[65px] desktop:w-[65px]" :src="item.img" alt="" />
          <div
            class="default-transition mt-4 text-[20px] desktop:text-[24px] text-trustBlack font-wixMadefor font-bold dark:text-trustWhite! tracking-tight"
          >
            {{ item.name }}
          </div>
          <div class="desktop:py-1">{{ item.dec }}</div>
        </div>
      </n-card>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

import { useI18n } from "vue-i18n";

const { t } = useI18n();

const cardArr = computed(() => [
  {
    id: 0,
    img: require("@/assets/img/appleStore.avif"),
    name: t("ios下载"),
    dec: t("从AppStore"),
    url: "https://apps.apple.com/us/app/trust-crypto-bitcoin-wallet/id1288339409"
  },
  {
    id: 1,
    img: require("@/assets/img/google.avif"),
    name: t("Android下载"),
    dec: t("从GooglePlay"),
    url: "https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp"
  },
  {
    id: 2,
    img: require("@/assets/svg/raw.7dd85797.svg"),
    name: t("Chrome下载"),
    dec: t("从Chrome"),
    url: "https://chromewebstore.google.com/detail/trust-wallet/egjidjbpglichdcondbcbdnbeeppgdph"
  },
  {
    id: 3,
    img: require("@/assets/svg/android.svg"),
    name: t("下载Android"),
    dec: t("使用Android"),
    url: "https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp"
  }
]);

const handleClick = (item) => {
  if (item.url) return;
  window.open(item.url, "_blank");
};
</script>

<style lang="scss" scoped></style>
