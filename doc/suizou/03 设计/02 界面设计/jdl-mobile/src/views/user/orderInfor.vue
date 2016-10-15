<template>
  <Bar></Bar>
<div class="bd absolute pt">
  <div class="orderTitle">
      订单状态 :
      <span v-if="payList.status==0">未付款</span>
      <span v-if="payList.status==1">已取消(未付款)</span>
      <span v-if="payList.status==2">已付款</span>
      <span v-if="payList.status==3">用户申请取消订单并退款</span>
      <span v-if="payList.status==4">卖家同意退款,等待平台审核</span>
      <span v-if="payList.status==5">已取消并退款</span>
      <span v-if="payList.status==6">已发货</span>
      <span v-if="payList.status==7">用户申请退货退款</span>
      <span v-if="payList.status==8">卖家同意退款,等待平台审核</span>
      <span v-if="payList.status==9">申请退货成功</span>
      <span v-if="payList.status==10">用户已确认收货</span>
      <span v-if="payList.status==11">已评价,完成</span>
  </div>
  <div class="orderAddress">
      <a>
          <p class="clearfix">
              <span class="name left">{{payList.consignee}}</span>
              <span class="phone right">
                  <span class="verdana">{{payList.mobile}}</span>
              </span>
          </p>
          <p class="addressInfor">
              {{payList.address}}
          </p>
      </a>
  </div>
  <div id="order">
      <ul class="orderList">
          <li>
              <div>
                  <div class="orderHead clearfix">
                      <span class="orderNum left">{{payListLi.mchName}}</span>
                  </div>
                  <div class="orderCon" v-for="shopList in payList.list" style="border-bottom:1px solid #efefef;">
                      <div class="orderImg">


                           <img v-if="shopList.pic==null" src="../../../static/images/shoppingC1.jpg"  alt="">
                           <img v-if="shopList.pic!=null" :src="this.imageUrl+shopList.pic"/>
                      </div>
                      <div class="orderInfor">
                          <p class="top clearfix">
                              <span class="left">{{shopList.goodsName}}</span>
                          </p>
                          <p class=" ">
                              <span class="color">{{shopList.specName}}</span>
                          </p>
                          <p class="bottom clearfix">
                              <span class="left">￥<span class="verdana">{{shopList.price}}</span></span>
                              <span class="right">x{{shopList.num}}</span>
                          </p>
                      </div>
                  </div>
                  <div class="orderFt">
                      <div class="weui_cells mt0">
                          <div class="weui_cell">
                              <div class="weui_cell_bd weui_cell_primary">
                                  <p>共{{payList.totalNum}}件商品</p>
                              </div>
                              <div class="weui_cell_ft style">总计 : ￥{{payList.freight}} (运费￥{{payList.freight}})</div>
                          </div>
                      </div>
                  </div>
              </div>
          </li>
      </ul>
      <div class="orderDetails">
          <div class="weui_cells">
              <div class="weui_cell">
                  <div class="weui_cell_bd weui_cell_primary">
                      <p>订单号 : </p>
                  </div>
                  <div class="weui_cell_ft style">{{payList.orderId}}</div>
              </div>
          </div>
          <div class="weui_cells mt0">
              <div class="weui_cell">
                  <div class="weui_cell_bd weui_cell_primary">
                      <p>下单账号 : </p>
                  </div>
                  <div class="weui_cell_ft style">{{payList.consignee}}</div>
              </div>
          </div>
          <div class="weui_cells mt0">
              <div class="weui_cell">
                  <div class="weui_cell_bd weui_cell_primary">
                      <p>下单时间 : </p>
                  </div>
                  <div class="weui_cell_ft style">
                    <span class="verdana">{{payList.createTime}}</span>
                  </div>
              </div>
          </div>
      </div>
  </div>

  <div class="notConTip hide">
      <img src="../../../static/images/notContent.png" alt=""/>
      <p class="notInfor">
          暂无数据
      </p>
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
          hide:true,
          payList:[]
        }
      },
      ready () {
        document.title = '订单详情'
        var orderIdArr = {id:this.$route.params.orderId}
        userService.orderDetail(this,orderIdArr)
        this.imageUrl = userService.imgUrl

      },
      methods: {
        onShow: function () {
          this.hide = !this.hide
        }
      }
    }
</script>
