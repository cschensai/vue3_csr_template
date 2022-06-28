import { createStore } from "vuex";
import { i18n } from "@/common/languages";

const store = createStore({
  state: {
    isMobile: false,
    language: "id",
  },
  mutations: {
    setIsMobileMode(state, isMobileMode) {
      state.isMobile = isMobileMode;
    },
    setLanguage(state, lang) {
      state.language = lang;
      i18n.global.locale.value = lang;
    },
  },
  actions: {},
  modules: {},
});
export default store;
