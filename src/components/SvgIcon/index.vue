<template>
  <svg :class="svgClassName" aria-hidden="true">
    <use :xlink:href="svgIconName" />
  </svg>
</template>

<script>
import { defineComponent, computed } from 'vue';
export default defineComponent({
  name: 'SvgIcon',
  props: {
    iconName: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    return {
      svgIconName: computed(() => `#icon-${props.iconName}`),
      svgClassName: computed(() => {
        if (props.className) return `svg-icon ${props.className}`;
        return 'svg-icon';
      }),
    }
  }
})
</script>

<style lang="less" scoped>
  .svg-icon {
    width: 1em;
    height: 1em;
    position: relative;
    fill: currentColor;
    vertical-align: -2px;
  }
</style>