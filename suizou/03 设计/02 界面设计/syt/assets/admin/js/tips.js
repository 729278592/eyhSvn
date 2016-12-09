/**
 * Created by WHB on 2016/6/16.
 */

var maskTip = '<div class="maskTip hide">' +
    '<div class="tips">'+
    '<span class="type"></span>'+
    '</div>'+
    '</div>';
$(".wrapper").append(maskTip);


var tip = function(obj,message,time,staute){

    obj.removeClass("hide");
    var type = obj.find(".type");
    var tips = obj.find(".tips");
    type.text(message);
    tips.addClass(staute);
    pageAuto(obj.find(".tips"));
    tips.animate({
        top: "8px",
        opacity: "1"
    }, time, function () {
        setTimeout(function () {
            tips.animate({
                top: "-5%",
                opacity: "0"
            }, time, function () {
                tips.removeClass(staute);
                obj.addClass("hide");
            });
        }, time*2)
    })
};

function pageAuto(_this){
    var ml = _this.outerWidth()/2;
    _this.css({marginLeft:-ml});
}
