/**
 * Created by WHB on 2016/6/16.
 */




if(!($(".wrapper").find(".maskTip").get(0))){
    var maskTip = '<div class="maskTip">' +
                   '<div class="tips">'+
                   '<span class="type"></span>'+
                   '</div>'+
               '</div>';
    $(".wrapper").append(maskTip);
}
function tipsContent(message,obj,staute){
    obj.closest(".mask").removeClass("hide");
    obj.find(".type").text(message);
    obj.addClass(staute);
    pageAuto(obj);
    obj.animate({
        top:"7%",
        opacity:"1"
    },500,function(){
        setTimeout(function(){
            $(".tips").animate({
                top:"-5%",
                opacity:"0"
            },500,function(){
                obj.removeClass(staute);
                obj.closest(".maskTip").remove();
            });
        },3000)
    })
}

function pageAuto(_this){
    var ml = _this.outerWidth()/2;
    _this.get(0).style.marginLeft = -ml+"px";
}
