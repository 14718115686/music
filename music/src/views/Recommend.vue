<template>
  <div class="recommend">
    <Title>推荐歌单</Title>
    <ul class="recommendList">
      <router-link
        tag="li"
        v-for="rem in recommendMusicList"
        :key="rem.id"
        to="/"
      >
        <div>
          <img :src="rem.picUrl" />
          <span>{{ rem.playCount | formatNum }}</span>
        </div>
        <p>{{ rem.name }}</p>
        <!--| substr(26)  -->
      </router-link>
    </ul>
    <Title>最新音乐</Title>
    <MusicItem :newMusicList="newMusicList"></MusicItem>
  </div>
</template>

<script>
// @ is an alias to /src

import Title from "../components/Title";
import MusicItem from "../components/MusicItem";

export default {
  name: "Recommend",
  components: {
    Title,
    MusicItem,
  },
  data() {
    return {
      recommendMusicList: [],
      newMusicList: [],
    };
  },
  beforeRouteEnter(to, from, next) {
    //路由守卫  在路径进来之前获取数据
    next((vm) => {
      vm.$http.get("/personalized?limit=6").then((data) => {
        //获取推荐歌单
        console.log(data); //拿到全部的
        vm.recommendMusicList = data.data.result;
      });
      vm.$http.get("/personalized/newsong").then((data) => {
        //获取最新音乐列表
        vm.newMusicList = data.data.result;
      });
    });
  },
  filters: {
    //拦截器
    formatNum(value) {
      return (value / 10000).toFixed(1) + "万";
    },
    // substr(value, len) {
    //   return value.substr(0, len) + "...";
    // },
  },
};
</script>

<style lang="less" scoped>
ul.recommendList {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  li {
    margin-top: 10px;
    width: 33%;
    div {
      position: relative;
      span {
        top: 2px;
        right: 3px;
        position: absolute;
        color: white;
        text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
        font-size: 13px;
      }
    }
    p {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      padding: 6px 2px 0 6px;
      min-height: 30px;
      line-height: 1.2;
      font-size: 13px;
    }
  }
}
</style>
