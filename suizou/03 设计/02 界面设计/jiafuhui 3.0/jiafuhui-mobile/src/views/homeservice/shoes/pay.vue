<template>
<div class="pay destine shine-shoes">
	<group class="group-top">
	  	<cell title="添加地址" is-link><i slot="icon" class="map icon-map-marker-o"></i></cell>
	</group>
	<flexbox>
		<flexbox-item class="vux-1px-r"><div class="flex-demo">
			<i slot="icon" class="icon icon-calendar"></i>
			<calendar title="" value="2016-07-12"></calendar>
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
	<!-- 判断选择鞋柜显示 -->
	<group class="area">
		<div style="padding:10px 15px;font-size:1.4rem;color:#bbb;">鞋柜清理</div>
		<!-- <cell title="类别" value="皮鞋"><div style="display:inline-block;margin-left:5px;"><span style="color:#FF5000;font-size:1.8rem;">3.00</span>元/双<small style="color:#bbb;text-decoration:line-through;">5.00元</small></div></cell>
		<x-number placeholder="不少于5双" title="数量" :value=5 :min=5 :fillable=false @on-change="changeNum"></x-number>-->
		<x-input placeholder="2米起订" title="鞋柜长度" v-ref:input><span>米</span></x-input>
	</group>
	<!-- <div class="change-accessory">
		<group>
			<div style="padding:10px 15px;font-size:1.4rem;color:#bbb;">配件<span v-link="'/shoes/buy'" style="float:right;color:#51AAFE;">添加</span></div>
			<cell class="cell_color" title="鞋油" value="3.00元"></cell>
		</group>
	</div> -->
	<div class="">
		<!-- <group>
		  	<cell title="优惠券" value="2张优惠券" v-link="'/'" is-link ></cell>
		  	
		</group> -->
		<group title="更多需求：" class="textarea">
		  <x-textarea :max="200" placeholder="请输入详细描述"></x-textarea>
		</group>
		<group>
			<cell class="cell_list cell_color vux-1px-t" title="服务费" value="80.00元"></cell>
			<cell class="vux-1px-t" title="可用积分" value="50积分可抵0.5元"></cell>
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

	export default {
	  data () {
	    return {
	      area: '',
	      // safe_title: '',
	      // safe: '',
	      receipt: true,
	      pays: '',
	      pay: false,
	      radio2: true,
	      radio1: true,
	      checked1: true,
	      checked2: true,
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
	    XNumber,
	    XInput,
	    XTextarea,
	    Flexbox,
	    FlexboxItem,
	    Checker,
	    CheckerItem,
	    Calendar
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
	    }
	  }
	}
</script>