<template>
  <div class="top-container">
    <img class="logo" src="" />
    <h2 class="top-head">CNodeJS社区</h2>
    <div class="top-right">
      <a href="#">登陆</a>
      <a href="#">注册</a>
    </div>
  </div>
</template>·
<script>
export default {
  name: 'top'
}
</script>
<style scoped lang='less'>
.top-container {
  display: flex;
  background-color: #333;
  height: 50px;
  margin-bottom: 20px;
  .logo {
    width: 100px;
    flex-basis: 100px;
  }
  .top-head {
    width: 60%;
    flex-basis: 60%;
    color: #eee;
    font-size: 18px;
    line-height: 50px;
    margin: 0;
  }
  .top-right {
    width: calc(100% - 60%);
    flex-basis: (calc(100% - 60%));
    display: flex;
    justify-content: flex-end;
    > a {
      line-height: 50px;
      color: #eee;
      font-size: 16px;
      margin: 0 10px;
    }
  }
}
</style>
