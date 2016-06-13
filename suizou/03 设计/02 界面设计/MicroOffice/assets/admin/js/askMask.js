/**
 * Created by WHB on 2016/6/12.
 */

$(function(){
    var str = ' <div class="askMaskBg hide"></div>'+
                '<div class="askMask hide">'+
                    '<div class="askWrapper">'+
                        '<div class="askWrapperHeader">'+
                            '<i class="fa fa-remove"></i>'+
                            '<img src="../../assets/mobile/images/householdIcon.png" class="prote" alt=""/>'+
                            '<p>我是千寻的产品经理su，把您遇到的问题或者想要的功能告诉我吧。</p>'+
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
                                        '<input type="text" class="form-control" name="imgMiss" style="height: 1px;width: 100%;border: 0;background: transparent;padding: 0;-webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0);">'+
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
    // 图片上传demo
    var $list = $('#fileList'),
    // 优化retina, 在retina下这个值是2
        ratio = window.devicePixelRatio || 1,
    // 缩略图大小
        thumbnailWidth = 100 * ratio,
        thumbnailHeight = 100 * ratio,

    // Web Uploader实例
        uploader;
    var BASE_URL = "../../assets/global/plugins/webuploader";

    // 初始化Web Uploader
    uploader = WebUploader.create({

        // 自动上传。
        auto: true,

        // swf文件路径
        swf: BASE_URL + '/js/Uploader.swf',

        // 文件接收服务端。
        server: '',

        // 选择文件的按钮。可选。
        // 内部根据当前运行是创建，可能是input元素，也可能是flash.
        pick: '#filePicker',

        // 只允许选择文件，可选。
        accept: {
            title: 'Images',
            extensions: 'gif,jpg,jpeg,bmp,png',
            mimeTypes: 'image/*'
        }
    });

    // 当有文件添加进来的时候
    uploader.on( 'fileQueued', function( file ) {
        var $li = $('<div id="' + file.id + '" class="file-item thumbnail">' +
                '<img>' +
                '<div class="info">' + file.name + '</div>' +
                '</div>'),
            $img = $li.find('img');

        $list.append( $li );
        // 创建缩略图
        uploader.makeThumb( file, function( error, src ) {
            if ( error ) {
                $img.replaceWith('<span>不能预览</span>');
                return;
            }

            $img.attr( 'src', src );
        }, thumbnailWidth, thumbnailHeight );
    });

    // 文件上传过程中创建进度条实时显示。
    uploader.on( 'uploadProgress', function( file, percentage ) {
        var $li = $( '#'+file.id ),
            $percent = $li.find('.progress span');

        // 避免重复创建
        if ( !$percent.length ) {
            $percent = $('<p class="progress"><span></span></p>')
                .appendTo( $li )
                .find('span');
        }

        $percent.css( 'width', percentage * 100 + '%' );
    });

    // 文件上传成功，给item添加成功class, 用样式标记上传成功。
    uploader.on( 'uploadSuccess', function( file ) {
        $( '#'+file.id ).addClass('upload-state-done');
    });

    // 文件上传失败，现实上传出错。
    uploader.on( 'uploadError', function( file ) {
        var $li = $( '#'+file.id ),
            $error = $li.find('div.error');

        // 避免重复创建
        if ( !$error.length ) {
            $error = $('<div class="error"></div>').appendTo( $li );
        }

        $error.text('上传失败');
    });

    // 完成上传完了，成功或者失败，先删除进度条。
    uploader.on( 'uploadComplete', function( file ) {
        $( '#'+file.id ).find('.progress').remove();
    });
});



$("#admin-content-wrapper").delegate(".askWrapper .fa-remove","click",function(){
    $(this).closest(".askMask").addClass("hide");
    $(this).closest(".askMask").prev(".askMaskBg").addClass("hide");
    $("#admin-content-wrapper").css({"z-index":"2"})
});
$("#admin-wrapper").delegate(".slide-bar .slider-bar-w","click",function(){
    $(".askMask,.askMaskBg").removeClass("hide");
    $("#admin-content-wrapper").css({"z-index":"13"});
    heightAuto();
});


function heightAuto(){
    var d = $(".askWrapper");
    d.each(function(){
        var ht = -$(this).outerHeight(true)/2+"px";
        $(this).get(0).style.marginTop = ht;
    });
}



