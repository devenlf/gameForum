<template>
<div id="content">
    <v-header></v-header>
    <div class="division"></div>
    <div class="card-box">
      <div class="login-from">
        <form>
           <div class="row-line ">
             <i class="fa fa-user prefix"></i><input type="text" name="userName" id="form1" class="form-control validate" value="请输入用户名">
           </div>
           <div class="row-line">
             <i class="fa fa-lock  prefix"></i><input type="password" name="password" id="form2" class="form-control validate" value="请输入用户名">
           </div>
        </form>
        <div class="row-line">
             <i></i><input type="text" name="verification" id="verification" class="form-control validate" value="验证码">
        </div>
        <div class="row-line">
          <i></i><button class="btn plugin-sub login-btn waves-effect waves-light" type="submit">登录</button>
          <span id="info">温馨提示:用户名不能为空.</span>
        </div>
      </div>
      <div class="read-book">
        <img src="@/assets/image/small_03.png">
        <div class="text-content">
                  <span data-toggle="modal" data-target="#myModal">[在线阅读]</span>
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
        <h4 class="modal-title" id="myModalLabel">Modal title</h4>
      </div>
      <div class="modal-body">
        <img src="@/assets/image/1.png"/>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">上一页</button>
        <button type="button" class="btn btn-primary">下一页</button>
      </div>
    </div>
  </div>
</div>
</div>
</template>
<style lang="scss" scoped>
@import "./login.scss";
.modal-dialog{
  width: 50%
}
.modal-body{
  text-align: center
}
</style>

<script>
import "./login.scss";
import { setCookie } from "@/utils/cookieFunction";
import header from "@/components/header/header";
export default {
  data() {
    return {
      person: {}
    };
  },
  created: function() {
    setCookie("userInfo", { name: "小明" });
  },
  components: {
    "v-header": header
  }
};
</script>