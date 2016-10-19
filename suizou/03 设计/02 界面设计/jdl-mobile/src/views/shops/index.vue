<template>
     <div class="hd">
         商铺主页
         <div class="right nav_block">
           <a class="dot_block" @click.stop="onShow">
             <i class="fa fa-home"></i>
           </a>
           <ul class="nav_link" :class="{'hide':hide}">
               <li>
                   <a @click="loginOut()">
                       退出
                   </a>
               </li>
           </ul>
       </div>
     </div>
     <div class="bd absolute pt">
      <ul class="entryList mt0">
        <li>
            <div>
                <div class="couponImg style">
                    <img v-if="lists.logo==null" src="../../../static/images/shoppingC1.jpg" class="couponImg1" alt="">
                    <img v-if="lists.logo!=null" :src="this.imageUrl+lists.logo" class="couponImg1" />
                </div>
                <div class="inforList">
                    <p class="clearfix">
                        <span class="left shopsName">{{lists.mchName}}</span>
                        <span class="right">联盟商户</span>
                    </p>
                    <div class="clearfix" style="display: block">
                      <ul class="starList clearfix">
                        <li v-for="activeItem in item" :class="{'active':activeItem.starActive}">
                          <i class="fa fa-star-o"></i>
                        </li>
                      </ul>
                      <a class=" right" v-link="'/shops/modifyPassword'"style="color: #1cbc9d;text-decoration: underline;">修改密码</a>
                    </div>
                    <p class="clearfix">
                        <span class="left">销量{{lists.salesNum}}</span>
                        <span class="right">共{{lists.goodsNum}}件商品</span>
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
                  <span class="color">￥<span class="verdana">{{lists.yesterdayFx}}</span></span>
              </div>
          </li>
          <li v-link="'/shops/nowScore'">
              <div class="payInfoy">
                  <span class="spanIcon sordIcon"></span>
                  <span>当前积分</span><br/>
                  <span class="color">￥<span class="verdana">{{lists.score}}</span></span>
              </div>
          </li>
          <li v-link="'/shops/reserveScore'">
              <div class="payInfoy">
                  <span class="spanIcon zheIcon"></span>
                  <span>预留积分</span><br/>
                  <span class="color"><span class="verdana">{{lists.reservedScore}}</span></span>
              </div>
          </li>
      </ul>
      <div class="weui_cells weui_cells_access mt10 top0">
          <a class="weui_cell"v-link="'/shops/shopsOrder'">
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
                      待确认
                  </a>
              </li>
              <li>
                  <a>
                      <span class="order orderIcon6"></span><br/>
                      已收货
                  </a>
              </li>
              <li>
                  <a>
                      <span class="order orderIcon7"></span><br/>
                      已完成
                  </a>
              </li>
              <li>
                  <a>
                      <span class="order orderIcon8"></span><br/>
                      已退款
                  </a>
              </li>
          </ul>
      </div>
      <ul class="ulmenu clearfix mt0">
          <li>
              <a v-link="'/shops/presentIntegral'">
                  <span class="span_index shops_icon1"></span><br/>
                  <span>积分提现</span>
              </a>
          </li>
          <li>
             <a v-link="'/shops/detailIncome'">
                  <span class="span_index shops_icon2"></span><br/>
                  <span>收入明细</span>
              </a>
          </li>
          <li>
              <a v-link="'/shops/integralComplement'">
                  <span class="span_index shops_icon3"></span><br/>
                  <span>积分补足</span>
              </a>
          </li>
         <li>
             <a v-link="'/shops/shopsCommentList'">
                 <span class="span_index shops_icon4"></span><br/>
                 <span>用户评价</span>
             </a>
         </li>
      </ul>
  </div>

</template>

<script>
   import mchService from '../../api/mchService'
   import authService  from '../../api/mchAuthService'
    export default {

      data () {
        return{
         hide:true,
          lists:[],
          resUid:"",
          item:[
            {starActive:false},
            {starActive:false},
            {starActive:false},
            {starActive:false},
            {starActive:false}
          ]
        }
      },
      ready () {
        document.title = '商铺主页'

        mchService.personCenter(this)
        this.imageUrl = mchService.imgUrlFric

      },
       methods: {
           onShow: function () {
                 this.hide = !this.hide
               },
            returnPage:function(){
                 window.history.go(-1)
               },
          loginOut:function(){
            this.$http.get(website.domainName+website.linkObj.mchLoginOut).then(function(response){
              var res = response.data
               console.log(JSON.stringify(res.datas));
              if(res.status == "ok") {
                authService.logout()
                 this.$router.go("/")
               } else {
                  alert(res.message);
               }
            }, function(response){
              // 响应错误回调
            })
          }
       }
    }
</script>
