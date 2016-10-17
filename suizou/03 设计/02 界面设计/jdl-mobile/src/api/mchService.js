import router from '../router'
import mchAuthService from './mchAuthService'
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
      var res = response.json()
      if (res.status == "ok") {
        context.lists = res.datas
        var len = Math.round(context.lists.grade)
        for(var j = 0;j<len;j++){
          context.item[j].starActive = true
        }
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
      var res = response.json()
      if(res.status == "ok") {
        context.list = res.datas
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
      var res = response.json()
      if(res.status == "ok") {
        context.lists = res.datas
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
      var res = response.json()
      if(res.status == "ok") {
        context.$set('toasttext',"提现成功");
        context.$set('toastshow',true)
        setTimeout(function () {
          location.reload()
        },1000)
      } else {
        context.$set('toasttext',res.message);
        context.$set('toastshow',true)
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
      var res = response.json()
      if(res.status == "ok") {
        context.$progress.finish()
        context.$route.router.go('/shops/presentIntegral')
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
      var res = response.json()
      if(res.status="ok"){
        context.$progress.finish()
        context.present = res.datas
        //context.fourNum = res.datas.cardNo.substr(res.datas.cardNo.length-4)
        if(context.present.length==0){
          context.dataHide = true
          context.listHide = false
        }else{
          context.dataHide = false
          context.listHide = true
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
  detailOutcome(context,arr) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/mch/cashbacksub.do",arr).then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        context.list = res.datas
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
      var res = response.json()
      if(res.status == "ok") {
        context.list = res.datas
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
      var res = response.json()
      if(res.status == "ok") {
        context.list = res.datas.datas
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
      var res = response.json()
      if(res.status == "ok") {
        context.list = res.datas.datas
        for(var i =0;i<context.list.length;i++){
          var len = Math.round(context.list[i].grade)
          for(var j = 0;j<len;j++){
            context.item[j].starActive = true
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
      var res = response.json()
      if(res.status == "ok") {
        context.list = res.datas
        console.log(JSON.stringify(res.datas))
        var len = Math.round(context.list.grade)
        for(var j = 0;j<len;j++){
          context.item[j].starActive = true
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
      var res = response.json()
      if(res.status == "ok") {
        context.shopListArr = res.datas.datas
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
      var res = response.json()
      if(res.status == "ok") {
        context.data = res.datas
        context.show = true
        localStorage.setItem('data',context.data.orderId)
        localStorage.setItem('dataMoney',context.data.amount)
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()
      // 响应错误回调
    })
  },

  //商铺信息
  linkShops(context,accountArr) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/getMchInfo.do",accountArr).then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        if( res.datas!=null){
          console.log(JSON.stringify(res.datas))
          context.list = res.datas
          var len = Math.round(context.list.grade)
          for(var j = 0;j<len;j++){
            context.item[j].starActive = true
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



  //评论-商家
  evaList(context) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/mch/evaList.do").then(function(response){
      context.$progress.finish()
      var res = response.json()
      console.log(JSON.stringify(res.datas))
      if(res.status == "ok") {
        if(res.datas!=null){
          context.list = res.datas.datas
        }
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  }












}
