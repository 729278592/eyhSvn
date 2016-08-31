<template>
<div class="shine-shoes clean-public" style="padding-bottom:60px;" v-for="item in list">
	  <div class="header">
        <div class="area_title"><span>衣橱<small>管理</small></span></div>
    </div>
    <div class="icebox_title">
      <div class="left">
        <div class="top">衣橱整理</div>
        <div><span class="thumbs icon-thumbs-up"></span><rater :value='item.score' :margin="5" :font-size="20" :value.sync="rate" active-color="#FF5000" disabled></rater></div>
      </div>
      <div class="right"><span>{{item.price}}</span>元/米</div>
    </div>
    <div class="title_line">{{{item.note}}}</div>
    <div class="judge-of" style="margin-top:-10px;">
      <comment-panel class="activity-panel" title="评论" :list="comment_list" :cid="item.id" :more="true" v-link="'/homeservice/commentary'"></comment-panel>
    </div>
    <div class="content_range white_bg vux-1px-t" style="margin-top:0;">
    	<div class="title_line vux-1px-b">服务范围<i class="icon icon-angle-down"></i></div>
        <p class="content_text" style="text-indent: 0;padding:20px 30px;">{{{item.range}}}</p>
    </div>
    <div class="content_range white_bg">
        <div class="title_line vux-1px-b">服务标准<i class="icon icon-angle-down"></i></div>
        <p class="content_text">{{{item.criterion}}}</p>
    </div>
    <div class="content_range white_bg">
        <div class="title_line vux-1px-b">服务流程<i class="icon icon-angle-down"></i></div>
        <p class="content_text"style="padding: 15px;text-indent:0;">{{{item.flow_path}}}</p>
    </div>    
    <div class="bottom_btn">
    	<x-button style="background:#51AAFE;color:#fff;" v-link="'/wardrobe/clean_pay'">立即订购</x-button>
    </div>
</div>
</template>

<script>
import XButton from 'vux/src/components/x-button'
import Checker from 'vux/src/components/checker'
import CheckerItem from 'vux/src/components/checker-item'
import CommentPanel from 'components/comment-panel'
import Rater from 'vux/src/components/rater'

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
    this.$http.get('/static/data/clean_up.json').then((response) => {
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
    XButton,
    Checker,
    CheckerItem,
    CommentPanel,
    Rater
  },
  methods: {
    onChoose (item) {
      this.item = item
    }
  }
}
</script>