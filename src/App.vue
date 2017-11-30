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

<style>
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
}
[v-cloak] {
  display: none;
}
</style>
