<template>
  <Bar></Bar>
  <div class="bd absolute pd48">
    <div class="weui_cells weui_cells_access mt0">
        <div class="weui_cell">
            <div class="weui_cell_bd weui_cell_primary">
                <p>
                    <span class="text">
                        银行卡名
                    </span>
                </p>
            </div>
            <div class="weui_cell_ft">{{personList.bankName}}</div>
        </div>
        <div class="weui_cell">
            <div class="weui_cell_bd weui_cell_primary">
                <p>
                    <span class="text">
                        开户行地区
                    </span>
                </p>
            </div>
            <div class="weui_cell_ft">{{personList.openArea}}</div>
        </div>
        <div class="weui_cell">
            <div class="weui_cell_bd weui_cell_primary">
                <p>
                    <span class="text">
                        开户姓名
                    </span>
                </p>
            </div>
            <div class="weui_cell_ft">
              {{personList.openName}}
            </div>
        </div>

        <div class="weui_cell">
            <div class="weui_cell_bd weui_cell_primary">
                <p>
                    <span class="text">
                        银行卡号
                    </span>
                </p>
            </div>
            <div class="weui_cell_ft">
                {{personList.cardNo}}
            </div>
        </div>
    </div>
</div>
<div class="weui_btn_area ">
    <a class="weui_btn  weui_btn_primary" v-link="'/auth/login'">修改</a>
</div>
</template>

<style scoped>
  .text{top:0;}
  .weui_cells_access .weui_cell_ft:after{border:none;}
</style>

<script>
  import Bar from '../components/headBar.vue'

  export default {
     components: {
          Bar
      },
      data () {
        return {
          hide:true,
          personList:[]
        }
      },
      ready () {
        document.title = '个人信息'
        this.$http.get(website.linkObj.presentInfor).then(function(response){
          var res = response.data
          console.log(JSON.stringify(res.datas));
          if(res.status="ok"){
            this.personList = res.datas
          }else{
            alert(res.message)
          }
        }, function(response){
          // 响应错误回调
        })
      },
      methods: {
        onShow: function () {
          this.hide = !this.hide
        }
      }
    }
</script>
