<template>
<div class="login-page">
	<div class="header">
		<div class="portrait" v-link="'/user/info'"><img width="80%;" src="/static/images/login/logo.png"></div>
		<div class="head-title"><img src="/static/images/login/login_t.png"></div>
	</div>
	<div>
		<group>			
			<div><x-input :value.sync="name" title="" slot placeholder="手机号/用户名" keyboard v-ref:input><i class="icon icon-user-o"></i></x-input></div>
			<div><x-input :value.sync="passworld" title="" slot placeholder="登录密码" v-ref:input><i class="icon icon-lock-o"></i></x-input></div>
	        <div><x-button type="primary"style="background:#fff;color:#51AAFD;margin-top:30px;" v-link="'/'">登录</x-button></div>
	    </group>
	</div>
	<div class="forget"><span v-link="'/forget'">忘记密码?</span></div>
	<div class="regist"><span v-link="'/regist'">注册<i class="icon-arrow"></i></span></div>
</div>
</template>

<script>
	import Group from 'vux/src/components/group'
	import XInput from 'vux/src/components/x-input'
	import XButton from 'vux/src/components/x-button'

	export default {
	  data () {
	    return {
	      name: '',
	      passworld: ''
	    }
	  },
	  components: {
	    Group,
	    XInput,
	    XButton
	  }
	}
</script>