<template>
  <li>
    <div class="collapse-item">
      <h3 class="collapse-item-title" v-text="title" @click='handleHeaderClick'></h3>
      <div v-if="$slot.default" v-show="visible">
        <slot></slot>
      </div>
      <p
        v-else
        v-show="visible"
        class="collapse-item-content"
        v-text="content"
      ></p>
    </div>
  </li>
</template>

<script>
export default {
  name: "ebCollapseItme",
  inject: ["collapse"],
  props: {
    title: {
      type: String,
      default: "",
    },
    content: {
      type: String,
      default: "",
    },
    name: {
      type: String,
      defatul: "",
    },
  },
  data() {
    return {
      visible: false,
    };
  },
  computed: {
    visible: () => {
      return this.collapse.filter((item) => {
        this.name == item;
      });
    },
  },
  methods: {
    toggleItem() {
      this.visible = !visible;
    },
    handleHeaderClick () {
        this.$emit('elCollapse', handleItemClick, this)
    }
  },
};
</script>

<style lang="less">
.collapse-item {
  .collapse-item-title {
  }
}
</style>