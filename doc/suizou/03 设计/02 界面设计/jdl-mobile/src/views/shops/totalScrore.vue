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
            <span class="time">订单确认</span>
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
            <span class="time">积分补足</span>
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
    <Toast :toastshow.sync="toastshow" :toasttext="toasttext"></Toast>
  </div>
</template>
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
        hide:true,
        list:[],
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
      mchService.nowScore(this,pageArr)
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
            nowPageNo:1
          };

          mchService.nowScoreModifly(this,dateArr);

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
          mchService.ModiflyNowScore(this,dateArr);
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

        mchService.nowScore(this,pageArr);
      }
    }
  }
</script>
