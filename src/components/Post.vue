<template>
  <div class="post-container">
      <header class="post-header">
          <h3><span class="topic-tag" v-if="topic.top || topic.good">{{ topic.top ? '置顶' : '精华' }}</span>{{ topic.title }}</h3>
          <span>发布于{{ topic.create_at | localeTime }} · 作者 <router-link tag="span" class="hoverline" :to="`/user/${topic.author.loginname}`">{{ topic.author.loginname }}</router-link> · {{ topic.visit_count }}次浏览 · 来自<router-link tag="span" class="hoverline" :to="{ name: 'home', query: { tab: topic.tab } }">{{ topic.tab | tagName }}</router-link></span>
          <span class="editForm-btn" v-if="isOwnTopic" @click="editForm"><i><icon name="edit" /></i></span>
          <el-button @click="setCollectTopic(topic.id, !isCollect)" v-if="hasOwner" :class="isCollect ? 'post-collected-btn' : 'post-collect-btn'">{{ isCollect ? '取消收藏' : ' 收藏 ' }}</el-button>
      </header>
      <article v-html="topic.content"></article>
      <section class="replies-container">
          <header class="reply-header">{{ topic.reply_count }} 回复数</header>
          <template v-if="topic.reply_count">
              <reply v-for="(reply, index) in replies" :key="index" :reply="reply" :publicMsg="publicMsg"></reply>
              <div v-show="showEditor" class="reply-editor">
                <vue-editor key="replyEditor" class="reply-editor-body" v-model="replyContent" placeholder="editorPlaceholder"></vue-editor>
                <el-button class="reply-editor-btn" @click="handleReply()">回复</el-button>
              </div>
          </template>
          <template v-else>
            <div class="noreply">还没有回复，要不要消灭0回复惨案？<span class="like-link" @click="showEditor = true">回复</span></div>
            <div v-show="showEditor" class="reply-editor" @keyup.esc="showEditor = false">
              <vue-editor key="noreplyEditor" class="reply-editor-body" v-model="replyContent" placeholder="editorPlaceholder"></vue-editor>
              <el-button class="reply-editor-btn" @click="handleReply()">回复</el-button>
            </div>
          </template>
      </section>
      <form-topic :topicId="topic.id"></form-topic>
  </div>
</template>
<script>
import { VueEditor } from 'vue2-editor'

import { getTopic, postCollectTipic, addReplies } from '@/api/index'
import { upsCountForGoodReply, editorPlaceholder } from '@/constants/ux.const'
import Reply from '@/components/Reply'
export default {
  name: 'Post',
  components: {
    Reply,
    VueEditor
  },
  data () {
    return {
      topic: {
        author: {}
      },
      publicMsg: {},
      replies: [],
      hasOwner: false,
      isOwnTopic: false,
      isCollect: false,
      showEditor: false,
      replyContent: '',
      editorPlaceholder: editorPlaceholder
    }
  },
  async created () {
    const id = this.$route.params.id
    await this.setTopic(id)
  },
  methods: {
    async setCollectTopic (id, toCollect) {
      const status = await postCollectTipic({ topic_id: id }, toCollect)
      if (status) {
        this.isCollect = toCollect
      }
    },
    async handleReply () {
      await addReplies(this.topic.id, { content: this.replyContent })
      await this.setTopic(this.topic.id)
    },
    async setTopic (id) {
      const data = await getTopic(id)
      const ak = sessionStorage.getItem('accessToken')
      let replies = data.replies.map((reply, idx) => Object.assign({}, reply, { floor: idx + 1, isGoodReply: reply.ups.length >= upsCountForGoodReply }))
      // let goodReplies = replies.filter(reply => {
      //   return reply.ups.length >= upsCountForGoodReply
      // }).map(reply2 => Object.assign({}, reply2, { isGoodReply: true }))
      // .sort((a, b) => b.ups.length - a.ups.length)
      this.hasOwner = !!ak
      if (data.author.loginname === sessionStorage.getItem('loginname')) {
        this.isOwnTopic = true
      }
      this.topic = data
      this.replies = replies
      this.showEditor = replies.length
      this.isCollect = data.is_collect
      this.replyContent = ''
      this.publicMsg = {
        loginname: data.author.loginname,
        id: data.id
      }
    },
    editForm () {
      this.$bus.$emit('showForm', true)
    }
  }
}
</script>
<style lang="less" scoped>
.topic-tag {
    border-radius: 3px;
    color: #ffffff;
    padding: 3px 5px;
    margin-right: 5px;
    background-color: #80BD01;
}
.hoverline {
    text-decoration: none;
    cursor: pointer;
    &:hover {
        text-decoration: underline;
    }
}
.post-container {
    padding: 10px;
    padding-top: 0;
}
.post-header {
    padding-bottom: 20px;
    border-bottom: 1px solid #E3E3E3;
    position: relative;
    .post-collect-btn {
        position: absolute;
        right: 5px;
        bottom: 10px;
        background-color: #80BD01;
        color: #ffffff;
        font-weight: 700;
        padding: 10px;
        border-radius: 5px;
        &:hover {
            background-color: #6ba44e;
        }
    }
    .post-collected-btn {
        position: absolute;
        right: 5px;
        bottom: 10px;
        background-color: #909090;
        color: #ffffff;
        font-weight: 700;
        padding: 10px;
        border-radius: 5px;
    }
}
.reply-header {
    background-color: #F6F6F6;
    border-bottom: 1px solid #F4F4F4;
    padding: 10px 5px;
}
.noreply {
  margin: 10px auto;
  .like-link {
    color: #0088CC;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
}
.reply-editor {
  min-height: 240px;
  width: 100%;
  margin: 8px auto;
  display: flex;
  flex-direction: column;
  &-body {
    height: 80%;
    margin-bottom: 10px;
  }
  &-btn {
    width: auto;
  }
}
.editForm-btn {
  cursor: pointer;
  vertical-align: middle;
  &:hover {
    color: #000;
    opacity: .7;
  }
}
</style>
