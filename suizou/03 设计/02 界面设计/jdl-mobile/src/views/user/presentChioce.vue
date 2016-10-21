<template>
  <Bar></Bar>
  <div class="bd absolute pt">
  <validator name="validation">
    <form action="#" id="form" onsubmit="return false">
        <div class="weui_cells weui_cells_form mt0 w90">
            <div class="weui_cell weui_cell_select">
                <div class="weui_cell_hd">
                    <label class="weui_label style">
                        开户行名称
                    </label>
                </div>
                <div class="weui_cell_bd weui_cell_primary">
                  <span style="position:absolute;left:104px;line-height:44px;" v-show="agentHide">请选择银行类别</span>
                  <select class="weui_select" v-model="bank" @change="bankChange()">
                    <option v-for="option in optionList" value={{option.kindname}}>{{option.kindname}}</option>
                  </select>
                </div>
            </div>
          <div class="weui_cell">
            <div class="weui_cell_hd">
              <label class="weui_label style">
                详细地址
              </label>
            </div>
            <div class="weui_cell_bd weui_cell_primary">
              <input class="weui_input" @invalid="addressInvalid" initial="off" detect-change="off" id="addressInfor" v-model="addressInfor" v-validate:addressInfor="['addressInfor']"  type="text"  placeholder='请输入详细地址'>
            </div>
          </div>

            <div class="weui_cell">
                <div class="weui_cell_hd">
                    <label class="weui_label style">
                        开户姓名
                    </label>
                </div>
                <div class="weui_cell_bd weui_cell_primary">
                    <input class="weui_input" @invalid="isEmptyInvalid" initial="off" detect-change="off" v-model="isEmpty" id="isEmpty" type="text" v-validate:isEmpty="['isEmpty']"  placeholder='请输入昵称'>
                </div>
            </div>
            <div class="weui_cell">
                <div class="weui_cell_hd">
                    <label class="weui_label style">
                        银行卡号
                    </label>
                </div>
                <div class="weui_cell_bd weui_cell_primary">
                    <input class="weui_input" @invalid="cardNoInvalid" initial="off" detect-change="off" v-model="cardNo" id="cardNo" type="text" v-validate:cardNo="['cardNo']"  placeholder='请输入开户卡号'>
                </div>
            </div>
        </div>
        <div class="weui_btn_area">
            <input type="submit" class="weui_btn weui_btn_primary  saveBasic" value="保存" @click="save()">
        </div>
    </form>
    </validator>
    <Toast :toastshow.sync="toastshow" :toasttext="toasttext"></Toast>
</div>
</template>



<script>
    import Bar from '../components/headBar.vue'
    import Toast from '../components/toast.vue'
    import userService from '../../api/userService'
    export default {
        components: {
          Bar,
          Toast
        },
      data () {
        return {
          hide:true,
          cardNo:"",
          value:"",
          isEmpty:"",
          agentHide:true,
          addressInfor:"",
          selectValue:"",
          toastshow:false,
          toasttext:"",
          selected:"",
          bank:"",

          optionList:[]
        }
      },
      ready () {
        document.title = '银行选择'

        userService.bankChioce(this)
      },
      watch: {
          selected: function(val) {
              this.selectValue = val
          }
      },
      methods: {
        onShow: function () {
          this.hide = !this.hide
        },


        addressInvalid:function(){
          this.$set('toasttext','请输入详细地址');
          this.$set('toastshow',true);
        },

        isEmptyInvalid(){
           this.$set('toasttext','姓名不能为空');
           this.$set('toastshow',true);
         },
        bankChange:function () {
          this.agentHide=false;
        },

         cardNoInvalid(){
            this.$set('toasttext','卡号不正确');
            this.$set('toastshow',true);
          },
        save:function(){
            var that = this
            var isEmpty = that.$get('isEmpty')
            var cardNo = that.$get('cardNo')


           var province = that.province
            var city = that.city
            var area = that.area

                   if(this.agentHide==true){
                     that.$set('toasttext','请选择开户行');
                     that.$set('toastshow',true)
                   }

                  else{

            that.$validate(true, function () {
              if (that.$validation.invalid) {

              }else{
                 var presentChioceArr = {openName:isEmpty,cardNo:cardNo,bankName:that.bank,openArea:that.addressInfor}
                 userService.presentChioce(that,presentChioceArr)
              }
            })
            }
        }
      }
    }
</script>
