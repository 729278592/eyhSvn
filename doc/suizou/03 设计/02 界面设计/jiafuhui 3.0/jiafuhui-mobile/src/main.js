import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueProgressbar from 'vue-progressbar'
import FastClick from 'fastclick'
import * as filters from './filters'
import App from './App'
// import store from './vuex/index/store'
import router from './routers'

// Resource
Vue.use(VueProgressbar)
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(Vuex)

// Directive

// Filters
Vue.filter('date', filters.dateFilter)

Vue.http.options.emulateJSON = true

// 全局的前置钩子函数，在路由切换开始时调用
router.beforeEach((transition) => {
  window.scrollTo(0, 0)
  FastClick.attach(document.body)
  if (transition.to.auth) {
    if (true) {
      transition.next()
    } else {
      let redirect = encodeURIComponent(transition.to.path)
      transition.redirect('/login?redirect=' + redirect)
    }
  } else {
    transition.next()
  }
})
router.start(App, 'app')
