import Vue from 'vue'
// import Vuex from 'vuex'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
// import VueProgressbar from 'vue-progressbar'
import App from './App'
import router from './router'



/* eslint-disable no-new */
// Vue.use(VueProgressbar, {
//   color: 'rgb(143, 255, 199)',
//   failedColor: 'red',
//   height: '2px'
// })

Vue.use(VueResource)
Vue.use(VueRouter)
// Vue.use(Vuex)

router.start(App, 'app')







