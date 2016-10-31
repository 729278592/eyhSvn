import router from '../router'
import authService from './authService'
import {API_ROOT} from '../config'
import {imgUrlFric} from '../config'
import {imgUrl} from '../config'
import {imgUrlAddFric} from '../config'

export default {
  imgUrlFric:imgUrlFric,
  imgUrl:imgUrl,
  imgUrlAddFric:imgUrlAddFric,


  //个人中心
	personCenter(context) {
        context.$progress.start()
        context.$http.post(API_ROOT+"mobile/member/personCenter.do").then(function(response){
            context.$progress.finish()
            var res = response.json()
             if(res.status == "ok") {
                  context.dataJson = res.datas
               //console.log(JSON.stringify(res.datas))
             } else {
                   alert(res.message);
                }
         }, function(response){
          // 响应错误回调
         	context.$progress.failed()
         })
	},

  //地址管理
  addressAdmin(context) {
    context.$progress.start()
    context.$http.get(API_ROOT+"mobile/member/addressList.do").then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        this.$progress.finish()
        this.addressList = res.datas

        if(this.addressList.length!=0){
          this.dataHide = false
        }else{
          this.dataHide = true
        }

      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },

  //删除地址
  deleteAddress(context,deleteAddressArr) {
    context.$progress.start();
    context.$http.post(API_ROOT+"mobile/member/deleteAddress.do",deleteAddressArr).then(function(response){
      context.$progress.finish();
      var res = response.json();
      if(res.status == "ok") {
        this.show = false;
        for(var i=0;i<this.addressList.length;i++){
          this.addressList.$remove(this.shops);
          console.log(JSON.stringify(this.shops))
          this.$set('toasttext','删除成功');
          this.$set('toastshow',true);
          location.reload()
          if(this.addressList.length!=0){
            this.dataHide = false
          }else{
            this.dataHide = true
          }
        }
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },

  //设为默认地址
  setDefaultAddress(context,addressArr,addressD) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/member/setDefaultAddress.do",addressArr).then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        var len = this.addressList.length
        for(var i =0;i<len;i++){
          this.addressList[i].isDefault="N"
        }
        addressD.isDefault="Y"
        location.reload()
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },

  //编辑地址
  addAddress(context,addAddressArr) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/member/getAddress.do",addAddressArr).then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        this.$progress.finish()
        this.addressList = res.datas
        this.isEmpty = this.addressList.consignee
        this.mobile = this.addressList.mobile


        this.addressIsEmpty = this.addressList.address
        this.pcaAddress = this.addressList.province+'　'+this.addressList.city+'　'+this.addressList.area


        if(this.addressList.length!=0){
          this.dataHide = true
        }else{
          this.dataHide = false
        }

      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },

  //保存地址
  saveAddress(context,saveAddressArr) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/member/saveAddress.do",saveAddressArr).then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        context.$progress.finish()
        context.$set('toasttext','保存成功');
        context.$set('toastshow',true);
        setTimeout(function(){
          context.$router.go('/user/addressAdmin')
        },1000)
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },

  //个人信息
  presentInfor(context) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/member/showBankInfo.do").then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status="ok"){
        context.personList = res.datas
      }else{
        alert(res.message)
      }
    }, function(response){
      context.$progress.failed()

    })
  },


  //保存地址
  saveAddressBuy(context,saveAddressArr) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/member/saveAddress.do",saveAddressArr).then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        context.$progress.finish()
        context.$set('toasttext','保存成功');
        context.$set('toastshow',true);
        setTimeout(function(){
          context.$router.go('/user/paySettlement')
        },1000)
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },


  //保存地址
  saveAddressBuyYes(context,saveAddressArr) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/member/saveAddress.do",saveAddressArr).then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        context.$progress.finish()
        context.$set('toasttext','保存成功');
        context.$set('toastshow',true);
        setTimeout(function(){
          location.reload()
        },1000)
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },

  //积分提现
  presentIntegral(context) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/member/scoreShow.do").then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        this.lists = res.datas
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },

  //点击提现
  txApply(context) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/member/txApply.do").then(function(response){
      context.$progress.finish()
      var res = response.json()
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

    })
  },

  //体现选择
  presentChioce(context,presentChioceArr) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/member/saveBankInfo.do",presentChioceArr).then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        context.$progress.finish()
        context.$route.router.go('/user/presentIntegral')
        //presentIntegral
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },

  //提现记录
  presentList(context) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/member/withList.do").then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status="ok"){
        this.$progress.finish()
        this.present = res.datas
        //this.fourNum = res.datas.cardNo.substr(res.datas.cardNo.length-4)
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

    })
  },

  //申请状态查询
  sendMchStatusAuthCode(context,auditArr,btn) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/sendMchStatusAuthCode.do",auditArr).then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        context.xxId = res.datas
        var count = 60;
        var resend = setInterval(function(){
          count--;
          if (count > 0){
            context.code = count+"秒后重新获取"
            btn.value = context.code
            context.disabled = true
            context.type = true
          }else {
            clearInterval(resend);
            context.disabled = false
            context.type = false
            context.code = "获取验证码"
            btn.value = context.code
          }
        }, 1000);
        context.disabled = true
        context.$set('toasttext','验证码发送成功');
        context.$set('toastshow',true)
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },

  //点击查询申请状态
  getMchApplyStatus(context,formData) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/getMchApplyStatus.do",formData).then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        localStorage.setItem('data',JSON.stringify(res.datas))
        context.$route.router.go('/user/accountState')
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },

  //入驻申请验证码
  sendMchRegisterAuthCode(context,sendMchCodeArr,btn) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/sendMchRegisterAuthCode.do",sendMchCodeArr).then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        this.xxId = res.datas
        var count = 60;
        var resend = setInterval(function(){
          count--;
          if (count > 0){
            context.code = count+"秒后重新获取"
            btn.value = context.code
            context.disabled = true
            context.type = true
          }else {
            clearInterval(resend);
            context.disabled = false
            context.type = false
            context.code = "获取验证码"
            btn.value = context.code
          }
        }, 1000);
        context.disabled = true
        this.$set('toasttext','验证码发送成功');
        this.$set('toastshow',true)
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },

  //点击入驻申请
  settledApplication(context,settledApplicationArr) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/registerMch.do",settledApplicationArr).then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        this.$set('toasttext','申请成功')
        this.$set('toastshow',true)
        setTimeout(function () {
          context.$router.go("/")
        },2000)

      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },

  //商城首页商品
  index(context) {
    context.$progress.start()
    context.$http.get(API_ROOT+"mobile/getMainCategoryGoods.do").then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        this.list = res.datas
        console.log(JSON.stringify(res.datas));
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },

  //点击切换商城首页商品
  selectIndex(context,index) {
    context.$progress.start()
    context.$http.get(API_ROOT+"mobile/getMainCategoryGoods.do").then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        this.num = index
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },

  //商品详情
  shopsShoppingInfor(context,shopsShoppingInforArr) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/showGoods.do",shopsShoppingInforArr).then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        this.shopInfor = res.datas.goods
        this.products = res.datas.products

        console.log(JSON.stringify(res.datas))
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },

  //评价列表
  showGoodsEva(context,showGoodsEvaArr) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/showGoodsEva.do",showGoodsEvaArr).then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        this.commentLists = res.datas.datas
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },

  //购物车需登录
  addCart(context,addCartArr) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/member/addCart.do",addCartArr).then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        context.$route.router.go('/user/shopCart')
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },

  //购物车列表
  cartList(context) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/member/cartList.do").then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        this.orders = res.datas
        if(this.orders.length!=0){
          this.dataHide = false
          this.orderHide = true
        }else{
          this.dataHide = true
          this.orderHide = false
        }
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },

  //购物车总价
  cartUpdate(context,shopArr) {
    context.$http.post(API_ROOT+"mobile/member/updateCartGoodsNum.do",shopArr).then(function(response){
      var res = response.json()
      if(res.status == "ok") {

      } else {
        alert(res.message);
      }
    }, function(response){

    })
  },

  //购物车结算
  cartBuy(context,cartBuyArr) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/member/getConfirmProducts.do",cartBuyArr).then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        this.list = res.datas
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },

  //直接结算
  cartGoBuy(context,cartBuyArr) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/member/getConfirmProductsGoBuy.do",cartBuyArr).then(function(response){
      context.$progress.finish()
      var res = response.json()

      if(res.status == "ok") {
        this.list = res.datas

      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },


  //获取默认地址
  getDeAddress(context,cartBuyArr) {
    context.$progress.start()
    context.$http.get(API_ROOT+"mobile/member/getDefaultAddress.do",cartBuyArr).then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        this.addressDeList = res.datas
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },

  //购物车购买
  sureBuy(context,sureBuyArr) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/member/createOrder.do",sureBuyArr).then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        localStorage.setItem('data',JSON.stringify(res.datas))
        context.$route.router.go('/user/payChioce')
      } else {
        alert(res.message)
      }
    }, function(response){
      context.$progress.failed()

    })
  },

  //购物车列表删除
  sureDeleteList(context,deleteList) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/member/deleteCart.do",deleteList).then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        for(var i=0;i<this.orders.length;i++){
          this.orders[i].list.$remove(this.shop)
          if(this.orders.length!=0){
            this.dataHide = false
            this.orderHide = true
          }else{
            this.dataHide = true
            this.orderHide = false
          }

        }
        for(var i=0; i<this.orders.length; i++) {
          if(this.orders[i].mchId == deleteList.mchId) {
            var totalPrice = 0;
            for (var j = 0; j < this.orders[i].list.length; j++) {
              var self = this.orders[i].list[j];
              totalPrice += self.price * self.num;
            }
            this.orders[i].totalPrice = totalPrice.toFixed(2);
            break;
          }
        }
      } else {
        alert(res.message)
      }
    }, function(response){
      context.$progress.failed()

    })
  },

  getRegionByPid(context,pid,type) {
    context.$http.post(API_ROOT + "mobile/getRegionByPid.do",{parentId: pid}).then(function (response) {
      var res = response.json();
      if (res.status == "ok") {
        if(type=='p'){


          context.provinceList = res.datas
        } else if(type=='c') {
          context.cityList = res.datas
        } else if(type=='a') {
          context.areaList = res.datas
        }
      } else {
        //alert("获取省份失败");
        alert(res.message);
      }
    }, function (response) {

    })
  },


  //个人注册验证码
  sendMemRegisterAuthCode(context,sendMemRegArr,btn) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/sendMemRegisterAuthCode.do",sendMemRegArr).then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        this.xxId = res.datas
        var count = 60;
        var resend = setInterval(function(){
          count--;
          if (count > 0){
            context.code = count+"秒后重新获取"
            btn.value = context.code
            context.disabled = true
            context.type = true
          }else {
            clearInterval(resend);
            context.disabled = false
            context.type = false
            context.code = "获取验证码"
            btn.value = context.code
          }
        }, 1000);
        context.disabled = true
        this.$set('toasttext','验证码发送成功');
        this.$set('toastshow',true)
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },

  //个人注册
  registerUser(context,sendMemRegArr) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/registerUser.do",sendMemRegArr).then(function(response){
      context.$progress.finish()
      var res = response.json()

      if(res.status == "ok") {
        // 路由登录
        context.$route.router.go('/auth/personLogin')

      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },

  //我的订单-个人
  myOrder(context,orderStatus) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/member/getOrderList.do",orderStatus).then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        context.list = res.datas
        console.log(JSON.stringify(res.datas))
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },

  //忘记密码验证码-个人
  sendMemForgotAuthCode(context,sendMemForgotArr,btn) {
    context.$http.post(API_ROOT+"mobile/sendMemForgotAuthCode.do",sendMemForgotArr).then(function(response){
      var res = response.json()
      if(res.status == "ok") {
        context.xxId = res.datas
        var count = 60;
        var resend = setInterval(function(){
          count--;
          if (count > 0){
            context.code = count+"秒后重新获取"
            btn.value = context.code
            context.disabled = true
            context.type = true
          }else {
            clearInterval(resend);
            context.disabled = false
            context.type = false
            context.code = "获取验证码"
            btn.value = context.code
          }
        }, 1000);
        context.disabled = true

        context.$set('toasttext','验证码发送成功');
        context.$set('toastshow',true)
      } else {
        alert(res.message);
      }
    }, function(response){

    })
  },

  //忘记密码-个人
  updateNotLoginPwd(context,updatePwdArr) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/updatePwd.do",updatePwdArr).then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        context.$progress.finish()
        context.$route.router.go('/auth/personLogin')

      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },

  //我的推广-会员
  myExtension(context,myExtensionArr) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/member/getPromote.do",myExtensionArr).then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        context.$progress.finish()
        if(res.datas!=null){
          context.list = res.datas.datas
        }else {
          context.list = []
        }
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },

  //个人信息
  personInfor(context) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/member/personInfo.do").then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        context.$progress.finish()
        context.list = res.datas
        context.address = context.list.province+' '+context.list.city+' '+context.list.area
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },

  //退出登录
  loginOut(context) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/loginOut.do").then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        authService.logout()
        context.$route.router.go("/")
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },

  //修改昵称
  modifyName(context,modifyNameArr) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/member/saveNickName.do",modifyNameArr).then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        context.$route.router.go("/user/personInfor")
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },

  //修改昵称
  modifyPhone(context,modifyPhoneArr) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/member/saveMobile.do",modifyPhoneArr).then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        context.$route.router.go("/user/personInfor")
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },

  //修改手机验证码
  sendMemChangeMobileAuthCode(context,sendMemForgotArr,btn) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/member/sendMemChangeMobileAuthCode.do",sendMemForgotArr).then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        context.xxId = res.datas
        var count = 60;
        var resend = setInterval(function(){
          count--;
          if (count > 0){
            context.code = count+"秒后重新获取"
            btn.value = context.code
            context.disabled = true
            context.type = true
          }else {
            clearInterval(resend);
            context.disabled = false
            context.type = false
            context.code = "获取验证码"
            btn.value = context.code
          }
        }, 1000);
        context.disabled = true

        context.$set('toasttext','验证码发送成功');
        context.$set('toastshow',true)
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },

  //点击修改手机
  modifyPhone(context,modifyPhoneArr) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/member/saveMobile.do",modifyPhoneArr).then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        context.$route.router.go("/user/personInfor")
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },

  //在线修改密码
  modifyPassword(context,modifyNameArr) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/member/modifyPwd.do",modifyNameArr).then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        context.$progress.finish()
        context.$route.router.go("/user/personInfor")
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },

  //在线修改密码短信
  modifyDPassword(context,sendMemForgotArr,btn) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/member/sendMemModifyPwdAuthCode.do",sendMemForgotArr).then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        context.xxId = res.datas
        var count = 60;
        var resend = setInterval(function(){
          count--;
          if (count > 0){
            context.code = count+"秒后重新获取"
            btn.value = context.code
            context.disabled = true
            context.type = true
          }else {
            clearInterval(resend);
            context.disabled = false
            context.type = false
            context.code = "获取验证码"
            btn.value = context.code
          }
        }, 1000);
        context.disabled = true

        context.$set('toasttext','验证码发送成功');
        context.$set('toastshow',true)
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },

  //保存性别
  saveSex(context,saveSexArr) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/member/saveSex.do",saveSexArr).then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        context.$progress.finish()
        context.$route.router.go("/user/personInfor")
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },

  //订单详情
  orderDetail(context,orderIdArr) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/member/orderDetail.do",orderIdArr).then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        context.payList = res.datas
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },

  //会员升级
  memberUpgrade(context) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/member/getMemberLevelList.do").then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        context.list = res.datas
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },

  //点击会员升级
  upLevelToPay(context,upDateArr) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/member/upLevelToPay.do",upDateArr).then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        context.$route.router.go('/user/payChioce')
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },

  //返现明细
  detailOutcome(context,dateArr) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/member/cashbacksub.do",dateArr).then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        if(res.datas!=null){
          console.log(JSON.stringify(res.datas.datas))
          context.list = res.datas.datas
        }

        if(context.list.length!=0){
          context.dataHide = false
        }else{
          context.dataHide = true
        }
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },

  //修改地址-个人信息
  changeAddress(context,saveAddressArr) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/member/changeAddress.do",saveAddressArr).then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        context.list = res.datas
        context.$router.go("/user/personInfor")
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },

  //评论-个人
  evaList(context) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/member/evaList.do").then(function(response){
      context.$progress.finish()
      var res = response.json()
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
  },

  //商品收藏-个人
  collection(context,collectionArr) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/member/collection.do",collectionArr).then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        context.list = res.datas.datas
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },

  //代理申请
  registerAgent(context,arr) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/registerAgent.do",arr).then(function(response){
      var res = response.json()
      context.$progress.finish()
      if(res.status == "ok") {
        context.$set('toasttext','申请成功')
        context.$set('toastshow',true)
        setTimeout(function () {
          context.$router.go("/")
        },2000)
      } else {

        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },

  //代理申请短信验证
  sendAgentRegisterAuthCode(context,mobileArr,btn) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/sendAgentRegisterAuthCode.do",mobileArr).then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        context.xxId = res.datas
        var count = 60;
        var resend = setInterval(function(){
          count--;
          if (count > 0){
            context.code = count+"秒后重新获取"
            btn.value = context.code
            context.disabled = true
            context.type = true
          }else {
            clearInterval(resend);
            context.disabled = false
            context.type = false
            context.code = "获取验证码"
            btn.value = context.code
          }
        }, 1000);
        context.disabled = true
        context.$set('toasttext','验证码发送成功');
        context.$set('toastshow',true)
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },

  //代理申请-代理级别
  getAgentLevel(context) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/getAgentLevel.do").then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        context.optionList = res.datas
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },



  //商品收藏列表
  shopsCollection(context) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/member/getCollectionMchList.do").then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        context.shoplist = res.datas.datas
        //console.log(JSON.stringify(res.datas.datas))
        for(var i =0;i<context.shoplist.length;i++){
          var len = Math.round(context.shoplist[i].priceScore)
          for(var j = 0;j<len;j++){
            context.item[j].starActive = true
          }
        }
        if(context.shoplist.length!=0){
          context.dataShopHide = false
        }else{
          context.dataShopHide = true
        }
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },



  //商品收藏列表
  shopCollection(context) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/member/getCollectionGoodsList.do").then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        context.list = res.datas.datas
        if(context.list.length!=0){
          context.dataHide = false
        }else{
          context.dataHide = true
        }
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },

  //收藏商家
  collectionShopping(context,shopArr) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/member/collection.do",shopArr).then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        context.$set('toasttext','收藏成功')
        context.$set('toastshow',true)
        console.log(JSON.stringify(res.datas))
        setTimeout(function () {
          location.reload()
        },200)
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },

  //取消商品收藏
  cancelCollection(context,shopArr,shopping) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/member/cancelCollection.do",shopArr).then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        if(context.list.length==1){
          context.dataHide = true
        }else{
          context.dataHide = false
        }

        context.list.$remove(shopping)
        context.$set('toasttext','取消成功')
        context.$set('toastshow',true)
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },

  //取消商家收藏
  cancelCollections(context,shopArr,shopping) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/member/cancelCollection.do",shopArr).then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        if(context.shoplist.length==1){
          context.dataShopHide = true
        }else{
          context.dataShopHide = false
        }
        context.shoplist.$remove(shopping)
        context.$set('toasttext','取消成功')
        context.$set('toastshow',true)
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },


  //取消商家列表收藏
  cancelCollectionShop(context,shopArr) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/member/cancelCollection.do",shopArr).then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        if(context.list){
          if(context.list.length==1){
            context.dataHide = true
          }else{
            context.dataHide = false
          }
        }
        context.$set('toasttext','取消成功')
        context.$set('toastshow',true)
        setTimeout(function () {
          location.reload()
        },200)
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },

  deleteOrderBtn(context,shopArr,orderStatus) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/member/cancelOrder.do",shopArr).then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        context.$set('toasttext','删除成功')
        context.$set('toastshow',true)
        setTimeout(function(){
          context.list.$remove(orderStatus)
        },20)
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },

  //取消订单
  cancelOrder(context,shopArr,orderStatus) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/member/cancelOrder.do",shopArr).then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        context.$set('toasttext','取消成功')
        context.$set('toastshow',true)
        setTimeout(function(){
          location.reload()
        },20)
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },

  //确认收货
  sureOrder(context,shopArr) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/member/auditOrder.do",shopArr).then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        // context.list.$remove(orderStatus)
        context.$set('toasttext','已确认')
        context.$set('toastshow',true)
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },


  //删除订单
  deleteOrder(context,shopArr,orderStatus) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/member/cancelOrder.do",shopArr).then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
         context.list.$remove(orderStatus)
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },


  //订单待评论列表
  evaluateMchId(context,shopArr) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/member/evaMain.do",shopArr).then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        context.list = res.datas
        var len = context.list.list.length;
        if(len > 0) {
          for(var i= 0;i<len;i++) {
            context.list.list[i].evaContent;
            context.list.list[i].level='';
          }
        }
      } else {
        alert(res.message);
        console.log(res.message)
      }
    }, function(response){
      context.$progress.failed()

    })
  },


  //保存订单评论
  saveEva(context,shopArr) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/member/saveEva.do",shopArr).then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        context.$router.go('/user/myOrder')
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()

    })
  },

  //排序
  sort(context,accountArr) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/getMchList.do",accountArr).then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        context.list = res.datas.datas
        for(var i =0;i<context.list.length;i++){
          context.list[i].item = [
            {starActive:false},
            {starActive:false},
            {starActive:false},
            {starActive:false},
            {starActive:false}
          ]
          var len = Math.round(context.list[i].evaTotalScore/context.list[i].evaOrderNum)
          for(var j = 0;j<len;j++){
            context.list[i].item[j].starActive = true
          }
          if(context.list[i].lat||context.list[i].lng){
            this.lat = context.list[i].lat;
            this.lng = context.list[i].lng;
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

  //银行选择
  bankChioce(context,accountArr) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/getBankList.do",accountArr).then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        this.optionList = res.datas
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()
      // 响应错误回调
    })
  },

  //商品搜索
  searchGoods(context,accountArr) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/searchGoods.do",accountArr).then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        if(res.datas != null){
          context.list = res.datas.datas
        }
        if(context.list.length!=0){
          context.dataHide = false
        }else{
          context.dataHide = true
        }

        console.log(JSON.stringify(res.datas.datas))
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()
      // 响应错误回调
    })
  },

  //当前积分
  nowScore(context,accountArr) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/member/getUseScoreDetails.do",accountArr).then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        if(res.datas != null){
          context.list = res.datas.datas
          console.log(JSON.stringify(res.datas.datas))
        }
        if(context.list.length!=0){
          context.dataHide = false
        }else{
          context.dataHide = true
        }

      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()
      // 响应错误回调
    })
  },

  //预留积分
  reserveScore(context,accountArr) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/member/getReservedScoreDetails.do",accountArr).then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        if(res.datas != null){
          context.list = res.datas.datas
        }
        if(context.list.length!=0){
          context.dataHide = false
        }else{
          context.dataHide = true
        }

        console.log(JSON.stringify(res.datas.datas))
      } else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()
      // 响应错误回调
    })
  },



  //预留积分
  upgradeFun(context) {
    context.$progress.start()
    context.$http.post(API_ROOT+"mobile/member/auditLevel.do").then(function(response){
      context.$progress.finish()
      var res = response.json()
      if(res.status == "ok") {
        context.$route.router.go('/user/memberUpgrade')

      }
      else if(res.status=="levelUp"){
        location.reload()
      }
      else {
        alert(res.message);
      }
    }, function(response){
      context.$progress.failed()
      // 响应错误回调
    })
  }



}
