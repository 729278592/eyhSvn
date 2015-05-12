
$(document).ready(function(){
    if (navigator.userAgent.indexOf('Firefox') >= 0){
        $(".inblock6").css({"top":"-1px"})
        $(".inblock61").css({"top":"0"})
        }


    $(function(){
        $.setMenu(".w_lc");
    });
    $.setMenu = function(o){
        var o = $(o);
        o.find("li").eq(0).find(".icon2").addClass("fa fa-caret-down")
        o.find("li>.wlc_div").on("click",function(i){
            var c = $(this),hl = c.next().find(".wul_li1").height(),hs = c.next().find(".wul_li1").size(),
                h = hl*hs;
                if(c.parent().is(".on")) {
                    if(c.next().length > 0) {
                        c.next().css({"height":0})
                        c.next().removeAttr("style");
                        c.parent().removeClass("on");
                        c.removeClass("lan");
                        c.find(".icon2").removeClass("fa fa-caret-down").addClass("fa fa-caret-right")
                    }
                } else {
                    c.parent().addClass("on");
                    c.addClass("lan");
                    c.parent().siblings().removeClass("on")
                    c.find(".icon2").removeClass("fa fa-caret-right").addClass("fa fa-caret-down")
                    c.parent().siblings().find("div").removeClass("lan")
                    c.parent().siblings().find("div>.icon2").removeClass("fa fa-caret-down").addClass("fa fa-caret-right")
                    c.find(".icon1").attr({"src":t});

                }

        })

    };
    var w =  $(".w_lc .wlc_div")
    var u = $(".w_lc .wul_ul")
   w.eq(0).next().find("li").eq(0).on("click",function(){
       $(this).find("a").addClass("li_lan").end().find(".wrc_img").removeClass("hide");
       $(this).siblings().find("a").removeClass("li_lan").end().find(".wrc_img").addClass("hide")
    });
  w.eq(0).next().find("li").eq(1).on("click",function(){
        $(this).find("a").addClass("li_lan").end().find(".wrc_img").removeClass("hide");
      $(this).siblings().find("a").removeClass("li_lan").end().find(".wrc_img").addClass("hide")
    });

    u.eq(3).find("li").eq(0).on("click",function(){
        $(this).find("a").addClass("li_lan").end().find(".wrc_img").removeClass("hide");
        $(this).siblings().find("a").removeClass("li_lan").end().find(".wrc_img").addClass("hide")
    });
    u.eq(3).find("li").eq(1).on("click",function(){
        $(this).find("a").addClass("li_lan").end().find(".wrc_img").removeClass("hide");
        $(this).siblings().find("a").removeClass("li_lan").end().find(".wrc_img").addClass("hide")

    });
    u.eq(3).find("li").eq(2).on("click",function(){
        $(this).find("a").addClass("li_lan").end().find(".wrc_img").removeClass("hide");
        $(this).siblings().find("a").removeClass("li_lan").end().find(".wrc_img").addClass("hide")

    });











    $(".block li").each(function(){

        $(this).on("click",function(){
            $(this).parent().prev().prev().val($(this).text());
            $(this).parent().addClass("hide");
            isdia1 = true;
        })
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
            $(".wrc_c0 table tr:even").css({"background":"#fff"})
        })
    });

    $(".whri_ul .whri_uli1").hover(function(){
        $(this).css({"background":"#f5f6f7"}).find("a").css({"color":"#8fc7e7"}).end().find("img").attr({"src":"images/zf0_0.png"})
    },function(){
        $(this).css({"background":"#fff"}).find("a").css({"color":""}).end().find("img").attr({"src":"images/zf0.png"})
    });
    $(".whri_ul .whri_uli2").hover(function(){

        $(this).css({"background":"#f5f6f7"}).find("a").css({"color":"#8fc7e7"}).end().find("img").attr({"src":"images/zf1_1.png"})
    },function(){
        $(this).css({"background":"#fff"}).find("a").css({"color":""}).end().find("img").attr({"src":"images/zf1.png"})
    });
    $(".whri_ul .whri_uli3").hover(function(){
        $(this).css({"background":"#f5f6f7"}).find("a").css({"color":"#8fc7e7"}).end().find("img").attr({"src":"images/zf2_2.png"})
    },function(){
        $(this).css({"background":"#fff"}).find("a").css({"color":""}).end().find("img").attr({"src":"images/zf2.png"})
    })
    $(".whri_ul").addClass("hide")
    $(".wr_san").addClass("hide")
    var isdian6 = true;

  $(".inblocka").on("click",function(){
          if(isdian6 == true){
              $(".whri_ul").removeClass("hide")
              $(".wr_san").removeClass("hide")
              isdian6 = false
          }
          else if(isdian6 == false){
              $(".whri_ul").addClass("hide")
              $(".wr_san").addClass("hide")

              isdian6 = true;
          }

  })
    $("#jiajia").die("click").live("click",function(){

        $(this).before('<span class="inblock inblock18"></span>'+
            '<div class="inblock wr_jia1 wr_jia2">'+
            '<div class="inblock wr_jia">'+
                '<input type="text" class="wrjia_in" disabled/><span class="inblock inblock16">'+
                '<i class="fa fa-calendar"></i></span><span class="inblock inblock17 iddele">删除</span>'+
            '</div></div><br/>')

        $(".wr_jia2").css({"left":"42px"})

        $(".iddele").on("click",function(){

            $(this).parent().parent().remove()

        })
    })

    $(".whri_uli3").on("click",function(){
        $(".whri_ul").addClass("hide")
        $(".wr_san").addClass("hide")
        isdian6 = true;
    })
    $(".wul_ul").each(function(){
        $(this).find(".wul_li1").last().css({"height":"52px"})
    })


});

