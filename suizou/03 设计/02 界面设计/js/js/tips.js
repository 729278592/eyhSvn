/**
 * Created by WHB on 2016/6/16.
 */

var maskTip = '<div class="maskTip hide">' +
    '<div class="tips">'+
    '<span class="type"></span>'+
    '</div>'+
    '</div>';
$(".wrapper").append(maskTip);


var tip = function(obj,nowObj,message,time,staute){
    var tipsObj = $(".tips");
    var typeObj = $(".type");
    obj.removeClass("hide");
    var type = obj.find(typeObj);
    var tips = obj.find(tipsObj);
    type.text(message);
    tips.addClass(staute);
    pageAuto(obj.find(tipsObj));
    nowObj.addClass("errTip");
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
                nowObj.removeClass("errTip");
                obj.addClass("hide");
            });
        }, time*2)
    })
};

function pageAuto(_this){
    var ml = _this.outerWidth()/2;
    _this.css({marginLeft:-ml});
}
