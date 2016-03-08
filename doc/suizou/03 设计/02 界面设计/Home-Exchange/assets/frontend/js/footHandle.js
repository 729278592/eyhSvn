/**
 * Created by eyohu023 on 2016/1/20.
 */


    function heightAuto(){
        var windoeHeight = $(window).outerHeight(true);
        var headHeight = $(".head").outerHeight(true);
        var footHeight = $(".foot").outerHeight(true);
        var cm = $(".content");
        var contentHeight = cm.outerHeight(true);
        if((contentHeight+footHeight+headHeight)<windoeHeight){
            cm.get(0).style.height = windoeHeight-headHeight-footHeight + "px";
            $("html").css({"overflow-y":"hidden"});
        }else{
            $("html").css({"overflow-y":"auto"});
            cm.css({"height":"auto"});
        }
    }
    heightAuto();
    $(window).on("resize",function(){
        heightAuto();
    })
