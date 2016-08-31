<template>
  <div class="nursing">
    <div class="header"></div>
    <flexbox>
      <flexbox-item v-link="'/nursing/level1'"><i class="icon-jfh-yjhg"></i><span>一级护工</span></flexbox-item>
      <flexbox-item v-link="'/nursing/level2'"><i class="icon-jfh-rjhg"></i><span>二级护工</span></flexbox-item>
      <flexbox-item v-link="'/nursing/level3'"><i class="icon-jfh-sjhg"></i><span>三级护工</span></flexbox-item>
      <flexbox-item v-link=""></flexbox-item>
    </flexbox>
  </div>
</template>

<script>
  import Flexbox from 'vux/src/components/flexbox'
  import FlexboxItem from 'vux/src/components/flexbox-item'

  export default {
    ready () {
      document.title = '医患陪护'
    },
    components: {
      Flexbox,
      FlexboxItem
    }
  }
</script>