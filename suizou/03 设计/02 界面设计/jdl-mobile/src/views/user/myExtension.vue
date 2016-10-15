<template>
<Bar></Bar>
<div class="bd absolute pt">
  <div class="applicatioOpetion">
      <ul class="applicatioNav clearfix">
          <li>
              <a :class="{'active':this.memberActive}" @click="selectMember()">会员</a>
          </li>
          <li>
              <a :class="{'active':this.bussionActive}" @click="selectBussion()">商家</a>
          </li>
      </ul>
  </div>
  <div id="extension">
    <ul class="merberMenu styleHide" :class="{'active':this.memberActive}">
        <li v-for="memberList in list">
            <p class="clearfix">
                <span class="left phone verdana">{{memberList.mobile}}</span>
                <span class="right score">收益
                    <span class="color"><span class="verdana">{{memberList.getScore}}</span>积分</span>
                </span>
            </p>

            <p class="clearfix">
                  <span class="left leave" v-if="memberList.type==0">被推荐人的订单被确认</span>
                  <span class="left leave" v-if="memberList.type==1">被推荐人升级金钻会员</span>
                  <span class="left leave" v-if="memberList.type==3">被推荐人已注册</span>
                <span class="right money">累计交易
                    <span class="verdana">￥{{memberList.totalConsumption}}</span>
                </span>
            </p>

            <p class="clearfix">
                <span class="left time">加入时间 : <span class="verdana">{{memberList.createTime}}</span></span>
            </p>
        </li>
    </ul>
    <ul class="merberMenu styleHide" :class="{'active':this.bussionActive}">
        <li v-for="bussionList in list">
            <p class="clearfix">
                <span class="left phone verdana">{{bussionList.mc}}</span>
                <span class="right score">收益
                    <span class="color"><span class="verdana">{{bussionList.getScore}}</span>积分</span>
                </span>
            </p>

            <p class="clearfix">
                <span class="left leave" v-if="bussionList.type==2">商户的订单被确认</span>
                <span class="left leave" v-if="bussionList.type==4">被推荐商户已注册</span>
                <span class="right money">累计交易
                    <span class="verdana">￥{{bussionList.totalConsumption}}</span>
                </span>
            </p>

            <p class="clearfix">
                <span class="left time">加入时间 : <span class="verdana">{{bussionList.createTime}}</span></span>
            </p>
        </li>
    </ul>

  </div>
</div>
</template>
<script>
  import Bar from '../components/headBar.vue'
  import userService from '../../api/userService'
  export default {
     components: {
          Bar
      },
      data () {
        return {
          hide:true,
          memberActive:true,
          bussionActive:false,
          shoppingActive:false,
          list:[]
        }
      },
      ready () {
        document.title = '我的推广'
        this.imageUrl = userService.imgUrl
          var myExtensionArr = {type:0}
         userService.myExtension(this,myExtensionArr)
      },
      methods: {
        onShow: function () {
          this.hide = !this.hide
        },
         selectMember:function(){
           this.memberActive=true
           this.bussionActive=false
           this.shoppingActive=false
           var myExtensionArr = {type:0}
           userService.myExtension(this,myExtensionArr)
         },
         selectBussion:function(){
            this.memberActive=false
            this.bussionActive=true
            this.shoppingActive=false
            var myExtensionArr = {type:2}
            userService.myExtension(this,myExtensionArr)
         }
      }
    }
</script>
