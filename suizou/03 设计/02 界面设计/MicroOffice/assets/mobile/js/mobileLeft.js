/**
 * Created by WHB on 2016/3/30.
 */

/*手机顶部页面切换*/
$(function(){
    var html =  '<div class="mask hide leftMask">'+
                    '<div class="leftNav hide">'+
                        '<div class="person-head center clearfix">'+
                            '<img src="../../assets/mobile/images/portrait.png" alt="" class="portrait">'+
                        '</div>'+
                        '<ul class="menu-list">'+
                            '<li>'+
                                '<a href="resumeCenter.html">'+
//                                    '<i class="fa fa-home"></i>'+
                                    '<span>简历中心</span>'+
                                    '<i class="fa fa-angle-right"></i>'+
                                '</a>'+
                            '</li>'+
                            '<li>'+
                                '<a href="jobRecord.html">'+
//                                    '<i class="fa fa-bars"></i>'+
                                    '<span>求职记录</span>'+
                                    '<i class="fa fa-angle-right"></i>'+
                                '</a>'+
                            '</li>'+
                            '<li>'+
                                '<a href="desirePosition.html">'+
//                                    '<i class="fa fa-th-large"></i>'+
                                    '<span>感兴趣职位</span>'+
                                    '<i class="fa fa-angle-right"></i>'+
                                '</a>'+
                            '</li>'+
                            '<li>'+
                                '<a href="forwardingRecord.html">'+
//                                    '<i class="fa fa-user"></i>'+
                                    '<span>转发记录</span>'+
                                    '<i class="fa fa-angle-right"></i>'+
                                '</a>'+
                            '</li>'+
                        '</ul>'+
                    '</div>'+
                '</div>';
    $(".container").append(html);
    var html1 = '<div class="bars">'+
                    '<i class="fa fa-bars"></i>'+
                '</div>';
    $(".container").append(html1);
});

    var mobileLeft = function(){
        var fabarsClck = function(_this){
            _this.find(".bars").on("touchend",function(){
                _this.find(".leftMask,.leftNav").removeClass("hide");
                _this.find(".leftMask").addClass('slideIn');
                $($(".leftMask")).on('webkitAnimationEnd', function (){
                    $(".leftMask").removeClass("slideIn");
                    _this.find(".leftMask,.leftNav").removeClass("hide");
                }).on('animationend', function (){
                    $(".leftMask").removeClass("slideIn");
                    _this.find(".leftMask,.leftNav").removeClass("hide");
                });
            })
        };

        var maskHeadClick = function(_this){
            _this.delegate(".leftMask","click",function(){
                $(this).addClass('slideOut');
                $($(".leftMask")).on('webkitAnimationEnd', function (){
                    $(".leftMask").removeClass("slideOut");
                    _this.find(".leftMask,.leftNav").addClass("hide");
                }).on('animationend', function (){
                    $(".leftMask").removeClass("slideOut");
                    _this.find(".leftMask,.leftNav").addClass("hide");
                });
            })
        };

        var menuListClick = function(_this){
            _this.find(".leftNav").on("click",function(e){
                e.stopPropagation();
            });
        };

        var maskHeadTouch = function(_this) {
            var iStartX = 0;
            var iStartPagex = 0;
            _this.find(".leftMask").on("touchstart", function (ev) {
                iStartPagex = ev.originalEvent.targetTouches[0].pageX;
            });

            _this.find(".leftMask").on("touchmove", function (ev) {
                iStartX = iStartPagex - ev.originalEvent.targetTouches[0].pageX;
            });

            _this.find(".leftMask").on("touchend", function () {
                if(iStartX>30){
                    iStartX = 0;
                    $(this).addClass('slideOut');
                    $($(".leftMask")).on('webkitAnimationEnd', function (){
                        $(".leftMask").removeClass("slideOut");
                        _this.find(".leftMask,.leftNav").addClass("hide");
                    }).on('animationend', function (){
                        $(".leftMask").removeClass("slideOut");
                        _this.find(".leftMask,.leftNav").addClass("hide");
                    });
//                    $(".bd").css({"overflow-y":"auto",height:"auto","paddingBottom":"50px"});
                }
            });
        };

        return {
            init:function(_this){
                fabarsClck(_this);
                maskHeadClick(_this);
                menuListClick(_this);
                maskHeadTouch(_this);
            }
        }
    }();




