import Vue from 'vue'
import VueRouter from 'vue-router'
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

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    console.log(to)
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

    return next()
  }
})

export default router
