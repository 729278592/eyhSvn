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
                      <a class="btn right" v-if="this.tab_index==this.items[0].type" @click="showModal(shop)">删除</a>
                      <a class="btn right" v-if="this.tab_index==this.items[0].type">付款</a>

                      <a class="btn right" v-if="this.tab_index==this.items[1].type" @click="showModal(shop)">删除</a>
                      <a class="btn right" v-if="this.tab_index==this.items[1].type">付款</a>

                      <a class="btn right" v-if="this.tab_index==this.items[2].type">申请退款</a>
                      <a class="btn right" v-if="this.tab_index==this.items[2].type">联系卖家</a>

                      <a class="btn right" v-if="this.tab_index==this.items[3].type">申请退款</a>
                      <a class="btn right" v-if="this.tab_index==this.items[3].type">确认收货</a>

                      <a class="btn right" v-if="this.tab_index==this.items[4].type">评价</a>
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
</template>
<script>
  export default {
    data () {
      return {
        show: false,
        shops:"",
        list: [],
        hide: true,
        items: [
          {type:"allOrder",con:"全部",active: true,name:"allOrderPerson",num:"0"},
          {type:"waitPayOrder",con:"待付款",active: false,name:"waitPayOrderPerson",num:"1"},
          {type:"waitSendGoodsOrder",con:"待发货",active: false,name:"waitSendGoodsOrderPerson",num:"2"},
          {type:"waitGetGoodsOrder",con:"已收货",active: false,name:"waitGetGoodsOrderPerson",num:"3"},
          {type:"waitCommentOrder",con:"已完成",active: false,name:"waitCommentOrderPerson",num:"4"}
        ],
        tab_index:0,
        allOrder:0,
        waitPayOrder:1,
        waitSendGoodsOrder:2,
        waitGetGoodsOrder:3,
        waitCommentOrder:4
      }
    },
    ready () {
      document.title = '我的订单'
      this.$http.get('../../static/data/allOrderPerson.json').then(function(response){
           this.tab_index = this.items[0].type
           this.list      = response.data
      }, function(response){
        // 响应错误回调
      })
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
      this.$http.get('../../static/data/'+this.items[index].name+'.json').then(function(response){
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
