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







//var tb = document.getElementsByClassName("title_box")[0];
//var step = 100;
//tb.style.left="0px";
//tb.onmouseover = function(){
//    var that = this;
//    step += step - 10;
//    setInterval(function(){
//        that.style.left = step + "%";
//alert(step)
//       },1000)
//};
var pl = $(".product_ul li");
    pl.hover(
        function(){
            $(".title_box").show();
            $(this).find(".title_box").animate({
                "top":"100%"
            },200);
            $(this).find(".plus").fadeOut(500)
        },
        function(){
            $(this).find(".title_box").animate({
                "top":"0"
            },200);
            $(this).find(".plus").fadeIn(500)
        });

var jp = $(".js_product");

var m = $(".myCarousel");
var mi = $(".myCarousel .item");
var mid = $(".myCarousel .item .describe")
pl.each(function(i){
    $(this).on("click",function(){
        var src = $(this).find("img").attr("src");
        var src_next = $(this).next().find("img").attr("src");
        jp.addClass("hide");
        m.removeClass("hide");
        mi.eq(i).addClass('active');
        mi.eq(i).siblings().removeClass("active");
        mi.eq(i).find("img").attr({"src":src});
        mi.find("img").fadeIn(2000);
        mi.eq(i).next().find("img").attr({"src":src_next});

        mid.animate({
            "top":"25%"
        },3000);
        var mc = $(".myCarousel .close");
        mc.on("click",function(){
            mc.parent().addClass("hide");
            jp.removeClass("hide");
            mi.find("img").hide();
            mid.animate({
                "top":"-20%"
            },0);
        });

    });
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






