<template>
     <Bar></Bar>
     <div class="bd absolute pd48">
        <ul class="shop_menu clearfix style">
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
                      <p class="clearfix">
                          <span class="right shoppingNum">
                              销量{{shop.saleNum}}
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
                 <a v-link="'/'">
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
                 <a v-link="'/shops/shopsList'" class="active">
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
<script>
  import Bar from '../components/shopHead.vue'
  export default {
     components: {
          Bar
      },
    data () {
      return {
        hide:true,
        list: [],
        items: [
            	{con:"新品",active: true,name:"shoppingStyleNew",orderHide:false},
              {con:"销量",active: false,name:"shoppingStyleSale",orderHide:false},
              {con:"价格",active: false,name:"shoppingStylePrice",orderHide:true}
            ]
      }
    },
    ready () {
      document.title = '商品类别'
     this.$http.get('../../static/data/shoppingStyleNew.json').then(function(response){
         this.list = response.json()
     }, function(response){
      // 响应错误回调
     })
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
        this.$http.get('../../static/data/'+this.items[index].name+'.json').then(function(response){
          this.list = response.json()
        }, function(response){
          // 响应错误回调
        })
      }
    }
  }
</script>
