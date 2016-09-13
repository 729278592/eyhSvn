<template>
  <div class="hd">
      <a>
          <a class="return" @click="returnPage()"></a>
      </a>
      消费全反
      <div class="right nav_block">
          <a v-link="'/user/shopCart'" class="shop_cat"></a>
              <a class="dot_block" @click.stop="onShow"></a>
              <ul class="nav_link" :class="{'hide':hide}">
              <li>
                  <a v-link="'/user/myMessage'">
                      消息
                  </a>
              </li>
              <li>
                  <a v-link="'/home'">
                      首页
                  </a>
              </li>
          </ul>
      </div>
  </div>
  <div class="bd absolute pt">
    <ul class="presentList">
        <li v-for="presentList in list">
            <p class="clearfix">
                <span class="left">{{presentList.bankType}}(尾号{{presentList.bankNum}})</span>
                <span class="right">￥{{presentList.presentMoney}}</span>
            </p>

            <p class="clearfix">
                <span class="left time">{{presentList.presentTime}}</span>
                <span class="right success" v-if="presentList.presentState==this.stateSuccess">提现成功</span>
                <span class="right going" v-if="presentList.presentState==this.stateGoing">处理中</span>
                <span class="right fail" v-if="presentList.presentState==this.stateFail">提现失败</span>
            </p>
        </li>
    </ul>
</div>
</template>
<script>
  export default {
      data () {
        return {
          hide:true,
          list:[],
          stateFail:0,
          stateGoing:1,
          stateSuccess:2
        }
      },
      ready () {
        document.title = '提现记录'
        this.$http.get('../../static/data/presentList.json').then(function(response){
             this.list = response.data
         }, function(response){
          // 响应错误回调
         })
      },
      methods: {
        onShow: function () {
          this.hide = !this.hide
        },
        returnPage:function(){
          window.history.go(-1)
        }
      }
    }
</script>
