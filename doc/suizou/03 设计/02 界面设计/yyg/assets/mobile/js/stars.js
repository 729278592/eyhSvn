/**
 * Created by WHB on 2016/3/25.
 */
var commentStars = function(){

    var starsclick = function(_this){
        _this.each(function(){
            $(this).on("touchend",function(){
                $(this).addClass('active');
                $(this).prevAll("li").addClass('active');
                $(this).nextAll("li").removeClass('active');
                $("#inputStar").val($(".starMenu li.active").size()*2)
            })
        });
    };

    return {
        init:function(_this){
            starsclick(_this);
        }
    }
}();