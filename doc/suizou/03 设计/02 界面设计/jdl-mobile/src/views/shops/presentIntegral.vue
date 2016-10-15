<template>
 <Bar></Bar>
  <div class="bd absolute pt">
    <form action="#" id="form" onsubmit="return false">
        <div class="weui_cells_form mt0">
            <div class="moneyInfor">
                <p>
                    当前积分　　{{lists.nowScore}}
                </p>
                <p>
                     可提现积分　{{lists.txScore}}
                </p>
                <button type="submit" class="weui_btn weui_btn_primary bg" @click="present()">提现</button>
            </div>
            <div class="weui_cells mt0 weui_cells_access style1">
                <a class="weui_cell" v-link="'/shops/presentChioce'">
                    <div class="weui_cell_bd weui_cell_primary style">
                        <p>
                            <span class="score score1"></span>
                            银行卡
                            <span class="name" v-if="lists.id!=null">{{lists.bankName}}</span>
                            <span class="red" v-if="lists.id==null">请绑定银行卡</span>
                        </p>
                    </div>
                    <div class="weui_cell_ft style">
                        <span class="ok" v-if="lists.id!=null">已绑定</span>
                        <span class="red" v-if="lists.id==null">未绑定</span>
                    </div>
                </a>
                <a class="weui_cell" style="margin-top: 0.625rem;"  v-link="'/shops/presentList'">
                    <div class="weui_cell_bd weui_cell_primary style">
                        <p>
                            <span class="score score2"></span>
                            提现记录
                        </p>
                    </div>
                    <div class="weui_cell_ft"></div>
                </a>
                <a class="weui_cell" v-link="'/shops/presentRules'">
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
    <Toast :toastshow.sync="toastshow" :toasttext="toasttext"></Toast>
</div>
</template>
<script>
 import Bar from '../components/shopHead.vue'
 import mchService from '../../api/mchService'
 import Toast from '../components/toast.vue'
 export default {
    components: {
         Bar,
         Toast
     },
      data () {
        return {
          hide:true,
          onCardState:1,
          notOnCardState:0,
          lists:[],
          toastshow:false,
          toasttext:""
        }
      },
      ready () {
        document.title = '积分提现'
        mchService.presentIntegral(this)

      },
      methods: {
        onShow: function () {
          this.hide = !this.hide
        },
        present:function(){
          if(this.lists.id == null){
            this.$set('toasttext','请绑定银行卡');
            this.$set('toastshow',true)
          }
        },
        present:function(){
            mchService.txApply(this)
        }
      }
    }
</script>
