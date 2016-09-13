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
          </ul>
      </div>
  </div>
  <div class="bd absolute pt">
    <ul class="merberMenu">
        <li v-for="msgList in list">
            <p class="clearfix">
                <span class="left phone verdana">{{msgList.title}}</span>
                <span class="right verdana time">{{msgList.msgTime}}</span>
            </p>
            <p class="clearfix">
                <span class="left con">{{msgList.msgContent}}</span>
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
          list:[]
        }
      },
      ready () {
        document.title = '我的消息'
        this.$http.get('../../static/data/myMessage.json').then(function(response){
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
