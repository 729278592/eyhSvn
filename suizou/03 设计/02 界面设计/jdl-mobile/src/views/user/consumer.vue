<template>
     <Bar></Bar>
     <div class="bd absolute pd48">

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
        list: []
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
      }
    }
  }
</script>
