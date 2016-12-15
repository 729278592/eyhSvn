<template>
    <div class="hd">
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
<div class="bd absolute pd48">
  <ul class="category_menu">
      <li class="clearfix" v-for="shopList in list">
          <div class="left"  v-link="{ name: 'shopplingList', params: {shopplingListId: shopList.id,type:'p'}}">
              <div class="shopping_img2"></div>
              <span>{{shopList.name}}</span>
          </div>
          <div class="right">
              <ul class="shopping_category_menu clearfix">
                  <li v-for="secondShop in shopList.children">
                      <a v-link="{ name: 'shopplingList', params: {shopplingListId: secondShop.id,type:'c'}}">{{secondShop.name}}</a>
                  </li>
              </ul>
          </div>
      </li>
  </ul>
</div>
<div class="foot">
  <ul class="tabMenu clearfix">
      <li>
           <a v-link="'/'">
              <i class="fa fa-home"></i><br/>
              <span>商城</span>
          </a>
      </li>
      <li class="active">
          <a v-link="'/category/index'">
              <i class="fa fa-bars"></i><br/>
              <span>分类</span>
          </a>
      </li>
      <li>
          <a v-link="'/shops/shopsList'">
              <i class="fa fa-tag"></i><br/>
              <span>商铺</span>
          </a>
      </li>
      <li class="last">
          <a v-link="'/user/personCenter'">
              <i class="fa fa-user"></i><br/>
              <span>我的</span>
          </a>
      </li>
  </ul>
</div>
</template>

<style>
  .shop_cat{top:0.3rem;}
</style>

<script>
    import userService from '../../api/userService'
     import mchService from '../../api/mchService'
    import authService from '../../api/authService'
  export default {
      components: {
        //注册组件
      },
      data () {
        return {
          hide:true,
          list:[],
          isLogin:false
        }
      },
      ready () {
        document.title = '分类'
        mchService.getAllCategory(this)
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
        loginOut:function(){
           userService.loginOut(this)
        }
      }
    }
</script>
