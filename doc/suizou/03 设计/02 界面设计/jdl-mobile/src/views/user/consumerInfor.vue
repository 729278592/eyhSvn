<template>
  <Bar></Bar>
   <div class="bd absolute pt" v-for="listInfor in list">
        <div class="user_agreement">
            <p class="title">{{listInfor.title}}</p>
            <p class="time">{{listInfor.time}}</p>
            <div v-for="conDiv in listInfor.conList">
              {{conDiv.con}}
            </div>
        </div>
    </div>
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
        document.title = '协议'
        this.$http.get('../../static/data/linkCode.json').then(function(response){
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
