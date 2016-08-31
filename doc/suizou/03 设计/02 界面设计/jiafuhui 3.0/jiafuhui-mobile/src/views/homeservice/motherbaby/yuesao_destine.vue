<template>
<div class="destine">
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
	<group>
		<div class="title_line">意向月嫂</div>
		<cell title="月嫂级别" value="经济适用"></cell>
		<datetime title="我的预产期" value="2016-07-21" format="YYYY-MM-DD" confirm-text="确认" cancel-text="取消"></datetime>
	</group>	
	<group title="更多需求：" class="textarea">
	  <x-textarea :max="200" placeholder="您要求我服务，省心省力"></x-textarea>
	</group>
	<div class="agree" @click="onCheck"><i class="icon-check-circle" v-if="checked == true"></i><i class="icon-check-circle-o" v-else></i> 同意《家服汇服务协议》</div>
	<div class="btn-panel">
      <x-button type="primary"style="background:#51AAFE;" v-link="'/motherbaby/yuesao_pay'">预约面试</x-button>
    </div>
</div>
</template>

<script>
	import Group from 'vux/src/components/group'
	import Cell from 'vux/src/components/cell'
	import Datetime from 'vux/src/components/datetime'
	import Flexbox from 'vux/src/components/flexbox'
	import FlexboxItem from 'vux/src/components/flexbox-item'
	import XTextarea from 'vux/src/components/x-textarea'
	import XButton from 'vux/src/components/x-button'
	import XInput from 'vux/src/components/x-input'
	import AddressPanel from 'components/address-panel'

	export default {
	  data () {
	    return {
	      checked: false,
	      address_list: [],
	      select_address: null
	    }
	  },
	  ready () {
	    document.title = '服务预定'
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
	  },
	  components: {
	    Group,
	    Cell,
	    Flexbox,
	    FlexboxItem,
	    Datetime,
	    XTextarea,
	    XButton,
	    XInput,
	    AddressPanel
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