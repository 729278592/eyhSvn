<template>
 <Bar></Bar>
<div class="bd absolute pt">
  <div class="applicatioOpetion">
      <ul class="applicatioNav clearfix">
          <li>
              <a :class="{'active':this.incomeActive}" @click="selectIncome()">收入</a>
          </li>
          <li>
              <a :class="{'active':this.outcomeActive}" @click="selectOutcome()">赠送</a>
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
            <span class="left">赠送比例</span>
            <span class="right">{{returnList.returnProportion}}</span>
        </p>

        <p class="clearfix">
            <span class="left">昨日赠送</span>
            <span class="right">{{returnList.returnYestoady}}</span>
        </p>
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
          outcomeActive:false,
          incomeActive:true,
          hide:true,
          list:[]
        }
      },
      ready () {
        document.title = '资金明细'
        this.$http.get('../../static/data/detailIncome.json').then(function(response){
           this.list = response.json()
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
              this.list = response.json()
           }, function(response){
             // 响应错误回调
           })
        },
        selectOutcome:function(){
           this.incomeActive=false
           this.outcomeActive=true
          this.$http.get('../../static/data/detailOutcome.json').then(function(response){
             this.list = response.json()
          }, function(response){
            // 响应错误回调
          })
        }
      }
    }
</script>
