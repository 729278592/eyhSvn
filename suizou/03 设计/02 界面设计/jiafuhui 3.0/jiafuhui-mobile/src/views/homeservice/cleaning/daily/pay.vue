<template>
<div class="pay">
	<group class="group-top">
	  	<cell title="毛毛 18089765479" inline-desc="四川省成都市武侯区 高朋大道高新科技工业园D座5楼"><i slot="icon" class="map icon-map-marker-o"></i></cell>
	</group>
	<div class="">
		<group>
			<div class="title_line">钟点保洁</div>
		  	<cell title="服务时间" value="2016-7-10 14:00"></cell>
		  	<!-- 包月选择不显示 -->
		  	<div>
		  		<!-- 开荒清洁该项不显示 -->
		  		<cell title="房屋面积" value="60-80平方"></cell>
		  		<cell title="服务时长" value="2小时"></cell>
		  	</div>
		  	<!-- 包月选择显示 -->
		  	<div class="month" v-if="">
		  		<cell title="包月选择" value="1个月"></cell>
		  		<cell title="服务面积" value="260平米"></cell>
		  	</div>
		  	<!-- <cell title="优惠券" value="2张优惠券" v-link="'/'" is-link ></cell> -->
		  	<cell class="cell_list cell_color" title="服务费" value="80.00元"></cell>
		  	<cell title="可用积分" value="50积分可抵0.5元"></cell>
		</group>
		<group class="pay-change">
		  	<cell title="支付类型":value.sync="pay_text" value="微信" @click="onClickPay" is-link></cell>
		  	<div class="pay-type" v-if="pay_type == false">
		  		<cell title="微信支付" v-if="pay==false" @click="onChoosePay(1)"><i slot="icon" class="wx icon-wxpay"></i></cell>
		  	</div>
		  	<cell title="选择保险" value="3元/份 1份" :value.sync="safe" @click="onClickSafe" is-link></cell>		  	
		  	<div class="safe-type" v-if="safe_type == false">
		  		<cell title="平安保险" inline-desc="5元" @click="onChooseSafe(1)"><i slot="icon" class="icon-check-circle" style="color:#51AAFE"  v-if="checked == false"></i><i slot="icon"class="icon-check-circle-o" v-else></i><badge text="!"></badge></cell>
		  		<cell title="泰康保险" inline-desc="3元" @click="onChooseSafe(2)"><i slot="icon" class="icon-check-circle" style="color:#51AAFE"  v-if="checked1 == false"></i><i slot="icon"class="icon-check-circle-o" v-else></i><badge text="!"></badge></cell>
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

	export default {
	  data () {
	    return {
	      safe_title: '',
	      safe: '',
	      receipt: true,
	      pay_text: '',
	      pay: false,
	      checked: true,
	      checked1: true,
	      radio2: true,
	      radio1: true,
	      pay_type: true,
	      safe_type: true
	    }
	  },
	  ready () {
    document.title = '订单结算'
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
	    XInput
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
	        this.pay_text = '微信'
	      }
	    },
	    // 选择保险
	    onClickSafe: function () {
	      if (this.safe_type) {
	        this.safe_type = false
	      } else {
	        this.safe_type = true
	      }
	    },
	    onChooseSafe: function (num) {
	      if (num === 1) {
	        if (this.checked) {
	          this.checked = false
	        } else {
	          this.checked = true
	        }
	      } else if (num === 2) {
	        if (this.checked1) {
	          this.checked1 = false
	        } else {
	          this.checked1 = true
	        }
	      }
	    }
	  }
	}
</script>