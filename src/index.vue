<template>
  <div>
    {{ msg }}
    <ebButton></ebButton>
    <eb-button isCircle @click="open">打开</eb-button>
    <eb-dialog title="温馨提示" width="50%" top="150px" :visible.sync="visible">
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
      <template v-slot:footer>
        <eb-button isPlain round type="primary" @click="close">确定</eb-button>
        <eb-button isPlain round>取消</eb-button>
      </template>
    </eb-dialog>
    <el-alert :visible=visible type='success'></el-alert>
  </div>
</template>

<script>
import Button from "src/components/button";
import Dialog from "src/components/dialog";
import Alert from "src/components/alert"
export default {
  components: {
    ebButton: Button,
    ebDialog: Dialog,
    elAlert: Alert
  },
  data() {
    return {
      msg: "123",
      visible: false,
    };
  },
  methods: {
    open() {
      this.visible = true;
    },
    close() {
      this.visible = false;
    },
  },
};
</script>