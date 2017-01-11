
;(function($){
	$.extend($.fn,{
		shoping:function(options){
			var self=this,
				$shop=$('.shoopCarBody'),
				// $body=$('.J-shoping-body'),
				$num=$('.num'),
				$shop_div = $(".shop_div"),
				$shopImg = $(".shopImg");

			var S={
				init:function(){
					$(self).data('click',true).on('click',this.addShoping);
				},

				addShoping:function(e){
					e.preventDefault();
					var $target=$(e.target),
						id=$target.attr('id'),
						dis=$target.data('click'),
					    x = $target.offset().left - 30,
						y = $target.offset().top - 30,
						X = $shop.offset().left+$shop.width()/2-$target.width()/2+10,
						Y = $shop.offset().top;
						imgSrc = $(this).closest($shop_div).find($shopImg).attr("src");
					if(dis){
						if ($('#floatOrder').length <= 0) {
							$('body').append('<div id="floatOrder"><img src="'+imgSrc+'" width="50" height="50" /></div>');
						}
						var $obj=$('#floatOrder');
						if(!$obj.is(':animated')){
							$obj.css({'left': x,'top': y}).animate({'left': X,'top': Y-80},500,function() {
								$obj.stop(false, false).animate({'top': Y-20,'opacity':0},500,function(){
									$obj.fadeOut(300,function(){
										$obj.remove();	
										$target.data('click',false).addClass('dis-click');
										//var l=$('.J-shoping-list').length
										var	num=Number($num.text());
										// if(l<5){
										// 	$body.prepend('<div class="J-shoping-list" data-id="'+id+'"><a href="#"title=""><img src="images/pro1.jpg" width="50"height="50"/></a><div class="J-shoping-list-a"><p>褰╂秱鏉垮嵎(闀€閾濋攲鍩烘澘)</p><p><span class="left">TDC51D+AZ</span><span class="right"><em>150.000</em>鍚�</span></p></div><div class="baseBg J-shoping-close"></div></div>');
										// };
										$num.text(num+1);
									});
								});
							});	
						};
					};
				}
			};
			S.init(); 
		}
	});	
})(jQuery);

