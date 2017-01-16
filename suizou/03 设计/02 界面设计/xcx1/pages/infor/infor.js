//index.js
//获取应用实例
const app = getApp()
Page({
    data: {
        list:[],
        imgUrls: [
            'http://www.wqiyu.com/cqhg/images/slider1.jpg',
            'http://www.wqiyu.com/cqhg/images/slider1.jpg',
            'http://www.wqiyu.com/cqhg/images/slider1.jpg'
        ],
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
        const apiUrl = 'http://www.wqiyu.com/cqhg/pages/infor/infor.json';
        //const apiUrl = 'http://192.168.0.104/xcx1/pages/infor/infor.json';
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
                            if(res.data.status =="ok"){
                                wx.hideToast();
                                console.log(options.id)
                                for(var i=0;i<res.data.datas.length;i++){
                                    res.data.datas[i].slider = res.data.datas[i].slider.split(",");
                                }
                                for(var i=0;i<res.data.datas.length;i++){
                                    res.data.datas[i].product = res.data.datas[i].product.split(",");
                                }
                                for(var i=0;i<res.data.datas.length;i++){
                                    res.data.datas[i].tags = res.data.datas[i].tags.split(",");
                                }

                                that.setData({
                                    list: res.data.datas[options.id-1]
                                })
                            }
                            else {

                            }

                        }
                    })
                },1000);
            }
        });

    }
});
