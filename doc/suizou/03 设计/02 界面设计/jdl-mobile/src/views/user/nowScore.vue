<template>
  <Bar></Bar>
  <div class="bd absolute pt">



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
  <Toast :toastshow.sync="toastshow" :toasttext="toasttext"></Toast>
</template>

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
        pageNo:this.pageNum
      };
      userService.nowScoreDetailInfor(this,pageArr);

    },
    methods: {
      onShow: function () {
        this.hide = !this.hide
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
            pageNo:1
          };

          userService.nowScoreModiflyInfor(this,dateArr);
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
          userService.ModiflyNowScoreInfor(this,dateArr);
          return;
        }

        if(this.nextNum == this.pageNum ){
          this.$set('toasttext',"无更多数据");
          this.$set('toastshow',true);
          return;
        }


       if(this.nextNum){
         this.pageNum = this.nextNum;
         var pageArr = {
           pageNo:this.pageNum
         };

         userService.nowScoreDetailInfor(this,pageArr);
       }

      }
    }
  }
</script>
