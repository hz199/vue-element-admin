import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress' // Progress 进度条
import 'nprogress/nprogress.css'// Progress 进度条样式
import { routes } from './config'
import $store from '../store'

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

const handleBreadcrumb = (to) => {
  const homeData = {
    icon: 'el-icon-s-home',
    title: '首页',
    url: '/'
  }
  let breadcrumbs = []
  if (to.path === '/') {
    // eslint-disable-next-line no-unused-vars
    const { url, ...rest } = homeData
    breadcrumbs = [rest]
  } else {
    breadcrumbs = [homeData, {
      icon: to.meta.icon,
      title: to.meta.title,
      url: to.path
    }]
  }

  return breadcrumbs
}

// 导航拦截
router.beforeEach((to, from, next) => {
  NProgress.start()
  if (to.matched.length === 0) {
    console.log(to)
    NProgress.done()
    return next(`/404`)
  } else {
    // 面包屑导航
    const breadcrumb = handleBreadcrumb(to)
    $store.commit('setBreadcrumb', breadcrumb)

    // 设置tagpage
    if (to.meta.isNavActive) {
      $store.commit('setTagPage', to)
    }
    setTimeout(() => {
      $store.dispatch('setStoreTagpage')
    }, 100)

    NProgress.done()
    return next()
  }
})

export default router
