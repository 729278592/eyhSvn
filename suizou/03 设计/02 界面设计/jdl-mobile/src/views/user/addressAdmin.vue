<template>
  <Bar></Bar>
  <div class="bd absolute pd48">
    <ul class="addressList style">
        <li v-for="address in addressList">
            <div class="personInfor">
                <p class="clearfix">
                    <span class="left name">{{address.consignee}}</span>
                    <span class="phone right">{{address.mobile}}</span>
                </p>
                <p class="addresss">
                    {{address.pcaAddress}}
                </p>
            </div>
            <div class="addressModify clearfix">
                <div class="weui_cells weui_cells_checkbox mt0 style1 inline_block left5">
                    <label class="weui_cell weui_check_labe style p0" for={{address.id}} @click="setDefaultAddress(address)">
                        <div class="weui_cell_hd">
                            <input type="radio" class="weui_check" name="checkbox2" id={{address.id}} v-if="address.isDefault==notDefalutAddress" />
                            <input type="radio" class="weui_check" checked name="checkbox2" id={{address.id}} v-if="address.isDefault==defalutAddress" />
                            <i class="weui_icon_checked"></i>
                        </div> 设为默认
                    </label>
                </div>
                <button class="btn-remove right" @click="showModal(address)">
                    <i class="fa fa-trash-o"></i>
                    删除
                </button>
                <button class="btnModify right" v-link="{ name: 'addAddress', params: {addressId: address.id}}">
                    <i class="fa fa-pencil"></i>
                    编辑
                </button>
            </div>
        </li>
    </ul>
    <div class="notConTip" v-show="dataHide">
        <img src="../../../static/images/notContent.png" alt=""/>
        <p class="notInfor">
            暂无数据
        </p>
    </div>
</div>
<div class="weui_btn_area fixed">
    <a class="weui_btn b0 weui_btn_primary" v-link="'/user/addAddress'">+新建地址</a>
</div>
<div class="weui_dialog_confirm modal-mask" id="dialog1"  v-show="show" transition="modal">
    <div class="weui_mask"></div>
    <div class="weui_dialog weui-dialog-transition">
        <div class="weui_dialog_hd"><strong class="weui_dialog_title">确定删除地址？</strong></div>
        <div class="weui_dialog_ft">
            <a href="javascript:;" class="weui_btn_dialog default" @click="cancleDelete()">取消</a>
            <a href="javascript:;" class="weui_btn_dialog primary" @click="sureDeleta()">确定</a>
        </div>
    </div>
  </div>
  <Toast :toastshow.sync="toastshow" :toasttext="toasttext"></Toast>
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
          dataHide:false,
          shops:"",
          show: false,
          addressList:[],
          removeAddressId:"",
          defalutAddress:"Y",
          notDefalutAddress:"N",
          toastshow:false,
          toasttext:"",
          value:""
        }
      },
      ready () {
         document.title = '地址管理'
         userService.addressAdmin(this)
      },
      methods: {
        onShow: function () {
          this.hide = !this.hide
        },
        showModal:function(address){
           this.show = true
           this.shops = address
           this.removeAddressId = address.id
         },
         cancleDelete:function(){
           this.show = false
         },
         sureDeleta:function(){
            var deleteAddressArr = {
              addressId:this.removeAddressId
            }
            userService.deleteAddress(this,deleteAddressArr)
         },
         setDefaultAddress:function(address){
             var addressArr = {
                addressId:address.id
              }
              var addressD = address
              userService.setDefaultAddress(this,addressArr,addressD)
         }
      }
    }
</script>
