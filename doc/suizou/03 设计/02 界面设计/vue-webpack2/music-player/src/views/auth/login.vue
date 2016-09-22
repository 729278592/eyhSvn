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
                        <input class="weui_input" @invalid="telonInvalid" initial="off" detect-change="off" v-model="mobile" id="mobile" type="tel" v-validate:mobile="['mobile']" value="13678478463">
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
          </div>
          <div class="weui_btn_area mt10">
              <!--<input type="submit" class="weui_btn weui_btn_primary" @click="save" value="登陆">-->
              <a class="weui_btn weui_btn_primary" @click="save" v-link="'/shops/index'">登陆</a>
          </div>
          <div class="weui_btn_area mt10 clearfix">
              <a class="btn_forget left" v-link="'/auth/register'">无账号,立即注册</a>
              <a class="btn_forget right" v-link="'/auth/forget'">忘记密码</a>
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
         toastshow:false,
         hide:true,
         mobile:"",
         toasttext:"",
         aginPassword:"",
         password:""
        }
      },
      ready () {
        document.title = '登陆'
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
       passwordInvalid(){
           this.$set('toasttext','密码不正确');
           this.$set('toastshow',true);
       },
       save: function(){
         var that = this
         var isEmpty = that.$get('isEmpty')
         var password = that.$get('password');
         that.$validate(true, function () {
             if (that.$validation.invalid) {
                 //验证无效
             }else{
                 that.$set('toasttext','验证通过')
                 that.$set('toastshow',true)
             }
         })
       }
      }
    }
</script>
