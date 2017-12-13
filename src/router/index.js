import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import HelloWorld from '@/components/HelloWorld'
=======
import Home from '@/components/Home'
import User from '@/components/User'
import Post from '@/components/Post'
>>>>>>> spa-dev

Vue.use(Router)

export default new Router({
<<<<<<< HEAD
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
=======
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
>>>>>>> spa-dev
    }
  ]
})
