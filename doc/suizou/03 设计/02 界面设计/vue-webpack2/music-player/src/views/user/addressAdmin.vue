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
  <div class="bd absolute pd48">
    <ul class="addressList style">
        <li v-for="address in list">
            <div class="personInfor">
                <p class="clearfix">
                    <span class="left name">{{address.personName}}</span>
                    <span class="phone right">{{address.phone}}</span>
                </p>
                <p class="addresss">
                    {{address.personAddress}}
                </p>
            </div>
            <div class="addressModify clearfix">
                <div class="weui_cells weui_cells_checkbox mt0 style1 inline_block left5">
                    <label class="weui_cell weui_check_labe style p0" for={{address.forId}}>
                        <div class="weui_cell_hd">
                            <input type="radio" class="weui_check" name="checkbox2" id={{address.forId}} />
                            <i class="weui_icon_checked"></i>
                        </div> 设为默认
                    </label>
                </div>
                <button class="btn-remove right" @click="showModal(address)">
                    <i class="fa fa-trash-o"></i>
                    删除
                </button>
                <button class="btnModify right"  v-link="{ name: 'modifyAddressInfor', params: {personname: address.personName,phone: address.phone,addressInfor: address.personAddress}}">
                    <i class="fa fa-pencil"></i>
                    编辑
                </button>
            </div>
        </li>
    </ul>
    <div class="notConTip hide">
        <img src="../../../static/images/notContent.png" alt=""/>
        <p class="notInfor">
            暂无数据
        </p>
    </div>
</div>
<div class="weui_btn_area fixed">
    <a v-link="'/user/addAddress'" class="weui_btn b0 weui_btn_primary">+新建地址</a>
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
</template>
<script>
  export default {
      data () {
        return {
          hide:true,
          shops:"",
          show: false,
          list:[]
        }
      },
      ready () {
        document.title = '地址管理'
        this.$http.get('../../static/data/addressAdmin.json').then(function(response){
           this.list = response.data
         }, function(response){
          // 响应错误回调
         })
      },
      methods: {
        onShow: function () {
          this.hide = !this.hide
        },
        showModal:function(address){
           this.show = true
           this.shops = address
         },
         cancleDelete:function(){
           this.show = false
         },
         sureDeleta:function(){
           this.show = false
           for(var i=0;i<this.list.length;i++){
             this.list.$remove(this.shops)
           }
         },
         returnPage:function(){
           window.history.go(-1)
         }
      }
    }
</script>
