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
<div class="bd absolute pt">
  <form action="#" id="form" onsubmit="return false">
      <div class="weui_cells weui_cells_form mt0">
          <div class="memberTitle">请选择会员等级</div>
          <div class="weui_cells weui_cells_checkbox mt0">
              <label class="weui_cell weui_check_label color" for="s1221">
                  <div class="weui_cell_hd">
                      <input type="checkbox" class="weui_check" name="checkbox1" id="s1221">
                      <i class="weui_icon_checked"></i>
                  </div>
                  <div class="weui_cell_bd weui_cell_primary">
                      <p style="text-align: right;color: #666;">
                          <span style="position: relative;left: -50%;color: #333;">金钻会员</span>
                          ￥<span class="verdana">2000.00</span>
                      </p>
                  </div>
              </label>
          </div>
      </div>
      <div class="weui_btn_area fixed">
          <input type="submit" class="weui_btn b0 weui_btn_primary" id="saveBtn" value="立即升级">
      </div>
  </form>
</div>
</template>
<script>
  export default {
      data () {
        return {
          hide:true,
          list:[]
        }
      },
      ready () {
        document.title = '会员升级'
        this.$http.get('../../static/data/myMessage.json').then(function(response){
           this.list = response.data
        }, function(response){
          // 响应错误回调
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
