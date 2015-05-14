$(".header ul .liyi .shadow").hide()
$(".header ul .lier .shadow").hide()
$(".header ul .lisi .shadow").hide()
$(".header ul .jifen span").css({"position":"relative","top":"10px"})
$(".header ul .liyi").on("click",function(){
    $(".header ul .liyi .shadow").show()
    $(".header ul .lier .shadow").hide()
    $(".header ul .jifen .shadow").hide()
    $(".header ul .lisi .shadow").hide()
    $(".header ul .jifen span").css({"color":"#f8c8ad","position":"relative","top":"0px"})
    $(".header ul .liyi span").css({"color":"#db2c22","position":"relative","top":"10px"})
    $(".header ul .lier span").css({"position":"relative","top":"0px","color":"#f8c8ad"})
    $(".header ul .lisi span").css({"position":"relative","top":"0px","color":"#f8c8ad"})

})


$(".header ul .lier").on("click",function(){
    $(".header ul .lier .shadow").show()
    $(".header ul .liyi .shadow").hide()
    $(".header ul .jifen .shadow").hide()
    $(".header ul .lisi .shadow").hide()
    $(".header ul .jifen span").css({"color":"#f8c8ad","position":"relative","top":"0px"})
    $(".header ul .lier span").css({"color":"#db2c22","position":"relative","top":"10px"})
    $(".header ul .liyi span").css({"position":"relative","top":"0px","color":"#f8c8ad"})
    $(".header ul .lisi span").css({"position":"relative","top":"0px","color":"#f8c8ad"})
})
$(".header ul .jifen").on("click",function(){
    $(".header ul .jifen .shadow").show()
    $(".header ul .liyi .shadow").hide()
    $(".header ul .lier .shadow").hide()
    $(".header ul .lisi .shadow").hide()
    $(".header ul .lier span").css({"color":"#f8c8ad","position":"relative","top":"0px"})
    $(".header ul .jifen span").css({"color":"#db2c22","position":"relative","top":"10px"})
    $(".header ul .liyi span").css({"position":"relative","top":"0px","color":"#f8c8ad"})
    $(".header ul .lisi span").css({"position":"relative","top":"0px","color":"#f8c8ad"})
})

$(".header ul .lisi").on("click",function(){
    $(".header ul .lisi .shadow").show()
    $(".header ul .liyi .shadow").hide()
    $(".header ul .jifen .shadow").hide()
    $(".header ul .lier .shadow").hide()
    $(".header ul .jifen span").css({"color":"#f8c8ad","position":"relative","top":"0px"})
    $(".header ul .lisi span").css({"color":"#db2c22","position":"relative","top":"10px"})
    $(".header ul .liyi span").css({"position":"relative","top":"0px","color":"#f8c8ad"})
    $(".header ul .lier span").css({"position":"relative","top":"0px","color":"#f8c8ad"})
})

if (navigator.userAgent.indexOf('Firefox') >= 0){
    $(".bazhong .content ul li").css({"marginLeft":"-5px"})
}
else if (navigator.userAgent.indexOf('Chrome') >= 0){
    $(".bazhong .content ul li").css({"marginLeft":"-5px"})
}



