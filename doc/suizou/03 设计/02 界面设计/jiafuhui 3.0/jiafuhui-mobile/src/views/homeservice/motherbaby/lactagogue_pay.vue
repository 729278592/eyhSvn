<template>
<div class="pay">
	<group class="group-top">
	  	<cell class="address-panel" :value.ync="address" title="毛毛 18089765479" inline-desc="四川省成都市武侯区 高朋大道高新科技工业园D座5楼"  is-link><i slot="icon" class="map icon-map-marker-o"></i></cell>
	</group>
	<div class="">
		<group>
			<!-- 判断 -->
			<div class="title_line">催乳师</div>
		  	<cell :value.ync="hour" title="服务时间" value="2016-7-10 14:00"></cell>
		  	<!--催乳师显示 次数  入户指导显示时长-->
		  	<cell :value.ync="times" title="服务次数" value="1"></cell>
		  	<cell class="cell_color" title="预计总金额" value="9800.00元"></cell>
		  	<cell class="cell_color" title="预计尾款" value="9000.00元"></cell>
		</group>
		<group class="pay-change">
		  	<cell title="支付类型":value.sync="pays" value="微信" @click="onClickPay" is-link></cell>
		  	<div class="pay-type" v-if="pay_type == false">
		  		<cell title="微信支付" v-if="pay==false" @click="onChoosePay(1)"><i slot="icon" class="wx icon-wxpay"></i></cell>
		  	</div>
		</group>
	</div>
	<div class="add-pay">支付定金：<div><span>800</span>.00元</div></div>
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

	export default {
	  data () {
	    return {
	      address: '',
	      hour: '',
	      times: '',
	      duration: '',
	      checked: false,
	      pay_type: true,
	      pays: '',
	      pay: false
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
	    Badge
	  },
	  methods: {
	    // 支付类型
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
	    onClickSafe: function () {
	      if (this.safe_type) {
	        this.safe_type = false
	      } else {
	        this.safe_type = true
	      }
	    },
	    onClick: function () {
	      if (this.checked) {
        this.checked = false
      } else {
        this.checked = true
      }
	    }
	  }
	}
</script>