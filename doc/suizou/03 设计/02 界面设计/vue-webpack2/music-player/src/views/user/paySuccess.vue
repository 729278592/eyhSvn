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
<div class="bd absolute pt style" v-for="payList in list">
  <div class="paySucess">
      <div class="paySucessBody">
          <div class="" style="display: inline-block;position: relative;top: -0.2rem;">
              <img src="../../../static/images/paySuccess.png" alt=""/>
          </div>
          <div class="" style="display: inline-block;">
              <span class="title">恭喜您,支付成功</span><br/>
          </div>
      </div>
      <div class="paySucessFt">
          支付金额 : <span style="color:#f73a3a;font-size: 1.125rem;">￥<span class="verdana">{{payList.payMoney}}</span></span>
      </div>
  </div>
  <div class="weui_cells mt">
      <div class="weui_cell">
          <div class="weui_cell_bd weui_cell_primary">
              <p>商家名称</p>
          </div>
          <div class="weui_cell_ft">{{payList.shopName}}</div>
      </div>
  </div>
  <!--<div class="weui_cells mt0">-->
      <!--<div class="weui_cell">-->
          <!--<div class="weui_cell_bd weui_cell_primary">-->
              <!--<p>订单总额</p>-->
          <!--</div>-->
          <!--<div class="weui_cell_ft">￥<span class="verdana">80.00</span></div>-->
      <!--</div>-->
  <!--</div>-->
  <div class="weui_cells mt0">
      <div class="weui_cell">
          <div class="weui_cell_bd weui_cell_primary">
              <p>交易时间</p>
          </div>
          <div class="weui_cell_ft"><span class="verdana">{{payList.payTime}}</span></div>
      </div>
  </div>
  <div class="weui_cells mt0">
      <div class="weui_cell">
          <div class="weui_cell_bd weui_cell_primary">
              <p>支付方式</p>
          </div>
          <div class="weui_cell_ft">{{payList.payStyle}}</div>
      </div>
  </div>
  <div class="weui_cells mt0">
      <div class="weui_cell">
          <div class="weui_cell_bd weui_cell_primary">
              <p>交易单号</p>
          </div>
          <div class="weui_cell_ft"><span class="verdana">{{payList.orderNum}}</span></div>
      </div>
  </div>
  <div class="pd5">
      <a class="weui_btn weui_btn_disabled weui_btn_primary style">查看订单详情</a>
      <a v-link="'/shops/index'"  class="weui_btn weui_btn_disabled weui_btn_primary style">返回商家继续购物</a>
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
        document.title = '支付成功'
        this.$http.get('../../static/data/paySuccess.json').then(function(response){
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
