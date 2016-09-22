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

    <div id="order">
      <ul class="orderList">
          <li v-for="shop in list">
              <div class="orderHead clearfix">
                  <span class="orderNum left">{{shop.name}}</span>
                  <span class="time right"><span class="verdana">{{shop.time}}</span></span>
              </div>
              <a v-for="shopping in shop.shoppings" v-link="'/user/orderInfor'">
                  <div class="orderCon">
                      <div class="orderImg" v-html="shopping.img"></div>
                      <div class="orderInfor">
                          <p class="top clearfix">
                              <span class="left">{{shopping.title}}</span>
                          </p>
                          <p class=" ">
                              <span class="color">{{shopping.color}}</span>
                          </p>
                          <p class="bottom clearfix">
                              <span class="left">￥<span class="verdana">{{shopping.price}}</span></span>
                              <span class="right">x{{shopping.num}}</span>
                          </p>
                      </div>
                  </div>
              </a>
              <div class="orderFt">
                  <div class="weui_cells mt0">
                      <div class="weui_cell">
                          <div class="weui_cell_bd weui_cell_primary">
                              <p>共{{shop.allNum}}件商品</p>
                          </div>
                          <div class="weui_cell_ft style">总计 : ￥{{shop.allMoney}} (运费￥{{shop.freight}})</div>
                      </div>
                  </div>
                  <div class="opreationBtn clearfix">
                      <a class="btn right">确认收货</a>
                      <a class="btn right">申请退款</a>
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
          list:[]
        }
      },
      ready () {
        document.title = '已收货-个人'
        this.$http.get('../../static/data/waitGetGoodsOrderPerson.json').then(function(response){
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
