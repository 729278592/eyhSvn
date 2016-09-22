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
<div class="bd absolute pt">
    <div class="applicatioOpetion">
        <ul class="applicatioNav clearfix">
            <li>
                <a :class="{'active':this.shoppingActive}" @click="selectShopping()">商品收藏</a>
            </li>
            <li>
                <a :class="{'active':this.shopsActive}" @click="selectShops()">商铺收藏</a>
            </li>
        </ul>
    </div>
    <div id="Collection">
      <ul class="entryList styleHide mt0":class="{'active':this.shoppingActive}">
          <li v-for="shoppingList in list">
              <div>
                  <div class="couponImg style">
                      <img :src="shoppingList.src" class="couponImg1" alt="">
                  </div>
                  <div class="inforList">
                      <p class="clearfix top">
                          <span class="left shopsName">{{shoppingList.title}}</span>
                      </p>
                      <p>
                          <span class="Invalid" v-if="shoppingList.invalidId==invalid">失效</span>
                      </p>
                      <p class="clearfix bottom">
                          <span class="left money">￥<span class="verdana">{{shoppingList.allMoney}}</span></span>
                          <button class="btnCollection right" @click="showModal(shoppingList)">取消收藏</button>
                      </p>
                  </div>
              </div>
          </li>
      </ul>
      <ul class="entryList styleHide mt0" :class="{'active':this.shopsActive}">
          <li v-for="shopsList in list">
              <div>
                  <div class="couponImg style">
                      <img :src="shopsList.src" class="couponImg1" alt="">
                  </div>
                  <div class="inforList">
                      <p class="clearfix top">
                          <span class="left shopsName">{{shopsList.title}}</span>
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
                      <p class="clearfix bottom">
                          <button class="btnCollection right" @click="showModal(shopsList)">取消收藏</button>
                      </p>
                  </div>
              </div>
          </li>
      </ul>
      <div class="notConTip hide">
          <img src="../../../static/images/notContent.png" alt=""/>
          <p class="notInfor">
              暂无数据
          </p>
      </div>
    </div>
   <div class="weui_dialog_confirm modal-mask" id="dialog1"  v-show="show" transition="modal">
      <div class="weui_mask"></div>
      <div class="weui_dialog weui-dialog-transition">
          <div class="weui_dialog_hd"><strong class="weui_dialog_title">确定取消收藏？</strong></div>
          <div class="weui_dialog_ft">
              <a href="javascript:;" class="weui_btn_dialog default" @click="cancleDelete()">取消</a>
              <a href="javascript:;" class="weui_btn_dialog primary" @click="sureDeleta(shopping)">确定</a>
          </div>
      </div>
    </div>
</div>
</template>
<script>
  export default {
      data () {
        return {
          show: false,
          shops:"",
          hide:true,
          invalid:1,
          shopsActive:false,
          shoppingActive:true,
          list:[]
        }
      },
      ready () {
        document.title = '我的消息'
        this.$http.get('../../static/data/collectionShopping.json').then(function(response){
           this.list = response.data
        }, function(response){
          // 响应错误回调
        })
      },
      methods: {
        onShow: function () {
          this.hide = !this.hide
        },
        selectShops:function(){
           this.shopsActive=true
           this.shoppingActive=false
          this.$http.get('../../static/data/collectionShops.json').then(function(response){
             this.list = response.data
          }, function(response){
            // 响应错误回调
          })
        },
        selectShopping:function(){
          this.shopsActive=false
          this.shoppingActive=true
          this.$http.get('../../static/data/collectionShopping.json').then(function(response){
             this.list = response.data
          }, function(response){
            // 响应错误回调
          })
        },
         showModal:function(shopping){
            this.show = true
            this.shops = shopping
         },
         cancleDelete:function(){
            this.show = false
         },
         sureDeleta:function(){
            this.show = false
            for(var i=0;i<this.list.length;i++){
              this.list.$remove(this.shops)
            }
         },
         returnPage:function(){
           window.history.go(-1)
         }
      }
    }
</script>
