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
                              <span class="span_icon spa_person"></span>
                          </label>
                      </div>
                      <div class="weui_cell_bd weui_cell_primary">
                          <input class="weui_input" @invalid="isEmptyInvalid" initial="off" detect-change="off" id="isEmpty" type="text" v-validate:isEmpty="['isEmpty']"  placeholder='请输入昵称'>
                      </div>
                  </div>
              </div>
              <div class="weui_btn_area fixed">
                  <input type="button" class="weui_btn b0 weui_btn_primary" @click="save" value="保存">
              </div>
          </form>
      </validator>
      <Toast :toastshow.sync="toastshow" :toasttext="toasttext"></Toast>
  </div>
</template>
<script>
  import Toast from '../components/toast.vue';
  export default {
     components: {
        //注册组件
          Toast
      },
      data () {
        return {
          hide:true,
          isEmpty:"",
          toastshow:false,
          toasttext:""
        }
      },
      ready () {
        document.title = '修改昵称'
      },
      methods: {
        onShow: function () {
          this.hide = !this.hide
        },
        returnPage:function(){
          window.history.go(-1)
        },
        isEmptyInvalid(){
            //设置提示信息内容
            this.$set('toasttext','昵称不能为空');
            //显示提示信息组件
            this.$set('toastshow',true)
        },
        save: function(){
          var that = this
          var isEmpty = that.$get('isEmpty')
          that.$validate(true, function () {
              if (that.$validation.invalid) {
                  //验证无效

              }else{
                   that.$set('toasttext','验证通过');
                   that.$set('toastshow',true);

              }
          })
        }
      }
    }
</script>

