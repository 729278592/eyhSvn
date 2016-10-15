<template>
    <div class="hd">
        <a class="return" @click="returnPage()">
            <i class="fa fa-angle-left"></i>
        </a>
        个人登录
        <div class="right nav_block">
          <a class="dot_block" @click.stop="onShow">
            <i class="fa fa-user"></i>
          </a>
          <ul class="nav_link" :class="{'hide':hide}">
              <li>
                <a v-link="'/'">
                    首页
                </a>
              </li>
              <li>
                  <a v-link="'/auth/personLogin'">
                      登录
                  </a>
              </li>
          </ul>
      </div>
    </div>
</template>
<script>
  export default{
      data () {
        return {
          hide:true
        }
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
