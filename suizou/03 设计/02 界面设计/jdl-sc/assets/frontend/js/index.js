/**
 * Created by WHB on 2016/10/27.
 */
$(function () {

    /*幻灯片*/
    $(".nav").slider({
        defauTime:5000,
        moveTime:300
    });

    /*网站导航*/
    $(document).ready(function() {
        $('#nav').onePageNav();
    });

    /*滚动条到顶部距离*/
    $(document).scroll(function(){
        var top = $(document).scrollTop();
        var nav = $("#nav");
        if(top>900){
            nav.removeClass("absolute")
        }else {
            nav.addClass("absolute")
        }
    });



    /*返回顶部&&联系我们的操作*/
    var BackToTop = function(_this,options){
        defaults = {
            autoShow : true,
            timeEffect : 500,
            effectScroll : 'linear',
            appearMethod : 'slide'
        };
        var opts = $.extend({}, defaults,options);
        var backTotopMethod = {
            init:function(_this){
                backTotopMethod.Click(_this);
                _this.hide();
                if(opts.autoShow) {
                    $(window).scroll(function(){
                        if($(this).scrollTop() != 0) {
                            switch (opts.appearMethod) {
                                case 'fade' : _this.fadeIn('fast'); break;
                                case 'slide' : _this.slideDown('fast'); break;
                                default : _this.show();
                            }
                        }
                        else {
                            switch (opts.appearMethod) {
                                case 'fade' : _this.fadeOut('fast'); break;
                                case 'slide' : _this.slideUp('fast'); break;
                                default : _this.hide();
                            }
                        }
                    });
                }
            },

            Click:function(_this){
                $("#top").on("click",function(){
                    $('body,html').animate({scrollTop:0},opts.timeEffect,opts.effectScroll);
                });
            }
        };
        backTotopMethod.init(_this)
    };
    new BackToTop($("#top"),{
        autoShow : true,
        appearMethod : 'fade',
        timeEffect : 500,
        effectScroll :  'linear',
        autoShowOffset :  '0',
        opacity :  1,
        top :  100
    });


    $("#pj-lunbo").Carousel({
        'play':'true', //是否循环播放
        'prevButton':'#prev', //左按钮
        'nextButton':'#next',  //右按钮
        'auto':'true'   //是否自动播放
    });
    $("#pj-lunbo1").Carousel({
        'play':'false', //是否循环播放
        'prevButton':'#prev1', //左按钮
        'nextButton':'#next1',  //右按钮
        'auto':'true'   //是否自动播放
    });
    $("#pj-lunbo2").Carousel({
        'play':'false', //是否循环播放
        'prevButton':'#prev2', //左按钮
        'nextButton':'#next2',  //右按钮
        'auto':'true'   //是否自动播放
    });
    $("#pj-lunbo3").Carousel({
        'play':'false', //是否循环播放
        'prevButton':'#prev3', //左按钮
        'nextButton':'#next3',  //右按钮
        'auto':'true'   //是否自动播放
    });
    $("#pj-lunbo4").Carousel({
        'play':'false', //是否循环播放
        'prevButton':'#prev4', //左按钮
        'nextButton':'#next4',  //右按钮
        'auto':'true'   //是否自动播放
    });
    $("#pj-lunbo5").Carousel({
        'play':'false', //是否循环播放
        'prevButton':'#prev5', //左按钮
        'nextButton':'#next5',  //右按钮
        'auto':'true'   //是否自动播放
    });
});
