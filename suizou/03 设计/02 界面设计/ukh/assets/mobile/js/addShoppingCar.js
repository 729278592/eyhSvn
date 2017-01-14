
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

					var id = _this.attr('id'),
					    x = _this.offset().left - 30,
						y = _this.offset().top - 30,
						X = $shop.offset().left+$shop.width()/2-_this.width()/2+10,
						Y = $shop.offset().top;
						imgSrc = _this.closest($shop_div).find($shopImg).attr("src");
                    if ($('#floatOrder').length <= 0) {
                        $('body').append('<div id="floatOrder"><img src = "'+imgSrc+'" width="50" height="50" /></div>');
                    }
                    var $obj = $('#floatOrder');
                    if(!$obj.is(':animated')){
                        $obj.css({'left': x,'top': y}).animate({'left': X,'top': Y-80},500,function() {
                            $obj.stop(false, false).animate({'top': Y-20,'opacity':0},500,function(){
                                $obj.fadeOut(300,function(){
                                    $obj.remove();

                                    //提交商品信息
                                    $.post(opts.interface,{id:opts.shoppingId},function(data){

                                    });

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

