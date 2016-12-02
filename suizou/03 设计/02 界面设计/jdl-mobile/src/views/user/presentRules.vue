<template>
  <Bar></Bar>
  <div class="bd absolute pt">
      <div class="user_agreement">
          <p class="title">兑换规则</p>
          <p>
              方法/步骤
          </p>
          <p>
            1.办理兑换需绑定兑换银行卡（不支持信用卡; <br/>
            2.兑换银行卡开户人须与账户绑定的兑换开户人一致; <br/>
            3.每个会员账户仅支持绑定一张兑换银行卡，一张银行卡仅支持绑定一个会员账户;<br/>
            4.每次兑换申请至少200元，可申请200元的倍数兑换，每周兑换申请最高额度为3000元;<br/>
            5.兑换申请提交后系统将在1个工作日内受理，兑换成功后3-5个工作日到账;<br/>
            6.申请兑换后，钱包中对应的款项将暂时冻结，直至兑换处理完成;<br/>
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
        document.title = '兑换规则'
      },
      methods: {
        onShow: function () {
          this.hide = !this.hide
        }
      }
    }
</script>
