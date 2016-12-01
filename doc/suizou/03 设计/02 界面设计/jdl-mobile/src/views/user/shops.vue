<template>
  <Bar></Bar>
<div class="bd absolute pd48">
  <ul class="entryList mt0">
      <li>
          <div>
              <div class="couponImg style">
                  <img :src="" class="couponImg1" alt="">
              </div>
              <div class="inforList">
                  <p class="clearfix">
                      <span class="left shopsName">美容在线</span>
                      <span class="right">联盟商户</span>
                  </p>
                  <div class="clearfix">
                      <ul class="starList clearfix">
                          <li class="active">
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
                          <li>
                              <i class="fa fa-star-o"></i>
                          </li>
                      </ul>
                  </div>

                  <p class="clearfix">
                      <span class="left">销量<af class="verdana">454545</af></span>
                      <span class="right">共<af class="verdana">22</af>件商品</span>
                  </p>
              </div>
          </div>
      </li>
  </ul>
  <ul class="pay_list clearfix">
      <li>
          <div class="payInfoy">
              <span class="spanIcon moneyIcon"></span>
              <span>昨天收入</span><br/>
              <span class="color">￥<span class="verdana">900.00</span></span>
          </div>
      </li>
      <li>
          <div class="payInfoy">
              <span class="spanIcon sordIcon"></span>
              <span>昨天返现</span><br/>
              <span class="color">￥<span class="verdana">900.00</span></span>
          </div>
      </li>
      <li>
          <div class="payInfoy">
              <span class="spanIcon zheIcon"></span>
              <span>当前总额</span><br/>
              <span class="color"><span class="verdana">900.00</span></span>
          </div>
      </li>
  </ul>
  <div class="weui_cells weui_cells_access mt10 top0">
      <a class="weui_cell" href="shopsOrder.html">
          <div class="weui_cell_bd weui_cell_primary">
              <p>
                  <span class="text">
                      我的订单
                  </span>
              </p>
          </div>
          <div class="weui_cell_ft">查看全部订单</div>
      </a>
      <ul class="orderMenu clearfix bt1">
          <li>
              <a href="shopsOrderPay.html">
                  <span class="order orderIcon1"></span><br/>
                  待付款
              </a>
          </li>
          <li>
              <a href="shopsOrderSend.html">
                  <span class="order orderIcon2"></span><br/>
                  待发货
              </a>
          </li>
          <li>
              <a href="shopsOrderGet.html">
                  <span class="order orderIcon6"></span><br/>
                  已收货
              </a>
          </li>
          <li>
              <a href="shopsOrderOk.html">
                  <span class="order orderIcon7"></span><br/>
                  已完成
              </a>
          </li>
          <li>
              <a>
                  <span class="order orderIcon8"></span><br/>
                  退款中
              </a>
          </li>
      </ul>
  </div>
  <ul class="ulmenu clearfix mt0">
      <li>
          <a href="presentIntegral.html">
              <span class="span_index shops_icon1"></span><br/>
              <span>积分提现</span>
          </a>
      </li>
      <li>
          <a href="incomeDetail.html">
              <span class="span_index shops_icon2"></span><br/>
              <span>收入明细</span>
          </a>
      </li>
      <li>
          <a href="shops">
              <span class="span_index shops_icon3"></span><br/>
              <span>用户评价</span>
          </a>
      </li>
      <li>
          <a href="myMessage.html">
              <span class="span_index shops_icon4"></span><br/>
              <span>消息通知</span>
          </a>
      </li>
  </ul>
</div>
<div class="foot">
      <ul class="tabMenu clearfix">
          <li>
               <a v-link="'/home/index'">
                  <i class="fa fa-home"></i><br/>
                  <span>商城</span>
              </a>
          </li>
          <li>
              <a v-link="'/category/index'">
                  <i class="fa fa-bars"></i><br/>
                  <span>分类</span>
              </a>
          </li>
          <li>
              <a v-link="'/shops/shopsList'">
                  <i class="fa fa-tag"></i><br/>
                  <span>商铺</span>
              </a>
          </li>
          <li class="last active">
              <a>
                  <i class="fa fa-user"></i><br/>
                  <span>我的</span>
              </a>
          </li>
      </ul>
  </div>
</template>
<script>
  import Bar from '../components/headBar.vue'
  export default {
     components: {
          Bar
      },
      data () {
        return {
          hide:true,
          dataJson:[]
        }
      },
      ready () {
        document.title = '商铺'
        this.$http.get('../../static/data/shoppingOrderInfor.json').then(function(response){
           this.dataJson = response.json()
        }, function(response){
          // 响应错误回调
        })
      },
      methods: {
        onShow: function () {
          this.hide = !this.hide
        }
      }
    }
</script>
