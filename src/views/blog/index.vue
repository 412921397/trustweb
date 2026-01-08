<template>
  <div>
    <div class="default-transition flex flex-col px-2">
      <div class="text-[50px] font-bold">Trust 部落格</div>
      <div class="py-6">探索最新主题和见解，以帮助您轻松自信地浏览Web3。</div>
      <n-button
        round
        class="bg-trustWhite! desktop:w-[190px]! text-trustBlue! border! border-trustBlue! font-bold hover:text-trustWhite! hover:bg-trustBlue! dark:bg-trustBlack! dark:border-trustGreen! dark:text-trustGreen! dark:hover:bg-trustGreen! dark:hover:text-trustBlack!"
      >
        在X 关注Trust Wallet X
      </n-button>
    </div>
    <n-card class="mt-8 rounded-[20px]! py-1 bg-baseWihte! border! border-[#e5e5e5]! dark:text-trustWhite! dark:border-tintBlack dark:bg-lightBlack!">
      <div class="grid desktop:grid-cols-2 items-center">
        <img class="mx-auto w-full max-w-[450px] rounded-[10px] object-fill tablet:mx-0 tablet:rounded-[20px]" src="@/assets/img/blog.avif" alt="" />
        <div>
          <div>2025年3月3日</div>
          <div class="py-5 font-bold text-[24px]">BNB Smart Chain 新手指南</div>
          <div class="text-[16px]"><span class="cursor-pointer">查看更多</span></div>
        </div>
      </div>
    </n-card>
    <n-carousel class="mt-8! rounded-[20px]" autoplay>
      <img class="carousel-img" src="@/assets/svg/blog/blog1.svg" />
      <img class="carousel-img" src="@/assets/svg/blog/blog2.svg" />
      <img class="carousel-img" src="@/assets/svg/blog/blog3.svg" />
    </n-carousel>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
