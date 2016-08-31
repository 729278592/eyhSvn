<template>
	<div class="buy" style="margin-bottom:50px;">
		<div class="banner-text">
		{{{selectItem.banner}}}
			<!-- <swiper class="banner" :list="banner_list"  height="180"></swiper> -->
			<group>
				<cell title="衣架"><div><span>{{selectItem.price}}</span>元/件</div></cell>
			</group>
		</div>
		<group class="select">
		<div class="opt choose-color">
	      <span class="title">颜色</span>
	      <checker default-item-class="demo1-item" selected-item-class="demo1-item-selected">
	        <checker-item value="1" v-link="" v-for="item in list" :class="{'demo1-selected':item==selectItem}" @click="onChoose(item)">{{item.name}}<i class="icon icon-check-square"></i></checker-item>
	      </checker>
	    </div>
	    <div class="opt">
	      <span class="title">尺寸</span>
	      <checker default-item-class="demo1-item" selected-item-class="demo1-item-selected">
	        <checker-item value="1" v-link="">一个<i class="icon icon-check-square"></i></checker-item>
	        <checker-item value="2" v-link="">十个<i class="icon icon-check-square"></i></checker-item>
	      </checker>
	    </div>
	    <x-number placeholder="不少于5双" title="数量" :value=1 :min=1 :fillable=false @on-change="changeNum"></x-number>
	    </group>
	    <div class="tab" style="margin-top:10px;">
		    <tab active-color="#50AAFF">
		        <tab-item :selected="tab_index == 0" @click="onSelect(0)">商品介绍</tab-item>
		        <tab-item :selected="tab_index == 1" @click="onSelect(1)">产品尺寸</tab-item>
		        <tab-item :selected="tab_index == 2" @click="onSelect(2)">包装售后</tab-item>
		    </tab>
		    <div class="content">{{{selectItem.details}}}</div>
	    </div>
	    <div class="bottom_btn">
	    	<x-button style="background:#51AAFE;color:#fff;" v-link="'/shoes/pay'">确定</x-button>
	    </div>
	</div>
</template>

<script>
	import Swiper from 'vux/src/components/swiper'
	import Group from 'vux/src/components/group'
	import Cell from 'vux/src/components/cell'
	import Checker from 'vux/src/components/checker'
	import CheckerItem from 'vux/src/components/checker-item'
	import XNumber from 'vux/src/components/x-number'
	import {
	    Tab,
	    TabItem
	  } from 'vux/src/components/tab'
	import XButton from 'vux/src/components/x-button'

	export default {
	  data () {
	    return {
	      banner_list: [],
	      tab_index: 0,
	      list: [],
	      selectItem: {}
	    }
	  },
	  ready () {
	    document.title = '服务详情'
	    this.$progress.start()
	    this.$http.get('/static/data/buy.json').then((response) => {
	      this.$progress.finish()
	      this.list = response.data
	      this.selectItem = this.list[0]
	    }, (response) => {
	      this.$progress.failed()
	    })
	  },
	  components: {
	    Swiper,
	    Group,
	    Cell,
	    Checker,
	    CheckerItem,
	    XNumber,
	    Tab,
	    TabItem,
	    XButton
	  },
	  methods: {
	    onCheck: function () {
	      if (this.checked) {
	        this.checked = false
	      } else {
	        this.checked = true
	      }
	    },
	    changeNum: function (val) {
	      console.log('change', val)
	    },
	    onChoose (item) {
	      this.selectItem = item
	    }
	  }
	}

</script>