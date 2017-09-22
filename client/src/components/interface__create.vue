<template>
  <Modal
    v-model="modelVisible"
    width="1000"
    title=""
    @on-cancel="onCloseModel"
  >
    <p>对话框内容</p>
    <p>对话框内容</p>
    <p>对话框内容</p>
  </Modal>
</template>

<script>
  export default {
    data () {
      return {
        modelVisible: this.showModel
      };
    },
    props: {
      showModel: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      showModel (val) {
        this.modelVisible = val;
      }
    },
    methods: {
      onCloseModel () {
        this.$nextTick(() => {
          this.modelVisible = false;
          this.$emit('closeInterface');
        });
      }
    }
  };
</script>

<style>
  
</style>