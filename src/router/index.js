import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/home/index.vue";

const routes = [
  {
    path: "/",
    component: HomeView,
    children: [
      {
        path: "/home",
        name: "Home",
        meta: { keepAlive: true },
        component: () => import("@/views/home/index.vue")
      }
    ]
  },
  {
    path: "/download",
    name: "Download",
    component: () => import("@/views/download/index.vue")
  },
  {
    path: "/browser-extension",
    name: "BrowserExtension",
    component: () => import("@/views/browser-extension/index.vue")
  },
  {
    path: "/buy-crypto",
    name: "BuyCrypto",
    component: () => import("@/views/buy-crypto/index.vue")
  },
  {
    path: "/swap",
    name: "Swap",
    component: () => import("@/views/swap/index.vue")
  },
  {
    path: "/staking",
    name: "Staking",
    component: () => import("@/views/staking/index.vue")
  },
  {
    path: "/nft",
    name: "NFT",
    component: () => import("@/views/nft/index.vue")
  },
  {
    path: "/security",
    name: "Security",
    component: () => import("@/views/security/index.vue")
  },
  {
    path: "/swift",
    name: "Swift",
    component: () => import("@/views/swift/index.vue")
  },
  {
    path: "/about-us",
    name: "AboutUs",
    component: () => import("@/views/about-us/index.vue")
  },
  {
    path: "/careers",
    name: "Careers",
    component: () => import("@/views/careers/index.vue")
  },
  {
    path: "/press",
    name: "Press",
    component: () => import("@/views/press/index.vue")
  },
  {
    path: "/terms-of-service",
    name: "TermsOfService",
    component: () => import("@/views/terms-of-service/index.vue")
  },
  {
    path: "/privacy-notice",
    name: "PrivacyNotice",
    component: () => import("@/views/privacy-notice/index.vue")
  },
  {
    path: "/cookie-notice",
    name: "CookieNotice",
    component: () => import("@/views/cookie-notice/index.vue")
  },
  {
    path: "/blog",
    name: "Blog",
    component: () => import("@/views/blog/index.vue")
  },
  {
    path: "/price",
    name: "MarketPrice",
    component: () => import("@/views/market/index.vue")
  },
  {
    path: "/price/:name",
    name: "MarketPriceDetails",
    component: () => import("@/views/market-details/index.vue")
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: () => import("@/views/not-found/index.vue")
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 })
});

export default router;
