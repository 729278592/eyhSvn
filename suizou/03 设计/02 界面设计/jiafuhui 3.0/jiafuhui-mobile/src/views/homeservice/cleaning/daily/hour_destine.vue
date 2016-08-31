<template>
<div class="destine">
	<address-panel :list="address_list" :select_address="select_address"></address-panel>
	<flexbox>
		<flexbox-item class="vux-1px-r"><div class="flex-demo">
			<i slot="icon" class="icon icon-calendar"></i>
			<datetime title="" format="YYYY-MM-DD" value="2016-07-10" confirm-text="确认" cancel-text="取消"><i slot="icon"></i></datetime>
		</div></flexbox-item>
		<flexbox-item>
			<div class="flex-demo">
		    	<i slot="icon" class="icon icon-clock-o"></i>
				<datetime title="" value="00:00" format="HH:mm" confirm-text="确认" cancel-text="取消"><i slot="icon"></i></datetime>
			</div>
		</flexbox-item>
	</flexbox>
	<group class="area">
		<!-- <div class="choose-area"><selector title="房屋面积" :value.sync="select_option.name" :options="area_list" @on-change="onChooseArea"></selector><span class="pf">平方</span></div> -->

    <x-input :value.sync="areas" title="房屋面积" placeholder="100" keyboard="number" @on-change="onChooseArea" v-ref:input><span>平米</span></x-input>
	  <div class="weui_cell">
      <div class="weui_cell_hd">
        <label class="weui_label" style="width: 5em;">服务时长</label>
      </div>
      <div class="weui_cell_bd weui_cell_primary">
        <div class="weui_input">{{time}}</div>
      </div>
      <div class="weui_cell_ft">
        <span>小时</span></div>
    </div>
	</group>	
	<group title="更多需求：" class="textarea">
	  <x-textarea :max="200" placeholder="请输入详细描述"></x-textarea>
	</group>
	<div class="serve">服务费：<div><span>{{select_option.price}}</span>.00元</div></div>
	<div class="agree" @click="onCheck"><i class="icon-check-circle" v-if="checked == true"></i><i class="icon-check-circle-o" v-else></i> 同意《家服汇服务协议》</div>
	<div class="btn-panel">
      <x-button type="primary" v-link="'/cleaning/daily/hour_pay'">下一步</x-button>
    </div>
</div>
</template>

<script>
  import Group from 'vux/src/components/group'
  import Datetime from 'vux/src/components/datetime'
  import Flexbox from 'vux/src/components/flexbox'
  import FlexboxItem from 'vux/src/components/flexbox-item'
  import XTextarea from 'vux/src/components/x-textarea'
  import XButton from 'vux/src/components/x-button'
  import XInput from 'vux/src/components/x-input'
  import Selector from 'vux/src/components/selector'
  import AddressPanel from 'components/address-panel'

  export default {
    data () {
      return {
        areas: '',
        time: '',
        address_list: [],
        select_address: null,
        option_list: [],
        select_option: {id: 0, name: '', time: '', price: 0},
        area_list: [],
        checked: false
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
      // this.$http.get('/static/data/hour_option.json').then((response) => {
      //   this.$progress.finish()
      //   this.option_list = response.data
      //   this.select_option = this.option_list[0]
      //   for (let item of this.option_list) {
      //     this.area_list.push(item.name)
      //   }
      // }, (response) => {
      //   this.$progress.failed()
      // })
    },
    components: {
      Group,
      Flexbox,
      FlexboxItem,
      Datetime,
      XTextarea,
      XButton,
      XInput,
      AddressPanel,
      Selector
    },
    methods: {
      onCheck: function () {
        if (this.checked) {
          this.checked = false
        } else {
          this.checked = true
        }
      },
      onChooseArea: function () {
        if (this.areas >= 60 && this.areas <= 80) {
          this.time = 2
        } else if (this.areas >= 81 && this.areas <= 100) {
          this.time = 3
        } else if (this.areas >= 101 && this.areas <= 120) {
          this.time = 4
        } else if (this.areas >= 121 && this.areas <= 150) {
          this.time = 5
        }
        // console.log(this.select_option.name)
        console.log(this.areas)
      }
    }
  }
</script>