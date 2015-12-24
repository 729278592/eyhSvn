/**
 * Created by eyohu023 on 2015/12/24.
 */

/*左边导航*/
function leftMenu(){
    var tli = $(".train-menu li");
    tli.on("click",function(){
        $(this).addClass("active");
        $(this).siblings(tli).removeClass("active");
    });
}
leftMenu();

/*右边导航*/
function rightMenu(){
    var tl = $(".tt-ul li");
    tl.each(function(i){
        $(this).on("click",function(){
            $(this).addClass("active");
            $(this).siblings(tl).removeClass("active");
        })
    });
}
rightMenu()

