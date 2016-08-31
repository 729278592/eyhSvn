<template>
<div class="clean-public icebox">
    <div class="header">
        <div class="area_title"><span>家电<small>保洁</small></span></div>
    </div>
    <div class="icebox_title">
    	<div class="left">
    		<div class="top">冰箱清洗</div>
    		<div><span class="thumbs icon-thumbs-up"></span><rater :value='selectItem.score' :margin="5" :font-size="20" :value.sync="rate" active-color="#FF5000" disabled></rater></div>
    	</div>
    	<div class="right"><span>{{selectItem.price}}</span>元/台</div>
    </div>
    <div class="title_line">注：{{selectItem.note}}</div>
    <div class="list">
        <flexbox>
          	<flexbox-item v-link="" v-for="item in list"><div class="item" :class="{'item-active':item==selectItem}" @click="onChoose(item)">{{item.name}}</div></flexbox-item>
        </flexbox>
    </div>
    <div class="judge-of">
    	<comment-panel class="activity-panel" title="评论" :list="comment_list" :more="true" v-link="'/homeservice/commentary'"></comment-panel>
    </div>
    <div class="content_range white_bg">
    	<div class="title_line vux-1px-b">服务范围<i class="icon icon-angle-down"></i></div>
    	<p class="content_text">{{selectItem.range}}</p>
    </div>
    <div class="content_range white_bg">
    	<div class="title_line vux-1px-b">服务标准<i class="icon icon-angle-down"></i></div>
      <ul class="content_text col">
        {{{selectItem.text}}}
      </ul>
    	<p class="content_text" style="text-indent: 0;padding:20px 30px;">{{{ selectItem.content }}}</p>
    </div>
    <div class="bottom_btn">
    	<x-button style="background:#51AAFE;color:#fff;" v-link="'/cleaning/appliance/icebox_destine'">立即预约</x-button>
    </div>
</div>
</template>
<script>
    import Rater from 'vux/src/components/rater'
    import Flexbox from 'vux/src/components/flexbox'
    import FlexboxItem from 'vux/src/components/flexbox-item'
    import XButton from 'vux/src/components/x-button'
    import CommentPanel from 'components/comment-panel'
    export default {
      data () {
        return {
          list: [],
          comment_list: [],
          selectItem: {}
        }
      },
      ready () {
        document.title = '服务详情'
        this.$progress.start()
        this.$http.get('/static/data/icebox.json').then((response) => {
          this.$progress.finish()
          this.list = response.data
          this.selectItem = this.list[0]
        }, (response) => {
          this.$progress.failed()
        })
        // 评论列表
        this.$http.get('/static/data/comment_list.json').then((response) => {
          this.comment_list = response.data
        }, (response) => {
          this.$progress.failed()
        })
      },
      components: {
        Rater,
        Flexbox,
        FlexboxItem,
        XButton,
        CommentPanel
      },
      methods: {
        onChoose (item) {
          this.selectItem = item
        }
      }
    }
</script>