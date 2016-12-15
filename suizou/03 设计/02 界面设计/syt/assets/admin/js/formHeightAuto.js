/**
 * Created by WHB on 2016/4/8.
 */

/*表单垂直居中*/
function heightAuto(){
    var d = $(".logWrap,.regWrap");
    d.each(function(){
        var ht = -$(this).height()/2+"px";
        $(this).get(0).style.marginTop = ht;
    });
}


$(function(){
    $(".form-group input.inputText").on("focus",function(){
        $(this).closest(".form-group").addClass("bocea");
    });
    $(".form-group input.inputText").on("blur",function(){
        $(this).closest(".form-group").removeClass("bocea");
    });
    heightAuto();
});