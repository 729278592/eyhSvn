<template>
     <Bar></Bar>
     <div class="bd absolute pd48">
        <ul class="shop_menu clearfix">
         <li v-for="item in items" :class="{'active':item.active}" @click="onSelect($index)">
            <a>
               {{item.con}}
               <span v-if="item.orderHide==true">
                 <span class="top" @click.stop="bigSort($index)"><i class="fa fa-angle-up"></i></span></br>
                 <span class="bottom" @click.stop="smallSort($index)"><i class="fa fa-angle-down"></i></span>
               </span>
            </a>
         </li>
      </ul>
      <div class="otherCon style">
        <ul class="shoppingList style clearfix pb0">
            <li v-for="shop in list" :class="{'mr0':$index%2==1}">
                <a @click="addId(shop)" class="shop_div">
                    <div class="shop_list_bg">
                      <img :src="this.imageUrl+shop.coverPhoto" style="width:100%;height:100%;" />
                    </div>
                    <div class="shop_infor">
                      <p class="tile">{{shop.goodsName}}</p>
                        <!--<p class="smallTile">{{shop.goodsName}}</p>-->
                        <p class="clearfix">
                              <span class="left">
                                  现　金: {{shop.price}}
                              </span>
                        </p>
                        <!--<p class="clearfix">-->
                            <!--<span class="left" v-if="shop.costPrice!=null && shop.costPrice!=''">-->
                                <!--可用券: {{shop.costPrice}}-->
                            <!--</span>-->
                          <!--<span class="left" v-else="">-->
                                <!--可用券: <span class="noPrice">暂无</span>-->
                            <!--</span>-->
                        <!--</p>-->
                        <p class="clearfix">
                            <span class="left">
                              <!--<span class="oldMoney">市场价: {{shop.marketPrice}}</span>-->
                              <span class="">市场价: {{shop.marketPrice}}</span>
                            </span>
                        </p>
                        <p class="clearfix">
                            <span class="left shoppingNum">
                                  销　量: {{shop.sales}}
                            </span>
                        </p>
                    </div>
                </a>
            </li>
        </ul>
        <div class="notConTip" v-show="dataHide">
          <img src="../../../static/images/notContent.png" alt=""/>
          <p class="notInfor">
            暂无数据
          </p>
        </div>
        <div class="weui_btn_area" v-show="btnHide">
          <input type="button" class="weui_btn  weui_btn_primary" @click="lookMore()" value={{typeData}} v-model="typeData">
        </div>
       </div>
       <div class="foot">
         <ul class="tabMenu clearfix">
             <li>
                 <a v-link="'/'">
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
       <Toast :toastshow.sync="toastshow" :toasttext="toasttext"></Toast>
       </div>
</template>

<style>
  .bd.absolute.pd48{bottom:auto;overflow: visible;}
  .notConTip{top: 100%;}
</style>

<script>
  import Bar from '../components/headBar.vue';
    import mchService from '../../api/mchService'
  import Toast from '../components/toast.vue'
    export default {
      components: {
        //注册组件
          Bar,
        Toast
      },
    data () {
      return {
        hide:true,
        list: [],
        shopId:"",
        type:"",
        dataHide:false,
        imageUrl:"",
        items: [
            	{con:"新品",active: true,name:"shopplingListNew",orderHide:false},
              {con:"销量",active: false,name:"shopplingListSale",orderHide:true},
              {con:"价格",active: false,name:"shopplingListPrice",orderHide:true},
              {con:"评价",active: false,name:"shopplingListComment",orderHide:true}
            ],
        toastshow:false,
        toasttext:"",
        btnHide:false,
        typeData:"查看更多",
        pageNum:1,
        nextNum:null,
        totalNum:null,
        nowPage:[]
      }
    },
    ready () {
      document.title = '商品列表'
      this.shopId = this.$route.params.shopplingListId;
      console.log(this.shopId)
      this.type = this.$route.params.type
      this.imageUrl = mchService.imgUrl
      console.log(this.imageUrl)
      var getCategoryArr = {
               type:this.type,
               pageNo:this.pageNum,
                categoryId:this.shopId
             };
      mchService.getCategoryAllGoods(this,getCategoryArr)
    },
    methods: {
     onShow: function () {
        this.hide = !this.hide
      },
      addId:function(shops){
        localStorage.setItem('shopingId',shops.mchId);
        this.$router.go("/category/shopsShoppingInfor/"+shops.id)
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
           pageNo:this.pageNum,
              type:this.type
            };
         mchService.getCategoryAllChioceGoods(this,getCategoryArr)

      },
      bigSort:function (index) {
        if(index==1){
          var getCategoryArr = {
            categoryId:this.shopId,
            pageNo:this.pageNum,
            type:this.type,
            sort:0
          };
          mchService.bigSortFun(this,getCategoryArr)
          return
        }
        if(index==2){
          var getCategoryArr = {
            categoryId:this.shopId,
            pageNo:this.pageNum,
            type:this.type,
            sort:2
          };
          mchService.bigSortFun(this,getCategoryArr)
          return
        }
        if(index==3){
          var getCategoryArr = {
            categoryId:this.shopId,
            pageNo:this.pageNum,
            type:this.type,
            sort:4
          };
          mchService.bigSortFun(this,getCategoryArr)
          return
        }
      },
      smallSort:function (index) {
        if(index==1){
          var getCategoryArr = {
            categoryId:this.shopId,
            pageNo:this.pageNum,
            type:this.type,
            sort:1
          };
          mchService.bigSortFun(this,getCategoryArr)
          return
        }
        if(index==2){
          var getCategoryArr = {
            categoryId:this.shopId,
            pageNo:this.pageNum,
            type:this.type,
            sort:3
          };
          mchService.bigSortFun(this,getCategoryArr)
          return
        }
        if(index==3){
          var getCategoryArr = {
            categoryId:this.shopId,
            pageNo:this.pageNum,
            type:this.type,
            sort:5
          };
          mchService.bigSortFun(this,getCategoryArr)
          return
        }
      },
      lookMore:function(){
        if(this.nextNum == this.pageNum ){
          this.$set('toasttext',"无更多数据");
          this.$set('toastshow',true);
          return;
        }

        if(this.nextNum){
          this.pageNum = this.nextNum;
          var getCategoryArr = {
            type:this.type,
            pageNo:this.pageNum,
            categoryId:this.shopId
          };
          mchService.getCategoryAllGoods(this,getCategoryArr)
        }
      }
    }
  }
</script>
