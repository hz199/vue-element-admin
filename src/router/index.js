import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layouts/Layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Index',
    components: {
      content: () => import('@/views/Home'),
      layout: Layout
    },
    meta: {
      title: '首页'
    }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
