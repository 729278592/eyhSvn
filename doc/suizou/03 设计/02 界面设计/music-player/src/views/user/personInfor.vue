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
  <div class="bd absolute pd48" v-for="personList in list">
    <div style="background: #fff;">
        <img :src=personList.personImg alt="" class="portrait"/>
    </div>
    <div class="weui_cells weui_cells_access mt0">
        <a class="weui_cell" v-link="'/user/modifyName'">
            <div class="weui_cell_bd weui_cell_primary">
                <p>
                    <span class="span_icon spa_person"></span>
                    <span class="text">
                        昵称
                    </span>
                </p>
            </div>
            <div class="weui_cell_ft">{{personList.personName}}</div>
        </a>
        <a class="weui_cell" v-link="'/user/modifyPhone'">
            <div class="weui_cell_bd weui_cell_primary">
                <p>
                    <span class="span_icon spa_phone"></span>
                    <span class="text">
                        {{personList.phone}}
                    </span>
                </p>
            </div>
            <div class="weui_cell_ft">15024545454</div>
        </a>
        <a class="weui_cell" v-link="'/user/modifySex'">
            <div class="weui_cell_bd weui_cell_primary">
                <p>
                    <span class="span_icon spa_sex"></span>
                    <span class="text">
                        性别
                    </span>
                </p>
            </div>
            <div class="weui_cell_ft">
              {{personList.sex}}
            </div>
        </a>

        <a class="weui_cell" v-link="'/user/modifyAddress'">
            <div class="weui_cell_bd weui_cell_primary">
                <p>
                    <span class="span_icon spa_address"></span>
                    <span class="text">
                        所在地
                    </span>
                </p>
            </div>
            <div class="weui_cell_ft">
                {{personList.addressInfor}}
            </div>
        </a>
        <a class="weui_cell" v-link="'/user/modifyPassword'">
            <div class="weui_cell_bd weui_cell_primary">
                <p>
                    <span class="span_icon spa_lock"></span>
                    <span class="text">
                        修改密码
                    </span>
                </p>
            </div>
            <div class="weui_cell_ft">{{personList.personPassword}}</div>
        </a>
    </div>
</div>
<div class="weui_btn_area fixed">
    <a class="weui_btn b0 weui_btn_primary">退出登录</a>
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
        document.title = '个人信息'
        this.$http.get('../../static/data/personInfor.json').then(function(response){
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
