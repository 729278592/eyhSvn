<template>
<div class="recharge-log">
	<div class="header">
		<div class="top">账户余额(元)</div>
		<div class="title">100.0</div>
		<flexbox style="background:none;color:#fff;">
			<flexbox-item class="vux-center"></flexbox-item>
		  		<flexbox-item class="vux-1px-r vux-center" style="height:12px;" v-link="'/user/recharge'">充值</flexbox-item>
		  		<flexbox-item class="vux-center" v-link="">记录</flexbox-item>
		  	<flexbox-item class="vux-center"></flexbox-item>
		</flexbox>
	</div>
    <scroller lock-x height="-196">
        <group>
            <cell title="钱包充值" value="+100"><span class="label label-blue">未支付</span></cell>
            <cell title="随机返现" value="+60"><span class="label label-gray">已支付</span></cell>
        </group>
    </scroller>
	
</div>
</template>

<script>
import Group from 'vux/src/components/group'
import Cell from 'vux/src/components/cell'
import Flexbox from 'vux/src/components/flexbox'
import FlexboxItem from 'vux/src/components/flexbox-item'
import Scroller from 'vux/src/components/scroller'

export default {
  ready () {
    document.title = '记录'
  },
  components: {
    Group,
    Cell,
    Flexbox,
    FlexboxItem,
    Scroller
  }
}
</script>
