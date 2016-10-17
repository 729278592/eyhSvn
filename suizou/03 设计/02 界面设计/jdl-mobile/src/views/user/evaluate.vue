<template>
 <Bar></Bar>
<div class="bd absolute pd48" v-for="evaluates in list">
      <div id="order">
          <ul class="orderList">
              <li v-for="evaluateList in evaluates.evaluate">
                  <div href="orderInfor.html">
                      <div class="orderHead clearfix">
                          <span class="orderNum left">{{evaluateList.title}}</span>
                          <span class="time right">
                              <span class="verdana">{{evaluateList.time}}</span>
                          </span>
                      </div>
                      <div class="orderCon">
                          <div class="orderImg">
                              <img :src="evaluateList.src" alt=""/>
                          </div>
                          <div class="orderInfor">
                              <p class="top clearfix">
                                  <span class="left">{{evaluateList.name}}</span>
                              </p>
                              <p class=" ">
                                  <span class="color">{{evaluateList.color}}</span>
                              </p>

                          </div>
                      </div>
                      <div class="orderFt">
                          <textarea placeholder="发起评价"  class="evaluate"></textarea>
                          <div class="weui_cell style">
                              <div class="weui_cell_hd"></div>
                              <div class="weui_cell_bd weui_cell_primary">
                                  <div class="weui_cells weui_cells_checkbox mt0 bt0">
                                      <label class="weui_cell weui_check_label bt0 w30 first p0" for={{evaluateList.goodId}}>
                                          <div class="weui_cell_hd">
                                              <input type="radio" name={{evaluateList.nameCheckbox}} class="weui_check" id={{evaluateList.goodId}}>
                                              <i class="weui_icon_checked"></i>
                                          </div>
                                          <div class="weui_cell_bd weui_cell_primary">
                                              <p>好评</p>
                                          </div>
                                      </label>
                                      <label class="weui_cell weui_check_label bt0 w30 second p0" for={{evaluateList.centerId}}>
                                          <div class="weui_cell_hd">
                                              <input type="radio" class="weui_check" name={{evaluateList.nameCheckbox}} id={{evaluateList.centerId}}>
                                              <i class="weui_icon_checked"></i>
                                          </div>
                                          <div class="weui_cell_bd">
                                              <p>中评</p>
                                          </div>
                                      </label>
                                      <label class="weui_cell weui_check_label bt0 w30 last p0" for={{evaluateList.badId}}>
                                          <div class="weui_cell_hd">
                                              <input type="radio" name={{evaluateList.nameCheckbox}} class="weui_check" id={{evaluateList.badId}}>
                                              <i class="weui_icon_checked"></i>
                                          </div>
                                          <div class="weui_cell_bd">
                                              <p>差评</p>
                                          </div>
                                      </label>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </li>
          </ul>
          <div class="evaluateScore">
              商铺评价 :
              <ul class="starList clearfix">
                  <li v-for="start in starList" :class="{'active':start.active}" @click="addActive(start,$index)">
                      <i class="fa fa-star-o"></i>
                  </li>
              </ul>
              <!--<span class="fraction hide">-->
                  <!--<span class="numFraction">0</span> 分-->
              <!--</span>-->
              <input type="hidden" id="inputStar" value="0"/>
          </div>
      </div>
      </div>
      <div class="notConTip hide">
          <img src="../../../static/images/notContent.png" alt=""/>
          <p class="notInfor">
              暂无数据
          </p>
      </div>
  </div>
  <div class="weui_btn_area fixed">
      <input type="submit" class="weui_btn b0 weui_btn_primary" value="提交">
  </div>
</template>
<script>
  import Bar from '../components/headBar.vue'
  export default {
     components: {
          Bar
      },
      data () {
        return {
          hide:true,
          list:[],
          starList:[
            {active:false,num:2},
            {active:false,num:4},
            {active:false,num:6},
            {active:false,num:8},
            {active:false,num:10}
          ]
        }
      },
      ready () {
        document.title = '发起评价'
        this.$http.get('../../static/data/evaluate.json').then(function(response){
           this.list = response.data
        }, function(response){
          // 响应错误回调
        })
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
        }
      }
    }
</script>
