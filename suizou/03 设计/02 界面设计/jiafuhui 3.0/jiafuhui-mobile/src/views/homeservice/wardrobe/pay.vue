<template>
<div class="pay destine shine-shoes">
	<group class="group-top">
	  	<cell title="添加地址" is-link><i slot="icon" class="map icon-map-marker-o"></i></cell>
	</group>
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
		<x-input :value.sync="area" title="衣柜长度" placeholder="3米起订" keyboard v-ref:input><span>米</span></x-input>
		<!-- 判断选择服装搭配显示 -->
		<x-input :value.sync="area" title="搭配套数" placeholder="10套起订" keyboard v-ref:input><span>套</span></x-input>
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
		  	<cell class="cell_list cell_color" title="服务费" value="80.00元"></cell>
		  	<cell title="可用积分" value="50积分可抵0.5元"></cell>
		</group>
		<!-- <group>
		  	<cell title="优惠券" value="2张优惠券" v-link="'/'" is-link ></cell>
		</group> -->
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
	      // safe_title: '',
	      // safe: '',
	      pays: '',
	      pay: false,
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