/**
 * Created by WHB on 2016/8/12.
 */
$(function(){


    /*返回上一页面*/
    $(".hd>a").on("touchend",function(){
        window.history.go(-1);
    });
});