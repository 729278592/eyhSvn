<template>
  <div class="wardrobe">
    <div class="header"></div>
    <flexbox>
      <flexbox-item v-link="'/wardrobe/clean_up'"><i class="icon-jfh-yczl"></i><span>衣橱整理</span></flexbox-item>
      <flexbox-item v-link="'/wardrobe/planning'"><i class="icon-jfh-ycglgh"></i><span>衣橱管理规划</span></flexbox-item>
      <flexbox-item v-link="'/wardrobe/pair_up'"><i class="icon-jfh-fsdp"></i><span>服饰搭配</span></flexbox-item>
      <flexbox-item v-link=""></flexbox-item>
    </flexbox>
</template>

<script>
  import Flexbox from 'vux/src/components/flexbox'
  import FlexboxItem from 'vux/src/components/flexbox-item'

  export default {
    ready () {
      document.title = '衣橱管理'
    },
    components: {
      Flexbox,
      FlexboxItem
    }
  }
</script>