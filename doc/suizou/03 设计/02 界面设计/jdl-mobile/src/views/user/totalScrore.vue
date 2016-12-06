<template>
  <Bar></Bar>
  <div class="bd absolute pt">

    <div class="applicatioOpetion">
      <ul class="applicatioNav clearfix">
        <li>
          <a :class="{'active':this.incomeActive}" @click="selectIncome()">推荐奖励</a>
        </li>
        <li>
          <a :class="{'active':this.outcomeActive}" @click="selectOutcome()">预留积分</a>
        </li>
      </ul>
    </div>

    <div class="styleHide" :class="{'active':this.incomeActive}">
      <div class="inputDiv clearfix">
        <input class="Wdate" v-model="startDate" type="date" placeholder="开始日期" >
        <span class="spanColor">至</span>
        <input class="Wdate" v-model="endDate" type="date" placeholder="结束日期" >　
        <!--<input type="button" class="btnQuery right" value="查询" @click="btnFind()" readonly/>-->
        <a class="btnQuery right" @click="btnFind()">查询</a>
      </div>
      <ul class="queryMenu styleHides">
        <li v-for="returnList in list" :class="{'hide':returnList.display}">
          <div v-if="returnList.type==0">
            <p class="clearfix">
              <span class="time">推荐会员升为金钻{{returnList.mcMo}}</span>
            </p>

            <p class="clearfix">
              <span class="left">当前积分</span>
              <span class="right">{{returnList.score}}</span>
            </p>

            <p class="clearfix">
              <span class="left">当前积分总额</span>
              <span class="right">{{returnList.totalReseScore}}</span>
            </p>

            <p class="clearfix">
              <span class="left">{{returnList.createTime}}</span>
            </p>
          </div>

          <div v-if="returnList.type==1">
            <p class="clearfix">
              <span class="time">积分兑换</span>
            </p>

            <p class="clearfix">
              <span class="left">当前积分</span>
              <span class="right">{{returnList.score}}</span>
            </p>

            <p class="clearfix">
              <span class="left">当前积分总额</span>
              <span class="right">{{returnList.totalReseScore}}</span>
            </p>

            <p class="clearfix">
              <span class="left">{{returnList.createTime}}</span>
            </p>
          </div>

          <div v-if="returnList.type==2">
            <p class="clearfix">
              <span class="time">积分赠送</span>
            </p>

            <p class="clearfix">
              <span class="left">当前积分</span>
              <span class="right">{{returnList.score}}</span>
            </p>

            <p class="clearfix">
              <span class="left">当前积分总额</span>
              <span class="right">{{returnList.totalReseScore}}</span>
            </p>

            <p class="clearfix">
              <span class="left">{{returnList.createTime}}</span>
            </p>
          </div>

          <div v-if="returnList.type==3">
            <p class="clearfix">
              <span class="time">推荐会员消费</span>
            </p>

            <p class="clearfix">
              <span class="left">当前积分</span>
              <span class="right">{{returnList.score}}</span>
            </p>

            <p class="clearfix">
              <span class="left">当前积分总额</span>
              <span class="right">{{returnList.totalReseScore}}</span>
            </p>

            <p class="clearfix">
              <span class="left">{{returnList.createTime}}</span>
            </p>
          </div>


          <div v-if="returnList.type==4">
            <p class="clearfix">
              <span class="time">推荐商家交易{{returnList.mcMo}}</span>
            </p>

            <p class="clearfix">
              <span class="left">当前积分</span>
              <span class="right">{{returnList.score}}</span>
            </p>

            <p class="clearfix">
              <span class="left">当前积分总额</span>
              <span class="right">{{returnList.totalReseScore}}</span>
            </p>

            <p class="clearfix">
              <span class="left">{{returnList.createTime}}</span>
            </p>
          </div>
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
        <input class="Wdate" v-model="startDate" type="date" placeholder="开始日期">
        <span class="spanColor">至</span>
        <input class="Wdate" v-model="endDate" type="date" placeholder="结束日期">　
        <!--<input type="button" class="btnQuery right" value="查询" @click="btnFindIn()" readonly/>-->
        <a class="btnQuery right" @click="btnFindIn()">查询</a>
      </div>
      <ul class="queryMenu styleHides">

        <li v-for="returnList in inList" :class="{'hide':returnList.display}">
          <div v-if="returnList.type==0">
            <p class="clearfix">
              <span class="time">订单确认{{returnList.orderId}}</span>
            </p>

            <p class="clearfix">
              <span class="left">预留积分</span>
              <span class="right">{{returnList.score}}</span>
            </p>

            <p class="clearfix">
              <span class="left">预留积分总额</span>
              <span class="right">{{returnList.totalReseScore}}</span>
            </p>

            <p class="clearfix">
              <span class="left">{{returnList.createTime}}</span>
            </p>
          </div>

          <div v-if="returnList.type==1">
            <p class="clearfix">
              <span class="time">积分补足</span>
            </p>

            <p class="clearfix">
              <span class="left">预留积分</span>
              <span class="right">{{returnList.score}}</span>
            </p>

            <p class="clearfix">
              <span class="left">预留积分总额</span>
              <span class="right">{{returnList.totalReseScore}}</span>
            </p>

            <p class="clearfix">
              <span class="left">{{returnList.createTime}}</span>
            </p>
          </div>

          <div v-if="returnList.type==2">
            <p class="clearfix">
              <span class="time">积分赠送</span>
            </p>

            <p class="clearfix">
              <span class="left">预留积分</span>
              <span class="right">{{returnList.score}}</span>
            </p>

            <p class="clearfix">
              <span class="left">预留积分总额</span>
              <span class="right">{{returnList.totalReseScore}}</span>
            </p>

            <p class="clearfix">
              <span class="left">{{returnList.createTime}}</span>
            </p>
          </div>

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
  div.styleHide.active{display: block;}
</style>


<script>
  import Bar from '../components/headBar.vue'
  import userService from '../../api/userService'
  import Toast from '../components/toast.vue'
  export default {
    components: {
      Bar,
      Toast
    },
    data () {
      return {
        hide:true,
        outcomeActive:false,
        incomeActive:true,
        list:[],
        inList:[],
        dataHide:false,
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
      document.title = '当前积分';
      var pageArr = {
        nowPageNo:this.pageNum
      };
      userService.nowScore(this,pageArr);

    },
    methods: {
      onShow: function () {
        this.hide = !this.hide
      },

      selectIncome:function(){
        this.incomeActive=true;
        this.outcomeActive=false;
        var detailIncomeArr = {
          nowPageNo:this.pageNum
        };
        userService.nowScore(this,detailIncomeArr);
      },
      selectOutcome:function(){
        this.incomeActive=false;
        this.outcomeActive=true;
        var pageArr = {
          nowPageNo:this.pageNum
        };
        userService.nowScorenow(this,pageArr);
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
            endDate:this.endDate,
            nowPageNo:1
          };

          userService.nowScoreModifly(this,dateArr);
          return false;
        }
        else{
          this.$set('toasttext',"日期无效");
          this.$set('toastshow',true);
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
            nowPageNo:1
          };
          userService.modifyNowScorenow(this,detailIncomeArr);
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
            nowPageNo:this.pageNum
          };
          userService.ModiflyNowScore(this,dateArr);
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
          nowPageNo:this.pageNum
        };

        userService.nowScore(this,pageArr);
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
            nowPageNo:this.pageNum
          };
          userService.ModiflyNowScoremore(this,dateArr);
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
          nowPageNo:this.pageNum
        };

        userService.nowScorenow(this,pageArr);
      }
    }
  }
</script>
