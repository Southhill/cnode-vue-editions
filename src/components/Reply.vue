<template>
  <div class="reply-container">
      <router-link :to="`/user/${reply.author.loginname}`"><img :src="reply.author.avatar_url" :alt="reply.author.loginname"></router-link>
      <div class="reply-content">
          <div class="reply-content-header"></div>
          <div class="reply-content-text"></div>
      </div>
      <span class="btn-group">
          <icon v-show="reply.ups && reply.ups.length" name="thumbs-o-up" />
          <icon name="reply" />
      </span>
  </div>    
</template>
<script>
export default {
  name: 'reply',
  props: {
    reply: {
      type: Object,
      required: true
    }
  }
}
</script>
<style lang="less" scoped>

</style>
