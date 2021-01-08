<template>
  <div id="app">
    <TopNav></TopNav>
    <!-- router-view 是路由匹配到 -->
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import TopNav from "./components/TopNav";

export default {
  components: {
    TopNav,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
/* kele88.cn */
#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
