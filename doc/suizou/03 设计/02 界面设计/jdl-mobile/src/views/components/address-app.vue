
<template>
    <input type="text" id='city-picker' v-model="pcaAddress" class="weui_input" value={{pcaAddress}} type="text"/>
</template>
<!--
  <style scoped>
    @import '../../../static/plugins/mobile-plugins/css/sm.min.css'
  </style>
-->

<script>
  import '../../../static/plugins/zepto/zepto.min.js'
  import '../../../static/plugins/mobile-plugins/js/sm.js'
  import '../../../static/plugins/mobile-plugins/js/sm-city-picker.js'
   export default {
        data(){
          return{
          }
        },
        ready () {
           $("#city-picker").cityPicker({
              toolbarTemplate: '<header class="bar bar-nav">\
                                    <button class="button button-link pull-right close-picker" >确定</button>\
                                    <h1 class="title">选择地址</h1>\
                                </header>'
           })
        },
        props:{
          pcaAddress:{
              type:String,
              required: false,
              default:function(){
                  return '四川 广安  武胜';
              }
          }
        }
      }
</script>
