<template>
  <div :class="['reply-container', { 'good-reply': reply.isGoodReply }]" @mouseover="toggleShowUps(true)" @mouseout="toggleShowUps(false)">
      <router-link class="reply-avatar" :to="`/user/${reply.author.loginname}`"><img :src="reply.author.avatar_url" :alt="reply.author.loginname"></router-link>
      <div class="reply-content">
          <div class="reply-content-header">
            <router-link class="name" tag="span" :to="`/user/${reply.author.loginname}`">{{ reply.author.loginname }}</router-link>
            <span class="extra"><router-link tag="span" to="#">{{ index + 1 }}楼</router-link> · <span>{{ reply.create_at | localeTime }}</span></span>
            <span class="author-tag" v-if="loginname === reply.author.loginnae">作者</span>
          </div>
          <div class="reply-content-text" v-html="reply.content"></div>
      </div>
      <span class="btn-group">
          <span v-show="reply.ups.length">{{ reply.ups.length }}</span>
          <icon v-show="reply.ups.length || showUps" name="thumbs-o-up" />
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
      required: true,
      default: {
        ups: [],
        author: {}
      }
    },
    loginname: {
      type: String,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      showUps: false
    }
  },
  methods: {
    toggleShowUps (status) {
      this.showUps = status || !this.showUps
    }
  }
}
</script>
<style lang="less" scoped>
.reply-container{
  display: flex;
  padding: 10px;
  background-color: #ffffff;
  border-bottom: 1px solid #F4F4F4;
  position: relative;
  .good-reply {
    background-color: #F4FCF0;
  }
  .reply-avatar {
    width: 30px;
    height: 100%;
    margin-right: 10px;
    > img {
      width: 100%;
      outline: none;
    }
  }
  .btn-group {
    position: absolute;
    right: 5px;
    top: 5px;
    color: #999999;
    cursor: pointer;
  }
  .reply-content {
    display: flex;
    flex-direction: column;
    &-header {
      font-size: 13px;
      .name {
        font-weight: bold;
        cursor: pointer;
        &:hover {
          text-decoration: underline;
        }
      }
      .extra {
        color: #4C88D1;
        margin-right: 5px;
      }
    }
    &-text {
      padding: 5px;
    }
  }
}
.author-tag {
  color: #ffffff;
  background-color: #6BA44E;
  padding: 3px;
}
</style>
