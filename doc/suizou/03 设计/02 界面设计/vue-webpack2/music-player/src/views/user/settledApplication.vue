<template>
<div class="hd">
      <a>
          <a class="return" @click="returnPage()"></a>
      </a>
      家得利
      <div class="right nav_block">
          <a v-link="'/user/shopCart'" class="shop_cat"></a>
              <a class="dot_block" @click.stop="onShow"></a>
              <ul class="nav_link" :class="{'hide':hide}">
              <li>
                  <a v-link="'/user/myMessage'">
                      消息
                  </a>
              </li>
              <li>
                  <a v-link="'/home/index'">
                      首页
                  </a>
              </li>
          </ul>
      </div>
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
                      <input class="weui_input" @invalid="isEmptyCompanyInvalid" initial="off" detect-change="off" v-model="isEmptyCompany" id="isEmptyCompany" type="text" v-validate:isEmptyCompany="['isEmpty']"  placeholder='请输入公司姓名'>
                  </div>
              </div>
              <div class="weui_cell">
                  <div class="weui_cell_hd">
                      <label class="weui_label">
                          <span class="span_icon spa_person"></span>
                      </label>
                  </div>
                  <div class="weui_cell_bd weui_cell_primary">
                      <input class="weui_input" @invalid="isEmptyInvalid" initial="off" detect-change="off" v-model="isEmpty" id="isEmpty" type="text" v-validate:isEmpty="['isEmpty']"  placeholder='请输入联系人姓名'>
                  </div>
              </div>
              <div class="weui_cell">
                  <div class="weui_cell_hd">
                      <label class="weui_label">
                          <span class="span_icon spa_phone"></span>
                      </label>
                  </div>
                  <div class="weui_cell_bd weui_cell_primary">
                        <input class="weui_input" @invalid="telonInvalid" initial="off" detect-change="off" v-model="mobile" id="mobile" type="tel" v-validate:mobile="['mobile']" placeholder='请输入手机号码'>
                  </div>
              </div>
              <div class="weui_cell">
                  <div class="weui_cell_hd">
                      <label class="weui_label">
                          <span class="span_icon spa_code"></span>

                      </label>
                  </div>
                  <div class="weui_cell_bd weui_cell_primary">
                      <input class="weui_input codeInput"  @invalid="isPostCodeInvalid" initial="off" detect-change="off" v-model="isPostCode" id="isPostCode" type="number" v-validate:isPostCode="['isPostCode']" placeholder="验证码为4位有效数字"/>
                      <button type="button" class="getCode disabled" disabled="disabled"  id="getCode">获取验证码</button>
                  </div>
              </div>
              <div class="weui_cell">
                  <div class="weui_cell_hd">
                      <label class="weui_label">
                          <span class="span_icon spa_inforAddress"></span>
                      </label>
                  </div>
                  <div class="weui_cell_bd weui_cell_primary">
                      <input class="weui_input" type="text" placeholder="请输入所在地址" name="nowAddress"/>
                  </div>
              </div>
              <div class="weui_cell">
                  <div class="weui_cell_hd">
                      <label class="weui_label">
                          <span class="span_icon spa_address"></span>
                      </label>
                  </div>
                  <div class="weui_cell_bd weui_cell_primary">
                      <input class="weui_input" type="text" placeholder="请填写详细地址" name="inforAddress"/>
                  </div>
              </div>
              <div class="weui_cell">
                  <div class="weui_cell_hd">
                      <label class="weui_label">
                          <span class="span_icon spa_agent"></span>
                      </label>
                  </div>
                  <div class="weui_cell_bd weui_cell_primary">
                      <input class="weui_input" type="text" placeholder="请填写代理级别" name="agent"/>
                  </div>
              </div>
             <div class="weui_cell">
              <div class="weui_cell_hd">
                  <label class="weui_label">
                      <span class="span_icon spa_yagent"></span>
                  </label>
              </div>
              <div class="weui_cell_bd weui_cell_primary">
                  营业执照照片
              </div>
            </div>
            <div class="weui_cell">
                <div class="weui_cell_bd weui_cell_primary">
                    <div class="weui_uploader">
                        <div class="weui_uploader_bd">
                            <ul class="weui_uploader_files clearfix">
                                <li class="weui_uploader_file" style="background-image:url(http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/)"></li>
                                <li class="weui_uploader_file" style="background-image:url(http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/)"></li>
                                <li class="weui_uploader_file mr0" style="background-image:url(http://shp.qpic.cn/weixinsrc_pic/pScBR7sbqjOBJomcuvVJ6iacVrbMJaoJZkFUIq4nzQZUIqzTKziam7ibg/)"></li>
                            </ul>
                            <div class="weui_uploader_input_wrp">
                                <input class="weui_uploader_input" type="file" accept="image/*" multiple="">
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
                    <input class="weui_input" type="text" placeholder="推荐人" name="inforAddress"/>
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
         isEmptyCompany:"",
         isEmpty:""
        }
      },
      ready () {
        document.title = '入驻申请'
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
       telonInvalid(){
           this.$set('toasttext','手机号不正确');
           this.$set('toastshow',true);
       },
       isPostCodeInvalid(){
           this.$set('toasttext','验证码不正确');
           this.$set('toastshow',true);
       },
       passwordInvalid(){
           this.$set('toasttext','密码不正确');
           this.$set('toastshow',true);
       },
       aginPasswordInvalid(){
          if(this.$get('aginPassword') != this.$get('password')){
            this.$set('toasttext','密码不一致哦');
            this.$set('toastshow',true);
          }
       },
       save: function(){
         var that = this
         var isEmpty = that.$get('isEmpty')
         var password = that.$get('password');
         var aginPassword = that.$get('aginPassword')
         that.$validate(true, function () {
             if (that.$validation.invalid) {
                 //验证无效


             }else{
                  if(aginPassword != password){
                    that.$set('toasttext','密码不一致哦');
                    that.$set('toastshow',true);
                  }
                  else{
                    that.$set('toasttext','验证通过');
                    that.$set('toastshow',true);
                  }
             }
         })
       }
      }
    }
</script>
