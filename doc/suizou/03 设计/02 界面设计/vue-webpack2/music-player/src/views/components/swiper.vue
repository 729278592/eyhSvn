<template>
    <div class="swiper-container mt0 swiper-container-horizontal" id="swiper-container">
        <div class="swiper-wrapper" style="transition-duration: 0ms; ">
            <div class="swiper-slide" v-for="bannerList in banner">
                <a>
                  <img :src="bannerList.src" class="w100" alt=""/>
                </a>
            </div>
        </div>
        <div class="swiper-pagination"></div>
        <!--<div class="swiper-button-next"></div>-->
        <!--<div class="swiper-button-prev"></div>-->
    </div>
 </template>

 <style>
   @import '../../../static/plugins/swiper/dist/css/swiper.min.css'
 </style>

 <script>
   import '../../../static/plugins/swiper/dist/js/swiper.min.js'
   export default {
    props:{
       banner:{
           type:Object,
           required: false
       }
     },
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
       new Swiper ('#swiper-container', {
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


