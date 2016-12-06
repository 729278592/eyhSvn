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
  <div class="styleHide" :class="{'active':this.incomeActive}">
    <div class="inputDiv clearfix">
      <input class="Wdate" v-model="startDate" type="date" placeholder="开始日期" >
      <span class="spanColor">至</span>
      <input class="Wdate" v-model="endDate" type="date" placeholder="结束日期" >　
      <!--<input type="button" class="btnQuery right" value="查询" @click="btnFindIn()" readonly/>-->
      <a class="btnQuery right" @click="btnFindIn()">查询</a>
    </div>
    <ul class="queryMenu mb styleHides">
      <li v-for="incomeList in inList" :class="{'hide':incomeList.display}">
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
    <div class="weui_btn_area" v-show="btnHide">
      <input type="button" class="weui_btn  weui_btn_primary" @click="lookMore()" value={{typeData}} v-model="typeData">
    </div>
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
      <!--<input type="button" class="btnQuery right" value="查询" @click="btnFind()" readonly/>-->
      <a class="btnQuery right" @click="btnFind()">查询</a>
    </div>
    <ul class="queryMenu">
      <li v-for="returnList in list">
        <p class="clearfix">
          <span class="time">{{returnList.cashbackDate}}</span>
        </p>

        <p class="clearfix">
          <span class="left">存留积分总额</span>
          <span class="right">{{returnList.haveScore}}</span>
        </p>

        <p class="clearfix">
          <span class="left">赠送比例</span>
          <span class="right">{{returnList.percentage}}</span>
        </p>

        <p class="clearfix">
          <span class="left">今日赠送</span>
          <span class="right">{{returnList.todayScore}}</span>
        </p>
      </li>
    </ul>
    <div class="weui_btn_area" v-show="btnHide">
      <input type="button" class="weui_btn  weui_btn_primary" @click="lookMoreOut()" value={{typeData}} v-model="typeData">
    </div>
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
          btnHide:Boolean,
          typeData:"查看更多",
          pageNum:1,
          nextNum:null,
          totalNum:null,
          nowPage:[]
        }
      },
      ready () {
        document.title = '资金明细'
        var detailIncomeArr = {
          pageNo:this.pageNum
        }
        mchService.detailIncomes(this,detailIncomeArr)

      },
      methods: {
        onShow: function () {
          this.hide = !this.hide
        },
        selectIncome:function(){
          this.incomeActive=true
          this.outcomeActive=false
          var detailIncomeArr = {
            pageNo:this.pageNum
          }
          mchService.detailIncomes(this,detailIncomeArr)
        },
        selectOutcome:function(){
           this.incomeActive=false
           this.outcomeActive=true
          var pageArr = {
            pageNo:this.pageNum
          };
           mchService.detailOutcome(this,pageArr)
        },
        btnFind:function(){
          var arr=this.startDate.split("-");
          var starttime=new Date(arr[0],arr[1],arr[2]);
          var starttimes=starttime.getTime();

          var arrs=this.endDate.split("-");
          var lktime=new Date(arrs[0],arrs[1],arrs[2]);
          var lktimes=lktime.getTime();
          if(starttimes<lktimes){


            var detailIncomeArr = {
              startDate:this.startDate,
              endDate:this.endDate,
              pageNo:1
            };
            mchService.modifyDetailOutcome(this,detailIncomeArr);
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
              endDate:this.endDate,
              pageNo:1
            };
            mchService.modifyDetailIncome(this,detailIncomeArr);
            return false;
          }
          else{
            this.$set('toasttext',"日期无效");
            this.$set('toastshow',true);
            return false;
          }
        },
        lookMore:function(){
          if((this.startDate)&&(this.endDate)){
            var arr=this.startDate.split("-");
            var starttime=new Date(arr[0],arr[1],arr[2]);
            var starttimes=starttime.getTime();

            var arrs=this.endDate.split("-");
            var lktime=new Date(arrs[0],arrs[1],arrs[2]);
            var lktimes=lktime.getTime();
            if(this.nextNum == this.pageNum ){
              this.$set('toasttext',"无更多数据");
              this.$set('toastshow',true);
              return;
            }

            if(this.nextNum){
              this.pageNum = this.nextNum
            }
            var dateArr = {
              startDate:this.startDate,
              endDate:this.endDate,
              pageNo:this.pageNum
            };
            mchService.NowModiflyScore(this,dateArr);
            return;
          }


          if(this.nextNum == this.pageNum ){
            this.$set('toasttext',"无更多数据");
            this.$set('toastshow',true);
            return;
          }

          if(this.nextNum){
            this.pageNum = this.nextNum
          }
          var pageArr = {
            pageNo:this.pageNum
          };
          mchService.detailIncomes(this,pageArr);
        },
        lookMoreOut:function(){

          if((this.startDate)&&(this.endDate)){
            var arr=this.startDate.split("-");
            var starttime=new Date(arr[0],arr[1],arr[2]);
            var starttimes=starttime.getTime();

            var arrs=this.endDate.split("-");
            var lktime=new Date(arrs[0],arrs[1],arrs[2]);
            var lktimes=lktime.getTime();
            if(this.nextNum == this.pageNum ){
              this.$set('toasttext',"无更多数据");
              this.$set('toastshow',true);
              return;
            }

            if(this.nextNum){
              this.pageNum = this.nextNum
            }
            var dateArr = {
              startDate:this.startDate,
              endDate:this.endDate,
              pageNo:this.pageNum
            };
            mchService.NowModiflyOutScore(this,dateArr);
            return;
          }

          if(this.nextNum == this.pageNum ){
            this.$set('toasttext',"无更多数据");
            this.$set('toastshow',true);
            return;
          }

          if(this.nextNum){
            this.pageNum = this.nextNum
          }
          var pageArr = {
            pageNo:this.pageNum
          };
          mchService.detailOutcome(this,pageArr)
        }
      }
    }
</script>
