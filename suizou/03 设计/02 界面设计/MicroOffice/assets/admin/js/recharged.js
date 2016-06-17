/**
 * Created by WHB on 2016/6/16.
 */
/*btnRecharge*/
$(".btnRecharge").on("click",function(){
    if( $(this).closest(".form-group").next(".mask").get(0)){
        $(this).closest(".form-group").next(".mask").removeClass("hide");
    }else{
        $(this).closest(".form-group").next(".dailog").wrap('<div class="mask maskRchrege"></div>');

    }
    $(".dailog.rechargeMoney").removeClass("hide");
    heightAuto();

});

$(".dailog .opreateBtn .btnCancel").on("click",function(){
    $(this).closest(".dailog.rechargeMoney").addClass("hide");
    $(this).closest(".mask").addClass("hide");
});

/*单窗居中*/
function heightAuto(){
    var d = $(".dailog");
    d.each(function(){
        var ht = -$(this).height()/2+"px";
        $(this).get(0).style.marginTop = ht;
    });
}