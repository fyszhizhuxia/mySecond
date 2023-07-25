import { defineStore } from "pinia";
import i18n from "@/lang/index.js";
const local = i18n.global.locale;
export const userStore = defineStore("user", {
  state: () => {
    return {
      lang: local,
      accountInfo: { accountType: 0 },
      langList: [
        { label: "English", value: "en" },
        { label: "简体中文", value: "zh" },
      ],
    };
  },
  getters: {
    // 用户角色
    roleCode() {
      const roleMap = { 0: "A", 1: "B", 2: "C", 3: "D" };
      return roleMap[this.accountInfo.accountType];
    },
  },
  actions: {
    setLang(data) {
      this.lang = data;
    },
  },
  // 开启数据缓存
  persist: {
    enabled: true,
    strategies: [{ key: "user", storage: localStorage }],
  },
});
