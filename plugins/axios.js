import vue from 'vue'
import axios from 'axios'

const service = axios.create({
  baseURL: '/api'
})

// 添加拦截器

// 挂载service
vue.prototype.$http = service

export const http = service
