/**
 * Created by WHB on 2017/1/5.
 */
// $(function () {
//     var loadHtml =  '<div id="loddingFix">'+
//                         '<img src="images/loading.gif">'+
//                     '</div>';
//
//     var timeOutFlag = undefined;
//
//     $(window).scroll(function () {
//
//         var scrollTop = $(this).scrollTop();
//         var scrollHeight = $(document).height();
//         var windowHeight = $(this).height();
//         var wrapper = $(".wrapper");
//         if (scrollTop + windowHeight == scrollHeight) {
//
//             if(timeOutFlag){
//                 return;
//             }
//
//             timeOutFlag = setTimeout(function () {
//                 wrapper.append(loadHtml);
//                 var loddingFix = $("#loddingFix");
//                 setTimeout(function(){
//                     $.ajax({
//                         url:"http://cms.eyohu.com/api/directive/contentList",
//                         dataType:'jsonp',
//                         data:'',
//                         jsonp:'callback',
//                         success:function(result) {
//                             console.log(JSON.stringify(result))
//                         }
//                     });
//                     timeOutFlag = undefined;
//                     loddingFix.remove();
//                 },2000);
//             }, 100);
//
//         }
//     });
// });


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
                    $.ajax({
                        url:"http://cms.eyohu.com/api/directive/contentList",
                        dataType:'jsonp',
                        data:'',
                        jsonp:'callback',
                        success:function(data) {
                            console.log(JSON.stringify(data))
                            opts.res = data.page.list;
                            Methods.loading(true,opts.res,_this);
                        }
                    });

                    setTimeout(function(){opts.timeOutFlag = undefined;},2000);
                },100);
                Methods.scrollLoad(_this)
            },
            ajaxRecord:function(obj,wajxHtml){
                wajxHtml += '<li>'+
                                '<a class="clearfix" href="">'+
                                '<p class="title">'+obj.title+'</p>'+
                                '<div  class="left dinW1 overflowHidden">'+
                                    '<img src="'+obj.cover+'" alt="">'+
                                '</div>'+
                                '<p class="acticlInfor">'+obj.description+'</p>'+
                                '</a>'+
                            '</li>'
                return wajxHtml;
            },
            loading : function(flag,res,_this){

                var loadingFix = $("#loddingFix");
                if(loadingFix.get(0)){

                    loadingFix.hide();
                }else{

                    var loadingHtml = '<div id="loddingFix" style="width: 100%;height: 100%;z-index: 999;display: none;position: fixed;background: gray;filter:alpha(opacity=50); -moz-opacity:0.5; -khtml-opacity: 0.5; opacity: 0.5;left: 0;top: 0; "><img style=" width: 2.5rem; top: 47%; position: fixed; left: 45%; " src="images/loading.gif"></div>';
                    $("body").append(loadingHtml);
                    loadingFix = $("#loddingFix");

                }

                if(opts.firstLoad){
                    loadingFix.show();
                    setTimeout(function(){
                        loadingFix.hide();
                        if(opts.startNum>opts.totalCount){
                            opts.startNum = opts.totalCount;
                        }
                        for(var i = 0;i<opts.startNum;i++){
                            _this.append(Methods.ajaxRecord(res[i],opts.wajxHtml));
                        }
                        opts.wajxHtml = '';
                    },1000);
                    return;
                }

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
                                console.log(opts.startNum)
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


                $(window).scroll(function () {
                    var scrollTop = $(this).scrollTop();
                    var scrollHeight = $(document).height();
                    var windowHeight = $(this).height();

                    if (scrollTop + windowHeight == scrollHeight) {
                        if(opts.timeOutFlag){
                            return;
                        }
                        opts.timeOutFlag = setTimeout(function(){

                            $.ajax({
                                url:"http://cms.eyohu.com/api/directive/contentList",
                                dataType:'jsonp',
                                data:'',
                                jsonp:'callback',
                                success:function(data) {
                                    opts.res = data.page.list;
                                    opts.firstLoad = false;
                                    if(opts.startNum-opts.limit>opts.res.length){
                                        showErrMsg("没有更多数据咯");
                                        return;
                                    }
                                    Methods.loading(true, opts.res, _this);

                                }
                            });
                            setTimeout(function(){opts.timeOutFlag = undefined;},2000);
                        },100)
                    }
                });
            }
        };

        Methods.init($(this));
    };

})(jQuery,window,document);




