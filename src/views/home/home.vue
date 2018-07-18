<template>
<div id="content">
    <v-header></v-header>
    <div class="division"></div>
    <v-time></v-time>
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
</style>

<script>
import Header from "@/components/header/header";
import timebar from "@/components/timebar/timebar";
export default {
  data() {
    return {};
  },
  components: {
    "v-header": Header,
    "v-time": timebar
  }
};
</script>