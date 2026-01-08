<template>
  <div
    :data-checked="checked"
    class="nav bg-[#fff] dark:bg-black! py-[15px] px-2 data-[checked=true]:bg-baseWhite! data-[checked=true]:dark:bg-trustBlack!"
  >
    <div class="nav-icon flex flex-row items-center px-2 cursor-pointer" @click="handleHome">
      <NavIcon />
      <span v-if="!isMobile" class="default-transition text-trustBlue! font-bold text-[28px] dark:text-trustGreen!">Trust</span>
    </div>
    <div v-if="!isMobile" class="flex felx-row justify-between items-center px-2!">
      <div
        class="nav-button__item relative group/item"
        v-for="item in btnArr"
        :key="item.id"
        @click="handleClick(item.id)"
        @mouseenter="enterMenu(item.id)"
        @mouseleave="leaveMenu"
      >
        <moon v-if="item.id === 6 && !isDark" class="w-4 h-4 desktop:ml-3 desktop:mr-[30px] cursor-pointer" @click="toggleDark" />
        <img
          v-else-if="item.id === 6 && isDark"
          :src="item.name"
          class="w-3 h-3 desktop:ml-3 desktop:mr-[30px] cursor-pointer dark:invert dark:brightness-200"
          alt=""
          @click="toggleDark"
        />
        <div v-else class="default-transition cursor-pointer text-[12px] font-bold px-3" :class="{ textUnderline: +item.id === 0 }">
          {{ item.name }}
        </div>
        <div
          v-show="![0, 6].includes(item.id) && activeMenu === item.id"
          @mouseenter="enterMenu(item.id)"
          @mouseleave="leaveMenu"
          class="fixed left-0 top-[55px] w-screen bg-white dark:bg-black! shadow-lg transition-all duration-200"
          :class="activeMenu === item.id ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'"
        >
          <div class="p-6 text-black dark:text-trustWhite!">
            <PanelVue :type="item.type" @close="leaveMenu" />
          </div>
        </div>
      </div>
      <div class="flex flex-row gap-[30px]">
        <n-popover v-model:show="overlap" :overlap="overlap" class="dark:bg-trustBlack!" placement="top" :show-arrow="false" trigger="click">
          <template #trigger>
            <n-button
              round
              @click="overlap = true"
              class="text-trustBlue! border! border-trustBlue! hover:bg-trustBlue! hover:text-trustWhite! dark:text-trustGreen! dark:border-trustGreen! dark:hover:bg-trustGreen!"
            >
              <template #icon>
                <internetWork class="w-5 h-5" />
              </template>
              <span>{{ $t("语言") }}</span>
            </n-button>
          </template>
          <div class="navCon w-[340px] grid grid-cols-4 gap-x-[43px] gap-y-6">
            <div class="w-12 h-12 flex justify-center items-center" v-for="(item, index) in langIcon" :key="item.id">
              <component
                :is="item.compoent"
                @click="handleLang(item.lang, index)"
                :style="{ border: activeIndex === index && '2px solid' }"
                class="w-10 h-10 rounded-full cursor-pointer transition-transform hover:border hover:scale-110"
              />
            </div>
          </div>
        </n-popover>

        <n-button
          type="primary"
          round
          class="text-trustWhite! hover:bg-trustGreen! hover:text-trustBlack! dark:text-black! bg-trustBlue! dark:bg-trustGreen! dark:hover:text-trustWhite!"
        >
          {{ $t("下载") }}
        </n-button>
      </div>
    </div>
    <button
      v-else
      :data-checked="checked"
      class="default-transition cursor-pointer flex w-10 flex-col gap-1.5 duration-300 data-[checked=true]:w-8 data-[checked=true]:rotate-90"
      id="headlessui-switch-:Raalda:"
      role="switch"
      type="button"
      tabindex="0"
      :aria-checked="checked"
      @click="handleToggle"
    >
      <span
        :data-checked="checked"
        class="default-transition block h-[3px] w-full rounded-sm bg-trustBlue duration-300 data-[checked=true]:translate-y-[9px] data-[checked=true]:rotate-45 dark:bg-trustGreen"
      ></span>
      <span
        :data-checked="checked"
        class="default-transition block h-[3px] w-full rounded-sm bg-trustBlue duration-200 data-[checked=true]:opacity-0 dark:bg-trustGreen"
      ></span>
      <span
        :data-checked="checked"
        class="default-transition block h-[3px] w-full rounded-sm bg-trustBlue duration-300 data-[checked=true]:translate-y-[-9px] data-[checked=true]:-rotate-45 dark:bg-trustGreen"
      ></span>
    </button>
  </div>
  <transition name="slide-up">
    <NavDialog v-if="checked" v-model:isopen="checked" :btnArr="btnArr" :lang="langIcon" />
  </transition>
</template>

<script setup>
import { computed, onUnmounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

import { useDarkMode, useLanguage, useDevice } from "@/hooks";
import { setStorage, getStorage } from "@/utils";

import NavIcon from "@/assets/svg/navIcon.vue";
import internetWork from "@/assets/svg/internet.vue";
import moon from "@/assets/svg/moon.vue";
import en from "@/assets/svg/country/en.vue";
import zh from "@/assets/svg/country/zh.vue";
import french from "@/assets/svg/country/french.vue";
import spnish from "@/assets/svg/country/spnish.vue";
import id from "@/assets/svg/country/id.vue";
import janpan from "@/assets/svg/country/janpa.vue";
import south from "@/assets/svg/country/south.vue";
import pt from "@/assets/svg/country/pt.vue";
import ru from "@/assets/svg/country/ru.vue";
import es from "@/assets/svg/country/es.vue";
import tr from "@/assets/svg/country/tr.vue";
import uk from "@/assets/svg/country/uk.vue";
import vi from "@/assets/svg/country/vi.vue";
import NavDialog from "./components/dialog.vue";
import PanelVue from "./components/panel.vue";

let timer;
const router = useRouter();
const { isDark, toggleDark } = useDarkMode();
const { setLang } = useLanguage();
const { t } = useI18n();
const { isMobile } = useDevice();
const overlap = ref(false);
const checked = ref(false);
const activeMenu = ref(null);
const activeIndex = ref(getStorage("navIndex") ?? "1");

const btnArr = computed(() => [
  { id: 0, name: "Market" },
  { id: 1, name: t("钱包"), type: "wallet" },
  { id: 2, name: t("功能"), type: "feature" },
  { id: 3, name: t("建构"), type: "build" },
  { id: 4, name: t("帮助中心"), type: "help" },
  { id: 5, name: t("关于"), type: "about" },
  { id: 6, name: isDark.value ? require("@/assets/svg/sun.svg") : require("@/assets/svg/moon.svg") }
]);

const langIcon = computed(() => [
  { id: 0, compoent: en, lang: "en" },
  { id: 1, compoent: zh, lang: "zh_CN" },
  { id: 2, compoent: french, lang: "fr" },
  { id: 3, compoent: spnish, lang: "de" },
  { id: 4, compoent: id, lang: "idn" },
  { id: 5, compoent: janpan, lang: "ja" },
  { id: 6, compoent: south, lang: "ko" },
  { id: 7, compoent: pt, lang: "pt" },
  { id: 8, compoent: ru, lang: "ru" },
  { id: 9, compoent: es, lang: "es" },
  { id: 10, compoent: tr, lang: "tr" },
  { id: 11, compoent: uk, lang: "uk" },
  { id: 12, compoent: vi, lang: "vn" }
]);

const handleHome = () => {
  checked.value = false;
  router.push("/");
};

const handleToggle = () => {
  checked.value = !checked.value;
};

const handleLang = (lang, index) => {
  setLang(lang);
  setStorage("navIndex", index);
  overlap.value = false;
  activeIndex.value = index;
};

// 菜单hover显示隐藏
const enterMenu = (id) => {
  clearTimeout(timer);
  activeMenu.value = id;
};

const handleClick = (id) => {
  if (+id === 0) return router.push("/price");
  enterMenu(id);
};

// 离开菜单恢复默认状态
const leaveMenu = () => {
  timer = setTimeout(() => {
    activeMenu.value = null;
  }, 120);
};

onUnmounted(() => clearTimeout(timer));
</script>

<style lang="scss" scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;

  .textUnderline:hover {
    text-decoration: underline;
  }
}

.slide-up-enter-active,
.slide-up-leave-active {
  width: 100%;
  transition: 0.5s ease;
  opacity: 1;
}

.slide-up-enter-from,
.slide-up-leave-to {
  width: 100%;
  transform: scaleY(0);
  transform-origin: 50% 0;
  opacity: 0;
}
</style>
