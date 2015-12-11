/**
 * Created by WHB on 2015/10/24.
 */



$(function(){

    /*返回上一级页面*/
    function returnPre(){
        var r = $(".return");
        r.on("click",function(){
            window.history.go(-1)
        });
    }
    returnPre();

    /*购物车显示隐藏*/
    function shoppingCartShow(){
        var ugb = $(".production-group li .btn-f98");
        var m = $(".mask");
        var pb = $(".plus-buy");
        ugb.on("click", function () {
            m.removeClass("hide");
        });
        pb.on("click", function () {
            m.addClass("hide");
        });
    }
    shoppingCartShow();


    $(".junior:odd").css({"background": "#fff"});
    $(".junior:even").css({"background": "#efecec"});

    /*发货状态切换*/
    function deliveryStatusSwitch(){
        var sd = $(".switch-div");
        var tstd = $("table.switch tr td");
        tstd.each(function(i){
            $(this).on("click",function(){
                sd.eq(i).addClass("active");
                sd.eq(i).siblings(sd).removeClass("active");
                $(this).addClass("active");
                $(this).siblings(tstd).removeClass("active");
            })
        });
    }
    deliveryStatusSwitch()
});
