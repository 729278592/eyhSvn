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
      <form action="#" id="form" onsubmit="return false">
          <div class="weui_cells weui_cells_form mt0 wauto">
              <div class="weui_cell">
                  <div class="weui_cell_hd">
                      <label class="weui_label">
                          <span class="span_icon spa_person"></span>
                      </label>
                  </div>
                  <div class="weui_cell_bd weui_cell_primary">
                      <input class="weui_input" type="text" placeholder="请输入联系人姓名"  id="personName"/>
                  </div>
              </div>
              <div class="weui_cell">
                  <div class="weui_cell_hd">
                      <label class="weui_label">
                          <span class="span_icon spa_phone"></span>
                      </label>
                  </div>
                  <div class="weui_cell_bd weui_cell_primary">
                      <input class="weui_input" type="num" placeholder="请输入手机号" name="mobile" id="mobile"/>
                  </div>
              </div>
              <div class="weui_cell">
                  <div class="weui_cell_hd">
                      <label class="weui_label">
                          <span class="span_icon spa_inforAddress"></span>
                      </label>
                  </div>
                  <div class="weui_cell_bd weui_cell_primary">
                      <Address></Address>
                  </div>
              </div>
              <div class="weui_cell">
                  <div class="weui_cell_hd">
                      <label class="weui_label">
                          <span class="span_icon spa_address"></span>
                      </label>
                  </div>
                  <div class="weui_cell_bd weui_cell_primary">
                      <input class="weui_input" type="text" placeholder="请填写详细地址" name="inforAddress" id="inforAddress"/>
                  </div>
              </div>
          </div>
          <div class="weui_btn_area fixed">
              <input type="submit" class="weui_btn b0 weui_btn_primary" id="saveBtn" value="保存">
          </div>
      </form>
  </div>
</template>

<script>
 import Address from '../components/address-app.vue';
  export default {
      components: {
        Address
      },
      data () {
        return {
          hide:true
        }
      },
      ready () {
        document.title = '新建地址'
        $("#city-picker").cityPicker({
                toolbarTemplate: '<header class="bar bar-nav">\
                                      <button class="button button-link pull-right close-picker">确定</button>\
                                      <h1 class="title">选择收货地址</h1>\
                                  </header>'
        })
      },
      methods: {
        onShow: function () {
          this.hide = !this.hide
        },
        returnPage:function(){
          window.history.go(-1)
        }
      }
    }
</script>
