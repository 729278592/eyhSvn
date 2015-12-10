/**
 * Created by WHB on 2015/10/24.
 */



$(function(){
    var r = $(".return");
    r.on("click",function(){
       window.history.go(-1)
    });

    var ugb = $(".production-group li .btn-f98");
    var m = $(".mask");
    var pb = $(".plus-buy");
    ugb.on("click", function () {
        m.removeClass("hide");
    });
    pb.on("click", function () {
        m.addClass("hide");
    });
});
