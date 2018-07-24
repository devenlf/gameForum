<template>
<div class="exam-paper">
    <div class="page-paper" style="">
        <div class="paper-header"><h4>《上海护理》2018年第三期护理研究设计</h4></div>
        <div class="paper-line">
             <div class="paper-body">
              <template v-for="(data,index) in examPaper">
                   <v-radio v-if="data.type===2" @changeRadioAnswer="radioFunction" :key="index" v-bind:radio-data="data" v-bind:quesion-index="index"></v-radio>
                   <v-checkList v-if="data.type===3" @changeCheckboxAnswer="checkboxFunction" :key="index" v-bind:radio-data="data" v-bind:quesion-index="index"></v-checkList>
              </template>
              <v-cueexam v-if="false"></v-cueexam>
              <v-cueunanswer v-if="false"></v-cueunanswer>
              <v-suresubmit v-if="false"></v-suresubmit>
        </div>
        </div>
        <div class="paper-footer">
            <button type="button" @click="submitAnswer" class="btn submit-paper">提交答案</button>
        </div>
    </div>
</div>
</template>

<script>
import cueexam from "@/components/cueexam/cueexam";
import cueunanswer from "@/components/cueunanswer/cueunanswer";
import suresubmit from "@/components/suresubmit/suresubmit";
import { createExamPaper } from "@/api/exam";
import { submitExamPaper } from "@/api/exam";
import { getCookie } from "@/utils/cookieFunction";
import radio from "@/components/radio/radio";
import checkList from "@/components/checkList/checkList";

export default {
  data() {
    return {
      resAllData:{},
      examPaper: []
    };
  },
  created: function() {
    this.getPaperInfo(this.$route.query.num);
  },
  methods: {
    getPaperInfo: function(index) {
      return new Promise((resolve, reject) => {
        createExamPaper(index, getCookie())
          .then(response => {
            this.resAllData = response.data;
            this.examPaper = this.resAllData.examQuestions;
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    radioFunction(data) {
      this.examPaper[data.num].options.forEach(element => {
        if (element.choose) {
          element.choose = false;
        }
      });
      this.examPaper[data.num].options[data.currentSelect].choose = true;
    },
    checkboxFunction(data) {
      this.examPaper[data.num].options.forEach((element,index) => {
        if(data.selectArray.indexOf(index)!==-1){
          this.examPaper[data.num].options[index].choose = true;
        }
      });
    },
    submitAnswer() {
      return new Promise((resolve, reject) => {
        submitExamPaper(this.resAllData, getCookie())
          .then(response => {
            
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  },
  components: {
    "v-cueexam": cueexam,
    "v-cueunanswer": cueunanswer,
    "v-suresubmit": suresubmit,
    "v-radio": radio,
    "v-checkList": checkList
  }
};
</script>




<style lang="scss">
.submit-paper {
  margin: 10px auto;
  background: #607d8b;
}
.btn {
  padding: 9px 26px;
}
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
  overflow: hidden;
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
  text-align: center;
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
.el-radio-group {
  margin-left: 20px;
  .el-radio__label {
    font-size: 14px;
    padding-left: 20px;
    font-weight: 500;
    color: #333;
  }
}
.el-checkbox + .el-checkbox {
  margin-left: 0px;
}
.el-checkbox {
  display: block;
  left: 0px;
  line-height: 16px;
  margin-top: 2px;
}
.el-checkbox-group {
  margin-left: 20px;
  .el-checkbox__label {
    font-size: 16px;
    padding-left: 20px;
  }
}
.problem {
  h4 {
    font-size: 15px;
    font-weight: bold;
  }
  ul {
    list-style: none;
    float: left;
    font-size: 14px;
  }
}
</style>

