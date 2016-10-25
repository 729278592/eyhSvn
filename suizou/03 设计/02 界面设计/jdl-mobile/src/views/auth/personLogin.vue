<template>
  <div class="hd">
    <a class="return" @click="returnPage()">
        <i class="fa fa-angle-left"></i>
    </a>
    个人登录
    <div class="right nav_block">
      <a class="dot_block" @click.stop="onShow">
        <i class="fa fa-user"></i>
      </a>
      <ul class="nav_link" :class="{'hide':hide}">
          <li>
            <a v-link="'/'">
                首页
            </a>
          </li>

      </ul>
  </div>
</div>
  <div class="bd absolute pt">
    <validator name="validation">
      <form action="#" id="form" onsubmit="return false">
          <div class="weui_cells weui_cells_form mt0 wauto">
              <div class="weui_cell">
                  <div class="weui_cell_hd">
                      <label class="weui_label">
                          <span class="span_icon spa_phone"></span>
                      </label>
                  </div>
                  <div class="weui_cell_bd weui_cell_primary">
                        <input class="weui_input" @invalid="telonInvalid" initial="off" detect-change="off" v-model="mobile" id="mobile" type="tel" v-validate:mobile="['mobile']" placeholder="手机号">
                  </div>
              </div>
              <div class="weui_cell">
                  <div class="weui_cell_hd">
                      <label class="weui_label">
                          <span class="span_icon spa_lock"></span>
                      </label>
                  </div>
                  <div class="weui_cell_bd weui_cell_primary">
                      <input class="weui_input" @invalid="passwordInvalid" initial="off" detect-change="off" v-model="password" id="password" type="password" v-validate:password="['passw']" placeholder="密码"/>
                  </div>
              </div>
          </div>
          <div class="weui_btn_area mt10">
              <input type="submit" class="weui_btn weui_btn_primary" @click="save($event)" v-model="loginValue" value={{loginValue}}>
              <!--<a class="weui_btn weui_btn_primary" @click="save" v-link="'/shops/index'">登录</a>-->
          </div>
          <div class="weui_btn_area mt10 clearfix">
              <a class="btn_forget left" v-link="'/auth/personRegister'">立即注册</a>
              <a class="btn_forget right" v-link="'/auth/forget'">忘记密码</a>
          </div>
      </form>
    </validator>
    <Toast :toastshow.sync="toastshow" :toasttext="toasttext"></Toast>
</div>
</template>
<script>
  import Toast from '../components/toast.vue'
  import authService from '../../api/authService'
  export default {
      components: {
        //注册组件
          Toast
      },
      data () {
        return {
         toastshow:false,
         hide:true,
         mobile:"",
         toasttext:"",
         aginPassword:"",
         password:"",
         resUid:"",
         error: '',
         loginValue:"登录"
        }
      },
      ready () {
        document.title = '个人登录'
        if(authService.user.authenticated) {
          this.$route.router.go('/user/personCenter/')
        }
      },
      methods: {
       onShow: function () {
         this.hide = !this.hide
       },
       returnPage:function(){
         window.history.go(-1)
       },
       telonInvalid(){
           this.$set('toasttext','手机号不正确');
           this.$set('toastshow',true);
       },
       passwordInvalid(){
           this.$set('toasttext','密码不正确');
           this.$set('toastshow',true);
       },
       save: function(e){
         var that = this
         var mobile = that.$get('mobile')
         var password = that.$get('password');
         that.$validate(true, function () {
             if (that.$validation.invalid) {
             }
             else{
                var loginIng = that.loginValue
                var credentials = {
                  mobile: that.mobile,
                  password: that.password
                }
                var redirect = that.$route.query.redirect
                if(!redirect) {
                  redirect = '/user/personCenter/'
                } else {
                  redirect = decodeURIComponent(redirect)
                }
               authService.login(that,credentials, redirect,loginIng)
             }
         })
       }
      }
    }
</script>
