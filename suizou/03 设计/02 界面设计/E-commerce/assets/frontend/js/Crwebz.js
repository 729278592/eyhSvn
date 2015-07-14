/**
 * Created by eyohu023 on 2015/4/25.
 */
//$(".c_ul li").on("click",function(){
//    if($(this).hasClass(".ff4")){
//        alert(33)
//    }else{
//
//    }
//})

$(function(){
    $(".reg,.login").fadeIn(2000);
    var b = $(".block0");
    $(".ccsh_ul span").css({"opacity":"0.8"});
    b.each(function(){
        $(this).on("click",function(){
            $(this).addClass("click");
            $(this).siblings().removeClass("click")
        })
    });
    b.eq(0).on("click",function(){
        $("#div1").removeClass("hide").addClass("block");
        $("#div2").removeClass("block").addClass("hide")
    });
    b.eq(1).on("click",function(){
        $("#div2").removeClass("hide").addClass("block");
        $("#div1").removeClass("block").addClass("hide")
    });


    /*User personal information left navigation*/
var yy = $(".yhgr_u li a");
    yy.each(function(){
    $(this).hover(function(){
        if($(this).parent().is(".active")){
            $(this).parent().addClass("qq");
        }else{
            $(this).parent().addClass("active");
            $(this).prev().removeClass("hide")
        }
    },function(){
        if($(this).parent().is(".active")){
            $(this).parent().removeClass("active");
            $(this).prev().addClass("hide");
            if($(this).parent().is(".qq")){
                $(this).parent().addClass("active");
                $(this).prev().removeClass("hide")
            }
        }else{
            $(this).parent().addClass("active");
            $(this).prev().removeClass("hide")
        }
    })
});

/*banner_content切换*/
    var o  = $(".cj_ul").find("li");
    var u = $(".cj_ul1>li");
    o.each(function(i){
        $(this).on("click",function(){

            $(this).addClass("zindex");
            $(this).find("img").addClass("block").removeClass("hide")
            $(this).siblings().removeClass("zindex");
            $(this).siblings().find("img").addClass("hide").removeClass("block")

            u.eq(i).removeClass("hide").addClass("block");
            u.eq(i).siblings().removeClass("block").addClass("hide")
        })
    });
    var w = $(".wish"),
        wn = $(".wished_number"),
        wnt = wn.text();
        w.on("click",function(){
            ++wnt;
            wn.text(wnt)
        });

    /*Addition and subtraction of the quantity of goods*/
    var p = $(".plus"),
        bq = $(".btn3"),
        bo = $(".btn2"),
        i = p.val();
        p.val(1);
    if(i == 1){
        bq.addClass("to_disabled");
    }
    bo.on("click",function(){
        p.val(++i)
        if(i>1){
            bq.removeClass("to_disabled");
        }

    });

    bq.on("click",function(){
         if(i > 1){
            p.val(--i);
            $(this).removeClass("to_disabled");
             if(i == 1){
                 $(this).addClass("to_disabled");
                 p.val(1);
             }
        }

    });



    var t = $(".cp_div li");
    t.eq(0).find(".dui").css({"border":"3px solid #ff0000"}).end().find(".tut").removeClass("hide");
    t.each(function(){
        $(this).on("click",function(){
            $(this).find(".dui").css({"border":"3px solid #ff0000"});
            $(this).find(".tut").removeClass("hide");
            $(this).siblings().find(".dui").css({"border":"3px solid transparent"}).end().find(".tut").addClass("hide");
        })
    });



    $(".cbbm_y li").each(function(){
        $(this).on("click",function(){
            $(this).siblings().removeClass("oof");
            $(this).addClass("oof");
            $(this).find(".h_span").removeClass("hide");
            $(this).siblings().find(".h_span").addClass("hide")
        })
    });
    $(".sjao").each(function(){
        $(this).on("click",function(){
            if($(this).parent().next(".show_div").hasClass("hide")){
                $(this).parent().next(".show_div").removeClass("hide").addClass("show");
                $(this).parent().siblings().next(".show_div").removeClass("show").addClass("hide");
                $(this).parent().removeClass("cjul_d1");
                $(this).parent().siblings().addClass("cjul_d1")
                $(this).find("i").removeClass("fa-caret-right").addClass("fa-caret-down");
                $(this).parent().siblings().find(".sjao").find("i").removeClass("fa-caret-down").addClass("fa-caret-right")
            }else{
                $(this).parent().next(".show_div").removeClass("show").addClass("hide");
                $(this).parent().addClass("cjul_d1");
                $(this).find("i").removeClass("fa-caret-down").addClass("fa-caret-right")
            }
        })
    });
    $(" table tr:odd").css({"background":"#f9f9f9"});
    $(" table tr:even").css({"background":"#fff"});
    $(" table tr").each(function(){
        $(this).hover(function(){
                $(this).css({"background":"#f5f5f5"})
            },
            function(){
                $(" table tr:odd").css({"background":"#f9f9f9"});
                $(" table tr:even").css({"background":"#fff"})
            })
    });





    $(".mlx span").each(function(){
        $(this).hover(function(){
            $(this).css({"borderRight":"1px solid transparent"});
            $(this).prev().css({"borderRight":"1px solid transparent"});
        },function(){
            $(this).css({"borderRight":"1px solid #b6b6b6"});
            $(this).prev().css({"borderRight":"1px solid #b6b6b6"});
        })
        $(this).on("click",function(){
            $(this).addClass("beise");
            $(this).siblings().removeClass("beise");
            $(this).prev().css({"borderRight":"1px solid transparent"});
            $(this).siblings().prev().css({"borderRight":"1px solid #b6b6b6"})
        })
    });
    $(".mlx .beise").prev().css({"borderRight":"1px solid transparent"});




$(".animate").hide()
$(".ccc_ul>li").each(function(){
    $(this).hover(
        function(){
            $(".animate").show()
            $(this).find(".animate").animate({
            "top":"0px",
            "left":"0px",
             "height":"131px"
            },200)
        },
        function(){
            $(".animate").hide()
            $(this).find(".animate").animate({
                "top":"132px",
                "left":"0px",
                "height":"0"
            },200)
        })
});




    var span = $(".chiofu_rank_head span");
    var sdiv = $(".chiofu_rank_content_div");
    $(".chiofu_rank_content_div:first>ul>li:even").css({"background":"#fff"});
    $(".chiofu_rank_content_div:first>ul>li:odd").css({"background":"#efebea"});
    $(".chiofu_rank_content_div:last>ul>li:even").css({"background":"#fff"});
    $(".chiofu_rank_content_div:last>ul>li:odd").css({"background":"#efebea"});
    span.each(function(i){
        $(this).on("click",function(){
            sdiv.eq(i).addClass("hide");
            sdiv.eq(i).siblings().removeClass("hide");
            $(this).addClass("active");
            $(this).siblings().removeClass("active")
        })
    });
    var mi = $(".more_information");
    mi.on("click",function(){
        if($(this).parent().prev().find("ul li").has(".hide")){
            $(this).parent().prev().find(".hide").removeClass("hide").addClass("faaa");
            $(this).find('i').removeClass("fa-sort-up").addClass("fa-sort-down")
        }
       else if($(this).find('i').has(".fa-sort-down")){
            $(this).parent().prev().find(".faaa").addClass("hide").removeClass("faaa");
            $(this).find('i').removeClass("fa-sort-down").addClass("fa-sort-up")
        }
    });
/*winning_information_users*/
//    var s = $(".cjj_p1_p");
//    var px = s.css('marginLeft');
//    px = 0 + 'px';
//    var a = null;
//    var c = null;
//    function Dong(){
//        a += parseInt(px)-5;
//        c = a + "px";
//        s.css({'marginLeft':c});
//        if(s.css("marginLeft") == "-20px"){
//            s.css({'marginLeft':px});
//        }
//    }
//    var set = setInterval(Dong,200);
//    s.hover(function(){
//        clearInterval(set)
//    },function(){
//        set = setInterval(Dong,200);
//    });



    var li = $(".li_a .ba");
    var bli = 0;
    li.each(function(i){
        $(this).on("click",function(){
            bli = i + 1;
            $(this).parent().next().find("li").eq(bli).removeClass("hide").addClass("block");
            $(this).parent().next().find("li").eq(bli).siblings().removeClass("block").addClass("hide");
        })
    });

    var pa = $(".payment");
    pa.each(function(){
       var that = this;
       $(that).find("li").on("click",function(){
           $(this).addClass("active");
           $(this).siblings().removeClass("active");
           $(this).find("input:radio").get(0).checked = true;
           $(this).siblings().find("input:radio").get(0).checked = false;
       })
    });



    /*商品切换*/
    var animate_time=200;//动画时间：0.3秒
    var interval_time=3000;//播放间隔时间：5秒
    var picnumber=$(".scrollpic li").size()-1;//计算广告的数量
    var slideclick = 0;//初始化
    //循环函数
    function autoplay(){
        slideclick++;
        if(slideclick<=picnumber){
            $(".scrollpic li").eq(slideclick).trigger("dblclick");
        }else{
            $(".scrollpic li").eq(0).trigger("dblclick");
            slideclick = 0
        }
    }
    //设置循环时间，自动开始循环
    var auto_setInterval = setInterval(autoplay,interval_time);
    //悬停广告区域时播放停止
    $(".focus1").hover(function(){
        clearInterval(auto_setInterval);
    },function(){
        auto_setInterval = setInterval(autoplay,interval_time);
    });
    //小图点击时，开始动画
    $(".scrollpic li").dblclick(function(){
        slideclick=$(".scrollpic li").index($(this));
        $(".scrollpic li").removeClass("current");
        $(this).addClass("current");
        //大图上移
        $(".focus1 .focuspic").animate({"marginLeft":slideclick*-392},{duration:animate_time,queue:false});
        //控制缩略图显示个数
        if(slideclick<picnumber){
            if(slideclick==0||slideclick==1){
                $(".scrollpic ul").animate({"marginLeft":"0px"},{duration:animate_time,queue:false});
            }else{
                $(".scrollpic ul").animate({"marginLeft":(slideclick-1)*-108},{duration:animate_time,queue:false});//显示最后4张图片不在滚动
            }
        }
        //判断上下按钮是否可点击
        if(slideclick==0){
            $(".scrollbox #prev").addClass("disabled");
            $(".scrollbox #next").removeClass("disabled");
        }else if(slideclick==picnumber){
            $(".scrollbox #prev").removeClass("disabled");
            $(".scrollbox #next").addClass("disabled");
        }else{
            $(".scrollbox #prev").removeClass("disabled");
            $(".scrollbox #next").removeClass("disabled");
        }
    });
    //鼠标在小图上悬停时，相关移动
    $(".scrollpic li").mouseover(function(){
        var slidebtn_hover_chi = $(".scrollpic li").index($(this));
        $(".scrollpic li").removeClass("current");
        $(this).addClass("current");
        $(".focuspic").animate({"marginLeft":slidebtn_hover_chi*-392},{duration:animate_time,queue:false});
        if(slidebtn_hover_chi!=slideclick);
        slideclick=slidebtn_hover_chi;
        //判断上下按钮是否可点击
        if(slideclick==0){
            $(".scrollbox #prev").addClass("disabled");
            $(".scrollbox #next").removeClass("disabled");
        }else if(slideclick==picnumber){
            $(".scrollbox #prev").removeClass("disabled");
            $(".scrollbox #next").addClass("disabled");
        }else{
            $(".scrollbox #prev").removeClass("disabled");
            $(".scrollbox #next").removeClass("disabled");
        }
    });

    //点击向上按钮时
    $(".scrollbox #prev").click(function(){
        slideclick=slideclick-1;
        if(slideclick<0){
            slideclick=0;
        }
        $(".scrollpic li").eq(slideclick).trigger("dblclick");
    });

    //点击向下按钮时
    $(".scrollbox #next").click(function(){
        slideclick=slideclick+1;
        if(slideclick<=picnumber){
            slideclick=picnumber;
            $(".scrollpic li").eq(slideclick).trigger("dblclick");
            $(".scrollpic ul").animate({"marginLeft":(slideclick-2)*-108},{duration:animate_time,queue:false});// 缩略图最后滚动的左侧距离位置 正好4张缩略图显示
        }else{
            $(".scrollpic li").eq(0).trigger("dblclick");
            slideclick = 0
        }
        $(".scrollpic li").eq(slideclick).trigger("dblclick");
    });
    var ds = $(".data span"),
        ac = $(".address_content_content div");
   ds.each(function(i){
       $(this).on("click",function(){
           $(this).addClass("active")
           $(this).siblings().removeClass("active")
           ac.eq(i).removeClass("hide");
           ac.eq(i).siblings().addClass("hide")
       })
   })
});
