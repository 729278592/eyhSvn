<template>
  <!-- 路由外链 -->
  <router-view></router-view>
  <progress :percent.sync="Progress.percent" :options="Progress.options"> </progress>
</template>

<style lang="less">
  @import "./assets/styles/vux/index.less";
</style>
<style lang="sass">
  @import "./assets/styles/jfh.scss";
</style>

<script>
  import progress from 'vue-progressbar/vue-progressbar.vue'

  export default {
    data () {
      return {
        Progress: {
          percent: 0,
          options: {
            show: true,
            canSuccess: true,
            color: 'rgb(1, 223, 255)',
            failedColor: 'red',
            height: '2px'
          }
        }
      }
    },
    components: {
      progress
    },
    created () {
      this.$progress.setHolder(this.Progress)
    }
  }
</script>
