<template>
  <Bar></Bar>
  <div class="bd absolute pd48">
    <form action="#" id="form" onsubmit="return false">
        <div class="weui_cells weui_cells_form mt0 wauto">
            <div class="weui_cell">
                <div class="weui_cell_hd">
                    <label class="weui_label">
                        <span class="span_icon spa_sex"></span>
                    </label>
                </div>
                <div class="weui_cell_bd weui_cell_primary">
                    <div class="weui_cells weui_cells_checkbox mt0 bt0 bg0">
                        <label class="weui_cell weui_check_label bt0 w30 p0" v-for="itemType in item" for={{itemType.id}} @click="checkClick(itemType,$index)">
                            <div class="weui_cell_hd">
                                <input type="radio" name="checkbox1" checked={{itemType.check}} class="weui_check" id={{itemType.id}}>
                                <i class="weui_icon_checked"></i>
                            </div>
                            <div class="weui_cell_bd weui_cell_primary">
                                <p>{{itemType.sex}}</p>
                            </div>
                        </label>

                    </div>
                </div>
            </div>
        </div>
        <div class="weui_btn_area fixed">
            <input type="submit" class="weui_btn b0 weui_btn_primary" @click="save()" value="保存">
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
          sex:"",
          num:"",
          item:[
            {check:false,type:0,id:11,sex:"未知"},
            {check:false,type:1,id:12,sex:"男"},
            {check:false,type:2,id:13,sex:"女"}
          ]
        }
      },
      ready () {
        document.title = '修改性别'
         this.sex = this.$route.params.sex
         this.item[this.sex].check=true
        console.log(this.$route.params.sex)
      },
      methods: {
        onShow: function () {
          this.hide = !this.hide
        },
        save:function(){
          var saveSexArr = {type:this.num}
          userService.saveSex(this,saveSexArr)
        },
        checkClick:function(checkType,i){
          for(var a = 0;a<this.item.length;a++){
            this.item[a].check = false
          }
          checkType.check = true
          this.num = checkType.type
          console.log(JSON.stringify(checkType))
          console.log(checkType.check)
        }
      }
    }
</script>
