/**
 * Created by WHB on 2016/6/16.
 */





if(!($("#admin-content-wrapper").find(".maskTip").get(0))){
    var maskTip = '<div class="maskTip hide">' +
        '<div class="tips">'+
        '<span class="type"></span>'+
        '</div>'+
        '</div>';
    $("#admin-content-wrapper").append(maskTip);
}
function tipsContent(message,obj,staute){
    obj.closest(".maskTip").removeClass("hide");
    obj.find(".type").text(message);
    obj.addClass(staute);
    pageAuto(obj);
    obj.animate({
        top:"8px",
        opacity:"1"
    },500,function(){
        setTimeout(function(){
            $(".tips").animate({
                top:"-5%",
                opacity:"0"
            },500,function(){
                obj.removeClass(staute);
                obj.closest(".maskTip").addClass("hide");
            });
        },3000)
    })
}

function pageAuto(_this){
    var ml = _this.outerWidth()/2 +"px";
    _this.attr({marginLeft:-ml})
}
