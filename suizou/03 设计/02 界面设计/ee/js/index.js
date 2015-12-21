/**
 * Created by eyohu023 on 2015/11/26.
 */


/**
 * Created by eyohu023 on 2015/11/30.
 */


(function($){

    /*全屏图片居中*/
    var ai = $(".auto-img");
    ai.each(function(){
        $(this).get(0).style.width ="1920px";
        var that = $(this);
        function toResize(){
            var veiwidth = $(window).width();
            if(veiwidth>1205){
                that.get(0).style.left = -(parseInt(that.get(0).style.width) - veiwidth)/2 + "px"
            }
        }
        toResize();
        $(window).on("resize",function(){
            toResize()
        });
    });









    $.fn.activeSlider = function(options){
        var defaul = {
            setActive:5000
        };
        var opts = $.extend({},defaul,options);
        var Methods = {
            init:function(_this){
                activeLeft  = _this.find(".active-left");
                activeRight = _this.find(".active-right");
                activePaginatioA = _this.find(".active-pagination a");
                activeUl = $(".active-ul");
                oLiActive = _this.find("li");
                liWidthActive = oLiActive[0].offsetWidth;
                activeUlWidth = activeUl.offset().width;
                activeUlWidth = liWidthActive*oLiActive.size() + "px";
                activeUl.width(activeUlWidth);
                timerActive = setInterval(Methods.autoPlay,opts.setActive);
                inowActive = 0;
                btnActive = true;
                Methods.mouseover(_this);
                Methods.mouseout(_this);
                Methods.left();
                Methods.right();
                Methods.paginatioaClick();
            },
            left:function(){
                activeLeft.on("click",function(){
                    clearInterval(timerActive);
                    if(btnActive == true){
                        btnActive = false;
                        if(inowActive == 0){
                            inowActive = oLiActive.size()-1;
                            activePaginatioA.eq(inowActive).addClass("active");
                            activePaginatioA.eq(inowActive).siblings().removeClass("active");
                            move(activeUl[0], {left : -inowActive * liWidthActive},function(){
                                btnActive = true;
                            });
                            btnActive = true;
                        }else{
                            inowActive--;
                            activePaginatioA.eq(inowActive).addClass("active");
                            activePaginatioA.eq(inowActive).siblings().removeClass("active");
                            move(activeUl[0], {left : -inowActive * liWidthActive},function(){
                                btnActive = true;
                            });
                        }
                    }
                })
            },
            right:function(){
                activeRight.on("click",function(){
                    if(btnActive == true){
                        if(inowActive==oLiActive.size()-1){
                            clearInterval(timerActive);
                            inowActive = 0;
                            activePaginatioA.eq(inowActive).addClass("active");
                            activePaginatioA.eq(inowActive).siblings().removeClass("active");
                            move(activeUl[0], {left : -inowActive * liWidthActive},function(){
                                btnActive = true;
                            });
                        }else{
                            inowActive++;
                            activePaginatioA.eq(inowActive).addClass("active");
                            activePaginatioA.eq(inowActive).siblings().removeClass("active");
                            move(activeUl[0], {left : -inowActive * liWidthActive},function(){
                                btnActive = true;
                            });
                        }
                    }
                })
            },
            autoPlay:function(){
                if(btnActive == true){
                    btnActive = false;
                    if(inowActive == oLiActive.size()-1){
                        inowActive = 0;
                        activePaginatioA.eq(inowActive).addClass("active");
                        activePaginatioA.eq(inowActive).siblings().removeClass("active");
                        move(activeUl[0], {left : -inowActive * liWidthActive},function(){
                            btnActive = true;
                        });
                        btnActive = true;
                    }else{
                        inowActive++;
                        activePaginatioA.eq(inowActive).addClass("active");
                        activePaginatioA.eq(inowActive).siblings().removeClass("active");
                        move(activeUl[0], {left : -inowActive * liWidthActive},function(){
                            btnActive = true;
                        });
                    }
                }
            },
            paginatioaClick:function(){
                activePaginatioA.each(function(i){
                    $(this).on("click",function(){
                        clearInterval(timerActive);
                        inowActive = i;
                        move(activeUl[0], {left : -inowActive * liWidthActive},function(){

                        });
                        $(this).addClass("active");
                        $(this).siblings().removeClass("active");
                    })
                });

            },
            mouseover:function(_this){
                _this.on("mouseover",function(){
                    clearInterval(timerActive)
                })
            },
            mouseout:function(_this){
                _this.on("mouseout",function(){
                    timerActive = setInterval(Methods.autoPlay,opts.setActive);
                })
            }
        };
        Methods.init($(this))
    };












    /*返回顶部&&联系我们的操作*/
    $.BackToTop = {
        defaults: {
            text : 'Back to top',
            autoShow : true,
            timeEffect : 500,
            effectScroll : 'linear',
            appearMethod : 'slide'
        },
        init:function(options){
            /* vars **/
            opts = $.extend({}, $.BackToTop.defaults ,options);
            $.BackToTop._constructLink();

            if(opts.autoShow) {
                $(window).scroll(function(){
                    if($(this).scrollTop() != 0) {
                        switch (opts.appearMethod) {
                            case 'fade' : aBack.fadeIn('fast'); break;
                            case 'slide' : aBack.slideDown('fast'); break;
                            default : aBack.show();
                        }
                    }
                    else {
                        switch (opts.appearMethod) {
                            case 'fade' : aBack.fadeOut('fast'); break;
                            case 'slide' : aBack.slideUp('fast'); break;
                            default : aBack.hide();
                        }
                    }
                });
            }

            $('#BackToTop').click(function(e) {
                e.preventDefault();
                $('body,html').animate({scrollTop:0},opts.timeEffect,opts.effectScroll);
            });
            $('#BackToTop').hover(function(){
                $(this).html('返回顶部');
            },function(){
                $(this).html(opts.text);
            });
        },

        _constructLink:function() {
            aBack = $('<div />',{
                id : 'BackToTop',
                class:'weibo',
                href : '#body',
                html : opts.text
            }).appendTo('.we .top');
            if(!opts.autoShow) aBack.show();
        }

    };

    BackToTop = function(options) {
        $.BackToTop.init(options);
    };
    function weHover(){
        var mpt = $(".message,.phone,.tuo_code");
        mpt.hover(function () {
                $(this).find(".qqgroup-show").removeClass("hide");
                $(this).find(".telphone-show").removeClass("hide");
                $(this).find(".qrcode").removeClass("hide");
            },
            function () {
                $(this).find(".qqgroup-show").addClass("hide");
                $(this).find(".telphone-show").addClass("hide");
                $(this).find(".qrcode").addClass("hide");
            }
        );
    }
    weHover()
})(jQuery);