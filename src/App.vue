<template>
   <router-view></router-view>
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
    };
  },
  created:function(){

},
  components: {
    "v-header": Header222,
    "v-side": side
  }
};
</script>