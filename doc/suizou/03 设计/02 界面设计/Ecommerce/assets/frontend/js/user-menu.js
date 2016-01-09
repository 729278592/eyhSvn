/**
 * Created by eyohu023 on 2015/11/26.
 */
$(function(){




    /*User personal information left navigation*/
    var yy = $(".personal-menu li a");
    yy.each(function(){
        $(this).hover(function(){
            if($(this).parent().is(".active")){
                $(this).parent().addClass("dd");
            }else{
                $(this).parent().addClass("active");
                $(this).prev().removeClass("hide")
            }
        },function(){
            if($(this).parent().is(".active")){
                $(this).parent().removeClass("active");
                $(this).prev().addClass("hide");
                if($(this).parent().is(".dd")){
                    $(this).parent().addClass("active");
                    $(this).prev().removeClass("hide")
                }
            }else{
                $(this).parent().addClass("active");
                $(this).prev().removeClass("hide")
            }
        })
    });




});
