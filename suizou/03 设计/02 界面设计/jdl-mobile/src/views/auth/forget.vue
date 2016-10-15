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
                        <input class="weui_input" @invalid="telonInvalid" initial="off" detect-change="off" v-model="mobile" id="mobile" type="tel" v-validate:mobile="['mobile']" placeholder='请输入手机号码' @keyup="isDisables($event)">
                  </div>
              </div>
              <div class="weui_cell">
                  <div class="weui_cell_hd">
                      <label class="weui_label">
                          <span class="span_icon spa_code"></span>
                      </label>
                  </div>
                  <div class="weui_cell_bd weui_cell_primary">
                      <input class="weui_input codeInput"  @invalid="isPostCodeInvalid" initial="off" detect-change="off" v-model="isPostCode" id="isPostCode" v-validate:isPostCode="['isPostCode']" placeholder="验证码为6位有效数字"/>
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
                      <input class="weui_input" @invalid="passwordInvalid" initial="off" detect-change="off" v-model="password" id="password" type="password" v-validate:password="['passw']" placeholder="密码为6-20位的任何字类字符"/>
                  </div>
              </div>
              <div class="weui_cell">
                  <div class="weui_cell_hd">
                      <label class="weui_label">
                          <span class="span_icon spa_lock"></span>
                      </label>
                  </div>
                  <div class="weui_cell_bd weui_cell_primary">
                      <input class="weui_input" @invalid="aginPasswordInvalid" initial="off" detect-change="off" v-model="aginPassword" id="aginPassword" type="password" @blur="blurAginPassword()" v-validate:aginPassword="['aginPassw']" placeholder="请确认密码"/>
                  </div>
              </div>
          </div>
           <div class="weui_btn_area">
              <input type="submit" class="weui_btn weui_btn_primary" @click="save" value="保存">
          </div>
          <div class="weui_btn_area mt10 clearfix">
              <a class="btn_forget right" v-link="'/auth/personLogin'">想起账号,立即登录</a>
          </div>
      </form>
    </validator>
    <Toast :toastshow.sync="toastshow" :toasttext="toasttext"></Toast>
</div>
</template>
<script>
    import Toast from '../components/toast.vue'
    import userService from '../../api/userService'
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
           disabled:true,
           type:true,
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
         telonInvalid(){
             this.$set('toasttext','手机号不正确');
             this.$set('toastshow',true);
         },
         isDisables:function(e){
           var reg = /^(1[38][0-9]|14[57]|15[012356789]|17[0678])[0-9]{8}$/
           if(reg.test(e.currentTarget.value)){
             this.disabled = false
             this.type = false
           }else{
             this.disabled = true
             this.type = true
           }
        },
         isPostCodeInvalid(){
             this.$set('toasttext','验证码不正确')
             this.$set('toastshow',true)
         },
         passwordInvalid(){
             this.$set('toasttext','密码不正确')
             this.$set('toastshow',true)
         },
         aginPasswordInvalid(){
            this.$set('toasttext','请确认密码')
            this.$set('toastshow',true)
         },
         blurAginPassword:function(){
            var that = this
            var aginPassword = that.$get('aginPassword')
            var password = this.$get('password')
            if(aginPassword!=password){
              this.$set('toasttext','密码不一致哦')
              this.$set('toastshow',true)
            }
         },
         getCodeBtn:function(e){
            var btn = e.currentTarget
            var that = this
            var mobile = that.$get('mobile')
            var isPostCod = that.$get('isPostCode')
            var sendMemForgotArr = {mobile:mobile}
            userService.sendMemForgotAuthCode(this,sendMemForgotArr,btn)
          },
         save: function(){
            var that = this
            var isPostCode = that.$get('isPostCode')
            var password = that.$get('password')
            var mobile = that.$get('mobile')
            that.$validate(true, function () {
                if (that.$validation.invalid) {
                    //验证无效
                }else{
                  var updatePwdArr = {mobile:mobile,password:password,authCode:isPostCode,msgAuthcodeId:that.xxId}
                  userService.updatePwd(that,updatePwdArr)
                }
            })
          }
        }
      }
</script>
