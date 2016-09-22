<template>
  <div class="hd">
      <a>
          <a class="return" @click="returnPage()"></a>
      </a>
      家得利
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
                  <a v-link="'/home/index'">
                      首页
                  </a>
              </li>
          </ul>
      </div>
  </div>
<div class="bd absolute pd48" v-for="list in list">
  <ul class="entryList mt0">
      <li>
          <div>
              <div class="couponImg style">
                  <img :src="list.shopImg" class="couponImg1" alt="">
              </div>
              <div class="inforList">
                  <p class="clearfix">
                      <span class="left shopsName">{{list.shopsShoppingName}}</span>
                      <button class="right btnCollectioning" v-if="list.collectionId==this.collection" @click="onCollection()">收藏商铺</button>
                      <button class="right btnCollectioning" v-if="list.collectionId==this.cancelCollection" @click="onCancelCollection()">取消收藏</button>
                  </p>
                  <div class="clearfix">
                      <ul class="starList clearfix">
                          <li class="active">
                              <i class="fa fa-star-o"></i>
                          </li>
                          <li>
                              <i class="fa fa-star-o"></i>
                          </li>
                          <li>
                              <i class="fa fa-star-o"></i>
                          </li>
                          <li>
                              <i class="fa fa-star-o"></i>
                          </li>
                          <li>
                              <i class="fa fa-star-o"></i>
                          </li>
                      </ul>
                  </div>
                  <p class="clearfix">
                      <span class="left">销量{{list.sale}}</span>
                      <span class="right">共{{list.allNum}}件商品</span>
                  </p>
              </div>
          </div>
      </li>
  </ul>
  <div class="weui_cells weui_cells_access mt10 top0" style="background: transparent;">
   <a class="weui_cell" v-link="'/shops/shopsInfor'" style="margin-bottom:10px;background:#fff;border-bottom:1px solid #dbdbdb;">
      <div class="weui_cell_bd weui_cell_primary">
          <p>
              <span class="text">
                  全部商品
              </span>
          </p>
      </div>
      <div class="weui_cell_ft"></div>
    <a class="weui_cell" v-link="'/shops/shoppingStyle'" v-for="shopping in list.shoppingType">
        <div class="weui_cell_bd weui_cell_primary">
            <p>
                <span class="text">
                    {{shopping.shoppingName}}
                </span>
            </p>
        </div>
        <div class="weui_cell_ft"></div>
    </a>
</div>
</div>
<div class="foot">
    <ul class="tabMenu clearfix">
        <li>
            <a v-link="'/shops/shopsInfor'">
                <i class="fa fa-home"></i><br/>
                <span>全部商品</span>
            </a>
        </li>
        <li class="active">
            <a v-link="'/shops/shopstype'">
                <i class="fa fa-navicon"></i><br/>
                <span>商品分类</span>
            </a>
        </li>
        <li>
            <a v-link="'/shops/shopsDetails'">
                <i class="fa fa-info-circle"></i><br/>
                <span>商品简介</span>
            </a>
        </li>
        <li class="last">
            <a v-link="'/shops/contactShopsShopping'">
                <i class="fa fa-mobile-phone"></i><br/>
                <span>联系商铺</span>
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
          collection:0,
          cancelCollection:1,
          list:[]
        }
      },
      ready () {
        document.title = '商品分类'
        this.$http.get('../../static/data/shopstype.json').then(function(response){
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
        },
        onCancelCollection:function(){
           this.collection = 0
           this.cancelCollection = 1
         },
        onCollection:function(){
           this.collection = 1
           this.cancelCollection = 0
        }
      }
    }
</script>
