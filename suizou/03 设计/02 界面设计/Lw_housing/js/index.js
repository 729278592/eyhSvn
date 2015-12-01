/**
 * Created by eyohu023 on 2015/11/30.
 */
(function($){
    /*全屏图片居中*/
    var si = $(".auto-img");
    si.each(function(i){
        si.get(i).style.width ="1920px";
        function toResize(){
            var veiwidth = $(window).width();
            if(veiwidth>1024){
                si.get(i).style.left = -(parseInt(si.get(i).style.width) - veiwidth)/2 + "px"
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
                    Methods.autoPlay()
                })
            },
            right:function(){
                activeRight.on("click",function(){
                    if(btnActive == true){
                        if(inowActive==0){
                            clearInterval(timerActive);
                            inowActive = oLiActive.size()-1;
                            activePaginatioA.eq(inowActive).addClass("active");
                            activePaginatioA.eq(inowActive).siblings().removeClass("active");
                            move(activeUl[0], {left : -inowActive * liWidthActive},function(){
                                btnActive = true;
                            });
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
})(jQuery)