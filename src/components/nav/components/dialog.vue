<template>
  <div
    :data-isopen="isopen"
    :modelValue="isopen"
    @update:modelValue="emit('update:isopen', $event)"
    class="default-transition responsive-page-paddings px-6 fixed inset-0 z-10 flex gap-2 h-screen flex-col overflow-auto bg-baseWhite pb-8 pt-24 data-[isopen=true]:max-h-screen data-[isopen=false]:py-0! data-[isopen=false]:delay-150 dark:bg-trustBlack"
  >
    <div
      class="default-transition w-full rounded-xl cursor-pointer bg-white px-3 py-3.5 dark:bg-lightBlack"
      v-for="item in tabaArr"
      :key="item.id"
      @click="handleClick(item)"
    >
      <div :data-selectedmenu="item.selected" class="flex flex-row items-center justify-between data-[selectedmenu=true]:mb-3">
        <div class="font-bold">{{ item.name }}</div>
        <Right v-if="item.id !== 0" :data-selectedmenu="item.selected" class="default-transition data-[selectedmenu=true]:rotate-90 h-[30px]" />
      </div>
      <PanelVue v-if="item.selected" :type="item.type" @close="emit('update:isopen', false)" />
    </div>

    <div
      :data-isopen="isopen"
      class="default-transition mb-[10%] mt-auto ease-in-out data-[isopen=true]:mb-0 data-[isopen=true]:opacity-100 data-[isopen=true]:delay-300"
    >
      <div class="mt-6 flex items-center justify-end gap-4">
        <button
          @click="toggleDark"
          class="px-5 py-2.5 h-9 default-transition relative z-10 overflow-hidden flex items-center justify-center gap-3 rounded-full text-center text-mobileButton font-medium leading-mobileButton bg-transparent border text-trustBlack border-trustBlack dark:text-trustWhite! dark:border-trustWhite! | hover:bg-trustBlack! hover:text-trustWhite! dark:hover:text-trustBlack! dark:hover:bg-trustWhite!"
        >
          <moon v-if="!isDark" class="w-5" />
          <sun v-else class="w-5" />
          {{ $t("深色模式") }}
        </button>
        <div
          class="px-5 py-2.5 h-9 default-transition relative z-10 overflow-hidden flex items-center justify-center gap-3 rounded-full text-center text-mobileButton font-medium leading-mobileButton bg-transparent border text-trustBlue border-trustBlue dark:text-trustGreen dark:border-trustGreen | hover:bg-trustBlue hover:text-trustWhite! dark:hover:text-trustBlack! dark:hover:bg-trustGreen!"
        >
          <internetWork />
          <span @click="visibleDialog = true">{{ $t("语言") }}</span>
        </div>
      </div>
      <a
        class="px-8 py-4.5 tablet:py-3 tablet:px-10 tablet:text-desktopButton tablet:leading-desktopButton default-transition relative z-10 overflow-hidden flex items-center justify-center gap-3 rounded-full text-center text-mobileButton font-medium leading-mobileButton before:left-0 before:absolute before:-z-1 before:rounded-full before:w-[0%] before:top-0 before:bottom-0 before:transition before:[transition-property:width] before:duration-500 hover:before:w-full bg-trustBlue! text-trustWhite! dark:bg-trustGreen! dark:text-trustBlack! | before:bg-trustGreen! hover:text-trustBlack! dark:hover:text-trustWhite! before:dark:bg-trustBlue! mt-4 w-full"
        href="/download"
      >
        {{ $t("下载") }} Trust Wallet
      </a>
    </div>
    <n-modal
      v-if="visibleDialog"
      v-model:show="visibleDialog"
      class="bg-trustWhite! dark:bg-trustBlack! rounded-[20px]!"
      style="width: 350px; position: fixed; right: 0; top: 30%; left: 0; margin: auto"
      preset="card"
      size="huge"
      role="dialog"
      aria-modal="true"
      :show-mask="true"
      close-on-esc
    >
      <div class="grid grid-cols-4 gap-x-[63px] gap-y-5">
        <div v-for="(item, index) in lang" :key="item.id">
          <component
            :is="item.compoent"
            @click="handleLang(item.lang, index)"
            class="w-[33px] h-[33px] rounded-full cursor-pointer transition-transform hover:scale-110"
            :style="{ border: activeIndex === index && '2px solid' }"
          />
        </div>
      </div>
    </n-modal>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, computed } from "vue";
import { useRouter } from "vue-router";

import { useDarkMode, useLanguage } from "@/hooks";
import { getStorage, setStorage } from "@/utils";

import internetWork from "@/assets/svg/internet.vue";
import moon from "@/assets/svg/moon.vue";
import sun from "@/assets/svg/sun.vue";
import Right from "@/assets/svg/right.vue";
import PanelVue from "./panel.vue";

const props = defineProps({
  isopen: {
    type: Boolean,
    default: false
  },
  btnArr: {
    type: Array,
    default: () => []
  },
  lang: {
    type: Array,
    default: () => []
  }
});

const router = useRouter();
const emit = defineEmits(["update:isopen"]);
const { isDark, toggleDark } = useDarkMode();
const { setLang } = useLanguage();

const activeIndex = ref(getStorage("navIndex") ?? "1");
const visibleDialog = ref(false);
const selectedMap = ref({});
const tabaArr = computed(() =>
  props.btnArr
    .filter((i) => i.id !== 6)
    .map((item) => ({
      ...item,
      selected: selectedMap.value[item.id] ?? false
    }))
);

const handleLang = (lang, index) => {
  setStorage("navIndex", index);
  setLang(lang);
  visibleDialog.value = false;
  activeIndex.value = index;
};

const handleClick = (item) => {
  if (item.id === 0) {
    emit("update:isopen", false);
    return router.push("/price");
  }
  selectedMap.value[item.id] = !selectedMap.value[item.id];
};
</script>

<style lang="scss" scoped></style>
