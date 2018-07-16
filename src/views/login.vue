<template>
<div>
    我是一个登录界面
</div>
</template>

<style lang="scss">
html,
body {
  height: 99.2%;
}
</style>

<script>
import {setCookie} from '../utils/cookieFunction';
export default {
  data() {
    return {
      person :{}
    };
  },
  created:function(){
   setCookie('userInfo',{'name':'小明'})
  }
};
</script>