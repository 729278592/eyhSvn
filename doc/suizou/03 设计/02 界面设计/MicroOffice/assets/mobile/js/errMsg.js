/**
 * Created by WHB on 2016/5/16.
 */

$(function(){
    var html = '<div id="errMsg" style="display: none;">'+
                   '<div class="weui_mask_transparent"></div>'+
                   '<div class="weui_toast">'+
                       '<p class="weui_toast_content">' +
                            '<img src="../../assets/mobile/images/smile_icon.png" alt="" id="smile-icon"/><br/>'+
                            '<span class="errSpan"></span>'+
                       '</p>'+
                   '</div>'+
               '</div>';
    $("#errDailog").append(html);
});

function showMsg(message) {
    $("#errMsg .weui_toast_content .errSpan").append(message);
    $('#errMsg').show();
    $(".weui_toast").addClass("weui_toastshow");
    setTimeout(function () {
        $(".weui_toast").removeClass("weui_toastshow");
        $('#errMsg').hide();
        $(".errSpan").empty();
    }, 5000);
}