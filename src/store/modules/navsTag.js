import { setItem } from '@/utils/localStorage'

const state = {
  // 菜单导航
  tagPages: [
    {
      path: '/',
      title: '首页',
      flag: true
    }
  ],
  tagPath: ['/'],
  currentRouter: {}
}

const getters = {
  getTagPages: state => state.tagPages,
  getTagPath: state => state.tagPath,
  currentRouter: state => state.currentRouter
}

const mutations = {
  // 删除一个
  deleteOneTag (state, payload) {
    if (payload.ref === 'currentTagPage') {
      state.tagPages[payload.index - 1].ref = 'currentTagPage'
      state.tagPages[payload.index - 1].type = 'primary'
    }

    state.tagPages.splice(payload.index, 1)
    state.tagPath.splice(payload.index, 1)
    setItem('TagPages', JSON.stringify(state.tagPages))
    setItem('TagPath', JSON.stringify(state.tagPath))
  },

  // 删除全部
  deleteAllTag (state) {
    state.tagPages.splice(1)
    state.tagPages[0].ref = 'currentTagPage'
    state.tagPages[0].type = 'primary'
    state.tagPath.splice(1)
    setItem('TagPages', JSON.stringify(state.tagPages))
    setItem('TagPath', JSON.stringify(state.tagPath))
  },

  // 删除其他
  deleteOthersTag (state) {
    state.tagPages = state.tagPages.filter(item => {
      return item.ref === 'currentTagPage' || item.path === '/'
    })

    state.tagPages.forEach(oItem => {
      if (oItem.ref === 'currentTagPage') {
        state.tagPath = state.tagPath.filter(item => {
          return item === oItem.path || item === '/'
        })
      }
    })

    setItem('TagPages', JSON.stringify(state.tagPages))
    setItem('TagPath', JSON.stringify(state.tagPath))
  },

  /**
   * 设置导航 缓存里面
   * @param {*} state
   * @param {*} payload
   */
  setTagPage (state, payload) {
    // 当前路由
    const currentRoute = {
      path: payload.path,
      title: payload.meta.title
    }
    const tagPages = JSON.parse(window.localStorage.getItem('TagPages'))
    const tagPath = JSON.parse(window.localStorage.getItem('TagPath'))

    let initTagPage = tagPages || [{ path: '/', title: '首页', flag: true }]
    let initTagPath = tagPath || ['/']

    if (initTagPath.indexOf(payload.path) < 0) {
      initTagPage.push(currentRoute)
      initTagPath.push(payload.path)
    }

    initTagPage = initTagPage.map(item => {
      if (item.path === currentRoute.path) {
        item.type = 'primary'
        item.ref = 'currentTagPage'
        return item
      } else {
        item.ref = ''
        item.type = ''
        return item
      }
    })

    setItem('currentRoute', JSON.stringify(currentRoute))
    setItem('TagPages', JSON.stringify(initTagPage))
    setItem('TagPath', JSON.stringify(initTagPath))
    // end
  },

  setNewTagData (state, { currentRoute, tagPages, tagPath }) {
    state.currentRouter = currentRoute || null
    state.tagPages = tagPages
    state.tagPath = tagPath
  }
}

const actions = {
  //
  setStoreTagpage (state) {
    const tagPages = JSON.parse(window.localStorage.getItem('TagPages'))
    const tagPath = JSON.parse(window.localStorage.getItem('TagPath'))
    const currentRoute = JSON.parse(window.localStorage.getItem('currentRoute'))

    state.commit('setNewTagData', {tagPages, tagPath, currentRoute})
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
