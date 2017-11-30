import axios from 'axios'

import { baseUrl } from '@/constants/url.const.js'

let fetcher = axios.create({
    // method: 'post',
  baseURL: baseUrl,
  withCredentials: true,
  method: 'get', // default
    // timeout: 10000, // 超时设置
  headers: {
    'Acces-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'
  }
})

export default fetcher
