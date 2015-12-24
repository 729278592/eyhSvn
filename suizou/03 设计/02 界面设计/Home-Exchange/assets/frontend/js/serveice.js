/**
 * Created by eyohu023 on 2015/12/22.
 */
var aif = $(".js-active .item .fa-check");
aif.on("click",function(e){
    $(this).addClass('active');
    e.preventDefault()
});
var rul = $(".se-ul li");
var rl = $(".se-div");
rul.each(function(i){
    $(this).on("click",function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        rl.eq(i).addClass("active");
        rl.eq(i).siblings(rl).removeClass("active");
    })
});

var jai = $(".js-active .item img");