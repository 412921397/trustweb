<template>
  <div>
    <div class="mt-8! w-[60%] mx-auto bg-softGray/60! dark:bg-trustBlack! relative">
      <n-input
        class="rounded-full! border-0! bg-softGray/60! dark:bg-trustBlack!"
        v-model:value="value"
        placeholder="Search for a token..."
        @keydown.enter.prevent="handleSearch"
        @input="handleSearch"
        clearable
      >
        <template #prefix>
          <n-icon :component="Search" />
        </template>
      </n-input>
      <div v-if="value.length > 0" class="absolute top-12 w-full bg-softGray! rounded-[20px] z-9 max-h-80 overflow-y-scroll">
        <div class="transition-color flex items-center gap-4 px-6 py-4 border-b border-tintBlue dark:border-tintBlack" v-if="searchData.length === 0">
          No tokens found for "{{ value }}"
        </div>
        <template v-else>
          <div
            class="transition-color cursor-pointer flex items-center gap-4 px-6 py-4 border-b border-tintBlue dark:border-tintBlack"
            v-for="item in searchData"
            :key="item.coinId"
            @click="handleLink(item)"
          >
            <n-skeleton class="h-8 w-8 shrink-0" v-if="searchLoading" />
            <div v-else class="relative h-8 w-8 shrink-0 tablet:h-10 tablet:w-10">
              <img :src="item.logo" alt="" />
              <div
                class="absolute bottom-0 right-0 flex items-center justify-center rounded-full bg-white dark:bg-lightBlack h-3 w-3 tablet:h-4 tablet:w-4 ring-2 ring-white dark:ring-lightBlack"
              >
                <img :src="item.logo" alt="" />
              </div>
            </div>
            <n-skeleton class="flex flex-1 flex-col" v-if="searchLoading" />
            <div v-else class="flex flex-1 flex-col">
              <div class="relative inline-block">{{ item.name }}</div>
              <div class="flex items-center text-[12px] text-trustBlack/60 dark:text-trustWhite/60!">{{ item.symbol }}</div>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { Search } from "@vicons/ionicons5";

import { useUser } from "@/store";
import { storeToRefs } from "pinia";
import { throttle } from "lodash";
import { setStorage } from "@/utils";

const router = useRouter();
const userStore = useUser();
const { loading: searchLoading, searchData } = storeToRefs(userStore);
const value = ref("");

const handleSearch = throttle(async (text = "") => {
  if (text === "" || value.value === "") return (searchData.value = []);
  userStore.searchDataAction(text || value.value);
}, 500);

const handleLink = (item) => {
  setStorage("coinItem", item);
  router.push({ name: "MarketPriceDetails", params: { name: item.slug } });
};
</script>

<style lang="scss" scoped></style>
