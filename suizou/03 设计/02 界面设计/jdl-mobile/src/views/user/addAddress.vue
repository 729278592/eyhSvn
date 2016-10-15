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
                          <input class="weui_input" @invalid="isEmptyInvalid" initial="off" detect-change="off" v-model="isEmpty" id="isEmpty" type="text" v-validate:isEmpty="['isEmpty']"  placeholder='请输入昵称'>
                    </div>
                </div>
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
                        <input class="weui_input" @invalid="addressIsEmptyInvalid" initial="off" detect-change="off" v-model="addressIsEmpty" id="addressIsEmpty" type="text" v-validate:addressIsEmpty="['addressIsEmpty']"  placeholder='请填写详细地址'>
                    </div>
                </div>
            </div>
            <div class="weui_btn_area fixed">
                <input type="submit" class="weui_btn b0 weui_btn_primary" id="saveBtn" value="保存" @click="addAddress()">
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
          addressIsEmpty:"",
          isEmpty:"",
          mobile:"",
          toastshow:false,
          toasttext:"",
          value:"",
          pcaAddress:"",
          paramsAddressId:"",
          provinceList: [],
           cityList: [],
           areaList: [],
           province:"-1",
           city:"-1",
           area:"-1"
        }
      },
      ready () {
        document.title = '新建地址'
        this.paramsAddressId = this.$route.params.addressId
        userService.getRegionByPid(this,0,'p')
        if(this.$route.params.addressId !=undefined){
          var addAddressArr = {
            addressId:this.$route.params.addressId
          }
          userService.addAddress(this,addAddressArr)
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
           this.$set('toasttext','昵称不能为空');
           this.$set('toastshow',true);
       },
       telonInvalid(){
            this.$set('toasttext','手机号不正确');
            this.$set('toastshow',true);
        },
        addressIsEmptyInvalid(){
           this.$set('toasttext','联系地址不能为空');
           this.$set('toastshow',true);
       },
        addAddress:function(){
          var that = this
          var isEmpty = that.$get('isEmpty')
          var mobile = that.$get('mobile')
          var addressIsEmpty = that.$get('addressIsEmpty')

          var province = that.province
          var city = that.city
          var area = that.area


         if(this.province==-1){
               that.$set('toasttext','请选择省');
               that.$set('toastshow',true)
             }
             else if(this.city==-1){
                that.$set('toasttext','请选择市');
                         this.$set('toastshow',true)
             }
             else if(this.area==-1){
                 that.$set('toasttext','请选择县');
                 that.$set('toastshow',true)
             }else{
             that.$validate(true, function () {
                if (that.$validation.invalid) {
                }else{
                     that.$progress.start()
                     if(that.paramsAddressId==undefined){
                        that.paramsAddressId=" "
                     }
                      var saveAddressArr = {id:that.paramsAddressId,mobile:mobile,address:addressIsEmpty,consignee:isEmpty,province:province,city:city,area:area}
                       userService.saveAddress(that,saveAddressArr)
                }
              })
            }
        }
      }
    }
</script>
