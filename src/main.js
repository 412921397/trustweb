import { createApp } from "vue";
import i18n from "@/i18n";

import App from "./App.vue";
import store from "./store";
import router from "./router";

import "@/assets/css/reset.css";
import "@/assets/css/tailwind.css";

const app = createApp(App);

app.use(store);
app.use(i18n);
app.use(router);

app.mount("#app");
