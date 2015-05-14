/**
 * Created by eyohu023 on 2015/5/6.
 */
$(document).ready(function(){
    /*left first nav*/
    $(function(){
        $.setMenu(".w_lc");
    });
    $.setMenu = function(o){
        var o = $(o);
        o.find("li").eq(0).find(".icon2").addClass("fa fa-caret-down")
        o.find("li>.wlc_div").on("click",function(){
            var c = $(this),hl = c.next().find(".wul_li1").height(),hs = c.next().find(".wul_li1").size(),h = hl*hs;
            if(c.parent().is(".on")) {
                if(c.next().length > 0) {
                    c.next().stop(true, false).animate({
                        "height" : 0
                    }, 200, function(){
                        c.next().removeAttr("style");
                        c.parent().removeClass("on");
                        c.removeClass("lan");
                        c.find(".icon2").removeClass("fa fa-caret-down").addClass("fa fa-caret-right");
                    });
                }
            } else {

                c.parent().addClass("on");
                c.addClass("lan");

                c.parent().siblings().removeClass("on");

                c.find(".icon2").removeClass("fa fa-caret-right").addClass("fa fa-caret-down");
                c.parent().siblings().find("div").removeClass("lan");
                c.parent().siblings().find("div>.icon2").removeClass("fa fa-caret-down").addClass("fa fa-caret-right");
            }
        })

    };
    var w =  $(".w_lc .wlc_div")
    var u = $(".w_lc .wul_ul")
    w.eq(0).next().find("li").eq(0).on("click",function(){
        $(this).find("a").addClass("li_lan").end().find(".wrc_img").removeClass("hide");
        $(this).siblings().find("a").removeClass("li_lan").end().find(".wrc_img").addClass("hide");
    });
    w.eq(0).next().find("li").eq(1).on("click",function(){
        $(this).find("a").addClass("li_lan").end().find(".wrc_img").removeClass("hide");
        $(this).siblings().find("a").removeClass("li_lan").end().find(".wrc_img").addClass("hide");
    });

    u.eq(3).find("li").eq(0).on("click",function(){
        $(this).find("a").addClass("li_lan").end().find(".wrc_img").removeClass("hide");
        $(this).siblings().find("a").removeClass("li_lan").end().find(".wrc_img").addClass("hide");
    });
    u.eq(3).find("li").eq(1).on("click",function(){
        $(this).find("a").addClass("li_lan").end().find(".wrc_img").removeClass("hide");
        $(this).siblings().find("a").removeClass("li_lan").end().find(".wrc_img").addClass("hide");

    });
    u.eq(3).find("li").eq(2).on("click",function(){
        $(this).find("a").addClass("li_lan").end().find(".wrc_img").removeClass("hide");
        $(this).siblings().find("a").removeClass("li_lan").end().find(".wrc_img").addClass("hide");

    });
    $(".wul_ul").each(function(){
        $(this).find(".wul_li1").last().css({"height":"52px"})
    });
    $(".wrc_c0 table tr:odd").css({"background":"#f9f9f9"});
    $(".wrc_c0 table tr:even").css({"background":"#fff"});
    $(".wrc_c0 table").each(function(){
        $(this).find("tr td").eq(0).css({"width":"5%"})
    });
    $(".wrc_c0 table").each(function(){
        $(this).find("tr td").eq(1).css({"width":"14%"})
    });
    $(".wrc_c0 table").each(function(){
        $(this).find("tr td").eq(2).css({"width":"59%"})
    });
    $(".wrc_c0 table").each(function(){
        $(this).find("tr td").eq(3).css({"width":"24%"})
    });

    $(".wrc_c0 table tr").each(function(){
        $(this).hover(function(){
                $(this).css({"background":"#f5f5f5"})
            },
            function(){
                $(".wrc_c0 table tr:odd").css({"background":"#f9f9f9"});
                $(".wrc_c0 table tr:even").css({"background":"#fff"});
            })
    });


})



