<template>
  <div class="hd">
      <a>
          <a class="return" @click="returnPage()"></a>
      </a>
      家得利
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
                  <a v-link="'/home/index'">
                      首页
                  </a>
              </li>
          </ul>
      </div>
  </div>
  <div class="bd absolute pt">
    <div class="inputDiv clearfix">
        <input class="Wdate" type="text" placeholder="开始日期" >
        <span class="spanColor">至</span>
        <input class="Wdate" type="text" placeholder="结束日期" >　
        <input type="button" class="btnQuery right" value="查询" readonly/>
    </div>
    <ul class="queryMenu">
        <li v-for="returnList in list">
            <p class="clearfix">
                <span class="time">{{returnList.returnTime}}</span>
            </p>

            <p class="clearfix">
                <span class="left">存留积分总额</span>
                <span class="right">{{returnList.allIntegral}}</span>
            </p>

            <p class="clearfix">
                <span class="left">返现比例</span>
                <span class="right">{{returnList.returnProportion}}</span>
            </p>

            <p class="clearfix">
                <span class="left">昨日返现</span>
                <span class="right">{{returnList.returnYestoady}}</span>
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
        document.title = '返现明细'
        this.$http.get('../../static/data/detailOutcome.json').then(function(response){
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
