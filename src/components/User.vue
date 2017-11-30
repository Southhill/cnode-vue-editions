<template>
  <div>This is the User Component !</div>
</template>
<script>
import { authAK } from '@/api/index'
export default {
  data () {
    return {
      test: '233'
    }
  },
  async created () {
    const ak = localStorage.getItem('accessToken')
    if (typeof ak === 'undefined' || ak === null) {
      const confirmObj = await this.$prompt('请输入accessToken值', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      })
      const res = await authAK(confirmObj.value)
      if (!res) return
      const data = res.data
      if (data.success) {
        localStorage.setItem('accessToken', confirmObj.value)
      } else {
        this.$msg.error(`认证ak失败，${data.error_msg}`)
      }
    }
  }
}
</script>
<style lang="less" scoped>

</style>
