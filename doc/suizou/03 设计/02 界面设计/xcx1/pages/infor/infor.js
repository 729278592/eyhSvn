//index.js
//获取应用实例
var WxParse = require('../../wxParse/wxParse.js');
const app = getApp()
Page({
    data: {
        list:[],
        indicatorDots: true,
        autoplay: true,

        circular:true,
        interval: 5000,
        duration: 1000,
        label:[],
        hasMore: true
    },
    dial (e) { //拨打电话号码
        wx.makePhoneCall({
            phoneNumber: e.currentTarget.dataset.name
        })
    },
    changeIndicatorDots: function(e) {
        this.setData({
            indicatorDots: !this.data.indicatorDots
        })
    },
    changeAutoplay: function(e) {
        this.setData({
            autoplay: !this.data.autoplay
        })
    },
    intervalChange: function(e) {
        this.setData({
            interval: e.detail.value
        })
    },
    durationChange: function(e) {
        this.setData({
            duration: e.detail.value
        })
    },
    onLoad: function(options) {
        const that = this;
        //const apiUrl = 'https://www.wqiyu.com/cqhg/pages/infor/infor.json';
        const apiUrl = 'https://www.wqiyu.com/fric/mobile/hotpotDetail.do?id='+options.id;
        //const apiUrl = 'http://192.168.0.104/xcx1/pages/infor/infor.json';


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
                            res.data.datas.slider = res.data.datas.slider.split(",");
                            res.data.datas.tags = res.data.datas.tags.split(",");
                            var article = res.data.datas.detailsIntro;
                            console.log(options.id)
                            that.setData({
                                list: res.data.datas
                            })
                            WxParse.wxParse('article', 'html', article, that,1);
                        }
                        else {

                        }
                    }
                })
            }
        });

    }
});
