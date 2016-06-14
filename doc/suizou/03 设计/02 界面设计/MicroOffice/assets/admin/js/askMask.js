/**
 * Created by WHB on 2016/6/12.
 */
 var str = ' <div class="askMaskBg hide"></div>'+
                '<div class="askMask hide">'+
                    '<div class="askWrapper">'+
                        '<div class="askWrapperHeader">'+
                            '<i class="fa fa-remove"></i>'+
                            '<img src="../../assets/mobile/images/householdIcon.png" class="prote" alt=""/>'+
                            '<p>我是易优弧的产品经理su，把您遇到的问题或者想要的功能告诉我吧。</p>'+
                        '</div>'+
                        '<div class="askWrapperCon">'+
                            '<form action="#">'+
                                '<div class="form-group clearfix">'+
                                    '<div class="col-md-12 col-xs-12 col-sm-12">'+
                                        '<input name="url" type="text" class="form-control bg" placeholder="请输入您的姓名"/>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="form-group clearfix">'+
                                    '<div class="col-md-12 col-xs-12 col-sm-12">'+
                                        '<input name="url" type="text" class="form-control bg" placeholder="请输入您的邮件"/>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="form-group clearfix">'+
                                    '<div class="col-md-12 col-xs-12 col-sm-12">'+
                                        '<textarea cols="10" rows="5" style="resize: none;" class="form-control bg" placeholder="用户定义的代码区域"></textarea>'+
                                    '</div>'+
                                '</div>'+
                                '<div class="form-group">'+
                                    '<div class="col-md-12 col-xs-12 col-sm-12">'+
                                        '<div class="uploader-demo">'+
                                            '<div id="fileList" class="uploader-list "></div>'+
                                            '<div id="filePicker">上传图片</div>'+
                                        '</div>'+
                                        '<span class="help-block">图片支持jpg、png、gif格式 ; 图片大小不超过.....</span>'+
                                    '</div>'+
                                '</div>'+
                                ' <div class="form-group">'+
                                    '<div class="col-sm-6 col-xs-6 col-md-6 col-sm-offset-3 col-xs-offset-3 col-md-offset-3">'+
                                        '<button class="btn btnSure left">提交</button>'+
                                    '</div>'+
                                '</div>'+
                            '</form>'+
                        '</div>'+
                    '</div>'+
                '</div>';
    $("#admin-content-wrapper").append(str);

$("#admin-content-wrapper").delegate(".askWrapper .fa-remove","click",function(){
    $(this).closest(".askMask").addClass("hide");
    $(this).closest(".askMask").prev(".askMaskBg").addClass("hide");
    $("#admin-content-wrapper").css({"z-index":"2"});
    $(".askWrapper").get(0).style.marginTop = 0;
});
$("#admin-wrapper").delegate(".slide-bar .slider-bar-w","click",function(){
    $(".askMask,.askMaskBg").removeClass("hide");
    $("#admin-content-wrapper").css({"z-index":"13"});
    heightAuto();
});
function heightAuto(){
    var d = $(".askWrapper");
    var ht = -d.outerHeight(true)/2+"px";
    d.get(0).style.marginTop = ht;
}



