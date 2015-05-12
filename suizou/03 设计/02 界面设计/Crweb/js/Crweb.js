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
var l = $(".ccsh_ul li").width()+36;


$(".c_left").on("click",function(){

      $(".ccsh_ul li").animate({
          "left":-l
      },1500)
})

$(".c_right").on("click",function(){

    $(".ccsh_ul").animate({
        "marginLeft":l
    },1500)
})
