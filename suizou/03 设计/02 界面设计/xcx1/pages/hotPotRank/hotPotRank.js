//获取应用实例
var app = getApp();
Page({
  data: {
      list: [],
      display:[],
      label:[],
      hasMore: true,
      pageNum:1,
      nextNum:null,
      totalNum:null,
      nowPage:[],
      sore:true,
      sort:4
  },

  onLoad: function () {
       const that = this;
      //const apiUrl = 'https://www.wqiyu.com/cqhg/pages/hotPotRank/hotPotRank.json';
      //const apiUrl = 'http://192.168.0.104/xcx1/pages/hotPotRank/hotPotRank.json';
      const apiUrl = 'https://www.wqiyu.com/fric/mobile/hotpot.do';
      wx.showToast({
          title: '加载中',
          icon: 'loading',
          duration: 2000,
          success:function(){
              wx.request({
                  url: apiUrl, //仅为示例，并非真实的接口地址
                  data: {},
                  header: {'content-type': 'application/json'},
                  success: function(res) {
                      if(res.data.status =="ok"){
                          wx.hideToast();
                          for(var i=0;i<res.data.datas.datas.length;i++){
                              res.data.datas.datas[i].tags = res.data.datas.datas[i].tags.split(",");
                          }
                          that.setData({
                              list: res.data.datas.datas,
                              hasMore: false
                          });
                      }
                      else {
                          wx.showToast({
                              title: '加载中',
                              icon: 'success',
                              duration: 2000
                          })
                      }
                  }
              })
          }
      });
  },
    pageTo(){
       wx.navigateTo({
           url: ''
           // success:function (res) {
           //
           // }
       })
   },
    dial (e) { //拨打电话号码
      wx.makePhoneCall({
          phoneNumber: e.currentTarget.dataset.name
      })
  },
    onShareAppMessage: function () {  //分享
        return {
            title: '分享标题',
            desc: '分享描述',
            path: ''
        }
    },
    hotPotRank:function () {
        wx.navigateTo({
            url: '../hotPotRank/hotPotRank'
        })
    },
    hotPotTips:function () {
        wx.navigateTo({
            url: '../hotPotTips/hotPotTips'
        });
    },
    onReachBottom: function() { //加载更多
        const that = this;
        wx.showToast({
            title: '加载中',
            icon: 'loading',
            duration: 1000,
            success:function(){
                that.setData({
                    // nowPage: res.data.datas.datas,hasMore: false
                })
                // context.nowPage = res.datas.datas;
                // context.totalNum = res.datas.totalPages;
                // context.nextNum = res.datas.nextPage;
                // context.pageNum = res.datas.pageNo;
                // context.list = context.list.concat(context.nowPage);
            }
        });
    }
});
