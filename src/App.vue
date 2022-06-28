<script setup>
import { ElConfigProvider } from 'element-plus';
import elementPlusId from 'element-plus/es/locale/lang/id';
import elementPlusEn from 'element-plus/es/locale/lang/en';
import { onMounted } from "vue";
import { useStore } from "vuex";
const store = useStore();
onMounted(() => {
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
</script>

<template>
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
