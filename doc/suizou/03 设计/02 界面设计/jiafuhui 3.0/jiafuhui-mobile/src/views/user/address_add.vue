<template>
<div class="editor_address">
	<group>	
	  	<x-input :value.sync="name" title="姓  名" placeholder="请输入姓名" v-ref:input></x-input>
	  	<x-input :value.sync="tel" title="联系电话" placeholder="请输入手机号码" is-type="china-mobile" v-ref:input></x-input>
	  	<selector :value.sync="province" placeholder="省份" title="省份" :options="province_list" @on-change="onProvinceChange"></selector>
	    <selector :value.sync="city" placeholder="市" title="市" :options="city_list" @on-change="onCityChange"></selector>
	    <selector :value.sync="district" placeholder="区/县" title="区/县" :options="district_list" @on-change="onDistrictChange"></selector>
	    <!-- <selector :value.sync="street" placeholder="乡镇/街道" title="乡镇/街道" :options="street_list" @on-change="onStreetChange"></selector> -->
	    <x-input :value.sync="address" title="详细地址" placeholder="详细地址" v-ref:input></x-input>
	</group>
	  <div class="btn-panel">
      <x-button type="primary" @click="onPost">确定</x-button>
    </div>
</div>
</template>
<script>
  import Group from 'vux/src/components/group'
  import Selector from 'vux/src/components/selector'
  import XInput from 'vux/src/components/x-input'
  import XButton from 'vux/src/components/x-button'

  export default {
    data () {
      return {
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
        address: ''
      }
    },
    ready () {
      document.title = '添加地址'
    },
    components: {
      Group,
      Selector,
      XInput,
      XButton
    },
    methods: {
      onPost: function () {
        console.log(this.name)
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
      }
    }
  }
</script>