<template>
     <Bar></Bar>
     <div class="bd absolute pd48">
        <ul class="shop_menu clearfix">
         <li v-for="item in items" :class="{'active':item.active}" @click="onSelect($index)">
            <a>
               {{item.con}}
               <span v-if="item.orderHide==true">
                 <span class="top"><i class="fa fa-angle-up"></i></span></br>
                 <span class="bottom"><i class="fa fa-angle-down"></i></span>
               </span>
            </a>
         </li>
      </ul>
      <div class="otherCon style">
        <ul class="shoppingList style clearfix pb0">
            <li v-for="shop in list" :class="{'mr0':$index%2==1}">
                <a v-link="{ name: 'shopsShoppingInfor', params: {goodsId: shop.id}}" class="shop_div">
                    <div class="shop_list_bg">
                      <img :src="this.imageUrl+shop.coverPhoto" style="width:100%;height:100%;" />
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
                          <span class="right shoppingNum">
                              销量{{shop.sales}}
                          </span>
                      </p>
                    </div>
                </a>
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
             <li class="active">
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
       </div>
</template>

<style>
  .bd.absolute.pd48{bottom:auto;}
</style>

<script>
  import Bar from '../components/headBar.vue';
    import mchService from '../../api/mchService'
    export default {
      components: {
        //注册组件
          Bar
      },
    data () {
      return {
        hide:true,
        list: [],
        shopId:"",
        type:"",
        imageUrl:"",
        items: [
            	{con:"新品",active: true,name:"shopplingListNew",orderHide:false},
              {con:"销量",active: false,name:"shopplingListSale",orderHide:false},
              {con:"价格",active: false,name:"shopplingListPrice",orderHide:true},
              {con:"评价",active: false,name:"shopplingListComment",orderHide:false}
            ]
      }
    },
    ready () {
      document.title = '商品列表'
      this.shopId = this.$route.params.shopplingListId
      this.type = this.$route.params.type
      this.imageUrl = mchService.imgUrl
      console.log(this.imageUrl)
      var getCategoryArr = {
        categoryId:this.shopId,
               type:this.type
             }
      mchService.getCategoryAllGoods(this,getCategoryArr)
    },
    methods: {
     onShow: function () {
        this.hide = !this.hide
      },
      onSelect:function(index){
        this.items.forEach(function(item, i) {
          if(i === index)
            item.active = true;
          else
            item.active = false;
        })



         var getCategoryArr = {
           categoryId:this.shopId,
                  type:this.type
                }
         mchService.getCategoryAllGoods(this,getCategoryArr)



      }
    }
  }
</script>
