/**
 * Created by gaoxin on 2015/5/21.
 */
(function($){

    var defaults = {};

    $.fn.alert = function(options){
        options = $.extend({}, defaults, options);
        var content = '<div id="myModal1" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel2" aria-hidden="true">'
                + '<div class="modal-dialog">'
                + '<div class="modal-content">'
                + '<div class="modal-header">'
                + '<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>'
                + '<h4 class="modal-title">Alert Header</h4>'
                + '</div>'
                + '<div class="modal-body">'
                + '<p>' + 'Body goes here...' + '</p>'
                + '</div>'
                + '<div class="modal-footer">'
                + '<button data-dismiss="modal" class="btn green">确定</button>'
                + '</div></div></div></div>';
        $('body').append(content);
        $('#myModal1').modal();
    }

    $.fn.confirm = function(options){
        options = $.extend({}, defaults, options);
        var content = '<div id="myModal2" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel2" aria-hidden="true">'
            + '<div class="modal-dialog">'
            + '<div class="modal-content">'
            + '<div class="modal-header">'
            + '<button type="button" class="close" data-dismiss="modal" aria-hidden="true"></button>'
            + '<h4 class="modal-title">Alert Header</h4>'
            + '</div>'
            + '<div class="modal-body">'
            + '<p>' + 'Body goes here...' + '</p>'
            + '</div>'
            + '<div class="modal-footer">'
            + '<button data-dismiss="modal" class="btn green">确认</button>'
            + '<button class="btn default" data-dismiss="modal" aria-hidden="true">关闭</button>'
            + '</div></div></div></div>';
        $('body').append(content);
        $('#myModal2').modal();

    }

})(jQuery);


