<template>
  <Bar></Bar>
  <div class="bd absolute pt">
    <ul class="entryList mt0 style">
      <li v-for="commentList in list">
        <div class="weui_cells mt0 bt0">
          <div class="weui_cell style3">
            <div class="weui_cell_bd weui_cell_primary">
              <p>{{commentList.mchName}}</p>
            </div>
            <div class="weui_cell_ft">{{commentList.createTime}}</div>
          </div>
        </div>
        <div>
          <div class="couponImg style">
            <img v-if="commentList.coverPhoto!=null" :src="commentList.coverPhoto" style="width:100%;"/>
            <img v-else src="../../../static/images/shopsImg.jpg" style="width:100%;"/>
          </div>
        </div>
        <div class="inforList">
          <p class="clearfix">
            <span class="left shopsName">{{commentList.goodsName}}</span>
          </p>
          <p>
            <span>{{commentList.specName}}</span>
          </p>
          <p class="clearfix">
            <span class="left shopsName" v-if="commentList.evaLevel==0">好评</span>
            <span class="left shopsName" v-if="commentList.evaLevel==1">中评</span>
            <span class="left shopsName" v-if="commentList.evaLevel==2">差评</span>
          </p>
        </div>

        <div v-if="commentList.evaluation!=null" class="shopsInfor style">
          {{commentList.evaluation}}
        </div>
        <div v-else class="shopsInfor style">
          无评价内容
        </div>
      </li>
    </ul>
  </div>
</template>

<style>
  .entryList>li>a, .entryList>li>div {
    display: table;
    width: 94%;
    height: 100%;
    border-top: 1px solid #efefef;
    padding: .625rem 3%;
  }
  .entryList>li .couponImg{width: 20%;}
</style>
<script>
  import Bar from '../components/shopHead.vue'
  import mchService from '../../api/mchService'
  export default {
    components: {
      Bar
    },
    data () {
      return {
        hide:true,
        list:[]
      }
    },
    ready () {
      document.title = '个人评价记录'
      this.imageUrl = mchService.imgUrl
      mchService.evaList(this)
    },
    methods: {
      onShow: function () {
        this.hide = !this.hide
      }
    }
  }
</script>
