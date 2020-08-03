import Layout from '@/views/Layouts/Layout'

/**
 * name: 路由的名字，必填，请确保唯一性
 * meta 一些自定义字段说明
  meta: {
    title: 'title'      将作为 document.title 使用或者面包屑导航使用
    keepAlive: true     是否缓存本页面，针对 children 一般列表需要缓存，或者编辑页面禁止缓存
    icon: 'icon'        element-ui 内置icon，作为导航 eg: el-icon-s-home
    isNavActive: true      顶部导航是否处理本页面
    isHide: false       是否是侧边栏菜单
  }
 */

export const routes = [
  {
    path: '/404',
    name: 'Page404',
    component: () => import('@/views/errorPage/404.vue'),
    meta: {
      title: '404',
      isHide: true
    }
  },
  {
    path: '/403',
    name: 'Page403',
    component: () => import('@/views/errorPage/403.vue'),
    meta: {
      title: '403',
      isHide: true
    }
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home'),
        meta: {
          title: '首页',
          icon: 'el-icon-s-home'
        }
      }
    ]
  },
  // 订单
  {
    path: '/order',
    component: Layout,
    children: [
      {
        path: 'order1',
        name: 'Order1',
        component: () => import('@/views/orders/Order1'),
        meta: {
          title: '订单1',
          icon: 'el-icon-s-order'
        }
      },
      {
        path: 'order2',
        name: 'Order2',
        component: () => import('@/views/orders/Order2'),
        meta: {
          title: '订单2',
          icon: 'el-icon-s-order'
        }
      }
    ]
  }
]
