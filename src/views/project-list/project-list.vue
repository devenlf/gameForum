<template>
<div class="project-list">
    <div class="list-body">
        <div class="project">
            <div class="box-header">
                学分考试
            </div>
        <table class="allData" border="0">
        <thead>
        <tr class="project-title">
        <th width="190px" >对应期刊</th>
        <th width="190px" >考试周期</th>
        <th width="190px">考试指南</th>
        <th width="90px">操作</th>
        </tr>
        </thead>
        <tbody>
        <template v-for="(data) in currentShowData">
        <tr :key="data.id">
        <td>{{data.bookname}}</td>
        <td>{{data.beginTime}}-{{data.endTime}}</td>
        <td class="guide" data-toggle="modal" data-target="#myModal2"  @click="showPDF(data.examGuide)">在线阅读</td>
        <td class="testing"  data-target="#myModal" @click="showExamInfo(data.examId,data.examGuide)">测试</td>
        </tr>
        </template>
        </tbody>
        </table>
        <div class="buttom-group">
            <button type="button" @click="showDataNum(5)" class="btn num-btn">5</button>
            <button type="button" @click="showDataNum(25)" class="btn num-btn">25</button>
            <button type="button" @click="showDataNum(50)" class="btn num-btn">50</button>
            <button type="button" @click="showDataNum(100)" class="btn num-btn">100</button>
        </div>
        </div>
    </div>
     <!-- 模态框 -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog show-test" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">开始做题</h4>
      </div>
      <div class="modal-body">
          <div class="user-exam-info">
              <div class="user-title">
                  <span>{{name}},你好!</span>
              </div>
              <div class="exam-info">
                  <div class="examname">
                        <span>考试名称:</span>{{currentExam.name}}
                  </div>
                  <div class="examnum">
                        <span>总题目数量:</span>{{currentExam.num}}<span>总分：</span>{{currentExam.scale}}
                  </div>
                  <div class="examtimes">
                        <span>考试周期：</span>"{{currentExam.begin}}" 至 "{{currentExam.end}}"
                  </div>
              </div>
          </div>
      </div>
      <div class="modal-footer">
        <button type="button" @click="goToExam" class="btn begin-exam">开始考试</button>
      </div>
    </div>
  </div>
</div>

     <!-- pdf预览模态框 -->
<div class="modal fade" id="myModal2" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog show-test" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close-2" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      </div>
      <div class="modal-body" ref="wheel" id="psd-content"></div>
    </div>
  </div>
</div>

</div>
</template>
<script>
var PDF = require("@/assets/js/pdfobject.js");
import { examInfo } from "@/api/exam";
import { examList } from "@/api/exam";
import { coursePDF } from "@/api/course";
import { userStudy } from "@/api/exam";
import { getCookie } from "../../utils/cookieFunction";
import { Message } from "element-ui";
import Cookies from 'js-cookie'

export default {
  data() {
    return {
      name: "",
      currentExam: {
        name: "",
        begin: "",
        end: "",
        num: 20,
        scale: 100
      },
      passScore: "",
      examData: [],
      currentShowData:[]
    };
  },
  created: function() {
    this.showListExam();
  },
  methods: {
    showListExam: function(params) {
      this.getListData().then(response => {
        response.data.data.forEach(element => {
          let dataJson = {};
          dataJson.bookname = element.courseName;
          dataJson.beginTime = this.timeFomat(element.createTime);
          dataJson.endTime = this.timeFomat(element.endOpenTime);
          dataJson.examGuide = element.courseId;
          dataJson.examId = element.id;
          this.examData.push(dataJson);
        });
        this.initShowData();
      });
    },
    initShowData(){
      this.showDataNum(5)
    },
    showDataNum(num){
      this.currentShowData = this.examData.slice(0,num)
    },
    getListData: function() {
      return new Promise((resolve, reject) => {
        examList(getCookie())
          .then(response => {
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    showExamInfo: function(examId, courseId) {
      //判断是否可以考试
      userStudy(courseId, getCookie()).then(response => {
        let status = response.data.data;
        console.log(typeof status);
        switch (status) {
          case "0":
            Message.error({
              message: "您当前未参加该课程"
            });
            break;
          case "1":
            Message.error({
              message: "学习中，学时不够"
            });
            break;
          case "2":
            $("#myModal").modal();
            this.getExamInfo(examId).then(response => {
              let beginTime = this.timeFomat(response.data.data.beginOpenTime);
              let endTime = this.timeFomat(response.data.data.endOpenTime);
              this.name = $.parseJSON(getCookie()).data.name;
              this.currentExam.name = response.data.data.title;
              this.currentExam.num = response.data.data.totalQuestions;
              this.currentExam.scale = response.data.data.fullMarks;
              this.currentExam.begin = beginTime;
              this.currentExam.end = endTime;
              this.passScore = response.data.data.passScore;
            });
            break;
          case "3":
            Message({
              message: "考试合格,结束",
              type: "success"
            });
            break;
          default:
            Message.error({
              message: "未知错误"
            });
        }
      });
    },
    timeFomat(data) {
      let time = new Date(data);
      let timeStr =
        time.getFullYear() +
        "年" +
        time.getMonth() +
        "月" +
        time.getDay() +
        "日";
      return timeStr;
    },
    getExamInfo: function(index) {
      return new Promise((resolve, reject) => {
        examInfo(index, getCookie())
          .then(response => {
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    showPDF(id) {
      this.getPDF(id).then(response => {
        let url = response.data.data.courseFileInfo[0].fileUrl;
        PDF.PDFObject.embed(url, "#psd-content");
      });
    },
    getPDF(index) {
      return new Promise((resolve, reject) => {
        coursePDF(index, getCookie())
          .then(response => {
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    goToExam() {
      Cookies.set('isComplete','OK')
      this.$router.push({
        path: "examination",
        query: { num: 333, passScore: this.passScore }
      });
    }
  }
};
</script>
<style lang="scss">
.modal-box {
  dt,
  dd {
    float: left;
  }
  dl::after {
    clear: both;
  }
}
.buttom-group {
  padding-bottom: 3px;
  padding-left: 380px;
}
.num-btn {
  background: #b62f60;
  border-radius: 0px;
  padding: 8px 24px;
  margin: -2.3px;
  border: 1px solid #fff;
}
.list-body {
  width: 90%;
  margin-left: 10%;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  padding: 30px 0;
}
.guide {
  cursor: pointer;
  color: blue;
}
.testing {
  cursor: pointer;
  color: blue;
}
.modal-header {
  background: #b62f60;
  color: #fff;
  .modal-title {
    font-size: 22px;
  }
}
.show-test {
  width: 1000px;
}
.allData {
  width: 92%;
  margin: 30px auto;
  td {
    padding: 10px 8px;
    text-align: center;
  }
  tbody tr {
    border-top: 1px solid #ccc;
  }
}
.project-title {
  border-top: 1.5px solid #ccc;
  border-bottom: 1.5px solid #ccc;
  line-height: 50px;
  font-size: 16px;
  th {
    text-align: center;
  }
}
.close-2 {
  margin-left: 98%;
  background: #b62f60;
  border: 1px solid rgba($color: #b62f60, $alpha: 1);
}
.project {
  width: 92%;
  margin: auto;
  border: 1px solid rgba($color: #ccc, $alpha: 0.9);
  border-radius: 6px;
  position: relative;
}
.begin-exam {
  background: #b62f60;
  padding: 10px 25px;
}
.box-header {
  background: #fff;
  position: absolute;
  font-size: 14px;
  font-weight: bold;
  color: #9b2c54;
  top: -15px;
  left: 40px;
  border: 1px solid #ccc;
  padding: 7px 20px;
}
.user-exam-info {
  width: 90%;
  border-radius: 5px;
  margin: 30px auto 10px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  padding-bottom: 30px;
}
.exam-info {
  margin-top: 20px;
  font-size: 15px;
  div {
    line-height: 40px;
  }
  span {
    margin-left: 14px;
    margin-right: 14px;
    font-weight: bold;
  }
}
.user-title {
  height: 60px;
  width: 100%;
  background: rgba($color: #ccc, $alpha: 0.3);
  line-height: 60px;
  text-indent: 20px;
  span {
    font-size: 20px;
  }
}
#myModal2 {
  .modal-body {
    height: 700px;
  }
}
</style>