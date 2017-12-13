import axios from 'axios'

<<<<<<< HEAD
import { baseUrl } from '@/constants/url.const.js'
=======
import { baseUrl } from '@/constants/url.const'
import { serializeReqParams } from '@/tools/util'
>>>>>>> spa-dev

let fetcher = axios.create({
    // method: 'post',
  baseURL: baseUrl,
<<<<<<< HEAD
  withCredentials: true,
  method: 'get', // default
    // timeout: 10000, // 超时设置
=======
  withCredentials: false,
  method: 'get', // default
  timeout: 10000, // 超时设置
>>>>>>> spa-dev
  headers: {
    'Acces-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
})

<<<<<<< HEAD
=======
fetcher.interceptors.request.use((config) => {
  const ak = sessionStorage.getItem('accessToken') || ''
  if (config.method === 'get') {
    // debugger
    if (!/^user\/.+/i.test(config.url)) {
      config.params.accesstoken = ak
    }
    config.params = serializeReqParams(config.params)
  } else if (config.method === 'post') {
    config.data = Object.assign({}, { accesstoken: ak }, config.data)
  }
  // console.log('interceptors use config:', config)
  return config
}, err => Promise.reject(err))

>>>>>>> spa-dev
export default fetcher
