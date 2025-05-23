import { defineStore } from 'pinia';
import { i18n } from "@/common/languages";

export const useStoreIndex = defineStore('storeIndex', {
  state: () => ({
    isMobile: false,
    language: "id",
  }),
  getters: {
  },
  actions: {
    setIsMobileMode(isMobileMode) {
      this.isMobile = isMobileMode;
    },
    setLanguage(lang) {
      this.language = lang;
      i18n.global.locale.value = lang;
    },
  },
})
