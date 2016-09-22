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
<div class="bd absolute pd48" v-for="payCon in list">
  <div class="pay_infor">
      <img src="../../../static/images/payIcon.png" class="payIcon" alt=""/>
      <p class="title">支付金额</p>
      <p class="moneyNum">
          ￥<span class="verdana">{{payCon.payMoney}}</span>
      </p>
  </div>
  <div class="weui_cells weui_cells_checkbox mt0 first style1" v-for="payStyleList in payCon.payStyle">
      <label class="weui_cell weui_check_label" for={{payStyleList.payId}}>
          <div class="weui_cell_hd">
              <input type="radio" class="weui_check" name="checkbox1" id={{payStyleList.payId}}>
              <i class="weui_icon_checked"></i>
          </div>
          <div class="weui_cell_bd weui_cell_primary">
              {{payStyleList.payName}}
          </div>
      </label>
  </div>
</div>
<div class="weui_btn_area fixed">
  <a class="weui_btn b0 weui_btn_primary" v-link="'/user/paySuccess'">立即支付</a>
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
        document.title = '选择支付'
        this.$http.get('../../static/data/payChioce.json').then(function(response){
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
