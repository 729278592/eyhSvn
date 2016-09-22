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
  <div class="bd absolute pt" v-for="lists in dataJson">
    <form action="#" id="form" onsubmit="return false">
        <div class="weui_cells_form mt0">
            <div class="moneyInfor">
                <p>
                    当前积分　　{{lists.nowIntegral}}
                </p>
                <p>
                     可提现积分　{{lists.providIntegral}}
                </p>
                <button type="submit" class="weui_btn weui_btn_primary bg">提现</button>
            </div>
            <div class="weui_cells mt0 weui_cells_access style1">
                <a class="weui_cell" v-link="'/user/presentChioce'">
                    <div class="weui_cell_bd weui_cell_primary style">
                        <p>
                            <span class="score score1"></span>
                            银行卡
                            <span class="name" v-if="lists.state==this.onCardState">{{lists.bankType}}</span>
                            <span class="red" v-if="lists.state==this.notOnCardState">请绑定银行卡</span>
                        </p>
                    </div>
                    <div class="weui_cell_ft style">
                        <span class="ok" v-if="lists.state==this.onCardState">已绑定</span>
                        <span class="red" v-if="lists.state==this.notOnCardState">未绑定</span>
                    </div>
                </a>
                <a class="weui_cell" style="margin-top: 0.625rem;" v-link="'/user/presentList'">
                    <div class="weui_cell_bd weui_cell_primary style">
                        <p>
                            <span class="score score2"></span>
                            提现记录
                        </p>
                    </div>
                    <div class="weui_cell_ft"></div>
                </a>
                <a class="weui_cell" v-link="'/user/presentRules'">
                    <div class="weui_cell_bd weui_cell_primary style">
                        <p>
                            <span class="score score3"></span>
                            提现规则
                        </p>
                    </div>
                    <div class="weui_cell_ft"></div>
                </a>
            </div>
        </div>
    </form>
</div>
</template>
<script>
  export default {
      data () {
        return {
          hide:true,
          onCardState:1,
          notOnCardState:0,
          dataJson:[]
        }
      },
      ready () {
        document.title = '积分提现'
        this.$http.get('../../static/data/presentIntegral.json').then(function(response){
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
