<template>
   <div id="timebar" class="v-time">
   <div class="user-info">
         <span class="time1">傍晚好,</span>
         <span class="name">{{name}}</span>
         <a class="sign-out">[退出]</a>
         <span class="time2">
           {{timeData}}
         </span>
       </div>
    </div> 
</template>

<script>
const weekday = [
  "星期天",
  "星期一",
  "星期二",
  "星期三",
  "星期四",
  "星期五",
  "星期六"
];
export default {
  data() {
    return {
      name: "小红",
      timeData: "newsdsd"
    };
  },
  mounted: function() {
    this.updataTime();
  },

  methods: {
    updataTime: function() {
      var _this = this;
      setInterval(function() {
        var newTime = _this.timeFormat();
        _this.$set(_this.$data, "timeData", newTime);
      }, 1000);
    },
    //格式化时间
    timeFormat() {
      let newTime = "";
      let time = new Date();
      newTime =
        time.getFullYear() +
        "年" +
        (time.getMonth() + 1) +
        "月" +
        time.getDate() +
        "日" +
        "     " +
        weekday[time.getDay()] +
        "      " +
        time.getHours() +
        ":" +
        time.getMinutes() +
        ":" +
        time.getSeconds();
      return newTime;
    }
  }
};
</script>

<style lang="scss">
.v-time {
  width: 1080px;
  margin: 0 auto;
  .user-info {
    padding-top: 10px;
    font-size: 18px;
    .name {
      color: blue;
      font-size: 15px;
      margin-left: 12px;
    }
    .sign-out {
      font-size: 18px;
      color: #9b2c54;
      margin-left: 14px;
      margin-right: 16px;
    }
    .time1 {
      color: #9b2c54;
    }
  }
}
</style>


