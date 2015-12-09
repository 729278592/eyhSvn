/**
 * Created by eyohu023 on 2015/12/4.
 */
(function($){
    $.fn.sliderUpDown = function(options){
//        var sliderUpDownDefaults = {
//            setSliderUpDown:5000
//        };
//        var sliderUpDownOpts = $.extend({}, sliderUpDownDefaults, options);
        var sliderUpDownMethods = {
            init:function(_this){
                navDiv = _this.find(".nav-div p");
                sliderUpDownMethods.onClick();
            },
            onClick:function(){
                navDiv.on("click",function(){
                    if($(this).parent().find(".menu").css("display") == "none"){
                        $(this).parent().find(".menu").slideDown().end().closest(".nav-div").addClass("on");
                        $(this).parent().siblings(".nav-div").find(".menu").slideUp().end().closest(".nav-div").removeClass("on")

                    }else{
                        $(this).parent().find(".menu").slideUp()
                    }
                })
            }
        };
        sliderUpDownMethods.init($(this))
    }
})(jQuery);