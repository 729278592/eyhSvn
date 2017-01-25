/**
 * Created by WHB on 2016/7/14.
 */
$(function(){
    /*导航动画*/
    var menuFa = $(".menuList .menuDisplay");
    var menuType = menuFa.data("datatypes");
    var menu = $(".menuNav");
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

    /*全屏图片居中*/
    var ai = $(".autoImg");
    ai.each(function(){
        $(this).get(0).style.width ="1920px";
        var that = $(this);
        function toResize(){
            var veiwidth = $(window).width();
            if(veiwidth>1205){
                that.get(0).style.left = -(parseInt(that.get(0).style.width) - veiwidth)/2 + "px"
            }
        }
        toResize();
        $(window).on("resize",function(){
            toResize()
        });
    });

});