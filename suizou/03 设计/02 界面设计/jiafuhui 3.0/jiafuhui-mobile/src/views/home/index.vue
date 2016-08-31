<template>
  <!-- <div class="pg" v-if="display == true">
    <div class="pg1" v-if="display1 == true">
      <span></span>
      <a @click="click">联系我们</a>
    </div>
    <div class="pg2" v-if="display2 == true">
      <div class="main">
        <p class="wx"><img src="/static/images/home/ew.jpg" width="100px"></p>
        <p class="lxwm">联系我们 <i>CONTACT US</i></p>
        <div style="margin-left:40px;"><p class="zx">咨询热线：400-110-8590</p>
        <p>商家加盟：159-229-33366<span>（周先生）</span></p>
        <p>应聘咨询：151-238-35270</p>
        <p class="email">咨询邮箱：zjy@jiafuhui.net</p></div>
      </div>
    </div>
  </div> -->
  <div class="home weui_tab">
    <div class="weui_tab_bd">
      <swiper class="banner" :list="banner_list"  height="180px"></swiper>
      <flexbox class="vux-1px-tb top-group">
          <flexbox-item class="vux-1px-r vux-center-v shoes" style="height:80px;" v-link="'/shoes/shine_shoes'">鞋先生<img src="/static/images/home/shoes.png" width="95" /></flexbox-item>
          <flexbox-item class="armoire vux-center-v" style="height:80px;" v-link="'/wardrobe/clean_up'"><span>衣柜小姐<br/><small>更专业更划算</small></span><img src="/static/images/home/armoire.png" width="31" ></flexbox-item>
      </flexbox>
      <flexbox style="height: 185px;" class="vux-1px-tb vux-1px-l vux-1px-r middle-group">
        <flexbox-item class="vux-1px-r cleaning" style="height:185px;" v-link="'/homeservice/cleaning'">
          <span>日常保洁<small>急速上门</small></span>
          <div class="center">
            <img src="/static/images/home/cleaning.png" width="79" />
          </div>
        </flexbox-item>
        <flexbox-item style="height:185px;">
          <flexbox orient="vertical">
              <flexbox-item class="vux-1px-b">
              <flexbox>
                    <flexbox-item class="vux-1px-r mab" style="height:92px;" v-link="'/homeservice/motherbaby'">
                      <span>母婴月嫂</span>
                      <div class="center">
                        <i class="icon-mab"></i>
                      </div>
                    </flexbox-item>
                    <flexbox-item class="armoire" style="height:92px;" v-link="'/homeservice/wardrobe'">
                      <span>衣橱管理</span>
                      <div class="center">
                        <i class="icon-armoire"></i>
                      </div>
                    </flexbox-item>
                </flexbox>
              </flexbox-item>
              <flexbox-item>
                <flexbox>
                    <flexbox-item class="vux-1px-r chaperonage" style="height:91px;" v-link="'/homeservice/nursing'">
                      <span>医患陪护</span>
                      <div class="center">
                        <i class="icon-chaperonage"></i>
                      </div>
                    </flexbox-item>
                    <flexbox-item class="shoes" style="height:91px;" v-link="'/homeservice/shoes'">
                      <span>鞋具护理</span>
                      <div class="center">
                        <i class="icon-shoes"></i>
                      </div>
                    </flexbox-item>
                </flexbox>
            </flexbox-item>
          </flexbox>
        </flexbox-item>
      </flexbox>
      <activity-panel class="activity-panel" header="优惠中心" :list="list" :more="{title:'更多', url:'/activities'}"></activity-panel>
    </div>
    <tabbar class="menu">
        <tabbar-item selected>
          <i slot="icon" class="icon-home_active"></i>
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item link="/order/list">
          <i slot="icon" class="icon-order"></i>
          <span slot="label">订单</span>
        </tabbar-item>
        <tabbar-item link="/user">
          <i slot="icon" class="icon-user"></i>
          <span slot="label">我的</span>
        </tabbar-item>
      </tabbar>
  </div>
	
</template>

<script>
import Flexbox from 'vux/src/components/flexbox'
import FlexboxItem from 'vux/src/components/flexbox-item'
import { Tabbar, TabbarItem } from 'vux/src/components/tabbar'
import Swiper from 'vux/src/components/swiper'
import ActivityPanel from 'components/activity-panel'

export default {
  data () {
    return {
      // display2: false,
      // display1: true,
      // display3: false,
      // display: true,
      banner_list: [],
      list: []
    }
  },
  ready () {
    document.title = '家服汇'
    this.$progress.start()
    // 获取首页数据
    this.$http.get('./static/data/home.json').then((response) => {
      this.$progress.finish()
      this.banner_list = response.data.banner_list
      this.list = response.data.list
    }, (response) => {
      this.$progress.failed()
    })
  },
  components: {
    Tabbar,
    TabbarItem,
    Swiper,
    Flexbox,
    FlexboxItem,
    ActivityPanel
  },
  methods: {
    // click: function () {
    //   this.display2 = true
    //   this.display1 = false
    //   setTimeout(() => {
    //     this.display2 = false
    //     this.display3 = true
    //     this.display = false
    //     // console.log(this.display3)
    //   }, 4000)
    // }
  }
}
</script>

<style lang="scss">
	.banner{
		margin-bottom: 1.2rem;
	}
	.vux-flexbox-item{
		margin-left:0 !important;
		margin-top:0 !important;
	}
</style>