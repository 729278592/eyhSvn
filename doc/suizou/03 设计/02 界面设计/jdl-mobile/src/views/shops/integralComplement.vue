<template>
  <Bar></Bar>
  <div class="bd">
      <validator name="validation">
          <form action="#" id="form" onsubmit="return false">
              <div class="weui_cells weui_cells_form mt0 wauto">
                  <div class="weui_cell">
                      <div class="weui_cell_hd">
                          <label class="weui_label">
                              <span class="span_icon spa_person"></span>
                          </label>
                      </div>
                      <div class="weui_cell_bd weui_cell_primary">
                          <input class="weui_input" @invalid="isEmptyAccountInvalid" initial="off" detect-change="off" v-model="isEmptyAccount" id="isEmptyAccount" type="number" v-validate:isEmptyAccount="['isEmptyAccount']"  placeholder='请输入消费账号'>
                      </div>
                  </div>
                   <div class="weui_cell">
                      <div class="weui_cell_hd">
                          <label class="weui_label">
                              <span class="span_icon spa_money"></span>
                          </label>
                      </div>
                      <div class="weui_cell_bd weui_cell_primary">
                          <input class="weui_input" @invalid="isEmptyMoneyInvalid" initial="off" detect-change="off" v-model="isEmptyMoney" id="isEmptyMoney" type="number" v-validate:isEmptyMoney="['isEmptyMoney']"  placeholder='请输入消费金额'>
                      </div>
                   </div>
              </div>

              <div class="weui_btn_area">
                  <input type="button" class="weui_btn  weui_btn_primary" @click="save()" value="支付">
              </div>
          </form>
      </validator>

      <div class="weui_dialog_confirm modal-mask" id="dialog1"  v-show="show">
         <div class="weui_mask"></div>
         <div class="weui_dialog ">
             <div class="weui_dialog_hd">
                <p>
                   商户将获得的预留积分:{{data.mchGetScore}}
                 </p>
                 <p>
                   用户将获得的预留积分:{{data.memGetScore}}
                 </p>
                 <p>
                   需要支付的金额:{{data.amount}}
                 </p>
             </div>
             <div class="weui_dialog_ft">
                 <a href="javascript:;" class="weui_btn_dialog default" @click="orderCancel()">取消</a>
                 <a href="javascript:;" class="weui_btn_dialog primary" @click="orderSure()">确定</a>
             </div>
         </div>
       </div>




      <Toast :toastshow.sync="toastshow" :toasttext="toasttext"></Toast>
  </div>
</template>
<script>
  import Toast from '../components/toast.vue'
  import mchService from '../../api/mchService'
  import Bar from '../components/shopHead.vue'
  export default {
     components: {
        //注册组件
          Toast,
          Bar
      },
      data () {
        return {
          hide:true,
          data:[],
          isEmptyMoney:"",
          isEmptyAccount:"",
          toastshow:false,
          toasttext:"",
          orderIds:"",
          show: false,
        }
      },
      ready () {
        document.title = '积分补足'
      },
      methods: {
        onShow: function () {
          this.hide = !this.hide
        },
        isEmptyAccountInvalid(){
            this.$set('toasttext','账号不正确');
            this.$set('toastshow',true)
        },
        isEmptyMoneyInvalid(){
            this.$set('toasttext','金额不正确');
            this.$set('toastshow',true)
        },
        save: function(){
          var that = this
          var isEmptyAccount = that.$get('isEmptyAccount')
          var isEmptyMoney = that.$get('isEmptyMoney');
          var accountArr = {mobile:isEmptyAccount,amount:isEmptyMoney}
          that.$validate(true, function () {
              if (that.$validation.invalid) {
                  //验证无效
              }else{
                  if(isEmptyMoney<0.01){
                    this.$set('toasttext','金额不能少于0.01元');
                    this.$set('toastshow',true)
                  }else{
                    mchService.createScoreSupmOrder(that,accountArr)
                  }
              }
          })
        },
        orderSure:function(){
         this.$router.go('/shops/payChioce')
        },
        orderCancel:function(){
          this.show = false
        }
      }
    }
</script>
