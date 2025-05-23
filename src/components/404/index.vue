<template>
  <div class="container">
    <svg-icon iconName="404Banner" className="picture"></svg-icon>
    <p class="msg">
      {{ $t("uedSetting.404.title") }}
      <b>{{ $t("uedSetting.404.fpfe") }}</b>
      {{ $t("uedSetting.404.kamu") }}
    </p>
    <div class="button">
      <span class="button-text">{{ $t("uedSetting.404.btnText") }}</span>
    </div>
    <div class="logo">
     <svg-icon iconName="overallLogo" class="overall-logo"></svg-icon>
    </div>
  </div>
</template>

<script setup>
import SvgIcon from '../SvgIcon/index.vue';
</script>

<style lang="less" scoped>
.container {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .picture {
    width: 454px;
    height: 202px;
  }
  .overall-logo {
    width: 80px;
    height: 33px;
  }
  .msg {
    font-family: @font-family-regular;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    color: #4a71d3;
    width: 435px;
  }
  .button {
    width: 289px;
    height: 48px;
    background: #4a71d3;
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &-text {
      font-family: @font-family-regular;
      font-style: normal;
      font-weight: 800;
      font-size: 14px;
      line-height: 18px;
      color: #ffffff;
    }
  }
}

.logo {
  position: absolute;
  bottom: 1rem;
}
@media screen and (max-width: 768px) {
  .container {
    margin: auto 24px;
    .msg {
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      width: 100%;
    }
    .picture {
      width: 290px;
    }
    .button {
      width: 234px;
    }
  }
}
</style>
