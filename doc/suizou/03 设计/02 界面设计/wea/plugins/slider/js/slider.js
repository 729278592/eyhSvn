/**
 * Created by WHB on 2016/4/18.
 */
(function($){
    $.fn.slider = function(options){
        var defaults = {
            defauTime:4000,
            moveTime:200
        };
        var opts = $.extend({}, defaults, options);
        var Methods = {
            init: function(_this){
                var arr = {};
                arr.navSlider = _this.find(".slider");
                arr.navSliderLi = arr.navSlider.find("li");
                arr.liwidth = arr.navSliderLi.width();
                arr.navSlider.width(arr.liwidth*arr.navSliderLi.size());
                arr.navNum = _this.find(".num");
                arr.navNumLi = arr.navNum.find("li");
                arr.btnLeft = _this.find(".btn_l");
                arr.btnRight = _this.find(".btn_r");
                arr.btn = _this.find(".btn");
                arr.btnBg = _this.find(".btnBg");
                arr.size = arr.navSliderLi.size();
                arr.moveOkleft = true;
                arr.moveOkright = true;
                i = 0;
                t = setInterval(function () {
                    Methods.autoPlay(arr);
                },opts.defauTime);
                Methods.btnLeftClick(arr);
                Methods.btnRightClick(arr);
                Methods.navNumLiHover(arr);
                Methods._thisHover(_this,arr);
                Methods.numActive(arr);
                Methods.btnHover(arr);
            },
            numActive:function(arr){
                arr.navSliderLi.eq(arr.navNum.find("li.on").index()).addClass('active');
                arr.navSliderLi.eq(arr.navNum.find("li.on").index()).siblings("li").removeClass("active");
            },
            cloneLi:function(_this){
                var arr = {};
                arr.navSlider = _this.find(".slider");
                arr.navSliderLi = arr.navSlider.find("li");
                arr.navSlider.append(arr.navSliderLi.first().clone());
            },
            autoPlay:function(arr){
                if(arr.moveOkleft == true){
                    arr.moveOkleft = false;
                    i++;
                    if(i==arr.size){
                        arr.navSlider.css({left:0});
                        i=1;
                    }
                    arr.navSlider.stop().animate({left:-i*arr.liwidth}, opts.moveTime,function(){
                        Methods.numActive(arr);
                        arr.moveOkleft = true;
                    });
                    if(i==arr.size-1){
                        arr.navNumLi.eq(0).addClass("on").siblings().removeClass("on");
                    }else {
                        arr.navNumLi.eq(i).addClass("on").siblings().removeClass("on");
                    }
                }
            },
            btnLeftClick:function(arr){
                arr.btnLeft.click(function() {
                    Methods.autoPlay(arr);
                });
            },
            btnHover:function(arr){
                arr.btn.hover(function(){
                    $(this).prev(arr.btnBg).addClass("hover");
                },function(){
                    $(this).prev(arr.btnBg).removeClass("hover");
                })
            },
            btnRightClick:function(arr){
                arr.btnRight.click(function () {
                    if(arr.moveOkright == true){
                        arr.moveOkleft = false;
                        arr.moveOkright = false;
                        i--;
                        if(i==-1){
                            arr.navSlider.css({left:-(arr.size-1)*arr.liwidth});
                            i = arr.size-2;
                        }
                        arr.navSlider.stop().animate({left:-i*arr.liwidth}, opts.moveTime,function(){
                            arr.moveOkright = true;
                            Methods.numActive(arr);
                            setTimeout(function(){
                                arr.moveOkleft = true;
                            },opts.moveTime)
                        });
                        arr.navNumLi.eq(i).addClass("on").siblings().removeClass("on");
                    }
                });
            },
            navNumLiHover:function(arr){
                arr.navNumLi.hover(function () {
                    var index = $(this).index();
                    i = index;
                    arr.navSlider.stop().animate({left:-i*arr.liwidth}, opts.moveTime);
                    $(this).addClass("on").siblings().removeClass("on");
                });
            },
            _thisHover:function(_this,arr){
                _this.hover(
                    function(){
                        clearInterval(t);
                        Methods.numActive(arr);
                    },
                    function(){
                        Methods.numActive(arr);
                        t = setInterval(function () {
                            Methods.autoPlay(arr);
                        },opts.defauTime)
                    });
            }
        };
        Methods.cloneLi($(this));//克隆元素优先加载
        Methods.init($(this))}
})(jQuery);