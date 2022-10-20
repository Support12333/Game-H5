<template>
  <router-view />
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style>
#app {
  height: 100%;
  max-width: 750px;
  margin: 0 auto;
}

html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  height: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, Arial, sans-serif;
}

a:focus,
a:active {
  outline: none;
}

a,
a:focus,
a:hover {
  cursor: pointer;
  color: inherit;
  text-decoration: none;
}

div:focus {
  outline: none;
}

img {
  display: block;
}

ul li {
  list-style: none;
}
</style>
