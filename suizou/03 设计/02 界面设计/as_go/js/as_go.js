/**
 * Created by WHB on 2015/7/27.
 */



/*
左边产品页面菜单切换
*/
var wd = $(".wrap div"),
    wa = $(".wrap .active");
wd.on("click",function(){
    var c = $(this);
    if( c.is(".active")){
        c.next().slideUp();
        c.removeClass("active");

    }
   else{
        c.next().slideDown();
        c.addClass("active");
        c.parent().siblings().find("div").removeClass("active");
        c.parent().siblings().find(".menu").slideUp();

    }
});

wa.next().removeClass("hide");




var culi = $(".myCarousel .item ul li img"),
    mc = $(".mask .close"),
    m = $(".mask"),
    src;

culi.on("click",function(){
    src = $(this).attr("src");
    m.removeClass("hide");
    m.find("img").attr({"src":src})
});
mc.on("click",function(){
    m.addClass("hide");
});



var nl = $(".nav-pills>li"),
    lt = $(".login_type");
nl.each(function(i){
    $(this).on("click",function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        lt.eq(i).removeClass("hide");
        lt.eq(i).siblings(".login_type").addClass("hide")
    });
});






