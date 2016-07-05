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
                navDiv = _this.find(".modify");
                sliderUpDownMethods.onClick();
            },
            onClick:function(){
                navDiv.on("click",function(){
                    if($(this).closest("li").find(".modifyInfor").css("display") == "none"){
                        $(this).closest("li").find(".modifyInfor").slideDown().end().closest("li").addClass("on");
                        $(this).closest("li").siblings("li").find(".modifyInfor").slideUp().end().closest("li").siblings("li").removeClass("on");
                    }
                    else{
                        $(this).closest("li").find(".modifyInfor").slideUp().end().closest(".li").removeClass("on");
                    }
                })
            }
        };
        sliderUpDownMethods.init($(this))
    }
})(jQuery);