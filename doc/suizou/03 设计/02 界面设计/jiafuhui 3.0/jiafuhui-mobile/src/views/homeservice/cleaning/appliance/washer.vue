<template>
<div class="clean-public washer">
    <div class="header">
        <div class="area_title"><span>家电<small>保洁</small></span></div>
    </div>
    <div class="icebox_title">
    	<div class="left">
    		<div class="top">洗衣机机清洗</div>
    		<div><span class="thumbs icon-thumbs-up"></span><rater :value='item.score' :margin="5" :font-size="20" :value.sync="rate" active-color="#FF5000" disabled></rater></div>
    	</div>
    	<div class="right"><span>{{item.price}}</span>元/台</div>
    </div>
    <div class="title_line">注：{{{item.note}}}</div>
    <div class="content_range white_bg" style="margin-top:0;"><p class="content_text" style="text-indent: 0;">适用范围：{{item.tryout}}</p></div>
    <div class="judge-of">
    	<comment-panel class="activity-panel" title="评论" :list="comment_list" :cid="item.id" :more="true" v-link="'/homeservice/commentary'"></comment-panel>
    </div>
    <div class="content_range white_bg">
    	<div class="title_line vux-1px-b">服务范围<i class="icon icon-angle-down"></i></div>      
    	<p class="content_text">{{item.range}}</p>
      <p class="content_text" style="text-indent: 0;padding:20px 30px;">{{{item.range_img}}}</p>
    </div>
    <div class="content_range white_bg">
    	<div class="title_line vux-1px-b">服务标准<i class="icon icon-angle-down"></i></div>
      <p class="content_text">{{ item.content }}</p>
    	<p class="content_text" style="text-indent: 0;padding:20px 80px;">{{{ item.content_img }}}</p>
    </div>
    <div class="bottom_btn">
    	<x-button style="background:#51AAFE;color:#fff;" v-link="'/cleaning/appliance/washer_destine'">立即预约</x-button>
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
          item: {}
        }
      },
      ready () {
        document.title = '服务详情'
        this.$progress.start()
        this.$http.get('/static/data/washer.json').then((response) => {
          this.$progress.finish()
          this.list = response.data
          this.item = this.list[0]
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
          this.item = item
        }
      }
    }
</script>