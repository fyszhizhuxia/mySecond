import { createI18n } from "vue-i18n";
import zh from "./locale/zh-CN.json";
import en from "./locale/en-US.json";
const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  global: true,
  locale: sessionStorage.getItem("lang") || "zh",
  silentFallbackWarn: true,
  silentTranslationWarn: true,
  missingWarn: false,
  silentFallbackWarn: true,
  messages: {
    zh,
    en,
  },
});

export default i18n;
