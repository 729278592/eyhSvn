<template>
    <activity-panel class="activity-panel" :list="list"></activity-panel>
</template>

<script>
  import ActivityPanel from 'components/activity-panel'

  export default {
    data () {
      return {
        list: []
      }
    },
    ready () {
      document.title = '优惠活动'
      this.$progress.start()
      // 获取优惠活动数据
      this.$http.get('./static/data/activities.json').then((response) => {
        this.$progress.finish()
        this.list = response.data
      }, (response) => {
        this.$progress.failed()
      })
    },
    components: {
      ActivityPanel
    }
  }
</script>