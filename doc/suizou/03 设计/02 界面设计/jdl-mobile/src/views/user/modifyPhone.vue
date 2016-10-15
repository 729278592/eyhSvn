<template>
  <Bar></Bar>
  <div class="bd">
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
          </div>
          <div class="weui_btn_area fixed">
              <input type="submit" class="weui_btn b0 weui_btn_primary" @click="save" value="保存">
          </div>
      </form>
    </validator>
    <Toast :toastshow.sync="toastshow" :toasttext="toasttext"></Toast>
</div>
</template>
<script>
  import Toast from '../components/toast.vue'
  import Bar from '../components/headBar.vue'
  import userService from '../../api/userService'
  export default {
       components: {
          //注册组件
            Toast,
            Bar
        },
      data () {
        return {
          hide:true,
          toastshow:false,
          mobile:"",
          toasttext:"",
          isPostCode:"",
          disabled:true,
          type:true,
          xxId:"",
          code:"获取验证码"
        }
      },
      ready () {
        document.title = '修改手机'
        this.mobile = this.$route.params.mobile
        console.log(this.$route.params.mobile)
      },
      methods: {
        onShow: function () {
          this.hide = !this.hide
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
      telonInvalid(){
          //设置提示信息内容
          this.$set('toasttext','手机号不正确');
          //显示提示信息组件
          this.$set('toastshow',true);
      },
      isPostCodeInvalid(){
          this.$set('toasttext','验证码不正确');
          this.$set('toastshow',true);
      },
      getCodeBtn:function(e){
           var btn = e.currentTarget
           var that = this
           var mobile = that.$get('mobile')
           var isPostCod = that.$get('isPostCode')
           var sendMemForgotArr = {mobile:mobile}
           userService.sendMemChangeMobileAuthCode(that,sendMemForgotArr,btn)
       },
      save: function(){
        var that = this
        var mobile = that.$get('mobile')
        var isPostCod = that.$get('isPostCode')
        that.$validate(true, function () {
            if (that.$validation.invalid) {

            }else{
                var modifyPhoneArr = {mobile:mobile,authCode:isPostCod,msgAuthcodeId:that.xxId}
                console.log(modifyPhoneArr)
                userService.modifyPhone(that,modifyPhoneArr)
            }
          })
        }
      }
    }
</script>
