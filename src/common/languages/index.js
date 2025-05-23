import { createI18n } from 'vue-i18n';
import customId from './id';
import customEn from './en';

// 自定义语言处理
const numberFormats = {
  'id-ID': {
    currency: {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    },
  },
  'en-US': {
    currency: {
      style: 'currency',
      currency: 'USD',
    },
  }
}
const i18n = createI18n({
  // 使用 Composition API 模式，则需要将其设置为false
  legacy: false,
  // 全局注入 $t 函数
  globalInjection: true,
  locale: 'id',
  messages: {
    id: customId,
    en: customEn,
  },
  // 币种转换
  numberFormats,
});

function i18nFun(app) {
  // 自定义国际化语言
  app.use(i18n);
}

export { i18nFun, i18n };
