/**
 * Created by WHB on 2016/8/22.
 */
$(function(){
    /*全屏图片居中*/
    var ai = $(".autoImg");
    ai.each(function(){
        $(this).get(0).style.width ="1920px";
        var that = $(this);
        function toResize(){
            var veiwidth = $(window).width();
            if(veiwidth>1205){
                that.get(0).style.left = -(parseInt(that.get(0).style.width) - veiwidth)/2 + "px"
            }
        }
        toResize();
        $(window).on("resize",function(){
            toResize()
        });
    });

//    function heightAuto(){
//        var windoeHeight = $(window).outerHeight(true);
//        var headHeight = $(".head").outerHeight(true);
//        var footHeight = $(".foot").outerHeight(true);
//        var cm = $(".content");
//        var contentHeight = cm.outerHeight(true);
//        if((contentHeight+footHeight+headHeight)<windoeHeight){
//            cm.get(0).style.height = windoeHeight-headHeight-footHeight + "px";
//            $("html").css({"overflow-y":"hidden"});
//        }else{
//            $("html").css({"overflow-y":"auto"});
//            cm.css({"height":"auto"});
//        }
//    }
//    $(function(){
//        heightAuto();
//        $(window).on("resize",function(){
//            heightAuto();
//        })
//    });
});