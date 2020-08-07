import axios from './axios'

export const orderTableList = function(params) {
  return axios.get('/api/testOrder', {
    params: params
  })
}