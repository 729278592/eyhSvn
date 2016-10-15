<template>
  <Bar></Bar>
  <div class="bd absolute pt">
    <ul class="orderMenu clearfix">
        <li v-for="item in items" :class="{'active':item.active}" @click="onSelect($index,item.type)" :selected="tab_index == item.type">
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
              <a v-for="shopping in shop.list">
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
              <div class="orderFt">
                  <div class="weui_cells mt0">
                      <div class="weui_cell">
                          <div class="weui_cell_bd weui_cell_primary">
                              <p>共{{shop.totalNum}}件商品</p>
                          </div>
                          <div class="weui_cell_ft style">总计 : ￥{{shop.amount}} (运费￥{{shop.freight}})</div>
                      </div>
                  </div>

              <div class="opreationBtn clearfix">
            </div>
              </div>
          </li>
        </ul>
      </div>
  </div>
  <div class="weui_dialog_confirm modal-mask" id="dialog1"  v-show="show">
    <div class="weui_mask"></div>
    <div class="weui_dialog ">
        <div class="weui_dialog_hd"><strong class="weui_dialog_title">确定删除订单？</strong></div>
        <div class="weui_dialog_ft">
            <a href="javascript:;" class="weui_btn_dialog default" @click="cancleDelete()">取消</a>
            <a href="javascript:;" class="weui_btn_dialog primary" @click="sureDeleta(shopping)">确定</a>
        </div>
    </div>
  </div>
</template>
<script>
  import Bar from '../components/shopHead.vue'
 import mchService from '../../api/mchService'
    export default {
       components: {
            Bar
        },
    data () {
      return {
        show: false,
        shops:"",
        list: [],
        hide: true,
         totalAmount:0,
         orderStatus:{status:0},
        items: [
          {type:"allOrder",con:"全部",active: true,name:"allOrderShops",num:"0"},
          {type:"waitPayOrder",con:"待付款",active: false,name:"waitPayOrderShops",num:"1"},
          {type:"waitSendGoodsOrder",con:"待发货",active: false,name:"waitSendGoodsOrderShops",num:"6"},
          {type:"waitGetGoodsOrder",con:"待确认",active: false,name:"waitGetGoodsOrderShops",num:"7"},
          {type:"waitCommentOrder",con:"已退款",active: false,name:"waitCommentOrderShops",num:"8"}
        ]
      }
    },
    ready () {
      document.title = '商铺订单'
      this.imageUrl = mchService.imgUrl
      mchService.myOrder(this,this.orderStatus)
    },
    methods: {
      onShow: function () {
        this.hide = !this.hide
      },
      onSelect:function(index,item){
        this.items.forEach(function(item, i) {
          if(i === index)
            item.active = true;
          else
            item.active = false;
        })
        this.orderStatus={status:index}
        mchService.myOrder(this,this.orderStatus)
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
