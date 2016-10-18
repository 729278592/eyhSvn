<template>
  <Bar></Bar>
  <div class="bd absolute pt">

    <ul class="queryMenu">
      <li v-for="returnList in list">
        <div v-if="returnList.stype==0">
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

        <div v-if="returnList.stype==1">
          <p class="clearfix">
            <span class="time">积分提现}</span>
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

        <div v-if="returnList.stype==2">
          <p class="clearfix">
            <span class="time">积分返现(增加)</span>
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

        <div v-if="returnList.stype==3">
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


        <div v-if="returnList.stype==4">
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
        list:[],
        dataHide:false
      }
    },
    ready () {
      document.title = '预留积分';
      userService.reserveScore(this)
    },
    methods: {
      onShow: function () {
        this.hide = !this.hide
      }
    }
  }
</script>
