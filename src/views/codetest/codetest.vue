<template>
    <div class="code" @click="refreshCode">
    <s-identify :identifyCode="identifyCode"></s-identify>
  </div>
</template>

<script>
import SIdentify from '@/components/identify/identify'
export default {
  data() {
    return {
      identifyCodes: "1234567890",
      identifyCode: ""
    };
  },
  mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },
  methods: {
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      this.identifyCode = '12a4'
      console.log(this.identifyCode);
    }
  },
  components:{
      's-identify' : SIdentify
  }
};
</script>

<style>
.code {
  margin: 400px auto;
  width: 114px;
  height: 40px;
  border: 1px solid red;
}
</style>