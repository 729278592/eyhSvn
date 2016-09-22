<template>
  <div class="hd">
      <a>
          <a class="return" @click="returnPage()"></a>
      </a>
      家得利
      <div class="right nav_block">
          <a v-link="'/user/shopCart'" class="shop_cat"></a>
          <a class="dot_block"></a>
          <ul class="nav_link">
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
</template>
<script>
  export default {
      data () {
        return {
          hide:true
        }
      },
      ready () {
        document.title = '商品订单详情'
      }
    }
</script>
