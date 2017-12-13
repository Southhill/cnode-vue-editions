<template>
  <div class="top-container">
<<<<<<< HEAD
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
=======
    <router-link to="/" tag="div" class="top-home"><img class="logo" src="https://cnodejs.org/public/images/cnodejs_light.svg" alt="logo" /></router-link>
    <h2 class="top-head">CNodeJS社区</h2>
    <div class="top-right">
      <router-link :to="{ path: '/user' }"><icon name="user" scale="1.5"></icon></router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Top'
}
</script>
<style lang='less' scoped>
>>>>>>> spa-dev
.top-container {
  display: flex;
  background-color: #333;
  height: 50px;
  margin-bottom: 20px;
<<<<<<< HEAD
  .logo {
    width: 100px;
    flex-basis: 100px;
  }
=======
  .top-home {
    margin-left: 10px;
    cursor: pointer;
    display: flex;
    .logo {
      width: 100px;
      flex-basis: 100px;
    }
  }

>>>>>>> spa-dev
  .top-head {
    width: 60%;
    flex-basis: 60%;
    color: #eee;
    font-size: 18px;
    line-height: 50px;
    margin: 0;
<<<<<<< HEAD
=======
    text-align: center;
>>>>>>> spa-dev
  }
  .top-right {
    width: calc(100% - 60%);
    flex-basis: (calc(100% - 60%));
    display: flex;
    justify-content: flex-end;
    > a {
<<<<<<< HEAD
=======
      outline: none;
>>>>>>> spa-dev
      line-height: 50px;
      color: #eee;
      font-size: 16px;
      margin: 0 10px;
<<<<<<< HEAD
=======
      > svg {
        vertical-align: middle;
      }
>>>>>>> spa-dev
    }
  }
}
</style>
