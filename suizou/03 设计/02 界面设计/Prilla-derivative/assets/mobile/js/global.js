/**
 * Created by WHB on 2015/10/24.
 */



$(function(){
    var r = $(".return");
    r.on("click",function(){
       window.history.go(-1)
    });
})
