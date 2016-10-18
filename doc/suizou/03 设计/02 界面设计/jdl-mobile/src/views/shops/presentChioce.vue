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
                  <span style="position:absolute;left:104px;line-height:44px;" v-show="agentHide">请选择代理级别</span>
                  <select class="weui_select" v-model="bank" @change="bankChange()">
                    <option v-for="option in optionList" value={{option.id}}>{{option.kindname}}</option>
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
            <input type="submit" class="weui_btn weui_btn_primary saveBasic" value="保存" @click="save(this.value)">
        </div>
    </form>
    </validator>
    <Toast :toastshow.sync="toastshow" :toasttext="toasttext"></Toast>
</div>
</template>



<script>

    import Bar from '../components/shopHead.vue'
    import Toast from '../components/toast.vue'
    import mchService from '../../api/mchService'
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
          isEmpty:"",
           provinceList: [],
           cityList: [],
           areaList: [],
          selectValue:"",
          agentHide:true,
          toastshow:false,
          toasttext:"",
          selected:"",
          province:"-1",
          city:"-1",
          area:"-1",
          optionList:[],
          bank:""
        }
      },
      ready () {
        document.title = '银行选择'
        userService.getRegionByPid(this,0,'p')
        userService.getRegionByPid(this,this.province,'c')
        userService.getRegionByPid(this,this.city,'a')
        mchService.bankChioce(this)
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


        isEmptyInvalid(){
           this.$set('toasttext','姓名不能为空');
           this.$set('toastshow',true);
         },
         cardNoInvalid(){
            this.$set('toasttext','卡号不正确');
            this.$set('toastshow',true);
          },
        bankChange:function () {
          this.agentHide=false;
        },
        save:function(value){
            var that = this
            var isEmpty = that.$get('isEmpty')
            var cardNo = that.$get('cardNo')

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
              if (that.$validation.invalid) {

              }else{
                 var presentChioceArr = {openName:isEmpty,cardNo:cardNo,bankName:that.selectValue,openArea:value}
                 mchService.presentChioce(that,presentChioceArr)
              }
            })
            }
        }
      }
    }
</script>
