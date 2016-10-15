<template>
 <Bar></Bar>
<div class="bd absolute pt">
  <form action="#" id="form" onsubmit="return false">
      <div class="weui_cells weui_cells_form mt0">
          <div class="memberTitle">请选择会员等级</div>
          <div class="weui_cells weui_cells_checkbox mt0" v-for="data in list">
              <label class="weui_cell weui_check_label color" for={{data.id}} @click="getId(data)">
                  <div class="weui_cell_hd">
                      <input type="radio" class="weui_check" name="checkbox1" id={{data.id}}>
                      <i class="weui_icon_checked"></i>
                  </div>
                  <div class="weui_cell_bd weui_cell_primary">
                      <p style="text-align: right;color: #666;">
                          <span style="position: relative;left: -50%;color: #333;">{{data.name}}</span>
                          ￥<span class="verdana">{{data.price}}</span>
                      </p>
                  </div>
              </label>
          </div>
      </div>
      <div class="weui_btn_area ">
          <a class="weui_btn  weui_btn_primary" v-link="{ name: 'memberPayChioce', params: {upDateId: this.id,money:this.price}}">立即升级</a>
      </div>
  </form>
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
          list:[],
          id:"",
          price:""
        }
      },
      ready () {
        document.title = '会员升级'
        userService.memberUpgrade(this)
      },
      methods: {
        onShow: function () {
          this.hide = !this.hide
        },
        getId:function(data){
          this.id = data.id
          this.price = data.price
        }
      }
    }
</script>
