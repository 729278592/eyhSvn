<template>
<div class="lactagogue clean-public" style="padding-bottom:110px;">
	<div class="header">
        <div class="area_title"><span>母婴<small>月嫂</small></span></div>
    </div>
    <div class="title_line white_bg clearfix"><span style=" vertical-align: middle;">催乳师</span><div class="right_text"><span class="colors">{{ item.price }}</span>元/次</div></div>
    <div class="content_range white_bg">
    	<div class="title_line vux-1px-b">服务范围<i class="icon icon-angle-down"></i></div>
      <p class="content_text" style="text-indent: 0;padding:20px 30px;">{{{item.tryout}}}
      </p>
      <p class="content_text" style="text-indent: 0;padding:20px 30px;">{{{item.range}}}
      </p>
    </div>
    <div class="title_line" style="font-size:1.2rem;">{{ item.note }}</div>
    <div class="bottom_btn">
    	<x-button style="background:#fff;color:#FF5000;" v-link="'trl:4001108590'"><i class="icon-telphone"></i>4001108590</x-button>
    	<x-button style="background:#51AAFE;color:#fff;" v-link="'/motherbaby/lactagogue_destine'">在线预约</x-button>
    </div>
</div>
</template>

<script>
	import XButton from 'vux/src/components/x-button'

export default {
  data () {
    return {
      list: [],
      item: {}
    }
  },
  ready () {
    document.title = '服务详情'
    this.$progress.start()
    this.$http.get('/static/data/lactagogue.json').then((response) => {
      this.$progress.finish()
      this.list = response.data
      this.item = this.list[0]
    }, (response) => {
      this.$progress.failed()
    })
  },
  components: {
    XButton
  }
}
</script>