<template>
 <Bar></Bar>
<div class="bd absolute pt">
    <div class="applicatioOpetion">
        <ul class="applicatioNav clearfix">
            <li>
                <a :class="{'active':this.shoppingActive}" @click="selectShopping()">商品收藏</a>
            </li>
            <li>
                <a :class="{'active':this.shopsActive}" @click="selectShops()">商铺收藏</a>
            </li>
        </ul>
    </div>
    <div id="Collection">
      <div  :class="{'active':this.shoppingActive}">
        <ul class="entryList mt0">
            <li v-for="shoppingList in list">
                <div>
                    <div class="couponImg style" @click="orderInfor(shoppingList)" >
                        <img v-if="shoppingList.img==null" src="../../../static/images/shoppingC1.jpg" class="couponImg1" alt="">
                        <img v-if="shoppingList.img!=null" :src="this.imageUrl+shoppingList.img" class="couponImg1" />
                    </div>
                    <div class="inforList">
                        <p class="clearfix top">
                            <span class="left shopsName">{{shoppingList.name}}</span>
                        </p>
                        <p v-if="shoppingList.status=='失效'">
                            <span class="Invalid">失效</span>
                        </p>
                        <p v-else>

                        </p>
                        <p class="clearfix bottom">
                            <span class="left money">￥<span class="verdana">{{shoppingList.priceScore}}</span></span>
                            <button class="btnCollection right" @click="showModal(shoppingList)">取消收藏</button>
                        </p>
                    </div>
                </div>

            </li>
        </ul>
        <div class="notConTip" v-show="dataHide">
               <img src="../../../static/images/notContent.png" alt=""/>
               <p class="notInfor">
                   暂无数据
               </p>
           </div>
      </div>
      <div :class="{'active':this.shopsActive}">
        <ul class="entryList mt0">
            <li v-for="shopsList in shoplist"><!--v-link="{ name: 'shopsInfor', params: {shops: shopsList.goodsMchId}}"-->
                <div>
                    <div class="couponImg style" @click="shopsDefault(shopsList)">
                        <img v-if="shopsList.img==null" src="../../../static/images/shoppingC1.jpg" class="couponImg1" alt="">
                        <img v-if="shopsList.img!=null" :src="this.imageUrl+shopsList.img" class="couponImg1" />
                    </div>
                    <div class="inforList">
                        <p class="clearfix top">
                            <span class="left shopsName">{{shopsList.name}}</span>
                        </p>
                        <div class="clearfix">
                            <ul class="starList clearfix">
                                <li v-for="activeItem in item" :class="{'active':activeItem.starActive}">
                                    <i class="fa fa-star-o"></i>
                                </li>
                            </ul>
                        </div>
                        <p class="clearfix bottom">
                            <button class="btnCollection right" @click="showModalShop(shopsList)">取消收藏</button>
                        </p>
                    </div>
                </div>

            </li>
        </ul>
        <div class="notConTip" v-show="dataShopHide">
             <img src="../../../static/images/notContent.png" alt=""/>
             <p class="notInfor">
                 暂无数据
             </p>
         </div>
      </div>

    </div>

</div>
<Toast :toastshow.sync="toastshow" :toasttext="toasttext"></Toast>
</template>

<style>
  #Collection>div{display:none}
  #Collection>div.active{display:inline-block}
</style>

<script>
  import Bar from '../components/headBar.vue'
  import userService from '../../api/userService'
  import Toast from '../components/toast.vue'
  export default {
     components: {
        Toast,
        Bar
      },
      data () {
        return {
          show: false,
          shops:"",
          hide:true,
          invalid:1,
          shopsActive:false,
          shoppingActive:true,
          list:[],
          toastshow:false,
          toasttext:"",
          shoplist:[],
          imageUrl:"",
          dataHide:false,
          dataShopHide:false,
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
        document.title = '我的收藏'
        this.imageUrl = userService.imgUrl
        console.log(this.imageUrl)
        userService.shopCollection(this)
      },
      methods: {
        onShow: function () {
          this.hide = !this.hide
        },
        selectShops:function(){
           this.shopsActive=true
           this.shoppingActive=false
           userService.shopsCollection(this)
        },
        selectShopping:function(){
          this.shopsActive=false
          this.shoppingActive=true
         userService.shopCollection(this)

        },
         showModal:function(shopping){
            userService.cancelCollection(this,{id:shopping.id},shopping)
         },
          showModalShop:function(shopping){
             userService.cancelCollections(this,{id:shopping.id},shopping)
          },
         sureDeleta:function(){
            this.show = false
            for(var i=0;i<this.list.length;i++){
              this.list.$remove(this.shops)
            }
         },
         orderInfor:function(orderInfor){
          if(!orderInfor.goodsMchId){}
          else{
            this.$router.go('/category/shopsShoppingInfor/'+orderInfor.goodsMchId)
          }
         },
         shopsDefault:function(shops){
            if(!shops.goodsMchId){}
            else{
              this.$router.go('/shops/shopsInfor/'+shops.goodsMchId)
            }
         }
      }
    }
</script>
