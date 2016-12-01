<template>
  <Bar></Bar>
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
        document.title = '我的消息'
        this.$http.get('../../static/data/myMessage.json').then(function(response){
           this.list = response.json()
        }, function(response){
          // 响应错误回调
        })
      },
      methods: {
        onShow: function () {
          this.hide = !this.hide
        }
      }
    }
</script>
