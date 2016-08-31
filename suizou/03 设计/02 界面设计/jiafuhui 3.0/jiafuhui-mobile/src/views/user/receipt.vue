<template>
	<div class="receipt">
		<div class="receipt-list" v-for="item in list">
			<div class="title">{{item.title}}<span>{{item.time}}</span></div>
			<div class="pay">
				{{{item.pay}}}
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
      document.title = '我的发票'
      this.$progress.start()
      this.$http.get('/static/data/receipt.json').then((response) => {
        this.$progress.finish()
        this.list = response.data
      }, (response) => {
        this.$progress.failed()
      })
    }
  }
</script>