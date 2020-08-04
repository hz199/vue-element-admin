import { setItem } from '@/utils/localStorage'

const state = {
  /**
   * 侧边栏导航是否展开状态
   */
  sliderCollapse: false,
  /**
   * 当前路由地址
   */
  currentRouter: '/'
}

const getters = {
  getSliderCollapse: state => state.sliderCollapse,
  getCurrentRouter: state => state.currentRouter
}

const mutations = {
  setSliderCollapse (state) {
    state.sliderCollapse = !state.sliderCollapse
  },
  setCurrentRouter (state, path) {
    setItem('currentRouter', path)
    state.currentRouter = path
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
