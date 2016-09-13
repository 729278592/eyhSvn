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
      <div class="bd absolute pd48">
          <form action="#" id="form" onsubmit="return false">
              <div class="weui_cells weui_cells_form mt0 wauto">
                  <div class="weui_cell">
                      <div class="weui_cell_hd">
                          <label class="weui_label">
                              <span class="span_icon spa_address"></span>
                          </label>
                      </div>
                      <div class="weui_cell_bd weui_cell_primary">
                          <input type="text" id='city-picker' class="weui_input" value="浙江 杭州 拱墅区" />
                      </div>
                  </div>
              </div>
              <div class="weui_btn_area fixed">
                  <input type="submit" class="weui_btn b0 weui_btn_primary" value="保存">
              </div>
          </form>
      </div>
</template>

<style>
  @import '../../../static/plugins/mobile-plugins/css/sm.min.css'
  @import '../../../static/plugins/mobile-plugins/css/sm-extend.min.css'
</style>

<script>
  import '../../../static/plugins/zepto/zepto.min.js'
  import '../../../static/plugins/mobile-plugins/js/sm.js'
  import '../../../static/plugins/mobile-plugins/js/sm-extend.js'
  import '../../../static/plugins/mobile-plugins/js/sm-city-picker.js'
  export default {
      data () {
        return {
          hide:true
        }
      },
      ready () {
        document.title = '编辑地址'
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
