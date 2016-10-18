/**
 * Created by WHB on 2016/9/29.
 */
import router from '../router'
import {API_ROOT} from '../config'
// URL and endpoint constants
const API_URL = 'http://192.168.0.102:8088/fric/'
const LOGIN_URL = API_ROOT + 'mobile/mchCheckUser.do'

export default {
  // User object will let us check authentication status
  user: {
    authenticated: false
  },

  // Send a request to the login URL and save the returned JWT
  login(context, creds, redirect,loginIng) {
    context.$http.post(LOGIN_URL, creds).then((response) => {
      // success callback
      var result = response.json()

      if (result.status == 'ok') {
        loginIng = "登录中..."
        localStorage.setItem('mch_token', result.status)
        this.user.authenticated = true
        // Redirect to a specified route
        if(redirect) {
          router.go(redirect)
        }
      } else if(result.status =="mchNotPay"){
        context.show = true
        context.orderId=result.datas.orderId
        context.amount=result.datas.amount
      }
      else {
        alert(result.message)
      }
    },(response) => {
      // error callback
      context.error = response
      console.log(context.error)
    })
  },
  

  // To log out, we just need to remove the token
  logout() {
    localStorage.removeItem('mch_token')
    this.user.authenticated = false
  },

  checkAuth() {
    var jwt = localStorage.getItem('mch_token')
    if(jwt) {
      this.user.authenticated = true
    }
    else {
      this.user.authenticated = false
    }
  },

  isLogin() {
    return this.user.authenticated
  },

  // The object to be passed as a header for authenticated requests
  getAuthHeader() {
    return 'Bearer ' + localStorage.getItem('mch_token')
  }
}
