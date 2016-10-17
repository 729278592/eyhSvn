<template>
    <Bar></Bar>
    <div class="bd absolute pt hide" :class="{'active':bdActive}" >
      <div class="orderAddress" @click="showModal()">
          <a>
              <div v-if="addressDeList.isDefault=='Y'">
                  <p class="clearfix">
                      <span class="name left">{{addressDeList.consignee}}</span>
              <span class="phone right">
                  <span class="verdana">{{addressDeList.mobile}}</span>
              </span>
                  </p>
                  <p class="addressInfor">
                      {{addressDeList.address}}
                  </p>
              </div>
              <p v-else style="width:100%;height:100%;text-align:center;font-size:1rem;color:green;padding: 0;line-height: 80px;">
                  暂无地址,请点击选择
              </p>
          </a>
      </div>
      <div id="order">
          <ul class="orderList">
              <li>
                  <div>
                      <div class="orderHead clearfix">
                          <span class="orderNum left">{{list.mchName}}</span>
                      </div>
                      <div class="orderCon" v-for="shopList in list.list" style="border-bottom:1px solid #efefef;">
                          <div class="orderImg">
                              <img v-if="shopList.pic==null" src="../../../static/images/shoppingC1.jpg" class="couponImg1" alt="">
                              <img v-if="shopList.pic!=null" :src="this.imageUrl+shopList.pic" class="couponImg1" alt="">
                          </div>
                          <div class="orderInfor">
                              <p class="top clearfix">
                                  <span class="left">{{shopList.goodsName}}</span>
                              </p>
                              <p class=" ">
                                  <span class="color">{{shopList.specName}}</span>
                              </p>
                              <p class="bottom clearfix">
                                  <span class="left">￥<span class="verdana">{{shopList.price}}</span></span>
                                  <span class="right">x{{shopList.num}}</span>
                              </p>
                          </div>
                      </div>
                      <div class="orderFt">
                          <div class="weui_cells mt0">
                              <div class="weui_cell">
                                  <div class="weui_cell_bd weui_cell_primary">
                                      <p>共{{list.totalNum}}件商品</p>
                                  </div>
                                  <div class="weui_cell_ft style">总计 : ￥{{list.totalPrice}} (运费￥{{list.freight}})</div>
                              </div>
                          </div>
                      </div>
                  </div>
              </li>
          </ul>

          <div class="weui_mask_transition" id="mask" :class="{'weui_fade_toggle':addClassFade}" @click="hideModal()"></div>
          <div class="weui_actionsheet style" :class="{'weui_actionsheet_toggle':addClassActionsheet}" id="weui_actionsheet">
              <div style="position:relative;top:0;bottom:0;left:0;right:0;">
                  <div class="weui_btn_area style">
                      <a class="weui_btn b0 weui_btn_primary"  @click="addAddressLink()" style="disabled:inline-block;height:50px;line-height:50px;">新增地址</a>
                  </div>
                  <div class="weui_actionsheet_menu">
                      <ul class="addressList style">
                          <li v-for="addressList in addressList">
                              <!--
                                <div class="weui_cells weui_cells_checkbox mt0 style1 inline_block left5">
                                  <label class="weui_cell weui_check_labe style p0" for={{addressList.addressId}}>
                                      <div class="weui_cell_hd">
                                          <input type="radio" class="weui_check" name="checkbox1" id={{addressList.addressId}} />
                                          <i class="weui_icon_checked"></i>
                                      </div>
                                  </label>
                              </div>
                              -->
                              <div class="personInfor style">
                                  <p class="clearfix">
                                      <span class="left name">{{addressList.consignee}}</span>
                                      <span class="phone right">{{addressList.mobile}}</span>
                                  </p>

                                  <p class="address">
                                      {{addressList.address}}
                                  </p>
                              </div>
                              <div class="addressModify clearfix">


                                  <div class="weui_cells weui_cells_checkbox mt0 style1 inline_block left5">
                                      <label class="weui_cell weui_check_labe style p0" for={{addressList.defaultId}} @click="setDefaultAddress(addressList)">
                                          <div class="weui_cell_hd">
                                              <input type="radio" class="weui_check" name="checkbox2" id={{addressList.defaultId}} v-if="addressList.isDefault==notDefalutAddress" />
                                              <input type="radio" class="weui_check" checked name="checkbox2" id={{addressList.defaultId}} v-if="addressList.isDefault==defalutAddress" />
                                              <i class="weui_icon_checked"></i>
                                          </div> 设为默认
                                      </label>
                                  </div>
                                  <button class="btn-remove right" @click="showModalDelete(addressList)">
                                      <i class="fa fa-trash-o"></i>
                                      删除
                                  </button>
                                  <!--
                                    <button class="btnModify right" v-link="{ name: 'addAddress', params: {addressId: addressList.id}}">
                                        <i class="fa fa-pencil"></i>
                                        编辑
                                    </button>
                                  -->
                              </div>
                          </li>
                      </ul>
                      <div class="notConTip" v-show="dataHide" style="margin-top:30%;">
                          <img src="../../../static/images/notContent.png" alt=""/>
                          <p class="notInfor">
                              暂无数据
                          </p>
                      </div>

                  </div>

              </div>
          </div>
      </div>
      <div class="weui_dialog_confirm modal-mask" id="dialog1"  v-show="show" style="z-index:5000;">
          <div class="weui_mask"></div>
          <div class="weui_dialog">
              <div class="weui_dialog_hd"><strong class="weui_dialog_title">确定删除地址？</strong></div>
              <div class="weui_dialog_ft">
                  <a href="javascript:;" class="weui_btn_dialog default" @click="cancleDelete()">取消</a>
                  <a href="javascript:;" class="weui_btn_dialog primary" @click="sureDeleta()">确定</a>
              </div>
          </div>
      </div>
      <Toast :toastshow.sync="toastshow" :toasttext="toasttext"></Toast>
    </div>

  <div class="bd fixed hide" style="z-index: 1000;padding-top: 0;" :class="{'active':bdAddressActive}">
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
              <input class="weui_input" v-model="isEmpty" id="isEmpty" type="text"  placeholder='请输入昵称'>
            </div>
          </div>
          <div class="weui_cell">
            <div class="weui_cell_hd">
              <label class="weui_label">
                <span class="span_icon spa_phone"></span>
              </label>
            </div>
            <div class="weui_cell_bd weui_cell_primary">
              <input class="weui_input"  v-model="mobile" id="mobile" type="tel"  placeholder='请输入手机号码'>
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
          <input type="submit" class="weui_btn  weui_btn_primary" id="saveBtn" value="保存" @click="addAddress()">
        </div>
      </form>
    </validator>
    <Toast :toastshow.sync="toastshow" :toasttext="toasttext"></Toast>
  </div>


  <div class="foot">
        <ul class="optionType style clearfix">
            <li class="last">
                <a class="nowBuy" @click="btnBuy(addressDeList)">确认</a>
            </li>
            <li class="first">
                应付总额 : <span style="color: #ff0004">￥{{list.amount}}</span>
            </li>
        </ul>
    </div>



</template>

<style>
  .bd{background: #f3f3f3;}
  .bd.hide{display: none}
  .bd.active{display: block}
  .bd.fixed{
    position: absolute;
    top: 2.5rem;
    bottom: 0;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
    width: 100%;}
</style>

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
          dataHide:false,
          addClassFade:false,
          addClassActionsheet:false,
          list:[],
          addressList:[],
          addressDeList:[],
          shops:"",
          show: false,
          toastshow:false,
          toasttext:"",
          removeAddressId:"",
          defalutAddress:"Y",
          notDefalutAddress:"N",
          addHide:"",
          notAaddressTip:true,
          bdActive:true,
          bdAddressActive:false,

          addressIsEmpty:"",
          isEmpty:"",
          mobile:"",
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
        document.title = '付款结算'
        userService.addressAdmin(this)
        var cartBuyArr = {cartIds:eval("("+localStorage.getItem('data')+")")}
        console.log(JSON.stringify(cartBuyArr))
        userService.cartBuy(this,cartBuyArr)
        userService.getDeAddress(this)
        this.imageUrl = userService.imgUrl

        this.paramsAddressId = this.$route.params.addressId;
        userService.getRegionByPid(this,0,'p');
        if(this.$route.params.addressId !=undefined){
          var addAddressArr = {
            addressId:this.$route.params.addressId
          };
          userService.addAddress(this,addAddressArr)
        }
      },
      methods: {
        onShow: function () {
          this.hide = !this.hide
        },
        showModalDelete:function(address){
           this.show = true
           this.shops = address
           this.removeAddressId = address.id
         },
         sureDeleta:function(){
             var deleteAddressArr = {
               addressId:this.removeAddressId
             };
             userService.deleteAddress(this,deleteAddressArr)
         },
        showModal :function(){
          this.addClassFade = true
          this.addClassActionsheet = true
        },
        hideModal: function(){
          this.addClassFade = false
          this.addClassActionsheet = false
        },
       cancleDelete:function(){
          this.addClassFade=false
          this.addClassActionsheet=false
          this.show=false
        },
        btnBuy:function(addressDe){
          localStorage.setItem('dataMoney',JSON.stringify(this.list.totalPrice))
          console.log(!addressDe)
          if(!addressDe){
            this.$set('toasttext','请选择地址');
            this.$set('toastshow',true);
            this.addClassFade = true
            this.addClassActionsheet = true
          }else{
            var sureBuyArr = {
              addressId:this.addressDeList.id,
              cartIds:eval("("+localStorage.getItem('data')+")")
            }
            console.log(sureBuyArr)
            userService.sureBuy(this,sureBuyArr)
          }
        },
        setDefaultAddress:function(address){
             var addressArr = {
                addressId:address.id
              }
              var addressD = address
              userService.setDefaultAddress(this,addressArr,addressD)
         },


        addAddressLink:function(){
          this.bdAddressActive=true;
          this.bdActive = false;
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
          userService.saveAddressBuyYes(this,saveAddressArr)
        }
      }
    }
</script>
