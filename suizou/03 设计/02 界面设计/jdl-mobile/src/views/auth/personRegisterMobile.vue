<template>
  <Bar></Bar>
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
               <div class="weui_cell">
                    <div class="weui_cell_hd">
                        <label class="weui_label">
                            <span class="span_icon spa_person"></span>
                        </label>
                    </div>
                    <div class="weui_cell_bd weui_cell_primary">
                          <input class="weui_input" initial="off" @invalid="refereesMobilenvalid" detect-change="off" v-model="refereesMobile" id="refereesMobile" type="text" v-validate:refereesMobile="['refereesMobile']"  placeholder='请输入推荐人手机号'>
                    </div>
                </div>
                <div class="weui_cell weui_cell_select">
                   <div class="weui_cell_hd">
                       <label class="weui_label style">
                           <span class="span_icon spa_address"></span>
                       </label>
                   </div>
                   <div class="weui_cell_bd weui_cell_primary">
                       <select class="weui_select" name="province" @change="provinceChange" v-model="province">
                           <option value="-1">请选择省份</option>
                           <option v-for="item in provinceList" value={{item.id}}>{{item.name}}</option>
                       </select>
                   </div>
               </div>

               <div class="weui_cell weui_cell_select">
                   <div class="weui_cell_hd">
                       <label class="weui_label style">
                           <span class="span_icon spa_address"></span>
                       </label>
                   </div>
                   <div class="weui_cell_bd weui_cell_primary">
                      <select class="weui_select" name="city" @change="cityChange" v-model="city">
                         <option value="-1">请选择城市</option>
                           <option v-for="item in cityList" value={{item.id}}>{{item.name}}</option>
                       </select>
                   </div>
               </div>

               <div class="weui_cell weui_cell_select">
                   <div class="weui_cell_hd">
                       <label class="weui_label style">
                           <span class="span_icon spa_address"></span>
                       </label>
                   </div>
                   <div class="weui_cell_bd weui_cell_primary">
                       <select class="weui_select" name="area" @change="areaChange" v-model="area">
                         <option value="-1">请选择区县</option>
                           <option v-for="item in areaList" value={{item.id}}>{{item.name}}</option>
                       </select>
                   </div>
               </div>

          </div>
          <p style="font-size:14px;padding:0.5rem;">
            注册会员即同意 <a v-link="'/user/heGreement'" style="color:#81b57b;text-decoration:underline">《豪恩帮用户协议》</a>
          </p>
          <div class="weui_btn_area">
              <input type="submit" class="weui_btn weui_btn_primary" id="sign_in" @click="save()" value="注册">
              <!--<a class="weui_btn weui_btn_primary" v-link="'/auth/personLogin'">注册</a>-->
          </div>
          <div class="weui_btn_area mt10 clearfix">
              <a class="btn_forget right" v-link="'/auth/personLogin'">立即登录</a>
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
         isEmpty:"",
         password:"",
         sessionId:"",
         disabled:true,
         type:true,
         value:"",
         xxId:"",
         code:"获取验证码",
         aginPassword:"",
          refereesMobile:"",
         provinceList: [],
         cityList: [],
         areaList: [],
         province:"-1",
         city:"-1",
         area:"-1"
        }
      },
      ready () {
        document.title = '个人注册'
        this.refereesMobile = this.$route.params.mobile
        userService.getRegionByPid(this,0,'p')
      },
      methods: {
        onShow: function () {
          this.hide = !this.hide
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

       provinceChange: function(){

          this.cityList = []
          this.areaList = []
          if(this.province != '-1') {
            userService.getRegionByPid(this,this.province,'c')
          }
          this.city = -1
          this.area=-1


         },

         cityChange: function(){

         this.areaList = []
          if(this.city != '-1') {
             userService.getRegionByPid(this,this.city,'a')
          }
           this.area = -1

         },

        areaChange: function(){

         },


          aginPasswordInvalid(){
                this.$set('toasttext','请确认密码');
                this.$set('toastshow',true);
             },
             blurAginPassword:function(){
                var that = this
                var aginPassword = that.$get('aginPassword')
                var password = this.$get('password')
                if(aginPassword!=password){
                  this.$set('toasttext','密码不一致哦');
                  this.$set('toastshow',true);
                }
             },

            refereesMobilenvalid:function(){
              var refereesMobile = this.$get('refereesMobile')
              if(!refereesMobile){

              }else{
                this.$set('toasttext','推荐人手机号不对');
                this.$set('toastshow',true)
              }
            },

       isPostCodeInvalid(){
           this.$set('toasttext','验证码不正确');
           this.$set('toastshow',true);
       },
       passwordInvalid(){
           this.$set('toasttext','密码不正确');
           this.$set('toastshow',true);
       },

       getCodeBtn:function(e){
          var btn = e.currentTarget
           var that = this
           var mobile = that.$get('mobile')
           var isPostCod = that.$get('isPostCode')
           var sendMemRegArr = {mobile:mobile}
           userService.sendMemRegisterAuthCode(that,sendMemRegArr,btn)
       },

       save: function(){
         var that = this
         var tmobile = that.$get('tmobile')
         var isPostCode = that.$get('isPostCode')
         var password = that.$get('password')
         var mobile = that.$get('mobile')
         var refereesMobile = that.$get('refereesMobile')
         var province = that.province
         var city = that.city
         var area = that.area

          if(this.province==-1){
            this.$set('toasttext','请选择省');
            this.$set('toastshow',true)
          }
          else if(this.city==-1){
             this.$set('toasttext','请选择市');
                      this.$set('toastshow',true)
          }
          else if(this.area==-1){
              this.$set('toasttext','请选择县');
              this.$set('toastshow',true)
          }else{
          that.$validate(true, function () {

            var registerUserArr = {
               mobile:mobile,
               password:password,
               authCode:isPostCode,
               uid:that.sessionId,
               msgAuthcodeId:that.xxId,
               province:province,
               city:city,
               area:area,
               refereesMobile:refereesMobile
             }
             var mobileReg = /^(1[38][0-9]|14[57]|15[012356789]|17[0678])[0-9]{8}$/
             if (that.$validation.invalid) {
                 if(!refereesMobile){
                    userService.registerUser(that,registerUserArr)
                 }
             }else{
               if(mobileReg.test(refereesMobile)){
                 console.log(registerUserArr)
                 userService.registerUser(that,registerUserArr)
               }else{
                 this.$set('toasttext','推荐人手机号不对');
                 this.$set('toastshow',true)
               }
             }
         })
         }
       }
      }
    }
</script>
