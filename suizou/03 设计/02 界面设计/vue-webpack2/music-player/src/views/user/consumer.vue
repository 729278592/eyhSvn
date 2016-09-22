<template>
     <div class="hd">
           <a>
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
     <div class="bd absolute pd48">
        <ul class="shop_menu clearfix style">
         <li v-for="item in items" :class="{'active':item.active}" @click="onSelect($index)">
            <a>
               {{item.con}}
            </a>
         </li>
      </ul>
      <div class="weui_cells weui_cells_access top0 mt0">
          <a class="weui_cell" v-link="'/user/consumerInfor'" v-for="consumer in list">
              <div class="weui_cell_bd weui_cell_primary ">
                  <p>
                      <span class="text">
                          {{consumer.consumerTitle}}
                      </span>
                  </p>
              </div>
              <div class="weui_cell_ft">{{consumer.consumerTime}}</div>
          </a>
        </div>
      </div>
       <div class="foot">
         <ul class="tabMenu clearfix">
             <li>
                 <a v-link="'/home/index'">
                     <i class="fa fa-home"></i><br/>
                     <span>首页</span>
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
</template>
<script>
  export default {
    data () {
      return {
        hide:true,
        list: [],
        items: [
            	{con:"公告",active: true,name:"consumerList",orderHide:false},
              {con:"新闻",active: false,name:"consumerNews",orderHide:false},
              {con:"活动",active: false,name:"consumerActive",orderHide:true}
            ]
      }
    },
    ready () {
      document.title = '公告'
     this.$http.get('../../static/data/consumerList.json').then(function(response){
         this.list = response.data
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
          this.list = response.data
        }, function(response){
          // 响应错误回调
        })
      },
      returnPage:function(){
        window.history.go(-1)
      }
    }
  }
</script>
