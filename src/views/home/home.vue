<template>
<div id="content">
    <v-header></v-header>
    <div class="division"></div>
    <div id="ng-scope">
       <div class="user-info">
         傍晚好,<a>{{name}}</a>
         <span>
           {{timeData}}
         </span>
       </div>
    </div>
</div>
</template>

<style lang="scss">
#content {
  height: 100%;
  width: 100%;
}
.v-header {
  height: $imageHeiht2;
  min-height: 200px;
}
#ng-scope {
  width: 1080px;
  margin: 0 auto;
  background: red;
  .user-info {
    font-size: 18px;
    a {
      font-size: 14px;
    }
  }
}
.division {
  width: 100%;
  margin-top: 0.5%;
  height: 3.6%;
  background: #9b2c54;
}
</style>

<script>
import Header from "@/components/header/header";
export default {
  data() {
    return {
      name: "小红",
      timeData: "new Date()"
    };
  },
  
  mounted:function() {
    console.log(131)
    // setInterval(function() {
    //   this.timeData = new Date();
    //   console.log(213);
    // }, 1000);
  },
  components: {
    "v-header": Header
  }
};
</script>