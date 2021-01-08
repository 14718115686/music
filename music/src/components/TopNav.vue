<template>
  <ul class="topnav">
    <li><router-link tag="a" to="/">推荐音乐</router-link></li>
    <li><router-link tag="a" to="/hotmusic">热歌榜</router-link></li>
    <li><router-link tag="a" to="/search">搜索</router-link></li>
  </ul>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.topnav {
  display: flex;
  border-bottom: 1px solid #ddd;
  li {
    line-height: 40px;
    flex: 1 1 auto;
    font-size: 15px;
    a {
      display: inline-block;
      text-decoration: none;
      color: #000;
      &.router-link-exact-active {
        color: red;
        border-bottom: 2px solid red;
      }
    }
  }
}
</style>
