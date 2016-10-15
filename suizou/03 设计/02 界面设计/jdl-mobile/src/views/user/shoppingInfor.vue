<template>
  <Bar></Bar>
</template>
<script>
  import Bar from '../components/headBar.vue'
  export default {
     components: {
          Bar
      },
      data () {
        return {
          hide:true
        }
      },
      ready () {
            document.title = '商品详情'
          }
    }
</script>
