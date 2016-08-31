<template>
<div class="shine-shoes clean-public" style="padding-bottom:60px;" v-for="selectItem in list">
	  <div class="header">
        <div class="area_title"><span>鞋具<small>护理</small></span></div>
    </div>
    <div class="icebox_title">
      <div class="left">
        <div class="top">上门擦鞋</div>
        <div><span class="thumbs icon-thumbs-up"></span><rater :value='selectItem.score' :margin="5" :font-size="20" :value.sync="rate" active-color="#FF5000" disabled></rater></div>
      </div>
      <!-- <div class="right"><span>{{selectItem.price}}</span>元/双<small style="color:#bbb;text-decoration:line-through;">5.00元</small></div> -->
    </div>
    <div class="title_line" style="font-size:1.2rem;">{{selectItem.note}}</div>
    <div class="opt">
      <span class="title">类别</span>
      <!-- <checker default-item-class="demo1-item" selected-item-class="demo1-item-selected">
        <checker-item  value="3" v-link="" v-for="item in list"><div class="item":class="{'demo1-selected':item==selectItem}" @click="onChoose(item)">{{item.name}}<span>{{item.price}}元/双</span><i class="icon icon-check-square"></i></div></checker-item>
      </checker> -->
      <div class="vux-checker-box">
        <label class="vux-checker-item vux-tap-active demo1-item" v-for="item in hobbies">
          <input type="checkbox" name="">
          <div class="item">{{item[0]}}<span>{{item[1]}}</span><i class="icon icon-check-square"></i></div>
        </label>
      </div>
    </div>
    <div class="judge-of">
      <comment-panel class="activity-panel" title="评论" :list="comment_list" :cid="selectItem.id" :more="true" v-link="'/homeservice/commentary'"></comment-panel>
    </div>
    <div class="content_range white_bg vux-1px-t" style="margin-top:0;">
    	<div class="title_line vux-1px-b">服务范围<i class="icon icon-angle-down"></i></div>
        <p class="content_text" style="text-indent: 0;padding:20px 30px;">{{{selectItem.range}}}</p>
    </div>
    <div class="content_range white_bg">
        <div class="title_line vux-1px-b">服务标准<i class="icon icon-angle-down"></i></div>
        <p class="content_text">{{{selectItem.criterion}}}</p>
    </div>
    <div class="content_range white_bg">
        <div class="title_line vux-1px-b">服务流程<i class="icon icon-angle-down"></i></div>
        <p class="content_text col">{{{selectItem.flow_path}}}</p>
    </div>
    
    <div class="bottom_btn">
    	<x-button style="background:#51AAFE;color:#fff;" v-link="'/shoes/shoes_pay'">在线预约</x-button>
    </div>
</div>
</template>

<script>
	import XButton from 'vux/src/components/x-button'
import Checker from 'vux/src/components/checker'
import CheckerItem from 'vux/src/components/checker-item'
import CommentPanel from 'components/comment-panel'
import Rater from 'vux/src/components/rater'
import Checklist from 'vux/src/components/checklist'

export default {
  data () {
    return {
      list: [],
      comment_list: [],
      hobbies: [['皮鞋', '3.00元/双'], ['短靴', '5.00元/双'], ['长靴', '10.00元/双']],
      money: ['3.00元/双', '5.00元/双', '10.00元/双']
    }
  },
  ready () {
    document.title = '服务详情'
    this.$progress.start()
    this.$http.get('/static/data/shine_shoes.json').then((response) => {
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
    XButton,
    Checker,
    CheckerItem,
    CommentPanel,
    Rater,
    Checklist
  },
  methods: {
    onChoose (item) {
      this.selectItem = item
    },
    change (val) {
      console.log('change', val)
    }
  }
}
</script>