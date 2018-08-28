import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import User from '@/components/User'
import Post from '@/components/Post'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/user',
      component: User,
      children: [
        {
          path: ':name',
          name: 'user',
          component: User,
          props: true
        }
      ]
    },
    {
      path: '/post/:id',
      name: 'post',
      component: Post
    }
  ]
})
