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
  <div class="bd absolute pd48" v-for="list in dataJson">
    <ul class="entryList mt0">
        <li>
            <div>
                <div class="couponImg style">
                    <img :src="list.shopImg" class="couponImg1" alt="">
                </div>
                <div class="inforList">
                    <p class="clearfix">
                        <span class="left shopsName">{{list.shopsShoppingName}}</span>
                        <button class="btnCollectioning right" v-if="list.collectionId==this.collection" @click="onCollection()">收藏商铺</button>
                        <button class="btnCollectioning right" v-if="list.collectionId==this.cancelCollection" @click="onCancelCollection()">取消收藏</button>
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
    <div id="shopsShopping" class="shopsShopping">
        <p style="color: #333;">全部商品</p>
        <ul class="shoppingList style clearfix pb0">
            <li v-for="shopList in list.shopList" :class="{'mr0':shopList.mr0}">
                <a v-link="'/category/shopsShoppingInfor'" class="shop_div">
                    <div class="shop_list_bg shop_list_bg{{shopList.class}}"></div>
                    <div class="shop_infor">
                        <p class="tile">{{shopList.title}}</p>
                        <p class="clearfix">
                            <span class="left">
                                <span class="oldMoney">￥{{shopList.newMoney}}</span>
                                ￥{{shopList.oldMoney}}
                            </span>
                        </p>
                        <p class="clearfix">
                            <span class="right shoppingNum">
                                销量{{shopList.saleNum}}
                            </span>
                        </p>
                    </div>
                </a>
            </li>
        </ul>
    </div>
</div>
<div class="foot">
    <ul class="tabMenu clearfix">
        <li class="active">
            <a v-link="'/shops/shopsInfor'">
                <i class="fa fa-home"></i><br/>
                <span>全部商品</span>
            </a>
        </li>
        <li>
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
          dataJson:[]
        }
      },
      ready () {
        document.title = '商铺'
        this.$http.get('../../static/data/shopsInfor.json').then(function(response){
           this.dataJson = response.data
        }, function(response){
          // 响应错误回调
        })
      },
      methods: {
        onShow: function () {
          this.hide = !this.hide
        },
        onCancelCollection:function(){
          this.collection = 0
          this.cancelCollection = 1
        },
        onCollection:function(){
          this.collection = 1
          this.cancelCollection = 0
        },
        returnPage:function(){
          window.history.go(-1)
        }
      }
    }
</script>
