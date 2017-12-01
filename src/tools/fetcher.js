import axios from 'axios'

import { baseUrl } from '@/constants/url.const'
import { serializeReqParams } from '@/tools/util'

let fetcher = axios.create({
    // method: 'post',
  baseURL: baseUrl,
  withCredentials: false,
  method: 'get', // default
  timeout: 10000, // 超时设置
  headers: {
    'Acces-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
})

fetcher.interceptors.request.use((config) => {
  if (config.method === 'get') {
    config.params = serializeReqParams(config.params)
  } else if (config.method === 'post') {
    const ak = sessionStorage.getItem('accessToken')
    config.data = Object.assign({}, { accesstoken: ak }, config.data)
  }
  // console.log('interceptors use config:', config)
  return config
}, err => Promise.reject(err))

export default fetcher
