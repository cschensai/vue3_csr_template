<script setup>
import { useMeta } from 'vue-meta';
import { ElConfigProvider } from 'element-plus';
import elementPlusId from 'element-plus/es/locale/lang/id';
import elementPlusEn from 'element-plus/es/locale/lang/en';
import { onBeforeMount, onMounted } from "vue";
import { useStore } from "vuex";
import flexible from './utils/flexible';
const store = useStore();

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
    store.commit("setIsMobileMode", true);
  }
  window.onresize = () => {
    if (document.body.clientWidth < 768) {
      store.commit("setIsMobileMode", true);
    } else {
      store.commit("setIsMobileMode", false);
    }
  };
});

onMounted(() => {
  // 设备自适配
  flexible(window, document);
});
</script>

<template>
  <!-- 必须声明 -->
  <metainfo />
  <el-config-provider :locale="$store.state.language === 'id' ? elementPlusId : elementPlusEn">
    <div>
      <router-view></router-view>
    </div>
  </el-config-provider>
</template>

<style lang="less">
body {
  #app {}
}
</style>
