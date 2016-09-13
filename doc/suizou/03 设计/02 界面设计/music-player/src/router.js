/**
 * Created by WHB on 2016/9/7.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)
const router = new VueRouter({
    history: true
});

router.map({
    // 首页
    '/': {
      name: 'index',
      component: (resolve) => {
      require(['./views/home/index.vue'], resolve)
    }
  },
  // 首页
  '/home': {
      name: 'home',
        component: (resolve) => {
          require(['./views/home/index.vue'], resolve)
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
            }
          },

          '/myMessage': {
            component: (resolve) => {
              require(['./views/user/myMessage.vue'], resolve)
            }
          },
          '/shoppingInfor': {
            component: (resolve) => {
              require(['./views/user/shoppingInfor.vue'], resolve)
            }
          },
          '/myOrder': {
            component: (resolve) => {
              require(['./views/user/myOrder.vue'], resolve)
            }
          },
          '/shoppingOrderInfor': {
            component: (resolve) => {
              require(['./views/user/shoppingOrderInfor.vue'], resolve)
            }
          },
          '/personCenter': {
            component: (resolve) => {
              require(['./views/user/personCenter.vue'], resolve)
            }
          },
          '/myCollection': {
            component: (resolve) => {
              require(['./views/user/myCollection.vue'], resolve)
            }
          },
          '/myExtension': {
            component: (resolve) => {
              require(['./views/user/myExtension.vue'], resolve)
            }
          },
          '/presentIntegral': {
            component: (resolve) => {
              require(['./views/user/presentIntegral.vue'], resolve)
            }
          },
          '/addressAdmin': {
            component: (resolve) => {
              require(['./views/user/addressAdmin.vue'], resolve)
            }
          },
          '/detailOutcome': {
            component: (resolve) => {
              require(['./views/user/detailOutcome.vue'], resolve)
            }
          },
          '/personCommentList': {
            component: (resolve) => {
              require(['./views/user/personCommentList.vue'], resolve)
            }
          },
          '/personInfor': {
            component: (resolve) => {
              require(['./views/user/personInfor.vue'], resolve)
            }
          },
          '/presentList': {
            component: (resolve) => {
              require(['./views/user/presentList.vue'], resolve)
            }
          },
          '/presentChioce': {
            component: (resolve) => {
              require(['./views/user/presentChioce.vue'], resolve)
            }
          },
          '/presentRules': {
            component: (resolve) => {
              require(['./views/user/presentRules.vue'], resolve)
            }
          },
          '/addAddress': {
            component: (resolve) => {
              require(['./views/user/addAddress.vue'], resolve)
            }
          },
          '/modifyName': {
            component: (resolve) => {
              require(['./views/user/modifyName.vue'], resolve)
            }
          },
          '/modifyAddress': {
            component: (resolve) => {
              require(['./views/user/modifyAddress.vue'], resolve)
            }
          },
          '/modifyPhone': {
            component: (resolve) => {
              require(['./views/user/modifyPhone.vue'], resolve)
            }
          },
          '/modifyPassword': {
            component: (resolve) => {
              require(['./views/user/modifyPassword.vue'], resolve)
            }
          },
          '/modifySex': {
            component: (resolve) => {
              require(['./views/user/modifySex.vue'], resolve)
            }
          },
          '/memberUpgrade': {
            component: (resolve) => {
              require(['./views/user/memberUpgrade.vue'], resolve)
            }
          },
          '/orderInfor': {
            component: (resolve) => {
              require(['./views/user/orderInfor.vue'], resolve)
            }
          },
          '/detailIncome': {
            component: (resolve) => {
              require(['./views/user/detailIncome.vue'], resolve)
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
      '/shopsShoppingInfor': {
        component: (resolve) => {
          require(['./views/category/shopsShoppingInfor.vue'], resolve)
        }
      },
      '/shopplingList': {
        component: (resolve) => {
          require(['./views/category/shopplingList.vue'], resolve)
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
        }
      },
      '/shopsInfor': {
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
        }
      },
      '/shopsOrder': {
        component: (resolve) => {
          require(['./views/shops/shopsOrder.vue'], resolve)
        }
      }
    }
  }
})

export default router;
