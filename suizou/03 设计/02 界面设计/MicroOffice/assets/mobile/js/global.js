/**
 * Created by WHB on 2016/5/13.
 */
/**
 * Created by eyohu023 on 2016/2/19.
 */
/*返回历史记录中的上一页面*/
function heightAuto(){
    var windoeHeight = $(window).outerHeight(true);
    var headHeight = $(".head").outerHeight(true);
    var area = $(".weui_btn_area");
    var bd = $(".bd");
    var bdHeight = bd.outerHeight(true);
    if((bdHeight+headHeight)<windoeHeight){
        bd.get(0).style.height = windoeHeight-headHeight + "px";
//            $("html").css({"overflow-y":"hidden"});
        if(area.is(".relative")){
            area.removeClass("relative");
            area.addClass("absolute");
        }
        else{
            area.addClass("absolute");
        }
    }else{
//            bd.css({"height":"auto"});
        if(area.is(".absolute")){
            area.removeClass("absolute");
            area.addClass("relative");
        }
        else{
            area.addClass("relative");
        }
    }
}
$(function(){
    $(".head .fa-angle-left").on("click",function(){
        window.history.go(-1)
    });

    /*底部按钮处理*/

    heightAuto()
});