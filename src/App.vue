<template>
<el-container id="boxMain">
     <el-header class="bg-purple-dark">
       <v-header213></v-header213>
       </el-header>
  <el-container>
    <el-aside>Aside</el-aside>
    <el-main>
       <router-view></router-view>
    </el-main>
  </el-container>
</el-container>
</template>

<style lang="scss">
#boxMain{
  width: 1180px;
  margin: auto;
  height: 100%;
}
.bg-purple-dark {
  background: #409eff;
  padding: 0px;
}
.el-header {
  height:100px!important
}
.el-aside {
  background-color: #d3dce6;
  color: #333;
  height:780px;
  width:180px!important;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  padding: 0px;
  height:780px;
}
</style>

<script>
import Header222 from "./common/header";
export default {
  data() {
    return {};
  },
  components: {
    "v-header213": Header222
  }
};
</script>