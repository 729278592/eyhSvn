webpackJsonp([30,61],{161:function(s,i){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i["default"]={data:function(){return{show:!1,shops:"",list:[],hide:!0}},ready:function(){document.title="待付款-个人",this.$http.get("../../static/data/waitPayOrderPerson.json").then(function(s){this.list=s.data},function(s){})},methods:{onShow:function(){this.hide=!this.hide},showModal:function(s){this.show=!0,this.shops=s},cancleDelete:function(){this.show=!1},sureDeleta:function(){this.show=!1;for(var s=0;s<this.list.length;s++)this.list.$remove(this.shops)},returnPage:function(){window.history.go(-1)}}}},236:function(s,i){s.exports=' <div class=hd> <a> <a class=return @click=returnPage()></a> </a> 家得利 <div class="right nav_block"> <a v-link="\'/user/shopCart\'" class=shop_cat></a> <a class=dot_block @click.stop=onShow></a> <ul class=nav_link :class="{\'hide\':hide}"> <li> <a v-link="\'/user/myMessage\'"> 消息 </a> </li> <li> <a v-link="\'/home/index\'"> 首页 </a> </li> </ul> </div> </div> <div class="bd absolute pt"> <div id=order> <ul class=orderList> <li v-for="shop in list"> <div class="orderHead clearfix"> <span class="orderNum left">{{shop.name}}</span> <span class="time right"><span class=verdana>{{shop.time}}</span></span> </div> <a v-for="shopping in shop.shoppings" v-link="\'/user/orderInfor\'"> <div class=orderCon> <div class=orderImg v-html=shopping.img></div> <div class=orderInfor> <p class="top clearfix"> <span class=left>{{shopping.title}}</span> </p> <p class=""> <span class=color>{{shopping.color}}</span> </p> <p class="bottom clearfix"> <span class=left>￥<span class=verdana>{{shopping.price}}</span></span> <span class=right>x{{shopping.num}}</span> </p> </div> </div> </a> <div class=orderFt> <div class="weui_cells mt0"> <div class=weui_cell> <div class="weui_cell_bd weui_cell_primary"> <p>共{{shop.allNum}}件商品</p> </div> <div class="weui_cell_ft style">总计 : ￥{{shop.allMoney}} (运费￥{{shop.freight}})</div> </div> </div> <div class="opreationBtn clearfix"> <a class="btn right" @click=showModal(shop)>删除</a> <a class="btn right" v-link="\'/user/payChioce\'">付款</a> </div> </div> </li> </ul> </div> </div> <div class="weui_dialog_confirm modal-mask" id=dialog1 v-show=show transition=modal> <div class=weui_mask></div> <div class="weui_dialog weui-dialog-transition"> <div class=weui_dialog_hd><strong class=weui_dialog_title>确定删除订单？</strong></div> <div class=weui_dialog_ft> <a href=javascript:; class="weui_btn_dialog default" @click=cancleDelete()>取消</a> <a href=javascript:; class="weui_btn_dialog primary" @click=sureDeleta(shopping)>确定</a> </div> </div> </div> '},296:function(s,i,a){var l,e;l=a(161),e=a(236),s.exports=l||{},s.exports.__esModule&&(s.exports=s.exports["default"]),e&&(("function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports).template=e)}});
//# sourceMappingURL=30.fae45beae080ec7003d9.js.map