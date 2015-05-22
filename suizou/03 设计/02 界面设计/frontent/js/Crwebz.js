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
    var b = $(".block0");
    $(".ccsh_ul span").css({"opacity":"0.8"})
    b.each(function(){
        $(this).on("click",function(){
            $(this).addClass("click")
            $(this).siblings().removeClass("click")
        })
    });
    b.eq(0).on("click",function(){
        $("#div1").removeClass("hide").addClass("block")
        $("#div2").removeClass("block").addClass("hide")
    })
    b.eq(1).on("click",function(){
        $("#div2").removeClass("hide").addClass("block")
        $("#div1").removeClass("block").addClass("hide")
    })



/*banner_content切换*/
    var o  = $(".cj_ul").find("li");
    var u = $(".cj_ul1>li");
    o.each(function(i){
        $(this).on("click",function(){
            $(this).find("img").attr({"src":"images/cjzd/tx.png"})
            $(this).siblings().find("img").attr({"src":"images/cjzd/tx1.png"})
            $(this).addClass("zindex")
            $(this).siblings().removeClass("zindex")
            u.eq(i).removeClass("hide").addClass("block")
            u.eq(i).siblings().removeClass("block").addClass("hide")
        })
    });






    var i = $(".plus").val();
    $(".btn2").on("click",function(){
        $(".plus").val(++i)
    })
    $(".btn3").on("click",function(){
        $(".plus").val(--i)
    })
    var t = $(".cp_div li")
    t.eq(0).find(".dui").css({"border":"3px solid #ff0000"}).end().find(".tut").removeClass("hide");
    t.each(function(){
        $(this).on("click",function(){
            $(this).find(".dui").css({"border":"3px solid #ff0000"})
            $(this).find(".tut").removeClass("hide");
            $(this).siblings().find(".dui").css({"border":"3px solid transparent"}).end().find(".tut").addClass("hide");
        })
    })






//var d = $(".dao").text()
//var set = setInterval(function(){
//     $(".dao").text(--d);
//    if($(".dao").text()==0){
//        clearInterval(set);
//        window.location.href = "登陆.html";
//    }
//},1000)


    $(".cbbm_y li").each(function(){
        $(this).on("click",function(){
            $(this).siblings().removeClass("oof")
            $(this).addClass("oof")
            $(this).find(".h_span").removeClass("hide")
            $(this).siblings().find(".h_span").addClass("hide")
        })
    })


    $(".sjao").each(function(){
        $(this).on("click",function(){
            if($(this).parent().next(".show_div").hasClass("hide")){
                $(this).parent().next(".show_div").removeClass("hide").addClass("show")
                $(this).parent().siblings().next(".show_div").removeClass("show").addClass("hide")
                $(this).parent().removeClass("cjul_d1")
                $(this).parent().siblings().addClass("cjul_d1")
                $(this).find("i").removeClass("fa-caret-right").addClass("fa-caret-down")
                $(this).parent().siblings().find(".sjao").find("i").removeClass("fa-caret-down").addClass("fa-caret-right")
            }else{
                $(this).parent().next(".show_div").removeClass("show").addClass("hide")
                $(this).parent().addClass("cjul_d1")
                $(this).find("i").removeClass("fa-caret-down").addClass("fa-caret-right")
            }
        })
    });
    $(".block table tr:odd").css({"background":"#f9f9f9"});
    $(".block table tr:even").css({"background":"#fff"});
    $(".block table tr").each(function(){
        $(this).hover(function(){
                $(this).css({"background":"#f5f5f5"})
            },
            function(){
                $(".block table tr:odd").css({"background":"#f9f9f9"});
                $(".block table tr:even").css({"background":"#fff"})
            })
    });
    $(".mlx span").each(function(){

        $(this).on("click",function(){
            $(this).addClass("beise")
            $(this).siblings().removeClass("beise")
            $(this).prev().css({"borderRight":"1px solid transparent"})
            $(this).siblings().prev().css({"borderRight":"1px solid #b6b6b6"})
        })

    })
    $(".mlx .beise").prev().css({"borderRight":"1px solid transparent"})


/*winning_information_users*/
    var s = $(".cjj_p1_p");
    var px = s.css('marginLeft');
    px = 0+ 'px';
    var a = null;
    var c = null;
    function Dong(){
        a += parseInt(px)-5
        c = a + "px";
        s.css({'marginLeft':c})
    }
    var set = setInterval(Dong,200);
    s.hover(function(){
        clearInterval(set)
    },function(){
        set = setInterval(Dong,200);
    })




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

})





