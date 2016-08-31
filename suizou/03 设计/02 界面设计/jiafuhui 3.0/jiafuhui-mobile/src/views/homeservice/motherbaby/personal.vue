<template>
<div class="clean-public yuesao" v-for="item in list">
	<div class="header head-ys">
		<div class="head-bg"></div>
		<div class="infor">
			<div class="portrait"></div>
			<div class="name">{{item.name}}</div>
			<div class="site"><i class="icon icon-map-marker-o"></i>{{item.site}}</div>
			<div class="exoertice">{{{item.exoertice}}}</div>
		</div>
	</div>
	<div class="content_range white_bg">
    	<div class="title_line vux-1px-b">性格特点<i class="icon icon-angle-down"></i></div>
    	<p class="content_text">{{ item.character }}</p>
    </div>
    <div class="content_range white_bg">
    	<div class="title_line vux-1px-b">专业技能<i class="icon icon-angle-down"></i></div>
    	<p class="content_text">{{ item.skill }}</p>
    </div>
    <div class="content_range white_bg">
    	<div class="title_line vux-1px-b">从业资格证件<i class="icon icon-angle-down"></i></div>
    	<p class="content_text">{{ item.certificate }}</p>
    </div>
    <div class="content_range white_bg">
    	<div class="title_line vux-1px-b">服务解释<i class="icon icon-angle-down"></i></div>
    	<ul class="content_text col">{{{ item.explain }}}</ul>
    	<p class="content_text" style="text-indent: 0;padding:20px 30px;">{{{ item.centent }}}</p>
    </div>
    <div class="bottom_btn">
    	<x-button style="background:#51AAFE;color:#fff;" v-link="'/motherbaby/yuesao_destine'">立即预约</x-button>
    </div>
</div>
</template>

<script>
	import XButton from 'vux/src/components/x-button'

	export default {
	  data () {
	    return {
	      list: []
	    }
	  },
	  ready () {
	    document.title = '月嫂信息'
	    this.$progress.start()
	    this.$http.get('/static/data/infor.json').then((response) => {
	      this.$progress.finish()
	      this.list = response.data
	    }, (response) => {
	      this.$progress.failed()
	    })
	  },
	  components: {
	    XButton
	  },
	  methods: {
	  }
	}
</script>