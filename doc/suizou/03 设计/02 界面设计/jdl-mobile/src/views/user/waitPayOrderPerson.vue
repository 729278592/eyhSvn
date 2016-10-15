<template>
  <Bar></Bar>
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
                      <a class="btn right"  @click="showModal(shop)">删除</a>
                      <a class="btn right" v-link="'/user/payChioce'">付款</a>
                  </div>
              </div>
          </li>
        </ul>
      </div>
  </div>
  <div class="weui_dialog_confirm modal-mask" id="dialog1"  v-show="show">
      <div class="weui_mask"></div>
      <div class="weui_dialog">
          <div class="weui_dialog_hd"><strong class="weui_dialog_title">确定删除订单？</strong></div>
          <div class="weui_dialog_ft">
              <a href="javascript:;" class="weui_btn_dialog default" @click="cancleDelete()">取消</a>
              <a href="javascript:;" class="weui_btn_dialog primary" @click="sureDeleta(shopping)">确定</a>
          </div>
      </div>
    </div>
</template>
<script>
  import Bar from '../components/headBar.vue'
  import userService from '../../api/userService'
  export default {
     components: {
          Bar
      },
      data () {
        return {
         show: false,
         shops:"",
         list: [],
         hide: true
        }
      },
      ready () {
        document.title = '待付款-个人'




        this.$http.get('../../static/data/waitPayOrderPerson.json').then(function(response){
           this.list = response.data
        }, function(response){
          // 响应错误回调
        })
      },
      methods: {
        onShow: function () {
          this.hide = !this.hide
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
       }
      }
    }
</script>
