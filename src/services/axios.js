import axios from 'axios'

const apiBaseURL =
  process.env.NODE_ENV === 'development'
    ? 'https://www.fastmock.site/mock/d0f2daa2f0f6b981661fc60e0a1c02d8'
    : 'https://www.fastmock.site/mock/d0f2daa2f0f6b981661fc60e0a1c02d8'

const instance = axios.create({
  baseURL: apiBaseURL,
  timeout: 5000
})

instance.interceptors.request.use((config) => {
  return config
}, (error) => {
  return Promise.reject(error)
})

instance.interceptors.response.use((response) => {
  return Promise.resolve(response.data)
}, (err) => {
  return Promise.reject(err)
})

export default instance
