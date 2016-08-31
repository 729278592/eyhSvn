<template>
<div class="destine">
	<group class="group-top">
	  	<cell title="点击设置或添加地址" is-link><i slot="icon" class="map icon-map-marker-o"></i></cell>
	</group>
	<flexbox>
		<flexbox-item class="vux-1px-r"><div class="flex-demo">
			<i slot="icon" class="icon icon-calendar"></i>
			<!-- <calendar title="" value="2016-07-12"></calendar> -->
			<datetime title=""format="YYYY-MM-DD HH:mm" value="2016-07-10" format="HH:mm" confirm-text="确认" cancel-text="取消"><i slot="icon"></i></datetime>
		</div></flexbox-item>
		<flexbox-item>
			<div class="flex-demo">
		    	<i slot="icon" class="icon icon-clock-o"></i>
				<datetime title="" value="00:00" format="HH:mm" confirm-text="确认" cancel-text="取消"><i slot="icon"></i></datetime>
			</div>
		</flexbox-item>
	</flexbox>
	<group class="area">
	  	<x-input :value.sync="area" title="服务数量" placeholder="1" keyboard v-ref:input><span>间</span></x-input>
	</group>	
	<group title="更多需求：" class="textarea">
	  <x-textarea :max="200" placeholder="请输入详细描述"></x-textarea>
	</group>
	<div class="serve">服务费：<div><span>{{area * 60}}</span>.00元</div></div>
	<div class="agree" @click="onCheck"><i class="icon-check-circle" v-if="checked == false"></i><i class="icon-check-circle-o" v-else></i> 同意《家服汇服务协议》</div>
	<div class="btn-panel">
      <x-button type="primary"style="background:#51AAFE;" v-link="'/cleaning/choiceness/pay'">下一步</x-button>
    </div>
</div>
</template>

<script>
	import Group from 'vux/src/components/group'
	import Cell from 'vux/src/components/cell'
	import Calendar from 'vux/src/components/calendar'
	import Datetime from 'vux/src/components/datetime'
	import Flexbox from 'vux/src/components/flexbox'
	import FlexboxItem from 'vux/src/components/flexbox-item'
	import Checker from 'vux/src/components/checker'
	import CheckerItem from 'vux/src/components/checker-item'
	import XTextarea from 'vux/src/components/x-textarea'
	import XButton from 'vux/src/components/x-button'
	import XInput from 'vux/src/components/x-input'

	export default {
	  data () {
	    return {
	      area: '',
	      checked: false
	    }
	  },
	  ready () {
    document.title = '服务预定'
  },
	  components: {
	    Group,
	    Cell,
	    Flexbox,
	    FlexboxItem,
	    Calendar,
	    Datetime,
	    Checker,
	    CheckerItem,
	    XTextarea,
	    XButton,
	    XInput
	  },
	  methods: {
	    onCheck: function () {
	      if (this.checked) {
	        this.checked = false
	      } else {
	        this.checked = true
	      }
	    }
	  }
}
</script>