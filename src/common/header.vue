<template>
<el-row class="titleHeader">
      <p class="userName">
         欢迎登录  {{user.name}}
      </p>
</el-row>
</template>
<style lang="scss">
.titleHeader {
  position: fixed;
  left: 160px;
  display: block;
  width: 100%;
  height: 100px;
  background: #eee;
}
.userName{
  width: 20%;
  margin-left: 80%;
  height: 100px;
  margin-top: 0px;
  line-height: 100px;
}
</style>

<script>
export default {
  props: {
    user: {}
  },
  data() {
    return {};
  }
};
</script>


