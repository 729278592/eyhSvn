/**
 * Created by eyohu023 on 2015/8/14.
 */

$(" .div-group:odd").css({"background":"#fff"});
$(" .div-group:even").css({"background":"#efecec"});



var dfa = $(".div-group .fa");

dfa.on("click",function(){
    if($(this).parent().parent().parent().next().css("display") == "none"){
        $(this).parent().parent().parent().next().slideDown();
        $(this).removeClass("fa-caret-left").addClass("fa-caret-down");
        $(this).parent().parent().parent().siblings(".div-group").next().slideUp()
        $(this).parent().parent().parent().siblings(".div-group").find(".fa").removeClass("fa-caret-down").addClass("fa-caret-left");
    }
    else{
        $(this).parent().parent().parent().next().slideUp()
        $(this).removeClass("fa-caret-down").addClass("fa-caret-left");
    }
});


var ml = $(".menu li");
var du = $(".div-ul");
    ml.each(function(i){

   $(this).on("click",function(){
       $(this).addClass("active");
       $(this).siblings().removeClass("active");
       du.eq(i).removeClass("hide");
       du.eq(i).siblings(".div-ul").addClass("hide");
   })
});



var ugb = $(".ul-group .goods-ul .buy");
var m = $(".mask");
var pb = $(".plus-buy");
ugb.on("click",function(){
    m.removeClass("hide");
});
pb.on("click",function(){
    m.addClass("hide");
});

