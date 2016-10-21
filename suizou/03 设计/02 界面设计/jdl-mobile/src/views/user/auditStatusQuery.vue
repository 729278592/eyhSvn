<template>
  <div class="hd">
      <a class="return" @click="returnPage()">
          <i class="fa fa-angle-left"></i>
      </a>
      申请进度查询
  </div>
  <div class="bd absolute pt">
    <validator name="validation">
      <form action="#" id="form" onsubmit="return false">
          <div class="weui_cells weui_cells_form mt0 wauto">
              <div class="weui_cell">
                  <div class="weui_cell_hd">
                      <label class="weui_label">
                          <span class="span_icon spa_comName"></span>
                      </label>
                  </div>
                  <div class="weui_cell_bd weui_cell_primary">
                      <input class="weui_input" id="isEmpty" v-model="isEmpty" type="text" placeholder='请输入公司名称'>
                  </div>
              </div>
              <div class="weui_cell">
                  <div class="weui_cell_hd">
                      <label class="weui_label">
                          <span class="span_icon spa_phone"></span>
                      </label>
                  </div>
                  <div class="weui_cell_bd weui_cell_primary">
                      <input class="weui_input" v-model="mobile" id="mobile" type="tel"  placeholder='请输入手机号'>
                  </div>
              </div>
              <div class="weui_cell">
                  <div class="weui_cell_hd">
                      <label class="weui_label">
                          <span class="span_icon spa_code"></span>
                      </label>
                  </div>
                  <div class="weui_cell_bd weui_cell_primary">
                      <input class="weui_input codeInput"  v-model="isPostCode" id="isPostCode"  placeholder="验证码为6位有效数字"/>
                      <input type="button" class="getCode" :class="{'disabled':disabled}" disabled = {{type}} id="getCode" @click="getCodeBtn($event)" v-model="code" value = {{code}} />
                  </div>
              </div>

          </div>
          <div class="weui_btn_area">
           <input type="submit" class="weui_btn  weui_btn_primary" @click="save()" value="查询">

          </div>

      </form>
    </validator>
</div>
  <Toast :toastshow.sync="toastshow" :toasttext="toasttext"></Toast>
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
         isEmpty:"",
         type:false,
         disabled:false,
         code:"获取验证码",
         xxId:"",
         modifyValue:[]
        }
      },
      ready () {
        document.title = '审核状态查询'
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
        var auditArr = {mobile:mobile};
        userService.sendMchStatusAuthCode(this,auditArr,btn)
     },
       save: function(){
         if(!this.isEmpty){
           this.showErrMsg("公司名不能为空");
           return
         }

         var mobileReg = /^(1[38][0-9]|14[57]|15[012356789]|17[0678])[0-9]{8}$/;
         if(!mobileReg.test(this.mobile)){
           this.showErrMsg("无效的手机号");
           return
         }

         if(!this.isPostCode){
           this.showErrMsg("验证码不能为空");
           return
         }

         var formData = {
           mobile:this.mobile,
           realname:this.isEmpty,
           authCode:this.isPostCode,
           msgAuthcodeId:this.xxId
         };

         userService.getMchApplyStatus(this,formData)

       }
      }
    }
</script>
