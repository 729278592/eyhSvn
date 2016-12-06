<template>
  <Bar></Bar>
   <div class="bd absolute pt">
        <div class="user_agreement">
            <p class="title">全民消费全反时代来临!</p>
            <p class="time">2016.03.02</p>
            <div >
              家得利的目标是扶持中小卖家，坚持不变。首先，专注于扶持新上线的中小卖家，而且销量不佳卖家也有相应的频道进行扶持，且不收取任何费用；其次是家得利是打折优惠平台：活动不断。此外对于消费者而言：提供消费者“物美”“价优”的“好货”平台。            </div>
        </div>
    </div>

</template>
<style>
  .user_agreement{text-indent:0;}
  .user_agreement>div,.user_agreement>p{
    font-size: .875rem;
    line-height: 1.5rem;
    width: 94%;
    margin: .625rem auto 0;
    color: #666;
  }
</style>
<script>
  import Bar from '../components/headBar.vue'
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
        document.title = '协议'
//        this.$http.get('../../static/data/linkCode.json').then(function(response){
//           this.list = response.json()
//        }, function(response){
//          // 响应错误回调
//        })
      },
      methods: {
        onShow: function () {
          this.hide = !this.hide
        }
      }
    }
</script>
