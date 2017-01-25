/**
 * Created by WHB on 2016/8/5.
 */
var errMessage =    '<div id="errMsg" style="display: none;">'+
                        '<div class="weui_mask_transparent fixed"></div>'+
                        '<div class="weui_toast errTip">'+
                            '<p class="weui_toast_content">' +
                            '<img  alt="" id="smile-icon" src= "'+${site.resourcePath!}+'images/smile_icon.png"/><br/>'+
                            '<span class="errSpan"></span>'+
                            '</p>'+
                        '</div>'+
                    '</div>';
$("body").append(errMessage);

function widthAuto(obj){
    obj.css({marginLeft:-obj.outerWidth(true)/2});
}


function showErrMsg(message) {
    var errMsg = $("#errMsg");
    var errSpan = errMsg.find(".errSpan");
    var weui_toast = errMsg.find(".weui_toast");
    errMsg.show();
    errSpan.html(message);
    widthAuto(weui_toast);
    setTimeout(function () {
        errMsg.hide();
        errSpan.empty();
    }, 2000);
}