<template>
    <div class="hd">
          <a class="return" @click="returnPage()">
              <i class="fa fa-angle-left"></i>
          </a>
          家得利
          <div class="right nav_block">
            <a v-link="'/user/shopCart'" class="shop_cat"></a>
            <a class="dot_block" @click.stop="onShow">
              <i class="fa fa-user"></i>
            </a>
            <ul class="nav_link" :class="{'hide':hide}" v-if="isLogin==false">
                <li>
                    <a v-link="'/'">
                        首页
                    </a>
                </li>
                <li>
                    <a v-link="'/auth/personLogin'">
                        登录
                    </a>
                </li>
            </ul>
             <ul class="nav_link" :class="{'hide':hide}" v-if="isLogin==true">
                <li>
                    <a v-link="'/user/personCenter'">
                        个人中心
                    </a>
                </li>
                <li>
                    <a @click="loginOut()">
                        退出
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>

<style>
  .shop_cat{top:0.34rem;}
</style>

<script>
  import authService from '../../api/authService'
 import userService from '../../api/userService'
  export default{
      data () {
        return {
          hide:true,
          isLogin:false
        }
      },
      ready(){
        if (authService.isLogin()) {
            this.isLogin = true
          }else{
            this.isLogin = false
          }
      },
      methods: {
        onShow: function () {
          this.hide = !this.hide
        },
        returnPage:function(){
          window.history.go(-1)
        },
        loginOut:function(){
            userService.loginOut(this)
          }
      }
  }
</script>
