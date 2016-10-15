import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueProgressBar   from 'vue-progressbar'
import FastClick from 'fastclick'
import App from './App'
import router from './router'
import validator from './validator'
import authService from './api/authService'
import mchAuthService from './api/mchAuthService'

Vue.use(validator)
Vue.use(VueProgressBar)
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(Vuex)

//http 设置
Vue.http.options.emulateJSON = true
Vue.http.options.credentials = true

Vue.http.interceptors.push((request, next)=>{
  // 这里对请求体进行处理
  request.headers = request.headers || {}

  next((response) => {
    var status = response.data.status
    // 这里可以对响应的结果进行处理
    if (status === "notLogin") {
      authService.logout();
      window.router.go('/auth/personLogin')
    } else if(status === "mchNotLogin") {
      mchAuthService.logout();
      window.router.go('/auth/login')
    }
  })
})

//防止刷新跳转登录页面
authService.checkAuth()
mchAuthService.checkAuth()
FastClick.attach(document.body)

// 全局的前置钩子函数，在路由切换开始时调用
router.beforeEach((transition) => {
    window.scrollTo(0, 0)

  if (transition.to.auth) {
    if (authService.user.authenticated) {
      transition.next()
    } else {
      let redirect = encodeURIComponent(transition.to.path)
      transition.redirect('/auth/personLogin?redirect=' + redirect)
    }
  }
  else if (transition.to.mchAuth) {
    if (mchAuthService.user.authenticated) {
      transition.next()
    } else {
      let redirect = encodeURIComponent(transition.to.path)
      transition.redirect('/auth/login?redirect=' + redirect)
    }
  }
  else {
    transition.next()
  }
})

router.start(App, 'app')
window.router = router







