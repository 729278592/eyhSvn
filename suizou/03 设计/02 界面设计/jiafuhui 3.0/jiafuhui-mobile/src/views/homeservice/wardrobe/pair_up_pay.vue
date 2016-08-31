<template>
<div class="pay destine shine-shoes">
	<address-panel :list="address_list" :select_address="select_address"></address-panel>
	<flexbox>
		<flexbox-item class="vux-1px-r"><div class="flex-demo">
			<i slot="icon" class="icon icon-calendar"></i>
			<datetime title=""format="YYYY-MM-DD" value="2016-07-10" format="HH:mm" confirm-text="确认" cancel-text="取消"><i slot="icon"></i></datetime>
		</div></flexbox-item>
		<flexbox-item>
			<div class="flex-demo">
		    	<i slot="icon" class="icon icon-clock-o"></i>
				<datetime title="" value="00:00" format="HH:mm" confirm-text="确认" cancel-text="取消"><i slot="icon"></i></datetime>
			</div>
		</flexbox-item>
	</flexbox>
	<group class="area">
		<x-input :value.sync="number" title="搭配套数" placeholder="10套起订" keyboard="number" v-ref:input><span>套</span></x-input>
	</group>
	<!-- <div class="change-accessory">
		<div class="title"><i class="icon-heart-circle-o"></i>配件推荐</div>
		<flexbox>
			<flexbox-item><div class="flex-demo">
				<div class="img" v-link="'/shoes/buy'"><img src="/static/temp/shoes/shoes_img1.jpg"></div>
				<div class="change">
				<p style="display:inline-block;" @click="onChange1"><i slot='icon' class='icon icon-check-circle' v-if="checked1 == false"></i><i slot='icon' class='icon icon-check-circle-o'></i>衣架</p>
				<span class="num">数量1件</span>
				</div>
				<div class="cost">10.00元/件</div>
			</div></flexbox-item>
			<flexbox-item><div class="flex-demo">
				<div class="img" v-link="'/shoes/buy'"><img src="/static/temp/shoes/shoes_img2.jpg"></div>
				<div class="change">
				<p style="display:inline-block;" @click="onChange2"><i slot='icon' class='icon icon-check-circle' v-if="checked2 == false"></i><i slot='icon' class='icon icon-check-circle-o'></i>抹布</p>
				<span class="num">数量1件</span>
				</div>
				<div class="cost">10.00元/件</div>
			</div></flexbox-item>
		</flexbox>
	</div> -->
	<div class="">
		<group title="更多需求：" class="textarea">
		  <x-textarea :max="200" placeholder="请输入详细描述"></x-textarea>
		</group>
		<group>
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
	import XButton from 'vux/src/components/x-button'
	import Badge from 'vux/src/components/badge'
	import Flexbox from 'vux/src/components/flexbox'
	import FlexboxItem from 'vux/src/components/flexbox-item'
	import XTextarea from 'vux/src/components/x-textarea'
	import XInput from 'vux/src/components/x-input'
	import AddressPanel from 'components/address-panel'
	import CouponPanel from 'components/coupon-panel'

	export default {
	  data () {
	    return {
	      number: '',
	      pays: '',
	      pay: false,
	      checked1: true,
	      checked2: true,
	      pay_type: true,
	      address_list: [],
	      select_address: null,
	      score: false,
	      coupon_list: [],
	      select_coupon: null
	    }
	  },
	  ready () {
	    document.title = '订单结算'
	    this.$progress.start()
	    // 获取用户地址信息
	    this.$http.get('/static/data/address.json').then((response) => {
	      this.$progress.finish()
	      this.address_list = response.data
	      for (let item of this.address_list) {
	        if (item.isdefault) {
	          this.select_address = item
	          return
	        }
	      }
	    }, (response) => {
	      this.$progress.failed()
	    })
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
	    XButton,
	    Badge,
	    XInput,
	    XTextarea,
	    Flexbox,
	    FlexboxItem,
	    AddressPanel,
	    CouponPanel
	  },
	  methods: {
	    // 付款方式
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
	    // 选择配件
	    onChange1: function () {
	      if (this.checked1) {
	        this.checked1 = false
	      } else {
	        this.checked1 = true
	      }
	    },
	    onChange2: function () {
	      if (this.checked2) {
	        this.checked2 = false
	      } else {
	        this.checked2 = true
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