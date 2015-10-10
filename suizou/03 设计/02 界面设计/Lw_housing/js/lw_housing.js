/**
 * Created by eyohu023 on 2015/9/2.
 */
$(function(){
    var hg = $(".head-main .glyphicon-th-list");
    var mm = $(".menu_mobile");
    var mml = $(".menu_mobile li");
    hg.on("click", function () {
        if (mm.css("display") == "none") {
            mm.css({"display": "inline-block"});
            mm.animate({"marginLeft": "0"}, 500);
            mml.animate({"width": "25%"})
        }
    });

    mm.on("click", function () {
        mm.css({"display": "none"});
        mm.animate(mml.animate({"width": "0%"}));
    });
    var winH = $(window).width();

    $(window).on("resize",function(){
        if(winH>640){
            mm.css({"display": "none"});
        }
    });
    if($(window).height()<700){
        $(".footer").css({"position":"relative","marginTop":"20px"})
    }
});
