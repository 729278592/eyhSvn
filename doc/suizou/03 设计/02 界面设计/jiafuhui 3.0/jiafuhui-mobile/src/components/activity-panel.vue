<template>
    <div class="weui_panel weui_panel_access">
    <div class="weui_panel_hd" v-if="header" @click="onClickHeader">
      <a v-if="more" :href="getUrl(more.url)" class="more" @click.prevent="onItemClick(more)">{{ more.title }}<i class="icon-arrow"></i></a>
      <span v-html="header"></span>
    </div>
    <div class="weui_panel_bd">
      <a :href="getUrl(item.url)" v-for="item in list" @click.prevent="onItemClick(item)" class="weui_media_box weui_media_appmsg">
        <div class="weui_media_hd" v-if="item.img">
          <img class="weui_media_appmsg_thumb" :src="item.img" alt="">
        </div>
        <div class="weui_media_bd">
          <h4 class="weui_media_title">{{item.title}}</h4>
          <p class="weui_media_desc">{{item.desc}}</p>
          <span class="date">{{item.date}}</span>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
  import {
    go,
    getUrl
  } from 'vux/src/libs/router'

  export default {
    props: {
      header: String,
      more: Object,
      list: Array
    },
    methods: {
      getUrl (url) {
        return getUrl(url, this.$router)
      },
      onClickHeader () {
        this.$emit('on-click-header')
      },
      onItemClick (item) {
        this.$emit('on-click-item', item)
        go(item.url, this.$router)
      }
    }
  }
</script>