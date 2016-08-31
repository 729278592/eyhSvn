<template>
<div class="pay">
	<group class="group-top">
	  	<cell title="毛毛 18089765479" inline-desc="四川省成都市武侯区 高朋大道高新科技工业园D座5楼"><i slot="icon" class="map icon-map-marker-o"></i></cell>
	</group>
	<div class="">
		<group>
			<!-- 判断 -->
			<div class="title_line">一级护工</div>
		  	<cell title="服务时间" value="2016-7-10 14:00"></cell>
		  	<cell title="服务时长" value="2小时"></cell>
		  	<!-- <cell title="优惠券" value="2张优惠券" v-link="'/'" is-link ></cell> -->
		  	<cell class="cell_list cell_color" title="服务费" value="80.00元"></cell>
		  	<cell title="可用积分" value="50积分可抵0.5元"></cell>
		</group>
		<group>
			<div class="weui_radio" @click="onClick">开具发票<i class="icon-check-circle blue" v-if="checked == false"></i><i class="icon-check-circle-o" v-else></i></div>
			<div v-if="bill == false">			
				<!-- <div class="weui_radio vux-1px-t">类型
					<label class="radio-type" @click="onChooseType(1)">个人<i class="icon-check-circle blue" v-if="radio1 == false"></i><i class="icon-check-circle-o" v-else></i></label>
					<label class="radio-type" @click="onChooseType(2)">公司<i class="icon-check-circle blue" v-if="radio2 == false"></i><i class="icon-check-circle-o" v-else></i></label>
				</div>
				<x-input class="vux-1px-t" title="抬头" placeholder="请输入发票抬头" v-ref:input></x-input> -->
				<cell class="vux-1px-t" title="运费" value="20.00元"></cell>
			</div>
		</group>
		<group class="pay-change">
		  	<cell title="支付类型":value.sync="pays" value="微信" @click="onClickPay" is-link></cell>
		  	<div class="pay-type" v-if="pay_type == false">
		  		<cell title="微信支付" v-if="pay==false" @click="onChoosePay(1)"><i slot="icon" class="wx icon-wxpay"></i></cell>
		  	</div>
		  	<!-- <cell title="选择保险" value="3元/份 1份" :value.sync="safe" @click="onClickSafe" is-link></cell>		  	
		  	<div class="safe-type" v-if="safe_type == false">
		  		<cell title="平安保险" inline-desc="5元" @click="onChooseSafe(1)"><badge text="!"></badge></cell>
		  		<cell title="泰康保险" inline-desc="3元" @click="onChooseSafe(2)"><badge text="!"></badge></cell>
		  	</div> -->
		</group>
	</div>
	<!-- 发票弹框 -->
	<div class="receipt-box" v-if="receipt == false">
		<group class="box">
			<x-input class="vux-1px-t" title="发票抬头" placeholder="请输入发票抬头" v-ref:input></x-input>
			<x-input class="vux-1px-t" title="发票内容" placeholder="服务费" v-ref:input></x-input>
			<cell title="发票金额" inline-desc="(到付10.00元)" ><span style="color:#FF5000;font-size:1.4rem;">100.00元</span></cell>
			<x-input class="vux-1px-t" title="收件人" placeholder="请输入收件人姓名" v-ref:input></x-input>
			<x-input class="vux-1px-t" title="联系电话" placeholder="请输入电话号码" keyboard v-ref:input></x-input>
			<x-input class="vux-1px-t" title="邮编" placeholder="请输入邮编" is-type="email" v-ref:input></x-input>
			<x-input class="vux-1px-tb" title="详细地址" placeholder="如成都市武侯区高朋大道11号D座501" v-ref:input></x-input>
			<div class="receipt-btn"><div class="weui_btn_dialog default vux-1px-r" @click="onChooseDefault()">取消</div><div class="weui_btn_dialog primary" @click="onChoosePrimary()">确认</div></div>
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
	      // safe_title: '',
	      // safe: '',
	      receipt: true,
	      pays: '',
	      pay: false,
	      radio2: true,
	      radio1: true,
	      bill: true,
	      checked: true,
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
	        if (this.pay) {
	          this.pay = false
	        } else {
	          this.pay = true
	        }
	        this.pays = '微信'
	      }
	    },
	    // 判断发票类型
	    // onChooseType: function (num) {
	    //   if (num === 1) {
	    //     if (this.radio1) {
	    //       this.radio1 = false
	    //       this.radio2 = true
	    //     } else {
	    //       this.radio1 = true
	    //       this.radio2 = false
	    //     }
	    //   } else if (num === 2) {
	    //     if (this.radio2) {
	    //       this.radio2 = false
	    //       this.radio1 = true
	    //     } else {
	    //       this.radio2 = true
	    //       this.radio1 = false
	    //     }
	    //   }
	    // },
	    // 选择保险
	    // onClickSafe: function () {
	    //   if (this.safe_type) {
	    //     this.safe_type = false
	    //   } else {
	    //     this.safe_type = true
	    //   }
	    // },
	    // onChooseSafe: function (num) {
	    //   if (num === 1) {
	    //     this.safe = '平安保险'
	    //     this.safe_title = '5元/份'
	    //   } else if (num === 2) {
	    //     this.safe = '泰康保险'
	    //     this.safe_title = '3元/份'
	    //     // console.log('2:' + this.safe_title)
	    //   }
	    // },
	    // 发票
	    onClick: function () {
	      console.log(this.receipt)
	      if (this.receipt) {
	        this.receipt = false
	      } else {
	        this.receipt = true
	      }
	    },
	    onChooseDefault: function () {
	      this.receipt = true
	      this.bill = true
	      this.checked = true
	    },
	    onChoosePrimary: function () {
	      this.receipt = true
	      this.bill = false
	      this.checked = false
	    }
	  }
	}
</script>