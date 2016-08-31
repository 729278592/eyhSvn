<template>
  <div class="motherbaby">
    <div class="header"></div>
    <flexbox>
      <flexbox-item v-link="'/motherbaby/yuesao'"><i class="icon-jfh-ysfw"></i><span>月嫂服务</span></flexbox-item>
      <flexbox-item v-link="'/motherbaby/lactagogue'"><i class="icon-jfh-crs"></i><span>催乳师</span></flexbox-item>
      <flexbox-item v-link="'/motherbaby/home_guid'"><i class="icon-jfh-rhzds"></i><span>入户指导师</span></flexbox-item>
      <flexbox-item v-link=""></flexbox-item>
    </flexbox>
  </div>
</template>

<script>
  import Flexbox from 'vux/src/components/flexbox'
  import FlexboxItem from 'vux/src/components/flexbox-item'

  export default {
    ready () {
      document.title = '母婴月嫂'
    },
    components: {
      Flexbox,
      FlexboxItem
    }
  }
</script>