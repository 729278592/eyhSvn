<template>
  <Bar></Bar>
  <div class="bd absolute pt">
    <ul class="presentList">
         <li v-show="listHide" v-for="presentNum in present">
            <p class="clearfix">
                <span class="left">{{presentNum.bankName}}</span><!--({{presentNum.cardNo}})-->
                <span class="right">￥{{presentNum.amount}}</span>
            </p>
            <p class="clearfix">
                <span class="left time">{{presentNum.createTime}}</span>
                <span class="right success" v-if="presentNum.status==1">提现成功</span>
                <span class="right going" v-if="presentNum.status==0">处理中</span>
                <span class="right fail" v-if="presentNum.status==2">提现失败</span>
            </p>
        </li>
    </ul>
     <div class="notConTip" v-show="dataHide">
       <img src="../../../static/images/notContent.png" alt=""/>
       <p class="notInfor">
           暂无数据
       </p>
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
          present:[],
          res:"",
          fourNum:"",
          dataHide:false,
          listHide:false
        }
      },
      ready () {
        document.title = '提现记录'
        userService.presentList(this)
      },
      methods: {
        onShow: function () {
          this.hide = !this.hide
        }
      }
    }
</script>
