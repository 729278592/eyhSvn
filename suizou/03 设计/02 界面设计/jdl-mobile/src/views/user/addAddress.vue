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
                          <input class="weui_input" v-model="isEmpty" id="isEmpty" type="text" placeholder='请输入昵称'>
                    </div>
                </div>
                <div class="weui_cell">
                    <div class="weui_cell_hd">
                        <label class="weui_label">
                            <span class="span_icon spa_phone"></span>
                        </label>
                    </div>
                    <div class="weui_cell_bd weui_cell_primary">
                      <input class="weui_input" v-model="mobile" id="mobile" type="tel" placeholder='请输入手机号码'>
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
                        <input class="weui_input" v-model="addressIsEmpty" id="addressIsEmpty" type="text"  placeholder='请填写详细地址'>
                    </div>
                </div>
            </div>
            <div class="weui_btn_area">
                <input type="submit" class="weui_btn weui_btn_primary" id="saveBtn" value="保存" @click="addAddress()">
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
        showErrMsg(errMsg) {
          this.$set('toasttext',errMsg);
          this.$set('toastshow',true);
        },

    addAddress:function(){
      if(!this.isEmpty){
        this.showErrMsg("昵称不能为空");
        return
      }

      var mobileReg = /^(1[38][0-9]|14[57]|15[012356789]|17[0678])[0-9]{8}$/;
      if(!mobileReg.test(this.mobile)){
        this.showErrMsg("无效的手机号");
        return
      }
      if(this.province==-1){
        this.showErrMsg("请选择省");
        return
      }
      if(this.city==-1){
        this.showErrMsg("请选择市");
        return
      }
      if(this.area==-1){
        this.showErrMsg("请选择县");
        return
      }
      if(!this.addressIsEmpty){
        this.showErrMsg("联系地址不能为空");
        return
      }

      if(this.paramsAddressId==undefined){
        this.paramsAddressId=" "
      }
      var saveAddressArr = {
        id:this.paramsAddressId,
        mobile:this.mobile,
        address:this.addressIsEmpty,
        consignee:this.isEmpty,
        province:this.province,
        city:this.city,
        area:this.area
      };
      console.log(JSON.stringify(saveAddressArr))
      userService.saveAddress(this,saveAddressArr)
    }
      }
    }
</script>
