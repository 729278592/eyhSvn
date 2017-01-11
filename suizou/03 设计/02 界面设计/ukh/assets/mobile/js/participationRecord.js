/**
 * Created by WHB on 2016/11/23.
 */

;(function ($,window,document,undefined) {
    $.fn.scrollLoad = function (options) {
        var defaults = {
            startNum:7,
            limit: 16,
            wajxHtml:'',
            firstLoad:true,//第一次加载为true
            timeOutFlag : undefined //控制加载时上拉再次加载
        };
        
        var opts = $.extend({}, defaults, options);
        
        var Methods = {
            init: function (_this) {
                opts.timeOutFlag = setTimeout(function(){
                    $.post(options.interface,{},function(data){
                        opts.res = data.datas;
                        if(data.status == "ok"){
                            Methods.loading(true,opts.res,_this);
                        }else {
                            showErrMsg("加载失败");
                        }
                       // opts.timeOutFlag = undefined;
                    },"json");
                    setTimeout(function(){opts.timeOutFlag = undefined;},2000);
                },100);
                Methods.scrollLoad(_this)
            },
            ajaxRecord:function(obj,wajxHtml){
                //模板片段
                wajxHtml += '<li>'+
                                '<a href="shopsShoppingInfor.html">'+
                                    '<div class="couponImg style">'+
                                        '<img src="'+obj.headImg+'" class="couponImg1" alt=""/>'+
                                    '</div>'+
                                    '<span class="inforList">'+
                                        '<span class="title">'+obj.title+'</span>'+
                                        '<span>'+
                                            '需要积分 : <span class="color fs16">'+obj.needScore+'</span>'+
                                        '</span>'+
                                        '<span>'+
                                            '剩余数量 : <span class="color1">'+obj.surplusNum+'</span>'+
                                        '</span>'+
                                    '</span>'+
                                '</a>'+
                            '</li>';
                return wajxHtml;
            },
            loading : function(flag,res,_this){

                var loadingFix = $("#loddingFix");
                if(loadingFix.get(0)){

                    loadingFix.hide();
                }else{
                  
                    var loadingHtml = '<div id="loddingFix" style="width: 100%;height: 100%;z-index: 999;display: none;position: fixed;background: gray;filter:alpha(opacity=50); -moz-opacity:0.5; -khtml-opacity: 0.5; opacity: 0.5;left: 0;top: 0; "><img style=" width: 2.5rem; top: 47%; position: fixed; left: 45%; " src="../../../assets/mobile/images/loading.gif"></div>';
                    $("body").append(loadingHtml);
                    loadingFix = $("#loddingFix");
                }

                //第一次加载
                if(opts.firstLoad){
                    loadingFix.show();
                    setTimeout(function(){
                        loadingFix.hide();
                        for(var i = 0;i<opts.startNum;i++){
                            _this.append(Methods.ajaxRecord(res[i],opts.wajxHtml));
                        }
                        opts.wajxHtml = '';
                    },1000);
                    return;
                }

                //不是第一次加载
                if(!opts.firstLoad){
                    loadingFix.show();
                    setTimeout(function(){
                        loadingFix.hide();
                        if(opts.startNum+opts.limit>res.length){
                            if((opts.limit>res.length-opts.startNum)&&(res.length-opts.startNum>0)){
                                for(var i = opts.startNum;i<res.length;i++){
                                    _this.append(Methods.ajaxRecord(res[i], opts.wajxHtml));
                                }

                                opts.startNum = opts.limit + opts.startNum;
                                opts.wajxHtml = '';
                            }
                            return;
                        }

                        for (var i = opts.startNum; i < opts.startNum + opts.limit; i++) {
                            _this.append(Methods.ajaxRecord(res[i], opts.wajxHtml));
                        }

                        opts.startNum = opts.limit + opts.startNum;
                        opts.wajxHtml = '';
                    },1000);
                }
            },
            scrollLoad:function(_this){
                var iStartY = 0;
                var iStartPagey = 0;
                $(window).on("touchstart", function (ev) {
                    iStartPagey = ev.originalEvent.targetTouches[0].pageY;
                });

                $(window).on("touchmove", function (ev) {
                    iStartY = iStartPagey - ev.originalEvent.targetTouches[0].pageY;
                });

                $(window).on("touchend", function () {
                    var scrollTop = $(this).scrollTop();
                    var scrollHeight = $(document).height();
                    var windowHeight = $(this).height();

                    if (scrollTop + windowHeight == scrollHeight) {
                        if (iStartY > 0) {
                            iStartY = 0;
                            if(opts.timeOutFlag){
                                return;
                            }
                            opts.timeOutFlag = setTimeout(function(){

                                $.post(options.interface, {}, function (data) {
                                    if (data.status == "ok") {//查询成功
                                        opts.res = data.datas;
                                        opts.firstLoad = false;
                                        if(opts.startNum>opts.res.length){
                                            showErrMsg("没有更多数据咯");
                                            return;
                                        }
                                        Methods.loading(true, opts.res, _this);
                                    }
                                    else {
                                        showErrMsg("加载失败");
                                    }
                                }, "json");
                                setTimeout(function(){opts.timeOutFlag = undefined;},2000);
                            },100)

                        }
                    }
                });
            }
        };
        
        Methods.init($(this));
    };
})(jQuery,window,document,undefined);