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
    <form action="#" id="form" onsubmit="return false">
        <div class="weui_cells weui_cells_form mt0 wauto">
            <div class="weui_cell">
                <div class="weui_cell_hd">
                    <label class="weui_label">
                        <span class="span_icon spa_sex"></span>
                    </label>
                </div>
                <div class="weui_cell_bd weui_cell_primary">
                    <div class="weui_cells weui_cells_checkbox mt0 bt0 bg0">
                        <label class="weui_cell weui_check_label bt0 w30 p0" for="s13">
                            <div class="weui_cell_hd">
                                <input type="radio" name="checkbox1" class="weui_check" id="s13">
                                <i class="weui_icon_checked"></i>
                            </div>
                            <div class="weui_cell_bd weui_cell_primary">
                                <p>保密</p>
                            </div>
                        </label>
                        <label class="weui_cell weui_check_label bt0 w30 p0" for="s11">
                            <div class="weui_cell_hd">
                                <input type="radio" class="weui_check" name="checkbox1" id="s11" checked="checked">
                                <i class="weui_icon_checked"></i>
                            </div>
                            <div class="weui_cell_bd">
                                <p>男</p>
                            </div>
                        </label>
                        <label class="weui_cell weui_check_label bt0 w30 p0" for="s12">
                            <div class="weui_cell_hd">
                                <input type="radio" name="checkbox1" class="weui_check" id="s12">
                                <i class="weui_icon_checked"></i>
                            </div>
                            <div class="weui_cell_bd weui_cell_primary">
                                <p>女</p>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
        </div>
        <div class="weui_btn_area fixed">
            <input type="submit" class="weui_btn b0 weui_btn_primary" value="保存">
        </div>
    </form>
</div>
</template>
<script>
  export default {
      data () {
        return {
          hide:true
        }
      },
      ready () {
        document.title = '修改性别'
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
