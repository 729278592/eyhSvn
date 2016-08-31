<template>
<div class="recharge">
  	<div class="header">
		<div class="top">账户余额(元)</div>
		<div class="title">{{money.toFixed(2)}}</div>
		<flexbox style="background:none;color:#fff;">
			<flexbox-item class="vux-center"></flexbox-item>
		  		<flexbox-item class="vux-1px-r vux-center" style="height:12px;" v-link="">充值</flexbox-item>
		  		<flexbox-item class="vux-center" v-link="'/user/recharge_log'">记录</flexbox-item>
		  	<flexbox-item class="vux-center"></flexbox-item>
		</flexbox>
	</div>
	<div class="flexbox list">
		<flexbox>
			<flexbox-item><div class="item">100元<span class="col">返50%</span></div></flexbox-item>
			<flexbox-item><div class="item">200元<span class="col">返50%</span></div></flexbox-item>
			<flexbox-item><div class="item">500元<span class="col">返50%</span></div></flexbox-item>
		</flexbox>
		<flexbox>
			<flexbox-item><div class="item">1000元<span class="col">返50%</span></div></flexbox-item>
			<flexbox-item><div class="item">2000元<span class="col">返50%</span></div></flexbox-item>
			<flexbox-item><div class="item">5000元<span class="col">返50%</span></div></flexbox-item>
		</flexbox>
		<flexbox>
			<flexbox-item><div class="item other" @click="onShow">其他金额</div></flexbox-item>	  
			<flexbox-item></flexbox-item>
			<flexbox-item></flexbox-item>
		</flexbox>	
	</div>
	<div class="agree"><span @click="onCheck"><i class="icon-check-circle" v-if="checked == true"></i><i class="icon-check-circle-o" v-else></i> 同意家服汇《充返活动协议》</span><a href="#">查看具体详情</a></div>
  <confirm :show.sync="show" title="输入金额" cancel-text="取消" confirm-text="充值" @on-confirm="onRecharge"><x-input :value.sync="recharge" keyboard="number" placeholder="请输入" v-ref:input></x-input></confirm> 
</div>
</template>

<script>
  import Confirm from 'vux/src/components/confirm'
  import XInput from 'vux/src/components/x-input'
  import Flexbox from 'vux/src/components/flexbox'
  import FlexboxItem from 'vux/src/components/flexbox-item'

  export default {
    data () {
      return {
        recharge: '',
        show: false,
        money: 100.00,
        checked: false
      }
    },
    ready () {
      document.title = '我的钱包'
    },
    components: {
      Flexbox,
      FlexboxItem,
      Confirm,
      XInput
    },
    methods: {
      // 同意协议
      onCheck: function () {
        if (this.checked) {
          this.checked = false
        } else {
          this.checked = true
        }
      },
      // 显示提示框
      onShow: function () {
        this.show = true
      },
      // 充值处理
      onRecharge: function () {
        let num = parseFloat(this.recharge)
        this.money += num
      }
    }
  }
</script>
