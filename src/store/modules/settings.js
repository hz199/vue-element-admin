import { setItem } from '@/utils/localStorage'

export const CURRENT_PATH = 'currentPath'

const state = {
  /**
   * 侧边栏导航是否展开状态
   */
  sliderCollapse: false,
  /**
   * 当前路由地址
   */
  currentRouter: '/',
  breadcrumbList: []
}

const getters = {
  getSliderCollapse: state => state.sliderCollapse,
  getCurrentRouter: state => state.currentRouter,
  getBreadcrumb: state => state.breadcrumbList
}

const mutations = {
  setSliderCollapse (state) {
    state.sliderCollapse = !state.sliderCollapse
  },
  setCurrentRouter (state, path) {
    setItem(CURRENT_PATH, path)
    state.currentRouter = path
  },
  setBreadcrumb (state, breadcrumb) {
    state.breadcrumbList = breadcrumb
  }
}

const actions = {
}

export default {
  state,
  mutations,
  getters,
  actions
}
