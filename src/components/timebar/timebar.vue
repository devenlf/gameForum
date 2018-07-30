<template>
   <div id="timebar" class="v-time">
   <div class="user-info">
         <span class="time1">{{timeSec}}好</span>
         <span class="name">{{name}}</span>
         <a class="sign-out" @click="signOut">[退出]</a>
         <span class="time2">
           {{timeData}}
         </span>
       </div>
    </div> 
</template>

<script>
import { getCookie, setCookie, removeCookie } from "../../utils/cookieFunction";
import store from "@/store";
import $ from "jquery";
const weekday = [
  "星期天",
  "星期一",
  "星期二",
  "星期三",
  "星期四",
  "星期五",
  "星期六"
];
const timeSection = ["上午", "下午", "晚上", "凌晨"];
export default {
  data() {
    return {
      name: "",
      timeSec: this.getTimeSection(),
      timeData: this.timeFormat()
    };
  },
  mounted: function() {
    this.updataTime();
  },
  created: function() {
    this.name = $.parseJSON(getCookie()).data.name;
  },

  methods: {
    updataTime: function() {
      var _this = this;
      setInterval(function() {
        var newTime = _this.timeFormat();
        _this.getTimeSection();
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
    },
    getTimeSection() {
      let time = new Date().getHours();
      if (0 <= time && time < 6) {
        this.timeSec = timeSection[3];
      } else if (6 <= time && time < 12) {
        this.timeSec = timeSection[0];
      } else if (12 <= time && time < 18) {
        this.timeSec = timeSection[1];
      } else if (18 <= time && time < 24) {
        this.timeSec = timeSection[2];
      } else {
        console.log("错误时间");
      }
    },
    signOut() {
      store.dispatch("LogOut");
      this.$router.push({ path: "/login" });
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
      cursor: pointer;
    }
    .time1 {
      color: #9b2c54;
    }
  }
}
</style>


