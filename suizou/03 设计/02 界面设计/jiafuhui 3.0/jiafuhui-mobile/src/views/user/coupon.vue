<template>
	<div class="coupon">
		<div class="coupon_list {{item.class}}" v-for="item in list">
			<div class="left">
				<span class="label">{{item.label}}</span>
				<p>{{item.money}}</p>
				<small>{{item.use}}</small>
			</div>
			<div class="right">
				<p>{{item.type}}</p>
				<small>{{item.time}}</small>
			</div>
		</div>
	</div>
</template>

<script>
  export default {
    data () {
      return {
        list: []
      }
    },
    ready () {
      document.title = '我的优惠券'
      this.$progress.start()
      this.$http.get('/static/data/coupon.json').then((response) => {
        this.$progress.finish()
        this.list = response.data
      }, (response) => {
        this.$progress.failed()
      })
    },
    methods: {
    }
  }
</script>