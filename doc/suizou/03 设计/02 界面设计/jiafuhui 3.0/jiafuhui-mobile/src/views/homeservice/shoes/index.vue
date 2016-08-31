<template>
  <div class="shoes">
    <div class="header"></div>
    <flexbox>
      <flexbox-item v-link="'/shoes/shine_shoes'"><i class="icon-jfh-smcx"></i><span>上门擦鞋</span></flexbox-item>
      <flexbox-item v-link="'/shoes/shoebox'"><i class="icon-jfh-xgql"></i><span>鞋柜清理</span></flexbox-item>
      <flexbox-item v-link=""><i class="icon-jfh-xlyh"></i><span>鞋类养护</span></flexbox-item>
      <flexbox-item v-link=""></flexbox-item>
    </flexbox>
</template>

<script>
  import Flexbox from 'vux/src/components/flexbox'
  import FlexboxItem from 'vux/src/components/flexbox-item'

  export default {
    ready () {
      document.title = '鞋类护理'
    },
    components: {
      Flexbox,
      FlexboxItem
    }
  }
</script>