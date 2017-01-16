//index.js
//获取应用实例
var app = getApp()
Page({

  data: {
    list: []
  },

    onLoad: function () {

        const that = this;
        const apiUrl = 'http://www.wqiyu.com/cqhg/pages/hotPotRank/hotPotRank.json';
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
                            //console.log(JSON.stringify(res.data.datas));
                            wx.hideToast();
                            that.setData({
                                list: res.data.datas.datas,hasMore: false
                            })
                        }
                    })
                },1000);
            }
        });
    }
});
