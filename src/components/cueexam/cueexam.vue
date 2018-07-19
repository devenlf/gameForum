<template>
   <div id="cueexam" class="v-cueexam">
       <div class="cue-header">温馨提示</div>
       <div class="cue-body">您已经没有考试次数了</div>
       <div class="cue-footer">
            <button type="button" class="btn sure-btn">确定</button>
            <button type="button" class="btn close-btn">取消</button>
       </div>
    </div> 
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="scss">
.cue-body {
  line-height: 50px;
  text-indent: 20px;
  font-size: 16px;
}
.cue-footer {
  padding-left: 20px;
  .sure-btn {
    background: #45526e;
  }
  .close-btn {
    background: #607d8b;
  }
}
#cueexam {
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  width: 420px;
  height: 160px;
  border-radius: 6px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  z-index: 99px;
}
.cue-header {
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


