<template>
  <div class="hd">
    <a class="return" @click="returnPage()">
      <i class="fa fa-angle-left"></i>
    </a>
    忘记密码
    <div class="right nav_block">
      <a class="dot_block" @click.stop="onShow">
        <i class="fa fa-user"></i>
      </a>
      <ul class="nav_link" :class="{'hide':hide}">
        <li>
          <a v-link="'/'">
            首页
          </a>
        </li>
        <li>
          <a v-link="'/auth/personLogin'">
            登录
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div class="bd absolute pt">
    <form action="#" id="form" onsubmit="return false">
      <div class="weui_cells weui_cells_form mt0 wauto">
        <div class="weui_cell">
          <div class="weui_cell_hd">
            <label class="weui_label">
              <span class="span_icon spa_phone"></span>
            </label>
          </div>
          <div class="weui_cell_bd weui_cell_primary">
            <input class="weui_input"  initial="off" detect-change="off" v-model="mobile" id="mobile" type="tel"  placeholder='请输入手机号码'>
          </div>
        </div>
        <div class="weui_cell">
          <div class="weui_cell_hd">
            <label class="weui_label">
              <span class="span_icon spa_code"></span>
            </label>
          </div>
          <div class="weui_cell_bd weui_cell_primary">
            <input class="weui_input codeInput"  initial="off" detect-change="off" v-model="isPostCode" id="isPostCode"  placeholder="验证码为6位有效数字"/>
            <input type="button" class="getCode" :class="{'disabled':disabled}" disabled = {{type}} id="getCode" @click="getCodeBtn($event)" v-model="code" value = {{code}} />
          </div>
        </div>
        <div class="weui_cell">
          <div class="weui_cell_hd">
            <label class="weui_label">
              <span class="span_icon spa_lock"></span>
            </label>
          </div>
          <div class="weui_cell_bd weui_cell_primary">
            <input class="weui_input"  initial="off" detect-change="off" v-model="password" id="password" type="password"  placeholder="密码为6-20位的任何字类字符"/>
          </div>
        </div>
        <div class="weui_cell">
          <div class="weui_cell_hd">
            <label class="weui_label">
              <span class="span_icon spa_lock"></span>
            </label>
          </div>
          <div class="weui_cell_bd weui_cell_primary">
            <input class="weui_input" initial="off" detect-change="off" v-model="aginPassword" id="aginPassword" type="password"  placeholder="请确认密码"/>
          </div>
        </div>
      </div>
      <div class="weui_btn_area">
        <input type="submit" class="weui_btn weui_btn_primary" @click="save" value="保存">
      </div>

    </form>
    <Toast :toastshow.sync="toastshow" :toasttext="toasttext"></Toast>
  </div>
</template>
<script>
  import Toast from '../components/toast.vue'
  import mchService from '../../api/mchService'
  export default {
    components: {
      //注册组件
      Toast
    },
    data () {
      return {
        hide:true,
        toastshow:false,
        mobile:"",
        toasttext:"",
        isPostCode:"",
        aginPassword:"",
        password:"",
        sessionId:"",
        disabled:false,
        type:false,
        xxId:"",
        code:"获取验证码"
      }
    },
    ready () {
      document.title = '重置密码'
    },
    methods: {
      onShow: function () {
        this.hide = !this.hide
      },
      returnPage:function(){
        window.history.go(-1)
      },

      showErrMsg(errMsg) {
        this.$set('toasttext',errMsg);
        this.$set('toastshow',true);
      },

      getCodeBtn:function(e){
        var reg = /^(1[38][0-9]|14[57]|15[012356789]|17[0678])[0-9]{8}$/;
        if(!reg.test(this.mobile)) {
          this.showErrMsg("请输入有效的手机号");
          return
        }
        var btn = e.currentTarget;
        var mobile = this.mobile;
        var sendMemRegArr = {mobile:mobile};
        mchService.sendMemForgotAuthCode(this,sendMemRegArr,btn)
      },
      save: function(){

        var mobileReg = /^(1[38][0-9]|14[57]|15[012356789]|17[0678])[0-9]{8}$/;
        if(!mobileReg.test(this.mobile)){
          this.showErrMsg("无效的手机号");
          return
        }

        if(!this.isPostCode){
          this.showErrMsg("验证码不能为空");
          return
        }

        if(!this.password){
          this.showErrMsg("请输入密码");
          return
        }

        if(!this.aginPassword){
          this.showErrMsg("请输入确认密码");
          return
        }

        if(this.password != this.aginPassword) {
          this.showErrMsg("密码不一致");
          return
        }

        var that = this;
        var updatePwdArr = {mobile:that.mobile,password:that.password,authCode:that.isPostCode,msgAuthcodeId:that.xxId};
        mchService.updatePwd(that,updatePwdArr)

      }
    }
  }
</script>
