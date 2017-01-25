$(function () {

    // /*全屏图片居中*/
    // var ai = $(".autoImg");
    // ai.each(function(){
    //     $(this).get(0).style.width ="1920px";
    //     var that = $(this);
    //     function toResize(){
    //         var veiwidth = $(window).width();
    //         if(veiwidth>1205){
    //             that.get(0).style.left = -(parseInt(that.get(0).style.width) - veiwidth)/2 + "px"
    //         }
    //     }
    //     toResize();
    //     $(window).on("resize",function(){
    //         toResize()
    //     });
    // });
    //
    //
    // var ai = $(".nav .slider>li>.absolute .title,.nav .slider>li>.absolute .infor>div");
    // ai.each(function(){
    //     $(this).get(0).style.width ="1024px";
    //     var that = $(this);
    //     function toResize(){
    //         var veiwidth = $(window).width();
    //         if(veiwidth>1205){
    //             that.get(0).style.left = -(parseInt(that.get(0).style.width) - veiwidth)/2 + "px"
    //         }
    //     }
    //     toResize();
    //     $(window).on("resize",function(){
    //         toResize()
    //     });
    // });

    /*导航动画*/
    var menuFa = $(".menuList .menuDisplay");
    var menuType = menuFa.attr("datatypes");
    var menu = $(".menu");
    menuFa.on("touchstart",function () {
        if(!menuType){
            menu.animate({"opacity":1},200);
            menu.show();
            setTimeout(function () {
                menuType = true
            },200)
        }else{
            menu.animate({"opacity":0},200);
            menu.hide();
            setTimeout(function () {
                menuType = false
            },200)
        }
    });


    // /*搜索类型切换*/
    // var searchType = $(".search-type");
    // var typeMenu =  $(".type-menu");
    // var type = $(".type");
    // var down = $(".fa-angle-down");
    // var typeName = $(".type-name");
    // searchType.on("click",function () {
    //     $(this).closest(type).find(typeMenu);
    //     if(typeMenu.hasClass("hide")){
    //         typeMenu.removeClass("hide");
    //         down.removeClass("fa-angle-down").addClass("fa-angle-up");
    //     }else {
    //         typeMenu.addClass("hide");
    //         down.removeClass("fa-angle-up").addClass("fa-angle-down");
    //     }
    // });
    //
    // typeMenu.delegate("li","click",function () {
    //     typeName.text($(this).text());
    //     typeMenu.addClass("hide");
    //     down.removeClass("fa-angle-up").addClass("fa-angle-down");
    // })


    // /*分页居中*/
    // var paging = $(".paging");
    // var pageNum = $(".page-num");
    // var btnJump = $(".btn-jump");
    // if(paging.get(0)){
    //     var ml = (paging.outerWidth()+pageNum.outerWidth()+btnJump.outerWidth())/2;
    //     paging.get(0).style.marginLeft = -ml+"px";
    // }

});

