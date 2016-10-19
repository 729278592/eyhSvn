<template>
  <Bar></Bar>
  <div class="bd absolute pt">
    <div class="inputDiv clearfix">
      <input class="Wdate" v-model="startDate" type="date" placeholder="开始日期" >
      <span class="spanColor">至</span>
      <input class="Wdate" v-model="endDate" type="date" placeholder="结束日期" >　
      <input type="button" class="btnQuery right" value="查询" @click="btnFind()" readonly/>
    </div>
    <ul class="queryMenu">
      <li v-for="returnList in list">
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
            <span class="time">积分提现</span>
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
            <span class="time">积分返现</span>
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


        <div v-if="returnList.type==4">
          <p class="clearfix">
            <span class="time">推荐商家交易{{returnList.mcMo}}</span>
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
        list:[],
        dataHide:false,
        startDate:"",
        endDate:"",
        toastshow:false,
        toasttext:""
      }
    },
    ready () {
      document.title = '当前积分';
      userService.nowScore(this)
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
            endDate:this.endDate
          };
         // userService.detailOutcome(this,dateArr)

          return false;
        }
        else{
          this.$set('toasttext',"日期无效");
          this.$set('toastshow',true);
          return false;
        }
      }
    }
  }
</script>
