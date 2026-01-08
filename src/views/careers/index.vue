<template>
  <div>
    <section class="mt-1!">
      <div class="grid grid-cols-1 desktop:grid-cols-2 gap-6 desktop:px-12">
        <div class="flex flex-col justify-around">
          <div class="font-bold text-[48px] leading-[1.1]">{{ $t("Trust职缺") }}</div>
          <div class="text-[16px] py-6">
            {{ $t("我们相信Web3") }}
          </div>
          <p>
            <n-button
              @click="handleLink"
              round
              size="large"
              class="bg-trustBlue! font-bold text-trustWhite! hover:bg-trustGreen! dark:bg-trustGreen! dark:text-trustBlack! dark:hover:bg-trustBlue! dark:hover:text-trustWhite!"
            >
              {{ $t("查看开放角色") }}
            </n-button>
          </p>
        </div>
        <img class="desktop:ml-[85px] mx-auto h-auto w-full max-w-[335px] self-center" src="@/assets/img/image.avif" alt="" />
      </div>
    </section>
    <section class="mt-8!">
      <div class="text-[26px] font-bold leading-[1.1]">{{ $t("加入我们透过Trust") }}</div>
      <div class="text-[16px] desktop:mt-3">{{ $t("成为最值得信赖的Web3体验中心") }}</div>
      <div class="flex flex-col desktop:flex-row gap-5 mt-8">
        <div
          class="default-transition desktop:w-[25%] bg-trustBlue font-bold text-trustWhite rounded-[20px] px-4 py-6 dark:bg-trustGreen dark:text-trustBlack"
          v-for="item in cardArr"
          :key="item.id"
        >
          <div class="font-bold">{{ item.title }}</div>
          <div class="mt-3 font-bold text-[18px]">{{ item.desc }}</div>
        </div>
      </div>
    </section>
    <section v-if="!isMobile" class="mt-8!">
      <div class="default-transition flex flex-row gap-6 px-16 text-[14px]!">
        <div class="w-[50%]">
          <div class="font-bold text-[24px]">{{ $t("来自执行长的讯息") }}</div>
          <div class="py-5">{{ $t("感谢您对加入我们的团队感兴趣") }}</div>
          <div>
            <span class="font-bold">{{ $t("我们是一个互相支持的团队") }}</span>
            {{ $t("我们的目标是让团队成员提升工作效率") }}
          </div>
          <div class="py-5 break-all">
            {{ $t("我们一直致力于开启新领域") }}
          </div>
          <div>
            {{ $t("但我们都有以下重要特征") }}
          </div>
        </div>
        <n-card
          class="w-[50%]! rounded-[20px]! bg-baseWihte! border! border-[#e5e5e5]! dark:text-trustWhite! dark:border-tintBlack dark:bg-lightBlack!"
        >
          <div class="flex flex-row items-center py-5">
            <span
              class="default-transition desktop:mr-6 grid h-[30px] min-h-[30px] w-[30px] min-w-[30px] place-content-center rounded-full bg-trustBlue text-trustWhite dark:bg-trustGreen dark:text-trustBlack"
            >
              1
            </span>
            <div>{{ $t("相信加密货币和区块链能够产生积极变化的力量") }}</div>
          </div>
          <div class="flex flex-row items-center py-5">
            <span
              class="default-transition desktop:mr-6 grid h-[30px] min-h-[30px] w-[30px] min-w-[30px] place-content-center rounded-full bg-trustBlue text-trustWhite dark:bg-trustGreen dark:text-trustBlack"
            >
              2
            </span>
            <div>{{ $t("对学习的热情") }}</div>
          </div>
          <div class="flex flex-row items-center py-5">
            <span
              class="default-transition desktop:mr-6 grid h-[30px] min-h-[30px] w-[30px] min-w-[30px] place-content-center rounded-full bg-trustBlue text-trustWhite dark:bg-trustGreen dark:text-trustBlack"
            >
              3
            </span>
            <div>{{ $t("保持坚定和谦虚") }}</div>
          </div>
          <div class="flex flex-row items-center py-5">
            <span
              class="default-transition desktop:mr-6 grid h-[30px] min-h-[30px] w-[30px] min-w-[30px] place-content-center rounded-full bg-trustBlue text-trustWhite dark:bg-trustGreen dark:text-trustBlack"
            >
              4
            </span>
            <div>{{ $t("灵活性适应性和弹性") }}</div>
          </div>
          <div class="flex flex-row items-center py-5">
            <span
              class="default-transition desktop:mr-6 grid h-[30px] min-h-[30px] w-[30px] min-w-[30px] place-content-center rounded-full bg-trustBlue text-trustWhite dark:bg-trustGreen dark:text-trustBlack"
            >
              5
            </span>
            <div>{{ $t("全力专注于以结果导向思维解决用户的问题") }}</div>
          </div>
          <div class="flex flex-row items-center py-5">
            <span
              class="default-transition desktop:mr-6 grid h-[30px] min-h-[30px] w-[30px] min-w-[30px] place-content-center rounded-full bg-trustBlue text-trustWhite dark:bg-trustGreen dark:text-trustBlack"
            >
              6
            </span>
            <div>{{ $t("对诚信和原则的高标准") }}</div>
          </div>
          <div class="flex flex-row items-center py-5">
            <span
              class="default-transition desktop:mr-6 grid h-[30px] min-h-[30px] w-[30px] min-w-[30px] place-content-center rounded-full bg-trustBlue text-trustWhite dark:bg-trustGreen dark:text-trustBlack"
            >
              7
            </span>
            <div>{{ $t("对非加密货币原生者和潜在合作伙伴的同理心") }}</div>
          </div>
        </n-card>
      </div>
    </section>
    <section class="mt-8!">
      <div class="flex flex-col desktop:flex-row gap-6 desktop:px-16">
        <img class="w-[80%] mx-auto desktop:w-full" src="@/assets/img/careers.avif" alt="" />
        <div class="desktop:ml-2 default-transition">
          <div class="mb-5">
            {{ $t("如果我们的愿景和使命令您兴奋") }}
            <br />
            {{ $t("并感到兴奋") }}
            <br />
            Eowyn
          </div>
          <n-button
            @click="handleLink"
            round
            size="large"
            class="bg-trustBlue! font-bold text-trustWhite! hover:bg-trustGreen! dark:bg-trustGreen! dark:text-trustBlack! dark:hover:bg-trustBlue! dark:hover:text-trustWhite!"
          >
            {{ $t("查看开放角色") }}
          </n-button>
        </div>
      </div>
    </section>
    <section v-if="!isMobile" class="mt-8! grid!">
      <div class="font-bold desktop:text-[24px]">{{ $t("产品") }}</div>
      <n-card
        class="mt-8! w-[47%]! mx-auto! rounded-[20px]! py-6 px-1 bg-baseWihte! border! border-[#e5e5e5]! dark:text-trustWhite! dark:border-tintBlack dark:bg-lightBlack!"
      >
        <div class="font-bold desktop:text-[24px]">{{ $t("产品") }}</div>
        <div class="text-[14px]! mt-5!">
          {{ $t("产品团队运作范围包括以用户为中心的设计") }}
        </div>
      </n-card>
      <div class="grid grid-cols-[1fr,1fr] gap-6 justify-end desktop:grid-cols-[1fr_2fr_1fr] mt-8!">
        <div />
        <n-card
          class="tablet:p-2.5 row-start-1 data-[odd=false]:tablet:col-start-2 desktop:col-start-2 rounded-[20px]! py-1 px-1 bg-baseWihte! border! border-[#e5e5e5]! dark:text-trustWhite! dark:border-tintBlack dark:bg-lightBlack!"
        >
          <div class="font-bold desktop:text-[24px]">{{ $t("安全性") }}</div>
          <div class="text-[14px]! mt-5!">
            {{ $t("安全团队专注于让使用我们产品的每个人可以安全使用Web3") }}
          </div>
        </n-card>
        <img class="w-full h-[276px] rounded-[40px] object-cover" src="@/assets/img/eve.avif" alt="" />
      </div>
      <div class="grid grid-cols-[1fr,1fr] gap-6 justify-end desktop:grid-cols-[1fr_2fr_1fr] mt-8!">
        <img
          class="w-full h-[276px] rounded-[40px] object-cover data-[odd=true]:col-end-3 data-[odd=true]:desktop:col-end-4"
          src="@/assets/img/sami.avif"
          alt=""
        />
        <n-card
          class="tablet:p-2.5 row-start-1 data-[odd=false]:tablet:col-start-2 desktop:col-start-2 rounded-[20px]! py-1 px-1 bg-baseWihte! border! border-[#e5e5e5]! dark:text-trustWhite! dark:border-tintBlack dark:bg-lightBlack!"
        >
          <div class="font-bold desktop:text-[24px]">{{ $t("国际市场") }}</div>
          <div class="text-[14px]! mt-5!">
            {{ $t("并创造有意义的行销体验") }}
          </div>
        </n-card>
      </div>
      <div class="grid grid-cols-[1fr,1fr] gap-6 desktop:grid-cols-[1fr_2fr_1fr] mt-8!">
        <div></div>
        <n-card
          class="tablet:p-2.5 row-start-1 data-[odd=false]:tablet:col-start-2 desktop:col-start-2 rounded-[20px]! py-1 px-1 bg-baseWihte! border! border-[#e5e5e5]! dark:text-trustWhite! dark:border-tintBlack dark:bg-lightBlack!"
        >
          <div class="font-bold desktop:text-[24px]">{{ $t("操作") }}</div>
          <div class="text-[14px]! mt-5!">
            {{ $t("营运部门透过监管公司的客服") }}
          </div>
        </n-card>
        <img
          class="w-full desktop:col-start-[200px] h-[276px] rounded-[40px] object-cover data-[odd=true]:col-end-3 data-[odd=true]:desktop:col-end-4"
          src="@/assets/img/rik.avif"
          alt=""
        />
      </div>
      <n-card
        class="mt-8! w-[47%]! mx-auto! rounded-[20px]! py-6 px-1 bg-baseWihte! border! border-[#e5e5e5]! dark:text-trustWhite! dark:border-tintBlack dark:bg-lightBlack!"
      >
        <div class="font-bold desktop:text-[24px]">{{ $t("商业发展") }}</div>
        <div class="text-[14px]! mt-5!">
          {{ $t("我们的业务开发团队专注于建立重要的合作伙伴关系") }}
        </div>
      </n-card>
      <n-card
        class="mt-8! w-[47%]! mx-auto! rounded-[20px]! py-1 px-1 bg-baseWihte! border! border-[#e5e5e5]! dark:text-trustWhite! dark:border-tintBlack dark:bg-lightBlack!"
      >
        <div class="font-bold desktop:text-[24px]">{{ $t("技术研发") }}</div>
        <div class="text-[14px]! mt-5!">
          {{ $t("TrustWallet的工程团队") }}
        </div>
      </n-card>
      <div class="mx-auto mt-12">
        <n-button
          @click="handleLink"
          round
          size="large"
          class="bg-trustBlue! font-bold text-trustWhite! hover:bg-trustGreen! dark:bg-trustGreen! dark:text-trustBlack! dark:hover:bg-trustBlue! dark:hover:text-trustWhite!"
        >
          {{ $t("查看开放角色") }}
        </n-button>
      </div>
    </section>
    <section v-if="!isMobile" class="mt-12!">
      <div class="font-bold text-[30px]">{{ $t("我们的员工承诺") }}</div>
      <div class="w-full flex flex-row gap-12 mt-8">
        <div class="flex-1 w-[33%]" v-for="item in liArr" :key="item.id">
          <strong class="default-transition">{{ item.title }}</strong>
          <ul
            class="default-transition ml-3.5! grid list-disc text-trustBlack [transition-property:color] dark:text-trustWhite"
            v-for="iten in item.text"
            :key="iten"
          >
            <li class="default-transition text-lightBlack font-inter dark:text-trustWhite text-[12px]">
              {{ iten }}
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="mt-8!">
      <div class="font-bold text-[30px]">{{ $t("认识受托人") }}</div>
      <div class="px-12 grid desktop:grid-cols-2 gap-6 mt-8">
        <div class="w-full flex flex-col items-center" v-for="item in cardArr2" :key="item.id">
          <img class="w-[60%] rounded-t-[20px] object-cover" :src="item.img" alt="" />
          <div
            class="default-transition w-[60%] px-2.5 py-2.5 rounded-[20px] border bg-[linear-gradient(323deg,#F4F4F7,rgba(244,244,247,0.00)100%)] dark:border-tintBlack dark:bg-[linear-gradient(324deg,rgba(219,220,229,0.20)0%,rgba(219,220,229,0.00)100%)] rounded-tl-none rounded-tr-none"
          >
            <div class="mb-3">
              <div class="font-bold">{{ item.title }}</div>
              <div>{{ item.title1 }}</div>
            </div>
            <div>{{ item.desc }}</div>
            <n-button text class="text-trustBlue!">Read More</n-button>
          </div>
        </div>
      </div>
    </section>
    <section v-if="!isMobile" class="mt-8!">
      <div class="font-bold text-[30px]">{{ $t("评估流程") }}</div>
      <div class="grid desktop:grid-cols-4 gap-6 mt-8">
        <n-card
          v-for="item in cardArr1"
          :key="item.id"
          class="rounded-[20px]! py-1 bg-baseWihte! border! border-[#e5e5e5]! dark:text-trustWhite! dark:border-tintBlack dark:bg-lightBlack!"
        >
          <div class="font-bold text-[30px]">{{ item.title }}</div>
          <div class="mt-2">{{ item.desc }}</div>
        </n-card>
      </div>
    </section>
    <div class="mt-8 flex flex-col justify-center">
      <div class="font-bold w-full text-[30px] mx-auto text-center">{{ $t("常见问题") }}</div>
      <div class="mt-6 border-b border-trustBlack" v-for="item in faqArr" :key="item.id">
        <div class="default-transition font-bold mb-6 cursor-pointer flex flex-row justify-between" @click="toggleFaq(item.id)">
          {{ item.title }}
          <img :class="{ 'arrow-down': item.isShow }" class="default-transition w-5 h-5" src="@/assets/svg/down.svg" alt="" />
        </div>
        <div v-if="item.isShow" class="default-transition mb-6">{{ item.dec }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from "vue";

import { useDevice } from "@/hooks";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const { isMobile } = useDevice();
const cardArr = computed(() => [
  { id: 0, title: t("目的"), desc: t("为未来的自由网路打下基础") },
  { id: 1, title: t("愿景"), desc: t("成为最值得信赖的Web3体验中心") },
  { id: 2, title: t("任务"), desc: t("我们的使命是建立一个顺畅的Web3") },
  { id: 3, title: t("价值"), desc: t("我们以用户为尊我们很谦卑") }
]);

const cardArr1 = computed(() => [
  { id: 0, title: t("与招聘团队会面"), desc: t("我们将与您联系") },
  { id: 1, title: t("与经理会面"), desc: t("在您与招聘经理和团队的面试期间") },
  {
    id: 2,
    title: t("职能重点测试"),
    desc: t("根据您申请的职位")
  },
  { id: 3, title: t("最终回合"), desc: t("恭喜您进入最终回合") }
]);

const cardArr2 = computed(() => [
  {
    id: 0,
    img: require("@/assets/img/Jonathan.avif"),
    title: "Jonathan",
    title1: t("资深客服代表"),
    desc: t("年Jonathan")
  },
  {
    id: 1,
    img: require("@/assets/img/Elvira.avif"),
    title: "Elvira",
    title1: t("成长与品牌行销经理"),
    desc: t("Elvira从NFT")
  }
]);

const liArr = computed(() => [
  {
    id: 0,
    title: t("我们培养成长思维"),
    text: [t("广泛的职涯晋升机会"), t("学习和发展计画"), t("资源丰富的电子学习平台"), t("新的工作挑战和措施")]
  },
  { id: 1, title: t("我们提供有竞争力的薪酬"), text: [t("有竞争力的薪酬"), t("有薪休假"), t("各种员工福利计画")] },
  {
    id: 2,
    title: t("我们培养一个可充分发挥潜力的工作文化"),
    text: [t("远程且灵活的工作安排"), t("包容与多元化的工作环境"), t("完全灵活且合作"), t("没有传统阶级的法币结构")]
  }
]);

const faqStates = ref([
  {
    id: 0,
    title: "我需要当面进行面试吗",
    dec: "我们的所有面试和评估都是以虚拟方式进行",
    isShow: false
  },
  {
    id: 1,
    title: "完成遴选流程需要多长的时间",
    dec: "我们的目标是在短短",
    isShow: false
  },
  {
    id: 2,
    title: "我是否必须先具备Web3的经验",
    dec: "不一定",
    isShow: false
  },
  {
    id: 3,
    title: "我如何知道自己是否适合",
    dec: "对于那些喜欢较常规和标准化工作的人来说",
    isShow: false
  },
  {
    id: 4,
    title: "您提供哪些福利",
    dec: "我们很骄傲能提供具有竞争力的福利",
    isShow: false
  },
  {
    id: 5,
    title: "工作文化为何",
    dec: "我们的工作文化是简单",
    isShow: false
  }
]);

const faqArr = computed(() =>
  faqStates.value.map((item) => ({
    ...item,
    title: t(item.title),
    dec: t(item.dec)
  }))
);

// 切换显示状态
const toggleFaq = (id) => {
  const index = faqStates.value.findIndex((item) => item.id === id);
  if (index !== -1) {
    faqStates.value[index].isShow = !faqStates.value[index].isShow;
  }
};

const handleLink = () => window.open("https://jobs.ashbyhq.com/trust-wallet", "_blank");
</script>

<style lang="scss" scoped></style>
