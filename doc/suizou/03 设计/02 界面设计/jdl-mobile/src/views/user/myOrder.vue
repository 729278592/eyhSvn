<template>
  <Bar></Bar>
  <div class="bd absolute pt">
    <ul class="orderMenu clearfix">
        <li v-for="item in items" :class="{'active':item.active}" @click="onSelect($index,item.orderStyle)" :selected="tab_index == item.type">
            <a>
                <span class="order orderIcon{{item.num}}"></span><br/>
                {{item.con}}
            </a>
        </li>
    </ul>
    <div id="order">
      <ul class="orderList">
          <li v-for="shop in list">
              <div class="orderHead clearfix">
                  <span class="orderNum left">{{shop.mchName}}</span>
                  <span class="time right"><span class="verdana">{{shop.createTime}}</span></span>
              </div>
              <div v-link="{ name: 'orderInfor', params: {orderId: shop.orderId}}">
              <a v-for="shopping in shop.list" >
                  <div class="orderCon">
                      <div class="orderImg">
                        <img v-if="shopping.pic==null" src="../../../static/images/shoppingC1.jpg" class="couponImg1" alt="">
                        <img v-if="shopping.pic!=null" :src="this.imageUrl+shopping.pic" />
                      </div>
                      <div class="orderInfor">
                          <p class="top clearfix">
                              <span class="left">{{shopping.goodsName}}</span>
                          </p>
                          <p class=" ">
                              <span class="color">{{shopping.specName}}</span>
                          </p>
                          <p class="bottom clearfix">
                              <span class="left">￥<span class="verdana">{{shopping.price}}</span></span>
                              <span class="right">x{{shopping.num}}</span>
                          </p>
                      </div>
                  </div>
              </a>
              </div>
              <div class="orderFt">
                  <div class="weui_cells mt0">
                      <div class="weui_cell">
                          <div class="weui_cell_bd weui_cell_primary">
                              <p>共{{shop.totalNum}}件商品</p>
                          </div>
                          <div class="weui_cell_ft style">总计 : ￥{{totalPrice}} (运费￥{{shop.freight}})</div>
                      </div>
                  </div>

                  <div class="opreationBtn clearfix">
                      <a class="btn right" v-if=" 0==shop.status">删除</a>
                      <a class="btn right" v-if=" 0==shop.status" @click="pay(shop)">付款</a>
                      <span class="btn right" v-if="1==shop.status">已取消</span>
                      <span class="btn right" v-if="2==shop.status">待发货</span>
                      <a class="btn right" v-if="2==shop.status" @click="cancelOrderBtn(shop)">取消订单</a>

                      <span class="btn right" v-if="3==shop.status">订单申请取消中</span>
                      <span class="btn right" v-if="4==shop.status">卖家同意退款,请等待</span>
                      <span class="btn right" v-if="5==shop.status">已取消(有退款)</span>

                      <span class="btn right" v-if="6==shop.status">已发货</span>
                      <a class="btn right" v-if="7==shop.status">取消订单</a>
                      <span class="btn right" v-if="8==shop.status">卖家同意退款,请等待</span>
                      <span class="btn right" v-if="9==shop.status">已取消(退货)</span>

                      <a class="btn right" v-if="10==shop.status" v-link="'/user/evaluate'">评价</a>
                      <span class="btn right" v-if="11==shop.status">完成</span>
                  </div>
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
  <Toast :toastshow.sync="toastshow" :toasttext="toasttext"></Toast>
</template>
<script>
  import Bar from '../components/headBar.vue'
  import userService from '../../api/userService'
    import Toast from '../components/toast.vue'
  export default {
     components: {
          Bar,
          Toast
      },
    data () {
      return {
        show: false,
        shops:"",
        list: [],
        hide: true,
        imageUrl:"",
        orderStatus:{status:0},
        totalAmount:0,
        toastshow:false,
        toasttext:"",
        items: [
          {orderStyle:true,con:"全部",active: true,name:"allOrderPerson",num:"0"},
          {orderStyle:true,con:"待付款",active: false,name:"waitPayOrderPerson",num:"1"},
          {orderStyle:true,con:"待发货",active: false,name:"waitSendGoodsOrderPerson",num:"2"},
          {orderStyle:true,con:"待确认",active: false,name:"waitGetGoodsOrderPerson",num:"3"},
          {orderStyle:true,con:"已完成",active: false,name:"waitCommentOrderPerson",num:"4"}
        ],
        tab_index:true
      }
    },
    ready () {
      document.title = '我的订单'
      this.imageUrl = userService.imgUrl
      userService.myOrder(this,this.orderStatus)
      this.totalPrice = this.list
    },
    methods: {
      onShow: function () {
        this.hide = !this.hide
      },
      onSelect:function(index,item){
        this.tab_index = item
        this.items.forEach(function(item, i) {
          if(i === index)
            item.active = true;
          else
            item.active = false;
        })
        this.orderStatus={status:index}
        userService.myOrder(this,this.orderStatus)
      },
      showModal:function(shopping){
         this.show = true
         this.shops = shopping
      },
      cancleDelete:function(){
         this.show = false
      },
      sureDeleta:function(orderStatus){
         this.show = false
         var orderArr = {
         id:orderStatus.orderId
        }
        console.log(orderStatus.orderId)
        userService.deleteOrder(this,orderArr,orderStatus)
      },
     cancelOrderBtn:function(orderStatus){
       var orderArr = {
        id:orderStatus.orderId
       }
       console.log(orderStatus.orderId)
       userService.cancelOrder(this,orderArr,orderStatus)
      },
      pay:function(shop){
        window.location.href="http://www.jdl800.com/fric/mobile/goods/toPay.do?id="+shop.orderId
      }
    }
}
</script>
