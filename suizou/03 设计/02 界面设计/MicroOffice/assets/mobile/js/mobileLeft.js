/**
 * Created by WHB on 2016/3/30.
 */

/*手机顶部页面切换*/
$(function(){
    var html =  '<div class="mask hide leftMask">'+
                    '<div class="leftNav hide">'+
                        '<ul class="menu-list">'+
                            '<li>'+
                                '<a href="">'+
                                    '<i class="fa fa-home"></i>'+
                                    '<span>首页</span>'+
                                    '<i class="fa fa-angle-right"></i>'+
                                '</a>'+
                            '</li>'+
                            '<li>'+
                                '<a href="">'+
                                    '<i class="fa fa-bars"></i>'+
                                    '<span>品牌服务</span>'+
                                    '<i class="fa fa-angle-right"></i>'+
                                '</a>'+
                            '</li>'+
                            '<li>'+
                                '<a href="">'+
                                    '<i class="fa fa-th-large"></i>'+
                                    '<span>我的社区</span>'+
                                    '<i class="fa fa-angle-right"></i>'+
                                '</a>'+
                            '</li>'+
                            '<li>'+
                                '<a href="">'+
                                    '<i class="fa fa-user"></i>'+
                                    '<span>个人中心</span>'+
                                    '<i class="fa fa-angle-right"></i>'+
                                '</a>'+
                            '</li>'+
                        '</ul>'+
                    '</div>'+
                '</div>';
    $(".page").append(html);
    var html1 = '<div class="bars">'+
                    '<i class="fa fa-bars"></i>'+
                '</div>';
    $(".page").append(html1);
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
            _this.delegate(".leftMask","touchend",function(){
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
            _this.find(".leftNav").on("touchend",function(e){
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




