<template>
     <div class="hd">
        <!--
           <a class="return" @click="returnPage()">
                       <i class="fa fa-angle-left"></i>
                   </a>
        -->
         <form action="#" class="formIndex" :class="{'active':active}">
             <input type="text" class="search_input" placeholder="搜索商品" @focus="getFocus()" v-model="searchCon" @blur="getBlur()" id="searchInput"/>
             <i class="fa fa-search" @click="searchBtn()"></i>
             <a class="weui_icon_clear" :class="{'hide':clearHide}"  id="search_clear" @click="clearInput()"></a>
         </form>
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
      <div class="swiper-container mt0 swiper-container-horizontal" id="swiper-container">
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
            <div class="swiper-slide">
                <a>
                  <img src="../../../static/images/indexSlider3.jpg" class="w100" alt=""/>
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
            <a v-link="'/user/presentIntegral><!-- '"-->
                <span class="span_index index_icon2"></span><br/>
                <span>积分兑换</span>
            </a>
        </li>
        <li>
            <a v-link="'/user/detailOutcome><!-- '"-->
                <span class="span_index index_icon3"></span><br/>
                <span>交易明细</span>
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
      <ul class="shop_menu clearfix" id="shop_menu">
           <li v-for="itemList in list" @click="onSelect($index,$event)">
              <a>
                {{itemList.topCategoryName}}
              </a>
           </li>
        </ul>
        <div class="otherCon style">
          <ul class="shoppingList style clearfix pb0">
              <li v-for="shop in list[num].goodses" :class="{'mr0':$index%2==1}">
                  <a @click="addId(shop)" class="shop_div">
                      <div class="shop_list_bg">
                          <img :src="this.imageUrl+shop.coverPhoto"/>
                      </div>
                      <div class="shop_infor">
                          <p class="tile">{{shop.goodsName}}</p>
                          <!--<p class="smallTile">{{shop.goodsName}}</p>-->
                          <p class="clearfix">
                          <span class="left">
                              <span class="oldMoney">￥{{shop.marketPrice}}</span>
                              ￥{{shop.price}}
                          </span>

                          </p>
                          <p class="clearfix">
                            <span class="left">
                                可用券 : 500
                            </span>
                          </p>
                      </div>
                  </a>
              </li>
          </ul>
         </div>
     </div>
       <div class="foot">
         <ul class="tabMenu clearfix">
             <li class="active">
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
             <li v-link="'/user/personCenter'" class="last">
                 <a>
                     <i class="fa fa-user"></i><br/>
                     <span>我的</span>
                 </a>
             </li>
         </ul>
     </div>
  <Toast :toastshow.sync="toastshow" :toasttext="toasttext"></Toast>
</template>

<style>
  @import '../../../static/plugins/swiper/dist/css/swiper.min.css';
</style>

<style>
  .shop_cat{top:0.3rem;}
</style>

<script>
  import '../../../static/plugins/swiper/dist/js/swiper.min.js'
  import userService from '../../api/userService'
  import authService from '../../api/authService'
  import Toast from '../components/toast.vue'
  export default {
    components: {
      Toast
    },
    data () {
      return {
        list: [],
        clearHide:true,
        active:false,
        swiperList:[],
        hide:true,
        num:0,
        domainName:"",
        imageUrl:"",
        isLogin:false,
        searchCon:"",
        toasttext:"",
        textareaText:"",
      }
    },
    ready () {
      document.title = '首页'
      //var shop_menu = document.getElementById("shop_menu").firstChild
      //shop_menu.setAttribute("class","active")
      userService.index(this)
      this.imageUrl = userService.imgUrl
      new Swiper ('#swiper-container', {
         slidesPerView: 1,
         pagination:'.swiper-pagination',
         paginationClickable: true,
         spaceBetween: 0,
         loop:true,
         autoplay: 5000,
         autoplayDisableOnInteraction: false,
         active:false
      })

      if (authService.isLogin()) {
        this.isLogin = true
      }else{
        this.isLogin = false
      }
    },
    methods: {
       onSelect:function(index,e){
         for(var i=0;i<e.currentTarget.parentNode.children.length;i++){
            e.currentTarget.parentNode.children[i].setAttribute("class"," ")
         }
         e.currentTarget.setAttribute("class","active")
         userService.selectIndex(this,index)
       },
       addId:function(shops){
         localStorage.setItem('shopingId',shops.mchId)
         this.$router.go("/category/shopsShoppingInfor/"+shops.id)
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
      },
      onShow: function () {
        this.hide = !this.hide
      },
      returnPage:function(){
        window.history.go(-1)
      },
      loginOut:function(){
          userService.loginOut(this)
        },
      searchBtn:function () {
        if(!this.searchCon){
          this.$set('toasttext','请输入关键字');
          this.$set('toastshow',true);
          return
        }
        localStorage.setItem('goodsName',this.searchCon)
        this.$router.go('/user/searchShopping')
      }
    }
  }
</script>

