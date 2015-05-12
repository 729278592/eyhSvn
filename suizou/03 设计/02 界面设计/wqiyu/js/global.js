$(document).ready(function(){
	$(".navList li").hover(
	function(){
		if(!$(this).hasClass("current")) {
		$(this).addClass("hover")
		}
		},
	function(){
		if(!$(this).hasClass("current")) {
		$(this).removeClass("hover")
		}
	});
	$('.j-hover li').hover(function(){
			$(this).addClass('hover');
		}).mouseleave(function(){
			$(this).removeClass('hover');
	});
	$('.navList li:first').css('margin','0');
	$('.newList li:last').css('margin','0');
	$('.packList li:last').css('border','none');
	$('.f-nav li:last').css('background','none');
	$('.designList li:last').css({'margin':'0 0 0 70px'});
	$('.packList li').each(function(index, element) {
        $(this).find('.ico-bg').css({'background-position':'-'+(index*243)+'px'+' 0'});
		$(this).find('.packCon').css({'left':'-'+(index*245)+'px'});
		$(this).hover(function(){
			$(this).find('.ico-bg').css({'background-position':'-'+(index*243)+'px'+' -183px'});
		}).mouseleave(function(){
			$(this).find('.ico-bg').css({'background-position':'-'+(index*243)+'px'+' 0'});
		});
		$(this).find('.packIco').hover(function(){
			$(this).find('.packCon').show();
		},function(){
			$(this).find('.packCon').hide();
		});
    });
	$('.function').find('.fm').each(function(index, element) {
        $(this).find('.f-ico').css({'background-position':'-'+(index*40)+'px'+' 0'})
    });
	$('.caseList li').each(function(index, element) {
        $(this).find('.caseImg').hover(function(){
			$(this).find('.caseHov').stop(true,false).animate({'bottom':'0'});
		},function(){
			$(this).find('.caseHov').stop(true,false).animate({'bottom':'-160px'});
		});
    });
	//经典案例
	$("#nav_uls>div").each(function(k,v){
		function show_case(id, thi, pause) {
			if(pause){return;}
			$(thi).parent().find(".on").removeClass("on");
			$(thi).find(".icon_wm_case").addClass("on");
			var divs=$(thi).closest("div").find(".wm_case_desc");
			divs.css("display", "none")[id].style.display="";
		};
		(function(){
			var lis=$(v).find(".wm_case_item");
			var index=0;
			var pause=false;
			//
			$(v).on("mouseover", function(){
				pause=true;
			}).on("mouseout", function(){
					pause=false;
				}).find(".wm_case_item").hover(function () {
					index=$(this).attr("data-id");
					show_case(index, this);
				});
			//
			var timer=setInterval(function(){
				index=++index>=lis.length? 0: index;
				show_case(index, lis[index], pause);
			}, 3000);
		})();
	});
    $('.scribe li').first().css({'background-position':'46px 0'});
	$('.scribe li').last().css({'background-position':'46px -115px','border':'none'});
});