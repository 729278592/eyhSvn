/**
 * Created by WHB on 2016/5/11.
 */
/*左边二级导航*/
$(function(){

    $(".nav a").ajaxify({
        target:'#admin-content-wrapper'
    });

    $(".nav").hover(
        function(){
            $(this).css({zIndex:"20"});
            $(this).animate({width:"158px"},200);
            $(".main-nav-w158").animate({left:"0"},200);
        },
        function(){
            var that = $(this);
            $(this).animate({width:"60px"},200);
            $(".main-nav-w158").animate({left:"-158px"},200,function(){
                that.css({zIndex:"20"});
            });
        });
    var mw158 = $(".main-nav-w158 .main-nav-list li");
    var m     = $(".main-nav .main-nav-list li");
    m.each(function(i){

        $(this).hover(
            function(){
                if(!$(this).is(".active")){
                    var data = $(this).attr("data");
                    $(this).find("img").attr({src:"../../assets/admin/images/" +data+ ".png"});
                    mw158.eq(i).css({background:"#ffedd7"});
                    mw158.eq(i).siblings("li").css({background:""})
                }
            },
            function(){
                if(!$(this).is(".active")){
                    var data = $(this).attr("data");
                    $(this).find("img").attr({src:"../../assets/admin/images/" +data+ "1.png"});
                    mw158.css({background:""});
                    mw158.eq(i).siblings("li").css({background:""})
                }
            }
        );
        $(this).on("click",function(){
            $(this).addClass("active");
            $(this).siblings("li").removeClass("active");
            mw158.eq(i).addClass("active");
            mw158.eq(i).siblings("li").removeClass("active");
            if(mw158.is(".active")){
                var data1 = $(".main-nav-w158 .main-nav-list li.active").attr("data");
                $(".main-nav-w158 .main-nav-list li.active").find("img").attr({src:"../../assets/admin/images/" +data1+ "1.png"});
            }
        })
    });
    mw158.each(function(i){
        $(this).hover(
            function(){
                if(!$(this).is(".active")){
                    $(this).css({background:"#ffedd7"});
                    $(this).eq(i).siblings("li").css({background:""});
                    var data = m.eq(i).attr("data");
                    m.eq(i).find("img").attr({src:"../../assets/admin/images/" +data+ ".png"});
                    m.eq(i).css({background:"#47aaea"});
                    m.eq(i).siblings("li").css({background:""});
                }
            },
            function(){
                if(!$(this).is(".active")){
                    var data = m.eq(i).attr("data");
                    m.eq(i).find("img").attr({src:"../../assets/admin/images/" +data+ "1.png"});
                    $(this).css({background:""});
                    m.css({background:""});
                }
            }
        );
        $(this).on("click",function(){
            $(this).addClass("active");
            $(this).siblings("li").removeClass("active");
            m.eq(i).addClass("active");
            m.eq(i).siblings("li").removeClass("active");
        })
    });
});

