import Vue from 'vue'
import Router from 'vue-router'

import Talk from '@/components/Talk'
import Public from '@/components/Public'
import Contact from '@/components/Contact'
import Index from '@/components/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/talk'
    },
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path: '/talk',
      name: 'talk',
      component: Talk,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/public',
      name: 'public',
      component: Public,
      meta: {
        requireAuth: true
      }
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact,
      meta: {
        requireAuth: true
      }
    }
  ]
})
