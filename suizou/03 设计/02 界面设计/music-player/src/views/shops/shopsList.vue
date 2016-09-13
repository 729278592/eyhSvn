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
    <div class="mask-bg hide"></div>
    <section class="">
        <ul class="flexbox">
            <li data="0">
                <a href="javascript:;">
                    <span>排序</span>
                    <i class="fa fa-caret-up"></i>
                </a>
            </li>
            <li data="1">
                <a href="javascript:;">
                    <span>分类</span>
                    <i class="fa fa-caret-up"></i>
                </a>
            </li>
            <li data="2">
                <a href="javascript:;">
                    <span>地区</span>
                    <i class="fa fa-caret-up"></i>
                </a>
            </li>
        </ul>
        <div class="cont-box">
            <div class="cont">
                <ul class="cont-menu">
                    <li>
                        渝中区
                    </li>
                    <li>
                        渝中区
                    </li>
                    <li>
                        渝中区
                    </li>
                    <li>
                        渝中区
                    </li>
                </ul>
            </div>
            <div class="cont">
                <ul class="cont-menu">
                    <li>
                        四川
                    </li>
                    <li>
                        四川
                    </li>
                    <li>
                        四川
                    </li>
                    <li>
                        四川
                    </li>
                </ul>
            </div>
            <div class="cont">
            </div>
        </div>
    </section>
    <ul class="entryList mt0 style">
        <li v-for="shopsList in list">
            <div v-link="'/shops/shopsInfor'">
                <div class="couponImg style">
                    <img :src="shopsList.shopImg" class="couponImg1" alt="">
                </div>
                <div class="inforList">
                    <p class="clearfix">
                        <span class="left shopsName">{{shopsList.shopsShoppingName}}</span>
                        <span class="right color">{{shopsList.distance}}km</span>
                    </p>
                    <div class="clearfix">
                        <ul class="starList clearfix">
                            <li class="active">
                                <i class="fa fa-star"></i>
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
                        <span class="left">销量{{shopsList.sale}}</span>
                        <span class="right">共{{shopsList.allNum}}件商品</span>
                    </p>
                </div>

            </div>
            <div class="shopsInfor">
                <p>
                    <span class="span_icon span_yy"></span>
                    <span>主营：{{shopsList.shopsType}}</span>
                </p>

                <p>
                    <span class="span_icon span_address"></span>
                    <span>地址：{{shopsList.shopsAddress}}</span>
                </p>
                <div class="shopsA">
                    <span>
                        <a v-link="'/shops/shopsInfor'">逛逛商铺</a>
                    </span>
                    <span>
                        <a class="btnCollectioning" v-if="shopsList.collectionId==collection" @click="onCollection(shopsList)">收藏商铺</a>
                        <a class="btnCollectioning" v-if="shopsList.collectionId==cancelCollection" @click="onCancelCollection(shopsList)">取消收藏</a>
                    </span>
                    <span>
                        <a href="contactShopsShopping.html">联系商铺</a>
                    </span>
                </div>
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
       <li>
           <a v-link="'/category/index'">
               <i class="fa fa-bars"></i><br/>
               <span>分类</span>
           </a>
       </li>
       <li class="active">
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
          collection:true,
          cancelCollection:false,
          list:[]
        }
      },
      ready () {
        document.title = '商铺'
        this.$http.get('../../static/data/shopsList.json').then(function(response){
           this.list = response.data
        }, function(response){
          // 响应错误回调
        })
      },
      methods: {
        onShow: function () {
          this.hide = !this.hide
        },
       onCancelCollection:function(shopsList){
         shopsList.collectionId = !shopsList.collectionId
       },
       onCollection:function(shopsList){
         shopsList.collectionId = !shopsList.collectionId
       },
       returnPage:function(){
         window.history.go(-1)
       }
      }
    }
</script>
