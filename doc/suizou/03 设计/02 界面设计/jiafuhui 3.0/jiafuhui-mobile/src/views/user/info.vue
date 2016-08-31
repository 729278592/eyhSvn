<template>
<div class="user-info">
	<group>
	    <cell title="头像" value="" ><span class="head"></span></cell>
	    <cell title="昵称" value="兔兔"></cell>
	    <cell title="性别" value="女"></cell>
	    <cell title="电话" value="13590909000"></cell>
	    <cell title="所在地区" value="四川省成都市玉林区301"></cell>
    </group>
    <div class="btn-panel">
        <x-button type="primary">退出登录</x-button>
    </div>
</div>
</template>

<script>
import Group from 'vux/src/components/group'
import Cell from 'vux/src/components/cell'
import XButton from 'vux/src/components/x-button'

export default {
  data () {
    return {
      nickname: '',
      headimgurl: '',
      sex: '',
      tel: '',
      address: ''
    }
  },
  ready () {
    document.title = '个人信息'
  },
  components: {
    Group,
    Cell,
    XButton
  }
}
</script>