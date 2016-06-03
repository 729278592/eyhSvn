/**
 * Created by WHB on 2016/5/11.
 */
/*左边二级导航*/
$(function(){
    $(".nav").hover(
        function(){
            $(this).animate({width:"158px"},200);
            $(".main-nav-w158").animate({left:"0"},200);
        },
        function(){
            $(this).animate({width:"50px"},200);
            $(".main-nav-w158").animate({left:"-158px"},200);
        });
    var mw158 = $(".main-nav-w158 .main-nav-list li");
    var m     = $(".main-nav .main-nav-list li");
    m.each(function(i){
        $(this).hover(
            function(){
                mw158.eq(i).css({background:"#79a8ff"});
                mw158.eq(i).siblings("li").css({background:""})
            },
            function(){
                mw158.css({background:""});
                mw158.eq(i).siblings("li").css({background:""})
            }
        );
    });
    mw158.each(function(i){
        $(this).hover(
            function(){
                $(this).css({background:"#79a8ff"});
                $(this).eq(i).siblings("li").css({background:""});
                m.eq(i).css({background:"#333"});
                m.eq(i).siblings("li").css({background:""});
            },
            function(){
                $(this).css({background:""});
                m.css({background:""});
            }
        );
    });



    $(".accountSettings").on("click",function(e){
        e.stopPropagation();
        if($(".account-selection").is(".hide")){
            $(".account-selection").removeClass("hide");
        }else{
            $(".account-selection").addClass("hide");
        }
    });
});
