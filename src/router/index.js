import Vue from 'vue'
import VueRouter from 'vue-router'
import { routes } from './config'

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.length === 0) {
    console.log(to)
    return next(`/404`)
  } else {
    console.log(to, 11)
    return next()
  }
})

export default router
