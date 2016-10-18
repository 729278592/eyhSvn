<template>
  <div class="hd">
    <a class="return" @click="returnPage()">
      <i class="fa fa-angle-left"></i>
    </a>
    商家登陆
    <div class="right nav_block">
      <a class="dot_block" @click.stop="onShow">
        <i class="fa fa-home"></i>
      </a>
      <ul class="nav_link" :class="{'hide':hide}">
        <li>
          <a v-link="'/'">
            首页
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div class="bd absolute pt">
    <validator name="validation">
      <form action="#" id="form" onsubmit="return false">
        <div class="weui_cells weui_cells_form mt0 wauto">
          <div class="weui_cell">
            <div class="weui_cell_hd">
              <label class="weui_label">
                <span class="span_icon spa_phone"></span>
              </label>
            </div>
            <div class="weui_cell_bd weui_cell_primary">
              <input class="weui_input" @invalid="telonInvalid" initial="off" detect-change="off" v-model="mobile" id="mobile" type="tel" v-validate:mobile="['mobile']" placeholder="手机号">
            </div>
          </div>
          <div class="weui_cell">
            <div class="weui_cell_hd">
              <label class="weui_label">
                <span class="span_icon spa_lock"></span>
              </label>
            </div>
            <div class="weui_cell_bd weui_cell_primary">
              <input class="weui_input" @invalid="passwordInvalid" initial="off" detect-change="off" v-model="password" id="password" type="password" v-validate:password="['passw']" placeholder="密码"/>
            </div>
          </div>
        </div>
        <div class="weui_btn_area mt10">
          <input type="submit" class="weui_btn weui_btn_primary" @click="save($event)" v-model="loginValue" value={{loginValue}}>
          <!--<a class="weui_btn weui_btn_primary" @click="save" v-link="'/shops/index'">登陆</a>-->
        </div>
        <div class="weui_btn_area mt10 clearfix">
          <a class="btn_forget right" v-link="'/auth/mchForget'">忘记密码</a>
        </div>
      </form>
    </validator>

    <div class="weui_dialog_confirm modal-mask" id="dialog1"  v-show="show" transition="modal">
      <div class="weui_mask"></div>
      <div class="weui_dialog weui-dialog-transition">
        <div class="weui_dialog_hd">
          <strong class="weui_dialog_title">确定去支付？</strong>
          <p>
            请缴纳入驻费:{{amount}}
          </p>

        </div>
        <div class="weui_dialog_ft">
          <a href="javascript:;" class="weui_btn_dialog default" @click="payCancel()">取消</a>
          <a href="javascript:;" class="weui_btn_dialog primary" @click="paySure()">确定</a>
        </div>
      </div>
    </div>


    <Toast :toastshow.sync="toastshow" :toasttext="toasttext"></Toast>
  </div>
</template>
<script>
  import Toast from '../components/toast.vue'
  import mchAuthService from '../../api/mchAuthService'
  export default {
    components: {
      //注册组件
      Toast
    },
    data () {
      return {
        toastshow:false,
        hide:true,
        mobile:"",
        toasttext:"",
        aginPassword:"",
        password:"",
        resUid:"",
        error: '',
        amount:"",
        orderId:"",
        loginValue:"登陆",
        show:false
      }
    },
    ready () {
      document.title = '商家登陆'
      if(mchAuthService.user.authenticated) {
        this.$route.router.go('/shops/index/')
      }
    },
    methods: {
      onShow: function () {
        this.hide = !this.hide
      },
      returnPage:function(){
        window.history.go(-1)
      },

      telonInvalid(){
        this.$set('toasttext','手机号不正确');
        this.$set('toastshow',true);
      },
      passwordInvalid(){
        this.$set('toasttext','密码不正确');
        this.$set('toastshow',true);
      },

      paySure:function(){
        window.location.href="http://www.jdl800.com/fric/mchFeeToPay.do?id="+this.orderId+"&type=mobile"
      },
      payCancel:function(){
        this.show = false
      },

      save: function(e){
        var that = this
        var mobile = that.$get('mobile')
        var password = that.$get('password');
        that.$validate(true, function () {
          if (that.$validation.invalid) {
          }
          else{
            var loginIng = that.loginValue
            var credentials = {
              mobile: that.mobile,
              password: that.password
            }
            var redirect = that.$route.query.redirect
            if(!redirect) {
              redirect = '/shops/index/'
            } else {
              redirect = decodeURIComponent(redirect)
            }
            mchAuthService.login(that,credentials, redirect,loginIng)
          }
        })
      }
    }
  }
</script>
