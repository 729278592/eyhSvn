<template>
<div class="destine">
	<!-- 到医院护理 -->
	<div class="hospital-care" style="padding-bottom: 10px;"> <!-- v-if="checked1==true" -->
		<flexbox class="group-top" style="margin:0;padding-top: 10px;">
			<flexbox-item>
				<div class="flex-demo">
					<i slot="icon" class="map icon-map-marker-o"></i><selector :value.sync="hospital" placeholder="选择医院地址" title="" :options="hospital_list" @on-change="onChangeName"></selector>
				</div>
			</flexbox-item>
			<flexbox-item></flexbox-item>
		</flexbox>
		<flexbox class="group-top" style="margin:0;padding: 10px 0;">
			<flexbox-item>
				<div class="flex-demo">
				<i slot="icon" class="yd icon-jfh-yd"></i><selector :value.sync="room" placeholder="选择医院科室" title="" :options="room_list" @on-change="onChangeRoom"></selector>
				</div>
			</flexbox-item>
			<flexbox-item class="vux-1px-r">
				<div class="flex-demo"><i slot="icon" class="edit icon-edit"></i><input class="edit-num" title="" placeholder="填写病房号"></div>
			</flexbox-item>
		</flexbox>
	</div>
	<!-- 到家护理 -->
	<!-- <div class="home-car" v-if="checked2==true">
		<flexbox class="group-top" style="margin:0;padding:10px 0;">
			<flexbox-item>
				<div class="flex-demo"><i slot="icon" class="map icon-map-marker-o"></i><x-input class="edit-address" title="" placeholder="请填写家庭住址" v-ref:input></x-input></div>
			</flexbox-item>
		</flexbox>
	</div> -->
	<!-- 选择 -->
	<!-- <flexbox class="selector vux-1px-t">
		<flexbox-item>
			<div class="agree" @click="onCheckHospital"><i class="icon-check-circle" v-if="checked1 == true"></i><i class="icon-check-circle-o" v-else></i>到医院护理</div>
		</flexbox-item>
		<flexbox-item>
			<div class="agree" @click="onCheckHome" style="text-align:left;"><i class="icon-check-circle" v-if="checked2 == true"></i><i class="icon-check-circle-o" v-else></i>到家中护理</div>
		</flexbox-item>
	</flexbox> -->
	<flexbox style="margin-top:-10px;border-top:1px solid #e0e0e0">
		<flexbox-item><div class="flex-demo">
			<i slot="icon" class="icon icon-calendar"></i>
			<datetime title=""format="YYYY-MM-DD" value="2016-07-10" format="HH:mm" confirm-text="确认" cancel-text="取消"><i slot="icon"></i></datetime>
		</div></flexbox-item>
		<flexbox-item>
			<div class="flex-demo">
			    <i slot="icon" class="icon icon-calendar" style="color:#FF5000;"></i>
				<datetime title="" value="00:00" format="HH:mm" confirm-text="确认" cancel-text="取消"><i slot="icon"></i></datetime>
			</div>
		</flexbox-item>
	</flexbox>
	<group class="cell">
		<cell title="已预定" value="三级护工"></cell>
	  	<x-input :value.sync="number" title="护理天数" placeholder="2" keyboard="number" v-ref:input><span>天</span></x-input>
	</group>
	<group class="cell">
		<x-input :value.sync="people" class="people" title="紧急联系人" placeholder="张阿姨18090908908" v-ref:input></x-input>
	</group>
	<group title="更多需求：" class="textarea">
	  <x-textarea :max="200" placeholder="请输入详细描述"></x-textarea>
	</group>
	<div class="serve">服务费：<div><span>{{number}}</span>.00元</div></div>
	<div class="agree" @click="onCheck"><i class="icon-check-circle" v-if="checked == true"></i><i class="icon-check-circle-o" v-else></i> 同意《家服汇服务协议》</div>
	<div class="btn-panel">
      <x-button type="primary"style="background:#51AAFE;" v-link="'/nursing/pay3'">下一步</x-button>
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
	      number: '',
	      people: '',
	      room: '',
	      room_list: [],
	      hospital: '',
	      hospital_list: [],
	      checked: false,
	      checked1: false,
	      checked2: false
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
	    // 到医院护理
	    onCheckHospital: function () {
	      if (this.checked1) {
	        this.checked1 = false
	        this.checked2 = true
	      } else {
	        this.checked1 = true
	        this.checked2 = false
	      }
	    },
	    // 到家中护理
	    onCheckHome: function () {
	      if (this.checked2) {
	        this.checked2 = false
	        this.checked1 = true
	      } else {
	        this.checked2 = true
	        this.checked1 = false
	      }
	    },
	    // 选择医院
	    onChangeName: function () {
	      console.log(this.hospital)
	    },
	    // 选择科室
	    onChangeRoom: function () {
	      console.log(this.room)
	    }
	  }
}
</script>