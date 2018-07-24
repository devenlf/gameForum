
<template>
  <div class="problem">
    <h4>{{quesionIndex+1}}.  12313131313</h4>
      <el-checkbox-group v-model="checkList" @input="select">
          <template v-for="(data,index) in radioData.options">
              <el-checkbox :key="index" :label="index">{{data.optionContent}}</el-checkbox>
          </template>
      </el-checkbox-group>
      </div>
    </template>

<script>
export default {
  props: {
    radioData: {},
    quesionIndex: Number
  },
  data() {
    return {
      checkList: []
    };
  },
  created: function() {
  },
  methods: {
    select() {
      let data = {
        num: this.quesionIndex,
        selectArray: this.checkList
      };
      this.$emit("changeCheckboxAnswer", data);
    }
  }
};
</script>