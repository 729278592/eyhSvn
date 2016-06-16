/**
 * Created by WHB on 2016/6/16.
 */




if(!($("#admin-content-wrapper").find(".tips").get(0))){
    var tips = '<div class="tips">'+
                   '<span class="type"></span>'+
               '</div>';
    $("#admin-content-wrapper").append(tips);
}
function tipsContent(message,obj){
    obj.find(".type").text(message);
    pageAuto(obj);
    obj.animate({
        top:"1%",
        opacity:"1"
    },500,function(){
        setTimeout(function(){
            $(".tips").animate({
                top:"-5%",
                opacity:"0"
            },500)
        },3000)
    })
}

function pageAuto(_this){
    var ml = _this.outerWidth()/2;
    _this.get(0).style.marginLeft = -ml+"px";
}
