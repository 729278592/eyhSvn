<template>
  <Bar></Bar>
  <div class="bd absolute pd48">
    <ul class="entryList mt0">
        <li>
            <div>
                <div class="couponImg style" v-link="{ path: '/shops/contactShopsShopping', query: {id: list.id}}">
                   <img v-if="list.logo==null" src="../../../static/images/personLogo.jpg" class="couponImg1" alt="">
                   <img v-if="list.logo!=null" :src="this.imageUrl+list.logo" class="couponImg1" />
               </div>
                <div class="inforList">
                    <p class="clearfix">
                        <span class="left shopsName">{{list.mchName}}</span>
                      <button class="btnCollectioning right" v-if="list.collectionId!=null && list.collectionId!=''" @click="onCancelCollection(list)">取消收藏</button>
                      <button class="btnCollectioning right" v-else @click="onCollection(list)">收藏商铺</button>
                    </p>
                    <div class="clearfix">
                        <ul class="starList clearfix">
                            <li v-for="activeItem in item" :class="{'active':activeItem.starActive}">
                                <i class="fa fa-star-o"></i>
                            </li>
                        </ul>
                    </div>

                    <p class="clearfix">
                        <span class="left">销量{{list.salesNum}}</span>
                        <span class="right">共{{list.goodsNum}}件商品</span>
                    </p>
                </div>
            </div>
        </li>
    </ul>
    <div id="shopsShopping" class="shopsShopping">
        <p style="color: #333;">全部商品</p>
        <ul class="shoppingList style clearfix pb0">
            <li v-for="product in shopListArr" :class="{'mr0':$index%2==1}">
                <a v-link="{ name: 'shopsShoppingInfor', params: {goodsId: product.id}}"  class="shop_div">
                    <div class="shop_list_bg">
                      <img :src="this.imageUrl+product.coverPhoto" style="width:100%;height:100%;" />
                    </div>
                    <div class="shop_infor">
                        <p class="tile">{{product.goodsName}}</p>
                        <p class="clearfix">
                            <span class="left">
                                <span class="oldMoney">￥{{product.marketPrice}}</span>
                                ￥{{product.price}}
                            </span>
                        </p>
                        <p class="clearfix">
                            <span class="right shoppingNum">
                                销量{{product.sales}}
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
  <Toast :toastshow.sync="toastshow" :toasttext="toasttext"></Toast>
</template>
<script>
    import Bar from '../components/headBar.vue'
    import mchService from '../../api/mchService'
    import userService from '../../api/userService'
    import authService  from '../../api/authService'
    import Toast from '../components/toast.vue'
    export default {
       components: {
            Bar,
            Toast
        },
      data () {
        return {
          hide:true,
          collection:0,
          cancelCollection:1,
          list:[],
          shopListArr:[],
          shopsId:"",
          imageUrl:"",
          toastshow:false,
          toasttext:"",
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
        document.title = '商铺'

        this.shopsId = this.$route.params.shops
        this.imageUrl = mchService.imgUrl
        localStorage.setItem('shopingId',this.shopsId)

        var shopsInforArr = {
            id:this.shopsId
        }
        mchService.shopsInfor(this,shopsInforArr)



        var getMchGoodsListArr = {
          id:this.shopsId
        }
        mchService.getMchGoodsList(this,getMchGoodsListArr)

      },
      methods: {
        onShow: function () {
          this.hide = !this.hide
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
            }
            userService.collectionShopping(this,shopArr)
          }else{
            this.$router.go('/auth/personLogin')
          }
        }
      }
    }
</script>
