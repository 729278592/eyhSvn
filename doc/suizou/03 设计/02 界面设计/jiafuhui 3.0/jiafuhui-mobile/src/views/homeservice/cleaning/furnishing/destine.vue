<template>
<div class="destine">
	<group class="group-top">
	  	<cell title="点击设置或添加地址" is-link @click="onClick"><i slot="icon" class="map icon-map-marker-o"></i></cell>
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
		<!-- 沙发 -->
	  	<x-input :value.sync="area" title="服务数量" placeholder="7" keyboard v-ref:input><span>座</span></x-input>
	  	<!-- 窗帘 -->
	  	<!-- <x-input :value.sync="area" title="服务数量" placeholder="7" keyboard v-ref:input><span>片</span></x-input> -->
	  	<!-- 地板保养显示 -->
	  	<!-- <x-input :value.sync="area" title="服务面积" placeholder="7" keyboard v-ref:input><span>平米</span></x-input> -->
	</group>
	<group title="更多需求：" class="textarea">
	  <x-textarea :max="200" placeholder="请输入详细描述"></x-textarea>
	</group>
	<div class="serve">服务费：<div><span>{{area * 6}}</span>.00元</div></div>
	<div class="agree" @click="onCheck"><i class="icon-check-circle" v-if="checked == false"></i><i class="icon-check-circle-o" v-else></i> 同意《家服汇服务协议》</div>
	<div class="btn-panel">
      <x-button type="primary"style="background:#51AAFE;" v-link="'/cleaning/furnishing/pay'">下一步</x-button>
    </div>

    <!-- 添加地址 -->
    <div class="editor-address" v-if="editor_address == false">
    	<div class="bg" @click="onClickAddress"></div>
    	<!-- 添加默认地址 -->
    	<div class="address-list" v-if="add_address == true">
    		<div class="item" v-for="item in list" @click="onChoose(item)">
		      	<div class="icon item-bottom" style="display:inline-block">
		      		<div class="isdefault">
		          		<i class="icon-check-circle" style="color:#51AAFD;" v-if="checked"+{{item.id}}+"==false"></i><i class="icon-check-circle-o" v-else></i>
		        	</div>
		      	</div>		      	
    			<div class="right" style="display:inline-block">
			      	<div class="name">{{item.name}}</div>
			      	<div class="address"><i class="icon-map-marker-o"></i> {{item.address}}</div>
		      	</div>
		    </div>
		    <div class="btn-panel">
		      <x-button type="primary"style="background:#51AAFE;" @click="onChooseEditor">添加新地址</x-button>
		    </div>
    	</div>
    	<!-- 添加新地址 -->
    	<group class="add-address" v-if="editor == false">
    		<x-input :value.sync="name" title="姓  名" placeholder="请输入姓名" v-ref:input></x-input>
	  		<x-input :value.sync="tel" title="联系电话" placeholder="请输入手机号码" is-type="china-mobile" v-ref:input></x-input>
		  	<selector :value.sync="province" placeholder="省份" title="省份" :options="province_list" @on-change="onProvinceChange"></selector>
		    <selector :value.sync="city" placeholder="市" title="市" :options="city_list" @on-change="onCityChange"></selector>
		    <selector :value.sync="district" placeholder="区/县" title="区/县" :options="district_list" @on-change="onDistrictChange"></selector>
		    <selector :value.sync="street" placeholder="乡镇/街道" title="乡镇/街道" :options="street_list" @on-change="onStreetChange"></selector>
		    <x-input :value.sync="address" title="详细地址" placeholder="详细地址" v-ref:input></x-input>
		    <div class="btn-panel">
		      	<x-button type="primary" @click="onPost">确定</x-button>
		    </div>
		</group>

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
	import Selector from 'vux/src/components/selector'

	export default {
	  data () {
	    return {
	      area: '',
	      checked: false, // 同意协议
	      checked1: true, // 选中默认地址
	      list: [],
	      editor: true, // 添加新地址
	      editor_address: true, 
	      name: '',
	      tel: '',
	      province: '',
	      province_list: [],
	      city: '',
	      city_list: [],
	      district: '',
	      district_list: [],
	      street: '',
	      street_list: [],
	      address: '', // 详细地址输入
	      add_address: true, // 添加默认地址
	      select_address:{}
	    }
	  },
	  ready () {
	    document.title = '服务预定'
	    this.$progress.start()
	    // 获取用户地址信息
	    this.$http.get('/static/data/address.json').then((response) => {
	      this.$progress.finish()
	      this.list = response.data
	    }, (response) => {
	      this.$progress.failed()
	    })
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
	    XInput,
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
	    onProvinceChange: function () {
	      console.log(this.province)
	    },
	    onCityChange: function () {
	      console.log(this.city)
	    },
	    onDistrictChange: function () {
	      console.log(this.district)
	    },
	    onStreetChange: function () {
	      console.log(this.street)
	    },
	    // 添加地址
	    onClick: function () {
	      if (this.editor_address) {
	        this.editor_address = false
	      } else {
	        this.editor_address = true
	      }
	    },
	    // 添加新地址
	    onChooseEditor: function () {
	      if (this.editor) {
	        this.editor = false
	        this.add_address = false
	      } else {
	        this.editor = true
	        this.add_address = true
	      }
	    },
	    // 确认添加新地址
	    onPost: function () {
	      this.editor_address = true
	      this.add_address = true
	      this.editor = true
	    },
	    onClickAddress: function () {
	      this.editor_address = true
	    },
	    // onChoose: function (item) {
	    //   if (this.checked1) {
	    //     this.checked1 = false
	    //   } else {
	    //     this.checked1 = true
	    //   }
	    //   console.log(item)
	    // },
	    onChoose: function (item) {
	      console.log(item.name)
	    }
	  }
	}
</script>