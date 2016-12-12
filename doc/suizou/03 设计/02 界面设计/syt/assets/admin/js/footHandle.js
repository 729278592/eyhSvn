/**
 * Created by eyohu023 on 2016/1/20.
 */
    function heightAutos(){
        var windoeHeight = $(window).outerHeight(true);
        var headHeight = $(".head").outerHeight(true);
        var footHeight = $(".shopInfor").outerHeight(true);
        var cm = $(".content");
        var contentHeight = cm.outerHeight(true);
        if((contentHeight+footHeight+headHeight)<windoeHeight){
            cm.get(0).style.height = windoeHeight-headHeight-footHeight-20 + "px";
            $("html").css({"overflow-y":"hidden"});
        }else{
            $("html").css({"overflow-y":"auto"});
            cm.css({"height":"auto"});
        }
    }
    $(function(){
        heightAutos();
        $(window).on("resize",function(){
            heightAutos();
        })
    });
