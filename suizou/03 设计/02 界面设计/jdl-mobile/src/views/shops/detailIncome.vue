<template>
 <Bar></Bar>
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
  <div class="styleHide" :class="{'active':this.incomeActive}">
    <div class="inputDiv clearfix">
      <input class="Wdate" v-model="startDate" type="date" placeholder="开始日期" >
      <span class="spanColor">至</span>
      <input class="Wdate" v-model="endDate" type="date" placeholder="结束日期" >　
      <input type="button" class="btnQuery right" value="查询" @click="btnFindIn()" readonly/>
    </div>
    <ul class="queryMenu mb">
      <li v-for="incomeList in inList">
        <p class="clearfix">
          <span class="span_icon span_time"></span>
              <span class="time">
                  <span class="verdana">{{incomeList.auditTime}}</span>
              </span>
        </p>
        <p class="clearfix style">
          <span class="left">完成订单</span>
              <span class="right">
                  <span class="verdana">{{incomeList.orderId}}</span>单
              </span>
        </p>

        <p class="clearfix style">
          <span class="left">成交总额</span>
              <span class="right">
                  ￥<span class="verdana">{{incomeList.orderAmount}}</span>
              </span>
        </p>

        <p class="clearfix style">
          <span class="left">收入贷款</span>
              <span class="right">
                  ￥<span class="verdana">{{incomeList.balance}}</span>
              </span>
        </p>
      </li>

    </ul>

    <div class="notConTip" v-show="dataHide">
      <img src="../../../static/images/notContent.png" alt=""/>
      <p class="notInfor">
        暂无数据
      </p>
    </div>
  </div>
  <div class="styleHide" :class="{'active':this.outcomeActive}">
    <div class="inputDiv clearfix">
      <input class="Wdate" v-model="startDate" type="date" placeholder="开始日期" >
      <span class="spanColor">至</span>
      <input class="Wdate" v-model="endDate" type="date" placeholder="结束日期" >　
      <input type="button" class="btnQuery right" value="查询" @click="btnFind()" readonly/>
    </div>
    <ul class="queryMenu">
      <li v-for="returnList in list.datas">
        <p class="clearfix">
          <span class="time">{{returnList.createTime}}</span>
        </p>

        <p class="clearfix">
          <span class="left">存留积分总额</span>
          <span class="right">{{returnList.todayScore}}</span>
        </p>

        <p class="clearfix">
          <span class="left">返现比例</span>
          <span class="right">{{returnList.percentage}}</span>
        </p>

        <p class="clearfix">
          <span class="left">昨日返现</span>
          <span class="right">{{returnList.reservedScore}}</span>
        </p>
      </li>
    </ul>
    <div class="notConTip" v-show="dataJsonHide">
      <img src="../../../static/images/notContent.png" alt=""/>
      <p class="notInfor">
        暂无数据
      </p>
    </div>
  </div>
</div>
  <Toast :toastshow.sync="toastshow" :toasttext="toasttext"></Toast>
</template>

<style>
  div.styleHide{display: none;}
  div.active{display: block;}
</style>

<script>
 import Bar from '../components/shopHead.vue'
  import mchService from '../../api/mchService'
 import Toast from '../components/toast.vue'
 export default {
    components: {
       Bar,
       Toast
     },
      data () {
        return {
          outcomeActive:false,
          incomeActive:true,
          hide:true,
          list:[],
          inList:[],
          startDate:"",
          endDate:"",
          toastshow:false,
          toasttext:"",
          dataJsonHide:false,
          dataHide:false
        }
      },
      ready () {
        document.title = '资金明细'
        var detailIncomeArr = {}
        mchService.detailIncome(this,detailIncomeArr)

      },
      methods: {
        onShow: function () {
          this.hide = !this.hide
        },
        selectIncome:function(){
          this.incomeActive=true
          this.outcomeActive=false
          var detailIncomeArr = {}
          mchService.detailIncome(this,detailIncomeArr)
        },
        selectOutcome:function(){
           this.incomeActive=false
           this.outcomeActive=true
           mchService.detailOutcome(this)
        },
        btnFind:function(){
          var arr=this.startDate.split("-");
          var starttime=new Date(arr[0],arr[1],arr[2]);
          var starttimes=starttime.getTime();

          var arrs=this.endDate.split("-");
          var lktime=new Date(arrs[0],arrs[1],arrs[2]);
          var lktimes=lktime.getTime();
          if(starttimes<lktimes){
            var dateArr = {
              startDate:this.startDate,
              endDate:this.endDate
            };
            mchService.detailOutcome(this,dateArr)

            return false;
          }
          else{
            this.$set('toasttext',"日期无效");
            this.$set('toastshow',true)
            return false;
          }
        },
        btnFindIn:function(){
          var arr=this.startDate.split("-");
          var starttime=new Date(arr[0],arr[1],arr[2]);
          var starttimes=starttime.getTime();

          var arrs=this.endDate.split("-");
          var lktime=new Date(arrs[0],arrs[1],arrs[2]);
          var lktimes=lktime.getTime();
          if(starttimes<lktimes){
            var detailIncomeArr = {
              startDate:this.startDate,
              endDate:this.endDate
            };
            mchService.detailIncome(this,detailIncomeArr)

            return false;
          }
          else{
            this.$set('toasttext',"日期无效");
            this.$set('toastshow',true)
            return false;
          }
        }
      }
    }
</script>
