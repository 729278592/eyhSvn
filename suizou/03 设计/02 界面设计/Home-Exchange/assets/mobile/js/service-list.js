/**
 * Created by WHB on 2016/4/11.
 */
$(function(){
    $(".head-title").on("click",function(){
        if($(this).next().is(".hide")){
            $(this).next().removeClass("hide");
            $(this).find(".fa-angle-right").removeClass("fa-angle-right").addClass("fa-angle-down");
            $(this).closest("li").siblings("li").find(".head-title").next().addClass("hide");
            $(this).closest("li").siblings("li").find(".fa-angle-down").removeClass("fa-angle-down").addClass("fa-angle-right");
        }else{
            $(this).next().addClass("hide");
            $(this).find(".fa-angle-down").removeClass("fa-angle-down").addClass("fa-angle-right");
        }
    });
})