<template>
  <div class="overflow-hidden relative">
    <section>
      <Text />
      <div class="grid desktop:grid-cols-2 desktop:gap-6">
        <Earth class="order-2 desktop:order-1" />
        <div class="flex flex-col order-1 desktop:order-2 justify-center mt-50 desktop:mt-0">
          <div class="default-transition font-bold text-[20px] desktop:text-[55px]! leading-[1.1]">
            {{ $t("我们让数百万人使用") }}
            <br />
            {{ $t("Web3变得更轻松且") }}
            <br v-if="locale !== 'jp'" />
            {{ $t("安全") }}
          </div>
          <div class="default-transition py-5 desktop:py-3 text-[16px]">
            {{ $t("我们得到超过2") }}
          </div>
          <p>
            <n-button
              @click="$router.push('/download')"
              round
              size="large"
              class="bg-trustBlue! font-bold text-trustWhite! hover:bg-trustGreen! dark:bg-trustGreen! dark:text-trustBlack! dark:hover:bg-trustBlue! dark:hover:text-trustWhite!"
            >
              {{ $t("探索") }} Trust Wallet
            </n-button>
          </p>
        </div>
      </div>
    </section>
    <section class="mt-8!">
      <div
        class="default-transition flex flex-col desktop:flex-row py-6 bg-trustBlue rounded-[20px] text-trustWhite dark:bg-trustGreen dark:text-trustBlack"
      >
        <div class="font-bold text-[30px] px-6 desktop:px-0 desktop:mr-[100px] desktop:ml-10">{{ $t("我们的目的") }}</div>
        <div class="px-6 mt-6 desktop:mt-0 desktop:px-0">
          <div class="flex flex-row items-center">
            <div class="default-transition font-bold text-[30px] desktop:text-[80px] leading-[1.1]">
              {{ $t("自由") }}
              <br />
              {{ $t("基础") }}
            </div>
            <AboutIcon v-if="!isMobile" class="desktop:ml-8" />
          </div>
          <div class="default-transition text-[16px] leading-[1.1] py-6 desktop:py-0">
            {{ $t("我们期许为未来的自由网路打下基础") }}
            <br v-if="locale !== 'vn' || !isMobile" />
            {{ $t("拥有的自由") }}
          </div>
        </div>
      </div>
    </section>
    <section class="mt-8!">
      <div class="default-transition flex flex-col py-6 bg-trustBlack rounded-[20px] text-trustWhite dark:bg-trustWhite dark:text-trustBlack">
        <div class="font-bold text-[30px] px-6 desktop:px-0 desktop:mr-[100px] desktop:ml-10">{{ $t("我们的愿景") }}</div>
        <div class="flex flex-row px-6 desktop:mt-6">
          <img v-if="!isMobile" src="@/assets/svg/about-us/about2.svg" alt="" />
          <div class="flex flex-col justify-around desktop:ml-4">
            <div class="default-transition text-[30px] desktop:text-[56px] font-bold leading-[1.1]">
              {{ $t("让人们自由") }}
              <br />
              {{ $t("拥有自己的资产") }}
            </div>
            <div class="default-transition mt-6 desktop:mt-0 text-[16px] leading-[1.1]">
              {{ $t("自信参与未来经济并") }}
              <br />
              {{ $t("获得改善生活的机会") }}
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-8!">
      <div class="default-transition flex flex-col py-6 bg-trustGreen rounded-[20px] text-trustBlack">
        <div class="font-bold text-[30px] px-6 desktop:px-0 desktop:mr-[100px] desktop:ml-10">{{ $t("我们的使命") }}</div>
        <div class="flex flex-row px-6 desktop:mt-6">
          <img v-if="!isMobile" src="@/assets/svg/about-us/about3.svg" alt="" />
          <div class="flex flex-col justify-around desktop:ml-4">
            <div class="default-transition text-[30px] desktop:text-[56px] font-bold leading-[1.1]">
              {{ $t("成为") }}
              <br />
              {{ $t("个人良伴") }}
            </div>
            <div class="default-transition text-[16px] mt-6 desktop:mt-0">
              {{ $t("在用户遨游于Web3") }}
              <br />
              {{ $t("新兴AI领域时提供支援") }}
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-8!">
      <n-card
        class="mt-8 rounded-[20px]! py-8 bg-baseWihte! border! border-[#e5e5e5]! dark:text-trustWhite! dark:border-tintBlack dark:bg-lightBlack!"
      >
        <div class="flex flex-col justify-center">
          <div class="font-bold text-[22px] text-center">{{ $t("成立于2017年") }}</div>
          <div class="flex flex-row items-center mt-1">
            <div class="text-[16px] px-12">
              <div class="text-trustBlue text-[20px] font-bold">{{ $t("成立于2017年") }}</div>
              <div class="desktop:mt-3.5">
                {{ $t("使加密货币变得简化以及民主") }}
                <br />
                {{ $t("让每个人都能方便使用") }}
              </div>
            </div>
            <AboutIcon1 />
          </div>
          <div class="flex flex-row items-center mt-8 px-2">
            <img src="@/assets/svg/erath.svg" alt="" />
            <div class="text-[16px] px-2 desktop:ml-12">
              <div class="text-trustBlue text-[20px] font-bold">{{ $t("受到2亿人信赖") }}</div>
              <div class="desktop:mt-3.5">{{ $t("我们让使用Web3变得更安全") }}</div>
            </div>
          </div>
          <div class="flex flex-row items-center mt-8">
            <div class="text-[16px] px-12">
              <div class="text-trustBlue text-[20px] font-bold">{{ $t("我们不会仅止于此") }}</div>
              <div class="desktop:mt-3.5">{{ $t("我们持续在打好基础") }}</div>
            </div>
            <img class="desktop:ml-58" src="@/assets/svg/about-us/about2.svg" alt="" />
          </div>
        </div>
      </n-card>
    </section>
    <section class="mt-8!">
      <div class="default-transition font-bold text-[30px]">{{ $t("担责和当责") }}</div>
      <div class="grid grid-cols-1 desktop:grid-cols-3 gap-6 mt-8">
        <div
          v-for="item in cardArr"
          :key="item.id"
          class="default-transition rounded-[20px] py-6 px-6 bg-trustBlue text-trustWhite dark:bg-trustGreen dark:text-trustBlack"
        >
          <div class="font-bold text-[32px]">{{ item.title }}</div>
          <div class="py-3 text-[18px]">{{ item.desc }}</div>
        </div>
      </div>
    </section>
    <section class="mt-8!">
      <div class="grid grid-cols-1 desktop:grid-cols-2 gap-6 px-2">
        <div class="flex flex-col justify-around">
          <div class="font-bold text-[36px] leading-[1.1]">
            {{ $t("我们是充满热情的") }}
            <br />
            {{ $t("Web31") }}
            <br />
            {{ $t("开发和创作团队") }}
          </div>
          <div class="text-[16px] py-6">{{ $t("我们的团队与我们建构的产品一样独特且去中心化") }}</div>
          <p>
            <n-button
              @click="$router.push('/careers')"
              round
              size="large"
              class="bg-trustBlue! font-bold text-trustWhite! hover:bg-trustGreen! dark:bg-trustGreen! dark:text-trustBlack! dark:hover:bg-trustBlue! dark:hover:text-trustWhite!"
            >
              {{ $t("浏览工作机会") }}
            </n-button>
          </p>
        </div>
        <img class="mx-auto desktop:ml-[85px] h-auto w-full max-w-[335px] self-center" src="@/assets/img/image.avif" alt="" />
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from "vue";

import { useDevice } from "@/hooks";
import { useI18n } from "vue-i18n";

import Text from "@/assets/svg/about-us/text.vue";
import Earth from "@/assets/svg/about-us/earth.vue";
import AboutIcon from "@/assets/svg/about-us/about.vue";
import AboutIcon1 from "@/assets/svg/about-us/about4.vue";

const { isMobile } = useDevice();
const { t, locale } = useI18n();

const cardArr = computed(() => [
  { id: 0, title: t("以用户为尊"), desc: t("我们以用户为尊") },
  { id: 1, title: t("担责和当责"), desc: t("我们以决心热情和毅力追求成果") },
  { id: 2, title: t("开放和协作"), desc: t("成为最值得信任的Web3体验中心") },
  { id: 3, title: t("谦逊和成长型思维"), desc: t("我们充满好奇心") },
  { id: 4, title: t("正直坚定"), desc: t("不做恶事") },
  { id: 5, title: t("以执行为导向"), desc: t("我们倾向于行动") }
]);
</script>

<style lang="scss" scoped></style>
