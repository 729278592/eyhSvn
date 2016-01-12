/**
 * Created by eyohu023 on 2015/12/22.
 */
function clickActive(){
    var aif = $(".js-check .item .fa-check");
    aif.on("click",function(e){
        e.preventDefault();
        if($(this).hasClass("active")){
            $(this).removeClass('active');
        }else{
            $(this).addClass('active');
        }
    });
}
clickActive();

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

function maskShow(){
    var jai = $(".js-active .item img");
    var m = $(".mask");
    var w   = $(".wrapper");
    jai.each(function(){
        $(this).on("click",function(e){
            e.preventDefault();
            var str = '<div class="mask-bg"></div>'+
                      '<div class="mask">'+
                          '<div class="mask-content">'+
                              '<i class="fa fa-remove"></i>'+
                              '<div class="left">'+
                                  '<img src="../../assets/frontend/images/hsList1.jpg" alt="">'+
                              '</div>'+
                              '<div class="mask-p left">'+
                                  '<p class="title">'+
                                      '<span class="name">家具保养</span><span class="num">10元</span>/m²'+
                                  '</p>'+
                                  '<P>'+
                                      '<span class="name">开荒: </span>'+
                                      '<a>（8元/平米）50平米以内按50平米计算.</a>'+
                                  '</P>'+
                                  '<p>'+
                                      '<span class="fw">适用范围: </span>'+
                                      '<a>新装修房屋入住前大清洁，租房入住前大扫除.</a>'+
                                  '</p>'+
                                  '<p>'+
                                      '<span class="bz">服务标准: </span>'+
                                      '<a>地面干净，室内整体光亮无尘，物品整齐归位；厨房清洁无油烟，浴室光洁无水渍.</a>'+
                                  '</p>'+
                              '</div>'+
                          '</div>'+
                      '</div>';
            w.append(str);
        });
        w.delegate(".fa-remove","click",function(){
            $(this).closest(".mask").prev(".mask-bg").remove().end().closest(".mask").remove();
        });
    });
}
maskShow();
