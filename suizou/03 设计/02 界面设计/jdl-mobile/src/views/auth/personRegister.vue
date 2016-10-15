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
                      <input class="weui_input"  initial="off" detect-change="off" v-model="aginPassword" id="aginPassword" type="password"   placeholder="请确认密码"/>
                  </div>
              </div>
               <div class="weui_cell">
                    <div class="weui_cell_hd">
                        <label class="weui_label">
                            <span class="span_icon spa_person"></span>
                        </label>
                    </div>
                    <div class="weui_cell_bd weui_cell_primary">
                          <input class="weui_input" initial="off"  detect-change="off" v-model="refereesMobile" id="refereesMobile" type="text"  placeholder='请输入推荐人手机号'>
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
                      <select class="weui_select" name="area" v-model="area">
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
              <input type="submit" class="weui_btn weui_btn_primary" id="sign_in" @click="save(this.value)" value="注册">
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
  import {API_ROOT} from '../../config'
  export default {
      components: {
        //注册组件
          Toast,
          Bar
      },
      data () {
        return {
         toastshow:false,
         mobile:"",
          valid: true,
         toasttext:"",
         isPostCode:"",
         isEmpty:"",
         password:"",
         sessionId:"",
         disabled:false,
         type:false,
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
        userService.getRegionByPid(this,0,'p')
        this.refereesMobile = this.$route.query.mobile
        console.log(this.refereesMobile)
        console.log(JSON.stringify(this.provinceList))
      },
      methods: {

        showErrMsg(errMsg) {
          this.$set('toasttext',errMsg);
          this.$set('toastshow',true);
        },

       getCodeBtn:function(e){
         var reg = /^(1[38][0-9]|14[57]|15[012356789]|17[0678])[0-9]{8}$/
          if(!reg.test(this.mobile)) {
            this.showErrMsg("请输入有效的手机号")
            return
          }
           var btn = e.currentTarget
           var mobile = this.mobile
           var sendMemRegArr = {mobile:mobile}
           userService.sendMemRegisterAuthCode(this,sendMemRegArr,btn)
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

       save: function(){

         var mobileReg = /^(1[38][0-9]|14[57]|15[012356789]|17[0678])[0-9]{8}$/
         if(!mobileReg.test(this.mobile)){
           this.showErrMsg("无效的手机号")
           return
         }

         if(!this.isPostCode){
           this.showErrMsg("验证码不能为空")
           return
         }

         if(!this.password){
           this.showErrMsg("请输入密码")
           return
         }

         if(!this.aginPassword){
           this.showErrMsg("请输入确认密码")
           return
         }

         if(this.password != this.aginPassword) {
           this.showErrMsg("密码不一致")
           return
         }

         if(this.refereesMobile && !mobileReg.test(this.refereesMobile)){
           this.showErrMsg("推荐人手机号格式不正确")
           return
         }

          if(this.province==-1){
            this.showErrMsg("请选择省")
            return
          }
          if(this.city==-1){
            this.showErrMsg("请选择市")
            return
          }
          if(this.area==-1){
            this.showErrMsg("请选择县")
            return
          }

         var registerUserArr = {
           mobile:this.mobile,
           password:this.password,
           authCode:this.isPostCode,
           msgAuthcodeId:this.xxId,
           province:this.province,
           city:this.city,
           area:this.area,
           refereesMobile:this.refereesMobile
         }

         userService.registerUser(this,registerUserArr)


         }
      }
    }
</script>
