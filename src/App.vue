<template>
  <div id="app">
    <Top/>
    <router-view></router-view>
  </div>
</template>

<script>
import Top from '@/components/Top'
export default {
  name: 'app',
  components: { Top }
}
</script>

<style lang="less">
body {
  margin: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #ffffff;
  margin: 0 auto;
  min-height: 100vh;
  text-align: left;
}
[v-cloak] {
  display: none;
}
.markdown-text {
    width: 100%;
    font-family: Monaco, Menlo, Consolas, "Courier New", monospace;
    img {
        max-width: 100%;
    }
    a {
      color: #0088D5;
      text-decoration: none;
      &:hover {
        text-decoration: underline;
      }
    }
    pre {
      background-color: #F7F7F7;
      padding: 5px;
      margin: 10px 0;
      font-weight: 600;
    }
    h1, h2, h3, h4, h5, h6 {
      padding-bottom: 5px;
      border-bottom: 1px solid #F2F2F2;
    }
}
</style>
