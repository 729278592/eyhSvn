<template>
  <div class="hd">
      <a class="return" @click="returnPage()">
          <i class="fa fa-angle-left"></i>
      </a>
      个人注册
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
                        <input class="weui_input" @invalid="telonInvalid" initial="off" detect-change="off" v-model="mobile" id="mobile" type="tel" v-validate:mobile="['mobile']" placeholder='请输入手机号码' @keyup="isDisables($event)" value="15111957698">
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
                      <button type="button" class="getCode" :class="{'disabled':disabled}" disabled = {{type}} id="getCode" @click="getCodeBtn()">获取验证码</button>
                  </div>
              </div>

              <div class="weui_cell">
                  <div class="weui_cell_hd">
                      <label class="weui_label">
                          <span class="span_icon spa_lock"></span>
                      </label>
                  </div>
                  <div class="weui_cell_bd weui_cell_primary">
                      <input class="weui_input" @invalid="passwordInvalid" initial="off" detect-change="off" v-model="password" id="password" type="password" v-validate:password="['passw']" placeholder="密码为6-20位的任何字类字符" value="123456"/>
                  </div>
              </div>
               <div class="weui_cell">
                    <div class="weui_cell_hd">
                        <label class="weui_label">
                            <span class="span_icon spa_person"></span>
                        </label>
                    </div>
                    <div class="weui_cell_bd weui_cell_primary">
                          <input class="weui_input" @invalid="tmobileInvalid" initial="off" detect-change="off" id="tmobile" type="text" v-validate:tmobile="['tmobile']"  placeholder='请输入推荐人手机号' value="15111957698">
                    </div>
                </div>
                <div class="weui_cell">
                    <div class="weui_cell_hd">
                        <label class="weui_label">
                            <span class="span_icon spa_address"></span>
                        </label>
                    </div>
                    <div class="weui_cell_bd weui_cell_primary">
                        <Address v-ref:msg></Address>
                    </div>
                </div>
          </div>
          <div class="weui_btn_area">
              <input type="submit" class="weui_btn weui_btn_primary" id="sign_in" @click="save(this.value)" value="注册">
              <!--<a class="weui_btn weui_btn_primary" v-link="'/auth/login'">注册</a>-->
          </div>
          <div class="weui_btn_area mt10 clearfix">
              <a class="btn_forget right" v-link="'/auth/login'">立即登录</a>
          </div>
      </form>
    </validator>
    <Toast :toastshow.sync="toastshow" :toasttext="toasttext"></Toast>
</div>
</template>
<script>
  import Toast from '../components/toast.vue'
  import website from '../api/website'
  export default {
      components: {
        //注册组件
          Address,
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
         password:"",
         sessionId:"",
         disabled:true,
         type:true,
         value:"",
         xxId:""
        }
      },
      ready () {
        document.title = '注册'
        this.value = this.$refs.msg.$el.value
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
           this.$set('toasttext','验证码不正确');
           this.$set('toastshow',true);
       },
       passwordInvalid(){
           this.$set('toasttext','密码不正确');
           this.$set('toastshow',true);
       },
       tmobileInvalid(){
           this.$set('toasttext','推荐人手机号不正确');
           this.$set('toastshow',true)
       },
       getCodeBtn:function(){
           var that = this
           var mobile = that.$get('mobile')
           var isPostCod = that.$get('isPostCode')
           that.$http.post(website.domainName+website.linkObj.sendMchRegisterAuthCode,{mobile:mobile}).then(function(response){
               var res = response.data
               console.log(JSON.stringify(res.datas));
               if(res.status == "ok") {
                 this.xxId = res.datas
                 this.$set('toasttext','验证码发送成功');
                 this.$set('toastshow',true)
               } else {
                  alert(res.message);
               }
            }, function(response){
              // 响应错误回调
            })
       },

       save: function(value){
        var addressArr = value.split(' ')
         var that = this
         var tmobile = that.$get('tmobile')
         var isPostCode = that.$get('isPostCode')
         var password = that.$get('password')
         var mobile = that.$get('mobile')
         that.$validate(true, function () {
             if (that.$validation.invalid) {
                 //验证无效
             }else{
                that.$http.post(website.domainName+website.linkObj.registerUser,{mobile:mobile,password:password,authCode:isPostCode,refereesMobile:tmobile,uid:that.sessionId,province:addressArr[0],city:addressArr[1],area:addressArr[2],msgAuthcodeId:that.xxId}).then(function(response){
                    var res = response.data
                    if(res.status == "ok") {
                    // 路由登录
                    this.$router.go('/auth/login')

                    } else {
                       alert(res.message);
                    }
                 }, function(response){
                   // 响应错误回调
                 })
             }
         })
       }
      }
    }
</script>
