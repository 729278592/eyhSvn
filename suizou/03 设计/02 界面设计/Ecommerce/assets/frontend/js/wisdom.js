/**
 * Created by eyohu023 on 2016/1/7.
 */
var rul = $(".type-menu li");
var rl = $(".type-div");
rul.each(function(i){
    $(this).on("click",function(){
        $(this).addClass("active");
        $(this).siblings().removeClass("active");
        rl.eq(i).addClass("active");
        rl.eq(i).siblings(rl).removeClass("active");
    })
});
function heightAuto(){
    var d = $(".dailog");
    d.each(function(){
        var ht = -$(this).get(0).offsetHeight/2+"px";
        $(this).get(0).style.marginTop = ht;
    });
}
heightAuto();
var mbm = $(".mask,.mask-bg");
var tul = $(".td-ul li.item");
var by = $(".btn-yue");
var d = $(".dailog");
tul.each(function(i){
    $(this).find(by).on("click",function(){
        mbm.removeClass("hide");
        d.eq(i).removeClass("hide");
        heightAuto();
    })

});
$(".btn-sleep").on("click",function(){
    mbm.removeClass("hide");
    $(".dailog.sleep").removeClass("hide");
    heightAuto();
});
$(".btn-week").on("click",function(){
    mbm.removeClass("hide");
    $(".dailog.week").removeClass("hide");
    heightAuto();
});
$(".btn-ye").on("click",function(){
    mbm.removeClass("hide");
    $(".dailog.ye").removeClass("hide");
    heightAuto();
});
$(".btn-lic").on("click",function(){
    mbm.removeClass("hide");
    $(".dailog.lic").removeClass("hide");
    heightAuto();
});

$(".btn-dangerous").on("click",function(){
    mbm.removeClass("hide");
    $(".dailog.dangerous").removeClass("hide");
    heightAuto();
});
var dg = $(".div-group");
var fcr = $(".fa-caret-down");
var dtn = $(".div-group>.type-name");
var lu = $(".light-ul");
dg.each(function(){
    var that = $(this);
    $(this).find(dtn).on("click",function(){
        if(that.find(lu).css('display') == "none"){
            that.find(lu).slideDown(200,function(){
                heightAuto();
            });
            that.find(fcr).removeClass("fa-caret-right").addClass("fa-caret-down");
        }
        else{
            that.find(lu).slideUp(200,function(){
                heightAuto();
            });
            that.find(fcr).removeClass("fa-caret-down").addClass("fa-caret-right");
        }
    })
});

var bc = $(".btn-cancle");
bc.on("click",function(){
    mbm.addClass("hide");
    $(this).closest(".dailog").addClass("hide");
});