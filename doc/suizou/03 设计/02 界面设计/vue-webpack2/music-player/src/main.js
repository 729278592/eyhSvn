import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import VueProgressBar   from 'vue-progressbar'
import App from './App'
import router from './router'
import validator from './validator'



Vue.use(validator)
Vue.use(VueProgressBar  , {
  color: 'rgb(143, 255, 199)',
  failedColor: 'red',
  height: '2px'
})
Vue.use(VueResource)
Vue.use(VueRouter)
Vue.use(Vuex)


// 全局的前置钩子函数，在路由切换开始时调用
router.beforeEach((transition) => {
  window.scrollTo(0, 0)
if (transition.to.auth) {
  if (true) {
    transition.next()
  }
  else {
    let redirect = encodeURIComponent(transition.to.path)
    transition.redirect('/login?redirect=' + redirect)
  }
} else {
  transition.next()
}
})







router.start(App, 'app')







