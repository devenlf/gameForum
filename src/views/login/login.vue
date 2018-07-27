<template>
<div id="content">
    <v-header></v-header>
    <div class="division"></div>
    <div class="card-box" v-loading="loginloading" element-loading-text="正在登陆中">
      <div class="login-from">
        <form>
           <div class="row-line ">
             <i class="fa fa-user prefix"></i><input type="text" name="userName" v-model="loginInfo.account" id="form1" class="form-control validate" value="请输入用户名">
           </div>
           <div class="row-line">
             <i class="fa fa-lock  prefix"></i><input type="password" name="password" v-model="loginInfo.password" id="form2" class="form-control validate" value="请输入用户名">
           </div>
        </form>
        <div class="row-line">
             <i></i><input type="text" name="verification" id="verification" class="form-control validate" value="验证码">
             <img class="code" src="../../../static/img/timg.jpg" />
        </div>
        <div class="row-line">
          <i></i><button class="btn plugin-sub login-btn waves-effect waves-light" @click="loginUser" type="submit">登录</button>
          <span id="info">{{cueMessage}}</span>
        </div>
      </div>
      <div class="read-book">
        <img src="@/assets/image/small_03.png">
        <div class="text-content">
                  <span data-toggle="modal" data-target="#myModal" @click="openBook">[在线阅读]</span>
                  <span>[下载]</span>
        </div>
      </div>
      <div class="wx-code">
        <p>微信公众号</p>
          <img src="@/assets/image/huliWechat.jpg">
        <div class="img-text">
          扫一扫关注微信公众号 <br> 
          在线学习和考试 <br>
          <a>微信使用说明</a>
        </div>
      </div>
    </div>
 <!-- 模态框 -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
        <h4 class="modal-title" id="myModalLabel">上海护理继续教育园地网站使用操作指南</h4>
      </div>
      <div class="modal-body">
        <img :src="guideBook[currentPage].img"/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" @click="prevPage">上一页</button>
        <button type="button" class="btn btn-primary" @click="nextPage">下一页</button>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
import "./login.scss";
import header from "@/components/header/header";
import { getCookie , removeCookie} from '../../utils/cookieFunction';
export default {
  data() {
    return {
      cueMessage: "",
      loginInfo: {
        account: "201811111112",
        password: "123456"
      },
      canSubmit: false,
      currentPage: 0,
      loginloading:false,
      guideBook: [
        { img: "/static/img/1.png" },
        { img: "/static/img/2.png" },
        { img: "/static/img/3.png" },
        { img: "/static/img/4.png" },
        { img: "/static/img/5.png" },
        { img: "/static/img/6.png" },
        { img: "/static/img/7.png" }
      ]
    };
  },
  created: function() {},
  watch: {
    loginInfo: {
      handler(value, oldValue) {
        if (value.account === "") {
          this.cueMessage = "用户名不得为空";
        } else if (value.password === "") {
          this.cueMessage = "密码不得为空";
        } else {
          this.cueMessage = "";
          this.canSubmit = true;
        }
      },
      deep: true
    }
  },
  methods: {
    openBook: function() {
      this.currentPage = 0;
    },
    nextPage() {
      if (this.currentPage < this.guideBook.length - 1) {
        this.currentPage++;
        this.$set(this.$data, "currentPage", this.currentPage);
      }
    },
    prevPage() {
      if (this.currentPage > 0) {
        this.currentPage--;
        this.$set(this.$data, "currentPage", this.currentPage);
      }
    },
    loginUser() {
      var $this = this;
      this.loginloading = true;
      if(getCookie()){
        removeCookie()
      } 
      this.$store
        .dispatch("Login", {
          account: this.loginInfo.account,
          password: this.loginInfo.password
        })
        .then(response => {
          console.log(response);
          if (response.data.success) {
            $this.loginloading = false;
            $this.$router.push({ path: "/" });
          } else {
            this.cueMessage = "登录信息填写有误";
          }
        })
        .catch(() => {
          $this.loginloading = false;
        });
    }
  },
  components: {
    "v-header": header
  }
};
</script>


<style lang="scss" scoped>
@import "./login.scss";
.modal-dialog {
  width: 50%;
  max-width: 960px;
  min-width: 900px;
}
.modal-body {
  text-align: center;
}
#verification {
  float: left;
}
.code {
  width: 140px;
  margin-top: 5px;
  margin-left: 35px;
}
</style>

