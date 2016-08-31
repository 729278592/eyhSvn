<template>
  <group class="group-top">
	  	<cell title="点击设置或添加地址" is-link @click="onShowPopup" v-if="select_address == null"><i slot="icon" class="map icon-map-marker-o"></i></cell>
	  	<cell class="address-panel" @click="onShowPopup" :title="select_address.name + '&nbsp;&nbsp;&nbsp;&nbsp;' + select_address.tel" :inline-desc="select_address.address"  is-link v-else><i slot="icon" class="map icon-map-marker-o"></i></cell>
	</group>
  <popup :show.sync="show_popup" >
    <div class="add-address-panel" v-if="is_add == true">
      <group title="添加新地址">
        <x-input :value.sync="new_address.name" title="姓  名" placeholder="请输入姓名" v-ref:input></x-input>
	  		<x-input :value.sync="new_address.tel" title="联系电话" placeholder="请输入手机号码" is-type="china-mobile" v-ref:input></x-input>
		  	<selector :value.sync="new_address.province" placeholder="省份" title="省份" :options="province_list" @on-change="onProvinceChange"></selector>
		    <selector :value.sync="new_address.city" placeholder="市" title="市" :options="city_list" @on-change="onCityChange"></selector>
		    <selector :value.sync="new_address.district" placeholder="区/县" title="区/县" :options="district_list" @on-change="onDistrictChange"></selector>
		    <!-- <selector :value.sync="new_address.street" placeholder="乡镇/街道" title="乡镇/街道" :options="street_list" @on-change="onStreetChange"></selector> -->
		    <x-input :value.sync="new_address.address" title="详细地址" placeholder="详细地址" v-ref:input></x-input>
		    <div class="btn-panel">
		      	<x-button type="primary" @click="onPostNewAddress">确定</x-button>
		    </div>
      </group>
    </div>
    <div class="select-address-panel" v-else>
      <group title="选择地址">
        <div class="scroll" v-if="list.length > 0">
          <div class="address-list">
            <div class="item" v-for="item in list" @click="onChooseAddress(item)">
              <div class="icon">
                <div class="isdefault">
                    <i class="icon-check-circle" v-if="select_address == item"></i><i class="icon-check-circle-o" v-else></i>
                </div>
              </div>
              <div class="content">
                <div class="name">{{item.name}}&nbsp;&nbsp;&nbsp;&nbsp;{{item.tel}}</div>
                <div class="address">{{item.address}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="btn-panel">
          <x-button type="primary" @click="is_add=true">添加新地址</x-button>
        </div>
      </group>
    </div>
  </popup>
</template>

<script>
  import Popup from 'vux/src/components/popup'
  import Group from 'vux/src/components/group'
	import Cell from 'vux/src/components/cell'
  import XButton from 'vux/src/components/x-button'
	import XInput from 'vux/src/components/x-input'
  import Selector from 'vux/src/components/selector'
  import Scroller from 'vux/src/components/scroller'

  export default{
    data () {
      return {
        show_popup: false,
        is_add: false,
        new_address: {
          name: '',
          tel: '',
          province: '',
          city: '',
          district: '',
          street: '',
          address: '',  // 详细地址
          isdefault: false
        },
        province_list: [],
        city_list: [],
        district_list: [],
        street_list: []
      }
    },
    props: {
      list: Array,
      select_address: Object
    },
    components: {
      Popup,
      Group,
      Cell,
      XButton,
      XInput,
      Selector,
      Scroller
    },
    methods: {
      onShowPopup: function () {
        this.show_popup = true
        this.is_add = false
      },
      // 选择地址
      onChooseAddress: function (item) {
        this.select_address = item
        this.show_popup = false
      },
      // 省改变
      onProvinceChange: function () {
        console.log(this.province)
      },
      // 市改变
      onCityChange: function () {
        console.log(this.city)
      },
      // 区改变
      onDistrictChange: function () {
        console.log(this.district)
      },
      // 街道改变
      onStreetChange: function () {
        console.log(this.street)
      },
      // 添加新地址
      onPostNewAddress: function () {
        // ajax 提交后台
        this.list.unshift({
          id: 1,
          name: this.new_address.name,
          tel: this.new_address.tel,
          address: this.new_address.province + this.new_address.city + this.new_address.district + this.new_address.street + this.new_address.address,
          isdefault: false
        })
        this.new_address = {
          name: '',
          tel: '',
          province: '',
          city: '',
          district: '',
          street: '',
          address: '',
          isdefault: false
        }
        this.is_add = false
      }
    }
  }
</script>