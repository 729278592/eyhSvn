<template>
 <div class="hd">
      家得利
  </div>
  <div class="bd">
        <div v-el:msg class="swiper-container mt0 swiper-container-horizontal" id="swiper-container">
          <div class="swiper-wrapper" style="transition-duration: 0ms; ">
              <div class="swiper-slide">
                  <a>
                    <img src="../../../static/images/indexSlider1.jpg" class="w100" alt=""/>
                  </a>
              </div>
              <div class="swiper-slide">
                <a>
                  <img src="../../../static/images/indexSlider2.jpg" class="w100" alt=""/>
                </a>
              </div>
              <!--<div class="swiper-slide">-->
                  <!--<a>-->
                    <!--<img src="../../../static/images/indexSlider3.jpg" class="w100" alt=""/>-->
                  <!--</a>-->
              <!--</div>-->
          </div>
          <div class="swiper-pagination"></div>
          <!--<div class="swiper-button-next"></div>-->
          <!--<div class="swiper-button-prev"></div>-->
      </div>
      <div class="weui_cells weui_cells_access mt10">
        <a class="weui_cell" v-link="'/user/consumer'">
            <div class="weui_cell_bd weui_cell_primary">
                <p>
                    <span class="span_icon spa_tip"></span>
                    <span class="text">
                        公告
                    </span>
                </p>
            </div>
            <div class="weui_cell_ft"></div>
        </a>
      </div>
        <ul class="ulmenu clearfix">
          <li>
              <a v-link="'auth/personLogin/'">
                  <span class="span_index index_icona"></span><br/>
                  <span>个人登录</span>
              </a>
          </li>
          <li>
              <a v-link="'home/index/'">
                  <span class="span_index index_iconb"></span><br/>
                  <span>商城首页</span>
              </a>
          </li>
          <li>
              <a v-link="'user/presentIntegral/'">
                  <span class="span_index index_iconc"></span><br/>
                  <span>积分兑换</span>
              </a>
          </li>
          <li>
              <a v-link="'shops/shopsList/'">
                  <span class="span_index index_icond"></span><br/>
                  <span>附近商家</span>
              </a>
          </li>
      </ul>

      <ul class="ulmenu clearfix mb0">
          <li>
              <a v-link="'user/settledApplication/'">
                  <span class="span_index index_icone"></span><br/>
                  <span>入驻申请</span>
              </a>
          </li>
          <li>
              <a v-link="'auth/login/'">
                  <span class="span_index index_iconf"></span><br/>
                  <span>商家登录</span>
              </a>
          </li>
          <li>
              <a v-link="'user/agentApplication/'">
                  <span class="span_index index_icong"></span><br/>
                  <span>代理申请</span>
              </a>
          </li>
          <li>
              <a v-link="'user/auditStatusQuery/'">
                  <span class="span_index index_iconh"></span><br/>
                  <span>申请进度</span>
              </a>
          </li>
      </ul>
        <div style="font-size:14px;padding:0.5rem;">
          <span>客服电话:028-84279066</span>
          <a v-link="'/user/userHelp'" style="color:#81b57b;text-decoration:underline;float:right">《用户帮助》</a>
        </div>
       </div>
</template>
<style>
  @import '../../../static/plugins/swiper/dist/css/swiper.min.css';
</style>
<script>
  import '../../../static/plugins/swiper/dist/js/swiper.min.js'
  export default {
    ready () {
      document.title = '家得利';
      new Swiper (this.$els.msg, {
         slidesPerView: 1,
         pagination:'.swiper-pagination',
         paginationClickable: true,
         spaceBetween: 0,
         loop:true,
         autoplay: 5000,
         autoplayDisableOnInteraction: false
      })
    }
  }
</script>
