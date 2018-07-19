<template>
   <div id="cueunanswer" class="v-cueunanswer">
       <div class="cueunanswer-header">温馨提示</div>
       <div class="cueunanswer-body">
           <h4>总共[20]题,您已答[0]题,剩余[20]题未答,提交试卷后,成绩将会生效,请确认是否提交试卷!</h4>
           <p>未完成</p>
           <p>未完成</p>
           <p>未完成</p>
           <p>未完成</p>
           <p>未完成</p>
           <p>未完成</p>
           <p>未完成</p>
           <p>未完成</p>
           <p>未完成</p>
           <p>未完成</p>
           <p>未完成</p>
       </div>
       <div class="cueunanswer-footer">
            <button type="button" class="btn sure-btn">继续答题</button>
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
.cueunanswer-body {
  font-size: 16px;
  padding: 0px 16px;
  h4 {
  }
  p {
    line-height: 14px;
  }
}
.cueunanswer-footer {
  text-align: center;
  .sure-btn {
    background: #45526e;
  }
}
#cueunanswer {
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
.cueunanswer-header {
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


