<template>
 <Bar></Bar>
  <div class="bd absolute pt">
    <form action="#" id="form" onsubmit="return false">
        <div class="weui_cells_form mt0">
            <div class="moneyInfor">
                <p>
                    当前积分{{lists.nowScore}}
                </p>
                <p>
                     可提现积分{{lists.txScore}}
                </p>
                <button type="submit" class="weui_btn weui_btn_primary bg" @click="present(lists)">兑换</button>
            </div>
            <div class="weui_cells mt0 weui_cells_access style1">
                <a class="weui_cell" v-link="'/user/presentChioce'">
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
                <a class="weui_cell" style="margin-top: 0.625rem;"  v-link="'/user/presentList'">
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
    <div class="weui_dialog_confirm modal-mask" id="dialog1"  v-show="show">
       <div class="weui_mask"></div>
       <div class="weui_dialog">
           <div class="weui_dialog_hd"><strong class="weui_dialog_title">确定提现？</strong></div>
           <div class="weui_dialog_ft">
               <a href="javascript:;" class="weui_btn_dialog default" @click="cancleDelete()">取消</a>
               <a href="javascript:;" class="weui_btn_dialog primary" @click="sureDeleta()">确定</a>
           </div>
       </div>
     </div>
    <Toast :toastshow.sync="toastshow" :toasttext="toasttext"></Toast>
</div>
</template>
<script>
 import Bar from '../components/headBar.vue'
 import userService from '../../api/userService'
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
          toasttext:"",
          show:false,
          socrePrent:""
        }
      },
      ready () {
        document.title = '积分提现'
        userService.presentIntegral(this)

      },
      methods: {
        onShow: function () {
          this.hide = !this.hide
        },
        present:function(socre){
          if(socre.txScore<10000){
            this.$set('toasttext',"提现积分不足");
            this.$set('toastshow',true)
          }
          else{
          this.socrePrent = socre
          this.show = true
          }
        },
        sureDeleta:function(){
        if(this.socrePrent.id == null){
            this.$set('toasttext','请绑定银行卡');
            this.$set('toastshow',true)
          }else{
            userService.txApply(this)
          }
        },
        cancleDelete:function(){
          this.show = false
        }
      }
    }
</script>
