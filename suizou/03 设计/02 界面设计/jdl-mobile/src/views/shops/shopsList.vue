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
  <div class="bd absolute pd48"  :class="{'overflowY':this.overflowY}">
    <div class="mask-bg" :class="{'hide':this.maskHide}" v-if="showFade" transition="fade" @click="maskClick()"></div>
    <section :class="{'tabSX':this.tabHide}">
      <ul class="flexbox">
        <li class="hide" :class="{'active':this.sortActive}" @click="bigSort()">
          <a >
            <span>销量</span>
            <i class="fa fa-caret-up"></i>
          </a>
        </li>
        <li class="hide" :class="{'smallActive':this.sortHide}" @click="smallSort()">
          <a >
            <span>销量</span>
            <i class="fa fa-caret-down"></i>
          </a>
        </li>
        <li class="hide" :class="{'comSmallActive':this.addressActive}" @click="bigSorta()">
          <a >
            <span>评价</span>
            <i class="fa fa-caret-up"></i>
          </a>
        </li>
        <li class="hide" :class="{'comActive':this.smallAddressActive}" @click="smallSorta()">
          <a >
            <span>评价</span>
            <i class="fa fa-caret-down"></i>
          </a>
        </li>
        <li :class="{'active':this.mapActive}" @click="selectMap()">
          <a >
            <span>地图</span>
            <!--<i class="fa fa-caret-up"></i>-->
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
            <img v-if="shopsList.logo==null" src="../../../static/images/personLogo.jpg" class="couponImg1" alt="">
            <img v-if="shopsList.logo!=null" :src="this.imageUrl+shopsList.logo" class="couponImg1" />
          </div>
          <div class="inforList">
            <p class="clearfix">
              <span class="left shopsName">{{shopsList.mchName}}</span>
            </p>
            <div class="clearfix">
              <ul class="starList clearfix">
                <li v-for="activeItem in shopsList.item" :class="{'active':activeItem.starActive}">
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
                        <a class="btnCollectioning" v-if="shopsList.collectionId!=null && shopsList.collectionId!=''" @click="onCancelCollection(shopsList)">取消收藏</a>
                        <a class="btnCollectioning" V-else @click="onCollection(shopsList)">收藏商铺</a>
                    </span>
                    <span>
                        <a  href="tel:{{shopsList.mobile}}">联系商铺</a>
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
  <div class="notConTip" v-show="dataHide">
    <img src="../../../static/images/notContent.png" alt=""/>
    <p class="notInfor">
      暂无数据
    </p>
  </div>
  <Toast :toastshow.sync="toastshow" :toasttext="toasttext"></Toast>
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
  .flexbox li.hide{display: none;}
  .flexbox li.active a{color: #565c67!important;}
  .flexbox li.active,.flexbox li.smallActive,.flexbox li.comSmallActive,.flexbox li.comActive{display: block;}
</style>

<script>
    import Bar from '../components/shopHead.vue'
    import mchService from '../../api/mchService'
    import userService from '../../api/userService'
    import authService from '../../api/authService'
    import Toast from '../components/toast.vue'
    export default {
     components: {
       Toast
      },
      data () {
        return {
          hide:true,
          collection:true,
          cancelCollection:false,
          sortActive:true,
          sortHide:false,
          addressActive:true,
          smallAddressActive:false,
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
          dataHide:false,
          map:null,
          currPoint:null,
          currLng:"",
          currLat:"",
          overflowY:false
        }
      },
      ready () {
        document.title = '商铺列表'
            //参数配置
            this.map = new BMap.Map("allmap", {minZoom: 11, maxZoom: 20}) // 初始化百度地图
            this.map.enableDragging() //开启拖拽
            this.map.enableScrollWheelZoom(true) //开启缩放
            var _this = this;
            if (navigator.geolocation) {
        	    navigator.geolocation.getCurrentPosition(function(position){
        	    	var coords = position.coords;
        		 	    // 经度
                _this.currLng = coords.longitude;

        		 	    // 纬度
                _this.currLat = coords.latitude;
        			    var ggPoint = new BMap.Point(_this.currLng,_this.currLat);
        		    	var convertor = new BMap.Convertor();
        		        var pointArr = [];
        		        pointArr.push(ggPoint);
        		        convertor.translate(pointArr, 1, 5, function(data){
        		        	if(data.status === 0) {
                        _this.currPoint = data.points[0];
        				        var currMarker = new BMap.Marker(data.points[0]); // 创建标注
        				        currMarker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
                        _this.map.addOverlay(currMarker); // 将标注添加到地图中
                        _this.map.centerAndZoom(data.points[0],10);
        					}
                });
        	    }, function(error){

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
        var mchListArr = {}
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
         if (authService.isLogin()) {
           var collectArr = {id:shopsList.collectionId}
           userService.cancelCollectionShop(this,collectArr)
         }else{
           this.$router.go('/auth/personLogin')
         }

       },
       onCollection:function(shopsList){
          if (authService.isLogin()) {
            var shopArr = {
             type:1,
             id:shopsList.id
           };
            userService.collectionShopping(this,shopArr)
          }else{
           this.$router.go('/auth/personLogin')
         }
       },

       selectMap:function(){

         this.$set('showFade',true)
         this.$set('tabHide',true)
         this.$set('maskHide',false)
         this.mapActive=true;
         this.overflowY=true;

         // 1.清除覆盖物
         this.map.clearOverlays();
         // 2.重新添加覆盖物
         for(var i=0; i<this.list.length; i++) {
           if(!this.list[i].lng || !this.list[i].lat){
             continue
           }
           if(!this.currPoint && i==0) {
             this.currPoint = new BMap.Point(this.list[i].lng,this.list[i].lat)
           }
           //var point = new BMap.Point(this.list[i].lng,this.list[i].lat)
           //var marker = new BMap.Marker(point)  // 创建标注
           //this.map.addOverlay(marker)            // 将标注添加到地图中
           var myCompOverlay = new CustomOverlay(new BMap.Point(this.list[i].lng,this.list[i].lat), this.list[i].mchName, this.list[i].mchName, this.list[i].id);
           this.map.addOverlay(myCompOverlay);
         }

         // 3. 定位当前用户位置
         var currMarker = new BMap.Marker(this.currPoint); // 创建标注
         currMarker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
         this.map.addOverlay(currMarker); // 将标注添加到地图中
         var _this = this;
         setTimeout(function(){
           _this.map.centerAndZoom(_this.currPoint,15);
         },1000)

       },
       maskClick:function(){
          this.$set('showFade',false)
          this.$set('tabHide',false)
          this.$set('maskHide',true)
          this.mapActive=false
         this.overflowY=false;
       },
        bigSort:function(){
          this.sortActive=false;
          this.sortHide=true;
          var sortArr = {sort:0};
          this.$set('showFade',false)
          this.$set('tabHide',false)
          this.$set('maskHide',true)
          this.overflowY=false;
          userService.sort(this,sortArr)

        },
        bigSorta:function(){
          this.addressActive=false;
          this.smallAddressActive=true;
          var sortArr = {sort:2};
          this.$set('showFade',false)
          this.$set('tabHide',false)
          this.$set('maskHide',true)
          this.overflowY=false;
          userService.sort(this,sortArr)
        },
        smallSort:function(){
          this.sortActive=true;
          this.sortHide=false;
          var sortArr = {sort:1};
          this.$set('showFade',false)
          this.$set('tabHide',false)
          this.$set('maskHide',true)
          this.overflowY=false;
          userService.sort(this,sortArr)
        },
        smallSorta:function(){
          this.addressActive=true;
          this.smallAddressActive=false;
          this.$set('showFade',false)
          this.$set('tabHide',false)
          this.$set('maskHide',true)
          this.overflowY=false;
          var sortArr = {sort:3};

          userService.sort(this,sortArr)
        }
      }
    }

    // 定义自定义覆盖物的构造函数
    function CustomOverlay(point, text, mouseoverText, mchId){
      this._point = point;
      this._text = text;
      this._overText = mouseoverText;
      this._mchId = mchId;
    }
    // 继承API的BMap.Overlay
    CustomOverlay.prototype = new BMap.Overlay();

    // 实现初始化方法
    CustomOverlay.prototype.initialize = function(map){
      // 保存map对象实例
      this._map = map;
      // 创建div元素，作为自定义覆盖物的容器
      var div = document.createElement("div");
      div.style.position = "absolute";
      div.style.zIndex = BMap.Overlay.getZIndex(this._point.lat);
      div.style.backgroundColor = "#EE5D5B";
      div.style.border = "1px solid #BC3B3A";
      div.style.color = "white";
      div.style.height = "25px";
      div.style.padding = "2px";
      div.style.lineHeight = "18px";
      div.style.whiteSpace = "nowrap";
      div.style.MozUserSelect = "none";
      div.style.fontSize = "12px";
      div.style.cursor="pointer";

      div.id=this._mchId;
      var span = this._span = document.createElement("span");

      div.appendChild(span);
      span.appendChild(document.createTextNode(this._overText));

      var that = this;

      var arrow = this._arrow = document.createElement("div");
      arrow.style.background = "url(http://map.baidu.com/fwmap/upload/r/map/fwmap/static/house/images/label.png) no-repeat";
      arrow.style.position = "absolute";
      arrow.style.width = "11px";
      arrow.style.height = "10px";
      arrow.style.top = "22px";
      arrow.style.left = "10px";
      arrow.style.overflow = "hidden";
      div.appendChild(arrow);

      div.onmouseover = function(){
        this.style.backgroundColor = "#6BADCA";
        this.style.borderColor = "#0000ff";
        this.getElementsByTagName("span")[0].innerHTML = that._overText;
        arrow.style.backgroundPosition = "0px -20px";
        this.style.zIndex=5;
      };

      div.onmouseout = function(){
        this.style.backgroundColor = "#EE5D5B";
        this.style.borderColor = "#BC3B3A";
        this.getElementsByTagName("span")[0].innerHTML = that._overText;
        arrow.style.backgroundPosition = "0px 0px";
        this.style.zIndex="auto";
      };

//      div.onclick = function(){
//        alert("click")
//      };

      div.ontouchstart = function(){
        //window.location.href="http://m.jdl800.com/#!/shops/shopsInfor/"+this.id

        window.router.go("/shops/shopsInfor/"+this.id);
      };

      // 将div添加到覆盖物容器中
      map.getPanes().labelPane.appendChild(div);

      // 保存div实例
      this._div = div;

      // 需要将div元素作为方法的返回值，当调用该覆盖物的show、
      // hide方法，或者对覆盖物进行移除时，API都将操作此元素。
      return div;
    };
    CustomOverlay.prototype.draw = function(){
      var map = this._map;
      var pixel = map.pointToOverlayPixel(this._point);
      this._div.style.left = pixel.x - parseInt(this._arrow.style.left) + "px";
      this._div.style.top  = pixel.y - 30 + "px";
    };

    // 自定义监听事件方法
    CustomOverlay.prototype.addEventListener = function(event,fun){
      this._div['on'+event] = fun;
    }
</script>
