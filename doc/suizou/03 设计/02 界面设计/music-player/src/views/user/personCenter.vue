<template>
  <div class="hd">
      <a>
          <a class="return" @click="returnPage()"></a>
      </a>
      消费全反
      <div class="right nav_block">
          <a v-link="'/user/shopCart'" class="shop_cat"></a>
          <a class="dot_block" @click.stop="onShow"></a>
          <ul class="nav_link" :class="{'hide':hide}">
              <li>
                  <a v-link="'/user/myMessage'">
                      消息
                  </a>
              </li>
              <li>
                  <a v-link="'/home'">
                      首页
                  </a>
              </li>
          </ul>
      </div>
  </div>
  <div class="bd absolute pd48">
    <div class="bd absolute pd48" v-for="lists in dataJson">
      <ul class="entryList mt0">
          <li>
              <div>
                  <div class="couponImg style">
                  <img :src='lists.shopImg' class='couponImg1' alt=''>
                  </div>
                  <div class="inforList">
                      <p class="clearfix top">
                          <span class="left shopsName">{{lists.name}}</span>
                      </p>
                      <p class="clearfix bottom">
                          <span class="left">{{lists.leave}}</span>
                          <a v-link="'/user/memberUpgrade'" class="btnLeave right">立即升级</a>
                      </p>
                  </div>
              </div>
          </li>
      </ul>
      <ul class="pay_list clearfix">
          <li>
              <div class="payInfoy">
                  <span class="spanIcon moneyIcon"></span>
                  <span>昨天返现</span><br/>
                  <span class="color">￥<span class="verdana">{{lists.yestodayMoney}}</span></span>
              </div>
          </li>
          <li>
              <div class="payInfoy">
                  <span class="spanIcon sordIcon"></span>
                  <span>当前积分</span><br/>
                  <span class="color">￥<span class="verdana">{{lists.nowMoney}}</span></span>
              </div>
          </li>
          <li>
              <div class="payInfoy">
                  <span class="spanIcon zheIcon"></span>
                  <span>累计返现</span><br/>
                  <span class="color"><span class="verdana">{{lists.allMoney}}</span></span>
              </div>
          </li>
      </ul>
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
              <li>
                  <a>
                      <span class="order orderIcon1"></span><br/>
                      待付款
                  </a>
              </li>
              <li>
                  <a>
                      <span class="order orderIcon2"></span><br/>
                      待发货
                  </a>
              </li>
              <li>
                  <a>
                      <span class="order orderIcon6"></span><br/>
                      待收货
                  </a>
              </li>
              <li>
                  <a>
                      <span class="order orderIcon9"></span><br/>
                      待评价
                  </a>
              </li>
              <li>
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
              <a v-link="'/user/presentIntegral'">
                  <span class="span_index index_icon2"></span><br/>
                  <span>积分提现</span>
              </a>
          </li>
          <li>
              <a v-link="'/user/addressAdmin'">
                  <span class="span_index my_icon3"></span><br/>
                  <span>地址管理</span>
              </a>
          </li>
          <li>
              <a v-link="'/user/detailOutcome'">
                  <span class="span_index index_icon3"></span><br/>
                  <span>返现明细</span>
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
              <a v-link="'/user/myMessage'">
                  <span class="span_index my_icon6"></span><br/>
                  <span>消息通知</span>
              </a>
          </li>
      </ul>
      <div class="personCode">
          <img src="../../../static/images/myCode.jpg" alt=""/><br/>
          个人推广二维码
      </div>
  </div>
  <div class="foot">
      <ul class="tabMenu clearfix">
          <li>
              <a v-link="'/home'">
                  <i class="fa fa-home"></i><br/>
                  <span>首页</span>
              </a>
          </li>
          <li>
              <a v-link="'/category/index'">
                  <i class="fa fa-bars"></i><br/>
                  <span>分类</span>
              </a>
          </li>
          <li>
              <a v-link="'/shops/index'">
                  <i class="fa fa-tag"></i><br/>
                  <span>商铺</span>
              </a>
          </li>
          <li class="last active">
              <a v-link="'/user/personCenter'">
                  <i class="fa fa-user"></i><br/>
                  <span>我的</span>
              </a>
          </li>
      </ul>
  </div>

</template>
<script>
  export default {
      data () {
        return{
          hide:true,
          dataJson:[]
        }
      },
      ready () {
        document.title = '个人中心'
        this.$http.get('../../static/data/personCenter.json').then(function(response){
             this.dataJson = response.data
         }, function(response){
          // 响应错误回调
         })
      },
       methods: {
        onShow: function () {
          this.hide = !this.hide
        },
        returnPage:function(){
          window.history.go(-1)
        }
       }
    }
</script>
