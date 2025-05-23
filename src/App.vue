<template>
  <!-- 必须声明 -->
  <metainfo>
    <!-- <component :is="'script'" type="application/ld+json">
      {
      "@context": "https://schema.org/",
      "@type": "WebPage",
      "name": "fpfe omni | Omnichannel untuk Atur Semua Marketplace Kamu",
      "url": "https://omni.fpfe.app/commerce/omniregisterlp",
      "description": "Mudah atur semua marketplace lewat satu dashboard dengan Desty Omni. Atur stok produk, balas chat,
      proses pesanan makin cepat di satu tempat.",
      "image": "",
      "identifier": "fpfe omni | Omnichannel untuk Atur Semua Marketplace Kamu",
      "alternateName": "Desty Omni",
      "significantLink": "https://omni.fpfe.app/commerce/omniregisterlp",
      "dateCreated": "",
      "isPartOf": "https://fpfe.omni",
      "thumbnailUrl": "" }
    </component>
    <component :is="'link'" rel="canonical" href="https://omni.fpfe.app" />
    <component :is="'link'" rel="alternate" href="https://omni.fpfe.app/commerce/omniregisterlp" hreflang="id-id" />
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="https://omni.fpfe.app/commerce/omniregisterlp">
    <meta property="twitter:title" content="fpfe omni | Omnichannel untuk Atur Semua Marketplace Kamu">
    <meta property="twitter:description"
      content="Mudah atur semua marketplace lewat satu dashboard dengan Desty Omni. Atur stok produk, balas chat, proses pesanan makin cepat di satu tempat.">
    <meta property="twitter:image" content="https://www.fpfe.app/favicon.ico?v=2">
    <meta name="twitter:domain" content="Desty Omni">
    <meta name="Page title" content="fpfe omni | Omnichannel untuk Atur Semua Marketplace Kamu">

    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="viewport"
      content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"> -->
  </metainfo>
  <el-config-provider :locale="store.language === 'id' ? elementPlusId : elementPlusEn">
    <div>
      <router-view></router-view>
    </div>
  </el-config-provider>
</template>

<script setup>
import { useMeta } from 'vue-meta';
import { ElConfigProvider } from 'element-plus';
import elementPlusId from 'element-plus/es/locale/lang/id';
import elementPlusEn from 'element-plus/es/locale/lang/en';
import { onBeforeMount, onMounted } from "vue";
import flexible from './utils/flexible';
import { useStoreIndex } from '@/store/index';

const store = useStoreIndex();
// TODO: meta 示例信息
useMeta(
  {
    title: 'Desty Page',
    // description: 'The Description',
    og: {
      title: 'Og Title',
      description: 'Bla bla',
      image: [
        'https://picsum.photos/600/400/?image=80',
        'https://picsum.photos/600/400/?image=82'
      ]
    },
    twitter: {
      title: 'Twitter Title',
    },
  },
)

onBeforeMount(() => {
  if (document.body.clientWidth < 768) {
    store.setIsMobileMode(true);
  }
  window.onresize = () => {
    if (document.body.clientWidth < 768) {
      store.setIsMobileMode(true);
    } else {
      store.setIsMobileMode(false);
    }
  };
});

onMounted(() => {
  // 设备自适配
  flexible(window, document);
});
</script>

<style lang="less">
body {
  #app {}
}
</style>
