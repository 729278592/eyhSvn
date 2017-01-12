
;(function($){
	$.extend($.fn,{
		shoping:function(options){
			var self=this,
				$shop=$('.shoopCarBody'),
				$num=$('.num'),
				$shop_div = $(".shop_div"),
				$shopImg = $(".shopImg");

			var methond={
				init:function(){
					$(self).data('click',true).on('click',this.addShoping);
				},

				addShoping:function(e){
					e.preventDefault();
					var $target=$(e.target),
						id = $target.attr('id'),
						dis = $target.data('click'),
					    x = $target.offset().left - 30,
						y = $target.offset().top - 30,
						X = $shop.offset().left+$shop.width()/2-$target.width()/2+10,
						Y = $shop.offset().top;
						imgSrc = $(this).closest($shop_div).find($shopImg).attr("src");
					if(dis){
						if ($('#floatOrder').length <= 0) {
							$('body').append('<div id="floatOrder"><img src = "'+imgSrc+'" width="50" height="50" /></div>');
						}
						var $obj = $('#floatOrder');
						if(!$obj.is(':animated')){
							$obj.css({'left': x,'top': y}).animate({'left': X,'top': Y-80},500,function() {
								$obj.stop(false, false).animate({'top': Y-20,'opacity':0},500,function(){
									$obj.fadeOut(300,function(){
										$obj.remove();	
										$target.data('click',false).addClass('dis-click');
										var	num = Number($num.text());
										$num.text(num+1);
									});
								});
							});	
						}
					}
				}
			};
            methond.init();
		}
	});	
})(jQuery);

