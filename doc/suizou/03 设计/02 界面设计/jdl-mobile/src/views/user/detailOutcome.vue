<template>
  <Bar></Bar>
  <div class="bd absolute pt">
    <div class="inputDiv clearfix">
        <input class="Wdate" type="text" placeholder="开始日期" >
        <span class="spanColor">至</span>
        <input class="Wdate" type="text" placeholder="结束日期" >　
        <input type="button" class="btnQuery right" value="查询" readonly/>
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
</div>
</template>
<script>
  import Bar from '../components/headBar.vue'
  import userService from '../../api/userService'
  export default {
     components: {
          Bar
      },
      data () {
        return {
          hide:true,
          list:[]
        }
      },
      ready () {
        document.title = '返现明细'
        userService.detailOutcome(this)
      },
      methods: {
        onShow: function () {
          this.hide = !this.hide
        }
      }
    }
</script>
