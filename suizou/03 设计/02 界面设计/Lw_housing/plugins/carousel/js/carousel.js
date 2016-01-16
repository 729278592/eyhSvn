/**
 * Created by WHB on 2015/9/9.
 */

(function($) {
    if($(window).width()>1600){
        var Methods = {
            init:function(_this){
                sliderTop = _this.find(".slider-top");
                sliderBottom = _this.find(".slider-bottom");
                Ul  = _this.find("#ul1");
                oLi = _this.find("li");
                aSpan = _this.find("span");
                op = _this.find("#p");
                pDiv = _this.find("#p-div");
                aSpanHeight = aSpan.get(0).offsetHeight + 13;
                op.height(aSpanHeight*aSpan.size());
                num = Math.ceil(pDiv.get(0).offsetHeight/ aSpanHeight);
                str = op.get(0).offsetHeight/ aSpanHeight;
                inowActive = 0;
                btnActive = true;
                Methods.Top();
                Methods.Bottom();
                Methods.spanClick();
            },
            Top:function(){
                sliderBottom.on("click",function(){
                    if(btnActive == true){
                        if(inowActive == aSpan.size()-1){
                            inowActive=0;
                            aSpan.eq(inowActive).addClass("current");
                            aSpan.eq(inowActive).siblings(aSpan).removeClass("current");
                            oLi.eq(inowActive).show();
                            oLi.eq(inowActive).animate({opacity:"1"},100);
                            oLi.eq(inowActive).siblings(oLi).hide();
                            oLi.eq(inowActive).siblings(oLi).animate({opacity:"0"},100);
                            move(op.get(0), {top : -inowActive * aSpanHeight},function(){
                                btnActive = true;
                            });
                        }else if((str-num)<=inowActive&&inowActive<aSpan.size()-1){
                            inowActive++;
                            oLi.eq(inowActive).show();
                            oLi.eq(inowActive).animate({opacity:"1"},100);
                            oLi.eq(inowActive).siblings(oLi).hide();
                            oLi.eq(inowActive).siblings(oLi).animate({opacity:"0"},100);
                            aSpan.eq(inowActive).addClass("current");
                            aSpan.eq(inowActive).siblings(aSpan).removeClass("current");
                            move(op.get(0), {top : -(str-num) * aSpanHeight},function(){
                                btnActive = true;
                            });
                        }
                        else{
                            inowActive++;
                            oLi.eq(inowActive).show();
                            oLi.eq(inowActive).animate({opacity:"1"},100);
                            oLi.eq(inowActive).siblings(oLi).hide();
                            oLi.eq(inowActive).siblings(oLi).animate({opacity:"0"},100);
                            aSpan.eq(inowActive).addClass("current");
                            aSpan.eq(inowActive).siblings(aSpan).removeClass("current");
                            move(op.get(0),{top : -inowActive * aSpanHeight},function(){
                                btnActive = true;
                            });
                        }
                    }
                })
            },
            Bottom:function(){
                sliderTop.on("click",function(){
                    if(btnActive == true){
                        if(inowActive==0){
                            inowActive = aSpan.size()-1;
                            oLi.eq(inowActive).show();
                            oLi.eq(inowActive).animate({opacity:"1"},100);
                            oLi.eq(inowActive).siblings(oLi).hide();
                            oLi.eq(inowActive).siblings(oLi).animate({opacity:"0"},100);
                            aSpan.eq(inowActive).addClass("current");
                            aSpan.eq(inowActive).siblings(aSpan).removeClass("current");
                            move(op.get(0), {top : -(str-num) * aSpanHeight },function(){
                                btnActive = true;
                            });
                        }else if((str-num)<inowActive&&inowActive<=aSpan.size()-1){
                            inowActive--;
                            oLi.eq(inowActive).show();
                            oLi.eq(inowActive).animate({opacity:"1"},100);
                            oLi.eq(inowActive).siblings(oLi).hide();
                            oLi.eq(inowActive).siblings(oLi).animate({opacity:"0"},100);
                            aSpan.eq(inowActive).addClass("current");
                            aSpan.eq(inowActive).siblings(aSpan).removeClass("current");
                            move(op.get(0), {top : -(str-num) * aSpanHeight},function(){
                                btnActive = true;
                            });
                        }
                        else{
                            inowActive--;
                            oLi.eq(inowActive).show();
                            oLi.eq(inowActive).animate({opacity:"1"},100);
                            oLi.eq(inowActive).siblings(oLi).hide();
                            oLi.eq(inowActive).siblings(oLi).animate({opacity:"0"},100);
                            aSpan.eq(inowActive).addClass("current");
                            aSpan.eq(inowActive).siblings(aSpan).removeClass("current");
                            move(op.get(0), {top : -inowActive * aSpanHeight},function(){
                                btnActive = true;
                            });
                        }
                    }
                })
            },
            spanClick:function(){
                aSpan.each(function(i){
                    $(this).on("click",function(){
                        if(btnActive == true){
                            inowActive = i;
                            aSpan.eq(i).addClass("current");
                            aSpan.eq(i).siblings(aSpan).removeClass("current");
                            oLi.eq(i).show();
                            oLi.eq(i).animate({opacity:"1"},100);
                            oLi.eq(i).siblings(oLi).hide();
                            oLi.eq(i).siblings(oLi).animate({opacity:"0"},100);
                        }
                    })
                });
            }
        };
        Methods.init($())
    }

})(jQuery);
