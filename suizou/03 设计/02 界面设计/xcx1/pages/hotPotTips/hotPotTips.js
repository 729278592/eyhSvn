//获取应用实例
var app = getApp();
Page({

    data: {
        list: [],
        label:[],
        _num:0,
        hasMore: true,
        pageNum:1,
        nextNum:null,
        totalNum:null,
        nowPage:[],
        sore:true
    },

    onLoad: function () {

        const that = this;
        //const apiUrl = 'https://www.wqiyu.com/cqhg/pages/hotPotTips/hotPotTips.json';
        //const apiUrl = 'http://192.168.0.105/xcx1/pages/hotPotTips/hotPotTips.json';
        const apiUrl = 'https://www.wqiyu.com/fric/mobile/hotpotTips.do';
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
                                for(var i = 0;i<res.data.datas.datas.length;i++){
                                    res.data.datas.datas[i].displayStyle = i;
                                }
                                res.data.datas.datas[0].displayStyle = 0;

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

    headControll:function (e) {
        if(this.data._num==e.target.dataset.num){
            this.setData({
                _num:-1
            });
            return ;
        }
        this.setData({
            _num:e.target.dataset.num
        })

    },

});
