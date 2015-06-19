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
$(".ccsh_ul span").css({"opacity":"0.8"})
$(".block0").each(function(){
    $(this).on("click",function(){
            $(this).addClass("click")
            $(this).siblings().removeClass("click")
    })
})
$(".block0").eq(0).on("click",function(){

    $("#div1").removeClass("hide").addClass("block")
    $("#div2").removeClass("block").addClass("hide")
    })
$(".block0").eq(1).on("click",function(){
    $("#div2").removeClass("hide").addClass("block")
    $("#div1").removeClass("block").addClass("hide")
    })




var o  = $(".cj_ul").find("li");
var u = $(".cj_ul1 li");
o.eq(0).on("click",function(){
    $(this).find("img").attr({"src":"images/cjzd/tx.png"})
    $(this).siblings().find("img").attr({"src":"images/cjzd/tx1.png"})
    $(this).addClass("zindex")
    $(this).siblings().removeClass("zindex")
    u.eq(0).removeClass("hide").addClass("block")
    u.eq(0).siblings().removeClass("block").addClass("hide")

})
o.eq(2).on("click",function(){
    $(this).find("img").attr({"src":"images/cjzd/tx.png"})
    $(this).siblings().find("img").attr({"src":"images/cjzd/tx1.png"})
    $(this).addClass("zindex")
    $(this).siblings().removeClass("zindex")
    u.eq(2).removeClass("hide").addClass("block")
    u.eq(2).siblings().removeClass("block").addClass("hide")
})

o.eq(3).on("click",function(){
    $(this).find("img").attr({"src":"images/cjzd/tx.png"})
    $(this).siblings().find("img").attr({"src":"images/cjzd/tx1.png"})
    $(this).addClass("zindex")
    $(this).siblings().removeClass("zindex")
    u.eq(3).removeClass("hide").addClass("block")
    u.eq(3).siblings().removeClass("block").addClass("hide")
})


o.eq(1).on("click",function(){
    $(this).find("img").attr({"src":"images/cjzd/tx.png"})
    $(this).siblings().find("img").attr({"src":"images/cjzd/tx1.png"})
    $(this).addClass("zindex")
    $(this).siblings().removeClass("zindex")
    u.eq(1).removeClass("hide").addClass("block")
    u.eq(1).siblings().removeClass("block").addClass("hide")
})
o.eq(4).on("click",function(){
    $(this).find("img").attr({"src":"images/cjzd/tx.png"})
    $(this).siblings().find("img").attr({"src":"images/cjzd/tx1.png"})
    $(this).addClass("zindex")
    $(this).siblings().removeClass("zindex")
    u.eq(4).removeClass("hide").addClass("block")
    u.eq(4).siblings().removeClass("block").addClass("hide")
})
var i = $(".plus").val();
$(".btn2").on("click",function(){

    $(".plus").val(++i)
})
$(".btn3").on("click",function(){

    $(".plus").val(--i)
//    if(i<0){
//       i = $(".plus").val(0)
//    }

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
//        window.location.href = "login.html";
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




