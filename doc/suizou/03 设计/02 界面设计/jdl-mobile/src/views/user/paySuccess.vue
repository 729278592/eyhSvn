<template>
  <Bar></Bar>
<div class="bd absolute pt style">
  <div class="paySucess">
      <div class="paySucessBody">
          <span class="" style="display: inline-block;position: relative;top: -0.2rem;">
              <img src="../../../static/images/paySuccess.png" alt=""/>
          </span>
          <span class="" style="display: inline-block;">
              <span class="title">恭喜您,支付成功</span><br/>
          </span>
      </div>
        <div class="paySucessFt">
                  支付金额 : <span style="color:#f73a3a;font-size: 1.125rem;">￥<span class="verdana">{{payList.amount}}</span></span>
              </div>
  </div>



     <div class="weui_cells mt">
          <div class="weui_cell">
              <div class="weui_cell_bd weui_cell_primary">
                  <p>商家名称</p>
              </div>
              <div class="weui_cell_ft">{{payList.mchName}}</div>
          </div>
      </div>
      <div class="weui_cells mt0">
          <div class="weui_cell">
              <div class="weui_cell_bd weui_cell_primary">
                  <p>交易时间</p>
              </div>
              <div class="weui_cell_ft"><span class="verdana">{{payList.createTime}}</span></div>
          </div>
      </div>
      <div class="weui_cells mt0">
          <div class="weui_cell">
              <div class="weui_cell_bd weui_cell_primary">
                  <p>支付方式</p>
              </div>
              <div class="weui_cell_ft">支付宝</div>
          </div>
      </div>
      <div class="weui_cells mt0">
          <div class="weui_cell">
              <div class="weui_cell_bd weui_cell_primary">
                  <p>交易单号</p>
              </div>
              <div class="weui_cell_ft"><span class="verdana">{{payList.orderId}}</span></div>
          </div>
      </div>
  <div class="pd5">
      <a class="weui_btn weui_btn_disabled weui_btn_primary style" v-link="{ name: 'orderInfor', params: {orderId: payList.orderId}}">查看订单详情</a>
      <a v-link="'/home/index'"  class="weui_btn weui_btn_disabled weui_btn_primary style">返回商城继续购物</a>
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
          hide:true,
          payList:[]
        }
      },
      ready () {
        document.title = '支付成功'
        this.stateInfor = eval("("+localStorage.getItem('data')+")")
        var orderIdArr = {id:this.$route.params.orderId}
        userService.orderDetail(this,orderIdArr)
      },
      methods: {
        onShow: function () {
          this.hide = !this.hide
        }
      }
    }
</script>
