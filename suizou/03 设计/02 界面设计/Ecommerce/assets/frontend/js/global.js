/*头部滑动*/
(function($) {
    $.fn.hovers = function(options){
        var defaults = {
            _this:$(this),
            ha:$("#hover-active")
        };
        var opts = $.extend({}, defaults, options);
        var Methods = {
            init: function () {
                iWidth = opts.ha.width();
                li = opts._this.find("li");
                active = opts._this.find("li.active");
                opts.ha[0].style.left = active.offset().left -opts._this.offset().left +"px";
                Methods.hover()
            },
            hover:function(){
                li.each(function(i){
                    $(this).hover(
                        function(){
                            move(opts.ha[0],{left : i * iWidth},function(){
                            });
                        },function(){
                            move(opts.ha[0],{left : 0},function(){
                            });
                        }
                    )
                })
            }
        };
        Methods.init()
    };
})(jQuery);
$(function(){
    /*IE支持placeholder属性*/
    var doc = document, inputs = doc.getElementsByTagName('input'), supportPlaceholder = 'placeholder'in doc.createElement('input'), placeholder = function (input) {
        var text = input.getAttribute('placeholder'), defaultValue = input.defaultValue;
        if (defaultValue == '') {
            input.value = text
        }
        input.onfocus = function () {
            if (input.value === text) {
                this.value = ''
            }
        };
        input.onblur = function () {
            if (input.value === '') {
                this.value = text
            }
        }
    };
    if (!supportPlaceholder) {
        for (var i = 0, len = inputs.length; i < len; i++) {
            var input = inputs[i], text = input.getAttribute('placeholder');
            if (((input.type == 'text')||(input.type == 'password')) && text) {
                placeholder(input)
            }
        }
    }
})