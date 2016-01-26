/**
 * Created by eyohu023 on 2016/1/26.
 */
var ActiveSlider = function(activeSlider,options){
    var defaul = {
        setActive:5000
    };
    var opts = $.extend({},defaul,options);
    var Methods = {
        init:function(_this){
            activeLeft    = _this.find("#active-left");
            activeRight   = _this.find("#active-right");
            activePaginatioA = _this.find(".active-pagination a");
            activeUl  = _this.find("#active-ul");
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
                        activeUl.animate({left:-inowActive * liWidthActive},function(){
                            btnActive = true;
                        });
                        btnActive = true;
                    }else{
                        inowActive--;
                        activePaginatioA.eq(inowActive).addClass("active");
                        activePaginatioA.eq(inowActive).siblings().removeClass("active");
                        activeUl.animate({left:-inowActive * liWidthActive},function(){
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
                        activeUl.animate({left:-inowActive * liWidthActive},function(){
                            btnActive = true;
                        })
                    }else{
                        inowActive++;
                        activePaginatioA.eq(inowActive).addClass("active");
                        activePaginatioA.eq(inowActive).siblings().removeClass("active");
                        activeUl.animate({left:-inowActive * liWidthActive},function(){
                            btnActive = true;
                        })
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
                    activeUl.animate({left:-inowActive * liWidthActive},function(){
                        btnActive = true;
                    });
                    btnActive = true;
                }else{
                    inowActive++;
                    activePaginatioA.eq(inowActive).addClass("active");
                    activePaginatioA.eq(inowActive).siblings().removeClass("active");
                    activeUl.animate({left:-inowActive * liWidthActive},function(){
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
                    activeUl.animate({left:-inowActive * liWidthActive},function(){
                        btnActive = true;
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
    Methods.init(activeSlider)
};
new ActiveSlider($("#active-slider"),{
    setActive:5000
});