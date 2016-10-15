<template>
  <Bar></Bar>
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
                      <input class="weui_input" type="number" placeholder="请输入手机号" name="mobile" id="mobile"/>
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
          <div class="weui_btn_area ">
              <input type="submit" class="weui_btn  weui_btn_primary" id="saveBtn" value="保存">
          </div>
      </form>
  </div>
</template>

<script>
 import Address from '../components/address-app.vue'
 import Bar from '../components/headBar.vue'
  export default {
      components: {
        Address,
        Bar
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
        var name = document.getElementById("personName")
        name.value = this.$route.params.personname

        var mobile = document.getElementById("mobile")
        mobile.value = this.$route.params.phone

        var inforAddress = document.getElementById("inforAddress")
        inforAddress.value = this.$route.params.addressInfor

      },
      methods: {
        onShow: function () {
          this.hide = !this.hide
        }
      }
    }
</script>
