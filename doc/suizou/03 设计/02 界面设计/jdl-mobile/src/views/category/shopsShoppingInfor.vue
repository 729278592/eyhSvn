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
  <div>
    <img :src="this.imageUrl+shopInfor.images" alt="" class="w100"/>
  </div>
  <div class="shopsshoppingName">
      {{shopInfor.goodsName}}
  </div>
  <div class="shopsshoppingInfor">
      <P class="clearfix">
          <span class="left">
              市场价　: ￥<span class="verdana">{{shopInfor.marketPrice}}</span>
          </span>
          <span class="right color">
              平台优惠价 : ￥<span class="verdana">{{shopInfor.price}}</span>
          </span>
      </P>
      <P class="clearfix">
          <span class="left">
              应付债卷 : ￥<span class="verdana">{{shopInfor.shouldVolume}}</span>
          </span>
          <span class="right">
              应付金额 : ￥<span class="verdana">{{shopInfor.shouldMoney}}</span>
          </span>
      </P>
      <P class="clearfix">
          <span class="left color1" v-if="shopInfor.freight==0">
              免运费
          </span>
          <span class="left color1" v-if="shopInfor.freight!=0">
              运费:<span class="verdana">{{shopInfor.freight}}</span>
          </span>
          <span class="right color1">
              销量 : <span class="verdana">{{shopInfor.sales}}</span>
          </span>
      </P>
  </div>
  <div class="weui_cells weui_cells_access mt10 top0" style="border-bottom: 1px solid #dbdbdb;" @click="showModal()">
      <a class="weui_cell">
          <div class="weui_cell_bd weui_cell_primary">
              <p>
                  <span class="text">
                      选择型号尺寸及数量
                  </span>
              </p>
          </div>
          <div class="weui_cell_ft"></div>
      </a>
  </div>
  <div class="applicatioOpetion m">
      <ul class="applicatioNav clearfix">
          <li>
              <a :class="{'active':this.shopActive}" @click="selectShoop()">商品介绍</a>
          </li>
          <li>
              <a :class="{'active':this.commentActive}" @click="selectComment()">用户评价</a>
          </li>
      </ul>
  </div>
  <div class="shopsShoppings">
      <div class="shopsShopping-infor style" :class="{'active':this.shopActive}">
          <span class="shopSpan" v-html="shopInfor.goodsDesc"></span>
      </div>
      <div class="shopsShopping-infor" :class="{'active':this.commentActive}">
          <ul class="commentList">
              <li v-for="comment in commentLists">
                  <div class="commentHead" v-link="'/category/message'">
                       <img v-if="comment.headUrl!=null" :src="this.domainName+comment.headUrl" alt=""/>
                       <img v-if="comment.headUrl==null" src='../../../static/images/userDefault.png' alt=''>
                      <span>{{comment.nickName}}</span>
                  </div>
                  <div class="commentCon">
                      <p>
                       {{comment.evaluation}}
                     </p>
                      <p>
                          <span class="time">{{comment.createTime}}</span>　
                          <span class="type">{{comment.specName}}</span>
                      </p>
                  </div>
              </li>
          </ul>
      </div>
  </div>
  <div class="weui_mask_transition" id="mask" :class="{'weui_fade_toggle':addClassFade}" @click="hideModal()"></div>
    <div class="weui_actionsheet" :class="{'weui_actionsheet_toggle':addClassActionsheet}" id="weui_actionsheet">
        <div class="weui_actionsheet_menu">
            <img src="../../../static/images/closeImg.png" alt="" class="closeImg" @click="hideModal()"/>
            <ul class="entryList mt0">
                <li>
                    <div>
                        <div class="couponImg style">
                            <img v-if="shopInfor.images==null" src="../../../static/images/shoppingC1.jpg" class="couponImg1" alt="">
                            <img v-if="shopInfor.images!=null" :src="this.imageUrl+shopInfor.images" class="couponImg1" alt="">
                        </div>
                        <div class="inforList">
                            <p class="clearfix top w74">
                                <span class="left shopsName">{{shopInfor.goodsName}}</span>
                            </p>
                            <p class="clearfix bottom w74">
                                <span class="left money">￥{{shopInfor.price}}</span>
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="shopType style">
                <p class="title">规格</p>
                <ul class="shopTypeList clearfix">
                    <li v-for="shopInforSize in products"  @click="onSelect($index,$event)">{{shopInforSize.specName}}</li>
                </ul>
            </div>
            <div class="weui_cells  mt0 ">
                <div class="weui_cell">
                    <div class="weui_cell_hd">
                        <label class="weui_label">
                            <span class="spanText" style="width: 50px;top: 0;display: inline-block;font-size: 0.75rem;color: #999;">数量</span>
                        </label>
                    </div>
                    <div class="weui_cell_bd weui_cell_primary">
                      <Spinner  v-ref:msg></Spinner>
                    </div>
                </div>
            </div>
        </div>
        <div class="weui_actionsheet_action">
            <ul class="shopShoppingMenu style clearfix">
                <li class="four">
                    <button class="btnBuy" @click="nowBuy()">立刻购买</button>
                </li>
                <li class="three">
                    <button class="btnCart" @click="btnCart()">加入购物车</button>
                </li>
            </ul>
            <button class="btnSure hide">确定</button>
        </div>
    </div>
</div>
<div class="foot">
  <ul class="shopShoppingMenu clearfix">
      <li class="first">
          <a v-link="{ name: 'shopsInfor', params: {shops: idS}}">
              <i class="fa fa-tag"></i>
              商铺
          </a>
      </li>
      <li class="second">
          <a :class="{'active':active}" @click="onCollection(shopInfor)">
              <i class="fa" :class="{'fa-star-o':notCollectionActive,'fa-star':collectionActive}"></i>
              收藏
          </a>
      </li>
      <li class="three">
          <button class="btnCart" @click="btnCart()">加入购物车</button>
      </li>
      <li class="four">
          <button class="btnBuy" @click="nowBuy()">立刻购买</button>
      </li>
  </ul>
</div>
<Toast :toastshow.sync="toastshow" :toasttext="toasttext"></Toast>
</template>

<style>
  .bd.absolute{bottom:auto}
  .foot{height: 49px;line-height: 49px;}
</style>


<script>
   import Spinner from '../components/spinner.vue'
   import Bar from '../components/headBar.vue'
   import userService from '../../api/userService'
   import authService  from '../../api/authService'
    import Toast from '../components/toast.vue'
   export default {
      components: {
         //注册组件
           Toast,
           Spinner,
           Bar
       },
      data () {
        return {
          hide:true,
          active:false,
          notCollectionActive:true,
          collectionActive:false,
          shopActive:true,
          commentActive:false,
          commentLists:[],
          notFreight:0,
          hasFreight:1,
          addClassFade:false,
          addClassActionsheet:false,
          shopInforSizes:[],
          shopInfor:[],
          products:[],
          domainName:"",
          imageUrl:"",
          active:"",
          value:"",
          indexNmu:"",
          toastshow:false,
          toasttext:"",
          idS :"",
          isLogin:false
        }
      },
      ready () {
        document.title = '商铺商品详情';
        var shopsShoppingInforArr = {goodsId:this.$route.params.goodsId};
        this.idS = localStorage.getItem('shopingId');

        this.imageUrl = userService.imgUrl;
        userService.shopsShoppingInfor(this,shopsShoppingInforArr);
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
        showModal :function(){
          this.addClassFade = true
          this.addClassActionsheet = true
        },
        hideModal: function(){
          this.addClassFade = false
          this.addClassActionsheet = false
        },
        onSelect:function(index,e){
         for(var i=0;i<e.currentTarget.parentNode.children.length;i++){
            e.currentTarget.parentNode.children[i].setAttribute("class"," ")
         }
         this.active = true
         this.indexNum = index
         e.currentTarget.setAttribute("class","active")
        },
        selectShoop:function(){
          this.shopActive=true
          this.commentActive=false
        },

        onCollection:function(shopInfor){
            if (authService.isLogin()) {
            var shopArr = {
               type:0,
               id:shopInfor.id
             }
              console.log(shopArr)
              userService.collectionShopping(this,shopArr)
            }else{
              this.$router.go('/auth/personLogin')
            }
         },

        selectComment:function(){
          this.shopActive=false
          this.commentActive=true
          var showGoodsEvaArr = {goodsId:this.$route.params.goodsId}
          userService.showGoodsEva(this,showGoodsEvaArr)
        },
        collection:function(){
          this.active = true
          this.notCollectionActive = false
          this.collectionActive = true
          userService.showGoodsEva(this,showGoodsEvaArr)
        },
        btnCart:function(){
        if(authService.isLogin()){
            if(this.active){
              var addCartArr = {
                productId :this.products[this.indexNum].id,
                num       :this.$refs.msg.$el.nextSibling.children.isNumber.value
              }
               userService.addCart(this,addCartArr)
            }
            else{
              this.addClassFade = true
              this.addClassActionsheet = true
              this.$set('toasttext','请选择规格')
              this.$set('toastshow',true)
            }
          }else{
            this.$router.go('/auth/personLogin')
          }
        },
         nowBuy:function(){
            if(authService.isLogin()){
              if(this.active){

               var addCartArr = {
                  productId :this.products[this.indexNum].id,
                  num       :this.$refs.msg.$el.nextSibling.children.isNumber.value
                }
                localStorage.setItem('data',JSON.stringify(addCartArr))
                this.$router.go('/user/paySettlementBuy')
              }
              else{
                this.addClassFade = true
                this.addClassActionsheet = true
                this.$set('toasttext','请选择规格')
                this.$set('toastshow',true)
              }
            }else{
              this.$router.go('/auth/personLogin')
            }
         }
      }
    }
</script>
