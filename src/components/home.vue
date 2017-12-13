<<<<<<< HEAD
<template>
  <div class="home-container">
    <ul class="topics"></ul>
=======
<template v-clock>
  <div class="home-container">
    <ul class="topics">
        <li v-for="(topic, index) in topics" :class="{ active: index === activeTopicIdx }" :key="index">
          <router-link :to="{ path: '/', query: { tab: topic.link } }" tag="span">{{ topic.name }}</router-link>
        </li>
    </ul>
    <posts :posts="topicsList"></posts>
>>>>>>> spa-dev
  </div>
</template>

<script>
<<<<<<< HEAD
export default {
  name: 'home'
}
</script>

=======
import { getTopics } from '@/api/index'
import Posts from '@/components/Posts'

export default {
  name: 'Home',
  components: { Posts },
  data () {
    return {
      topics: [
        { name: '全部', link: '' },
        { name: '精华', link: 'good' },
        { name: '分享', link: 'share' },
        { name: '问答', link: 'ask' },
        { name: '招聘', link: 'job' },
        { name: '开发测试', link: 'dev' }
      ],
      activeTopicIdx: 0,
      topicsList: []
    }
  },
  async created () {
    const tab = this.$route.query.tab || ''
    const data = await getTopics({ tab })
    this.topicsList = data
  },
  async mounted () {
    const tab = this.$route.query.tab || ''
    const data = await getTopics({ tab })
    const idx = this.topics.findIndex(li => li.link === tab)
    this.topicsList = data
    this.activeTopicIdx = idx
  },
  watch: {
    '$route.query.tab': async function (tab) {
      const data = await getTopics({ tab })
      const idx = this.topics.findIndex(li => li.link === tab)
      this.topicsList = data
      this.activeTopicIdx = idx
    }
  },
  methods: {
    getTopicsList (params) {
      this.topicsList = getTopics(params)
    },
    async changeTopic (tab, idx) {
      this.activeTopicIdx = idx
      const data = await getTopics({ tab })
      this.topicsList = data
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  width: 80%;
  margin: 0 auto;
  border-radius: 3px;
}
.topics {
  display: flex;
  list-style-type: none;
  background-color: #F6F6F6;
  padding: 5px 10px;
  > li {
    width: auto;
    padding: 0 10px;
    background-color: inherit;
    color: #80BD01;
    font-weight: 700;
    cursor: pointer;
    margin: 0 10px;
    &.active {
      background-color: #80BD01;
      color: #FFFFE7;
      border-radius: 3px;
    }
  }
}
</style>
>>>>>>> spa-dev
