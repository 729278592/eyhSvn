<template>
<div class="order-list weui_tab">
  <div class="weui_tab_bd">
    <tab active-color="#50AAFF">
        <tab-item :selected="tab_index == m_pay" @click="onSelect(m_pay)">待付款</tab-item>
        <tab-item :selected="tab_index == m_wait" @click="onSelect(m_wait)">待完成</tab-item>
        <tab-item :selected="tab_index == m_finish" @click="onSelect(m_finish)">已完成</tab-item>
    </tab>
    <div class="tab-list">
      <div class="item" v-for="item in list">
        <div class="title_line"><a class="btn" v-if="this.tab_index==m_finish" @click="onDelete(item)"><i class="icon-trash"></i></a>{{{item.title}}}</div>
        <div class="detail">
          <p class="time">{{item.time}}</p><p class="area">{{item.area}}</p><p class="duration">{{item.duration}}</p>
        </div>
        <div class="item-bottom">
          <div class="total vux-1px-b">合计：<span>{{item.total}}</span><small>(含保险费3.00)</small></div>
          <div class="item-btn">
            <x-button mini plain v-if="this.tab_index==m_pay" @click="showCancelConfirm1">取消订单</x-button>
            <x-button mini plain v-if="this.tab_index==m_wait" @click="showCancelConfirm2">取消订单</x-button>
            <x-button mini plain class="border-blue" v-if="this.tab_index==m_wait" @click="showFinishConfirm">确认完成</x-button>
            <x-button mini plain v-if="this.tab_index==m_pay" class="border-blue" @click="onPay">去付款</x-button>
            <x-button mini plain v-if="this.tab_index==m_finish" @click="onClick">开具发票</x-button>
            <x-button mini plain v-if="this.tab_index==m_finish" class="border-blue" v-link="'/order/comment'">去评价</x-button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <confirm :show.sync="cancelConfirm1" title="" cancel-text="取消" confirm-text="确认" @on-confirm="onCancelAction1(1)" @on-cancel="onCancelAction1(0)">
    <p style="text-align:center;">确认取消</p>
  </confirm>
  <confirm :show.sync="cancelConfirm2" title="" cancel-text="取消" confirm-text="确定" @on-confirm="onCancelAction2(1)" @on-cancel="onCancelAction2(0)">
    <p style="text-align:center;">取消订单后不能恢复，您支付的金额将退回到<a v-link="'/'">[微信钱包]</a>，请留意账户余额变动</p>
  </confirm>
  <confirm :show.sync="finishConfirm"  title="" cancel-text="取消" confirm-text="确认" @on-confirm="onFinishAction(1)" @on-cancel="onFinishAction(0)">
    <p style="text-align:center;">确认完成，邀请你参与评价</p>
  </confirm>

  <!-- 发票弹框 -->
  <div class="receipt-box" v-if="receipt == false">
    <group class="box">
      <div class="number">订单号：<span>88990066</span></div>
      <x-input class="vux-1px-t" title="发票抬头" placeholder="请输入发票抬头" v-ref:input></x-input>
      <x-input class="vux-1px-t" title="发票内容" placeholder="服务费" v-ref:input></x-input>
      <cell title="发票金额" inline-desc="(到付10.00元)" ><span style="color:#FF5000;font-size:1.4rem;">100.00元</span></cell>
      <x-input class="vux-1px-t" title="收件人" placeholder="请输入收件人姓名" v-ref:input></x-input>
      <x-input class="vux-1px-t" title="联系电话" placeholder="请输入电话号码" keyboard="number" v-ref:input></x-input>
      <x-input class="vux-1px-t" title="邮编" placeholder="请输入邮编" is-type="email" v-ref:input></x-input>
      <x-input class="vux-1px-tb" title="详细地址" placeholder="如成都市武侯区高朋大道11号D座501" v-ref:input></x-input>
      <div class="receipt-btn"><div class="weui_btn_dialog default vux-1px-r" @click="onChooseDefault()">取消</div><div class="weui_btn_dialog primary" @click="onChoosePrimary()">确认</div></div>
    </group>
  </div>

  <tabbar class="menu">
    <tabbar-item link="/">
      <i slot="icon" class="icon-home"></i>
      <span slot="label">首页</span>
    </tabbar-item>
    <tabbar-item link="/order/list" selected>
      <i slot="icon" class="icon-order_active"></i>
      <span slot="label">订单</span>
    </tabbar-item>
    <tabbar-item link="/user">
      <i slot="icon" class="icon-user"></i>
      <span slot="label">我的</span>
    </tabbar-item>
  </tabbar>
</div>
</template>

<script>
  import {
    Tab,
    TabItem
  } from 'vux/src/components/tab'
  import {
    Tabbar,
    TabbarItem
  } from 'vux/src/components/tabbar'
  import XButton from 'vux/src/components/x-button'
  import XInput from 'vux/src/components/x-input'
  import Group from 'vux/src/components/group'
  import Cell from 'vux/src/components/cell'
  import Confirm from 'vux/src/components/confirm'

  export default {
    data () {
      return {
        cancelConfirm1: false,
        cancelConfirm2: false,
        finishConfirm: false,
        tab_index: 0,
        m_pay: 0,
        m_wait: 1,
        m_finish: 2,
        list: [],
        receipt: true
      }
    },
    ready () {
      document.title = '我的订单'
      this.$progress.start()
      this.$http.get('/static/data/order_list.json').then((response) => {
        this.$progress.finish()
        this.list = response.data
      }, (response) => {
        this.$progress.failed()
      })
    },
    components: {
      Tab,
      TabItem,
      Tabbar,
      TabbarItem,
      XButton,
      Confirm,
      XInput,
      Cell,
      Group
    },
    methods: {
      // 获取列表
      onSelect: function (item) {
        this.tab_index = item
        this.$progress.start()
        this.$http.get('/static/data/order_list.json?type=' + item).then((response) => {
          this.$progress.finish()
          this.list = response.data
        }, (response) => {
          this.$progress.failed()
        })
      },
      showFinishConfirm: function () {
        this.finishConfirm = true
      },
      onFinish: function () {
        this.$router.go('/order/finish')
      },
      showCancelConfirm1: function () {
        this.cancelConfirm1 = true
      },
      showCancelConfirm2: function () {
        this.cancelConfirm2 = true
      },
      onCancelAction1: function (confirm) {
        this.cancelConfirm1 = false
        if (confirm === 1) {
          // 取消订单
          console.log('取消订单')
        }
      },
      onCancelAction2: function (confirm) {
        this.cancelConfirm2 = false
        if (confirm === 1) {
          // 取消订单
          console.log('取消订单')
        }
      },
      onFinishAction: function (confirm) {
        this.finishConfirm = false
        if (confirm === 1) {
          // 完成订单并跳转评论
          console.log('完成订单')
          this.$router.go('/order/comment')
        }
      },
      onDelete: function (item) {
        // 删除订单
        this.list.$remove(item)
        // console.log(this.item)
      },
      onPay: function () {
        console.log('pay')
      },
      // 开具发票
      onClick: function () {
        if (this.receipt) {
          this.receipt = false
        } else {
          this.receipt = true
        }
      },
      onChooseDefault: function () {
        this.receipt = true
      },
      onChoosePrimary: function () {
        this.receipt = true
      }
    }
  }
</script>