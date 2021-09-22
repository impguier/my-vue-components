<template>
  <transition>
    <div
      role='alert'
      class="eb-alert"
      :class="[
        `eb-alert-${type}`,
        {
          'eb-alert-center': position == 'center',
          'eb-alert-bottom': position == 'bottom',
        },
      ]"
      v-show="visible"
    >
      <i v-if="showIcon" :class="[`eb-alert-icon-${type}`]"></i>
      <div
        class="eb-alert-content"
        :class="[{ 'eb-alert-is-center': isCenter }]"
      >        
        <span class="eb-alert-title" v-text="title"></span>
        <p class="eb-alert-msg" v-text="alertMsg"></p>
        <p v-if="$slots.default"><slot></slot></p>
        <i v-if='closeble' class="eb-alert-icon" :class="['eb-alert-icon-close']"></i>
      </div>
    </div>
  </transition>
</template>

<script>
import ebButton from "../button";
export default {
  name: "eb-alert",
  components: {
    ebButton,
  },
  props: {
    // alert 类型
    type: {
      type: String,
      default: "info",
    },
    // alert title
    title: {
      type: String,
      default: "Title",
    },
    // alert content
    alertMsg: {
      type: String,
      default: "Message",
    },
    // alert 是否显示icon
    showIcon: {
      type: Boolean,
      default: false,
    },
    // alert 可关闭
    closeble: {
      type: Boolean,
      default: true,
    },
    visible: {
      type: Boolean,
      default: false,
    },
		isCenter: {
      type: Boolean,
      default: false,
    },
    position: {
      type: String,
      default: "top",
    },
  },
  data() {
		return {}
	},
  methods: {
    close() {
      this.$emit("close:update", false);
    },
  },
};
</script>

<style lang="less">
@import './index.less';
</style>