/**
 * Created by WHB on 2016/3/4.
 */

/*底部处理*/

    function heightAuto(){
        var windoeHeight = $(window).outerHeight(true);
        var footHeight = $(".foot").outerHeight(true);
        var content = $(".content");
        var height = $(".heightauto")
        var heightauto = height.outerHeight(true);
        var contentHeight = content.outerHeight(true);
        var bm = $(".btn-menu").outerHeight(true);
        var submitDiv = $(".submit-div")
        var sd = $(".submit-div").outerHeight(true);
        var cm = $(".height-con");
        var head = $(".head").outerHeight(true);
        var h362 = $(".h362");
        var heightCon = cm.outerHeight(true);
        if(cm){
            if((heightCon+footHeight+head)<windoeHeight) {
                cm.css({height: windoeHeight - footHeight - head + "px"});
                if(h362.get(0)){
                    cm.css({height:windoeHeight-footHeight - head-sd+"px"});
                }
            }
            else{
                cm.css({"height":"auto"});
            }
        }
        if(height.get(0)){
            if((heightauto+footHeight+head)<windoeHeight){
                content.css({height:windoeHeight-footHeight-head+"px"});
                if($(".list-service.height").height()<80){
                    content.css({height:windoeHeight-footHeight-head+"px"});
                }
            }
            else{
                content.css({"height":"auto"});
                if($(".list-service.height").height()>410){
                    content.css({"height":"auto"});
                }
                else if($(".list-service.height").height()<286){
                    content.css({height:windoeHeight-footHeight-head+"px"});
                    if(content.height()<410){
                        content.css({"height":"auto"});
                    }
                }
            }
        }
    }

$(function(){
    heightAuto();
    $(window).on("resize",function(){
        heightAuto();
    });
});