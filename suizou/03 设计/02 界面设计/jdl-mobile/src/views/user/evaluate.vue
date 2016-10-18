<template>
 <Bar></Bar>
  <div class="bd absolute pd48">
      <div id="order">
          <ul class="orderList">
              <li>
                  <div>
                      <div class="orderHead clearfix">
                          <span class="orderNum left">{{list.mchName}}</span>
                          <span class="time right">
                              <span class="verdana">{{list.createTime}}</span>
                          </span>
                      </div>
                     <div class="style" v-for="evaluateList in list.list">
                       <div class="orderCon">
                         <div class="orderImg">
                           <img :src="evaluateList.pic" alt=""/>
                         </div>
                         <div class="orderInfor">
                           <p class="top clearfix">
                             <span class="left">{{evaluateList.goodsName}}</span>
                           </p>
                           <p class=" ">
                             <span class="color">{{evaluateList.specName}}</span>
                           </p>
                         </div>
                       </div>
                       <div class="orderFt">
                         <textarea placeholder="发起评价" class="evaluate" v-model="evaluateList.evaContent"></textarea>
                         <div class="weui_cell style">
                           <div class="weui_cell_hd"></div>
                           <div class="weui_cell_bd weui_cell_primary">
                             <div class="weui_cells weui_cells_checkbox mt0 bt0">
                               <label class="weui_cell weui_check_label bt0 w30 first p0" >
                                 <div class="weui_cell_hd">
                                   <input type="radio"  class="weui_check" name="level{{$index}}" v-model="evaluateList.level" value="1">
                                   <i class="weui_icon_checked"></i>
                                 </div>
                                 <div class="weui_cell_bd weui_cell_primary">
                                   <p>好评</p>
                                 </div>
                               </label>
                               <label class="weui_cell weui_check_label bt0 w30 second p0" >
                                 <div class="weui_cell_hd">
                                   <input type="radio"  class="weui_check" name="level{{$index}}" v-model="evaluateList.level" value="2">
                                   <i class="weui_icon_checked"></i>
                                 </div>
                                 <div class="weui_cell_bd weui_cell_primary">
                                   <p>中评</p>
                                 </div>
                               </label>
                               <label class="weui_cell weui_check_label bt0 w30 last p0" >
                                 <div class="weui_cell_hd">
                                   <input type="radio"  class="weui_check" name="level{{$index}}" v-model="evaluateList.level" value="3">
                                   <i class="weui_icon_checked"></i>
                                 </div>
                                 <div class="weui_cell_bd weui_cell_primary">
                                   <p>差评</p>
                                 </div>
                               </label>
                             </div>
                           </div>
                         </div>
                       </div>
                     </div>
                  </div>
              </li>
          </ul>
          <div class="evaluateScore">
              商铺评分 :
              <ul class="starList clearfix">
                  <li v-for="start in starList" :class="{'active':start.active}" @click="addActive(start,$index)">
                      <i class="fa fa-star-o"></i>
                  </li>
              </ul>
          </div>
      </div>
  </div>
  <div class="notConTip hide">
          <img src="../../../static/images/notContent.png" alt=""/>
          <p class="notInfor">
              暂无数据
          </p>
      </div>
  <div class="weui_btn_area fixed">
    <a class="weui_btn b0 weui_btn_primary" @click="btnSubmit()">提交</a>
  </div>
  <Toast :toastshow.sync="toastshow" :toasttext="toasttext"></Toast>
</template>

<style>
  .orderHead{background: #fff;}
  .orderList>li{background: transparent;}
  .style{margin-bottom: 10px;background: #fff;}
  .evaluateScore{border-top: none;margin-top: 0;}
</style>

<script>
  import Bar from '../components/headBar.vue'
  import userService from '../../api/userService'
  import Toast from '../components/toast.vue'
  export default {
     components: {
          Bar,
          Toast
      },
      data () {
        return {
          hide:true,
          list:[],
          toastshow:false,
          toasttext:"",
          textareaText:"",
          levelBad:"",
          levelGood:"",
          levelOk:"",
          score:"",
          orderCon:[],
          starList:[
            {active:false,num:1},
            {active:false,num:2},
            {active:false,num:3},
            {active:false,num:4},
            {active:false,num:5}
          ]
        }
      },
      ready () {
        document.title = '发起评价';
        var mchIdArr = {id:this.$route.query.orderId};
        userService.evaluateMchId(this,mchIdArr);
      },
      methods: {
        onShow: function () {
          this.hide = !this.hide
        },

        addActive:function(evaluates,index){
          for(var i = 0;i<index+1;i++){
            this.starList[i].active = true
          }
          for(var j = index+1;j<(this.starList.length);j++){
            this.starList[j].active = false
          }
          this.score = evaluates.num
        },
        btnSubmit:function () {
          var len = this.list.list.length;
          var order = [];
          for(var i= 0;i<len;i++){
            var listOrder = this.list.list[i];
            order.push({
              itemId:listOrder.itemId,
              level :listOrder.level,
              evaContent :listOrder.evaContent
            });
          }

          var evaluedate = {
            orderId:this.$route.query.orderId,
            score:this.score,
            list:order
          };

          for(var i= 0;i<len;i++){
            var listOrder = this.list.list[i];
            if(!listOrder.evaContent){
              this.$set('toasttext','请添加评价内容');
              this.$set('toastshow',true);
              return
            }
            console.log(listOrder.level)
            if(!listOrder.level){
              this.$set('toasttext','请选评论级别');
              this.$set('toastshow',true);
              return
            }

          }
          console.log(this.score)
          if(!this.score){
            this.$set('toasttext','请打评分');
            this.$set('toastshow',true);
            return
          }
          this.$set('toasttext','评论成功');
          this.$set('toastshow',true);
          var that = this
          setTimeout(function(){
            userService.saveEva(that,{jsonStr:JSON.stringify(evaluedate)});
          },300)
        }
      }
    }
</script>
