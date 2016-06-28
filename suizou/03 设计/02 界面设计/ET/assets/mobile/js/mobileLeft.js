/**
 * Created by WHB on 2016/3/30.
 */

/*手机顶部页面切换*/
$(function(){
    var html =  '<div class="mask hide leftMask">'+
                    '<div class="leftNav hide">'+
                        '<div class="person-head personImg clearfix">'+
                            '<a href="patientInfor.html">' +
                                '<img src="../../assets/mobile/images/personImg.png" alt="" class="portrait"><br/>'+
                                '<span>李建国</span>　<img src="../../assets/mobile/images/modifyIcon.png" alt="" class="modifyIcon">'+
                            '</a>'+
                            '<div class="inforText">' +
                                '<span>积分 <span class="color">80</span></span>'+
                                '<span>优惠券 <span class="color">9</span> 张</span>'+
                            '</div>'+
                        '</div>'+
                        '<ul class="menu-list">'+
                            '<li>'+
                                '<a href="prescriptionRecord.html">'+
                                   '<img src="../../assets/mobile/images/vipIcon.png" class="icons">'+
                                    '<span>会员特权(VI会员)</span>'+
                                    '<i class="fa fa-angle-right"></i>'+
                                '</a>'+
                            '</li>'+
                            '<li>'+
                                '<a href="medicalRecord.html">'+
                                    '<img src="../../assets/mobile/images/forwardIcon.png" class="icons">'+
                                    '<span>转发记录</span>'+
                                    '<i class="fa fa-angle-right"></i>'+
                                '</a>'+
                            '</li>'+
                            '<li>'+
                                '<a href="myDoctor.html">'+
                                    '<img src="../../assets/mobile/images/activeRecordIcon.png" class="icons">'+
                                    '<span>活动记录</span>'+
                                    '<i class="fa fa-angle-right"></i>'+
                                '</a>'+
                            '</li>'+
                            '<li>'+
                                '<a href="myConsultingList.html">'+
                                    '<img src="../../assets/mobile/images/shareRecordIcon.png" class="icons">'+
                                    '<span>消费记录</span>'+
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
                if(iStartX>10){
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




