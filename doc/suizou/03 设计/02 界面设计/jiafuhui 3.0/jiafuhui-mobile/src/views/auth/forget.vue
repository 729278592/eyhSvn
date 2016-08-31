<template>
<div class="regist-page">
	<group>	
	  	<x-input :value.sync="tel" title="" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile" v-ref:input></x-input>
      <x-input :value.sync="newpassword" title="" placeholder="请输入新密码" :min="6" :show-clear=true></x-input>
      <x-input :value.sync="repassword" title="" placeholder="确认密码" v-ref:input></x-input>
	  	<x-input class="yzm" :value.sync="proving" title="" placeholder="请输入验证码" v-ref:input><span class="abtain" @click="onObtain">获取验证码</span></x-input>
	</group>
	<div class="btn-panel" style="margin:25px 0;">
		<x-button type="primary" v-link="'/login'">重置密码</x-button>
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
        tel: '',
        proving: '',
        newpassword: '',
        repassword: ''
      }
    },
    ready () {
      document.title = '找回密码'
    },
    components: {
      Group,
      Selector,
      XInput,
      XButton
    },
    methods: {
      // 获取验证码
      onObtain: function () {
        console.log('获取验证码')
      }
    }
  }
</script>