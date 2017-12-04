<template>
  <section class="post-container">
      <header class="post-header">
          <h3><span class="topic-tag" v-if="topic.top || topic.good">{{ topic.top ? '置顶' : '精华' }}</span>{{ topic.title }}</h3>
          <span>发布于{{ topic.create_at | localeTime }} · 作者 <router-link tag="span" class="hoverline" :to="`/user/${topic.author && topic.author.loginname}`">{{ topic.author && topic.author.loginname }}</router-link> · {{ topic.visit_count }}次浏览 · 来自<router-link tag="span" class="hoverline" :to="{ name: 'home', query: { tab: topic.tab } }">{{ topic.tab | tagName }}</router-link></span>
          <el-button @click="setCollectTopic(topic.id, !isCollect)" v-if="hasOwner" :class="isCollect ? 'post-collected-btn' : 'post-collect-btn'">{{ isCollect ? '取消收藏' : ' 收藏 ' }}</el-button>
      </header>
      <article v-html="topic.content"></article>
      <section class="reply-container">
          <header>{{ topic.reply_count }} 回复数</header>
          <template v-if="topic.reply_count">
              <reply v-for="(reply, index) in topic.replies" :key="index" :reply="reply"></reply>
          </template>
          <template v-else><div class="noreply">还没有回复，要不要消灭0回复惨案？回复</div></template>
      </section>
  </section>
</template>
<script>
import { getTipic, postCollectTipic } from '@/api/index'
import Reply from '@/components/Reply'
export default {
  name: 'Post',
  components: {
    Reply
  },
  data () {
    return {
      topic: {},
      hasOwner: false,
      isCollect: false
    }
  },
  async created () {
    const id = this.$route.params.id
    const data = await getTipic(id)
    const ak = sessionStorage.getItem('accessToken')
    this.topic = data
    this.isCollect = data.is_collect
    this.hasOwner = !!ak
  },
  methods: {
    async setCollectTopic (id, toCollect) {
      const status = await postCollectTipic({ topic_id: id }, toCollect)
      if (status) {
        this.isCollect = toCollect
      }
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

</style>
