<template>
  <Bar></Bar>
  <div class="bd absolute pt">
    <div class="agentStyle">
        <p class="title">审核状态</p>
        <div class="agentStyleCon" v-if="0==stateInfor.status">
            <img src="../../../static/images/handling.png" alt=""/>
            <p class="agentTitle">审核处理中</p>
            <p>您的申请已提交成功,正在审核中,请耐心等待</p>
        </div>
        <div class="agentStyleCon" v-if="1==stateInfor.status">
            <img src="../../../static/images/pass.png" alt=""/>
            <p class="agentTitle">审核通过</p>
            <p>请用前往 www.quanfan.com/stores/login.do</p>
            <p>登录管理您的商家</p>
        </div>
        <div class="agentStyleCon" v-if="2==stateInfor.status">
            <img src="../../../static/images/notPass.png" alt=""/>
            <p class="agentTitle">审核未通过</p>
            <p>{{stateInfor.auditRemark}}</p>
        </div>
        <div class="agentStyleFt">
            <p>提交时间 <span class="verdana">{{stateInfor.createTime}}</span></p>
            <p>结束时间 <span class="verdana">{{stateInfor.auditTime}}</span></p>
        </div>
    </div>
    <div class="agentInfor">
        <p class="title">商家信息</p>
        <div>
            <span>公司名称</span>
            <span class="companyName">{{stateInfor.mchName}}</span>
        </div>
        <div>
            <span>姓　　名</span>
            <span class="companyName">{{stateInfor.realname}}</span>
        </div>
        <div>
            <span>联系电话</span>
            <span class="companyName">{{stateInfor.mobile}}</span>
        </div>
        <div>
            <span>所在地区</span>
            <span class="companyName">{{areaInfor}}</span>
        </div>
        <div>
            <span>详细地址</span>
            <span class="companyName">{{stateInfor.adress}}</span>
        </div>
        <div>
            <span>主营内容</span>
            <span class="companyName">{{stateInfor.businessContent}}</span>
        </div>
        <div>
            <span>营业执照</span>
            <p>
            <!--               <img v-if="stateInfor.businessLicense!=undefined" :src="this.imageUrl+stateInfor.businessLicense" alt=""/>
-->
               <!--<img  src="../../../static/images/zz.jpg" alt=""/>-->

            </p>
        </div>
    </div>
</div>
</template>
<script>
     import Bar from '../components/shopHead.vue'
     import website from '../api/website'
     export default {
        components: {
             Bar
         },
      data () {
        return {
          hide:true,
          stateHandle:0,
          statePass:1,
          stateNotPass:2,
          stateInfor:[],
          imageUrl:"",
          areaInfor:""
        }
      },
      ready () {
        document.title = '申请状态'

        this.stateInfor = eval("("+localStorage.getItem('data')+")")
        this.areaInfor = this.stateInfor.province+" "+this.stateInfor.city+" "+this.stateInfor.area
        this.imageUrl = website.imageUrl
      },
      methods: {
        onShow: function () {
          this.hide = !this.hide
        }
      }
    }
</script>
