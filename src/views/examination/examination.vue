<template>
<div class="exam-paper">
    <div class="page-paper" style="">
        <div class="paper-header"><h4>《上海护理》2018年第三期护理研究设计</h4></div>
        <div class="paper-line"></div>
        <div class="paper-body">
              <div class="problem">
                  <h4>1.你好拿到哪里的六点就爱上了多年啦</h4>
                    <ul>
                        <li>A</li>
                        <li>B</li>
                        <li>C</li>
                        <li>D</li>
                    </ul>
                    <el-radio-group v-model="radio2">
                    <el-radio :label="0">备选项</el-radio>
                    <el-radio :label="1">备选项</el-radio>
                    <el-radio :label="2">备选项</el-radio>
                    <el-radio :label="3">备选项</el-radio>
                </el-radio-group>
              </div>

        </div>
        <div class="paper-footer">
            adsadad
        </div>
    </div>
</div>
</template>

<style lang="scss">
.exam-paper {
  height: 100%;
}
.page-paper {
  width: 80%;
  height: 101.5%;
  min-width: 820px;
  max-width: 1100px;
  margin: auto;
  overflow: hidden;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
}
.paper-header {
  width: 72%;
  min-width: 800px;
  max-width: 1080px;
  transform: translate(-50%, 0);
  left: 50%;
  top: 2px;
  height: 80px;
  position: fixed;
  background: #9b2c54;
  z-index: 10;
  h4 {
    font-size: 18px;
    text-align: center;
    padding-top: 4px;
    color: #fff;
  }
}
.paper-line {
  width: 72%;
  min-width: 800px;
  max-width: 1080px;
  height: 100%;
  transform: translate(-50%, 0);
  left: 50%;
  border-right: 1px solid rgba($color: #999, $alpha: 0.3);
  border-left: 1px solid rgba($color: #999, $alpha: 0.3);
  top: 2px;
  position: fixed;
}
.paper-body {
  width: 102%;
  padding-top: 80px;
  overflow: scroll;
  height: 100%;
  padding-left: 20px;
}

.paper-footer {
  z-index: 10;
  width: 72%;
  min-width: 800px;
  max-width: 1080px;
  transform: translate(-50%, 0);
  bottom: 2px;
  left: 50%;
  height: 80px;
  position: fixed;
  background: #9b2c54;
}
.el-radio + .el-radio {
  margin-left: 0px;
}
.el-radio {
  display: block;
  left: 0px;
  line-height: 16px;
  margin-top: 2px;
}
.el-radio-group{
    margin-left: 20px;
    .el-radio__label{
        font-size: 16px;
        padding-left: 20px;
    }
}
.problem{
    ul{
        list-style: none;
        float: left;
        font-size: 16px;
    }
}
</style>

<script>
export default {
  data() {
    return {
      radio2: 1
    };
  }
};
</script>