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
                btnCancel = _this.find(".btnCancel");
                sliderUpDownMethods.navDivOnClick();
                sliderUpDownMethods.btnCancelOnclick();
            },
            navDivOnClick:function(){
                navDiv.on("click",function(){
                    if($(this).closest("li").find(".modifyInfor").css("display") == "none"){
                        $(this).closest("li").find(".modifyInfor").slideDown().end().closest("li").addClass("on");
                        $(this).closest("li").siblings("li").find(".modifyInfor").slideUp().end().closest("li").siblings("li").removeClass("on");
                        $(this).addClass("hide");
                        $(this).closest("li").siblings("li").find(".modify").removeClass("hide");
                    }
                    //else{
//                        $(this).closest("li").find(".modifyInfor").slideUp().end().closest(".li").removeClass("on");
                    //}
                })
            },
            btnCancelOnclick:function(){
                btnCancel.on("click",function(){

                    if($(this).closest("li").find(".modifyInfor").css("display") == "block"){
                        $(this).closest("li").find(".modifyInfor").slideUp().end().closest(".li").removeClass("on");
                        $(this).closest("li").find(".modify").removeClass("hide");
                    }
                })
            }
        };
        sliderUpDownMethods.init($(this))
    }
})(jQuery);