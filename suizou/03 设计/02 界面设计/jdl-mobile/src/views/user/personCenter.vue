<template>
 <div class="hd">
         家得利
         <div class="right nav_block">
           <a v-link="'/user/shopCart'" class="shop_cat"></a>
           <a class="dot_block" @click.stop="onShow">
             <i class="fa fa-user"></i>
           </a>
           <ul class="nav_link" :class="{'hide':hide}" v-if="isLogin==false">
               <li>
                   <a v-link="'/'">
                       首页
                   </a>
               </li>
               <li>
                   <a v-link="'/auth/personLogin'">
                       登录
                   </a>
               </li>
           </ul>
            <ul class="nav_link" :class="{'hide':hide}" v-if="isLogin==true">
              <li>
                  <a v-link="'/'">
                    首页
                  </a>
              </li>
               <li>
                   <a v-link="'/user/personCenter'">
                       个人中心
                   </a>
               </li>
               <li>
                   <a @click="loginOut()">
                       退出
                   </a>
               </li>
           </ul>
       </div>
   </div>
    <div class="bd absolute pd48">
      <ul class="entryList mt0">
          <li>
              <div>
                  <div class="couponImg style">
                  <img v-if="dataJson.headimgurl!=null" :src='this.imageUrl+dataJson.headimgurl' class='couponImg1' alt=''>
                  <img v-if="dataJson.headimgurl==null" src='../../../static/images/portrait.png' class='couponImg1' alt=''>
                  </div>
                  <div class="inforList">
                      <p class="clearfix top">
                          <span class="left shopsName">{{dataJson.nickname}}</span>
                      </p>
                      <p class="clearfix bottom">
                          <span class="left" v-if="dataJson.level==0">普通会员</span>
                          <span class="left" v-if="dataJson.level!=0">金钻会员</span>
                          <a v-if="dataJson.level==0" @click="upgrade()" class="btnLeave right">立即升级</a>
                          <a v-if="dataJson.level!=0" disabled="disabled" class="btnLeave right disabled">立即升级</a>
                      </p>
                  </div>
              </div>
          </li>
      </ul>
      <!--<ul class="pay_list clearfix">-->
          <!--<li>-->
              <!--<div class="payInfoy">-->
                  <!--<span class="spanIcon moneyIcon"></span>-->
                  <!--<span>昨天返现</span><br/>-->
                  <!--<span class="color">￥<span class="verdana">{{dataJson.yesterdayFx}}</span></span>-->
              <!--</div>-->
          <!--</li>-->
          <!--<li v-link="'/user/nowScore'">-->
              <!--<div class="payInfoy">-->
                  <!--<span class="spanIcon sordIcon"></span>-->
                  <!--<span>当前积分</span><br/>-->
                  <!--<span class="color"><span class="verdana">{{dataJson.score}}</span></span>-->
              <!--</div>-->
          <!--</li>-->
          <!--<li v-link="'/user/reserveScore'">-->
              <!--<div class="payInfoy">-->
                  <!--<span class="spanIcon zheIcon"></span>-->
                  <!--<span>预留积分</span><br/>-->
                  <!--<span class="color">￥<span class="verdana">{{dataJson.reservedScore}}</span></span>-->
              <!--</div>-->
          <!--</li>-->
      <!--</ul>-->
      <div class="weui_cells weui_cells_access mt10 top0">
          <a class="weui_cell"v-link="'/user/myOrder'">
              <div class="weui_cell_bd weui_cell_primary">
                  <p>
                      <span class="text">
                          我的订单
                      </span>
                  </p>
              </div>
              <div class="weui_cell_ft">查看全部订单</div>
          </a>
          <ul class="orderMenu clearfix bt1">
              <li v-link="{ path: '/user/myOrder', query: {status: 1}}">
                  <a>
                      <span class="order orderIcon1"></span><br/>
                      待付款
                  </a>
              </li>
            <li v-link="{ path: '/user/myOrder', query: {status: 2}}">
                  <a >
                      <span class="order orderIcon2"></span><br/>
                      待发货
                  </a>
              </li>
            <li v-link="{ path: '/user/myOrder', query: {status: 3}}">
                  <a>
                      <span class="order orderIcon6"></span><br/>
                      待确认
                  </a>
              </li>
            <li v-link="{ path: '/user/myOrder', query: {status: 4}}">
                  <a>
                      <span class="order orderIcon9"></span><br/>
                      已完成
                  </a>
              </li>
              <li v-link="'/user/orderRefundSuccessed'">
                  <a>
                      <span class="order orderIcon8"></span><br/>
                      退款订单
                  </a>
              </li>
          </ul>
      </div>
      <ul class="ulmenu clearfix mt0">
          <li>
              <a v-link="'/user/myCollection'">
                  <span class="span_index my_icon1"></span><br/>
                  <span>我的收藏</span>
              </a>
          </li>
          <li>
             <a v-link="'/user/myExtension'">
                  <span class="span_index my_icon2"></span><br/>
                  <span>我的推广</span>
              </a>
          </li>
          <li>
              <a><!-- v-link="'/user/presentIntegral'"-->
                  <span class="span_index index_icon2"></span><br/>
                  <span>积分管理</span>
              </a>
          </li>
          <li>
              <a v-link="'/user/addressAdmin'">
                  <span class="span_index my_icon3"></span><br/>
                  <span>地址管理</span>
              </a>
          </li>
          <li>
              <a><!-- v-link="'/user/detailOutcome'"-->
                  <span class="span_index index_icon3"></span><br/>
                  <span>交易明细</span>
              </a>
          </li>
          <li>
              <a v-link="'/user/personCommentList'">
                  <span class="span_index my_icon4"></span><br/>
                  <span>评价记录</span>
              </a>
          </li>
          <li>
             <a v-link="'/user/personInfor'">
                  <span class="span_index my_icon5"></span><br/>
                  <span>个人信息</span>
              </a>
          </li>
          <li>
              <a v-link="'/user/userHelp'">
                  <span class="span_index my_icon6"></span><br/>
                  <span>用户帮助</span>
              </a>
          </li>
      </ul>
      <div class="personCode">
        <img :src="this.imageUrl+dataJson.qrcode" class='couponImg1' alt=''></br>
        个人推广二维码
      </div>
  </div>
  <div class="foot">
      <ul class="tabMenu clearfix">
          <li>
               <a v-link="'/home/index'">
                  <i class="fa fa-home"></i><br/>
                  <span>商城</span>
              </a>
          </li>
          <li>
              <a v-link="'/category/index'">
                  <i class="fa fa-bars"></i><br/>
                  <span>分类</span>
              </a>
          </li>
          <li>
              <a v-link="'/shops/shopsList'">
                  <i class="fa fa-tag"></i><br/>
                  <span>商铺</span>
              </a>
          </li>
          <li class="last active">
              <a>
                  <i class="fa fa-user"></i><br/>
                  <span>我的</span>
              </a>
          </li>
      </ul>
  </div>
</template>

<style>
  .shop_cat{top:0.3rem;}
</style>

<script>
  import userService from '../../api/userService'
  import mchService from '../../api/mchService'
  import authService from '../../api/authService'
  export default {
     components: {
      },
      data () {
        return{
          hide:true,
          dataJson:[],
          ptLeve:0,
          resUid:"",
          domainName:"",
          imageUrl:"",
          isLogin:false,
          fric:"fric",
          items: [
           {orderStyle:true,con:"全部",num:"0"},
           {orderStyle:true,con:"待付款",num:"1"},
           {orderStyle:true,con:"待发货",num:"2"},
           {orderStyle:true,con:"待确认",num:"3"},
           {orderStyle:true,con:"已完成",num:"4"}
         ]
        }
      },
      ready () {
        document.title = '个人中心';
        userService.personCenter(this);
        this.imageUrl = userService.imgUrlAddFric;
       if (authService.isLogin()) {
          this.isLogin = true
        }else{
          this.isLogin = false
        }
      },
       methods: {
        onShow: function () {
          this.hide = !this.hide
        },
         loginOut:function(){
            userService.loginOut(this)
         },
         upgrade:function(){
           userService.upgradeFun(this)
         }
       }
    }
</script>
