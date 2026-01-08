<template>
  <div>
    <section class="grid w-full max-w-screen-max+padding gap-1 tablet:grid-cols-2 tablet:gap-1 tablet:gap-y-14">
      <div class="flex-col justify-center tablet:flex">
        <div class="default-transition text-trustBlack font-bold dark:text-trustWhite px-1">
          <span class="text-[45px] leading-[1.2]">{{ $t("货币所有权") }}</span>
          <br />
          <span class="font-bold text-[45px] leading-[1.2]">{{ $t("强大") }}</span>
        </div>
        <div class="default-transition text-[20px] font-inter dark:text-trustWhite mt-2.5">
          <span style="vertical-align: inherit">{{ $t("释放") }}</span>
        </div>
        <div v-if="!isMobile" class="mt-[25px] flex flex-row gap-1 tablet:flex">
          <div>
            <button
              @click="handleDownload"
              class="default-transition px-3 flex h-[50px] text-trustBlue! cursor-pointer justify-center items-center gap-1 rounded-full border border-trustBlue text-left hover:bg-trustBlue hover:text-white! dark:border-trustGreen dark:text-trustGreen dark:hover:bg-trustGreen dark:hover:text-trustBlack!"
            >
              <Phone class="w-[30px] h-[30px]" />
              <div>
                <div class="default-transition font-inter dark:text-trustWhite transition-[unset]! duration-[unset]!" style="vertical-align: inherit">
                  {{ $t("下载") }}
                </div>
                <div class="default-transition font-inter dark:text-trustWhite transition-[unset]! duration-[unset]!">{{ $t("行动版") }}</div>
              </div>
            </button>
          </div>
          <button
            @click="handleDownload"
            class="default-transition flex h-[50px] text-trustBlue! cursor-pointer justify-center items-center gap-1 rounded-full border border-trustBlue px-3 text-left hover:bg-trustBlue hover:text-white! dark:border-trustGreen dark:text-trustGreen dark:hover:bg-trustGreen dark:hover:text-trustBlack!"
          >
            <Pc class="w-[30px] h-[30px]" />
            <div>
              <div class="default-transition font-inter dark:text-trustWhite transition-[unset]! duration-[unset]!" style="vertical-align: inherit">
                {{ $t("下载") }}
              </div>
              <div class="default-transition font-inter dark:text-trustWhite transition-[unset]! duration-[unset]!">{{ $t("扩充功能") }}</div>
            </div>
          </button>
        </div>
        <n-button
          v-else
          @click="handleDownload"
          round
          size="large"
          class="bg-trustBlue! font-bold text-trustWhite! hover:bg-trustGreen! hover:text-trustBlack! dark:bg-trustGreen! dark:text-trustBlack! dark:hover:bg-trustBlue! dark:hover:text-trustWhite!"
        >
          {{ $t("下载行动") }}APP
        </n-button>
      </div>

      <img class="desktop:ml-[85px] h-auto w-full max-w-[535px] self-center" src="@/assets/img/image.avif" alt="" />
    </section>
    <div
      class="w-full flex flex-wrap mt-2 text-[22px] justify-around items-center gap-12! text-center tablet:col-start-1 tablet:col-end-3 desktop:flex-nowrap desktop:items-start desktop:gap-3 [&>h4>span]:text-trustBlue [&>h4>span]:dark:text-trustGreen"
    >
      <h4 class="default-transition" style="vertical-align: inherit">HOME_PAGE.hero.trusted-by-1</h4>
      <h4 class="default-transition text-trustBlack font-wixMadefor font-bold dark:text-trustWhite">
        {{ $t("成立于") }}
        <br />
        <span style="vertical-align: inherit">
          2017
          <span v-if="locale === 'zh'">{{ $t("年") }}</span>
        </span>
      </h4>
      <h4 class="default-transition text-trustBlack font-wixMadefor font-bold dark:text-trustWhite">
        {{ $t("独立") }}
        <br />
        <span>{{ $t("稽核") }}</span>
      </h4>
      <h4 class="default-transition text-trustBlack font-wixMadefor font-bold dark:text-trustWhite">
        ISO
        <br />
        <span>{{ $t("认证") }}</span>
      </h4>
      <h4 class="default-transition text-trustBlack font-wixMadefor font-bold dark:text-trustWhite">
        {{ $t("热门评论") }}
        <br />
        <n-rate readonly :default-value="5" :color="color" />
      </h4>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

import { useSystem } from "@/store";
import { useDevice } from "@/hooks";
import { storeToRefs } from "pinia";
import { useI18n } from "vue-i18n";
import { useRouter } from "vue-router";

import Phone from "@/assets/svg/phone.vue";
import Pc from "@/assets/svg/pc.vue";

const { theme } = storeToRefs(useSystem());
const { isMobile } = useDevice();
const { locale } = useI18n();
const router = useRouter();

const color = computed(() => (theme.value === "dark" ? "#48ff91" : "blue"));

const handleDownload = () => router.push("/download");
</script>

<style lang="less" scoped>
.text-lightBlack {
  font-weight: 550;
}
</style>
