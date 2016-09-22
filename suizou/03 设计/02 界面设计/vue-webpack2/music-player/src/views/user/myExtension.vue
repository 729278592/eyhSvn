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
      <ul class="applicatioNav style clearfix">
          <li>
              <a :class="{'active':this.memberActive}" @click="selectMember()">会员</a>
          </li>
          <li>
              <a :class="{'active':this.bussionActive}" @click="selectBussion()">商家</a>
          </li>

          <li>
              <a :class="{'active':this.shoppingActive}" @click="selectShopping()">商品</a>
          </li>
      </ul>
  </div>
  <div id="extension">
  <ul class="merberMenu styleHide" :class="{'active':this.memberActive}">
      <li v-for="memberList in list">
          <p class="clearfix">
              <span class="left phone verdana">{{memberList.title}}</span>
              <span class="right score">收益
                  <span class="color"><span class="verdana">{{memberList.profit}}</span>积分</span>
              </span>
          </p>

          <p class="clearfix">
              <span class="left leave">{{memberList.memberLeave}}</span>
              <span class="right money">累计交易
                  <span class="verdana">￥{{memberList.allConsumption}}</span>
              </span>
          </p>

          <p class="clearfix">
              <span class="left time">加入时间 : <span class="verdana">{{memberList.time}}</span></span>
          </p>
      </li>
  </ul>
    <ul class="merberMenu styleHide" :class="{'active':this.bussionActive}">
        <li v-for="bussionList in list">
            <p class="clearfix">
                <span class="left phone verdana">{{bussionList.title}}</span>
                <span class="right score">收益
                    <span class="color"><span class="verdana">{{bussionList.profit}}</span>积分</span>
                </span>
            </p>

            <p class="clearfix">
                <span class="left leave">{{bussionList.memberLeave}}</span>
                <span class="right money">累计交易
                    <span class="verdana">￥{{bussionList.allConsumption}}</span>
                </span>
            </p>

            <p class="clearfix">
                <span class="left time">加入时间 : <span class="verdana">{{bussionList.time}}</span></span>
            </p>
        </li>
    </ul>
    <ul class="entryList mt0 styleHide" :class="{'active':this.shoppingActive}">
        <li v-for="shoppingList in list">
            <div>
                <div class="couponImg style">
                    <img :src="shoppingList.src" class="couponImg1" alt="">
                </div>
                <div class="inforList">
                    <p class="clearfix">
                        <span class="left shopsName">{{shoppingList.title}}</span>
                        <span class="right"><span class="verdana">{{shoppingList.time}}</span></span>
                    </p>
                    <p class="clearfix">
                        <span class="left">收益</span>
                        <span class="right"><span class="verdana">{{shoppingList.profit}}</span>积分</span>
                    </p>
                    <p class="clearfix">
                        <span class="left">累计消费</span>
                        <span class="right">￥<span class="verdana">{{shoppingList.allConsumption}}</span></span>
                    </p>
                    <p class="clearfix">
                        <span class="left money">￥<span class="verdana">{{shoppingList.allMoney}}</span></span>
                    </p>
                </div>
            </div>
        </li>
    </ul>
  </div>
</div>
</template>
<script>
  export default {
      data () {
        return {
          hide:true,
          memberActive:true,
          bussionActive:false,
          shoppingActive:false,
          list:[]
        }
      },
      ready () {
        document.title = '我的收藏'
        this.$http.get('../../static/data/extensionMember.json').then(function(response){
           this.list = response.data
        }, function(response){
          // 响应错误回调
        })
      },
      methods: {
        onShow: function () {
          this.hide = !this.hide
        },
         selectMember:function(){
           this.memberActive=true
           this.bussionActive=false
           this.shoppingActive=false
           this.$http.get('../../static/data/extensionMember.json').then(function(response){
               this.list = response.data
            }, function(response){
              // 响应错误回调
            })
         },
         selectBussion:function(){
            this.memberActive=false
            this.bussionActive=true
            this.shoppingActive=false
           this.$http.get('../../static/data/extensionBussion.json').then(function(response){
              this.list = response.data
           }, function(response){
             // 响应错误回调
           })
         },
         selectShopping:function(){
           this.memberActive=false
           this.bussionActive=false
           this.shoppingActive=true
           this.$http.get('../../static/data/extensionShopping.json').then(function(response){
              this.list = response.data
           }, function(response){
             // 响应错误回调
           })
         },
         returnPage:function(){
           window.history.go(-1)
         }
      }
    }
</script>
