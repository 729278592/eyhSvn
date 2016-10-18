<template>
  <Bar></Bar>
  <div class="bd absolute pd48">
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
  </div>
</template>
<style>
  .bd.absolute.pd48{bottom:0;}
</style>

<script>
  import Bar from '../components/headBar.vue';
  import userService from '../../api/userService'
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
        dataHide:false
      }
    },
    ready () {
      document.title = '收索商品列表';
      this.goodsName = localStorage.getItem('goodsName');
      this.imageUrl = userService.imgUrl;
      console.log(this.imageUrl);
      var getCategoryArr = {
        goodsName:this.goodsName
      };
      userService.searchGoods(this,getCategoryArr)
    },
    methods: {
      onShow: function () {
        this.hide = !this.hide
      }
    }
  }
</script>
