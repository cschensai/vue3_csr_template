import { createApp, provide } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import App from './App.vue';
// 处理svg
import 'virtual:svg-icons-register';
// 国际化语言处理
import { i18nFun } from '@/common/languages/index';
// 全局less变量
import '@/common/less/font.less'
import '@/common/less/common.less'
import '@/common/less/element-Reset.less'
// router
import router from './router';
// store
import { createPinia } from 'pinia';

const app = createApp(App);
// 注册全局变量
app.use(router);
app.use(createPinia());
app.use(VueAxios, axios);
app.use(i18nFun);
import { createMetaManager, defaultConfig, resolveOption } from 'vue-meta'

const decisionMaker5000000 = resolveOption((prevValue, context) => {
  const { uid = 0 } = context.vm || {}
  if (!prevValue || prevValue < uid) {
    return uid
  }
})
const metaManager = createMetaManager({
  ...defaultConfig,
  // esi: {
  //   group: true,
  //   namespaced: true,
  //   attributes: ['src', 'test', 'text']
  // },
  meta: { tag: 'meta', nameless: true }
})
provide('metaManager', metaManager);
app.use(metaManager);


app.mount('#app');
