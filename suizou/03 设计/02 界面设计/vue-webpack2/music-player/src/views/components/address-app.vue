
<template>
    <input type="text" id='city-picker' class="weui_input" value="浙江 杭州 拱墅区" />
</template>
<style lang="css">
  @import '../../../static/plugins/mobile-plugins/css/sm.min.css'
</style>

<script>
  import '../../../static/plugins/zepto/zepto.min.js'
  import '../../../static/plugins/mobile-plugins/js/sm.js'
  import '../../../static/plugins/mobile-plugins/js/sm-city-picker.js'
   export default {
        ready () {
           $("#city-picker").cityPicker({
              toolbarTemplate: '<header class="bar bar-nav">\
                                    <button class="button button-link pull-right close-picker">确定</button>\
                                    <h1 class="title">选择收货地址</h1>\
                                </header>'
           })
        }
      }
</script>
