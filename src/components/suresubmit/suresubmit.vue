<template>
   <div id="suresubmit" class="v-suresubmit">
       <div class="suresubmit-header">温馨提示</div>
       <div class="suresubmit-body">总共[{{completeData.len}}]题,您已答[{{completeData.len}}}]题,剩余[0]题未答,提交试卷后,成绩将会生效,请确认是否提交试卷!</div>
       <div class="suresubmit-footer">
            <button type="button" @click="submitActive" class="btn sure-btn">确定提交</button>
            <button type="button" @click="closeActive" class="btn close-btn">取消</button>
       </div>
    </div> 
</template>

<script>
export default {
  props: {
    completeData: {}
  },
  data() {
    return {};
  },
  methods:{
    submitActive(){
      this.$emit('submit')
      this.$emit('closebox')
    },
    closeActive(){
      this.$emit('closebox')
    }
  }
};
</script>

<style lang="scss">
#suresubmit{
  background: white;
}
.suresubmit-body {
  padding: 10px 20px;
  font-size: 16px;
}
.suresubmit-footer {
  padding-left: 20px;
  .sure-btn {
    background: #45526e;
  }
  .close-btn {
    background: #607d8b;
  }
}
#suresubmit {
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  width: 420px;
  border-radius: 6px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  z-index: 99px;
  padding-bottom: 10px;
}
.suresubmit-header {
  width: 100%;
  height: 50px;
  border-radius: 6px 6px 0px 0px;
  background: #b63061;
  color: #fff;
  font-size: 16px;
  font-family: "微软雅黑";
  line-height: 50px;
  text-indent: 10px;
}
</style>


