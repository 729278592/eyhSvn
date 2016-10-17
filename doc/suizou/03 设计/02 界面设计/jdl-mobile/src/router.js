/**
 * Created by WHB on 2016/9/7.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
const router = new VueRouter({
  history: false
});

router.map({
    // 首页
    '/': {
      name: 'appIndex',
      component: (resolve) => {
      require(['./views/home/appIndex.vue'], resolve)
    }
  },
  // 首页
    '/home': {
        component: (resolve) => {
          require(['./views/router-view.vue'], resolve)
      },
      subRoutes: {
        '/index': {
          component: (resolve) => {
            require(['./views/home/index.vue'], resolve)
          }
        },
        '/linkCode/:mobile': {
          component: (resolve) => {
            require(['./views/home/linkCode.vue'], resolve)
          }
        },
        '/appIndex': {
          component: (resolve) => {
            require(['./views/home/appIndex.vue'], resolve)
          }
        }
      }
    },
    '/user': {
        component: (resolve) => {
          require(['./views/router-view.vue'], resolve)
      },
        subRoutes: {
          '/shopCart': {
            component: (resolve) => {
              require(['./views/user/shopCart.vue'], resolve)
            },
            auth: true
          },

          '/myMessage': {
            component: (resolve) => {
              require(['./views/user/myMessage.vue'], resolve)
            },
            auth: true
          },
        
          '/myOrder': {
            component: (resolve) => {
              require(['./views/user/myOrder.vue'], resolve)
            },
            auth: true
          },
          '/personCenter': {
              component: (resolve) => {
                require(['./views/user/personCenter.vue'], resolve)
              },
              auth: true
          },
          '/myCollection': {
            component: (resolve) => {
              require(['./views/user/myCollection.vue'], resolve)
            },
            auth: true
          },
          '/myExtension': {
            component: (resolve) => {
              require(['./views/user/myExtension.vue'], resolve)
            },
            auth: true
          },
          '/presentInfor': {
            component: (resolve) => {
              require(['./views/user/presentInfor.vue'], resolve)
            },
            auth:true
          },
          '/presentInfor/:presentId': {
            name:"presentInfor",
            component: (resolve) => {
              require(['./views/user/presentInfor.vue'], resolve)
            },
            auth:true
          },
          '/presentIntegral': {
            component: (resolve) => {
              require(['./views/user/presentIntegral.vue'], resolve)
            },
            auth:true
          },
          '/addressAdmin': {
            component: (resolve) => {
              require(['./views/user/addressAdmin.vue'], resolve)
            },
            auth: true
          },
          '/detailOutcome': {
            component: (resolve) => {
              require(['./views/user/detailOutcome.vue'], resolve)
            },
            auth:true
          },
          '/personCommentList': {
            component: (resolve) => {
              require(['./views/user/personCommentList.vue'], resolve)
            },
            auth:true
          },
          '/personInfor': {
            component: (resolve) => {
              require(['./views/user/personInfor.vue'], resolve)
            },
            auth: true
          },
          '/presentList': {
            component: (resolve) => {
              require(['./views/user/presentList.vue'], resolve)
            },
            auth: true
          },
          '/presentChioce': {
            component: (resolve) => {
              require(['./views/user/presentChioce.vue'], resolve)
            },
            auth: true
          },
          '/presentRules': {
            component: (resolve) => {
              require(['./views/user/presentRules.vue'], resolve)
            }
          },
          '/addAddress/:addressId': {
            name:'addAddress',
            component: (resolve) => {
              require(['./views/user/addAddress.vue'], resolve)
            },
            auth: true
          },
          '/addAddress': {
              component: (resolve) => {
              require(['./views/user/addAddress.vue'], resolve)
            },
            auth: true
          },
          '/modifyName/:nickname': {
            name:"modifyName",
            component: (resolve) => {
              require(['./views/user/modifyName.vue'], resolve)
            },
            auth: true
          },

          '/modifyAddress/:province/:city/:area': {
            name:"modifyAddress",
            component: (resolve) => {
              require(['./views/user/modifyAddress.vue'], resolve)
            },
            auth: true
          },
          '/modifyPhone/:mobile': {
            name:"modifyMobile",
            component: (resolve) => {
              require(['./views/user/modifyPhone.vue'], resolve)
            },
            auth: true
          },
          '/modifyPassword': {
            component: (resolve) => {
              require(['./views/user/modifyPassword.vue'], resolve)
            },
            auth: true
          },
          '/modifySex/:sex': {
            name:"modifySex",
            component: (resolve) => {
              require(['./views/user/modifySex.vue'], resolve)
            },
            auth: true
          },
          '/memberUpgrade': {
            component: (resolve) => {
              require(['./views/user/memberUpgrade.vue'], resolve)
            }
          },
          '/orderInfor/:orderId': {
            name:"orderInfor",
            component: (resolve) => {
              require(['./views/user/orderInfor.vue'], resolve)
            },
            auth:true
          },
          '/detailIncome': {
            component: (resolve) => {
              require(['./views/user/detailIncome.vue'], resolve)
            },
            auth:true
          },
          '/agentApplication': {
            component: (resolve) => {
              require(['./views/user/agentApplication.vue'], resolve)
            }
          },
          '/accountState': {
            component: (resolve) => {
              require(['./views/user/accountState.vue'], resolve)
            }
          },
          '/auditStatusQuery': {
            component: (resolve) => {
              require(['./views/user/auditStatusQuery.vue'], resolve)
            }
          },

          '/memberPayChioce/:upDateId/:money': {
            name:"memberPayChioce",
            component: (resolve) => {
              require(['./views/user/memberPayChioce.vue'], resolve)
            },
            auth: true
          },
          '/payChioce': {
              component: (resolve) => {
              require(['./views/user/payChioce.vue'], resolve)
            },
            auth: true
          },
          '/paySuccess/:orderId': {

            component: (resolve) => {
              require(['./views/user/paySuccess.vue'], resolve)
            },
            auth: true
          },
          '/evaluate': {
            component: (resolve) => {
              require(['./views/user/evaluate.vue'], resolve)
            },
            auth:true
          },
          '/waitCommentOrderPerson': {
            component: (resolve) => {
              require(['./views/user/waitCommentOrderPerson.vue'], resolve)
            },
            auth:true
          },
          '/waitGetGoodsOrderPerson': {
            component: (resolve) => {
              require(['./views/user/waitGetGoodsOrderPerson.vue'], resolve)
            },
            auth: true
          },
          '/waitSendGoodsOrderPerson': {
            component: (resolve) => {
              require(['./views/user/waitSendGoodsOrderPerson.vue'], resolve)
            },
            auth: true
          },

          '/addAddressBuy': {
            component: (resolve) => {
              require(['./views/user/addAddressBuy.vue'], resolve)
            },
            auth: true
          },
          '/orderRefundSuccessed': {
            component: (resolve) => {
              require(['./views/user/orderRefundSuccessed.vue'], resolve)
            },
            auth: true
          },
          '/waitPayOrderPerson': {
            component: (resolve) => {
              require(['./views/user/waitPayOrderPerson.vue'], resolve)
            },
            auth: true
          },
          '/consumer': {
            component: (resolve) => {
              require(['./views/user/consumer.vue'], resolve)
            }
          },
          '/consumerInfor': {
            component: (resolve) => {
              require(['./views/user/consumerInfor.vue'], resolve)
            }
          },
          '/settledApplication': {
            component: (resolve) => {
              require(['./views/user/settledApplication.vue'], resolve)
            }
          },
          '/settledApplicationMobile/:mobile': {
            name:"settledApplicationMobile",
            component: (resolve) => {
              require(['./views/user/settledApplicationMobile.vue'], resolve)
            }
          },
          '/heGreement': {
            component: (resolve) => {
              require(['./views/user/heGreement.vue'], resolve)
            }
          },
          '/paySettlement': {
            component: (resolve) => {
              require(['./views/user/paySettlement.vue'], resolve)
            }
          },
          '/paySettlementBuy': {
            component: (resolve) => {
              require(['./views/user/paySettlementBuy.vue'], resolve)
            }
          },
          '/userHelp': {
            component: (resolve) => {
              require(['./views/user/userHelp.vue'], resolve)
            }
          }
        }
      },
  '/category': {
    component: (resolve) => {
      require(['./views/router-view.vue'], resolve)
    },
    subRoutes: {
      '/index': {
        component: (resolve) => {
          require(['./views/category/index.vue'], resolve)
        }
      },
      '/shopsShoppingInfor/:goodsId': {
        name:'shopsShoppingInfor',
        component: (resolve) => {
          require(['./views/category/shopsShoppingInfor.vue'], resolve)
        }
      },
      '/shopplingList/:shopplingListId/:type': {
        name:"shopplingList",
        component: (resolve) => {
          require(['./views/category/shopplingList.vue'], resolve)
        }
      },
      '/message': {
        component: (resolve) => {
          require(['./views/category/message.vue'], resolve)
        }
      }
    }
  },
  '/shops': {
    component: (resolve) => {
      require(['./views/router-view.vue'], resolve)
    },
    subRoutes: {
      '/index': {
        component: (resolve) => {
          require(['./views/shops/index.vue'], resolve)
        },
        mchAuth:true
      },
      '/presentIntegral': {
        component: (resolve) => {
          require(['./views/shops/presentIntegral.vue'], resolve)
        }
      },
      '/presentChioce': {
        component: (resolve) => {
          require(['./views/shops/presentChioce.vue'], resolve)
        },
        mchAuth:true
      },
      '/payChioce': {
        component: (resolve) => {
          require(['./views/shops/payChioce.vue'], resolve)
        }
      },
      '/integralComplement': {
        component: (resolve) => {
          require(['./views/shops/integralComplement.vue'], resolve)
        }
      },
      '/detailIncome': {
        component: (resolve) => {
          require(['./views/shops/detailIncome.vue'], resolve)
        }
      },
      '/presentList': {
        component: (resolve) => {
          require(['./views/shops/presentList.vue'], resolve)
        },
        mchAuth:true
      },
      '/presentRules': {
        component: (resolve) => {
          require(['./views/shops/presentRules.vue'], resolve)
        }
      },
      '/shopsInfor/:shops': {
        name:"shopsInfor",
        component: (resolve) => {
          require(['./views/shops/shopsInfor.vue'], resolve)
        }
      },
      '/shopsList': {
        component: (resolve) => {
          require(['./views/shops/shopsList.vue'], resolve)
        }
      },
      '/shopsCommentList': {
        component: (resolve) => {
          require(['./views/shops/shopsCommentList.vue'], resolve)
        },
        mchAuth:true
      },
      '/shopsOrder': {
        component: (resolve) => {
          require(['./views/shops/shopsOrder.vue'], resolve)
        },
        mchAuth:true
      },
      '/contactShopsShopping': {
        component: (resolve) => {
          require(['./views/shops/contactShopsShopping.vue'], resolve)
        }
      },
      '/shopsDetails': {
        component: (resolve) => {
          require(['./views/shops/shopsDetails.vue'], resolve)
        }
      },
      '/shopstype': {
        component: (resolve) => {
          require(['./views/shops/shopstype.vue'], resolve)
        }
      },
      '/shoppingStyle': {
        component: (resolve) => {
          require(['./views/shops/shoppingStyle.vue'], resolve)
        }
      }
    }
  },

  '/auth': {
    component: (resolve) => {
      require(['./views/router-view.vue'], resolve)
    },
    subRoutes: {
      '/login': {
        component: (resolve) => {
          require(['./views/auth/login.vue'], resolve)
        }
      },
      '/personLogin': {
        component: (resolve) => {
          require(['./views/auth/personLogin.vue'], resolve)
        }
      },
      '/personRegister': {
        component: (resolve) => {
          require(['./views/auth/personRegister.vue'], resolve)
        }
      },

      '/register': {
        component: (resolve) => {
          require(['./views/auth/register.vue'], resolve)
        }
      },
      '/forget': {
        component: (resolve) => {
          require(['./views/auth/forget.vue'], resolve)
        }
      }
    }
  }


})

export default router;
