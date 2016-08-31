<template>
  <div class="cleaning">
    <div class="header"></div>
    <div class="title">日常清洁</div>
    <flexbox>
      <flexbox-item v-link="'/cleaning/daily/hour_clean'"><i class="icon-clock-o"></i><span>钟点保洁</span></flexbox-item>
      <flexbox-item v-link="'/cleaning/daily/wasteland'"><i class="icon-jfh-khqj"></i><span>开荒清洁</span></flexbox-item>
      <flexbox-item v-link="'/cleaning/daily/month_clean'"><i class="icon-calendar"></i><span>包月保洁</span></flexbox-item>
      <flexbox-item v-link=""></flexbox-item>
    </flexbox>
    <div class="title">家电保洁</div>
    <flexbox>
      <flexbox-item v-link="'/cleaning/appliance/air_conditioning'"><i class="icon-jfh-ktqx"></i><span>空调清洗</span></flexbox-item>
      <flexbox-item v-link="'/cleaning/appliance/icebox'"><i class="icon-jfh-bxqx"></i><span>冰箱清洗</span></flexbox-item>
      <flexbox-item v-link="'/cleaning/appliance/kitchen'"><i class="icon-jfh-cyyjqx"></i><span>抽油烟机清理</span></flexbox-item>
      <flexbox-item v-link="'/cleaning/appliance/washer'"><i class="icon-jfh-xyjqx"></i><span>洗衣机清理</span></flexbox-item>
    </flexbox>
    <div class="title">家居保洁</div>
    <flexbox>    
      <flexbox-item v-link="'/cleaning/furnishing/safo'"><i class="icon-jfh-sfby"></i><span>沙发保养</span></flexbox-item>
      <flexbox-item v-link=""><!-- <i class="icon-jfh-dbby"></i><span>地板保养</span> --></flexbox-item>
      <flexbox-item v-link=""><!-- <i class="icon-jfh-clby"></i><span>窗帘保养</span> --></flexbox-item>
      <flexbox-item v-link=""></flexbox-item>
    </flexbox>
    <div class="title">精选保洁</div>
    <flexbox>
      <flexbox-item v-link="'/cleaning/choiceness/cookroom'"><i class="icon-jfh-dbby"></i><span>厨房深度保洁</span></flexbox-item>
      <flexbox-item v-link="'/cleaning/choiceness/toilet'"><i class="icon-jfh-sfby"></i><span>卫生间深度保洁</span></flexbox-item>
      <flexbox-item v-link=""></flexbox-item>
    </flexbox>
  </div>
</template>

<script>
  import Flexbox from 'vux/src/components/flexbox'
  import FlexboxItem from 'vux/src/components/flexbox-item'

  export default {
    ready () {
      document.title = '日常保洁'
    },
    components: {
      Flexbox,
      FlexboxItem
    }
  }
</script>