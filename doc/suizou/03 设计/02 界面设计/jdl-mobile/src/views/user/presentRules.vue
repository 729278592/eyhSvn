<template>
  <Bar></Bar>
  <div class="bd absolute pt">
      <div class="user_agreement">
          <p class="title">提现规则</p>
          <p>
              方法/步骤
          </p>
          <p>
            1.办理提现需绑定提现银行卡（不支持信用卡; <br/>
            2.提现银行卡开户人须与账户绑定的提现开户人一致; <br/>
            3.每个会员账户仅支持绑定一张提现银行卡，一张银行卡仅支持绑定一个会员账户;<br/>
            4.每次提现申请至少200元，可申请200元的倍数提现，每周提现申请最高额度为3000元;<br/>
            5.提现申请提交后系统将在1个工作日内受理，提现成功后3-5个工作日到账;<br/>
            6.申请提现后，钱包中对应的款项将暂时冻结，直至提现处理完成;<br/>
          </p>
      </div>
  </div>
</template>
<script>
  import Bar from '../components/headBar.vue'
  export default {
     components: {
          Bar
      },
      data () {
        return {
          hide:true,
          dataJson:[]
        }
      },
      ready () {
        document.title = '提现规则'
      },
      methods: {
        onShow: function () {
          this.hide = !this.hide
        }
      }
    }
</script>
