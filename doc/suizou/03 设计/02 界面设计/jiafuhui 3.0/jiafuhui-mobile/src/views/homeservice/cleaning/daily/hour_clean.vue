<template>
<div class="clean-public month-clean" v-for="item in list">
    <div class="header">
        <div class="area_title"><span>日常<small>保洁</small></span></div>
    </div>
    <div class="icebox_title">
    	<div class="left">
    		<div class="top">{{item.title}}</div>
    		<div><span class="thumbs icon-thumbs-up"></span><rater :value='item.score' :margin="5" :font-size="20" :value.sync="rate" active-color="#FF5000" disabled></rater></div>
    	</div>
    	<div class="right">{{{item.price}}}</div>
    </div>
    <div class="title_line">注：{{item.note}}</div>
    <!-- <div class="list">
        <flexbox>
          	<flexbox-item v-link="" v-for="item in list"><div class="item" :class="{'item-active':item==item}" @click="onChoose(item)">{{{item.name}}}</div></flexbox-item>
        </flexbox>
    </div> -->
    <div class="content_range white_bg" style="margin-top:0;">
    	<div class="title_line vux-1px-b">适用范围<i class="icon icon-angle-down"></i></div>
    	<p class="content_text">{{item.apply}}</p>
    </div>
    <div class="content_range white_bg">{{{item.area}}}
    </div>
    <div class="judge-of">
    	<comment-panel class="activity-panel" title="评论" :list="comment_list" :cid="item.id" :more="true" v-link="'/homeservice/commentary'"></comment-panel>
    </div>
    <div class="content_range white_bg">
    	<div class="title_line vux-1px-b">服务范围<i class="icon icon-angle-down"></i></div>
    	<p class="content_text" style="text-indent: 0;padding:20px 30px;">{{{item.serve}}}</p>
    </div>
    <div class="content_range white_bg">
    	<div class="title_line vux-1px-b">服务标准<i class="icon icon-angle-down"></i></div>
      <ul class="content_text col">
        {{{item.text}}}
      </ul>
    	<p class="content_text" style="text-indent: 0;padding:20px 30px;">{{{ item.content }}}</p>
    </div>
    <div class="bottom_btn">
    	<x-button style="background:#51AAFE;color:#fff;" v-link="'/cleaning/daily/hour_destine'">立即预约</x-button>
    </div>

    <!-- 不在服务区弹框 -->
    <alert :show.sync="cancelAction" title="" button-text="确定" @on-hide="onHide">
      <p style="text-align:center;">服务不再本服务区！</p>
    </alert>
</div>
</template>
<script>
    import Rater from 'vux/src/components/rater'
    import Flexbox from 'vux/src/components/flexbox'
    import FlexboxItem from 'vux/src/components/flexbox-item'
    import XButton from 'vux/src/components/x-button'
    import CommentPanel from 'components/comment-panel'
    import Alert from 'vux/src/components/alert'

    export default {
      data () {
        return {
          list: [],
          comment_list: [],
          cancelAction: false
        }
      },
      ready () {
        document.title = '服务详情'
        this.$progress.start()
        this.$http.get('/static/data/hour_clean.json').then((response) => {
          this.$progress.finish()
          this.list = response.data
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
        CommentPanel,
        Alert
      },
      methods: {
        onChoose (item) {
          this.item = item
        },
        onHide () {
          this.cancelAction = false
        }
      }
    }
</script>