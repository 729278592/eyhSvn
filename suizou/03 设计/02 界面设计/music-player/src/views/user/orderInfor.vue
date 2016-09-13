<template>
  <div class="hd">
      <a>
          <a class="return" @click="returnPage()"></a>
      </a>
      消费全反
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
                  <a v-link="'/home'">
                      首页
                  </a>
              </li>
          </ul>
      </div>
  </div>
<div class="bd absolute pt" v-for="list in dataJson">
  <div class="orderTitle">
      订单状态 : 待付款
  </div>
  <div class="orderAddress"  @click="showModal()">
      <a>
          <p class="clearfix">
              <span class="name left">{{list.personName}}</span>
              <span class="phone right">
                  <span class="verdana">{{list.phone}}</span>
              </span>
          </p>
          <p class="addressInfor">
              {{list.address}}
          </p>
      </a>
  </div>
  <div id="order">
      <ul class="orderList">
          <li>
              <div>
                  <div class="orderHead clearfix">
                      <span class="orderNum left">{{list.title}}</span>
                  </div>
                  <div class="orderCon" v-for="shopList in list.shoppingList">
                      <div class="orderImg">
                          <img :src="shopList.src" alt=""/>
                      </div>
                      <div class="orderInfor">
                          <p class="top clearfix">
                              <span class="left">{{shopList.name}}</span>
                          </p>
                          <p class=" ">
                              <span class="color">{{shopList.personName}}</span>
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
                                  <p>共{{list.allNum}}件商品</p>
                              </div>
                              <div class="weui_cell_ft style">总计 : ￥{{list.allMoney}} (运费￥{{list.freight}})</div>
                          </div>
                      </div>
                  </div>
              </div>
          </li>
      </ul>
      <div class="orderDetails">
          <div class="weui_cells">
              <div class="weui_cell">
                  <div class="weui_cell_bd weui_cell_primary">
                      <p>订单号 : </p>
                  </div>
                  <div class="weui_cell_ft style">{{list.orderNum}}</div>
              </div>
          </div>
          <div class="weui_cells mt0">
              <div class="weui_cell">
                  <div class="weui_cell_bd weui_cell_primary">
                      <p>下单账号 : </p>
                  </div>
                  <div class="weui_cell_ft style">{{list.personAccount}}</div>
              </div>
          </div>
          <div class="weui_cells mt0">
              <div class="weui_cell">
                  <div class="weui_cell_bd weui_cell_primary">
                      <p>下单时间 : </p>
                  </div>
                  <div class="weui_cell_ft style">
                    <span class="verdana">{{list.orderTime}}</span>
                  </div>
              </div>
          </div>
      </div>
  </div>

  <div class="notConTip hide">
      <img src="../../../static/images/notContent.png" alt=""/>
      <p class="notInfor">
          暂无数据
      </p>
  </div>

  <div class="weui_mask_transition" id="mask" :class="{'weui_fade_toggle':addClassFade}" @click="hideModal()"></div>
      <div class="weui_actionsheet style" :class="{'weui_actionsheet_toggle':addClassActionsheet}" id="weui_actionsheet">
          <div class="weui_actionsheet_menu">
            <ul class="addressList style">
              <li v-for="addressList in list.addressList">
                <div class="weui_cells weui_cells_checkbox mt0 style1 inline_block left5">
                    <label class="weui_cell weui_check_labe style p0" for="addressList.addressId">
                        <div class="weui_cell_hd">
                            <input type="radio" class="weui_check" name="checkbox1" id="addressList.addressId" />
                            <i class="weui_icon_checked"></i>
                        </div>
                    </label>
                </div>
               <div class="personInfor style">
                   <p class="clearfix">
                       <span class="left name">{{addressList.personName}}</span>
                       <span class="phone right">{{addressList.phone}}</span>
                   </p>

                   <p class="address">
                       {{addressList.address}}
                   </p>
               </div>
                <div class="addressModify clearfix">
                    <div class="weui_cells weui_cells_checkbox mt0 style1 inline_block left5">
                        <label class="weui_cell weui_check_labe style p0" for="addressList.defaultId">
                            <div class="weui_cell_hd">
                                <input type="radio" class="weui_check" name="checkbox2" id="addressList.defaultId" />
                                <i class="weui_icon_checked"></i>

                            </div> 设为默认
                        </label>
                    </div>
                    <button class="btn-remove right">
                        <i class="fa fa-trash-o"></i>
                        删除
                    </button>
                    <button class="btnModify right">
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
        <div class="weui_btn_area style">
            <input type="submit" class="weui_btn b0 weui_btn_primary" id="saveBtn" value="新增地址">
        </div>
    </div>
</div>
</template>
<script>
  export default {
      data () {
        return {
          hide:true,
          addClassFade:false,
          addClassActionsheet:false,
          dataJson:[]
        }
      },
      ready () {
        document.title = '订单详情'
        this.$http.get('../../static/data/orderInfor.json').then(function(response){
           this.dataJson = response.data
        }, function(response){
          // 响应错误回调
        })
      },
      methods: {
        onShow: function () {
          this.hide = !this.hide
        },
        showModal :function(){
          this.addClassFade = true
          this.addClassActionsheet = true
        },
        hideModal: function(){
          this.addClassFade = false
          this.addClassActionsheet = false
        },
        returnPage:function(){
          window.history.go(-1)
        }
      }
    }
</script>
