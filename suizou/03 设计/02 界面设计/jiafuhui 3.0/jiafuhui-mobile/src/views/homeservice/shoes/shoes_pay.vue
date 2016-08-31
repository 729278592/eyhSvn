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

	<!-- 判断选择擦鞋显示 -->
	<div class="shoes-type area">
		<div class="vux-1px-b" style="padding:10px 15px;font-size:1.4rem;color:#bbb;">上门擦鞋</div>
		<flexbox>		
			<flexbox-item class="vux-1px-r"><cell title="类别" value="皮鞋"></cell></flexbox-item>
			<flexbox-item class="number vux-1px-r"><x-number placeholder="不少于5双" title="数量" :value=1 :min=1 :fillable=false :width=30 @on-change="changeNum"></x-number></flexbox-item>
			<flexbox-item style="margin-left:0;"><cell title="价格" value="5元"></cell></flexbox-item>
		</flexbox>
	</div>
	<!-- <div class="change-accessory">
		<group>
			<div style="padding:10px 15px;font-size:1.4rem;color:#bbb;">配件<span v-link="'/shoes/buy'" style="float:right;color:#51AAFE;">添加</span></div>
			<cell class="cell_color" title="鞋油" value="3.00元"></cell>
		</group>
	</div> -->
	<div class="">
		<group title="更多需求：" class="textarea">
		  <x-textarea :max="200" placeholder="请输入详细描述"></x-textarea>
		</group>
		<group>
			<coupon-panel :list="coupon_list" :select_address="select_coupon"></coupon-panel>
			<cell class="cell_list cell_color vux-1px-t" title="服务费" value="80.00元"></cell>
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
	import Checklist from 'vux/src/components/checklist'
	import Badge from 'vux/src/components/badge'
	import Calendar from 'vux/src/components/calendar'
	import Flexbox from 'vux/src/components/flexbox'
	import FlexboxItem from 'vux/src/components/flexbox-item'
	import Checker from 'vux/src/components/checker'
	import CheckerItem from 'vux/src/components/checker-item'
	import XTextarea from 'vux/src/components/x-textarea'
	import XInput from 'vux/src/components/x-input'
	import XNumber from 'vux/src/components/x-number'
	import AddressPanel from 'components/address-panel'
	import CouponPanel from 'components/coupon-panel'

	export default {
	  data () {
	    return {
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
	    Selector,
	    Radio,
	    XButton,
	    Checklist,
	    Badge,
	    XNumber,
	    XInput,
	    XTextarea,
	    Flexbox,
	    FlexboxItem,
	    Checker,
	    CheckerItem,
	    Calendar,
	    AddressPanel,
	    CouponPanel
	  },
	  methods: {
	    // 选择支付方式
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
	    changeNum: function (val) {
	      console.log('change', val)
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