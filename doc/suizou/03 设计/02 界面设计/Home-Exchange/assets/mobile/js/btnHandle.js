/**
 * Created by WHB on 2016/3/4.
 */

/*底部处理*/
    var windoeHeight = $(window).outerHeight(true);
    var footHeight = $(".foot").outerHeight(true);
    var bm = $(".btn-menu").outerHeight(true);
    var sd = $(".submit-div").outerHeight(true);
    var cm = $(".height-con");
    var contentHeight = cm.outerHeight(true);
    function heightAuto(){
        if((contentHeight+footHeight)<windoeHeight){

            if(bm){
                cm.css({height:windoeHeight-footHeight-bm+"px"});
            }
            if(sd){
                cm.css({height:windoeHeight-footHeight-sd+"px"});
//                if(cm.outerHeight(true)<362){
//                    cm.css({height:windoeHeight-footHeight+"px"});
//                }
            }
        }else{
            $("html").css({"overflow-y":"auto"});
            cm.css({"height":"auto"});
        }
    }
    if(cm){
        $(function(){
            heightAuto();
            $(window).on("resize",function(){
                heightAuto();
            });
        })
    }
