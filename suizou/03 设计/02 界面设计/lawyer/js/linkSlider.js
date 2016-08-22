/**
 * Created by WHB on 2016/8/22.
 */
(function($){
    var SerSlider = function (serSlider,options){
        var defaul = {
            setActive:5000
        };
        var opts = $.extend({},defaul,options);
        var Methods = {
            init:function(_this){
                activeLeft  = _this.find(".active-left");
                activeRight = _this.find(".active-right");
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
                            move(activeUl[0], {left : -inowActive * liWidthActive},function(){
                                btnActive = true;
                            });
                        }else{
                            inowActive--;
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
                        move(activeUl[0], {left : -inowActive * liWidthActive},function(){
                            btnActive = true;
                        });
                        btnActive = true;
                    }else{
                        inowActive++;
                        move(activeUl[0], {left : -inowActive * liWidthActive},function(){
                            btnActive = true;
                        });
                    }
                }
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
        Methods.init(serSlider)
    };
    new SerSlider($(".active-slider"),{
        setActive:5000
    });
})(jQuery);