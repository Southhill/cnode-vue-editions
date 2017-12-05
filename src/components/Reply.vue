<template>
  <div :class="['reply-container', { 'good-reply': reply.isGoodReply }]" @mouseover="toggleShowUps(true)" @mouseout="toggleShowUps(false)">
      <router-link class="reply-avatar" :to="`/user/${reply.author.loginname}`"><img :src="reply.author.avatar_url" :alt="reply.author.loginname"></router-link>
      <div class="reply-content">
          <div class="reply-content-header">
            <router-link class="name" tag="span" :to="`/user/${reply.author.loginname}`">{{ reply.author.loginname }}</router-link>
            <span class="extra"><router-link class="reply-floor" tag="span" :to="`#rl${reply.floor}`">{{ reply.floor }}楼</router-link> · <span>{{ reply.create_at | localeTime }}</span></span>
            <span class="author-tag" v-if="loginname === reply.author.loginname">作者</span>
          </div>
          <div class="reply-content-text" v-html="reply.content"></div>
      </div>
      <span class="btn-group" @click=toggleReplyUps($event)>
          <span v-show="upsCount">{{ upsCount }}</span>
          <icon :style="{color: hadUps ? '#F4FCF0' : ''}" v-show="upsCount || showUps" name="thumbs-o-up" />
          <icon name="reply" />
      </span>
  </div>
</template>
<script>
import { replyUps } from '@/api/index'
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
    }
  },
  data () {
    return {
      showUps: false,
      upsCount: 0,
      hadUps: false
    }
  },
  mounted () {
    this.upsCount = this.reply.ups.length
  },
  methods: {
    toggleShowUps (status) {
      this.showUps = status || !this.showUps
    },
    async toggleReplyUps (evt, id) {
      console.log('evt', evt)
      debugger
      const res = await replyUps(id)
      if (res.success) {
        if (res.action === 'up') {
          this.upsCount = this.upsCount + 1
          this.hadUps = true
        } else {
          this.upsCount = this.upsCount - 1
          this.hadUps = false
        }
      }
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
        .reply-floor {
          cursor: pointer;
          &:hover {
            text-decoration: underline;
          }
        }
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
svg {
  &:hover {
    color: #000;
    opacity: .6;
  }
}
</style>
