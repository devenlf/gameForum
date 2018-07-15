<template>
<el-row class="container mianBox" style="height:100%">
   <v-side></v-side>
   <el-col class="main" :span="22">
      <v-header :user="person"></v-header>
      <el-row id="mianStyle">
        <router-view></router-view>
      </el-row>
   </el-col>
</el-row>
</template>

<style lang="scss">
html,
body {
  height: 99.2%;
}
.mianBox {
  height: 100%!important;
}
#mianStyle{
  position: absolute;
  top: 100px;
  left: 160px;
}
.main {
  height: 100%!important;
}
</style>

<script>
import Header222 from "./common/header";
import side from "./common/sidebar";
export default {
  data() {
    return {
      person :{}
    };
  },
  created:function(){
    this.$http.get("http://yapi.demo.qunar.com/mock/14002/userinfo")
    .then((data)=>{
      this.person = data.data;
    })
  },
  components: {
    "v-header": Header222,
    "v-side": side
  }
};
</script>