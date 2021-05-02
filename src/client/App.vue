<template>
  <div id="app-box">
    <router-link to="/">首页</router-link>
    <router-link to="/about">关于</router-link>
    <h1>App</h1>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  setup() {},
}
</script>

<style scoped>
.app-box {
  background: violet;
}
</style>