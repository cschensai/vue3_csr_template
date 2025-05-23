<template>
  <div class="template-box">
    <div class="content">content box</div>
  </div>
</template>

<script>
import { useStoreIndex } from '@/store/index';


export default {
  name: 'Template',
  setup () {
    const store = useStoreIndex();
    function handleLang(key) {
      store.setLanguage(key);
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