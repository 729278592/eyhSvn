<template>
  <Bar></Bar>
<div class="bd absolute pd48">
  <ul class="entryList mt0">
      <li>
          <div>
              <div class="couponImg style">
                 <img v-if="list.logo==null" src="../../../static/images/personLogo.jpg" class="couponImg1" alt="">
                 <img v-else :src="this.imageUrl+list.logo" class="couponImg1" alt="">
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
  <div class="shopsDetails">
    <p class="title">商铺介绍</p>
    <div v-if="list.businessLicense==null" class="infor">
      {{list.businessLicense}}
    </div>
    <div v-else class="infor">
      暂无介绍
    </div>
  </div>
  <div class="shopsDetails">
    <p class="title">商铺名称</p>
    <div class="infor">
      {{list.mchName}}
    </div>
  </div>
  <div class="shopsDetails">
    <p class="title">评分</p>
    <div class="infor">
      <ul class="starList clearfix">
        <li v-for="activeItem in item" :class="{'active':activeItem.starActive}">
          <i class="fa fa-star-o"></i>
        </li>
      </ul>
    </div>
  </div>
  <div class="shopsDetails">
    <p class="title">主营产品</p>
    <div v-if="list.businessContent==null" class="infor">
      暂无内容
    </div>
    <div v-else class="infor">
      {{list.businessContent}}
    </div>
  </div>
  <div class="shopsDetails">
    <p class="title">创店时间</p>
    <div class="infor">
      <span class="verdana">{{list.createTime}}</span>
    </div>
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
      <li v-link="'/user/personCenter'" class="last">
        <a>
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
    import authService from '../../api/authService'
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
          collection:0,
          cancelCollection:1,
          list:[],
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
        document.title = '联系商铺';
        this.imageUrl = mchService.imgUrl;
        var linkShopsArr = {id:this.$route.query.id};
        mchService.linkShops(this,linkShopsArr)
      },
      methods: {
        onShow: function () {
          this.hide = !this.hide
        },

        onCancelCollection:function(){
           this.collection = 0
           this.cancelCollection = 1
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
        onCancelCollection:function(shopsList){
          if (authService.isLogin()) {
            var collectArr = {id:shopsList.collectionId}
            userService.cancelCollectionShop(this,collectArr)
          }else{
            this.$router.go('/auth/personLogin')
          }

        },
      }
    }
</script>
