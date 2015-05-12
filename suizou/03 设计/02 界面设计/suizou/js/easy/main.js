$(function() {
//
	var arrPanel = new Array(),
		panel    = $("section.panel"),
		wH       = $(window).height();

		wH       = wH > 650 ? wH : 650;

	for(var i=0; i<panel.length; i++) {
		arrPanel[i] = "#"+panel.eq(i).attr("data-section-name");
	}
	$("div.focus").height(wH-$("div.headOut").height());

	$.scrollInit = function(){
		$.scrollify({
			section : ".panel",
			sectionName : "section-name",
			easing: "easeOutExpo",
			scrollSpeed: 700,
			offset : 0,
			scrollbars: true,//
			before:function() {
				var T = setTimeout(function(){
					var dot = $("div.panelDot"),
						url = window.location.href;
					for(var i=0; i<arrPanel.length; i++) {
						if(url.indexOf(arrPanel[i])>=0) {
							dot.find("span").removeClass("on").eq(i).addClass("on");

							var top = 0,
								inr;
							if(i == 0) {
								$("div.focus").height(wH-$("div.headOut").height());
							} else if(i == 1) {
								inr = $("section").eq(i).find("div.inner");
								top = Math.ceil((wH - inr.height()) / 2);
								top = top<0 ? 0 : top;
								inr.css("paddingTop", top);
							} else if(i == 2) {
								inr = $("section").eq(i).find("div.inner");
								top = Math.ceil((wH - inr.eq(0).height() - inr.eq(1).height()) / 4);
								top = top<0 ? 0 : top;
								inr.eq(0).css("paddingTop", top);
								inr.eq(0).css("paddingBottom", top);
								inr.eq(1).css("paddingTop", top);
								inr.eq(1).css("paddingBottom", top);
							} else if(i == 3) {
								inr = $("section").eq(i).find("div.inner");
								top = Math.ceil((wH - inr.height()) / 2);
								top = top<0 ? 0 : top;
								inr.css("paddingTop", top);
							} else if(i == 4) {
								inr = $("section").eq(i).find("div.inner");
								top = Math.ceil((wH - 270 - 74 - 297) / 2);
								top = top<0 ? 0 : top;
								inr.find("div.cont_box").css("marginTop", top);
								inr.find("div.cont_box").css("marginBottom", top);
							}
							
							break;
						}
					}
					clearTimeout(T);
				}, 50);
			},
			after:function() {
				var url = window.location.href;
				if(url.indexOf("#product")>=0) {
					var o = $("ul.pro_dot li");
					for(var i=0; i<o.length; i++) {
						if(typeof(o.eq(i).attr("style")) != "undefined") {
							break;
						}
					}
					i = i+1 == o.length ? 0 : i+1;
					
					o.find("a").eq(i).trigger("mouseenter");
				}
				if(url.indexOf("#case")>=0) {
					var o = $("ul.pl_list"),
						b = $("#btn_pj").find("span");
					
					if(pj_n-1000 == -o.width()) {
						b.eq(1).trigger("click");
					} else {
						b.eq(0).trigger("click");
					}
				}
				if(url.indexOf("#show")>=0) {
					$("div.btn_s_l").trigger("click");
				}
			}
		});
	}
	$(window).resize(function(){
		wH = $(window).height();
		wH = wH > 650 ? wH : 650;
		$("section.panel").height(wH);
		$.scrollInit();
	});
	$.scrollInit();

	//Panel dot
	$.panelDot(arrPanel);

	//Product cut
	$("ul.pro_dot").on("mouseenter", "a", function(){ $.proCut(this)});
	$("ul.pro_dot").find("li.l1").css("backgroundImage", "url(images/easy/idx/pro_1_1.png)");
	
	//评价Cut
	$.pjCut("ul.pl_list");
	
	//成品展示
	$.showCut();
});
$(window).load(function(){
	$.focusCut("ul.fI", "ul.fT"); //头部焦点图切换
});


/*Panel dot*/
$.panelDot = function(arrPanel){
	var h   = "<div class='panelDot'>",
		top = 0,
		o;

	for(var i=0; i<arrPanel.length; i++) {
		if(window.location.href.indexOf(arrPanel[i])>=0) {
			h += "<span class='on'></span>";
		} else {
			h += "<span></span>";		
		}
	}
	h += "</div>";
	$("body").append(h);

	o = $("div.panelDot");
	o.height(arrPanel.length*o.find("span").eq(0).outerHeight(true));
	top = Math.floor(($(window).height()-o.height()-20)/2);
	top = top < 0 ? 0 : top; 
	o.css("top", top);

	$(window).resize(function(){
		top = Math.floor(($(window).height()-o.height()-20)/2);
		top = top < 0 ? 0 : top; 
		o.css("top", top);		
	});
	
	o.on("mouseenter", "span", function(){
		var c = $(this);
		c.addClass("on").siblings().removeClass("on");
		$.scrollify("move", arrPanel[c.index()]);
	});
}


/*成品展示*/
$.showCut = function(){
	var l = $("div.btn_s_l"),
		r = $("div.btn_s_r"),
		o = $("div.show_cut ul"),
		W = 314;

	l.on("click", function(){
		o.append(o.find("li").eq(0).clone());
		o.stop(true, false).animate({
			"marginLeft" : 0
		}, 300, function(){
			o.find("li").eq(0).remove();
			o.css("marginLeft", W);
		});
	});

	r.on("click", function(){
		o.prepend(o.find("li").eq(o.find("li").length-1).clone());
		o.css("marginLeft", 0);
		o.find("li").eq(o.find("li").length-1).remove();
		o.stop(true, false).animate({
			"marginLeft" : W
		}, 300);
	});
}


/*评价Cut*/
var pj_n = 0;
$.pjCut = function(o) {
	var o = $(o),
		b = $("#btn_pj");

	o.width(o.find("li").length * 1000);
	b.find("span").eq(0).on("click", function(){
		if(pj_n-1000 == -o.width()) {
			return false;
		}

		pj_n -= 1000;
		o.stop(true, false).animate({
			"marginLeft" : pj_n
		}, 300);
	});
	b.find("span").eq(1).on("click", function(){
		if(pj_n == 0) {
			return false;
		}

		pj_n += 1000;
		o.stop(true, false).animate({
			"marginLeft" : pj_n
		}, 300);
	});
}


/*Product cut*/
$.proCut = function(o){
	var o  = $(o),
		p  = $("ul.pro_list"),
		q  = $("div.pro_arr"),
		n  = o.parent().index(),
		aP = new Array(185,475,765);
	
	o.parent().css("backgroundImage", "url(images/easy/idx/pro_1_"+ (n+1) +".png)");
	o.parent().siblings().removeAttr("style");
	p.stop(true, false).animate({
		"marginLeft" : -1000*n
	}, 300);
	q.stop(true, false).animate({
		"left" : aP[n]
	}, 300);
}


/** 头部焦点图切换 */
$.focusCut = function(o, p){
	//常量
	var f_cur    = 0,
		f_newcur = 1,
		f_clear  = 0,
		f_T      = 3500,
		iDiv     = $(o).find("li"),
		tDiv     = $(p).find("li"),
		f_num    = iDiv.size();

	dotPs();
	$(window).resize(function(){
		dotPs();
	});

	iDiv.find("img").removeAttr("title style alt");
	f_clear = window.setInterval(autoFocus, f_T);

	iDiv.hover(
		function(){
			window.clearInterval(f_clear);
		},
		function(){
			f_clear = window.setInterval(autoFocus, f_T);
		}
	);
	
	tDiv.find("a").on("mouseenter",function(){
		window.clearInterval(f_clear);
		
		if($(this).parent().is(".on")) {
			return false;
		}
		f_cur    = iDiv.parent().find(".on").index();
		f_newcur = $(this).parent().index();
		
		cut(f_cur, f_newcur);
	});
	tDiv.find("a").on("mouseleave",function(){
		window.clearInterval(f_clear);
		f_clear = window.setInterval(autoFocus, f_T);
	});

	function autoFocus(){
		f_cur    = iDiv.parent().find(".on").index();
		f_newcur = f_cur + 1;
		f_newcur = f_newcur >= f_num ? 0 : f_newcur;

		cut(f_cur, f_newcur);
	}

	function cut(c, n){
		tDiv.removeClass("on");
		tDiv.eq(n).addClass("on");
		
		iDiv.eq(c).stop(true, false).fadeOut(300);
		iDiv.eq(n).stop(true, true).fadeIn(300);
		iDiv.removeClass("on");
		iDiv.eq(n).addClass("on");
	}

	function dotPs(){
		var w = iDiv.eq(0).width(),
			t = tDiv.eq(0).outerWidth(true);
			w = w<1000 ? 1000 : w;
		$(p).width(tDiv.eq(0).outerWidth(true)*f_num);
		$(p).css({"left":Math.floor((w-t*f_num)/2)});
	}
    if (navigator.userAgent.indexOf('Firefox') >= 0){

        $(".c_liu  .cll_span").css({"top":"-15px"})
        $(".c_liu  .sanjiao").css({"top":"-25px"})
        $(".c_login").css({"marginTop":"28px"})
    }
    else if (navigator.userAgent.indexOf('Chrome') >= 0){

        $(".c_liu  .cll_span").css({"top":"-18px"})
        $(".c_liu  .sanjiao").css({"top":"-34px"})



    }
}



