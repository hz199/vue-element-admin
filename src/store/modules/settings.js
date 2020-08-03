const state = {
  /**
   * 侧边栏导航是否展开状态
   */
  sliderCollapse: false
}

const getters = {
  getSliderCollapse: state => state.sliderCollapse
}

const mutations = {
  setSliderCollapse (state) {
    state.sliderCollapse = !state.sliderCollapse
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
