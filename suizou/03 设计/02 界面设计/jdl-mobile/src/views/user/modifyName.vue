<template>
  <Bar></Bar>
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
                          <input class="weui_input" @invalid="isEmptyInvalid" initial="off" detect-change="off" id="isEmpty" v-model="isEmpty" type="text" v-validate:isEmpty="['isEmpty']"  placeholder='请输入昵称' maxlength=12>
                      </div>
                  </div>
              </div>
              <div class="weui_btn_area fixed">
                  <input type="button" class="weui_btn b0 weui_btn_primary" @click="save()" value="保存">
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
          isEmpty:"",
          toastshow:false,
          toasttext:""
        }
      },
      ready () {
        document.title = '修改昵称'
        this.isEmpty = this.$route.params.nickname
        console.log(this.$route.params.nickname)
      },
      methods: {
        onShow: function () {
          this.hide = !this.hide
        },

        isEmptyInvalid(){
            this.$set('toasttext','昵称不能为空');
            this.$set('toastshow',true)
        },
        save: function(){
          var that = this
          var isEmpty = that.$get('isEmpty')
          that.$validate(true, function () {
              if (that.$validation.invalid) {
                  //验证无效

              }else{
                 var modifyNameArr = {nickName:isEmpty}
                 console.log(modifyNameArr)
                 userService.modifyName(that,modifyNameArr)
              }
          })
        }
      }
    }
</script>

