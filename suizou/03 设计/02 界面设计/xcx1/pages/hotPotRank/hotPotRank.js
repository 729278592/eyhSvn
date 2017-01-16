const hotPot = require('../../libraries/hotPot.js');
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
      sore:true
  },

  onLoad: function () {

      const that = this;
       const apiUrl = 'http://www.wqiyu.com/cqhg/pages/hotPotRank/hotPotRank.json';
      //const apiUrl = 'http://192.168.0.104/xcx1/pages/hotPotRank/hotPotRank.json';
      wx.showToast({
          title: '加载中',
          icon: 'loading',
          duration: 2000,
          success:function(){
              setTimeout(function(){
                  wx.request({
                      url: apiUrl, //仅为示例，并非真实的接口地址
                      data: {},
                      header: {'content-type': 'application/json'},
                      success: function(res) {
                          console.log(JSON.stringify(res.data.datas.datas[0].tags.split(",")));
                          if(res.data.status =="ok"){
                              wx.hideToast();
                              for(var i=0;i<res.data.datas.datas.length;i++){
                                  res.data.datas.datas[i].tags = res.data.datas.datas[i].tags.split(",");
                              }

                              that.setData({
                                  list: res.data.datas.datas,
                                  hasMore: false
                              });
                              // console.log(res.data.datas.datas.length)
                              // if(res.data.datas.datas.length>3){
                              //     that.setData({
                              //         sore: false
                              //     });
                              //     console.log(that.sore)
                              // }
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
              },1000);
          }
      });
  },
   pageTo(){
       wx.navigateTo({
           url: '../infor/infor?id=1'
       })
   },
    dial (e) { //拨打电话号码
      wx.makePhoneCall({
          phoneNumber: e.currentTarget.dataset.name
      })
  },
    // onReachBottom: function() {
    //     const that = this;
    //     wx.showToast({
    //         title: '加载中',
    //         icon: 'loading',
    //         duration: 1000,
    //         success:function(){
    //             that.setData({
    //                 // nowPage: res.data.datas.datas,hasMore: false
    //             })
    //             // context.nowPage = res.datas.datas;
    //             // context.totalNum = res.datas.totalPages;
    //             // context.nextNum = res.datas.nextPage;
    //             // context.pageNum = res.datas.pageNo;
    //             // context.list = context.list.concat(context.nowPage);
    //         }
    //     });
    // }
});
