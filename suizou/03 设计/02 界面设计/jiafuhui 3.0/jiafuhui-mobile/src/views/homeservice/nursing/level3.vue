<template>
<div class="nursing_level" v-for="item in list">
	<div class="header">
        <div class="area_title"><span>医患<small>陪护</small></span></div>
    </div>
    <div class="title_line white_bg clearfix"><span style=" vertical-align: middle;">{{item.name}}</span><div class="right_text"><span class="colors">{{item.price}}</span>元/天</div></div>
    <div style="padding: 5px 15px;">（{{item.note}}）</div>
    <div class="list">
	    <flexbox>
	      	<flexbox-item v-link="'/nursing/level1'"><div class="item">一级护工</div></flexbox-item>
	      	<flexbox-item v-link="'/nursing/level2'"><div class="item">二级护工</div></flexbox-item>
	      	<flexbox-item v-link=""><div class="item item-active">三级护工</div></flexbox-item>
	    </flexbox>
    </div>
    <div class="content_range white_bg">
    	<div class="title_line vux-1px-b">适用对象<i class="icon icon-angle-down"></i></div>
    	<p class="content_text">{{{item.people}}}</p>
    </div>
    <div class="content_range white_bg">
    	<div class="title_line vux-1px-b">护理项目<i class="icon icon-angle-down"></i></div>
    	<p class="content_text" style="text-indent: 0;padding:20px 30px;">{{{item.range}}}</p>
    </div>
    <div class="content_range white_bg">
    	<div class="title_line vux-1px-b">服务范围<i class="icon icon-angle-down"></i></div>
    	<p class="content_text" style="text-indent: 0;padding:20px 30px;">{{{item.content}}}</p>
    </div>
    <div class="bottom_btn">
    	<x-button style="background:#51AAFE;color:#fff;" v-link="'/nursing/destine3'">立即预约</x-button>
    </div>
</div>
</template>

<script>
  import Flexbox from 'vux/src/components/flexbox'
  import FlexboxItem from 'vux/src/components/flexbox-item'
  import XButton from 'vux/src/components/x-button'

  export default {
    data () {
      return {
        tab_index: 0,
        list: []
      }
    },
    ready () {
      document.title = '服务详情'
      this.$progress.start()
      this.$http.get('/static/data/level3.json').then((response) => {
        this.$progress.finish()
        this.list = response.data
      }, (response) => {
        this.$progress.failed()
      })
    },
    components: {
      Flexbox,
      FlexboxItem,
      XButton
    },
    methods: {
      onSelect: function (index) {
        this.tab_index = index
      }
    }
  }
</script>