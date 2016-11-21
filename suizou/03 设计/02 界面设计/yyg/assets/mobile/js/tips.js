/**
 * Created by WHB on 2016/11/19.
 */
var tipMessage =    '<div id="tipMsg" style="display: none;">'+
                    '<div class="weui_mask_transparent fixed"></div>'+
                    '<div class="weui_toast tip">'+
                    '<p class="weui_toast_content">' +

                    '<span class="errSpan"></span>'+
                    '</p>'+
                    '</div>'+
                    '</div>';
$("body").append(tipMessage);

function tipMsg(message) {
    $("#tipMsg .weui_toast_content .errSpan").append(message);
    $('#tipMsg').show();
    $("#tipMsg .weui_toast").addClass("weui_toastshow");
    setTimeout(function () {
        $("#tipMsg .weui_toast").removeClass("weui_toastshow");
        $('#tipMsg').hide();
        $("#tipMsg .weui_toast_content .errSpan").empty();
    }, 2000);
}