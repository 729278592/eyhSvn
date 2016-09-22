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
  <div class="bd absolute pt">
    <form action="#" id="form" onsubmit="return false">
        <div class="weui_cells weui_cells_form mt0 w90">
            <div class="weui_cell weui_cell_select">
                <div class="weui_cell_hd">
                    <label class="weui_label style">
                        开户行名称
                    </label>
                </div>
                <div class="weui_cell_bd weui_cell_primary">
                    <select class="weui_select" name="select1">
                        <option selected="" value="请选择开户行">请选择开户行</option>
                        <option value="工商银行">工商银行</option>
                        <option value="中国银行">中国银行</option>
                        <option value="广发银行">广发银行</option>
                        <option value="中信银行">中信银行</option>
                    </select>
                </div>
            </div>
            <div class="weui_cell">
                <div class="weui_cell_hd">
                    <label class="weui_label style">
                        开户行地址
                    </label>
                </div>
                <div class="weui_cell_bd weui_cell_primary">
                    <Address></Address>
                </div>
            </div>
            <div class="weui_cell">
                <div class="weui_cell_hd">
                    <label class="weui_label style">
                        开户姓名
                    </label>
                </div>
                <div class="weui_cell_bd weui_cell_primary">
                    <input class="weui_input" type="text" id="" placeholder="请输入开户姓名" name=""/>
                </div>
            </div>
            <div class="weui_cell">
                <div class="weui_cell_hd">
                    <label class="weui_label style">
                        银行卡号
                    </label>
                </div>
                <div class="weui_cell_bd weui_cell_primary">
                    <input class="weui_input" type="number" id="number" placeholder="请输入开户卡号" name=""/>
                </div>
            </div>
        </div>
        <div class="weui_btn_area fixed">
            <input type="submit" class="weui_btn weui_btn_primary b0 saveBasic" id="saveBtn" value="保存">
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
        document.title = '银行选择'
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
