<template>
<div class="regist-page">
	<group>	
	  	<x-input :value.sync="tel" title="" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile" v-ref:input></x-input>
	  	<x-input class="yzm" :value.sync="abtain" title="" placeholder="请输入验证码" :show-clear=false v-ref:input><span class="abtain" @click="onObtain">获取验证码</span></x-input>
	    <x-input :value.sync="passworld" :min=6 :max=15 title="" placeholder="密码由6-15位数字、字母组合" v-ref:input></x-input>
      <x-input :value.sync="passworlds" :min=6 :max=15 title="" placeholder="和登录密码一致" :equal-with="passworld" v-ref:input></x-input>
	</group>
	<div class="btn-panel" style="margin:25px 0;">
		<x-button type="primary" v-link="'/login'">立即注册</x-button>
    </div>
    <div class="agree" @click="onCheck"><i class="icon icon-check-circle" v-if="checked == false"></i><i class="icon-check-circle-o" v-else></i> 同意《家服汇服务协议》</div>
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
        abtain: '',
        passworld: '',
        passworlds: '',
        checked: true
      }
    },
    ready () {
      document.title = '手机注册'
    },
    components: {
      Group,
      Selector,
      XInput,
      XButton
    },
    methods: {
      onCheck: function () {
        if (this.checked) {
          this.checked = false
        } else {
          this.checked = true
        }
      },
      // 获取验证码
      onObtain: function () {
        console.log('获取验证码')
      }
    }
  }
</script>