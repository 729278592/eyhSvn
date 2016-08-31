<template>
	<div class="monthly-ticket">
		<div class="ticket-list" v-for="item in list">
			<div class="number">{{item.number}}</div>
			<div class="time">{{item.time}}</div>
      <div class="icon" @click="onChoose(item)">
			<i class="icon-check-circle blue" v-if="choose == item"></i><i class="icon-check-circle-o" v-else></i>
      </div>
		</div>
		<div class="ticket-box" v-if="ticket == true">
			<div class="ticket-bg">
				<div class="title">请选择使用时间</div>
				<div class="time">
					<i slot="icon" class="icon icon-calendar"></i>
          <datetime title="" format="YYYY-MM-DD" value="2016-07-10" format="HH:mm" confirm-text="确认" cancel-text="取消"><i slot="icon"></i></datetime>
				</div>
				<div class="time">
					<i slot="icon" class="icon icon-clock-o"></i>
					<datetime title="" value="00:00" format="HH:mm" confirm-text="确认" cancel-text="取消"><i slot="icon"></i></datetime>
				</div>
				<div class="ticket-btn"><div class="weui_btn_dialog default vux-1px-r" @click="onChooseDefault()">取消</div><div class="weui_btn_dialog primary" style="color:#51aafd;" @click="onChoosePrimary()">确认</div></div>
			</div>
		</div>
	</div>
</template>

<script>
  import Calendar from 'vux/src/components/calendar'
  import Datetime from 'vux/src/components/datetime'

  export default {
    data () {
      return {
        checked: true,
        ticket: false,
        list: [],
        choose: null
      }
    },
    ready () {
      document.title = '我的包月券'
      this.$progress.start()
      this.$http.get('/static/data/monthly_ticket.json').then((response) => {
        this.$progress.finish()
        this.list = response.data
      }, (response) => {
        this.$progress.failed()
      })
    },
    components: {
      Calendar,
      Datetime
    },
    methods: {
      onChoose: function (item) {
        if (this.ticket) {
          this.ticket = false
        } else {
          this.ticket = true
        }
        this.choose = item
      },
      onChooseDefault: function () {
        this.ticket = false
        this.choose = null
      },
      onChoosePrimary: function () {
        this.ticket = false
        this.choose = this.choose
        this.$router.go('/order/list')
      }
    }
  }
</script>