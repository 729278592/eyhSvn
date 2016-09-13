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
  <div class="applicatioOpetion">
      <ul class="applicatioNav clearfix">
          <li>
              <a :class="{'active':this.incomeActive}" @click="selectIncome()">收入</a>
          </li>
          <li>
              <a :class="{'active':this.outcomeActive}" @click="selectOutcome()">返现</a>
          </li>
      </ul>
  </div>
  <div class="inputDiv clearfix bt1">
      <input class="Wdate" type="text" placeholder="开始日期">
      <span class="spanColor">至</span>
      <input class="Wdate" type="text" placeholder="结束日期">　
      <input type="button" class="btnQuery right" value="查询" readonly/>
  </div>
  <ul class="queryMenu mb styleHide" :class="{'active':this.incomeActive}">
      <li v-for="incomeList in list">
          <p class="clearfix">
              <span class="span_icon span_time"></span>
              <span class="time">
                  <span class="verdana">{{incomeList.returnTime}}</span>
              </span>
          </p>
          <p class="clearfix style">
              <span class="left">完成订单</span>
              <span class="right">
                  <span class="verdana">{{incomeList.allIntegral}}</span>单
              </span>
          </p>

          <p class="clearfix style">
              <span class="left">成交总额</span>
              <span class="right">
                  ￥<span class="verdana">{{incomeList.returnProportion}}</span>
              </span>
          </p>

          <p class="clearfix style">
              <span class="left">收入贷款</span>
              <span class="right">
                  ￥<span class="verdana">{{incomeList.returnYestoady}}</span>
              </span>
          </p>
      </li>

  </ul>
  <ul class="queryMenu styleHide" :class="{'active':this.outcomeActive}">
    <li v-for="returnList in list">
        <p class="clearfix">
            <span class="time">{{returnList.returnTime}}</span>
        </p>

        <p class="clearfix">
            <span class="left">存留积分总额</span>
            <span class="right">{{returnList.allIntegral}}</span>
        </p>

        <p class="clearfix">
            <span class="left">返现比例</span>
            <span class="right">{{returnList.returnProportion}}</span>
        </p>

        <p class="clearfix">
            <span class="left">昨日返现</span>
            <span class="right">{{returnList.returnYestoady}}</span>
        </p>
    </li>
</ul>
</div>

</template>
<script>
  export default {
      data () {
        return {
          outcomeActive:false,
          incomeActive:true,
          hide:true,
          list:[]
        }
      },
      ready () {
        document.title = '资金明细'
        this.$http.get('../../static/data/detailIncome.json').then(function(response){
           this.list = response.data
        }, function(response){
          // 响应错误回调
        })
      },
      methods: {
        onShow: function () {
          this.hide = !this.hide
        },
        selectIncome:function(){
          this.incomeActive=true
          this.outcomeActive=false
          this.$http.get('../../static/data/detailIncome.json').then(function(response){
              this.list = response.data
           }, function(response){
             // 响应错误回调
           })
        },
        selectOutcome:function(){
           this.incomeActive=false
           this.outcomeActive=true
          this.$http.get('../../static/data/detailOutcome.json').then(function(response){
             this.list = response.data
          }, function(response){
            // 响应错误回调
          })
        },
        returnPage:function(){
          window.history.go(-1)
        }
      }
    }
</script>
