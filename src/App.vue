<template>
  <div id="app">
    <Top/>
    <router-view/>
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
  background-color: #E1E1E1;
  margin: 0 auto;
}
</style>
