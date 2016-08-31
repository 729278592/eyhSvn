<template>
  <div class="user weui_tab">
    <div class="weui_tab_bd">
      <div class="header">
        <div class="portrait" v-link="'/user/info'"></div>
        <div class="portrait_title">哈哈</div>
        <!-- 判断是否登录  如果未登录显示该项 -->
        <div class="login"><span v-link="'/login'">登录</span>/<span v-link="'/regist'">注册</span></div>
      </div>
      <flexbox class="vux-1px-tb">
        <flexbox-item class="vux-1px-r vux-center" style="height:15px;" v-link="">余额<span style="display:inline-block;color:#999;margin-left:10px;">{{money.toFixed(2)}}</span></flexbox-item>
        <flexbox-item class="vux-center" style="height:55px;" v-link="">积分<span style="display:inline-block;color:#999;margin-left:10px;">{{point}}</span></flexbox-item>
      </flexbox>
      <group>
        <cell title="我的钱包" value="" link="/user/recharge" is-link>
          <i slot="icon" class="wallet icon-wallet"></i>
        </cell>
        <cell title="我的发票" value="" link="/user/receipt">
          <i slot="icon"style="height:22px;background:#FCD377;padding:0 4px 1px 4px;"><img width="15px" src="/static/images/user/fp.png"></i>
        </cell>
      </group>
      <group>        
        <cell title="我的预约" value="" link="/user/appoint">
          <i slot="icon" class="phone icon-phone"></i>
        </cell>        
        <cell title="我的包月券" value="" link="/user/monthly_ticket">
          <i slot="icon" class="" style="background:#C081D2;padding:0 4px 1px 4px;"><img  width="15px" src="/static/images/user/by.png"></i>
        </cell>
        <cell title="我的优惠券" :value="coupon_count+'张'" link="/user/coupon" is-link>
          <i slot="icon" class="icon-money" style="background:#63C8CC;"></i>
        </cell>
      </group>
      <group>
        <cell title="地址管理" value="" link="/user/address" is-link>
          <i slot="icon" class="map icon-map-marker"></i>
        </cell>
        <cell title="修改密码" value="" link="/user/change_password" is-link>
          <i slot="icon" class="lock icon-lock"></i>
        </cell>
      </group>
    </div>
    <tabbar class="menu">
      <tabbar-item link="/">
        <i slot="icon" class="icon-home"></i>
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item link="/order/list">
        <i slot="icon" class="icon-order"></i>
        <span slot="label">订单</span>
      </tabbar-item>
      <tabbar-item link="/user" selected>
        <i slot="icon" class="icon-user_active"></i>
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import Group from 'vux/src/components/group'
  import Cell from 'vux/src/components/cell'
  import Flexbox from 'vux/src/components/flexbox'
  import FlexboxItem from 'vux/src/components/flexbox-item'
  import {
    Tabbar,
    TabbarItem
  } from 'vux/src/components/tabbar'

  export default {
    data () {
      return {
        nickname: '',
        headimgurl: '',
        money: 0.00,
        point: 10,
        coupon_count: 0
      }
    },
    ready () {
      document.title = '个人中心'
    },
    components: {
      Group,
      Cell,
      Flexbox,
      FlexboxItem,
      Tabbar,
      TabbarItem
    }
  }
</script>