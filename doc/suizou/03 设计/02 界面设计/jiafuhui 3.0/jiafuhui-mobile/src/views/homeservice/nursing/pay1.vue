<template>
<div class="pay">
	<group class="group-top">
	  	<cell class="address-panel" title="毛毛 18089765479" inline-desc="四川省成都市武侯区 高朋大道高新科技工业园D座5楼"><i slot="icon" class="map icon-map-marker-o"></i></cell>
	</group>
	<div class="">
		<group>
			<div class="title_line">一级护工</div>
		  	<cell title="服务时间" value="2016-7-10 14:00"></cell>
		  	<cell title="服务时长" value="2小时"></cell>
		  	<coupon-panel :list="coupon_list" :select_address="select_coupon"></coupon-panel>
		  	<cell class="cell_list cell_color" title="服务费" value="80.00元"></cell>
		  	<cell class="jf" title="可用积分" value="50积分可抵0.5元" @click="onChooScore"><i class="icon-check-circle" style="color:#51AAFE;" v-if="score == true"></i><i class="icon-check-circle-o" v-else></i></cell>
		</group>
		<group class="pay-change">
		  	<cell title="支付类型":value.sync="pays" value="微信" @click="onClickPay" is-link></cell>
		  	<div class="pay-type" v-if="pay_type == false">
		  		<cell title="微信支付" v-if="pay==false" @click="onChoosePay(1)"><i slot="icon" class="wx icon-wxpay"></i></cell>
		  	</div>
		</group>
	</div>

	<div class="add-pay">合计：<div><span>200</span>.00元</div></div>
	<div class="btn-panel"><x-button v-link="'../../order/list'" style="background:#51AAFE;color:#fff;">提交订单</x-button></div>
</div>
</template>

<script>
	import Group from 'vux/src/components/group'
	import Cell from 'vux/src/components/cell'
	import Datetime from 'vux/src/components/datetime'
	import Selector from 'vux/src/components/selector'
	import Radio from 'vux/src/components/radio'
	import XButton from 'vux/src/components/x-button'
	import XInput from 'vux/src/components/x-input'
	import Checklist from 'vux/src/components/checklist'
	import Badge from 'vux/src/components/badge'
	import CouponPanel from 'components/coupon-panel'

	export default {
	  data () {
	    return {
	      pays: '',
	      pay: false,
	      pay_type: true,
	      score: false,
	      coupon_list: [],
	      select_coupon: null
	    }
	  },
	  ready () {
	    document.title = '订单结算'
	    this.$progress.start()
	    // 获取用户地址信息
	    this.$http.get('/static/data/coupon_list.json').then((response) => {
	      this.$progress.finish()
	      this.coupon_list = response.data
	      for (let item of this.coupon_list) {
	        if (item.isdefault) {
	          this.select_coupon = item
	          return
	        }
	      }
	    }, (response) => {
	      this.$progress.failed()
	    })
	  },
	  components: {
	    Group,
	    Cell,
	    Datetime,
	    Selector,
	    Radio,
	    XButton,
	    Checklist,
	    Badge,
	    XInput,
	    CouponPanel
	  },
	  methods: {
	    // 选择付款方式
	    onClickPay: function () {
	      if (this.pay_type) {
	        this.pay_type = false
	      } else {
	        this.pay_type = true
	      }
	    },
	    onChoosePay: function (num) {
	      if (num === 1) {
	        // if (this.pay) {
	        //   this.pay = false
	        // } else {
	        //   this.pay = true
	        // }
	        this.pays = '微信'
	      }
	    },
	    // 选择积分
	    onChooScore: function () {
	      if (this.score) {
	        this.score = false
	      } else {
	        this.score = true
	      }
	    }
	  }
	}
</script>