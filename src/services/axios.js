import axios from 'axios'
// import { Loading } from 'element-ui'
// import Vue from 'vue'

// let loadingInstance1

const apiBaseURL =
  process.env.NODE_ENV === 'development'
    ? 'https://www.fastmock.site/mock/d0f2daa2f0f6b981661fc60e0a1c02d8'
    : 'https://www.fastmock.site/mock/d0f2daa2f0f6b981661fc60e0a1c02d8'

const instance = axios.create({
  baseURL: apiBaseURL,
  timeout: 5000
})

instance.interceptors.request.use((config) => {
  // 全局请求loading
  // loadingInstance1 = Loading.service({
  //   fullscreen: true,
  //   background: 'rgba(0, 0, 0, 0.4)'
  // })
  return config
}, (error) => {
  // Vue.nextTick(() => {
  //   loadingInstance1.close()
  // })
  return Promise.reject(error)
})

instance.interceptors.response.use((response) => {
  // Vue.nextTick(() => {
  //   loadingInstance1.close()
  // })
  return Promise.resolve(response.data)
}, (err) => {
  // Vue.nextTick(() => {
  //   loadingInstance1.close()
  // })
  return Promise.reject(err)
})

export default instance
