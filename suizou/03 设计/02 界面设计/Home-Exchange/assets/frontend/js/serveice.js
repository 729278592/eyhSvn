/**
 * Created by eyohu023 on 2015/12/22.
 */
var aif = $(".js-active .item .fa-check");
aif.on("click",function(e){
    e.preventDefault();
    if($(this).not(".active")){
        $(this).removeClass('active');
    }else if($(this).hasClass(".active")){
        $(this).addClass('active');
    }
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
var mb = $(".mask-bg,.mask");
 var mf = $(".mask .fa-remove");
jai.each(function(){
   $(this).on("click",function(e){
//       $(this).attr(src);
//       alert($(this).attr(src))
       e.preventDefault();
       mb.removeClass("hide");

//       var str = '<div class="mask-bg hide"></div>'+
//           '<div class="mask hide">'+
//           '<div class="mask-content">'+
//           '<i class="fa fa-remove"></i>'+
//           '<div class="left">'+
//           '<img src="../../assets/frontend/images/hsList1.jpg" alt="">'+
//           '</div>'+
//           '<p class="mask-p left">水电费水电费三分大师傅水电费水电费三分大师傅水电费水电费三分大师傅水电费水电费三分大师傅</p>'+
//           '</div>'+
//           '</div>';
   })
});

mf.on("click",function(){
    mb.addClass("hide");
});