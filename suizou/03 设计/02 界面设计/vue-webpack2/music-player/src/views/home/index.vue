<template>
     <div class="hd">
         <a class="return" @click="returnPage()"></a>
         <form action="#" class="formIndex" :class="{'active':active}">
             <input type="text" class="search_input" placeholder="搜索商品" @focus="getFocus()" @blur="getBlur()" id="searchInput"/>
             <i class="fa fa-search"></i>
             <a class="weui_icon_clear" :class="{'hide':clearHide}"  id="search_clear" @click="clearInput()"></a>
         </form>
         <div class="right nav_block">
             <a v-link="'/user/shopCart'" class="shop_cat"></a>
             <a v-link="'/user/myMessage'" class="shop_msg"></a>
         </div>
     </div>
     <div class="bd absolute pd48">
      <div class="swiper-container mt0 swiper-container-horizontal" id="swiper-container">
        <div class="swiper-wrapper" style="transition-duration: 0ms; ">
            <div class="swiper-slide">
                <a>
                  <img src="../../../static/images/indexSlider2.jpg" class="w100" alt=""/>
                </a>
            </div>
            <div class="swiper-slide">
              <a>
                <img src="../../../static/images/indexSlider2.jpg" class="w100" alt=""/>
              </a>
            </div>
            <div class="swiper-slide">
                <a>
                  <img src="../../../static/images/indexSlider2.jpg" class="w100" alt=""/>
                </a>
            </div>
        </div>
        <div class="swiper-pagination"></div>
        <!--<div class="swiper-button-next"></div>-->
        <!--<div class="swiper-button-prev"></div>-->
    </div>
      <ul class="ulmenu clearfix">
        <li>
            <a v-link="'/user/myOrder'">
                <span class="span_index index_icon1"></span><br/>
                <span>我的订单</span>
            </a>
        </li>
        <li>
            <a v-link="'/user/presentIntegral'">
                <span class="span_index index_icon2"></span><br/>
                <span>积分提现</span>
            </a>
        </li>
        <li>
            <a v-link="'/user/detailOutcome'">
                <span class="span_index index_icon3"></span><br/>
                <span>返现明细</span>
            </a>
        </li>
        <li>
            <a v-link="'/user/myExtension'">
                <span class="span_index index_icon4"></span><br/>
                <span>推广收益</span>
            </a>
        </li>
    </ul>

       <ul class="ulLink clearfix">

         <li class="first">
             <a>
                 <img src="../../../static/images/alink1.png" alt=""/>
             </a>
         </li>
         <li class="second">
             <a>
                 <img src="../../../static/images/alink2.png" alt=""/>
             </a>
         </li>
         <li class="last">
             <a>
                 <img src="../../../static/images/alink3.png" alt=""/>
             </a>
         </li>
     </ul>
        <ul class="shop_menu clearfix">
         <li v-for="item in items" :class="{'active':item.active}" @click="onSelect($index)">
            <a>
               {{item.con}}
            </a>
         </li>
      </ul>
      <div class="otherCon style">
        <ul class="shoppingList style clearfix pb0">
            <li v-for="shop in list" :class="{'mr0':shop.mr0}">
                <a v-link="'/category/shopsShoppingInfor'" class="shop_div">
                    <div class="shop_list_bg shop_list_bg{{shop.class}}"></div>
                    <div class="shop_infor">
                        <p class="tile">{{shop.title}}</p>
                        <!--<p class="smallTile">{{shop.smallTile}}</p>-->
                        <p class="clearfix">
                        <span class="left">
                            <span class="oldMoney">￥{{shop.oldMoney}}</span>
                            ￥{{shop.newMoney}}
                        </span>
                        </p>
                    </div>
                </a>
            </li>
        </ul>
       </div>
       <div class="foot">
         <ul class="tabMenu clearfix">
             <li class="active">
                 <a v-link="'/home/index'">
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
                 <a v-link="'/shops/shopsList'">
                     <i class="fa fa-tag"></i><br/>
                     <span>商铺</span>
                 </a>
             </li>
             <li class="last">
                 <a v-link="'/user/personCenter'">
                     <i class="fa fa-user"></i><br/>
                     <span>我的</span>
                 </a>
             </li>
         </ul>
     </div>
</template>

<style>
  @import '../../../static/plugins/swiper/dist/css/swiper.min.css'
</style>

<script>
  import '../../../static/plugins/swiper/dist/js/swiper.min.js'
  export default {
    data () {
      return {
        list: [],
        clearHide:true,
        active:false,
        swiperList:[],
        items: [
            	{con:"服装/美妆",active: true,name:"clothes"},
              {con:"数码/科技",active: false,name:"beautys"},
              {con:"热门房产",active: false,name:"house"},
              {con:"零食/饮料",active: false,name:"food"}
            ]
      }
    },
    ready () {
      document.title = '首页'
      //this.$Progress.start()
      this.$http.get('../../static/data/index_list_clothes.json').then(function(response){
       // this.$progress.finish()
        this.list = response.data
     }, function(response){
        //this.$progress.fail()

      // 响应错误回调
     })
      new Swiper ('#swiper-container', {
         slidesPerView: 1,
         pagination:'.swiper-pagination',
         paginationClickable: true,
         spaceBetween: 0,
         loop:true,
         autoplay: 5000,
         autoplayDisableOnInteraction: false
      })
    },
    methods: {
      onSelect:function(index){
        this.items.forEach(function(item, i) {
          if(i === index)
            item.active = true;
          else
            item.active = false;
        })
        this.$http.get('../../static/data/index_list_'+this.items[index].name+'.json').then(function(response){
          this.list = response.data
        }, function(response){
          // 响应错误回调
        })
      },
      returnPage:function(){
        window.history.go(-1)
      },
      getFocus:function(){
        this.clearHide = false
        this.active = true
      },
      getBlur:function(){
        this.active = false
      },
      clearInput:function(){
        var searchInput = document.getElementById("searchInput")
        searchInput.value = " "
        this.clearHide = true
        this.active = false
      }
    }
  }
</script>

