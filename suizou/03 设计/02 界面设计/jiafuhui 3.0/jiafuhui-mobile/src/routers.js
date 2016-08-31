/**
 * Created by HE on 2016/6/29.
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  history: true
})

router.map({
  // 登录
  '/login': {
    name: 'login',
    component: (resolve) => {
      require(['./views/auth/login.vue'], resolve)
    }
  },
  // 注册
  '/regist': {
    name: 'regist',
    component: (resolve) => {
      require(['./views/auth/regist.vue'], resolve)
    }
  },
  // 忘记密码
  '/forget': {
    name: 'regist',
    component: (resolve) => {
      require(['./views/auth/forget.vue'], resolve)
    }
  },
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
  // 优惠活动
  '/activities': {
    name: 'activities',
    component: (resolve) => {
      require(['./views/home/activities.vue'], resolve)
    }
  },
  // 家电
  '/cleaning/appliance': {
    component: (resolve) => {
      require(['./views/router-view.vue'], resolve)
    },
    subRoutes: {
      '/icebox': {
        component: (resolve) => {
          require(['./views/homeservice/cleaning/appliance/icebox.vue'], resolve)
        }
      },
      '/icebox_destine': {
        component: (resolve) => {
          require(['./views/homeservice/cleaning/appliance/icebox_destine.vue'], resolve)
        }
      },
      '/icebox_pay': {
        component: (resolve) => {
          require(['./views/homeservice/cleaning/appliance/icebox_pay.vue'], resolve)
        }
      },
      '/air_conditioning': {
        component: (resolve) => {
          require(['./views/homeservice/cleaning/appliance/air_conditioning.vue'], resolve)
        }
      },
      '/air_destine': {
        component: (resolve) => {
          require(['./views/homeservice/cleaning/appliance/air_destine.vue'], resolve)
        }
      },
      '/air_pay': {
        component: (resolve) => {
          require(['./views/homeservice/cleaning/appliance/air_pay.vue'], resolve)
        }
      },
      '/washer': {
        component: (resolve) => {
          require(['./views/homeservice/cleaning/appliance/washer.vue'], resolve)
        }
      },
      '/washer_destine': {
        component: (resolve) => {
          require(['./views/homeservice/cleaning/appliance/washer_destine.vue'], resolve)
        }
      },
      '/washer_pay': {
        component: (resolve) => {
          require(['./views/homeservice/cleaning/appliance/washer_pay.vue'], resolve)
        }
      },
      '/kitchen': {
        component: (resolve) => {
          require(['./views/homeservice/cleaning/appliance/kitchen.vue'], resolve)
        }
      },
      '/kitchen_destine': {
        component: (resolve) => {
          require(['./views/homeservice/cleaning/appliance/kitchen_destine.vue'], resolve)
        }
      },
      '/kitchen_pay': {
        component: (resolve) => {
          require(['./views/homeservice/cleaning/appliance/kitchen_pay.vue'], resolve)
        }
      }
    }
  },
  // 家居
  '/cleaning/furnishing': {
    component: (resolve) => {
      require(['./views/router-view.vue'], resolve)
    },
    subRoutes: {
      '/floor': {
        component: (resolve) => {
          require(['./views/homeservice/cleaning/furnishing/floor.vue'], resolve)
        }
      },
      '/safo': {
        component: (resolve) => {
          require(['./views/homeservice/cleaning/furnishing/safo.vue'], resolve)
        }
      },
      '/safo_destine': {
        component: (resolve) => {
          require(['./views/homeservice/cleaning/furnishing/safo_destine.vue'], resolve)
        }
      },
      '/safo_pay': {
        component: (resolve) => {
          require(['./views/homeservice/cleaning/furnishing/safo_pay.vue'], resolve)
        }
      },
      '/curtain': {
        component: (resolve) => {
          require(['./views/homeservice/cleaning/furnishing/curtain.vue'], resolve)
        }
      }
    }
  },
  // 家居
  '/cleaning/choiceness': {
    component: (resolve) => {
      require(['./views/router-view.vue'], resolve)
    },
    subRoutes: {
      '/cookroom': {
        component: (resolve) => {
          require(['./views/homeservice/cleaning/choiceness/cookroom.vue'], resolve)
        }
      },
      '/cookroom_destine': {
        component: (resolve) => {
          require(['./views/homeservice/cleaning/choiceness/cookroom_destine.vue'], resolve)
        }
      },
      '/cookroom_pay': {
        component: (resolve) => {
          require(['./views/homeservice/cleaning/choiceness/cookroom_pay.vue'], resolve)
        }
      },
      '/toilet': {
        component: (resolve) => {
          require(['./views/homeservice/cleaning/choiceness/toilet.vue'], resolve)
        }
      },
      '/toilet_destine': {
        component: (resolve) => {
          require(['./views/homeservice/cleaning/choiceness/toilet_destine.vue'], resolve)
        }
      },
      '/toilet_pay': {
        component: (resolve) => {
          require(['./views/homeservice/cleaning/choiceness/toilet_pay.vue'], resolve)
        }
      }
    }
  },
  // 日常保洁
  '/cleaning/daily': {
    component: (resolve) => {
      require(['./views/router-view.vue'], resolve)
    },
    subRoutes: {
      '/month_clean': {
        component: (resolve) => {
          require(['./views/homeservice/cleaning/daily/month_clean.vue'], resolve)
        }
      },
      '/hour_clean': {
        component: (resolve) => {
          require(['./views/homeservice/cleaning/daily/hour_clean.vue'], resolve)
        }
      },
      '/wasteland': {
        component: (resolve) => {
          require(['./views/homeservice/cleaning/daily/wasteland.vue'], resolve)
        }
      },
      '/wasteland_destine': {
        component: (resolve) => {
          require(['./views/homeservice/cleaning/daily/wasteland_destine.vue'], resolve)
        }
      },
      '/wasteland_pay': {
        component: (resolve) => {
          require(['./views/homeservice/cleaning/daily/wasteland_pay.vue'], resolve)
        }
      },
      '/hour_destine': {
        component: (resolve) => {
          require(['./views/homeservice/cleaning/daily/hour_destine.vue'], resolve)
        }
      },
      '/hour_pay': {
        component: (resolve) => {
          require(['./views/homeservice/cleaning/daily/hour_pay.vue'], resolve)
        }
      },
      '/month_destine': {
        component: (resolve) => {
          require(['./views/homeservice/cleaning/daily/month_destine.vue'], resolve)
        }
      },
      '/month_pay': {
        component: (resolve) => {
          require(['./views/homeservice/cleaning/daily/month_pay.vue'], resolve)
        }
      }
    }
  },
  // 母婴月嫂
  '/motherbaby': {
    component: (resolve) => {
      require(['./views/router-view.vue'], resolve)
    },
    subRoutes: {
      '/yuesao_will': {
        component: (resolve) => {
          require(['./views/homeservice/motherbaby/yuesao_will.vue'], resolve)
        }
      },
      '/yuesao': {
        component: (resolve) => {
          require(['./views/homeservice/motherbaby/yuesao.vue'], resolve)
        }
      },
      '/personal': {
        component: (resolve) => {
          require(['./views/homeservice/motherbaby/personal.vue'], resolve)
        }
      },
      '/yuesao_destine': {
        component: (resolve) => {
          require(['./views/homeservice/motherbaby/yuesao_destine.vue'], resolve)
        }
      },
      '/yuesao_pay': {
        component: (resolve) => {
          require(['./views/homeservice/motherbaby/yuesao_pay.vue'], resolve)
        }
      },
      '/lactagogue': {
        component: (resolve) => {
          require(['./views/homeservice/motherbaby/lactagogue.vue'], resolve)
        }
      },
      '/lactagogue_destine': {
        component: (resolve) => {
          require(['./views/homeservice/motherbaby/lactagogue_destine.vue'], resolve)
        }
      },
      '/lactagogue_pay': {
        component: (resolve) => {
          require(['./views/homeservice/motherbaby/lactagogue_pay.vue'], resolve)
        }
      },
      '/guid_destine': {
        component: (resolve) => {
          require(['./views/homeservice/motherbaby/guid_destine.vue'], resolve)
        }
      },
      '/guid_pay': {
        component: (resolve) => {
          require(['./views/homeservice/motherbaby/guid_pay.vue'], resolve)
        }
      },
      '/home_guid': {
        component: (resolve) => {
          require(['./views/homeservice/motherbaby/home_guid.vue'], resolve)
        }
      }
    }
  },
  // 医患陪护
  '/nursing': {
    component: (resolve) => {
      require(['./views/router-view.vue'], resolve)
    },
    subRoutes: {
      '/level1': {
        component: (resolve) => {
          require(['./views/homeservice/nursing/level1.vue'], resolve)
        }
      },
      '/level2': {
        component: (resolve) => {
          require(['./views/homeservice/nursing/level2.vue'], resolve)
        }
      },
      '/level3': {
        component: (resolve) => {
          require(['./views/homeservice/nursing/level3.vue'], resolve)
        }
      },
      '/destine1': {
        component: (resolve) => {
          require(['./views/homeservice/nursing/destine1.vue'], resolve)
        }
      },
      '/pay1': {
        component: (resolve) => {
          require(['./views/homeservice/nursing/pay1.vue'], resolve)
        }
      },
      '/destine2': {
        component: (resolve) => {
          require(['./views/homeservice/nursing/destine2.vue'], resolve)
        }
      },
      '/pay2': {
        component: (resolve) => {
          require(['./views/homeservice/nursing/pay2.vue'], resolve)
        }
      },
      '/destine3': {
        component: (resolve) => {
          require(['./views/homeservice/nursing/destine3.vue'], resolve)
        }
      },
      '/pay3': {
        component: (resolve) => {
          require(['./views/homeservice/nursing/pay3.vue'], resolve)
        }
      }
    }
  },
   // 上门擦鞋
  '/shoes': {
    component: (resolve) => {
      require(['./views/router-view.vue'], resolve)
    },
    subRoutes: {
      '/shine_shoes': {
        component: (resolve) => {
          require(['./views/homeservice/shoes/shine_shoes.vue'], resolve)
        }
      },
      '/shoes_pay': {
        component: (resolve) => {
          require(['./views/homeservice/shoes/shoes_pay.vue'], resolve)
        }
      },
      '/shoebox': {
        component: (resolve) => {
          require(['./views/homeservice/shoes/shoebox.vue'], resolve)
        }
      },
      '/shoebox_pay': {
        component: (resolve) => {
          require(['./views/homeservice/shoes/shoebox_pay.vue'], resolve)
        }
      },
      '/buy': {
        component: (resolve) => {
          require(['./views/homeservice/shoes/buy.vue'], resolve)
        }
      }
    }
  },
   // 衣橱管理
  '/wardrobe': {
    component: (resolve) => {
      require(['./views/router-view.vue'], resolve)
    },
    subRoutes: {
      '/clean_up': {
        component: (resolve) => {
          require(['./views/homeservice/wardrobe/clean_up.vue'], resolve)
        }
      },
      '/clean_pay': {
        component: (resolve) => {
          require(['./views/homeservice/wardrobe/clean_pay.vue'], resolve)
        }
      },
      '/planning': {
        component: (resolve) => {
          require(['./views/homeservice/wardrobe/planning.vue'], resolve)
        }
      },
      '/planning_pay': {
        component: (resolve) => {
          require(['./views/homeservice/wardrobe/planning_pay.vue'], resolve)
        }
      },
      '/pair_up': {
        component: (resolve) => {
          require(['./views/homeservice/wardrobe/pair_up.vue'], resolve)
        }
      },
      '/pair_up_pay': {
        component: (resolve) => {
          require(['./views/homeservice/wardrobe/pair_up_pay.vue'], resolve)
        }
      },
      '/buy': {
        component: (resolve) => {
          require(['./views/homeservice/wardrobe/buy.vue'], resolve)
        }
      }
    }
  },
  // 家庭服务
  '/homeservice': {
    component: (resolve) => {
      require(['./views/router-view.vue'], resolve)
    },
    subRoutes: {
      '/cleaning': {
        component: (resolve) => {
          require(['./views/homeservice/cleaning/index.vue'], resolve)
        }
      },
      '/commentary': {
        component: (resolve) => {
          require(['./views/homeservice/commentary.vue'], resolve)
        }
      },
      '/motherbaby': {
        component: (resolve) => {
          require(['./views/homeservice/motherbaby/index.vue'], resolve)
        }
      },
      '/nursing': {
        component: (resolve) => {
          require(['./views/homeservice/nursing/index.vue'], resolve)
        }
      },
      '/shoes': {
        component: (resolve) => {
          require(['./views/homeservice/shoes/index.vue'], resolve)
        }
      },
      '/wardrobe': {
        component: (resolve) => {
          require(['./views/homeservice/wardrobe/index.vue'], resolve)
        }
      }
    }
  },
  // 订单
  '/order': {
    name: 'order',
    auth: true,
    component: (resolve) => {
      require(['./views/router-view.vue'], resolve)
    },
    subRoutes: {
      '/list': {
        component: (resolve) => {
          require(['./views/order/list.vue'], resolve)
        }
      },
      '/comment': {
        component: (resolve) => {
          require(['./views/order/comment.vue'], resolve)
        }
      },
      '/finish': {
        component: (resolve) => {
          require(['./views/order/finish.vue'], resolve)
        }
      }
    }
  },
  // 个人中心
  '/user': {
    name: 'user',
    auth: true,
    component: (resolve) => {
      require(['./views/router-view.vue'], resolve)
    },
    subRoutes: {
      '/': {
        component: (resolve) => {
          require(['./views/user/index.vue'], resolve)
        }
      },
      '/info': {
        component: (resolve) => {
          require(['./views/user/info.vue'], resolve)
        }
      },
      '/recharge': {
        component: (resolve) => {
          require(['./views/user/recharge.vue'], resolve)
        }
      },
      '/recharge_log': {
        component: (resolve) => {
          require(['./views/user/recharge_log.vue'], resolve)
        }
      },
      '/coupon': {
        component: (resolve) => {
          require(['./views/user/coupon.vue'], resolve)
        }
      },
      '/appoint': {
        component: (resolve) => {
          require(['./views/user/appoint.vue'], resolve)
        }
      },
      '/address': {
        component: (resolve) => {
          require(['./views/user/address.vue'], resolve)
        }
      },
      '/address/add': {
        component: (resolve) => {
          require(['./views/user/address_add.vue'], resolve)
        }
      },
      '/change_password': {
        component: (resolve) => {
          require(['./views/user/change_password.vue'], resolve)
        }
      },
      '/receipt': {
        component: (resolve) => {
          require(['./views/user/receipt.vue'], resolve)
        }
      },
      '/monthly_ticket': {
        component: (resolve) => {
          require(['./views/user/monthly_ticket.vue'], resolve)
        }
      }
    }
  },
  // 404页面
  '*': {
    name: '404error',
    component: (resolve) => {
      require(['./views/404.vue'], resolve)
    }
  }
})

export default router
