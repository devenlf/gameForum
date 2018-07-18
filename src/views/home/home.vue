<template>
<div id="content">
    <v-header></v-header>
    <div class="division"></div>
    <v-time></v-time>
    <div class="content-body">
          <v-silder></v-silder>
            <div class="project-list">
          <router-view></router-view>
          </div>
    </div>
    <div style="clear:both"></div>
    <v-footer></v-footer>
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

.division {
  width: 100%;
  margin-top: 0.5%;
  height: 3.6%;
  background: #9b2c54;
}
.content-body {
  width: 1080px;
  margin: 0 auto;
}
.project-list{
  width: 792px;
  float: left;
  margin-top: 14px;
}
</style>

<script>
import Header from "@/components/header/header";
import timebar from "@/components/timebar/timebar";
import silderBar from "@/components/silderBar/silderBar";
import footer from "@/components/footer/footer";
export default {
  data() {
    return {};
  },
  components: {
    "v-header": Header,
    "v-time": timebar,
    "v-silder": silderBar,
    "v-footer": footer
  }
};
</script>