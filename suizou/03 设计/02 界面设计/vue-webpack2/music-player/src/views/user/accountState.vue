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
  <div class="bd absolute pt" v-for="stateInfor in list">
    <div class="agentStyle">
        <p class="title">审核状态</p>
        <div class="agentStyleCon" v-if="this.stateHandle==stateInfor.state">
            <img src="../../../static/images/handling.png" alt=""/>
            <p class="agentTitle">审核处理中</p>
            <p>您的申请已提交成功,正在审核中,请耐心等待</p>
        </div>
        <div class="agentStyleCon" v-if="this.statePass==stateInfor.state">
            <img src="../../../static/images/notPass.png" alt=""/>
            <p class="agentTitle">审核未通过</p>
            <p>原因 : 营业执照照片模糊不清,请重新提交申请</p>
        </div>
        <div class="agentStyleCon" v-if="this.stateNotPass==stateInfor.state">
            <img src="../../../static/images/pass.png" alt=""/>
            <p class="agentTitle">审核通过</p>

            <p>请用前往 www.quanfan.com/stores/login.do</p>

            <p>登录管理您的商家</p>
        </div>
        <div class="agentStyleFt">
            <p>提交时间 <span class="verdana">{{stateInfor.startTime}}</span></p>

            <p>结束时间 <span class="verdana">{{stateInfor.endTime}}</span></p>
        </div>
    </div>
    <div class="agentInfor">
        <p class="title">商家信息</p>
        <div>
            <span>公司名称</span>
            <span class="companyName">{{stateInfor.companyName}}</span>
        </div>
        <div>
            <span>姓　　名</span>
            <span class="companyName">{{stateInfor.personName}}</span>
        </div>
        <div>
            <span>联系电话</span>
            <span class="companyName">{{stateInfor.phone}}</span>
        </div>
        <div>
            <span>所在地区</span>
            <span class="companyName">{{stateInfor.address}}</span>
        </div>
        <div>
            <span>详细地址</span>
            <span class="companyName">{{stateInfor.inforAddress}}</span>
        </div>
        <div>
            <span>主营内容</span>
            <span class="companyName">{{stateInfor.mainCon}}</span>
        </div>
        <div>
            <span>营业执照</span>

            <p><img src="../../../static/images/zz.jpg" alt=""/></p>

            <p><img src="../../../static/images/zz.jpg" alt=""/></p>
        </div>
    </div>
</div>
</template>
<script>
  export default {
      data () {
        return {
          hide:true,
          stateHandle:0,
          statePass:1,
          stateNotPass:2,
          list:[]
        }
      },
      ready () {
        document.title = '申请状态'
        this.$http.get('../../static/data/accountState.json').then(function(response){
           this.list = response.data
        }, function(response){
          // 响应错误回调
        })
      },
      methods: {
        onShow: function () {
          this.hide = !this.hide
        },
        returnPage:function(){
          window.history.go(-1)
        }
      }
    }
</script>
