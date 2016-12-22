<template>
  <progress :percent.sync="Progress.percent" :options="Progress.options"> </progress>
  <div class="content">
    <div class="page">
    <router-view></router-view>
    </div>
  </div>
</template>

<style lang="css" scoped>
  @import "../static/css/weui.css";
  @import "../static/css/example.css";
  @import "../static/css/global.css";
  @import '../static/plugins/font/css/font-awesome.css';
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



