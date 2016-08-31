<template>
<div class="nursing_level">
	<div class="header">
        <div class="area_title"><span>医患<small>陪护</small></span></div>
    </div>
    <div class="title_line white_bg clearfix"><span style=" vertical-align: middle;">{{selectItem.name}}</span><div class="right_text"><span class="colors">{{selectItem.price}}</span>元/次</div></div>
    <div style="padding: 5px 15px;">{{selectItem.note}}</div>
    <div class="list">
	    <flexbox>
	      	<flexbox-item v-link="" v-for="item in lists"><div class="item" :class="{'item-active' :item==selectItem}" @click="onChoose(item)">{{item.name}}</div></flexbox-item>
	    </flexbox>
    </div>
    <div class="centent_range white_bg">
    	<div class="title_line vux-1px-b">适用对象<i class="icon icon-angle-down"></i></div>
    	<p class="centent_text">{{selectItem.people}}</p>
    </div>
    <div class="centent_range white_bg" v-if="item==0">
    	<div class="title_line vux-1px-b">护理项目<i class="icon icon-angle-down"></i></div>
    	<tab active-color="#50AAFF">
	        <tab-item :selected="tab_index == 0" @click="onSelect(0)">标准项目</tab-item>
	        <tab-item :selected="tab_index == 1" @click="onSelect(1)">特需项目</tab-item>
    	</tab>    	
    	<p class="centent_text" style="text-indent: 0;padding:20px 30px;" v-if="tab_index == 0"><img src='/static/temp/nursing/level1_01.jpg'></p>
    	<p class="centent_text" v-if="tab_index == 1">雾化辅助、扣背排痰、鼻饲辅助、痰口护理</p>
    </div>
    <div class="centent_range white_bg" v-if="item==1||item==2">
      <div class="title_line vux-1px-b">护理项目<i class="icon icon-angle-down"></i></div>
      <p class="centent_text">{{selectItem.people}}</p>
    </div>

    <div class="centent_range white_bg">
    	<div class="title_line vux-1px-b">服务范围<i class="icon icon-angle-down"></i></div>
    	<p class="centent_text" style="text-indent: 0;padding:20px 30px;">{{{selectItem.content}}}</p>
    </div>
    <div class="bottom_btn">
    	<x-button style="background:#51AAFE;color:#fff;" v-link="'/nursing/destine'">立即预约</x-button>
    </div>
</div>
</template>

<script>
  import Flexbox from 'vux/src/components/flexbox'
  import FlexboxItem from 'vux/src/components/flexbox-item'
  import {
    Tab,
    TabItem
  } from 'vux/src/components/tab'
  import XButton from 'vux/src/components/x-button'

  export default {
    data () {
      return {
        tab_index: 0,
        lists: [],
        selectItem: {}
      }
    },
    ready () {
      document.title = '服务详情'
      this.$progress.start()
      this.$http.get('/static/data/levels.json').then((response) => {
        this.$progress.finish()
        this.lists = response.data
        this.selectItem = this.lists[0]
      }, (response) => {
        this.$progress.failed()
      })
    },
    components: {
      Flexbox,
      FlexboxItem,
      Tab,
      TabItem,
      XButton
    },
    methods: {
      onChoose (item) {
        this.selectItem = item
      },
      onSelect: function (index) {
        this.tab_index = index
      }
    }
  }
</script>