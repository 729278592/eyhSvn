<template>
  <Bar></Bar>
  <div class="bd absolute pd48">
    <div style="background: #fff;padding:0.1rem 0;">
        <img v-if="list.headImg==null" src="../../../static/images/portrait.png"  class="portrait"/>
        <img v-else :src="this.imageUrl+list.headImg" alt="" class="portrait"/>
    </div>
    <div class="weui_cells weui_cells_access mt0">
        <a class="weui_cell" v-link="{ name: 'modifyName', params: {nickname: list.nickname}}" >
            <div class="weui_cell_bd weui_cell_primary">
                <p>
                    <span class="span_icon spa_person"></span>
                    <span class="text">
                        昵称
                    </span>
                </p>
            </div>
            <div class="weui_cell_ft" v-if="list.nickname==null">未知</div>
            <div v-else class="weui_cell_ft">{{list.nickname}}</div>
        </a>
        <a class="weui_cell" v-link="{ name: 'modifyMobile', params: {mobile: list.mobile}}">
            <div class="weui_cell_bd weui_cell_primary">
                <p>
                    <span class="span_icon spa_phone"></span>
                    <span class="text">
                        手机号
                    </span>
                </p>
            </div>
            <div class="weui_cell_ft" v-if="list.mobile==null">{{list.mobile}}</div>
            <div v-else class="weui_cell_ft">{{list.mobile}}</div>
        </a>
        <a class="weui_cell" v-link="{ name: 'modifySex', params: {sex: list.sex}}"  >
            <div class="weui_cell_bd weui_cell_primary">
                <p>
                    <span class="span_icon spa_sex"></span>
                    <span class="text">
                        性别
                    </span>
                </p>
            </div>
            <div class="weui_cell_ft" v-if="list.sex==1">
              男
            </div>
            <div class="weui_cell_ft" v-if="list.sex==2">
              女
            </div>
            <div class="weui_cell_ft" v-if="list.sex==0">
              未知
            </div>
        </a>

        <a class="weui_cell" v-link="{ name: 'modifyAddress', params: {province: list.province,city: list.city,area: list.area}}" >
            <div class="weui_cell_bd weui_cell_primary">
                <p>
                    <span class="span_icon spa_address"></span>
                    <span class="text">
                        所在地
                    </span>
                </p>
            </div>
            <div v-if="list.mergeAddress!=null" class="weui_cell_ft">
                {{list.mergeAddress}}
            </div>
           <div class="weui_cell_ft" v-else>
              未知
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
            <div class="weui_cell_ft"></div>
        </a>
    </div>
</div>
<div class="weui_btn_area fixed">
    <a class="weui_btn b0 weui_btn_primary" @click="loginOut()">退出登录</a>
</div>
</template>
<script>
   import Bar from '../components/headBar.vue'
   import userService from '../../api/userService'
  export default {
     components: {
          Bar
      },
      data () {
        return {
          hide:true,
          list:[],
          address:""
        }
      },
      ready () {
        document.title = '个人信息'
        this.imageUrl = userService.imgUrlFric
        userService.personInfor(this)
      },
      methods: {
        onShow: function () {
          this.hide = !this.hide
        },
        loginOut:function(){
          userService.loginOut(this)
        }
      }
    }
</script>
