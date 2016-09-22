<template>
  <div class="hd">
      <a >
          <a class="return" @click="returnPage()"></a>
      </a>
      家得利
      <div class="right nav_block">
          <a v-link="'/user/shopCart'" class="shop_cat"></a>
              <a class="dot_block" @click.stop="onShow"></a>
              <ul class="nav_link" :class="{'hide':hide}">
              <li>
                  <a v-link="'/user/myMessage'">
                      消息
                  </a>
              </li>
			        <li>
                  <a v-link="'/home/index'">
                      首页
                  </a>
              </li>
          </ul>
      </div>
  </div>
<div class="bd absolute pd48" v-for="shopInfor in dataJson">
  <div>
    <img :src="shopInfor.shopsShoppingImg1" alt="" class="w100"/>
  </div>
  <div class="shopsshoppingName">
      {{shopInfor.shopsShoppingName}}
  </div>
  <div class="shopsshoppingInfor">
      <P class="clearfix">
          <span class="left">
              市场价　: ￥<span class="verdana">{{shopInfor.marketValue}}</span>
          </span>
          <span class="right color">
              平台优惠价 : ￥<span class="verdana">{{shopInfor.concessionalValue}}</span>
          </span>
      </P>
      <P class="clearfix">
          <span class="left">
              应付在卷 : ￥<span class="verdana">{{shopInfor.shouldVolume}}</span>
          </span>
          <span class="right">
              应付金额 : ￥<span class="verdana">{{shopInfor.shouldMoney}}</span>
          </span>
      </P>
      <P class="clearfix">
          <span class="left color1" v-if="shopInfor.freightId==this.notFreight">
              免运费
          </span>
          <span class="left color1" v-if="shopInfor.freightId==this.hasFreight">
              运费:<span class="verdana">{{shopInfor.freightMoney}}</span>
          </span>
          <span class="right color1">
              销量 : <span class="verdana">{{shopInfor.saleNum}}</span>
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
      <div class="shopsShopping-infor" :class="{'active':this.shopActive}">
          <img :src="shopInfor.shopsShoppingImg2" alt=""/>
          <img :src="shopInfor.shopsShoppingImg3" alt=""/>
          <img :src="shopInfor.shopsShoppingImg4" alt=""/>
          <img :src="shopInfor.shopsShoppingImg5" alt=""/>
      </div>
      <div class="shopsShopping-infor" :class="{'active':this.commentActive}">
          <ul class="commentList">
              <li v-for="comment in commentLists">
                  <div class="commentHead">
                      <img :src="comment.personimg" alt=""/>
                      <span>{{comment.name}}</span>
                  </div>
                  <div class="commentCon">
                      <p>
                       {{comment.commentContent}}
                     </p>
                      <p>
                          <span class="time">{{comment.commentTime}}</span>
                          <span class="type">{{comment.commentType}}</span>
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
                            <img :src="shopInfor.shopsShoppingImg6" class="couponImg1" alt="">
                        </div>
                        <div class="inforList">
                            <p class="clearfix top w74">
                                <span class="left shopsName">{{shopInfor.shopsShoppingName}}</span>
                            </p>
                            <p class="clearfix bottom w74">
                                <span class="left money">￥{{shopInfor.marketValue}}</span>
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
            <div class="shopType style">
                <p class="title">尺寸型号</p>
                <ul class="shopTypeList clearfix">
                    <li v-for="shopInforSize in shopInfor.shopsShoppingSize" :class="{'active':shopInforSize.active}" @click="onSelect($index,shopInfor.shopsShoppingSize)">{{shopInforSize.size}}</li>
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
                      <Spinner></Spinner>
                    </div>
                </div>
            </div>
        </div>
        <div class="weui_actionsheet_action">
            <ul class="shopShoppingMenu style clearfix">
                <li class="four">
                    <button class="btnBuy">立刻购买</button>
                </li>
                <li class="three">
                    <button class="btnCart">加入购物车</button>
                </li>
            </ul>
            <button class="btnSure hide">确定</button>
        </div>
    </div>
</div>
<div class="foot">
  <ul class="shopShoppingMenu clearfix">
      <li class="first">
          <a v-link="'/shops/shopsInfor'">
              <i class="fa fa-tag"></i>
              商铺
          </a>
      </li>
      <li class="second">
          <a :class="{'active':active}" @click="collection()">
              <i class="fa" :class="{'fa-star-o':notCollectionActive,'fa-star':collectionActive}"></i>
              收藏
          </a>
      </li>
      <li class="three">
          <button class="btnCart">加入购物车</button>
      </li>
      <li class="four">
          <button class="btnBuy">立刻购买</button>
      </li>
  </ul>
</div>

</template>
<script>
   import Spinner from '../components/spinner.vue'
   export default {
      components: {
         //注册组件
           Spinner
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
          dataJson:[]
        }
      },
      ready () {
        document.title = '商铺商品详情'
        this.$http.get('../../static/data/shopsShoppingInfor.json').then(function(response){
           this.dataJson = response.data
        }, function(response){
          // 响应错误回调
        })
      },
      methods: {
        onShow: function () {
          this.hide = !this.hide
        },
        showModal :function(){
          this.addClassFade = true
          this.addClassActionsheet = true
        },
        hideModal: function(){
          this.addClassFade = false
          this.addClassActionsheet = false
        },
        onSelect:function(index,shopInforSize){
          this.shopInforSizes = shopInforSize
          this.shopInforSizes.forEach(function(shopInforSize, i) {
            if(i === index)
              shopInforSize.active = true;
            else
              shopInforSize.active = false;
          })
        },
        selectShoop:function(){
          this.shopActive=true
          this.commentActive=false
        },
        selectComment:function(){
          this.shopActive=false
          this.commentActive=true
          this.$http.get('../../static/data/shopsShoppingComment.json').then(function(response){
             this.commentLists = response.data
          }, function(response){
            // 响应错误回调
          })
        },
        collection:function(){
          this.active = true
          this.notCollectionActive = false
          this.collectionActive = true
        },
        returnPage:function(){
          window.history.go(-1)
        }
      }
    }
</script>
