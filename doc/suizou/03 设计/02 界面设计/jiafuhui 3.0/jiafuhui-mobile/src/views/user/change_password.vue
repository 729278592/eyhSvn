<template>
  <div class="change-password">
    <group class="group">
      <x-input :value.sync="tel" title="" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile" v-ref:input></x-input>
      <x-input class="yzm" :value.sync="abtain" title="" placeholder="请输入验证码" :show-clear=false v-ref:input><span class="abtain" @click="onObtain">获取验证码</span></x-input>
      <x-input :value.sync="newpassword" title="" placeholder="请输入新密码" :min="6" :show-clear=true></x-input>
      <x-input :value.sync="repassword" title="" placeholder="确认新密码" :equal-with="newpassword" v-ref:input></x-input>
    </group>
    <div class="btn-panel">
      <x-button type="primary" v-link="'/login'">完成</x-button>
    </div>
  </div>
</template>

<script>
  import Group from 'vux/src/components/group'
  import Cell from 'vux/src/components/cell'
  import XInput from 'vux/src/components/x-input'
  import XButton from 'vux/src/components/x-button'

  export default {
    data () {
      return {
        tel: '',
        abtain: '',
        old_password: '',
        newpassword: '',
        repassword: ''
      }
    },
    ready () {
      document.title = '修改密码'
    },
    components: {
      Group,
      Cell,
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