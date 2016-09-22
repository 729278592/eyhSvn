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
                      <input class="weui_input" @invalid="telonInvalid" initial="off" detect-change="off" v-model="mobile" id="mobile" type="tel" v-validate:mobile="['mobile']"  placeholder='请输入手机号码'>
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
          isPostCode:""
        }
      },
      ready () {
        document.title = '修改手机'
      },
      methods: {
        onShow: function () {
          this.hide = !this.hide
        },
        returnPage:function(){
          window.history.go(-1)
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
      save: function(){
        var that = this
        var mobile = that.$get('mobile')
        that.$validate(true, function () {
            if (that.$validation.invalid) {

            }else{
                 that.$set('toasttext','验证通过');
                 that.$set('toastshow',true);
                    //验证通过做注册请求
                   /*that.$http.post('http://192.168.30.235:9999/rest/user/register',{'account':telephones,'pwd':pw1,'pwd2':pw2}).then(function(data){
                      if(data.data.code == '0'){
                          that.$set('toasttext','注册成功');
                           that.$set('toastshow',true);
                      }else{
                          that.$set('toasttext','注册失败');
                           that.$set('toastshow',true);
                      }
                  },function(error){
                      //显示返回的错误信息
                      that.$set('toasttext',String(error.status));
                      that.$set('toastshow',true);
                  })*/
            }
          })
        }
      }
    }
</script>
