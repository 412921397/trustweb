<template>
  <footer class="mt-8">
    <n-card class="bg-baseWihte! border! rounded-[20px]! dark:border-tintBlack dark:bg-lightBlack! dark:text-trustWhite!">
      <div class="flex flex-col desktop:flex-row w-full items-center">
        <div v-if="!isMobile" class="flex flex-col w-[20%] items-center">
          <span class="default-transition font-bold text-[20px] dark:text-trustGreen! text-trustBlack!">Trust</span>
          <img class="w-[180px]" src="@/assets/img/trust.png" alt="" />
        </div>
        <div v-if="isMobile" class="default-transition">
          <div class="font-bold text-[22px] text-center mb-3">{{ $t("请保持联系") }}</div>
          <div class="flex gap-2.5">
            <component class="cursor-pointer" v-for="item in iconArr" :key="item.id" :is="item.commonent" @click="handleClick(item.path)" />
          </div>
        </div>

        <div class="flex flex-col w-full">
          <div
            class="mt-8 flex flex-wrap justify-around gap-6 desktop:col-start-2 desktop:col-end-4 desktop:row-start-1 desktop:mt-0 desktop:grid desktop:grid-cols-[repeat(6,1fr)] desktop:gap-7 desktop:justify-self-start"
          >
            <div class="w-fit max-w-[110px] desktop:max-w-none" v-for="item in footerArr" :key="item.id">
              <div v-if="+item.id === 5" class="flex">
                <img class="mr-3" :src="item.name" alt="" />
                <img :src="item.name" alt="" />
              </div>
              <div v-else class="font-bold flex mb-2.5 text-trustBlack! dark:text-trustWhite!">{{ item.name }}</div>
              <div v-for="iten in item.sencond" :key="iten.id" class="mb-[5px]">
                <a class="default-transition text-trustBlack! cursor-pointer text-center dark:text-trustWhite!" @click="handleLink(iten)">
                  {{ iten.name }}
                </a>
              </div>
            </div>
          </div>

          <div class="mt-6 flex flex-row mx-auto desktop:mx-0">
            <div>
              <div class="flex flex-row">
                <div class="text-trustBlack! dark:text-trustWhite!">
                  <h5 class="font-bold">{{ $t("下载") }} Trust Wallet</h5>
                  <span>{{ $t("最值得信赖且最安全的加密货币钱包") }}</span>
                </div>
                <div class="icon"></div>
              </div>
              <div class="mt-3">
                <div class="grid desktop:grid-cols-2 gap-3 justify-items-center">
                  <div
                    @click="handleClick('https://apps.apple.com/us/app/trust-crypto-bitcoin-wallet/id1288339409')"
                    class="default-transition px-26 desktop:px-9 py-2.5 text-[12px] text-center flex flex-row justify-center items-center h-10 text-trustBlue! cursor-pointer rounded-full border border-trustBlue hover:bg-trustBlue hover:text-white! dark:border-trustGreen dark:text-trustGreen! dark:bg-trustBlack dark:hover:bg-trustWhite dark:hover:text-trustBlack!"
                  >
                    ios {{ $t("下载") }}
                    <ios class="w-5 h-5 ml-[5px]" />
                  </div>
                  <div
                    @click="handleClick('https://chromewebstore.google.com/detail/trust-wallet/egjidjbpglichdcondbcbdnbeeppgdph')"
                    class="default-transition px-22 desktop:px-6 py-2.5 text-[12px] text-center flex flex-row justify-center items-center h-10 text-trustBlue! cursor-pointer rounded-full border border-trustBlue hover:bg-trustBlue hover:text-white! dark:border-trustGreen dark:text-trustGreen! dark:bg-trustBlack dark:hover:bg-trustWhite dark:hover:text-trustBlack!"
                  >
                    {{ $t("下载附加元件") }}
                    <img class="w-5 h-5 ml-[5px]" src="@/assets/svg/raw.7dd85797.svg" alt="apple" />
                  </div>
                </div>
                <div class="grid desktop:grid-cols-2 justify-items-center gap-3 mt-3">
                  <div
                    @click="handleClick('https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp')"
                    class="default-transition px-25 desktop:px-8 py-2.5 text-[12px] text-center flex flex-row justify-center items-center h-10 text-trustBlue! cursor-pointer rounded-full border border-trustBlue hover:bg-trustBlue hover:text-white! dark:border-trustGreen dark:text-trustGreen! dark:bg-trustBlack dark:hover:bg-trustWhite dark:hover:text-trustBlack!"
                  >
                    {{ $t("下载") }} APK
                    <apk class="w-5 h-5 ml-[5px]" />
                  </div>
                  <div
                    @click="handleClick('https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp')"
                    class="default-transition px-20 desktop:px-3 py-2.5 h-10 text-center flex flex-row justify-center items-center text-trustBlue! cursor-pointer rounded-full border border-trustBlue hover:bg-trustBlue hover:text-white! dark:border-trustGreen dark:text-trustGreen! dark:bg-trustBlack dark:hover:bg-trustWhite dark:hover:text-trustBlack!"
                  >
                    Android {{ $t("下载") }}
                    <img class="w-5 h-5 ml-1.5" src="@/assets/img/google.avif" alt="apple" />
                  </div>
                </div>
              </div>
            </div>

            <div v-if="!isMobile" class="default-transition desktop:ml-34">
              <div class="font-bold text-[22px] z-999999">{{ $t("请保持联系") }}</div>
              <div class="flex gap-2.5 mt-3">
                <component class="cursor-pointer" v-for="item in iconArr" :key="item.id" :is="item.commonent" @click="handleClick(item.path)" />
              </div>
            </div>
          </div>
          <div v-if="isMobile" class="mt-6 flex flex-row items-center">
            <img class="w-[180px]" src="@/assets/img/trust.png" alt="" />
            <span class="default-transition font-bold text-[58px] dark:text-trustGreen! text-trustBlue!">Trust</span>
          </div>
        </div>
      </div>
    </n-card>
  </footer>
  <n-modal
    v-model:show="visible"
    :style="{ width: isMobile ? '370px' : '600px' }"
    preset="card"
    size="huge"
    :closable="false"
    :bordered="false"
    :segmented="{
      content: 'soft',
      footer: 'soft'
    }"
    close-on-esc
  >
    <template #header>
      <img class="w-22 h-12" src="@/assets/img/Trust-Wallet-New-Logo.png" alt="" />
    </template>
    <n-scrollbar style="max-height: 200px" trigger="none">
      <div>
        <div class="font-bold">Privacy Preference Center</div>
        <br />
        When you visit any website, it may store or retrieve information on your browser, mostly in the form of cookies. This information might be
        about you, your preferences or your device and is mostly used to make the site work as you expect it to. The information does not usually
        directly identify you, but it can give you a more personalized web experience. Because we respect your right to privacy, you can choose not to
        allow some types of cookies. Click on the different category headings to find out more and change our default settings. However, blocking some
        types of cookies may impact your experience of the site and the services we are able to offer.
        <br />
        <a class="text-trustBlue! cursor-pointer underline!" @click="handleLink({ url: '/privacy-notice' })">Cookie Policy</a>
        <br />
        <br />
        <div class="font-bold mb-3">Privacy Preference Center</div>
        <div class="border" @click="visibleObj.one = !visibleObj.one">
          <div class="font-bold flex flex-row justify-between items-center gap-3 cursor-pointer py-2 px-3">
            <div>
              <n-icon size="20">
                <AddOutline v-if="!visibleObj.one" />
                <Remove v-else />
              </n-icon>
            </div>
            <div>Strictly Necessary Cookies</div>
            <div class="cursor-pointer text-[#3860be]" @click.stop @click.prevent="handleActive(true, true)">Always Active</div>
          </div>
          <div v-if="visibleObj.one" class="bg-tintBlack/5! py-2 px-3">
            These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response
            to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.
            You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not
            store any personally identifiable information.
          </div>
        </div>
        <div class="border border-t-0" @click="visibleObj.two = !visibleObj.two">
          <div class="font-bold flex flex-row justify-between items-center gap-3 cursor-pointer py-2 px-3">
            <div>
              <n-icon size="20">
                <AddOutline v-if="!visibleObj.two" />
                <Remove v-else />
              </n-icon>
            </div>
            <div>Targeting Cookies</div>
            <n-switch v-model:value="visibleObj.swich1" @click.stop />
          </div>
          <div v-if="visibleObj.two" class="bg-tintBlack/5! py-2 px-3">
            These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your
            interests and show you relevant adverts on other sites. They do not store directly personal information, but are based on uniquely
            identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.
          </div>
        </div>
        <div class="border border-t-0" @click="visibleObj.three = !visibleObj.three">
          <div class="font-bold flex flex-row justify-between items-center gap-3 cursor-pointer py-2 px-3">
            <div>
              <n-icon size="20">
                <AddOutline v-if="!visibleObj.three" />
                <Remove v-else />
              </n-icon>
            </div>
            <div>Performance Cookies</div>
            <n-switch v-model:value="visibleObj.swich2" @click.stop />
          </div>
          <div v-if="visibleObj.three" class="bg-tintBlack/5! py-2 px-3">
            These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know
            which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated
            and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to
            monitor its performance.
          </div>
        </div>
      </div>
    </n-scrollbar>

    <template #action>
      <div class="flex flex-row justify-end font-bold text-trustWhite">
        <div class="mr-2.5! cursor-pointer bg-[#464958] px-5 py-3 rounded-[5px]" @click="handleReject">Reject All</div>
        <div class="cursor-pointer bg-[#464958] px-5 py-3 rounded-[5px]" @click="visible = false">Confrim My Choice</div>
      </div>
    </template>
  </n-modal>
</template>

<script setup>
import { computed, ref } from "vue";
import { AddOutline, Remove } from "@vicons/ionicons5";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

import { useDevice } from "@/hooks";

import ios from "@/assets/svg/ios.vue";
import apk from "@/assets/svg/apk.vue";
import Facebook from "@/assets/svg/icon/facebook.vue";
import Github from "@/assets/svg/icon/github.vue";
import Ins from "@/assets/svg/icon/ins.vue";
import X from "@/assets/svg/icon/x.vue";
import Game from "@/assets/svg/icon/game.vue";
import Clound from "@/assets/svg/icon/clound.vue";
import Telegram from "@/assets/svg/icon/telegram.vue";
import In from "@/assets/svg/icon/in.vue";
import Youtube from "@/assets/svg/icon/youtube.vue";

const { t } = useI18n();
const { isMobile } = useDevice();
const visible = ref(false);
const router = useRouter();
const footerArr = computed(() => [
  {
    id: 0,
    name: t("钱包"),
    sencond: [
      { id: 0, name: `${t("行动版")}`, path: "/download" },
      { id: 1, name: t("浏览器附加元件"), path: "/browser-extension" }
    ]
  },
  {
    id: 1,
    name: t("功能"),
    sencond: [
      { id: 0, name: t("购买加密货币"), path: "/buy-crypto" },
      { id: 1, name: t("交换"), path: "/swap" },
      { id: 2, name: t("质押"), path: "/staking" },
      { id: 3, name: "NFT", path: "/nft" },
      { id: 4, name: t("安全性"), path: "/security" },
      { id: 5, name: t("SWIFT智能合约钱包"), path: "/swift" }
    ]
  },
  {
    id: 2,
    name: t("建构"),
    sencond: [
      { id: 0, name: t("开发人员文件"), path: "", url: "https://developer.trustwallet.com/developer/" },
      { id: 1, name: t("钱包核心"), path: "", url: "https://developer.trustwallet.com/developer/wallet-core" },
      { id: 2, name: t("提交DApp"), path: "", url: "https://developer.trustwallet.com/developer/listing-new-dapps" },
      { id: 3, name: t("让资产上架"), path: "", url: "https://developer.trustwallet.com/developer/listing-new-assets" }
    ]
  },
  {
    id: 3,
    name: t("帮助中心"),
    sencond: [
      { id: 0, name: t("常见问题"), url: "https://twtholders.trustwallet.com/" },
      { id: 1, name: t("联系我们"), url: "https://twtholders.trustwallet.com/" }
    ]
  },
  {
    id: 4,
    name: t("关于"),
    sencond: [
      { id: 0, name: t("关于我们"), path: "/about-us" },
      { id: 1, name: t("工作机会"), path: "/careers" },
      { id: 2, name: t("新闻工具"), path: "/press" },
      { id: 3, name: t("服务条款"), path: "/terms-of-service" },
      { id: 4, name: t("隐私声明"), path: "/privacy-notice" },
      { id: 5, name: "Cookie Preferences", path: "", dialog: true },
      { id: 6, name: t("Cookie通知"), path: "/cookie-notice" },
      { id: 7, name: t("博客"), path: "/blog" }
    ]
  },
  { id: 5, name: require("@/assets/svg/image.8354ab2c.svg") }
]);
const visibleObj = ref({ one: false, two: false, three: false, swich1: false, swich2: false });

const iconArr = [
  { id: 0, commonent: Facebook, path: "https://www.facebook.com/trustweb3" },
  { id: 1, commonent: Github, path: "https://github.com/trustwallet" },
  { id: 2, commonent: Ins, path: "https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Ftrustwallet%2F&is_from_rle" },
  { id: 3, commonent: X, path: "https://x.com/account/access" },
  { id: 4, commonent: Game, path: "https://discord.com/invite/trustwallet" },
  { id: 5, commonent: Clound, path: "https://www.reddit.com/r/trustapp/" },
  { id: 6, commonent: Telegram, path: "https://t.me/trustwallet" },
  { id: 7, commonent: In, path: "https://linkedin.com/company/trustwallet" },
  { id: 8, commonent: Youtube, path: "https://www.youtube.com/@Trustwallet" }
];

const handleActive = (val1, val2) => {
  visibleObj.value.swich1 = val1;
  visibleObj.value.swich2 = val2;
};

const handleReject = () => {
  visibleObj.value = { one: false, two: false, three: false, swich1: false, swich2: false };
  visible.value = false;
};

const handleLink = (item) => {
  if (item.url) return window.open(item.url, "_blank");
  if (item.dialog) return (visible.value = true);
  if (!item.path) return;
  router.push(item.path);
};

const handleClick = (path) => {
  if (!path) return;
  window.open(path);
};
</script>

<style lang="less" scoped></style>
