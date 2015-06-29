
var isdian = true;
var isdian1 = true;

$(".cbs_ul li").each(function(){
    $(this).hover(function(){
        $(this).css({"background":"#ccc"});
        $(this).siblings().css({"background":""})
    });
    $(this).on("click",function(){
        $(this).parent().prev().prev().val($(this).text());
        $(this).parent().removeClass("show");
        isdian = true;
        isdian1 = true;
    })
});


$("#cbs_ul1").on("click",function(){

    if(isdian == true){
        $(this).next(".cbs_ul").addClass("show");
        isdian = false;
    }
    else if(isdian == false){
        $(this).next(".cbs_ul").removeClass("show");
        isdian = true;
    }
});

$("#cbs_ul2").on("click",function(){
    if(isdian1 == true){
        $(this).next(".cbs_ul").addClass("show");
        isdian1 = false;
    }
    else if(isdian1 == false){
        $(this).next(".cbs_ul").removeClass("show");
        isdian1 = true;
    }
});





