<template>
  <div class="hd">
        <a class="return" @click="returnPage()">
            <i class="fa fa-angle-left"></i>
        </a>
        代理申请
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
                      <input class="weui_input"  v-model="isEmptyCompany" id="isEmptyCompany" type="text" placeholder='请输入公司名' maxlength="32" >
                  </div>
              </div>
              <div class="weui_cell">
                  <div class="weui_cell_hd">
                      <label class="weui_label">
                          <span class="span_icon spa_person"></span>
                      </label>
                  </div>
                  <div class="weui_cell_bd weui_cell_primary">
                      <input class="weui_input" v-model="isEmpty" id="isEmpty" type="text"  placeholder='请输入联系人姓名' maxlength="32">
                  </div>
              </div>
              <div class="weui_cell">
                  <div class="weui_cell_hd">
                      <label class="weui_label">
                          <span class="span_icon spa_phone"></span>
                      </label>
                  </div>
                  <div class="weui_cell_bd weui_cell_primary">
                        <input class="weui_input" v-model="mobile" id="mobile" type="tel" placeholder='请输入手机号码' >
                  </div>
              </div>
              <div class="weui_cell">
                  <div class="weui_cell_hd">
                      <label class="weui_label">
                          <span class="span_icon spa_code"></span>
                      </label>
                  </div>
                  <div class="weui_cell_bd weui_cell_primary">
                      <input class="weui_input codeInput" v-model="isPostCode" id="isPostCode" type="number" placeholder="验证码为6位有效数字" />
                      <input type="button" class="getCode" :class="{'disabled':disabled}" disabled = {{type}} id="getCode" @click="getCodeBtn($event)" v-model="code" value = {{code}} />
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
                    <select class="weui_select" @change="areaChange" v-model="area">
                      <option value="-1">请选择区县</option>
                        <option v-for="item in areaList" value={{item.id}}>{{item.name}}</option>
                    </select>
                </div>
            </div>
              <div class="weui_cell">
                  <div class="weui_cell_hd">
                      <label class="weui_label">
                          <span class="span_icon spa_address"></span>
                      </label>
                  </div>
                  <div class="weui_cell_bd weui_cell_primary">
                    <input class="weui_input" v-model="addressIsEmpty" id="addressIsEmpty" type="text"  placeholder='请填写详细地址' maxlength="50">
                  </div>
              </div>
             <div class="weui_cell" style="display:none">
              <div class="weui_cell_hd">
                  <label class="weui_label">
                      <span class="span_icon spa_yagent"></span>
                  </label>
              </div>
              <div class="weui_cell_bd weui_cell_primary">
                  营业执照照片
              </div>
            </div>
            <div class="weui_cell" style="display:none">
                <div class="weui_cell_bd weui_cell_primary">
                    <div class="weui_uploader">
                        <div class="weui_uploader_bd">
                            <ul class="weui_uploader_files clearfix">
                                <li class="weui_uploader_file">
                                    <!--<img src="../../../static/images/defaultImg.jpg" />-->
                                    <img src="../../../static/images/defaultImg.jpg">
                                </li>
                            </ul>
                            <div class="weui_uploader_input_wrp">
                                <input class="weui_uploader_input" type="file" accept="image/*">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
             <div class="weui_cell weui_cell_select">
                <div class="weui_cell_hd">
                    <label class="weui_label style">
                        <span class="span_icon spa_agent"></span>
                    </label>
                </div>
                <div class="weui_cell_bd weui_cell_primary">
                    <span style="position:absolute;left:40px;line-height:44px;" v-show="agentHide">请选择代理级别</span>
                    <select class="weui_select" v-model="agentLevel" @change="agentChange()">
                        <option v-for="option in optionList" value={{option.id}}>{{option.name}}</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="weui_btn_area">
            <input type="submit" class="weui_btn weui_btn_primary" @click="save()" value="申请">
        </div>
      </form>
    </validator>
    <Toast :toastshow.sync="toastshow" :toasttext="toasttext"></Toast>
</div>
</template>
<script>
   import Toast from '../components/toast.vue'
   import website from '../api/website'
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
         isEmptyCompany:"",
         isEmpty:"",
         disabled:false,
         addressIsEmpty:"",
         refereesMobile:"",
         xxId:"",
         type:false,
         code:"获取验证码",
         optionList:[],
         agentLevel:"",
         agentHide:true,
         provinceList: [],
         cityList: [],
         areaList: [],
         province:"-1",
         city:"-1",
         area:"-1"
        }
      },
      ready () {
        document.title = '代理申请';
        userService.getRegionByPid(this,0,'p');
        userService.getAgentLevel(this)
      },

      methods: {
        onShow: function () {
          this.hide = !this.hide
        },
        returnPage:function(){
          window.history.go(-1)
        },
       provinceChange: function(){
         this.cityList = [];
         this.areaList = [];
         if(this.province != '-1') {
           userService.getRegionByPid(this,this.province,'c')
         }
         this.city = -1;
         this.area=-1
       },
       cityChange: function(){
         this.areaList = [];
         if(this.city != '-1') {
            userService.getRegionByPid(this,this.city,'a')
         }
          this.area = -1
       },
       areaChange: function(){
       },
       agentChange:function(){
          this.agentHide = false
       },
      getCodeBtn:function(e){
        var reg = /^(1[38][0-9]|14[57]|15[012356789]|17[0678])[0-9]{8}$/;
        if(!reg.test(this.mobile)) {
          this.showErrMsg("请输入有效的手机号");
          return
        }
        var btn = e.currentTarget;
        var mobile = this.mobile;
        var mobileArr = {mobile:mobile};
        userService.sendAgentRegisterAuthCode(this,mobileArr,btn)
     },
        showErrMsg(errMsg) {
          this.$set('toasttext',errMsg);
          this.$set('toastshow',true);
        },
       save: function(){

         var mobileReg = /^(1[38][0-9]|14[57]|15[012356789]|17[0678])[0-9]{8}$/;
         if(!this.isEmptyCompany){
           this.showErrMsg("公司名不能为空");
           return
         }

         if(!this.isEmpty){
           this.showErrMsg("联系人不能为空");
           return
         }

         if(!mobileReg.test(this.mobile)){
           this.showErrMsg("无效的手机号");
           return
         }

         if(!this.isPostCode){
           this.showErrMsg("验证码不能为空");
           return
         }

         if(this.province==-1){
           this.showErrMsg("请选择省");
           return
         }

         if(this.city==-1){
           this.showErrMsg("请选择市");
           return
         }

         if(this.area==-1){
           this.showErrMsg("请选择县");
           return
         }

         if(!this.addressIsEmpty){
           this.showErrMsg("详细地址不能为空");
           return
         }


         if(this.agentHide==true){
           this.$set('toasttext','选择代理等级');
           this.$set('toastshow',true)
           return
         }

         var arr = {
           mobile:this.mobile,
           mchName:this.isEmptyCompany,
           authCode:this.isPostCode,
           realname:this.isEmpty,
           province:this.province,
           city:this.city,
           area:this.area,
           adress:this.addressIsEmpty,
           businessLicense:"",
           levelId:this.agentLevel,
           msgAuthcodeId:this.xxId
         };

         userService.registerAgent(this,arr)
       }
      }
    }
</script>
