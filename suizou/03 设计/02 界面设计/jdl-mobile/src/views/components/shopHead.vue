<template>
    <div class="hd" v-if="isLogin==false">
          <a class="return" @click="returnPage()">
              <i class="fa fa-angle-left"></i>
          </a>
          家得利
          <div class="right nav_block">
            <a class="dot_block" @click.stop="onShow">
              <i class="fa fa-home"></i>
            </a>
            <ul class="nav_link" :class="{'hide':hide}">
                <li>
                    <a v-link="'/shops/index'">
                        首页
                    </a>
                </li>
                <li>
                    <a v-link="'/auth/login'">
                        登录
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div class="hd" v-if="isLogin==true">
      <a class="return" @click="returnPage()">
          <i class="fa fa-angle-left"></i>
      </a>
      家得利
      <div class="right nav_block">
        <a class="dot_block" @click.stop="onShow">
          <i class="fa fa-home"></i>
        </a>
        <ul class="nav_link" :class="{'hide':hide}">
            <li>
                <a v-link="'/shops/index'">
                    商家中心
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
  import mchAuthService from '../../api/mchAuthService'
  import mchService from '../../api/mchService'
  export default{
      data () {
        return {
          hide:true,
          isLogin:false
        }
      },
      ready(){
        if (mchAuthService.isLogin()) {
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
            mchService.mchLoginOut(this)
          }
      }
  }
</script>
