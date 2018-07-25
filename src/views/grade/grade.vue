<template>
<div class="grade">
    <div class="grade-body">
        <div class="project">
            <div class="box-header">
                完成考试
            </div>
            <div class="show-score">
                <h5>您已完成答题!</h5>
                <p class="score">您的得分为:<span>{{scoreData.score}}</span></p>
                <p class="result">您的考试结果为:<span v-if="scoreData.score > scoreData.passScore">合格</span><span v-else>不合格</span></p>
                <p class="exam-num">您还剩余:(<span>{{scoreData.consumeTime}}</span> )次考试机会</p>
                <template v-if="scoreData.score > scoreData.passScore">
                            <img src="@/assets/image/small_01.png"/>
                </template>
                <template v-else>
                            <img src="@/assets/image/small_02.png"/>
                </template>
            </div>
        </div>
    </div>
</div>
</template>
<script>
import { removeCookie } from "@/utils/cookieFunction";
export default {
  data() {
    return {
      scoreData: {}
    };
  },
  created: function() {
    $('body').removeClass('modal-open');
    this.scoreData = this.$route.query.data;
    removeCookie('isComplete');
  }
};
</script>
<style lang="scss">
.grade-body {
  width: 90%;
  margin-left: 10%;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  padding: 30px 0;
}

.show-score {
  position: relative;
  margin: 40px 0 0 40px;
  h5 {
    font-weight: bold;
    color: #6da047;
  }
  p {
    font-weight: bold;
  }
  span {
    margin-left: 5px;
    color: red;
  }
  img {
    display: block;
    position: absolute;
    width: 70px;
    top: 0px;
    left: 160px;
  }
}

.project {
  width: 92%;
  margin: auto;
  border: 1px solid rgba($color: #ccc, $alpha: 0.9);
  border-radius: 6px;
  position: relative;
}

.box-header {
  background: #fff;
  position: absolute;
  font-size: 14px;
  font-weight: bold;
  color: #9b2c54;
  top: -15px;
  left: 40px;
  border: 1px solid #ccc;
  padding: 7px 20px;
}
</style>