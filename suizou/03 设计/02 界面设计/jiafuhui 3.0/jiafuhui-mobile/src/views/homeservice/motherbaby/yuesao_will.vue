tr<template>
<div class="yuesao-will">
	<tab active-color="#50AAFF">
    <!-- <tab-item v-for="item in list" :class="{'item-active':item==selectItem}" :selected="tab_index == item" @click="onSelect(item)">{{item.title}}</tab-item> -->
    <tab-item :selected="tab_index == index1" @click="onSelect(index1)">经济适用</tab-item>
    <tab-item :selected="tab_index == index2" @click="onSelect(index2)">小资专选</tab-item>
    <tab-item :selected="tab_index == index3" @click="onSelect(index3)">豪华大牌</tab-item>
    <tab-item :selected="tab_index == index4" @click="onSelect(index4)">明星大师</tab-item>
  </tab>
	<!-- <activity-panel class="activity-panel" :list="list"></activity-panel> -->
  <div class="tab-list">
    <div class="col" v-for="item in list" v-link="'/motherbaby/personal'">      
      <div class="img">{{{item.img}}}</div>
      <div class="infor">
        <div class="name">{{item.name}}</div>
        <div class="text"><span>{{item.desc}}</span></div>
        <div class="job">{{item.date}}</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
  import {
    Tab,
    TabItem
  } from 'vux/src/components/tab'
  import ActivityPanel from 'components/activity-panel'

  export default {
    data () {
      return {
        tab_index: 0,
        list: [],
        index1: 0,
        index2: 1,
        index3: 2,
        index4: 3
      }
    },
    ready () {
      document.title = '意向月嫂选择'
      this.$progress.start()
      this.$http.get('/static/data/yuesao_service.json').then((response) => {
        this.$progress.finish()
        this.list = response.data
      }, (response) => {
        this.$progress.failed()
      })
    },
    components: {
      Tab,
      TabItem,
      ActivityPanel
    },
    methods: {
      onSelect: function (item) {
        this.selectItem = item
        this.$progress.start()
        this.$http.get('/static/data/yuesao_service.json?type' + item).then((response) => {
          this.$progress.finish()
          this.list = response.data
        }, (response) => {
          this.$progress.failed()
        })
      }
    }
  }
</script>