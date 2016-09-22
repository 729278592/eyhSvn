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
      <validator name="validation" v-for="list in dataJson">
          <form action="#" id="form" onsubmit="return false">
              <div class="weui_cells weui_cells_form mt0 wauto">
                  <div class="weui_cell">
                      <div class="weui_cell_hd">
                          <label class="weui_label">
                              <span class="span_icon spa_person"></span>
                          </label>
                      </div>
                      <div class="weui_cell_bd weui_cell_primary">
                          <input class="weui_input" @invalid="isEmptyAccountInvalid" initial="off" detect-change="off" v-model="isEmptyAccount" id="isEmptyAccount" type="number" v-validate:isEmptyAccount="['isEmpty']"  placeholder='请输入消费账号'>
                      </div>
                  </div>
                   <div class="weui_cell">
                      <div class="weui_cell_hd">
                          <label class="weui_label">
                              <span class="span_icon spa_money"></span>
                          </label>
                      </div>
                      <div class="weui_cell_bd weui_cell_primary">
                          <input class="weui_input" @invalid="isEmptyMoneyInvalid" initial="off" detect-change="off" v-model="isEmptyMoney" id="isEmptyMoney" type="number" v-validate:isEmptyMoney="['isEmpty']"  placeholder='请输入消费金额'>
                      </div>
                   </div>
              </div>
              <div class="integralInfor">
                  <p>返还积分 : <span class="verdana">{{list.jf}}</span></p>
                  <p>应付金额 : ￥<span class="verdana">{{list.money}}</span></p>
              </div>
              <div class="weui_btn_area fixed">
                  <!--<input type="button" class="weui_btn b0 weui_btn_primary" @click="save" value="支付">-->
                  <a class="weui_btn b0 weui_btn_primary" v-link="'/user/payChioce'">支付</a>
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
          dataJson:[],
          isEmptyMoney:"",
          isEmptyAccount:"",
          toastshow:false,
          toasttext:""
        }
      },
      ready () {
        document.title = '积分补足'
        this.$http.get('../../static/data/integralComplement.json').then(function(response){
           this.dataJson = response.data
        }, function(response){
        // 响应错误回调
        })
      },
      methods: {
        onShow: function () {
          this.hide = !this.hide
        },
        returnPage:function(){
          window.history.go(-1)
        },
        isEmptyAccountInvalid(){
            this.$set('toasttext','账号不能为空');
            this.$set('toastshow',true)
        },
        isEmptyMoneyInvalid(){
            this.$set('toasttext','金额不能为空');
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
