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
    <div class="mask-bg" :class="{'hide':this.maskHide}" v-if="showFade" transition="fade" @click="maskClick()"></div>
    <section :class="{'tabSX':this.tabHide}">
        <ul class="flexbox">
            <li :class="{'active':this.sortActive}" @click="selectSort()">
                <a >
                    <span>销量</span>
                    <i class="fa fa-caret-up"></i>
                </a>
            </li>
            <li :class="{'active':this.addressActive}" @click="selectAddress()">
                <a >
                    <span>评价</span>
                    <i class="fa fa-caret-up"></i>
                </a>
            </li>
            <li :class="{'active':this.mapActive}" @click="selectMap()">
                <a >
                    <span>地图</span>
                    <i class="fa fa-caret-up"></i>
                </a>
            </li>
        </ul>
        <div class="cont-box" transition="fade">
            <div class="cont" :class="{'active':this.mapActive}">
                <div id="allmap" style="height:100%"></div>
            </div>
        </div>
    </section>
    <ul class="entryList mt0 style">
        <li v-for="shopsList in list">
            <div>
                <div class="couponImg style">
                    <img v-if="shopsList.logo==null" src="../../../static/images/shoppingC1.jpg" class="couponImg1" alt="">
                    <img v-if="shopsList.logo!=null" :src="this.imageUrl+shopsList.logo" class="couponImg1" />
                </div>
                <div class="inforList">
                    <p class="clearfix">
                        <span class="left shopsName">{{shopsList.mchName}}</span>
                    </p>
                    <div class="clearfix">
                       <ul class="starList clearfix">
                            <li v-for="activeItem in item" :class="{'active':activeItem.starActive}">
                                <i class="fa fa-star-o"></i>
                            </li>
                        </ul>
                    </div>
                    <p class="clearfix">
                        <span class="left">销量{{shopsList.salesNum}}</span>
                        <span class="right">共{{shopsList.goodsNum}}件商品</span>
                    </p>
                </div>

            </div>
            <div class="shopsInfor">
                <p>
                    <span class="span_icon span_yy"></span>
                    <span>主营：{{shopsList.businessContent}}</span>
                </p>

                <p>
                    <span class="span_icon span_address"></span>
                    <span>地址：{{shopsList.adress}}</span>
                </p>
                <div class="shopsA">
                    <span>
                        <a v-link="{ name: 'shopsInfor', params: {shops: shopsList.id}}">逛逛商铺</a>
                    </span>
                    <span>
                        <a class="btnCollectioning"  @click="onCollection(shopsList)">收藏商铺</a>
                        <a class="btnCollectioning" v-if="shopsList.collectionId==cancelCollection" @click="onCancelCollection(shopsList)">取消收藏</a>
                    </span>
                    <span>
                        <a>联系商铺</a>
                    </span>
                </div>
            </div>
        </li>
    </ul>
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
       <li class="active">
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
  .shop_cat{top:0.3rem;}
  .fade-transition {
    transition: opacity 1s ease;
  }
  .fade-enter, .fade-leave {
    opacity: 0;
  }
  .cont-box,.cont{position:absolute;;left:0;right:0;bottom:0;z-index:-1;}
  .cont-box{top:45px;}
  .cont{top:0;}
</style>

<script>
    import Bar from '../components/shopHead.vue'
    import mchService from '../../api/mchService'
    import userService from '../../api/userService'
    import authService from '../../api/authService'
    export default {
     components: {
      },
      data () {
        return {
          hide:true,
          collection:true,
          cancelCollection:false,
          sortActive:false,
          addressActive:false,
          mapActive:false,
          list:[],
          type:[],
          tabHide:false,
          maskHide:true,
          showFade:false,
          transitionName: 'fade',
          imageUrl:"",
          toastshow:false,
          toasttext:"",
          isLogin:false,
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
        document.title = '商铺列表'

        	// 初始化地图中心设置为渝中区
            var lng = 106.527269;
            var lat = 29.555415;

        	var currLng = null;
        	var currLat = null;
            // 初始化百度地图
            var map = new BMap.Map("allmap", {
                minZoom: 11,
                maxZoom: 20
            });

            //参数配置
            map.enableDragging(); //开启拖拽
            map.enableScrollWheelZoom(true); //开启缩放

            if (navigator.geolocation) {

        	    navigator.geolocation.getCurrentPosition(function(position){
        	    	var coords = position.coords;
        		 	    // 经度
        		 		currLng = coords.longitude;
        		 	    // 纬度
        			    currLat = coords.latitude;

        			    var ggPoint = new BMap.Point(currLng,currLat);
        		    	var convertor = new BMap.Convertor();
        		        var pointArr = [];
        		        pointArr.push(ggPoint);
        		        convertor.translate(pointArr, 1, 5, function(data){
        		        	if(data.status === 0) {
        				        var currMarker = new BMap.Marker(data.points[0]); // 创建标注
        				        currMarker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
        				        map.addOverlay(currMarker); // 将标注添加到地图中
        				        map.centerAndZoom(data.points[0],13);
        					}
                });
        	    }, function(error){
        	    	map.centerAndZoom(new BMap.Point(lng, lat), 13);
        				switch(error.code) {
        		   			case error.TIMEOUT:
        		   		    	//alert("The request to get user location timed out.");
        		   		        break;
        		   		    case error.POSITION_UNAVAILABLE:
        		   		        //alert('Location information is unavailable.');
        		   		        break;
        		   		    case error.PERMISSION_DENIED:
        		   		        //alert('User denied the request for Geolocation.');
        		   		        break;
        		   		    case error.UNKNOWN_ERROR:
        		   		        //alert('An unknown error occured!');
        		   		        break;
        		    	}
        	    }, {
        				// 指示浏览器获取高精度的位置，默认为false
        		   	    enableHighAccuracy: true,
        		   	    // 指定获取地理位置的超时时间，默认不限时，单位为毫秒
        		   	    timeout: 5000,
        		   	    // 最长有效期，在重复获取地理位置时，此参数指定多久再次获取位置。
        		   	    maximumAge: 0
        			});
        	} else {

        	    //alert("Your browser does not support Geolocation!");
        	}

        this.imageUrl = mchService.imgUrl
        var mchListArr = {

        }
        mchService.mchList(this,mchListArr)

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
       onCancelCollection:function(shopsList){
         shopsList.collectionId = !shopsList.collectionId
       },
       onCollection:function(shopsList){
          if (authService.isLogin()) {
            var shopArr = {
             type:1,
             id:shopsList.id
           }
           console.log(shopArr)
            userService.collectionShopping(this,shopArr)
          }else{
           this.$router.go('/auth/personLogin')
         }
       },
       selectSort:function(){


       },
       selectAddress:function(){


       },
       selectMap:function(){
         this.$set('showFade',true)
         this.$set('tabHide',true)
         this.$set('maskHide',false)
         this.sortActive=false
         this.addressActive=false
         this.mapActive=true
         this.$http.get('../../static/data/extensionShopping.json').then(function(response){
            this.type = response.data
         }, function(response){
           // 响应错误回调
         })
       },
       maskClick:function(){
          this.$set('showFade',false)
          this.$set('tabHide',false)
          this.$set('maskHide',true)
          this.sortActive=false
          this.addressActive=false
          this.mapActive=false
       }
      }
    }
</script>
