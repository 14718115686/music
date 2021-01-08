<template>
  <div class="hotmusic">
    <div class="top">
      <div class="topimg">
        <div class="img"></div>
      </div>
      <div class="time">更新时间:</div>
    </div>

    <ul class="hotmusicList">
      <router-link
        tag="li"
        v-for="hot in hotmusicList"
        :key="hot.id"
        to="/HotMusic"
      >
        {{ hot.name }}
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HotMusic",
  components: {},
  data() {
    return {
      hotmusicList: [],
    };
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.$http.get("/personalized/newsong").then((data) => {
        console.log(data);
        vm.hotmusicList = data.data.result;
      });
    });
  },
};
</script>
<style lang="less" scoped>
.hotmusic {
  position: relative;
  .top {
    width: 100%;
    height: 145px;
    padding-left: 20px;
    background: #a75740;
    .topimg {
      width: 160px;
      height: 75px;
      padding-top: 20px;
      background: #a75740;
      .img {
        width: 160px;
        height: 75px;
        background-image: url(../assets/index_icon_2x.png);
        background-repeat: no-repeat;
        background-size: 174px 78px;
        background-position: -11px -22px;
      }
    }
    .time {
      position: absolute;
      top: 85px;
      left: 30px;
      color: #ffffff;
    }
  }
}
</style>
