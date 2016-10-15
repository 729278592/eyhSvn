<template>
  <Bar></Bar>
  <div class="bd absolute pd48">
  <validator name="validation">
      <form action="#" id="form" onsubmit="return false">
          <div class="weui_cells weui_cells_form mt0 wauto">
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



          </div>
          <div class="weui_btn_area fixed">
              <input type="submit" class="weui_btn b0 weui_btn_primary" value="保存" @click="addAddress()">
          </div>
      </form>
       </validator>
       <Toast :toastshow.sync="toastshow" :toasttext="toasttext"></Toast>
  </div>
</template>

<script>
  import Toast from '../components/toast.vue'
  import userService from '../../api/userService'
  import Bar from '../components/headBar.vue'
  export default {
      components: {
        Toast,
        Bar
      },
      data () {
        return {
          hide:true,
          provinceList: [],
           cityList: [],
           areaList: [],
          toastshow:false,
          toasttext:"",
          province:"-1",
          city:"-1",
          area:"-1"
        }
      },
      ready () {
        document.title = '编辑地址'
        this.province = this.$route.params.province
        this.city = this.$route.params.city
        this.area = this.$route.params.area
        userService.getRegionByPid(this,0,'p')
        userService.getRegionByPid(this,this.province,'c')
        userService.getRegionByPid(this,this.city,'a')
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
          addAddress:function(){
            var that = this
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
              that.$progress.start()
               if(that.paramsAddressId==undefined){
                  that.paramsAddressId=" "
               }
              var saveAddressArr = {province:province,city:city,area:area}
               userService.changeAddress(that,saveAddressArr)
            }





          }
      }
    }
</script>
