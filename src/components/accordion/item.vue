<template>
  <li>
    <div class="collapse-item">
      <div class="collapse-item-header"  @click='handleHeaderClick'>
        <h3 class="collapse-item-title" v-text="title"></h3>
        <eb-icon class='collapse-icon' :class="[{'collapse-active': visible}]" icon="arrow-right"></eb-icon>
      </div>
        <transition name='collapse-fade'>
          <div class="collapse-item-content"  v-show="visible" @click='handleHeaderClick'>
              <div v-if="$slots.default">
                <slot></slot>
              </div>
              <p
                v-else          
                class="collapse-item-content"
                v-text="content"
              ></p>
          </div>              
        </transition>
    </div>
  </li>
</template>

<script>
import emitter from '../../mixin/dispatch'
import { generateId } from '../../utils/utils'
import ebIcon from 'src/components/icon'
import ebCollapseItemTransition from 'src/components/accordion/transition'
export default {
  components:{
    ebIcon,
    ebCollapseItemTransition
  },
  name: "ebCollapseItem",
  componentName: 'ebCollapseItem',
  inject: ["collapse"],
  mixins: [emitter],
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
      type: [String, Number],
      default () {        
        return this._uid
      }
    }
  },
  data() {
    return {
      id: generateId()      
    }
  },
  created () {
    console.log(this.collapse.activeNames);
  },
  computed: {
    visible () {
      // debugger
      return this.collapse.activeNames.indexOf(this.name) > -1
    },
  },
  methods: {
    toggleItem() {
      this.visible = !visible;
    },
    handleHeaderClick () {
        this.dispatch('ebCollapse', 'item-click', this)
    }
  },
};
</script>

<style lang="less">
@import './item.less';
</style>