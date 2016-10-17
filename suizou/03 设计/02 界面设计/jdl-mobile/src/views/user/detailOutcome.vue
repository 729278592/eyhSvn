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
          startDate:"",
          endDate:"",
          toastshow:false,
          toasttext:""
        }
      },
      ready () {
        document.title = '返现明细'
        userService.detailOutcome(this)
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
          userService.detailOutcome(this,dateArr)

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
