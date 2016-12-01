<template>
    <div class="hd">
         <a class="return" @click="returnPage()">
             <i class="fa fa-angle-left"></i>
         </a>
         家得利
     </div>
   <div class="bd absolute pt">
        <div class="user_agreement">
            <p class="title">用户帮助</p>
            <div class="user" v-for="userList in list">
              <div class="userHead " :class="{'active':userList.active}" v-html="userList.title" @click="blockClick($index)"></div>
              <div class="userCon" v-html="userList.content" :class="{'on':userList.on}"></div>
            </div>
        </div>
    </div>
</template>

<style>
  .user_agreement{text-indent:0;}
  .user_agreement {
    font-size: .875rem;
    line-height: 1.5rem;
    width: 94%;
    margin: .625rem auto 0;
    color: #666;
  }
</style>

<script>
  export default {
    components: {
      },
      data () {
        return {
          list:[]
        }
      },
      ready () {
        document.title = '用户帮助';

        this.$http.get("../../static/data/userHelpList.json").then(function(response){
          this.$progress.finish()
          var res = response.json()
          if(res.status == "ok") {
            this.list = res.datas

          } else {
            alert(res.message);
            console.log(res.message)
          }
        }, function(response){
          this.$progress.failed()

        })
      },
      methods: {
        onShow: function () {
          this.hide = !this.hide
        },
        returnPage:function(){
          window.history.go(-1)
        },
        blockClick:function(index){
          console.log(JSON.stringify(this.list.length))
          if(this.list[index].on){
            this.list[index].on = false;
            this.list[index].active = false;
            return
          }
          for(var i =0;i<this.list.length;i++){
            this.list[i].on = false;
            this.list[i].active = false;
          }
          this.list[index].on = true;
          this.list[index].active = true;
        }
      }
    }
</script>
