<template>
	<div class="order-flash">
		<div class="flash"><i slot='icon' class="icon-check-circle"></i><span>订单完成!</span></div>
		<div class="btn-panel"><x-button link="/order/list" style="background:#51AAFE;color:#fff;">查看订单</x-button></div>
	</div>
</template>

<script>
  import XButton from 'vux/src/components/x-button'

  export default {
    components: {
      XButton
    }
  }
</script>