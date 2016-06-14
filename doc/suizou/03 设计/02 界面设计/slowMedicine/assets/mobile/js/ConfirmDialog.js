/**
 * Created by WHB on 2016/5/19.
 */


$(function(){
    var html = '<div class="weui_dialog_confirm" id="dialog1" style="display: none;">'+
               '<div class="weui_mask"></div>'+
               '<div class="weui_dialog">'+
                   '<div class="weui_dialog_hd"><strong class="weui_dialog_title"></strong></div>'+
                   '<div class="weui_dialog_bd"></div>'+
                   '<div class="weui_dialog_ft">'+
                       '<a href="javascript:;" class="weui_btn_dialog default btnCancle">取消</a>'+
                       '<a href="javascript:;" class="weui_btn_dialog primary btnSure">确定</a>'+
                  '</div>'+
               '</div>'+
           '</div>';
    $(".container").append(html);
});

function showConfirmDialog(message) {
    $(".weui_dialog_hd .weui_dialog_title").append(message.title);
    $(".weui_dialog_bd").append(message.content);
    $('#dialog1').show();
    $(".weui_toast").addClass("weui_toastshow");
}

