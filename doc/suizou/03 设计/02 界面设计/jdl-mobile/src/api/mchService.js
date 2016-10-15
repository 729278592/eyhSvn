import router from '../router'
import authService from './authService'
import {API_ROOT} from '../config'
import {imgUrlFric} from '../config'
import {imgUrl} from '../config'


export default {
  imgUrlFric: imgUrlFric,
  imgUrl: imgUrl,


  //商家个人中心
  personCenter(context) {
    context.$progress.start()
    context.$http.post(API_ROOT + "mobile/mch/personCenter.do").then(function (response) {
      context.$progress.finish()
      var res = response.data
      if (res.status == "ok") {
        context.lists = res.datas
        console.log(JSON.stringify(res.datas))
      } else {
        alert(res.message);
      }
    }, function (response) {
      context.$progress.failed()
      // 响应错误回调
    })
  },

  //我的订单-个人
  myOrder(context,orderStatus) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/mch/getOrderList.do",orderStatus).then(function(response){
      context.$progress.finish()
      var res = response.data
      if(res.status == "ok") {
        context.list = res.datas
        console.log(JSON.stringify(res.datas))
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()
      // 响应错误回调
    })
  },

  //积分提现
  presentIntegral(context) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/mch/scoreShow.do").then(function(response){
      context.$progress.finish()
      var res = response.data
      if(res.status == "ok") {
        this.lists = res.datas
        console.log(JSON.stringify(res.datas.id))
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()
      // 响应错误回调
    })
  },

  //点击提现
  txApply(context) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/mch/txApply.do").then(function(response){
      context.$progress.finish()
      var res = response.data
      if(res.status == "ok") {
        this.$set('toasttext',"提现成功");
        this.$set('toastshow',true)
        setTimeout(function () {
          location.reload()
        },1000)
      } else {
        this.$set('toasttext',res.message);
        this.$set('toastshow',true)
      }
    }, function(response){
      context.$progress.failed()
      // 响应错误回调
    })
  },

  //体现选择
  presentChioce(context,presentChioceArr) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/mch/saveBankInfo.do",presentChioceArr).then(function(response){
      context.$progress.finish()
      var res = response.data
      if(res.status == "ok") {
        context.$progress.finish()
        this.$router.go('/shops/presentIntegral')
        //presentIntegral
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()
      // 响应错误回调
    })
  },

  //提现记录
  presentList(context) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/mch/withList.do").then(function(response){
      context.$progress.finish()
      var res = response.data
      if(res.status="ok"){
        this.$progress.finish()
        this.present = res.datas
        //this.fourNum = res.datas.cardNo.substr(res.datas.cardNo.length-4)
        console.log(JSON.stringify(res.datas))
        if(this.present.length==0){
          this.dataHide = true
          this.listHide = false
        }else{
          this.dataHide = false
          this.listHide = true
        }
      }else{
        alert(res.message)
      }
    }, function(response){
      context.$progress.failed()
      // 响应错误回调
    })
  },

  //返现明细
  detailOutcome(context) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/mch/cashbacksub.do").then(function(response){
      context.$progress.finish()
      var res = response.data
      if(res.status == "ok") {
        this.list = res.datas
        console.log(JSON.stringify(res.datas))
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()
      // 响应错误回调
    })
  },

  //商家分类
  getAllCategory(context) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/getAllCategory.do").then(function(response){
      context.$progress.finish()
      var res = response.data
      if(res.status == "ok") {
        this.list = res.datas
        console.log(JSON.stringify(res.datas))
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()
      // 响应错误回调
    })
  },

  //商家分类
  getCategoryAllGoods(context,getCategoryArr) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/getCategoryAllGoods.do",getCategoryArr).then(function(response){
      context.$progress.finish()
      var res = response.data
      if(res.status == "ok") {
        context.list = res.datas.datas
        console.log(JSON.stringify(res.datas))
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()
      // 响应错误回调
    })
  },

  //商家分类
  mchList(context,mchListArr) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/getMchList.do",mchListArr).then(function(response){
      context.$progress.finish()
      var res = response.data
      if(res.status == "ok") {
        context.list = res.datas.datas
        console.log(JSON.stringify(res.datas.datas))
        for(var i =0;i<this.list.length;i++){
          var len = Math.round(this.list[i].grade)/2
          for(var j = 0;j<len;j++){
            this.item[j].starActive = true
          }
        }
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()
      // 响应错误回调
    })
  },

  //商家详情
  shopsInfor(context,shopsInforArr) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/getMchInfo.do",shopsInforArr).then(function(response){
      context.$progress.finish()
      var res = response.data
      if(res.status == "ok") {
        context.list = res.datas
        console.log(JSON.stringify(res.datas))
        var len = Math.round(this.list.grade)/2
        for(var j = 0;j<len;j++){
          this.item[j].starActive = true
        }
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()
      // 响应错误回调
    })
  },

  //商家分类
  getMchGoodsList(context,getMchGoodsListArr) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/getMchGoodsList.do",getMchGoodsListArr).then(function(response){
      context.$progress.finish()
      var res = response.data
      if(res.status == "ok") {
        context.shopListArr = res.datas.datas

        console.log(context.shopListArr.length)
        console.log(JSON.stringify(context.shopListArr))
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()
      // 响应错误回调
    })
  },

  //积分补足
  createScoreSupmOrder(context,accountArr) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/mch/createScoreSupmOrder.do",accountArr).then(function(response){
      context.$progress.finish()
      var res = response.data
      if(res.status == "ok") {
        context.data = res.datas
        this.show = true
        localStorage.setItem('data',context.data.orderId)
        localStorage.setItem('dataMoney',context.data.amount)
        console.log(JSON.stringify(res.datas))
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()
      // 响应错误回调
    })
  }













}
