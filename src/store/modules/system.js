import { defineStore } from "pinia";

const useSystemStore = defineStore("system", {
  persist: true, // state 持久化
  state: () => ({
    theme: localStorage.getItem("theme") || "light",
    lang: localStorage.getItem("lang") || "zh_CN"
  }),
  actions: {
    setTheme(val) {
      this.theme = val;
      localStorage.setItem("theme", val);
    },
    setLangAction(val) {
      this.lang = val;
      localStorage.setItem("lang", val);
    }
  }
});

export default useSystemStore;
