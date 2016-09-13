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
      <div class="user_agreement" v-for="list in dataJson">
          <p class="title">提现规则</p>
          <p>
              方法/步骤
          </p>
          <p v-html="list.content">
          </p>
      </div>
  </div>
</template>
<script>
  export default {
      data () {
        return {
          hide:true,
          dataJson:[]
        }
      },
      ready () {
        document.title = '提现规则'
        this.$http.get('../../static/data/presentRules.json').then(function(response){
             this.dataJson = response.data
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
