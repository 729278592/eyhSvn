
;(function($){
	$.extend($.fn,{
		shoping:function(options){
			var self=this,
				$shop=$('.shoopCarBody'),
				$num=$('.num'),
				$shop_div = $(".shop_div"),
				$shopImg = $(".shopImg");
            var defaults = {  //默认数据

            };

            var opts = $.extend({}, defaults, options);


			var methond={
				init:function(_this){
                    this.addShoping(_this);
				},

				addShoping:function(_this){

					var x = _this.offset().left,
						y = _this.offset().top ,
						X = $shop.offset().left+$shop.width()/2-_this.width()/2+10,
						Y = $shop.offset().top;
						imgSrc = _this.closest($shop_div).find($shopImg).attr("src");
                    if ($('#floatOrder').length <= 0) {
                        $('body').append('<div id="floatOrder"></div>');
                    }
                    var $obj = $('#floatOrder');
                    if(!$obj.is(':animated')){
                        $obj.css({'left': x,'top': y}).animate({'left': X+4,'top': Y+4},500,function() {
                            $obj.stop(false, false).animate({'top': Y+4,'opacity':0},500,function(){
                                $obj.fadeOut(300,function(){
                                    $obj.remove();

                                    opts.interFun();

                                    var	num = Number($num.text());//数量增加
                                    $num.text(num+1);
                                });
                            });
                        });
                    }
				}
			};
            methond.init($(this));
		}
	});	
})(jQuery);

