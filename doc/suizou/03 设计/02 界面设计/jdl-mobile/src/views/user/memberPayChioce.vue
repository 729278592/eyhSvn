<template>
  <Bar></Bar>
<div class="bd absolute pd48">
  <div class="pay_infor">
      <img src="../../../static/images/payIcon.png" class="payIcon" alt=""/>
      <p class="title">支付金额</p>
      <p class="moneyNum">
          ￥<span class="verdana">{{money}}</span>
      </p>
  </div>
  <div class="weui_cells weui_cells_checkbox mt0 first style1" v-for="payTypeList in payType" @click="chiocePay(payTypeList)">
      <label class="weui_cell weui_check_label" for={{payTypeList.payId}}>
          <div class="weui_cell_hd">
              <input type="radio" class="weui_check" name="checkbox1" id={{payTypeList.payId}} checked = {{payTypeList.check}}>
              <i class="weui_icon_checked"></i>
          </div>
          <div class="weui_cell_bd weui_cell_primary">
              {{payTypeList.payName}}
          </div>
      </label>
  </div>
</div>
<div class="weui_btn_area fixed">
  <a class="weui_btn b0 weui_btn_primary" @click="btnPay()">立即支付</a>
</div>
<Toast :toastshow.sync="toastshow" :toasttext="toasttext"></Toast>
</template>

<style lang="css" scoped>
    .pay_infor p.title{position:static;margin:0;}
</style>

<script>
 import Bar from '../components/headBar.vue'
 import userService from '../../api/userService'
 import Toast from '../components/toast.vue'
 export default {
    components: {
         Toast,
         Bar
     },
      data () {
        return {
          hide:true,
          list:[],
          stateInfor:"",
          money:"",
          id:"",
          toastshow:false,
          toasttext:"",
          payTy:"",
          payType:[
            {payId:11,payName:"支付宝",check:false},
            {payId:12,payName:"微信支付",check:false},
            {payId:13,payName:"银联支付",check:false}
          ]
        }
      },
      ready () {
        document.title = '选择支付'
        this.money=this.$route.params.money
        this.stateInfor = this.$route.params.upDateId
      },
      methods: {
        onShow: function () {
          this.hide = !this.hide
        },
        chiocePay:function(payTypeList){
           for(var a = 0;a<this.payType.length;a++){
              this.payType[a].check = false
            }
            this.payTy = payTypeList
            payTypeList.check = true
            this.id =  payTypeList.payId
         },
        btnPay:function(){
          if(this.payTy.check){
            this.$progress.start()
            this.$http.post("http://www.jdl800.com/fric/mobile/member/createUpLevelOrder.do",{levelId:this.stateInfor}).then(function(response){
              this.$progress.finish()
              var res = response.data
              if(res.status == "ok") {
                window.location.href="http://www.jdl800.com/fric/mobile/upLevelToPay.do?id="+res.datas
              } else {
                alert(res.message)
              }
            }, function(response){
              this.$progress.failed()
              // 响应错误回调
            })
        }else{
         this.$set('toasttext','请选择支付方式')
         this.$set('toastshow',true)
          }
        }
      }
    }
</script>
