<template>
  <div>
    <div class="bg-trustBlue rounded-[20px]">
      <div class="default-transition px-6 py-10 desktop:px-10 desktop:py-12 text-trustWhite dark:text-trustGreen">
        <h2 class="font-bold text-[30px]">{{ $t("新闻中心") }}</h2>
        <div class="text-[16px]">{{ $t("保持联系并下载官方品牌标志和产品图像") }}</div>
      </div>
    </div>
    <section class="mt-8!">
      <div class="grid desktop:grid-cols-2 gap-6 desktop:px-16 items-center">
        <div>
          <h1 class="font-bold">{{ $t("联络方式") }}</h1>
          <div class="py-3">
            <span class="cursor-pointer hover:underline">press@trustwallet.com</span>
            <br />
            <span class="cursor-pointer hover:underline">cooperation@trustwallet.com</span>
          </div>
          <h1 class="font-bold">{{ $t("请保持联系") }}</h1>
          <div class="desktop:mt-2.5 flex gap-2.5">
            <component class="cursor-pointer" v-for="item in iconArr" :key="item.id" :is="item.commonent" @click="handleClick(item.path)" />
          </div>
        </div>
        <img class="desktop:ml-[85px] mt-8 desktop:mt-0" src="@/assets/svg/press/press.svg" alt="" />
      </div>
    </section>
    <section class="mt-8!">
      <n-card class="rounded-[20px]! py-1 bg-baseWihte! border! border-[#e5e5e5]! dark:text-trustWhite! dark:border-tintBlack dark:bg-lightBlack!">
        <div class="grid desktop:grid-cols-2 items-center">
          <div class="flex items-center justify-center">
            <img class="h-[168px] w-auto desktop:h-[310px]" src="@/assets/img/trust.png" alt="" />
          </div>
          <div>
            <h1 class="font-bold">{{ $t("标志") }}</h1>
            <div class="py-6 text-[16px]">
              {{ $t("取得官方TrustWallet标志") }}
            </div>
            <n-button
              round
              size="large"
              class="bg-trustBlue! font-bold text-trustWhite! hover:bg-trustGreen! dark:bg-trustGreen! dark:text-trustBlack! dark:hover:bg-trustBlue! dark:hover:text-trustWhite!"
            >
              {{ $t("下载标志") }}
            </n-button>
          </div>
        </div>
      </n-card>
    </section>
    <section class="mt-8!">
      <n-card class="rounded-[20px]! py-1 bg-baseWihte! border! border-[#e5e5e5]! dark:text-trustWhite! dark:border-tintBlack dark:bg-lightBlack!">
        <div class="grid desktop:grid-cols-2 items-center">
          <div class="flex items-center justify-center">
            <Press />
          </div>
          <div>
            <h1 class="font-bold">{{ $t("产品图片") }}</h1>
            <div class="py-6 text-[16px]">{{ $t("需要在通讯中加入精选") }}</div>
            <n-button
              round
              size="large"
              class="bg-trustBlue! font-bold text-trustWhite! hover:bg-trustGreen! dark:bg-trustGreen! dark:text-trustBlack! dark:hover:bg-trustBlue! dark:hover:text-trustWhite!"
            >
              {{ $t("下载图片") }}
            </n-button>
          </div>
        </div>
      </n-card>
    </section>
    <section class="mt-8!">
      <div class="rounded-[20px] bg-trustBlue flex flex-row justify-around items-center">
        <div class="py-5 px-4">
          <div class="text-trustWhite font-bold text-[20px] desktop:text-[30px]">
            {{ $t("我们让它变得更轻松更安全让") }}
            <br v-if="!isMobile" />
            {{ $t("数百万人存取Web3") }}
          </div>
          <n-button
            v-if="isMobile"
            @click="$router.push('/about-us')"
            round
            size="large"
            class="bg-trustWhite! mt-4! font-bold text-trustBlack! hover:bg-trustGreen! dark:bg-trustGreen! dark:text-trustBlack! dark:hover:bg-trustBlue! dark:hover:text-trustWhite!"
          >
            {{ $t("了解更多") }}
          </n-button>
        </div>
        <div class="flex flex-row items-center">
          <img
            class="h-40 tablet:-top-12 mr-2! tablet:bottom-[unset] tablet:right-8 desktop:-top-4 desktop:right-[29%]"
            src="@/assets/svg/press/earth1.svg"
            alt=""
          />
          <n-button
            @click="$router.push('/about-us')"
            v-if="!isMobile"
            round
            size="large"
            class="bg-trustWhite! font-bold text-trustBlack! hover:bg-trustGreen! dark:bg-trustGreen! dark:text-trustBlack! dark:hover:bg-trustBlue! dark:hover:text-trustWhite!"
          >
            {{ $t("了解更多") }}
          </n-button>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useDevice } from "@/hooks";

import Facebook from "@/assets/svg/blue/facebook.vue";
import Github from "@/assets/svg/blue/github.vue";
import Ins from "@/assets/svg/blue/ins.vue";
import X from "@/assets/svg/blue/x.vue";
import Game from "@/assets/svg/blue/game.vue";
import Clound from "@/assets/svg/blue/clound.vue";
import Telegram from "@/assets/svg/blue/telegram.vue";
import In from "@/assets/svg/blue/in.vue";
import Youtube from "@/assets/svg/blue/youtube.vue";
import Press from "@/assets/svg/press/press1.vue";

const { isMobile } = useDevice();
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

const handleClick = (path) => {
  if (!path) return;
  window.open(path);
};
</script>

<style lang="scss" scoped></style>
