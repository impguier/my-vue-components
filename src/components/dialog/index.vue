<template>
  <transition name="dialog-fade"
    @before-enter='beforeOpen'
    @enter='opened'
    @leave='beforeClose'
    @after-leave='closed'
  >
    <div class="eb-dialog__wrapper" @click.self="close" v-show="visible">
      <div class="eb-dialog" :style="{ width, 'margin-top': top }">
        <div class="eb-dialog__header">
          <slot name="title">
            <span class="eb-dialog__title">{{ title }}</span>
          </slot>

          <button
            type="button"
            aria-label="Close"
            class="eb-dialog__headerbtn"
            @click="close"
          >
            <i class="eb-dialog__close el-icon el-icon-close"></i>
          </button>
        </div>
        <div class="eb-dialog__body">
          <slot></slot>
        </div>
        <div class="eb-dialog__footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "eb-dialog",
  props: {
    title: {
      type: String,
      default: "提示",
    },
    width: {
      type: String,
      default: "60%",
    },
    top: {
      type: String,
      default: "20vh",
    },
    visible: {
      type: Boolean,
      default: false,
    },
    // onopen:{
    //   type: Function,
    //   default: ()=>{}
    // },
    // onopened:{
    //   type: Function,
    //   default: ()=>{}
    // },
    // onclose:{
    //   type: Function,
    //   default: ()=>{}
    // },
    // onclosed:{
    //   type: Function,
    //   default: ()=>{}
    // }
  },
  methods: {
    close() {
      this.$emit("update:visible", false);
    },
    beforeOpen() {
      this.$emit('beforeOpen')
    },
    opened() {
      this.$emit('opened')
    },
    beforeClose() {
      this.$emit('beforeClose')
    },
    closed() {
      this.$emit('closed')
    }
  },
};
</script>

<style lang="less" scoped>
@import './index.less';
// .dialog-fade-enter-active{}
// .dialog-fade-leave-active{}

</style>