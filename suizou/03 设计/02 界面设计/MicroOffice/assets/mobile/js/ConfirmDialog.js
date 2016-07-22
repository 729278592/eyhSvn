/**
 * Created by WHB on 2016/5/19.
 */


$(function(){
    var html = '<div class="weui_dialog_confirm" id="dialog1" style="display: none;">'+
               '<div class="weui_mask bg"></div>'+
               '<div class="weui_dialog">'+
                   '<div class="weui_dialog_hd"><strong class="weui_dialog_title">确认提现?</strong></div>'+
                   '<div class="weui_dialog_bd">' +
                        '<div>持卡人： <span class="type">张三</span></div>'+
                        '<div>银行卡： <span class="type">交通银行</span></div>'+
                        '<div>金　额： <span class="type">￥500</span></div>'+
                        '<div>卡　号： <span class="type">555555555555555555566</span></div>'+
                   '</div>'+
                   '<div class="weui_dialog_ft">'+
                       '<a href="javascript:;" class="weui_btn_dialog default btnCancle">取消</a>'+
                       '<a href="javascript:;" class="weui_btn_dialog primary btnSure">确定</a>'+
                  '</div>'+
               '</div>'+
           '</div>';
    $(".container").append(html);
});

function showConfirmDialog() {
    $('#dialog1').show();
    $(".weui_toast").addClass("weui_toastshow");
}

