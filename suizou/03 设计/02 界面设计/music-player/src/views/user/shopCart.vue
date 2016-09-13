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
  <div class="bd absolute pt">
      <div id="invoice">
        <ul class="invoiceList">
            <!--<li v-for="order in orders"  >-->
            <li v-for="order in orders" :class="{'mb0':order.last}"  >
                <div class="clearfix invoiceHead style">
                    <div class="weui_cells weui_cells_checkbox mt0 style1 inline_block">
                        <label class="weui_cell weui_check_labe style" for={{order.id}}>
                            <div class="weui_cell_hd">
                                <input type="checkbox" class="weui_check" checked = {{order.checked}} name="checkbox1" id={{order.id}} v-on:click='checkedAll(order)'/>
                                <i class="weui_icon_checked"></i>
                            </div>
                        </label>
                    </div>
                    <div class="inline_block style">
                        <span class="left">{{order.orderName}}</span>
                        <span class="right">
                            <i class="fa fa-angle-right"></i>
                        </span>
                    </div>
                </div>
                <div class="invoiceCon style">
                    <ul class="orderList style">
                        <li v-for="shopping in order.shoppings" :class="{'removeShop':shopping.removeShop}">
                            <div class="orderCon">
                                <div class="weui_cells weui_cells_checkbox mt0 style1 inline_block left5">
                                    <label class="weui_cell weui_check_labe style p0" for={{shopping.id}}>
                                        <div class="weui_cell_hd">
                                            <input type="checkbox" checked = {{shopping.checked}} class="weui_check" name="checkbox1" @click="checkedOne(shopping)" id={{shopping.id}} />
                                            <i class="weui_icon_checked"></i>
                                        </div>
                                    </label>
                                </div>
                                <div class="orderImg" v-html="shopping.src"></div>
                                <div class="orderInfor">
                                    <p class="clearfix">
                                        <span class="left">{{shopping.shoppingName}} <br/><span class="colors">{{shopping.orderColor}}</span></span>
                                        <button class="right btnRemove" @click="showModal(shopping)">
                                            <i class="fa fa-trash-o"></i> 删除
                                        </button>
                                    </p>
                                    <p class=" clearfix">
                                        <span class="left">￥{{shopping.orderMoney}}</span>
                                        <input type="text" class="spinnerExample right"/>
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul class="optionType style clearfix">
                        <li class="last">
                            <a href="payChioce.html" class="nowBuy">结算</a>
                        </li>
                        <li class="first">
                            应付 : <span style="color: #ff0004">￥{{order.allMoney}}</span>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
  </div>
   <div class="weui_dialog_confirm modal-mask" id="dialog1"  v-show="show" transition="modal">
      <div class="weui_mask"></div>
      <div class="weui_dialog weui-dialog-transition">
          <div class="weui_dialog_hd"><strong class="weui_dialog_title">确定删除订单？</strong></div>
          <div class="weui_dialog_ft">
              <a href="javascript:;" class="weui_btn_dialog default" @click="cancleDelete()">取消</a>
              <a href="javascript:;" class="weui_btn_dialog primary" @click="sureDeleta(shopping)">确定</a>
          </div>
      </div>
    </div>
</template>

<style>
  @import '../../../static/plugins/jquery-spinner/css/jquery.spinner.large.css'
</style>

<script>
  export default {
      data () {
  	    return {
  	      hide: true,
  	      orders:[],
  	      show: false,
  	      shop:""
  	    }
  	  },
      ready () {
        document.title = '我的购物车'
        this.$http.get('../../../static/data/shoppingCart.json').then(function(response){
            this.orders = response.data
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
         this.shop = shopping
       },
       cancleDelete:function(){
         this.show = false
       },
       sureDeleta:function(){
         this.show = false
         for(var i=0;i<this.orders.length;i++){
           this.orders[i].shoppings.$remove(this.shop)
         }
       },
       checkedAll: function(order) {
         if (order.checked) {
           order.checked = false
           for(var i = 0;i<order.shoppings.length;i++){
             order.shoppings[i].checked = false
           }
         }else{
           order.checked = true
           for(var i = 0;i<order.shoppings.length;i++){
             order.shoppings[i].checked = true
           }
         }
       },
       checkedOne:function(shopping){
        shopping.checked = !shopping.checked

       },
       returnPage:function(){
         window.history.go(-1)
       }
     }
  }
</script>
