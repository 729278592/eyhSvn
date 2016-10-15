<template>
  <div class="hd">
      <a class="return" @click="returnPage()">
          <i class="fa fa-angle-left"></i>
      </a>
      入驻申请
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
                      <input class="weui_input" @invalid="isEmptyCompanyInvalid" initial="off" detect-change="off" v-model="isEmptyCompany" id="isEmptyCompany" type="text" v-validate:isEmptyCompany="['isEmpty']"  placeholder='请输入公司名' maxlength="32">
                  </div>
              </div>
              <div class="weui_cell">
                  <div class="weui_cell_hd">
                      <label class="weui_label">
                          <span class="span_icon spa_person"></span>
                      </label>
                  </div>
                  <div class="weui_cell_bd weui_cell_primary">
                      <input class="weui_input" @invalid="isEmptyInvalid" initial="off" detect-change="off" v-model="isEmpty" id="isEmpty" type="text" v-validate:isEmpty="['isEmpty']"  placeholder='请输入联系人姓名' maxlength="32">
                  </div>
              </div>
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
                      <input class="weui_input codeInput"  @invalid="isPostCodeInvalid" initial="off" detect-change="off" v-model="isPostCode" id="isPostCode" v-validate:isPostCode="['isPostCode']" type="number" placeholder="验证码为6位有效数字" />
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
                               <select class="weui_select" name="area" @change="areaChange" v-model="area">
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
                    <input class="weui_input" @invalid="addressIsEmptyInvalid" initial="off" detect-change="off" v-model="addressIsEmpty" id="addressIsEmpty" type="text" v-validate:addressIsEmpty="['addressIsEmpty']"  placeholder='请填写详细地址' maxlength="50">
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
                                    <img src="../../../static/images/defaultImg.jpg"">
                                </li>
                            </ul>
                            <div class="weui_uploader_input_wrp">
                                <input class="weui_uploader_input" type="file" accept="image/*">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="weui_cell">
                <div class="weui_cell_hd">
                    <label class="weui_label">
                        <span class="span_icon spa_person"></span>
                    </label>
                </div>
                <div class="weui_cell_bd weui_cell_primary">
                    <input class="weui_input" initial="off"  @invalid="refereesMobilenvalid" detect-change="off" v-model="refereesMobile" id="refereesMobile" type="tel" v-validate:refereesMobile="['refereesMobile']"  placeholder='推荐人手机号'>
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
         disabled:true,
         addressIsEmpty:"",
         refereesMobile:"",
         xxId:"",
         type:true,
         code:"获取验证码",
          provinceList: [],
          cityList: [],
          areaList: [],
          province:"-1",
          city:"-1",
          area:"-1"
        }
      },
      ready () {
        document.title = '入驻申请'
        this.refereesMobile = this.$route.params.mobile
             userService.getRegionByPid(this,0,'p')
      },
      methods: {
        onShow: function () {
          this.hide = !this.hide
        },
        returnPage:function(){
          window.history.go(-1)
        },

        isEmptyCompanyInvalid(){
            this.$set('toasttext','公司名不能为空');
            this.$set('toastshow',true)
        },
        isEmptyInvalid(){
            this.$set('toasttext','联系人不能为空');
            this.$set('toastshow',true)
        },
        refereesMobilenvalid:function(){
          var refereesMobile = this.$get('refereesMobile')
          if(!refereesMobile){

          }else{
            this.$set('toasttext','推荐人手机号不对');
            this.$set('toastshow',true)
          }
        },
       telonInvalid(){
           this.$set('toasttext','手机号不正确');
           this.$set('toastshow',true);
       },
       isPostCodeInvalid(){
           this.$set('toasttext','验证码不正确');
           this.$set('toastshow',true);
       },
       addressIsEmptyInvalid(){
          this.$set('toasttext','地址不能为空');
          this.$set('toastshow',true);
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
         var isPostCod = that.$get('isPostCode')

         var sendMchCodeArr = {mobile:mobile}
         userService.sendMchRegisterAuthCode(that,sendMchCodeArr,btn)
     },
       save: function(){

         var that = this
         var isEmpty = that.$get('isEmpty')
         var isPostCode = that.$get('isPostCode');
         var isEmptyCompany = that.$get('isEmptyCompany')
         var addressIsEmpty = that.$get('addressIsEmpty');
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
                     var settledApplicationArr ={
                        mobile:mobile,
                        mchName:isEmptyCompany,
                        authCode:isPostCode,
                        realname:isEmpty,
                        province:province,
                        city:city,
                        area:area,
                        adress:addressIsEmpty,
                        businessLicense:"",
                        refereesMobile:refereesMobile,
                        msgAuthcodeId:that.xxId
                     }
                     var mobileReg = /^(1[38][0-9]|14[57]|15[012356789]|17[0678])[0-9]{8}$/

                     if (that.$validation.invalid) {

                        if(!refereesMobile){
                         console.log(settledApplicationArr)
                            userService.settledApplication(that,settledApplicationArr)
                        }
                     }else{
                        if(mobileReg.test(refereesMobile)){
                         console.log(settledApplicationArr)
                          userService.settledApplication(that,settledApplicationArr)
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
