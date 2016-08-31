<template>
<div class="destine shine-shoes">
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
	<group class="area">
		<div style="padding:10px 15px;font-size:1.4rem;color:#bbb;">上门擦鞋</div>
		<cell title="类别" value="皮鞋"><div style="display:inline-block;margin-left:5px;"><span style="color:#FF5000;font-size:1.8rem;">3.00</span>元/双<small style="color:#bbb;text-decoration:line-through;">5.00元</small></div></cell>
		<x-number placeholder="不少于5双" title="数量" :value=5 :min=5 @on-change="changeNum"></x-number>
	</group>
	<div class="change-accessory">
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
		<cell title="类别" value="皮鞋"><div style="display:inline-block;margin-left:5px;"><span style="color:#FF5000;font-size:1.8rem;">3.00</span>元/双<small style="color:#bbb;text-decoration:line-through;">5.00元</small></div></cell>
		<x-number title="数量" :value=0 :min=1 @on-change="changeNum"></x-number>
	</group>
	<div class="change-accessory ">
		<div class="title"><i class="icon-heart-circle-o"></i>配件推荐</div>
		<flexbox>
			<flexbox-item class="vux-1px-r"><div class="flex-demo">
				<div class="img"></div>
				<div>
				<i slot='icon' class='icon icon-check-circle'></i><i slot='icon' class='icon icon-check-circle-o'></i>
				<span>数量1件</span>
				</div>
				<div>10.00元/件</div>
			</div></flexbox-item>
			<flexbox-item>
				<div class="flex-demo">
			    	<i slot="icon" class="icon icon-clock-o"></i>
					<datetime title="" value="00:00" format="HH:mm" confirm-text="确认" cancel-text="取消"><i slot="icon"></i></datetime>
				</div>
			</flexbox-item>
		</flexbox>
	</div>
	<group title="更多需求：" class="textarea">
	  <x-textarea :max="200" placeholder="请输入详细描述"></x-textarea>
	</group>
	<div class="serve">服务费：<div><span>{{area * 6}}</span>.00元</div></div>
	<div class="agree" @click="onCheck"><i class="icon-check-circle" v-if="checked == false"></i><i class="icon-check-circle-o" v-else></i> 同意《家服汇服务协议》</div>
	<div class="btn-panel">
      <x-button type="primary"style="background:#51AAFE;" v-link="'/shoes/pay'">下一步</x-button>
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
	import XNumber from 'vux/src/components/x-number'

	export default {
	  data () {
	    return {
	      area: '',
	      checked: true,
	      checked1: true,
	      checked2: true
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
	    XNumber
	  },
	  methods: {
	    onCheck: function () {
	      if (this.checked) {
	        this.checked = false
	      } else {
	        this.checked = true
	      }
	    },
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