/**
 * Created by eyohu023 on 2016/1/20.
 */
(function ($,window,document,undefined) {
    function heightAuto(){
        var windoeHeight = $(window).outerHeight(true);
        var headHeight = $(".head").outerHeight(true);
        var footHeight = $(".foot").outerHeight(true);
        var cm = $(".content");
        var bread = $(".bread");
        var contentHeight = cm.outerHeight(true);
        if((contentHeight+footHeight+headHeight)<windoeHeight){
            $("html").css({"overflow-y":"hidden"});

            // if(bread.get(0)){
            //     cm.get(0).style.height = windoeHeight-headHeight-footHeight-bread.height() + "px";
            //     return;
            // }
             cm.get(0).style.height = windoeHeight-headHeight-footHeight + "px";

        }else{
            $("html").css({"overflow-y":"auto"});

            cm.css({"height":"auto"});
        }
    }
    $(function(){
        heightAuto();
        $(window).on("resize",function(){
            heightAuto();
        })
    });
})(jQuery,window,document)
