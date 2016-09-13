<template>
  <div class="hd">
      <a>
          <a class="return" @click="returnPage()"></a>
      </a>
      消费全反
      <div class="right nav_block">
        <a v-link="'/user/shopCart'" class="shop_cat"></a>
        <a class="dot_block" @click.stop="onShow"></a>
        <ul class="nav_link" :class="{'hide':hide}">
          <li>
              <a v-link="'/user/myMessage'">
                  消息
              </a>
          </li>
          <li>
              <a v-link="'/home'">
                  首页
              </a>
          </li>
      </ul>
  </div>
</div>
<div class="bd absolute pd48">
  <ul class="category_menu">
      <li class="clearfix" v-for="shopList in list">
          <div class="left" v-link="'/category/shopplingList'">
              <div class="shopping_img{{shopList.firstNavImg}}"></div>
              <span>{{shopList.firstNavName}}</span>
          </div>
          <div class="right">
              <ul class="shopping_category_menu clearfix">
                  <li v-for="secondShop in shopList.secondNav">
                      <a v-link="'/category/shopplingList'">{{secondShop.secondNavName}}</a>
                  </li>
              </ul>
          </div>
      </li>
  </ul>
</div>
<div class="foot">
  <ul class="tabMenu clearfix">
      <li>
          <a v-link="'/home'">
              <i class="fa fa-home"></i><br/>
              <span>首页</span>
          </a>
      </li>
      <li class="active">
          <a v-link="'/category/index'">
              <i class="fa fa-bars"></i><br/>
              <span>分类</span>
          </a>
      </li>
      <li>
          <a v-link="'/shops/index'">
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
<script>
  export default {
      data () {
        return {
          hide:true,
          list:[]
        }
      },
      ready () {
        document.title = '分类'
        this.$http.get('../../static/data/categoryIndex.json').then(function(response){
           this.list = response.data
        }, function(response){
          // 响应错误回调
        })
      },
      methods: {
        onShow: function () {
          this.hide = !this.hide
        },
         returnPage:function(){
           window.history.go(-1)
         }
      }
    }
</script>
