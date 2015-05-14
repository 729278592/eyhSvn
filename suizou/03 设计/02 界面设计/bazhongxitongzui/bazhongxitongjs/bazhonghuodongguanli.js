$(".header ul .liyi .shadow").hide()
$(".header ul .lier .shadow").hide()
$(".header ul .lisi .shadow").show()
$(".header ul .jifen .shadow").hide()
$(".header ul .liwu .shadow").hide()
$(".header ul .liliu .shadow").hide()
$(".header ul .lisi span").css({"position":"relative","top":"10px"})
$(".header ul .liyi").on("click",function(){
    $(".header ul .liyi .shadow").show()
    $(".header ul .lier .shadow").hide()
    $(".header ul .jifen .shadow").hide()
    $(".header ul .lisi .shadow").hide()
    $(".header ul .liwu .shadow").hide()
    $(".header ul .liliu .shadow").hide()

    $(".header ul .jifen span").css({"color":"#f8c8ad","position":"relative","top":"0px"})
    $(".header ul .liyi span").css({"color":"#db2c22","position":"relative","top":"10px"})
    $(".header ul .lier span").css({"position":"relative","top":"0px","color":"#f8c8ad"})
    $(".header ul .lisi span").css({"position":"relative","top":"0px","color":"#f8c8ad"})
    $(".header ul .liwu span").css({"position":"relative","top":"0px","color":"#f8c8ad"})
    $(".header ul .liliu span").css({"position":"relative","top":"0px","color":"#f8c8ad"})

})


$(".header ul .lier").on("click",function(){
    $(".header ul .lier .shadow").show()
    $(".header ul .liyi .shadow").hide()
    $(".header ul .jifen .shadow").hide()
    $(".header ul .lisi .shadow").hide()
    $(".header ul .liwu .shadow").hide()
    $(".header ul .liliu .shadow").hide()
    $(".header ul .jifen span").css({"color":"#f8c8ad","position":"relative","top":"0px"})
    $(".header ul .lier span").css({"color":"#db2c22","position":"relative","top":"10px"})
    $(".header ul .liyi span").css({"position":"relative","top":"0px","color":"#f8c8ad"})
    $(".header ul .lisi span").css({"position":"relative","top":"0px","color":"#f8c8ad"})
    $(".header ul .liwu span").css({"position":"relative","top":"0px","color":"#f8c8ad"})
    $(".header ul .liliu span").css({"position":"relative","top":"0px","color":"#f8c8ad"})
})
$(".header ul .jifen").on("click",function(){
    $(".header ul .jifen .shadow").show()
    $(".header ul .liyi .shadow").hide()
    $(".header ul .lier .shadow").hide()
    $(".header ul .lisi .shadow").hide()
    $(".header ul .liwu .shadow").hide()
    $(".header ul .liliu .shadow").hide()
    $(".header ul .lier span").css({"color":"#f8c8ad","position":"relative","top":"0px"})
    $(".header ul .jifen span").css({"color":"#db2c22","position":"relative","top":"10px"})
    $(".header ul .liyi span").css({"position":"relative","top":"0px","color":"#f8c8ad"})
    $(".header ul .lisi span").css({"position":"relative","top":"0px","color":"#f8c8ad"})
    $(".header ul .liwu span").css({"position":"relative","top":"0px","color":"#f8c8ad"})
    $(".header ul .liliu span").css({"position":"relative","top":"0px","color":"#f8c8ad"})
})

$(".header ul .lisi").on("click",function(){
    $(".header ul .lisi .shadow").show()
    $(".header ul .liyi .shadow").hide()
    $(".header ul .jifen .shadow").hide()
    $(".header ul .lier .shadow").hide()
    $(".header ul .liwu .shadow").hide()
    $(".header ul .liliu .shadow").hide()
    $(".header ul .jifen span").css({"color":"#f8c8ad","position":"relative","top":"0px"})
    $(".header ul .lisi span").css({"color":"#db2c22","position":"relative","top":"10px"})
    $(".header ul .liyi span").css({"position":"relative","top":"0px","color":"#f8c8ad"})
    $(".header ul .lier span").css({"position":"relative","top":"0px","color":"#f8c8ad"})
    $(".header ul .liwu span").css({"position":"relative","top":"0px","color":"#f8c8ad"})
    $(".header ul .liliu span").css({"position":"relative","top":"0px","color":"#f8c8ad"})
})
$(".header ul .liwu").on("click",function(){
    $(".header ul .liwu .shadow").show()
    $(".header ul .liyi .shadow").hide()
    $(".header ul .jifen .shadow").hide()
    $(".header ul .lier .shadow").hide()
    $(".header ul .lisi .shadow").hide()
    $(".header ul .liliu .shadow").hide()
    $(".header ul .jifen span").css({"color":"#f8c8ad","position":"relative","top":"0px"})
    $(".header ul .liwu span").css({"color":"#db2c22","position":"relative","top":"10px"})
    $(".header ul .liyi span").css({"position":"relative","top":"0px","color":"#f8c8ad"})
    $(".header ul .lier span").css({"position":"relative","top":"0px","color":"#f8c8ad"})
    $(".header ul .lisi span").css({"position":"relative","top":"0px","color":"#f8c8ad"})
    $(".header ul .liliu span").css({"position":"relative","top":"0px","color":"#f8c8ad"})
})
$(".header ul .liliu").on("click",function(){
    $(".header ul .liliu .shadow").show()
    $(".header ul .liyi .shadow").hide()
    $(".header ul .jifen .shadow").hide()
    $(".header ul .lier .shadow").hide()
    $(".header ul .lisi .shadow").hide()
    $(".header ul .liwu .shadow").hide()
    $(".header ul .jifen span").css({"color":"#f8c8ad","position":"relative","top":"0px"})
    $(".header ul .liliu span").css({"color":"#db2c22","position":"relative","top":"10px"})
    $(".header ul .liyi span").css({"position":"relative","top":"0px","color":"#f8c8ad"})
    $(".header ul .lier span").css({"position":"relative","top":"0px","color":"#f8c8ad"})
    $(".header ul .lisi span").css({"position":"relative","top":"0px","color":"#f8c8ad"})
    $(".header ul .liwu span").css({"position":"relative","top":"0px","color":"#f8c8ad"})
})

$(".ul_yi").hide()
$(".ul_er").hide()
$(".ul_san").hide()
var sanjiao = false
$(".content_yi .li .sanjiao1").on("click",function(){
    if(sanjiao == false){
        $(this).attr("src","../bazhongxitongimg/志愿活动管理三角竖_03.png");
        $(this).parent().next().slideDown(500);
        if(sanjiao1 == true){
            $(".ul_er").slideUp(500)
            $(".content_yi .li .sanjiao2").attr("src","../bazhongxitongimg/志愿活动管理三角横_03.png");
            sanjiao1 = false
        }else if(sanjiao2 == true){
            $(".ul_san").slideUp(500)
            $(".content_yi .li .sanjiao3").attr("src","../bazhongxitongimg/志愿活动管理三角横_03.png");
            sanjiao2 = false
        }
        sanjiao = true
    }
    else if(sanjiao == true){
        $(this).attr("src","../bazhongxitongimg/志愿活动管理三角横_03.png")
        $(this).parent().next().slideUp(500);
        sanjiao = false
    }
})
var sanjiao1 = false
$(".content_yi .li .sanjiao2").on("click",function(){
    if(sanjiao1 == false){
        $(this).attr("src","../bazhongxitongimg/志愿活动管理三角竖_03.png");
        $(this).parent().next().slideDown(500);
        if(sanjiao == true){
            $(".ul_yi").slideUp(500)
            $(".content_yi .li .sanjiao1").attr("src","../bazhongxitongimg/志愿活动管理三角横_03.png");
            sanjiao = false
        }else if(sanjiao2 == true){
            $(".ul_san").slideUp(500)
            $(".content_yi .li .sanjiao3").attr("src","../bazhongxitongimg/志愿活动管理三角横_03.png");
            sanjiao2 = false
        }
        sanjiao1 = true
    }
    else if(sanjiao1 == true){
        $(this).attr("src","../bazhongxitongimg/志愿活动管理三角横_03.png")
        $(this).parent().next().slideUp(500);
        sanjiao1 = false
    }
})
var sanjiao2 = false
$(".content_yi .li .sanjiao3").on("click",function(){
    if(sanjiao2 == false){
        $(this).attr("src","../bazhongxitongimg/志愿活动管理三角竖_03.png");
        $(this).parent().next().slideDown(500);
        if(sanjiao == true){
            $(".ul_yi").slideUp(500)
            $(".content_yi .li .sanjiao1").attr("src","../bazhongxitongimg/志愿活动管理三角横_03.png");
            sanjiao = false
        }else if(sanjiao1 == true){
            $(".ul_er").slideUp(500)
            $(".content_yi .li .sanjiao2").attr("src","../bazhongxitongimg/志愿活动管理三角横_03.png");
            sanjiao1 = false
        }
        sanjiao2 = true
    }
    else if(sanjiao2 == true){
        $(this).attr("src","../bazhongxitongimg/志愿活动管理三角横_03.png")
        $(this).parent().next().slideUp(500);
        sanjiao2 = false
    }
})


$(".ul_yi .lier ul").hide()
var lidian = false
$(".ul_yi .liyi .jiahaoyi").on("click",function(){
    if(lidian == false){
        $(".ul_yi .ulyiimg").attr({"src":"../bazhongxitongimg/志愿活动管理背景虚线1_03.png"})
        $(".ul_yi .liyi .ulyiimg").css({"position":"absolute","top":"-32px"})
        $(".ul_yi .liyi .jiahaoyi").css({"position":"absolute","top":"-32px"})
        $(".ul_yi .lier .jiahaoer").css({"position":"absolute","top":"100px"})
        $(".ul_yi .lisan .jiahaosan").css({"position":"absolute","top":"40px"})
        $(".ul_yi .lier").css({"position":"absolute","top":"2px"})
        $(".ul_yi .lisan").css({"position":"absolute","top":"93px"})
        $(".ul_yi .lisi").css({"position":"absolute","top":"125px"})
        $(".ul_yi .lier ul").show()
        if(isdian2 == true){
            $(".ul_yi .ulyiimg").attr({"src":"../bazhongxitongimg/志愿活动管理背景虚线1_03.png"})
            $(".ul_yi .lisan ul").hide()
            isdian2 = false
        }
       else if(isdian3 == true){
            $(".ul_yi .ulyiimg").attr({"src":"../bazhongxitongimg/志愿活动管理背景虚线1_03.png"})
            $(".ul_yi .lisi ul").hide()
            isdian3 = false
        }
        lidian = true
    }
    else if(lidian == true){
        $(".ul_yi .ulyiimg").attr({"src":"../bazhongxitongimg/志愿活动管理虚线背景_03.png"})
        $(".ul_yi .liyi .ulyiimg").css({"position":"absolute","top":"0px"})
        $(".ul_yi .liyi .jiahaoyi").css({"position":"absolute","top":"0px"})
        $(".ul_yi .lier .jiahaoer").css({"position":"absolute","top":"34px"})
        $(".ul_yi .lisan .jiahaosan").css({"position":"absolute","top":"32px"})
        $(".ul_yi .lier").css({"position":"absolute","top":"35px"})
        $(".ul_yi .lisan").css({"position":"absolute","top":"63px"})
        $(".ul_yi .lisi").css({"position":"absolute","top":"88px"})
        $(".ul_yi .lier ul").hide()
        lidian = false
    }
})
$(".ul_yi .lisan ul").hide()
var isdian2 = false
$(".ul_yi .lier .jiahaoer").on("click",function() {
    if(isdian2 == false){
        $(".ul_yi .ulyiimg").attr({"src":"../bazhongxitongimg/志愿活动管理背景虚线3_03.png"})
        $(".ul_yi .liyi .ulyiimg").css({"position":"absolute","top":"-32px"})
        $(".ul_yi .liyi .jiahaoyi").css({"position":"absolute","top":"-32px"})
        $(".ul_yi .lier .jiahaoer").css({"position":"absolute","top":"39px"})
        $(".ul_yi .lisan .jiahaosan").css({"position":"absolute","top":"100px"})
        $(".ul_yi .lier").css({"position":"absolute","top":"2px"})
        $(".ul_yi .lisan").css({"position":"absolute","top":"33px"})
        $(".ul_yi .lisi").css({"position":"absolute","top":"125px"})
        $(".ul_yi .lisan ul").show()
        if(lidian == true){
            $(".ul_yi .liyi .ulyiimg").attr({"src":"../bazhongxitongimg/志愿活动管理背景虚线3_03.png"})
            $(".ul_yi .lier ul").hide()
            lidian = false
        }
        else if(isdian3 == true){
            $(".ul_yi .ulyiimg").attr({"src":"../bazhongxitongimg/志愿活动管理背景虚线3_03.png"})
            $(".ul_yi .lisi ul").hide()
            isdian3 = false
        }
        isdian2 = true
    }
   else if(isdian2 == true){
        $(".ul_yi .ulyiimg").attr({"src":"../bazhongxitongimg/志愿活动管理虚线背景_03.png"})
        $(".ul_yi .liyi .ulyiimg").css({"position":"absolute","top":"0px"})
        $(".ul_yi .liyi .jiahaoyi").css({"position":"absolute","top":"0px"})
        $(".ul_yi .lier .jiahaoer").css({"position":"absolute","top":"34px"})
        $(".ul_yi .lisan .jiahaosan").css({"position":"absolute","top":"31px"})
        $(".ul_yi .lier").css({"position":"absolute","top":"35px"})
        $(".ul_yi .lisan").css({"position":"absolute","top":"63px"})
        $(".ul_yi .lisi").css({"position":"absolute","top":"88px"})
        $(".ul_yi .lisan ul").hide()
        isdian2 = false
    }

})

$(".ul_yi .lisi ul").hide()
var isdian3 = false
$(".ul_yi .lisan .jiahaosan").on("click",function() {
    if(isdian3 == false){
        $(".ul_yi .ulyiimg").attr({"src":"../bazhongxitongimg/志愿活动管理背景虚线4_03.png"})
        $(".ul_yi .liyi .ulyiimg").css({"position":"absolute","top":"-33px"})
        $(".ul_yi .liyi .jiahaoyi").css({"position":"absolute","top":"-33px"})
        $(".ul_yi .lier .jiahaoer").css({"position":"absolute","top":"39px"})
        $(".ul_yi .lisan .jiahaosan").css({"position":"absolute","top":"37px"})
        $(".ul_yi .lier").css({"position":"absolute","top":"2px"})
        $(".ul_yi .lisan").css({"position":"absolute","top":"33px"})
        $(".ul_yi .lisi").css({"position":"absolute","top":"62px"})
        $(".ul_yi .lisi ul").show()
        if(lidian == true){
            $(".ul_yi .ulyiimg").attr({"src":"../bazhongxitongimg/志愿活动管理背景虚线4_03.png"})
            $(".ul_yi .lier ul").hide()
            lidian = false
        }
        else if(isdian2 == true){
            $(".ul_yi .ulyiimg").attr({"src":"../bazhongxitongimg/志愿活动管理背景虚线4_03.png"})
            $(".ul_yi .lisan ul").hide()
            isdian2 = false
        }
        isdian3 = true
    }
    else if(isdian3 == true){
        $(".ul_yi .ulyiimg").attr({"src":"../bazhongxitongimg/志愿活动管理虚线背景_03.png"})
        $(".ul_yi .liyi .ulyiimg").css({"position":"absolute","top":"0px"})
        $(".ul_yi .liyi .jiahaoyi").css({"position":"absolute","top":"0px"})
        $(".ul_yi .lier .jiahaoer").css({"position":"absolute","top":"34px"})
        $(".ul_yi .lisan .jiahaosan").css({"position":"absolute","top":"32px"})
        $(".ul_yi .lier").css({"position":"absolute","top":"35px"})
        $(".ul_yi .lisan").css({"position":"absolute","top":"63px"})
        $(".ul_yi .lisi").css({"position":"absolute","top":"88px"})
        $(".ul_yi .lisi ul").hide()
        isdian3 = false
    }

})




$(".ul_er .lier ul").hide()
var lidian1 = false
$(".ul_er .liyi .jiahaoyi").on("click",function(){
    if(lidian1 == false){
        $(".ul_er .ulyiimg").attr({"src":"../bazhongxitongimg/志愿活动管理背景虚线1_03.png"})
        $(".ul_er .liyi .ulyiimg").css({"position":"absolute","top":"-32px"})
        $(".ul_er .liyi .jiahaoyi").css({"position":"absolute","top":"-32px"})
        $(".ul_er .lier .jiahaoer").css({"position":"absolute","top":"100px"})
        $(".ul_er .lisan .jiahaosan").css({"position":"absolute","top":"40px"})
        $(".ul_er .lier").css({"position":"absolute","top":"2px"})
        $(".ul_er .lisan").css({"position":"absolute","top":"93px"})
        $(".ul_er .lisi").css({"position":"absolute","top":"125px"})
        $(".ul_er .lier ul").show()
        if(isdian4 == true){
            $(".ul_er .ulyiimg").attr({"src":"../bazhongxitongimg/志愿活动管理背景虚线1_03.png"})
            $(".ul_er .lisan ul").hide()
            isdian4 = false
        }
        else if(isdian5 == true){
            $(".ul_er .ulyiimg").attr({"src":"../bazhongxitongimg/志愿活动管理背景虚线1_03.png"})
            $(".ul_er .lisi ul").hide()
            isdian5 = false
        }
        lidian1 = true
    }
    else if(lidian1 == true){
        $(".ul_er .ulyiimg").attr({"src":"../bazhongxitongimg/志愿活动管理虚线背景_03.png"})
        $(".ul_er .liyi .ulyiimg").css({"position":"absolute","top":"0px"})
        $(".ul_er .liyi .jiahaoyi").css({"position":"absolute","top":"0px"})
        $(".ul_er .lier .jiahaoer").css({"position":"absolute","top":"34px"})
        $(".ul_er .lisan .jiahaosan").css({"position":"absolute","top":"32px"})
        $(".ul_er .lier").css({"position":"absolute","top":"35px"})
        $(".ul_er .lisan").css({"position":"absolute","top":"63px"})
        $(".ul_er .lisi").css({"position":"absolute","top":"88px"})
        $(".ul_er .lier ul").hide()
        lidian1 = false
    }
})
$(".ul_er .lisan ul").hide()
var isdian4 = false
$(".ul_er .lier .jiahaoer").on("click",function() {
    if(isdian4 == false){
        $(".ul_er .ulyiimg").attr({"src":"../bazhongxitongimg/志愿活动管理背景虚线3_03.png"})
        $(".ul_er .liyi .ulyiimg").css({"position":"absolute","top":"-32px"})
        $(".ul_er .liyi .jiahaoyi").css({"position":"absolute","top":"-32px"})
        $(".ul_er .lier .jiahaoer").css({"position":"absolute","top":"39px"})
        $(".ul_er .lisan .jiahaosan").css({"position":"absolute","top":"100px"})
        $(".ul_er .lier").css({"position":"absolute","top":"2px"})
        $(".ul_er .lisan").css({"position":"absolute","top":"32px"})
        $(".ul_er .lisi").css({"position":"absolute","top":"125px"})
        $(".ul_er .lisan ul").show()
        if(lidian1 == true){
            $(".ul_er .ulyiimg").attr({"src":"../bazhongxitongimg/志愿活动管理背景虚线3_03.png"})
            $(".ul_er .lier ul").hide()
            lidian1 = false
        }
        else if(isdian5 == true){
            $(".ul_er .ulyiimg").attr({"src":"../bazhongxitongimg/志愿活动管理背景虚线3_03.png"})
            $(".ul_er .lisi ul").hide()
            isdian5 = false
        }
        isdian4 = true
    }
    else if(isdian4 == true){
        $(".ul_er .ulyiimg").attr({"src":"../bazhongxitongimg/志愿活动管理虚线背景_03.png"})
        $(".ul_er .liyi .ulyiimg").css({"position":"absolute","top":"0px"})
        $(".ul_er .liyi .jiahaoyi").css({"position":"absolute","top":"0px"})
        $(".ul_er .lier .jiahaoer").css({"position":"absolute","top":"34px"})
        $(".ul_er .lisan .jiahaosan").css({"position":"absolute","top":"31px"})
        $(".ul_er .lier").css({"position":"absolute","top":"35px"})
        $(".ul_er .lisan").css({"position":"absolute","top":"63px"})
        $(".ul_er .lisi").css({"position":"absolute","top":"88px"})
        $(".ul_er .lisan ul").hide()
        isdian4 = false
    }

})

$(".ul_er .lisi ul").hide()
var isdian5 = false
$(".ul_er .lisan .jiahaosan").on("click",function() {
    if(isdian5 == false){
        $(".ul_er .ulyiimg").attr({"src":"../bazhongxitongimg/志愿活动管理背景虚线4_03.png"})
        $(".ul_er .liyi .ulyiimg").css({"position":"absolute","top":"-33px"})
        $(".ul_er .liyi .jiahaoyi").css({"position":"absolute","top":"-33px"})
        $(".ul_er .lier .jiahaoer").css({"position":"absolute","top":"39px"})
        $(".ul_er .lisan .jiahaosan").css({"position":"absolute","top":"37px"})
        $(".ul_er .lier").css({"position":"absolute","top":"2px"})
        $(".ul_er .lisan").css({"position":"absolute","top":"32px"})
        $(".ul_er .lisi").css({"position":"absolute","top":"62px"})
        $(".ul_er .lisi ul").show()
        if(lidian1 == true){
            $(".ul_er .ulyiimg").attr({"src":"../bazhongxitongimg/志愿活动管理背景虚线4_03.png"})
            $(".ul_er .lier ul").hide()
            lidian1 = false
        }
        else if(isdian4 == true){
            $(".ul_er .ulyiimg").attr({"src":"../bazhongxitongimg/志愿活动管理背景虚线4_03.png"})
            $(".ul_er .lisan ul").hide()
            isdian4 = false
        }
        isdian5 = true
    }
    else if(isdian5 == true){
        $(".ul_er .ulyiimg").attr({"src":"../bazhongxitongimg/志愿活动管理虚线背景_03.png"})
        $(".ul_er .liyi .ulyiimg").css({"position":"absolute","top":"0px"})
        $(".ul_er .liyi .jiahaoyi").css({"position":"absolute","top":"0px"})
        $(".ul_er .lier .jiahaoer").css({"position":"absolute","top":"34px"})
        $(".ul_er .lisan .jiahaosan").css({"position":"absolute","top":"32px"})
        $(".ul_er .lier").css({"position":"absolute","top":"35px"})
        $(".ul_er .lisan").css({"position":"absolute","top":"63px"})
        $(".ul_er .lisi").css({"position":"absolute","top":"88px"})
        $(".ul_er .lisi ul").hide()
        isdian5 = false
    }

})




$(".ul_san .lier ul").hide()
var lidian2 = false
$(".ul_san .liyi .jiahaoyi").on("click",function(){
    if(lidian2 == false){
        $(".ul_san .ulyiimg").attr({"src":"../bazhongxitongimg/志愿活动管理背景虚线1_03.png"})
        $(".ul_san .liyi .ulyiimg").css({"position":"absolute","top":"-32px"})
        $(".ul_san .liyi .jiahaoyi").css({"position":"absolute","top":"-32px"})
        $(".ul_san .lier .jiahaoer").css({"position":"absolute","top":"100px"})
        $(".ul_san .lisan .jiahaosan").css({"position":"absolute","top":"40px"})
        $(".ul_san .lier").css({"position":"absolute","top":"2px"})
        $(".ul_san .lisan").css({"position":"absolute","top":"93px"})
        $(".ul_san .lisi").css({"position":"absolute","top":"125px"})
        $(".ul_san .lier ul").show()
        if(isdian6 == true){
            $(".ul_san .ulyiimg").attr({"src":"../bazhongxitongimg/志愿活动管理背景虚线1_03.png"})
            $(".ul_san .lisan ul").hide()
            isdian6 = false
        }
        else if(isdian7 == true){
            $(".ul_san .ulyiimg").attr({"src":"../bazhongxitongimg/志愿活动管理背景虚线1_03.png"})
            $(".ul_san .lisi ul").hide()
            isdian7 = false
        }
        lidian2 = true
    }
    else if(lidian2 == true){
        $(".ul_san .ulyiimg").attr({"src":"../bazhongxitongimg/志愿活动管理虚线背景_03.png"})
        $(".ul_san .liyi .ulyiimg").css({"position":"absolute","top":"0px"})
        $(".ul_san .liyi .jiahaoyi").css({"position":"absolute","top":"0px"})
        $(".ul_san .lier .jiahaoer").css({"position":"absolute","top":"34px"})
        $(".ul_san .lisan .jiahaosan").css({"position":"absolute","top":"32px"})
        $(".ul_san .lier").css({"position":"absolute","top":"35px"})
        $(".ul_san .lisan").css({"position":"absolute","top":"63px"})
        $(".ul_san .lisi").css({"position":"absolute","top":"88px"})
        $(".ul_san .lier ul").hide()
        lidian2 = false
    }
})
$(".ul_san .lisan ul").hide()
var isdian6 = false
$(".ul_san .lier .jiahaoer").on("click",function() {
    if(isdian6 == false){
        $(".ul_san .ulyiimg").attr({"src":"../bazhongxitongimg/志愿活动管理背景虚线3_03.png"})
        $(".ul_san .liyi .ulyiimg").css({"position":"absolute","top":"-32px"})
        $(".ul_san .liyi .jiahaoyi").css({"position":"absolute","top":"-32px"})
        $(".ul_san .lier .jiahaoer").css({"position":"absolute","top":"39px"})
        $(".ul_san .lisan .jiahaosan").css({"position":"absolute","top":"100px"})
        $(".ul_san .lier").css({"position":"absolute","top":"2px"})
        $(".ul_san .lisan").css({"position":"absolute","top":"32px"})
        $(".ul_san .lisi").css({"position":"absolute","top":"125px"})
        $(".ul_san .lisan ul").show()
        if(lidian2 == true){
            $(".ul_san .ulyiimg").attr({"src":"../bazhongxitongimg/志愿活动管理背景虚线3_03.png"})
            $(".ul_san .lier ul").hide()
            lidian2 = false
        }
        else if(isdian7 == true){
            $(".ul_san .ulyiimg").attr({"src":"../bazhongxitongimg/志愿活动管理背景虚线3_03.png"})
            $(".ul_san .lisi ul").hide()
            isdian7 = false
        }
        isdian6 = true
    }
    else if(isdian6 == true){
        $(".ul_san .ulyiimg").attr({"src":"../bazhongxitongimg/志愿活动管理虚线背景_03.png"})
        $(".ul_san .liyi .ulyiimg").css({"position":"absolute","top":"0px"})
        $(".ul_san .liyi .jiahaoyi").css({"position":"absolute","top":"0px"})
        $(".ul_san .lier .jiahaoer").css({"position":"absolute","top":"34px"})
        $(".ul_san .lisan .jiahaosan").css({"position":"absolute","top":"31px"})
        $(".ul_san .lier").css({"position":"absolute","top":"35px"})
        $(".ul_san .lisan").css({"position":"absolute","top":"63px"})
        $(".ul_san .lisi").css({"position":"absolute","top":"88px"})
        $(".ul_san .lisan ul").hide()
        isdian6 = false
    }

})

$(".ul_san .lisi ul").hide()
var isdian7 = false
$(".ul_san .lisan .jiahaosan").on("click",function() {
    if(isdian7 == false){
        $(".ul_san .ulyiimg").attr({"src":"../bazhongxitongimg/志愿活动管理背景虚线4_03.png"})
        $(".ul_san .liyi .ulyiimg").css({"position":"absolute","top":"-33px"})
        $(".ul_san .liyi .jiahaoyi").css({"position":"absolute","top":"-33px"})
        $(".ul_san .lier .jiahaoer").css({"position":"absolute","top":"39px"})
        $(".ul_san .lisan .jiahaosan").css({"position":"absolute","top":"37px"})
        $(".ul_san .lier").css({"position":"absolute","top":"2px"})
        $(".ul_san .lisan").css({"position":"absolute","top":"32px"})
        $(".ul_san .lisi").css({"position":"absolute","top":"62px"})
        $(".ul_san .lisi ul").show()
        if(lidian2 == true){
            $(".ul_san .ulyiimg").attr({"src":"../bazhongxitongimg/志愿活动管理背景虚线4_03.png"})
            $(".ul_san .lier ul").hide()
            lidian2 = false
        }
        else if(isdian6 == true){
            $(".ul_san .ulyiimg").attr({"src":"../bazhongxitongimg/志愿活动管理背景虚线4_03.png"})
            $(".ul_san .lisan ul").hide()
            isdian6 = false
        }
        isdian7 = true
    }
    else if(isdian7 == true){
        $(".ul_san .ulyiimg").attr({"src":"../bazhongxitongimg/志愿活动管理虚线背景_03.png"})
        $(".ul_san .liyi .ulyiimg").css({"position":"absolute","top":"0px"})
        $(".ul_san .liyi .jiahaoyi").css({"position":"absolute","top":"0px"})
        $(".ul_san .lier .jiahaoer").css({"position":"absolute","top":"34px"})
        $(".ul_san .lisan .jiahaosan").css({"position":"absolute","top":"32px"})
        $(".ul_san .lier").css({"position":"absolute","top":"35px"})
        $(".ul_san .lisan").css({"position":"absolute","top":"63px"})
        $(".ul_san .lisi").css({"position":"absolute","top":"88px"})
        $(".ul_san .lisi ul").hide()
        isdian7 = false
    }

})

$("table").find("tr:even").css("background-color", "#f4f4f4");


