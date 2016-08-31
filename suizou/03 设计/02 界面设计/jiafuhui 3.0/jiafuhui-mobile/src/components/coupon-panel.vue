<template>
	<cell title="优惠券" value="2张优惠券" is-link @click="onShowPopup" v-if="select_coupon == null"></cell>
  <cell title="优惠券" :value="select_coupon.money" is-link @click="onShowPopup" v-else></cell>
  <popup :show.sync="show_popup" >
    <div class="select-address-panel coupon-panel" v-if="is_add == true">
      <group title="选择优惠券">
        <div class="scroll" v-if="list.length > 0">
          <div class="address-list coupon-list">
            <div class="item" v-for="item in list" @click="onChooseAddress(item)">
              <div class="icon">
                <i class="icon-check-circle" v-if="select_coupon == item"></i><i class="icon-check-circle-o" v-else></i>
              </div>
              <div class="content">
                <div class="name">{{item.money}}&nbsp;&nbsp;&nbsp;&nbsp;{{{item.time}}}</div>
              </div>
            </div>
          </div>
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
        is_add: false
      }
    },
    props: {
      list: Array,
      select_coupon: Object,
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
        this.is_add = true
      },
      // 选择优惠券
      onChooseAddress: function (item) {
        this.select_coupon = item
        this.show_popup = false
      }
    }
  }
</script>