<template>
  <div class="template-box">
    <desty-header :lang="$store.state.language" navKey="destypage" :showSubHeader="true" @handleNav="handleNav" @handleLang="handleLang" @handleAction="handleAction">slot</desty-header>
    <div class="content">content box</div>
    <desty-footer :lang="$store.state.language" navKey="destypage"  @handleNav="handleNav" @handleLang="handleLang" @handleSendEmail="handleSendEmail"></desty-footer>
  </div>
</template>

<script>
import { useStore } from 'vuex';
export default {
  name: 'Template',
  setup () {
    const store = useStore();
    function handleLang(key) {
      store.commit('setLanguage', key)
    }

    function handleNav(key) {
      console.log('handleNav', key)
    }
    function handleAction(key) {
      console.log('handleAction', key)
    }

    function handleSendEmail(val) {
      console.log('handleSendEmail', val)
    }


    return { handleLang, handleNav, handleAction, handleSendEmail };
  }
}
</script>

<style lang="less" scoped>
.template-box {
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
  }
}
</style>