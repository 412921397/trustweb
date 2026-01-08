import { defineStore } from "pinia";

import { search } from "@/service/api";

const useUserStore = defineStore("user", {
  persist: true,
  state: () => ({
    token: "",
    loading: false,
    searchData: []
  }),
  actions: {
    setToken(token) {
      this.token = token;
    },
    logout() {
      this.token = "";
    },
    setSearchData(data) {
      this.searchData = data;
    },
    async searchDataAction(paload) {
      try {
        this.loading = true;
        const res = await search({ q: paload });
        this.searchData = res?.results ?? [];
      } catch (e) {
        console.log(e);
        this.searchData = [];
      } finally {
        this.loading = false;
      }
    }
  },
  getters: {
    token: (state) => state.token
  }
});

export default useUserStore;
