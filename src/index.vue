<template>
  <div class="wrapper">
    <eb-alert :visible.sync="alert_visible"></eb-alert>
    <eb-alert
      :visible.sync="alert_visible"
      type="error"
      showIcon
      isCenter
    ></eb-alert>
    <eb-alert
      :visible.sync="alert_visible"
      type="success"
      showIcon
      isCenter
    ></eb-alert>
    <eb-alert
      :visible.sync="alert_visible"
      type="info"
      showIcon
      isCenter
    ></eb-alert>
    <eb-alert
      :visible.sync="alert_visible"
      type="warning"
      showIcon
      isCenter
    ></eb-alert>

    <eb-alert
      :visible.sync="alert_visible"
      type="success"
      title="This is alert"
      alert-msg="We will be happy forever"
    ></eb-alert>
    <eb-alert
      :visible.sync="alert_visible"
      type="warning"
      showIcon
      title="This is alert"
      alert-msg="We will be happy forever"
    ></eb-alert>
    <eb-placeholder></eb-placeholder>
    <ebButton round>圆角</ebButton>
    <ebButton type="success">Success</ebButton>
    <ebButton type="warning">warning</ebButton>
    <ebButton type="primary">primary</ebButton>
    <ebButton icon="info">图标</ebButton>
    <ebButton isPlain>朴素</ebButton>
    <eb-button isCircle icon="search"></eb-button>
    <eb-button isCircle icon="check"></eb-button>
    <eb-button isCircle icon="close"></eb-button>
    <eb-placeholder></eb-placeholder>

    <eb-button @click="open('dialog')">打开Dialog</eb-button>

    <eb-button @click="open('alert')">打开Alert</eb-button>
    <eb-button @click="close('alert')">关闭Alert</eb-button>
    <eb-placeholder></eb-placeholder>
    <eb-dialog
      title="温馨提示"
      width="50%"
      top="150px"
      :visible.sync="dialog_visible"
      @beforeOpen='beforeOpen'
      @opened='opened'
      @beforeClose='beforeClose'
      @closed='closed'
    >
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <template v-slot:footer>
        <eb-button
          isPlain
          round
          type="primary"
          icon="apple"
          @click="close('dialog')"
          >确定</eb-button
        >
        <eb-button isPlain round icon="close">取消</eb-button>
      </template>
    </eb-dialog>
    
    <eb-accordion v-model='accordion' accordion>
      <eb-accordion-item title='h1' name='1'>
          与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
          在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
      </eb-accordion-item>
      <eb-accordion-item title='h2' name='2'>
          与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
          在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
      </eb-accordion-item>
      <eb-accordion-item title='h3' name='3'>
          与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
          在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
      </eb-accordion-item>
      <eb-accordion-item title='h4' name='4'>
          与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；
          在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。
      </eb-accordion-item>
    </eb-accordion>
  </div>
</template>
<style lang="less">
  
</style>
<script>
import Button from "src/components/button";
import Dialog from "src/components/dialog";
import Alert from "src/components/alert";
import Placeholder from "src/components/placeholder";
import Accordion from "src/components/accordion";
import AccordionItem from "src/components/accordion/item.vue";
export default {
  components: {
    ebButton: Button,
    ebDialog: Dialog,
    ebAlert: Alert,
    ebPlaceholder: Placeholder,
    ebAccordion:Accordion,
    ebAccordionItem:AccordionItem
  },
  data() {
    return {
      msg: "123",
      dialog_visible: false,
      alert_visible: true,
      accordion:'1'
    };
  },
  methods: {
    open(type) {
      this[`${type}_visible`] = true;
    },
    close(type) {
      this[`${type}_visible`] = false;
    },
    beforeOpen () {
      console.log("beforeOpen")
    },
    beforeClose () {
      console.log("beforeClose")
    },
    opened () {
      console.log("opened")
    },
    closed () {
      console.log("closed")
    }
  },
};
</script>