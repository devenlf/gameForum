<template >
        <div class="problem">
             <h4>{{quesionIndex+1}}. 你好拿到哪里的六点就爱上了多年啦</h4>
               <el-radio-group v-model="radio" @input="select()">
                   <template v-for="(data,index) in radioData.options">
              <el-radio :key="index" :label="index">{{data.optionContent}}</el-radio>
                   </template>
           </el-radio-group>
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
      radio: undefined
    };
  },
  created: function() {},
  methods: {
    select(num) {
      let data = {
        num: this.quesionIndex,
        currentSelect: this.radio
      };
      this.$emit("changeRadioAnswer", data);
    }
  }
};
</script>