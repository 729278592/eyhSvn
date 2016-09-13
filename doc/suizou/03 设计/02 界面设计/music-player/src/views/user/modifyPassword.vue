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
                        <span class="span_icon spa_phone"></span>
                    </label>
                </div>
                <div class="weui_cell_bd weui_cell_primary">
                    <input class="weui_input" type="number" placeholder="输入注册时的手机号" name="mobile" id="mobile"/>
                </div>
            </div>

            <div class="weui_cell">
                <div class="weui_cell_hd">
                    <label class="weui_label">
                        <span class="span_icon spa_code"></span>

                    </label>
                </div>
                <div class="weui_cell_bd weui_cell_primary">
                    <input class="weui_input codeInput" type="number" placeholder="请输入验证码" id="code"/>
                    <button type="button" class="getCode disabled" disabled="disabled"  id="getCode">获取验证码</button>
                </div>
            </div>
            <div class="weui_cell">
                <div class="weui_cell_hd">
                    <label class="weui_label">
                        <span class="span_icon spa_lock"></span>
                    </label>
                </div>
                <div class="weui_cell_bd weui_cell_primary">
                    <input class="weui_input" type="number" placeholder="请输入密码" name="mobile" id="password"/>
                </div>
            </div>
            <div class="weui_cell">
                <div class="weui_cell_hd">
                    <label class="weui_label">
                        <span class="span_icon spa_lock"></span>
                    </label>
                </div>
                <div class="weui_cell_bd weui_cell_primary">
                    <input class="weui_input" type="number" placeholder="请确认密码" name="mobile" id="aginPassword"/>
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
        document.title = '修改密码'
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
