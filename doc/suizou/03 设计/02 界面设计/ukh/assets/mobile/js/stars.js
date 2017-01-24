/**
 * Created by WHB on 2016/3/25.
 */
var commentStars = function(){
console.log(JSON.stringify())
//    var starsmousemove = function(_this){
//        _this.each(function(){
//            $(this).mousemove(function(){
//                $(this).addClass('active');
//                $(this).prevAll("li").addClass('active');
//                $(this).nextAll("li").removeClass('active');
//            })
//        });
//    };
//
//    var starsmousout = function(_this){
//        _this.mouseout(function(){
//            _this.removeClass('active');
//        });
//    };

    var starsclick = function(_this){
        _this.each(function(){
            $(this).on("touchend",function(){
                $(this).addClass('active');
                $(this).find(".fa-star-o").removeClass("fa-star-o").addClass("fa-star");
                $(this).prevAll("li").addClass('active');
                $(this).prevAll("li").find(".fa-star-o").removeClass("fa-star-o").addClass("fa-star");
                $(this).nextAll("li").removeClass('active');
                $(this).nextAll("li").find(".fa-star").removeClass("fa-star").addClass("fa-star-o");

                if($(this).closest(".evaluateScore").find(".numFraction").get(0)){
                    $(this).closest(".evaluateScore").find(".numFraction").text($(this).closest(".evaluateScore").find(".starList li.active").size()*2);
//                    $("#inputStar").val($(this).closest(".evaluateScore").find(".numFraction").text())
                }
//                _this.unbind("mouseout");
//                _this.unbind("mousemove");
//                _this.unbind("click");
            })
        });
    };

    return {
        init:function(_this){
//            starsmousemove(_this);
//            starsmousout(_this);
            starsclick(_this);
        }
    }
}();