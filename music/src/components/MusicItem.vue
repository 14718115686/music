<template>
  <ul class="newMusicList">
    <router-link v-for="item in newMusicList" :key="item.id" tag="li" to="/">
      <div class="left">
        <div>{{ item.name }}</div>

        <p><span></span>{{ item.song.artists[0].name }}-{{ item.name }}</p>
      </div>

      <div class="right">
        <span></span>
      </div>
    </router-link>
  </ul>
</template>

<script>
export default {
  name: "MusicItem",
  props: {
    newMusicList: Array,
  },
};
</script>

<style lang="less" scoped>
.newMusicList {
  li {
    display: flex;
    margin-top: 10px;
    padding-left: 10px;
    div.left {
      flex: 1;
      text-align: left;
      border-bottom: 1px solid #ddd;
      div {
        font-size: 17px;
        color: #333333;
      }
      p {
        font-size: 12px;
        color: #888;
        padding: 5px 0;
      }
      span {
        display: inline-block;
        width: 22px;
        height: 10px;
        position: relative;
        top: 0;
        background-image: url(../assets/index_icon_2x.png);
        background-position: 3px 1px;
        background-size: 177px 111px;
      }
    }
    div.right {
      border-bottom: 1px solid #ddd;
      padding: 0px 5px;
      display: flex;
      align-items: center;
      span {
        display: inline-block;
        width: 22px;
        height: 22px;
        background-image: url(../assets/index_icon_2x.png);
        background-position: -24px 0px;
        background-size: 166px 97px;
      }
    }
  }
}
</style>
