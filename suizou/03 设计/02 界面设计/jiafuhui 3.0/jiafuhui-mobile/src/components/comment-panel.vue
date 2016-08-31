<template>
  <div class="comment-panel">
      <div class="comment-title vux-1px-b">{{title}}（{{list.length}}）</div>
      <div class="comment-list">
          <div class="comment-item vux-1px-b" v-for="item in list">
              <div class="user-info"><strong class="nickname">{{item.nickname}}</strong> <img class="avatar" :src="item.avatar"> </div>
              <p class="location"><i class="icon-map-marker-o"></i> {{item.location}}</p>
              <div class="content">
                {{{item.content}}}
              </div>
              <div class="pics">
                <img :src="pic" v-for="pic in item.pics" track-by="$index">
              </div>
          </div>
      </div>
      <a href="#" class="comment-more" v-if="more">查看更多~</a>
  </div>
</template>

<script>
  export default {
    props: {
      cid: Number,
      title: String,
      more: Boolean,
      list: Array
    },
    methods: {
    }
  }
</script>