<template>
  <div class="form-wrapper">
    <el-button>123</el-button>
    <el-input v-model="value"/>
  </div>
</template>
<script>
import { MessageBox } from 'element-ui';

export default {
  name: 'TestForm',
  data() {
    return {
      value: ''
    };
  },
  mounted() {
    MessageBox('123');
    console.log('我是执行了');
  },

  computed: {
  },

  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    }
  }
};
</script>
