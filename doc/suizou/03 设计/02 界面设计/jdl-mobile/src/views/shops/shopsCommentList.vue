<template>
  <Bar></Bar>
  <div class="bd absolute pt">
    <ul class="entryList mt0 style">
        <li v-for="commentList in list">
            <div class="weui_cells mt0 bt0">
                <div class="weui_cell style3">
                    <div class="weui_cell_bd weui_cell_primary">
                        <p>{{commentList.phone}}</p>
                    </div>
                    <div class="weui_cell_ft">{{commentList.commentTime}}</div>
                </div>
            </div>
            <div>
                <div class="couponImg style" v-html="commentList.img">
                </div>
                <div class="inforList">
                    <p class="clearfix">
                        <span class="left shopsName">{{commentList.shoppingName}}</span>
                    </p>
                    <p>
                        <span>{{commentList.color}}</span>
                    </p>
                    <p class="clearfix">
                        <span class="left shopsName">{{commentList.commentType}}</span>
                    </p>
                </div>
            </div>
            <div class="shopsInfor style">
                {{commentList.commentContent}}
            </div>
        </li>
    </ul>
</div>
</template>
<script>
    import Bar from '../components/shopHead.vue'
    export default {
       components: {
            Bar
        },
      data () {
        return {
          hide:true,
          list:[]
        }
      },
      ready () {
        document.title = '商铺评价记录'
        this.$http.get('../../static/data/shopsCommentList.json').then(function(response){
             this.list = response.data
         }, function(response){
          // 响应错误回调
         })
      },
      methods: {
        onShow: function () {
          this.hide = !this.hide
        }
      }
    }
</script>
