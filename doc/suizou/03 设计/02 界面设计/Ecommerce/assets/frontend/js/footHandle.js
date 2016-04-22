/**
 * Created by eyohu023 on 2016/1/20.
 */


function heightAuto(){
    var windoeHeight = $(window).outerHeight(true);
    var headHeight = $(".header").outerHeight(true);
    var footHeight = $(".footer").outerHeight(true);
    var cm = $(".content");
    var contentHeight = cm.outerHeight(true);
    if((contentHeight+footHeight+headHeight)<windoeHeight){
        cm.css({height:windoeHeight-headHeight-footHeight});
        if(cm.is(".mt15")){
            cm.css({height:windoeHeight-headHeight-footHeight-20});
        }
    }else{
        cm.css({height:"auto"});
    }
}
$(function(){
    heightAuto();
    $(window).on("resize",function(){
        heightAuto();
    })
});
