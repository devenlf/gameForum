<template>
   <div id="silder" class="v-silder">
       <div class="card">
           <p class="title">学员菜单</p>
           <div class="list-muen">
               <ul class="slider-bars">
                   <li>
                       <i class="fa fa-bar-chart"></i>个人资料
                   </li>
               </ul>
           </div>
           <div class="notice">
               <p>
                   公告：2018年刊授答题一共有7期，
                   1、2、3、4、5、6、7月25日以后
                   网上开始答题，答题截止时间为9月
                   30日
              </p>
           </div>
       </div>
       <div class="contact-way">
           <div class="wx">
               <p>微信公总号</p>
               <img src="@/assets/image/huliWechat.jpg"/>
           </div>
           <div class="phone">
               <p>客服电话</p>
               <p>021-62471677</p>
           </div>
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
li {
  list-style: none;
}
.v-silder {
  box-sizing: inherit;
  margin-top: 26px;
  float: left;
  width: 288px;
}
.wx{
    width: 55%;
    float: left;
    p{
        margin-bottom: 0px;
        font-size: 16px;
    }
    img{
        display: block;
        border: 1px solid #000;
        width: 100%
    }
}
.phone{
    width: 45%;
    float: left;
    font-size: 16px;
    padding-left: 10px;
}
.list-muen {
  width: 100%;
}
.card {
  width: 100%;
  border: 1px;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  .title {
    width: 100%;
    height: 50px;
    background: #9b2c54;
    line-height: 50px;
    padding-left: 20px;
    color: #fff;
  }
}
.slider-bars {
  display: block;
  width: 80%;
  margin-left: 10%;
  margin-top: 20px;
  padding: 0px;
  li {
    font-size: 15px;
    margin-left: 0px;
    cursor: pointer;
    padding: 5px 0 5px 3px;
    i.fa-bar-chart {
      margin-right: 5px;
      font-size: 24px;
      color: #2bbbad;
    }
  }
  li:hover {
    background: rgba($color: #ccc, $alpha: 0.3);
  }
}
.contact-way {
    margin-top: 18px;
  width: 100%;
}
.notice {
  width: 100%;
  margin-top: 40px;
  border-top: 1.5px solid rgba($color: #ccc, $alpha: 0.4);
  padding: 10px 0 12px 0;
  color: red;
  p {
    width: 80%;
    margin-left: 10%;
  }
}
</style>


