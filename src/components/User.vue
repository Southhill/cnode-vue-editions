<template v-cloak>
  <div class="user-container">
    <div class="card user-card">
      <div class="user-card-header">
        <bread-crumbs></bread-crumbs>
      </div>
      <div class="user-card-profiles">
        <div class="avatar">
          <img :src="user.avatar_url" alt="avatar"/>
          <span>{{ user.loginname }}</span>
        </div>
        <span>{{ user.score }} 积分</span>
        <span><icon name="github" scale="1.5"></icon> @{{ user.githubUsername }}</span>  
        <span style="color: #C2B0AB">注册于{{ user.create_at | localeTime }}</span>
      </div>
    </div>
    <div class="card topics-card">
      <div class="topics-card-header">最近创建的话题</div>
    </div>
    <div class="card reply-card">
      <div class="reply-card-header">最近参与的话题</div>
    </div>
  </div>
</template>
<script>
import BreadCrumbs from '@/components/BreadCrumbs'
import { authAK, getUser } from '@/api/index'
export default {
  name: 'User',
  components: {
    BreadCrumbs
  },
  props: {
    name: String
  },
  data () {
    return {
      user: {}
    }
  },
  async created () {
    const name = this.$route.params.name
    if (name) {
      const userRes = await getUser(name)
      this.user = userRes
      return
    }
    let ak = sessionStorage.getItem('accessToken')
    if (typeof ak === 'undefined' || ak === null) {
      const confirmObj = await this.$prompt('请输入accessToken值', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      })
      ak = confirmObj.value
    }
    const res = await authAK(ak)
    if (!res) return
    const data = res.data
    if (data.success) {
      sessionStorage.setItem('accessToken', ak)
      const userRes = await getUser(data.loginname)
      this.user = userRes
    } else {
      this.$msg.error(`认证ak失败，${data.error_msg}`)
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="less" scoped>
.user-container {
  width: 80%;
  margin: 0 auto;
  .card {
    margin: 10px auto;
    border: 1px solid #E5E5E5;
    border-radius: 5px;
    text-align: left;
  }
}
.user-card {
  &-profiles {
    display: flex;
    flex-direction: column;
    padding: 10px;
    .avatar {
      width: 100%;
      > img {
        width: 50px;
        margin-right: 10px;
      }
      > span {
        vertical-align: top;
      }
    }
    > span {
      flex-basis: 30px;
    }
  }
}
</style>
