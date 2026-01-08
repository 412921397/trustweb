<template>
  <div class="overflow-hidden">
    <div class="default-transition grid grid-cols-1 desktop:grid-cols-2 gap-1 items-center">
      <div class="desktop:ml-22">
        <h1 class="font-bold text-[36px] leading-[1.1]">
          {{ $t("探索") }}
          <br />
          {{ $t("NFT世界") }}
        </h1>
        <div class="py-6 desktop:text-[16px] desktop:w-[380px]">{{ $t("使用NFT解锁独特的体验") }}</div>
        <p>
          <n-button
            @click="$router.push('/download')"
            round
            size="large"
            class="bg-trustBlue! font-bold text-trustWhite! hover:bg-trustGreen! dark:bg-trustGreen! dark:text-trustBlack! dark:hover:bg-trustBlue! dark:hover:text-trustWhite!"
          >
            {{ $t("新手指引") }}
          </n-button>
        </p>
      </div>
      <NftIcon />
    </div>
    <n-card
      class="default-transition mt-16 rounded-[20px]! bg-baseWihte! border! border-[#e5e5e5]! dark:text-trustWhite! dark:border-tintBlack dark:bg-lightBlack!"
    >
      <div class="grid grid-cols-1 desktop:grid-cols-2 gap-1 items-center relative">
        <img class="h-[422px] relative desktop:top-[-60px] :desktop:right-[-60px]" src="@/assets/svg/nft/nft1.svg" alt="" />
        <div class="flex flex-col tablet:mt-8">
          <div class="font-bold text-[16px] desktop:text-[24px] leading-[1.1]">
            {{ $t("支援超过6亿款NFT代表不再需要") }}
            <br />
            {{ $t("切换App") }}
          </div>
          <div class="py-6">{{ $t("在同一个地方享有您所有的NFT") }}</div>
          <p>
            <n-button
              @click="$router.push('/download')"
              round
              size="large"
              class="bg-trustBlue! font-bold text-trustWhite! hover:bg-trustGreen! dark:bg-trustGreen! dark:text-trustBlack! dark:hover:bg-trustBlue! dark:hover:text-trustWhite!"
            >
              {{ $t("管理NFT") }}
            </n-button>
          </p>
        </div>
      </div>
    </n-card>
    <div class="mt-6 flex flex-col justify-center items-center default-transition">
      <div class="flex flex-col items-center">
        <div class="font-bold text-[24px]">{{ $t("接触热门NFT市场") }}</div>
        <div class="py-6 desktop:py-2">{{ $t("千万别错过下一件大事") }}</div>
      </div>
      <div class="grid grid-cols-2 gap-6 desktop:grid-cols-4">
        <n-card
          v-for="item in cardArr"
          :key="item.id"
          class="desktop:mt-12 rounded-[20px]! bg-baseWihte! border! border-[#e5e5e5]! dark:text-trustWhite! dark:border-tintBlack dark:bg-lightBlack!"
        >
          <div class="flex flex-col items-center justify-center">
            <Card1 v-if="item.id === 0" />
            <Card2 v-else-if="item.id === 2" />
            <img v-else class="h-[54px] mx-auto object-contain" :src="item.img" alt="" />
            <div class="mt-1">
              {{ item.name }}
              <div v-if="item.id === 3">Marketplace</div>
            </div>
          </div>
        </n-card>
      </div>
      <p>
        <n-button
          round
          @click="$router.push('/download')"
          size="large"
          class="mt-12! bg-trustBlue! font-bold text-trustWhite! hover:bg-trustGreen! dark:bg-trustGreen! dark:text-trustBlack! dark:hover:bg-trustBlue! dark:hover:text-trustWhite!"
        >
          {{ $t("探索更多") }}
        </n-button>
      </p>
    </div>
    <div class="mt-6 flex flex-col justify-center items-center">
      <div class="flex flex-col items-start desktop:items-center default-transition">
        <div class="font-bold text-[24px]">{{ $t("储值管理与探索") }}</div>
        <div class="desktop:w-[433px] desktop:text-center py-6">{{ $t("保存在一个地方") }}</div>
      </div>
      <div class="full-screen-section min-w-[800px] max-w-[800px] overflow-auto">
        <img class="mt-1 h-auto min-w-[800px] max-w-[800px]" src="@/assets/svg/nft/n3.svg" alt="" />
      </div>
    </div>
    <n-card class="mt-12 rounded-[20px]! bg-baseWihte! border! border-[#e5e5e5]! dark:text-trustWhite! dark:border-tintBlack dark:bg-lightBlack!">
      <div class="grid grid-cols-1 desktop:grid-cols-2 gap-1 py-3 items-center justify-center">
        <div class="flex flex-col desktop:items-start col-span-1 order-2 desktop:order-1">
          <div class="font-bold text-[24px]">{{ $t("迈向数位所有权的未来") }}</div>
          <div class="py-10 desktop:text-[16px]">
            {{ $t("无论您独特的NFT") }}
          </div>
          <p>
            <n-button
              round
              @click="$router.push('/download')"
              size="large"
              class="bg-trustBlue! font-bold text-trustWhite! hover:bg-trustGreen! dark:bg-trustGreen! dark:text-trustBlack! dark:hover:bg-trustBlue! dark:hover:text-trustWhite!"
            >
              {{ $t("开始使用NFT") }}
            </n-button>
          </p>
        </div>
        <img class="desktop:ml-3 order-1 desktop:order-2 mb-6" src="@/assets/svg/nft/n4.svg" alt="" />
      </div>
    </n-card>
    <div class="mt-8 grid grid-cols-1 desktop:grid-cols-2 gap-1 items-center justify-items-center">
      <div>
        <h2 class="default-transition font-bold text-[24px] leading-[1.1] desktop:text-[32px] desktop:w-[400px]">
          {{ $t("受到") }}
          <br />
          {{ $t("百万人信赖") }}
        </h2>
        <n-rate class="mt-[22px]" size="large" readonly :default-value="5" :color="color" />
      </div>
      <div class="default-transition mt-6 desktop:mt-0 text-[16px] desktop:w-[440px]">
        {{ $t("全都在同一个地方进行") }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

import { useSystem } from "@/store";
import { storeToRefs } from "pinia";

import NftIcon from "@/assets/svg/nft/top.vue";
import Card1 from "@/assets/svg/nft/c1.vue";
import Card2 from "@/assets/svg/nft/c2.vue";

const { theme } = storeToRefs(useSystem());

const color = computed(() => (theme.value === "dark" ? "#48ff91" : "blue"));

const cardArr = computed(() => [
  { id: 0, name: "Open Sea", img: require("@/assets/img/c2.avif") },
  { id: 1, name: "Rarible", img: require("@/assets/img/c2.avif") },
  { id: 2, name: "Solanart", img: require("@/assets/img/c2.avif") },
  { id: 3, name: "Axie (infinity)", img: require("@/assets/img/c4.avif") }
]);
</script>

<style lang="scss" scoped></style>
