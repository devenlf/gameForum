<template>
<el-row class="titleHeader">
    <el-col class="userName" :span="4" :offset="22">
      <p>
         欢迎登录   {{user.name}}
      </p>
    </el-col>
</el-row>
</template>
<style lang="scss">
.titleHeader {
  display: block;
  width: 100%;
  height: 100px;
  background: #eee;
  p{
    line-height: 100%
  }
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


