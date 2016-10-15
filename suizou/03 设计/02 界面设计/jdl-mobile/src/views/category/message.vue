<template>
  <Bar></Bar>
  <div class="bd absolute pd48">

  </div>
  <div class="foot ">
      <div class="footBg h50">
          <form action="#">
              <input type="text" class="inputBtn" placeholder="回复张医生"/>
              <button type="submit" class="btnTj">提交</button>
          </form>
      </div>
  </div>
</template>
<script>
  import Bar from '../components/headBar.vue';
    export default {
      components: {
        //注册组件
          Bar
      },
      data () {
        return {
          hide:true,
          list:[]
        }
      },
      ready () {
        document.title = '消息'
        this.$http.get('../../static/data/myMessage.json').then(function(response){
           this.list = response.data
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
