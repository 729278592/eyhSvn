<template>
  <div class="hd">
      <a class="return" @click="returnPage()">
          <i class="fa fa-angle-left"></i>
      </a>
      申请进度查询
  </div>
  <div class="bd absolute pd48">
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
                      <input class="weui_input" @invalid="isEmptyInvalid" initial="off" detect-change="off" id="isEmpty" v-model="isEmpty" type="text" v-validate:isEmpty="['isEmpty']"  placeholder='请输入公司名称'>
                  </div>
              </div>
              <div class="weui_cell">
                  <div class="weui_cell_hd">
                      <label class="weui_label">
                          <span class="span_icon spa_phone"></span>
                      </label>
                  </div>
                  <div class="weui_cell_bd weui_cell_primary">
                      <input class="weui_input" @invalid="telonInvalid" initial="off" detect-change="off" v-model="mobile" id="mobile" type="tel" v-validate:mobile="['mobile']"  placeholder='请输入手机号'  @keyup="isDisables($event)">
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
          <!--<a  class="weui_btn b0 weui_btn_primary" >查询</a>-->
           <input type="submit" class="weui_btn b0 weui_btn_primary" @click="save()" value="查询">

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
         isEmpty:"",
         type:true,
         disabled:true,
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

       telonInvalid(){
           this.$set('toasttext','手机号不正确');
           this.$set('toastshow',true);
       },
       isPostCodeInvalid(){
           this.$set('toasttext','验证码不正确');
           this.$set('toastshow',true);
       },
       isEmptyInvalid(){
           this.$set('toasttext','公司名不能为空');
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
      getCodeBtn:function(e){
         var btn = e.currentTarget
         var that = this
         var mobile = that.$get('mobile')
         var auditArr = {mobile:mobile}
         userService.sendMchStatusAuthCode(that,auditArr,btn)
     },
       save: function(){
         var that = this
         var isEmpty = that.$get('isEmpty')
         var mobile = that.$get('mobile')
         var isPostCod = that.$get('isPostCode')

         that.$validate(true, function () {
             if (that.$validation.invalid) {
             }else{
                var formData = {
                    mobile:mobile,realname:isEmpty,
                    authCode:isPostCod,
                    msgAuthcodeId:that.xxId
                 }
                 userService.getMchApplyStatus(that,formData)

             }
         })



       }
      }
    }
</script>
