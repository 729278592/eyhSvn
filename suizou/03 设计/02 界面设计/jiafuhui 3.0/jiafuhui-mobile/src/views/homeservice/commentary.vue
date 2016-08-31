<template>
	<div class="judge-of" style="margin-top:-10px;">
    	<comment-panel class="activity-panel" title="评论" :list="comment_list"></comment-panel>
    </div>
</template>

<script>
    import CommentPanel from 'components/comment-panel'
    export default {
      data () {
        return {
          comment_list: []
        }
      },
      ready () {
        document.title = '评论详情'
        // 评论列表
        this.$http.get('/static/data/comment_list.json').then((response) => {
          this.comment_list = response.data
        }, (response) => {
          this.$progress.failed()
        })
      },
      components: {
        CommentPanel
      }
    }
</script>