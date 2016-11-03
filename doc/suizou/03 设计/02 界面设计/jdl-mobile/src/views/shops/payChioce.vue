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
  <div class="weui_cells weui_cells_checkbox mt0 first style1" v-for="payTypeList in payType" @click="chiocePay(payTypeList)" :class="{'hide':payTypeList.isWeixin}">
      <label class="weui_cell weui_check_label" for={{payTypeList.payId}}>
          <div class="weui_cell_hd">
              <!--<input type="radio" class="weui_check" name="checkbox1" id={{payTypeList.payId}} checked = {{payTypeList.check}}>-->
              <i class="weui_icon_checked"></i>
          </div>
          <div class="weui_cell_bd weui_cell_primary">
            <p>{{payTypeList.payName}}</p>
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
 import Bar from '../components/shopHead.vue'
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
            {payId:11,payName:"支付宝",check:false,type:false,isWeixin:false},
            {payId:12,payName:"微信支付",check:false,type:false,isWeixin:false},
            {payId:13,payName:"银联支付",check:false,type:true,isWeixin:false}
          ]
        }
      },
      ready () {
        document.title = '选择支付'
        this.stateInfor = eval("("+localStorage.getItem('data')+")");
        this.money = eval("("+localStorage.getItem('dataMoney')+")");

        /*判断是否为微信*/
        var ua = navigator.userAgent.toLowerCase();
        if(ua.match(/MicroMessenger/i)=="micromessenger") {
          for(var i = 0;i<this.payType.length;i++){
            this.payType[i].isWeixin = false;
            if(this.payType[i].type){
              this.payType[i].isWeixin = true;
            }
          }
          //console.log(JSON.stringify(this.payType))
          return true;
        } else {
          for(var i = 0;i<this.payType.length;i++){
            this.payType[i].isWeixin = false;
            if(!this.payType[i].type){
              this.payType[i].isWeixin = true;
            }
          }
          //console.log(JSON.stringify(this.payType))
          return false;
        }

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
//          if(this.payTy.check){
//            window.location.href="http://www.jdl800.com/fric/mobile/scoreSuppToPay.do?id="+this.stateInfor
//          }else{
//            this.$set('toasttext','请选择支付方式')
//            this.$set('toastshow',true)
//          }
        }
      }
    }
</script>
