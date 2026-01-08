<template>
  <n-config-provider
    preflight-style-disabled
    :theme="theme"
    :locale="lang[locale]"
    :date-locale="dateZhCN"
    :theme-overrides="themeOverrides"
    :style="{ background: 'var(--bg-color)', color: 'var(--text-color)' }"
  >
    <n-message-provider>
      <n-dialog-provider>
        <n-notification-provider>
          <n-space vertical>
            <div class="content relative">
              <Nav />
              <div class="mx-auto mb-38 relative top-[120px] desktop:w-[1200px] px-4">
                <router-view v-slot="{ Component, route }">
                  <transition name="fade">
                    <KeepAlive v-if="route.meta.keepAlive">
                      <component :is="Component" />
                    </KeepAlive>
                    <component v-else :is="Component" :key="route.fullPath" />
                  </transition>
                </router-view>
                <Footer />
                <div class="mt-12! opacity-0">·</div>
              </div>
            </div>
          </n-space>
        </n-notification-provider>
      </n-dialog-provider>
    </n-message-provider>
  </n-config-provider>
</template>

<script setup>
import { computed } from "vue";
import { NConfigProvider, NSpace, darkTheme } from "naive-ui";
import { zhCN, dateZhCN, enUS, jaJP, koKR, ptBR, ruRU, thTH, trTR, ukUA, viVN, frFR, idID, esAR, deDE } from "naive-ui";

import { useDarkMode, useLanguage } from "@/hooks";
import { themeOverrides } from "@/utils/themeOverrides";

import Nav from "./components/nav/index.vue";
import Footer from "@/components/footer/index.vue";

const { isDark } = useDarkMode();
const { locale } = useLanguage();

const lang = computed(() => ({
  zh_CN: zhCN,
  en: enUS,
  ja: jaJP,
  ko: koKR,
  pt: ptBR,
  ru: ruRU,
  th: thTH,
  tr: trTR,
  uk: ukUA,
  vn: viVN,
  fr: frFR,
  idn: idID,
  es: esAR,
  de: deDE
}));
const theme = computed(() => (isDark.value ? darkTheme : null));
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  height: 100%;
}

/* 路由切换动画 */
.fade-leave-active,
.fade-enter-active {
  transition: all 0.2s;
}

/* 可能为enter失效，拆分为 enter-from和enter-to */
.fade-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.fade-enter-to {
  opacity: 1;
  transform: translateY(0px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
