/**
 * Created by eyohu023 on 2015/12/23.
 */
/*左部导航切换*/
//function personMenu(){
//    var lta = $(".person-menu li .li_top a");
//    var td = $(".type-div");
//    lta.each(function(i){
//        $(this).on("click",function(){
//            $(this).addClass("active");
//            $(this).closest(".person-menu li").siblings("li").find(lta).removeClass("active");
//            td.eq(i).addClass("active");
//            td.eq(i).siblings(td).removeClass("active")
//        })
//    });
//}
//personMenu();

/*优惠券内容切换*/
function youHuiJuan(){
    var dhl = $(".dc-head .li-active");
    var cl = $(".cc-ul li");
    dhl.on("click",function(){
        $(this).addClass("active");
        $(this).siblings(".li-active").removeClass("active");
    });
    cl.on("click",function(){
        $(this).addClass("active");
        $(this).siblings("li").removeClass("active");
    });
}
youHuiJuan();

///*底部固定在底端*/
//var content = $(".content");
//var footer = $(".foot").height();
//content.css({"paddingBottom":footer+100})
