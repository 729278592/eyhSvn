<template>
  <Bar></Bar>
  <div class="bd absolute pt">
      <div id="invoice">
        <ul class="invoiceList">
            <li v-for="order in orders" :class="{'mb0':order.last}" v-show="orderHide">
                <div class="clearfix invoiceHead style">
                  <!--
                      <div class="weui_cells weui_cells_checkbox mt0 style1 inline_block">
                          <label class="weui_cell weui_check_labe style" for={{order.mchId}}>
                              <div class="weui_cell_hd">
                                  <input type="checkbox" class="weui_check" checked = {{order.type}} name="checkbox1" id={{order.mchId}} v-on:click='checkedAll(order)'/>
                                  <i class="weui_icon_checked"></i>
                              </div>
                          </label>
                      </div>
                  -->
                    <div class="inline_block style">
                        <span class="left">{{order.mchName}}</span>
                        <span class="right">
                            <i class="fa fa-angle-right"></i>
                        </span>
                    </div>
                </div>
                <div class="invoiceCon style">
                    <ul class="orderList style">
                        <li v-for="shopping in order.list" :class="{'removeShop':shopping.removeShop}">
                            <div class="orderCon">
                                <!--
                                  <div class="weui_cells weui_cells_checkbox mt0 style1 inline_block left5">
                                      <label class="weui_cell weui_check_labe style p0" for={{shopping.cartId}}>
                                          <div class="weui_cell_hd" @click="checkedOne(shopping,$event)">
                                              <input type="checkbox" class="weui_check" name="checkbox1" id={{shopping.cartId}} />
                                              <i class="weui_icon_checked"></i>
                                          </div>
                                      </label>
                                  </div>
                                -->
                                <div class="orderImg">
                                  <img v-if="shopping.pic==null" src="../../../static/images/shoppingC1.jpg" class="couponImg1" alt="">
                                  <img v-if="shopping.pic!=null" :src="this.imageUrl+shopping.pic" class="couponImg1" />
                                </div>
                                <div class="orderInfor style">
                                    <p class="clearfix">
                                        <span class="left">{{shopping.goodsName}} <br/><span class="colors">{{shopping.specName}}</span></span>
                                        <button class="right btnRemove" @click="showModal(shopping)">
                                            <i class="fa fa-trash-o"></i> 删除
                                        </button>
                                    </p>
                                    <p class=" clearfix">
                                        <span class="left">￥{{shopping.price}}</span>
                                         <div class="spinner right clearfix">
                                          <button class="btnReduce left" @click="reduce(shopping.mchId,$index)">-</button>
                                          <input class="numInput left" type="number" @keyup="add(shopping.mchId,$index)"  value={{shopping.num}} />
                                          <button class="btnPlus left" @click="plus(shopping.mchId,$index)">+</button>
                                        </div>
                                    </p>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <ul class="optionType style clearfix">
                        <li class="last">
                            <a class="nowBuy" @click="btnBuy(order.mchId)">结算</a>
                        </li>
                        <li class="first">
                            应付 : <span style="color: #ff0004">￥{{order.totalPrice}}</span>
                        </li>
                    </ul>
                </div>
            </li>
        </ul>
    </div>
    <div class="notConTip" v-show="dataHide">
        <img src="../../../static/images/notContent.png" alt=""/>
        <p class="notInfor">
            暂无数据
        </p>
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
  .orderList>li .orderCon .spinner{top:-0.5rem;}
  .invoiceHead.style .inline_block.style{padding:0.625rem 0.5rem;width:94%;}
</style>

<script>

  import Bar from '../components/headBar.vue'
  import userService from '../../api/userService'
  export default {
     components: {
        //注册组件

          Bar
      },
      data () {
  	    return {
  	      hide: true,
  	      orders:[],
  	      show: false,
  	      shop:"",
  	      num:0,
  	      dataHide:false,
  	      imageUrl:"",
  	      inputNum:"",
  	      shopCartId:"",
  	      checked:false,
  	      totalPrice:"",
  	      event:"",
  	      orderHide:""
  	    }
  	  },
      ready () {
        document.title = '我的购物车'
        this.imageUrl = userService.imgUrl
        userService.cartList(this)
         //console.log(JSON.stringify(this.orders.list.length))
        //this.totalPrice = this.orders
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
         var deleteList = {cartId:this.shop.cartId,mchId:this.shop.mchId}
         userService.sureDeleteList(this,deleteList)
       },
       checkedAll: function(order) {
         if (order.type) {
           order.type = false
           for(var i = 0;i<order.shoppings.length;i++){
             order.shoppings[i].type = false
           }
         }else{
           order.type = true
           for(var i = 0;i<order.shoppings.length;i++){
             order.shoppings[i].type = true
           }
         }
       },
       checkedOne:function(shopping,e){
         this.event = e
         this.shopCartId = shopping.cartId
         this.event.currentTarget.children[0].setAttribute("checked",true)

       },
       reduce:function(mchId,index){
         for(var i=0; i<this.orders.length; i++) {
           if(this.orders[i].mchId == mchId) {
             var item = this.orders[i].list[index];
             if (item.num == 1) {
               return false;
             }
             item.num--;
             var totalPrice = 0;
             for (var j = 0; j < this.orders[i].list.length; j++) {
               var self = this.orders[i].list[j];
               totalPrice += self.price * self.num;
             }
             this.orders[i].totalPrice = totalPrice.toFixed(2);
             this.updateGoodsNum(item.cartId,item.num);
             break;
           }
         }
       },
       plus:function(mchId,index){
         for(var i=0; i<this.orders.length; i++) {
           if(this.orders[i].mchId == mchId) {
             var item = this.orders[i].list[index];
             if (item.num == 10) {
               return false;
             }
             item.num++;
             var totalPrice = 0;
             for (var j = 0; j < this.orders[i].list.length; j++) {
               var self = this.orders[i].list[j];
               totalPrice += self.price * self.num;
             }
             this.orders[i].totalPrice = totalPrice.toFixed(2);
             this.updateGoodsNum(item.cartId,item.num);
             break;
           }
         }
       },
       updateGoodsNum:function (cartId,num) {

         var shopArr = {cartId:cartId,num:num}
         userService.cartUpdate(this,shopArr)

       },
        btnBuy:function(mchId){
          var cartIds = new Array();
          for(var i=0; i<this.orders.length; i++) {
            if(this.orders[i].mchId == mchId) {
              var item = this.orders[i].list;
              for(var j=0; j<item.length; j++) {
                cartIds.push(item[j].cartId);
              }
              break;
            }
          }
          localStorage.setItem('data',JSON.stringify(cartIds.join(",")))
          this.$router.go('/user/paySettlement')
        }



     }
  }
</script>
