<template>
	<div class="address-no-data" v-if="list.length==0">
      <a v-link="'/user/address/add'"><i class="icon-plus-circle-o"></i> 添加地址</a>
  </div>
  <div class="address-list address" v-if="list.length>0">
    <div class="item" v-for="item in list">
      <div class="name">{{item.name}}</div>
      <div class="address"><i class="icon-map-marker-o"></i> {{item.address}}</div>
      <div class="item-bottom vux-1px-t">
        <div class="item-action">
          <a class="btn" @click="onEdit(item)"><i class="icon-edit"></i>编辑</a>
          <a class="btn" @click="onDelete(item)"><i class="icon-trash"></i>删除</a>
        </div>
        <div class="isdefault" @click="onChoose(item)">
          <i class="icon-check-circle blue" v-if="choose_item == item"></i><i class="icon-check-circle-o" v-else></i><span :class="{'blue':choose_item == item}">默认地址</span>
        </div>
      </div>
    </div>
    <div class="btn-panel">
      <x-button type="primary"style="background:#51AAFE;" v-link="'/user/address/add'">添加新地址</x-button>
    </div>
  </div>
</template>

<script>
  import XButton from 'vux/src/components/x-button'

  export default {
    data () {
      return {
        list: [],
        checked: true,
        choose_item: null
      }
    },
    ready () {
      document.title = '我的地址'
      this.$progress.start()
      // 获取用户地址信息
      this.$http.get('/static/data/address.json').then((response) => {
        this.$progress.finish()
        this.list = response.data
      }, (response) => {
        this.$progress.failed()
      })
    },
    components: {
      XButton
    },
    methods: {
      onEdit: function (item) {

      },
      onDelete: function (item) {
        this.list.$remove(item)
      },
      onChoose: function (item) {
        this.choose_item = item
      }
    }
  }
</script>