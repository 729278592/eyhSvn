$(function(){
	$("body").append('<span class="gotop"></span>');

	$('.navA').each(function(){
		var $this = $(this);
		$this.click(function(){
			if($this.hasClass('current')){
				$this.removeClass('current').siblings('.navMenu2').slideUp();
				$this.parent().siblings().find('.navA').removeClass('current');
				$this.parent().siblings().find('.navMenu2').slideUp();
			}else{
				$this.addClass('current').siblings('.navMenu2').slideDown();
				$this.parent().siblings().find('.navA').removeClass('current');
				$this.parent().siblings().find('.navMenu2').slideUp();
			}
			
		});
	});
});

/***Pub Dialog*/
$.dialogBox = function(o){
	var o    = o == null ? $("div.dialog_box") : $(o),
		p    = $("div.shade_box"),
		oTop = Math.floor(($(window).height()-o.height())/2);
		oTop = oTop<0 ? 0 : oTop;
	
	p.fadeIn(200);
	o.css("top", oTop).fadeIn(200);
	
	$(window).resize(function(){
		oTop = Math.floor(($(window).height()-o.height())/2);
		o.animate({
			"top" : oTop
		}, 200);
	});
	
	if(o.find("#dg_close").length>0) {
		o.find("#dg_close").on("click", function(){
			p.fadeOut(300);
			o.fadeOut(300);
		});
	}

	if(o.find(".dg_close").length>0) {
		o.find(".dg_close").on("click", function(){
			p.fadeOut(300);
			o.fadeOut(300);
		});
	}
}


/***
 * jQuery plugin box()
 * Function : Mobile end-to-Box operation
 * Version  : 0.2
 * Author   : Cymmint
 * Date     : 2015-02-09 14:00
 * Update   : 2015-02-11 16:00
 */
;(function($, window){
    $.fn.box = function(opts) {
        var define  = {
                method    : "height", //调用方法名|可以是自定义方法
                parent    : window, //父标签, 默认:window
                reset     : true, //窗口改变大小后重设置
                load      : true, //页面加载完成后执行
                attrKey   : "paddingTop", //CSS属性
                scale     : [1], //间隙比例 {[1]|[0.3,0.7]} 1:等比例, 如果数组元素值>=1, 则间隙为该元素值
                min       : 20, //最小值
                retention : 0, //保留值
                before    : null, //执行前调用方法
                after     : null //执行后调用方法
            };
 
        var opts = $.extend({}, define, opts);
         
        var v = {
                winH : function() {
                    return $(opts.parent).height();
                },
                winW : function() {
                    return $(opts.parent).width();
                },
                attrVal : function(_this, attr) { //Get Attribute value
                    var attr = attr == null || attr == "" ? "paddingTop" : attr;
                    return parseInt(_this.css(attr));
                },
                high : function(_this, n) { //Get Height/innerHeight/OuterHeight - n[1,2,3,4]
                    var n   = isNaN(n) || parseInt(n) < 1 || parseInt(n) > 4 ? 1 : parseInt(n),
                        val = 0;
                    switch(n) {
                        case 1 : val = _this.height(); break;
                        case 2 : val = _this.innerHeight(); break;
                        case 3 : val = _this.outerHeight(); break;
                        case 4 : val = _this.outerHeight(true); break;
                    }
                    return val;
                },
                type : function(name){ //1:methods in the method call, 2:Execute custom method, 
                    var t = 0;
                    if(typeof name === "string" && methods.hasOwnProperty(name)) {
                        t = 1;
                    } else if(typeof name === "function") {
                        t = 2;
                    }
                    return t;
                }
            };
 
        var methods = {
                reset : function(_this) { //Delete style attribute
                    _this.removeAttr("style");
                },
                height : function(_this) { //Set box height
                    this.reset(_this);
                    _this.css({"height": $(opts.parent).height() - opts.retention});
                },
                minHeight : function(_this) { //Set box min height
                    this.reset(_this);
                    _this.css({"minHeight": $(opts.parent).height() - opts.retention});
                },
                center : function(_this) { //Set box vertical center
                    //this.reset(_this);
					
                    var val  = Math.floor((v.winH() - _this.height() - opts.retention)/2),
                        attr = {};
                    val = val < opts.min ? opts.min : val;
					console.log(val);
                    attr[opts.attrKey] = val;
                    _this.stop(true, true).animate(attr, 300);
                },
                remainHeight : function(_this){ //Set remain Height
                    this.reset(_this);
                    var bro = _this.siblings(),
                        num = 0;
                    for(var i=0; i<bro.length; i++) {
                        num += v.high(bro.eq(i), 2);
                    }
                    _this.css({"minHeight": v.winH() - num - opts.retention});
                },
                spacing : function(_this) { //Set box child node spacing
                    var child = _this.children(),
                        scale = 0,
                        num   = 0;
                    for(var i=0; i<child.length; i++) {
                        this.reset(child.eq(i));
                        num += v.high(child.eq(i));
                    }
                    if(num < v.winH()) {
                        num = v.winH() - num;
                        if($.isArray(opts.scale)) {
                            if(opts.scale.length == 1) {
                                scale = (1/(child.length+1)).toFixed(3)*1;
                                child.css(opts.attrKey, num*scale);
                            } else if(opts.scale.length > 1) {
                                for(var i=0; i<opts.scale.length; i++) {
                                    if(i >= opts.scale.length) {
                                        break;
                                    }
                                    if(!isNaN(opts.scale[i])) {
                                        scale = opts.scale[i] >= 1 ? opts.scale[i] : num*opts.scale[i];
                                        child.eq(i).css(opts.attrKey, scale);
                                    }
                                }
                            }
                        }
                    }
                },
                sameSubHeight : function(_this){ //Set same sub-element height
                    var child = _this.children(),
                        num   = 0;
                    for(var i=0; i<child.length; i++) {
                        this.reset(child.eq(i));
                        if(num < v.high(child.eq(i), 2)) {
                            num = v.high(child.eq(i), 2);
                        }
                    }
                    child.css({"height":num + opts.min * 2}, function(){});
                    child.delay(50).animate({
                        "height":num
                    }, 300);
                }
            };
 
        return this.each(function() {
            var _this = $(this);
 
            if(v.type(opts.before) == 2) {
                opts.before();
            }
 
            if(opts.reset) {
                $(window).on("onorientationchange" in window ? "orientationchange" : "resize", function(e){
					e.stopPropagation();
					console.log(11);
                    //setTimeout(function(){
                        if(v.type(opts.method) == 1) {
                            methods[opts.method](_this);
					console.log("有");
                        } else if(v.type(opts.method) == 2) {
                            opts.method(_this);
                        }
                    //}, 150);
                });
            }
 
            if(opts.load) {
                $(window).on("load", function(){
                    if(v.type(opts.method) == 1) {
                        methods[opts.method](_this);
                    } else if(v.type(opts.method) == 2) {
                        opts.method(_this);
                    }
 
                    if(v.type(opts.after) == 2) {
                        opts.after();
                    }
                });
 
            } else {
                if(v.type(opts.method) == 1) {
                    methods[opts.method](_this);
                } else if(v.type(opts.method) == 2) {
                    opts.method(_this);
                }
 
                if(v.type(opts.after) == 2) {
                    opts.after();
                }
            }
        });
    }
})(jQuery, window);

/***
 * Return top
 */
;(function($) {
    $.fn.scrollToTop = function(options) {
        var defaults = {
            speed: 800,
            show : 600
        };
        var opts     = $.extend({}, defaults, options);

		return this.each(function() {
            var b = $(this);
            $(window).scroll(function() {
                opts.show < $(this).scrollTop() ? b.fadeIn() : b.fadeOut()
            });
            b.click(function(b) {
                b.preventDefault();
                $("body, html").animate({
                    scrollTop: 0
                },
                opts.speed)
            })
        })
    }
})(jQuery);


/*OS100 hint*/
;(function($){
	$.fn.osHint = function(opts){
		return this.each(function(){
			var th  = $(this).find("th"),
				txt = "";

			if(th.length > 0) {
				for(var i=0; i<th.length; i++) {
					txt = $.trim(th.eq(i).text());
					th.eq(i).text(txt);
					if(txt != "") {
						if(txt.indexOf("：") > -1) {
							setTxt(th.eq(i), txt.substring(0,txt.indexOf("：")));
						} else if(txt.indexOf(":") > -1) {
							setTxt(th.eq(i), txt.substring(0,txt.indexOf(":")));
						} else {
							setTxt(th.eq(i), txt);
						}
					}
				}
			}
			
		});
		
		function setTxt(_slef, txt){
			for(var i=0; i<hData.hint.length; i++) {
				if(hData.hint[i].name == txt) {
					_slef.wrapInner("<span class='va_m'></span>");
					_slef.prepend('<img height="15" class="va_m pr_5" title="'+ hData.hint[i].title +'" src="../../images/os100/icon_hint.png" />');
					break;
				}
			}
		}
	}
})(jQuery);


/*Text move*/
$.textGroup = function(o){
	var o = $(o);

	o.on("click", "li", function(){ //选中|不选中
		var _this = $(this);
		if(_this.is(".cur")) {
			_this.removeClass("cur");
		} else {
			_this.addClass("cur");
		}
	});

	o.each(function(i){
		var _this = $(this);
		
		init(_this.find("ul.fl").find("li"), _this.find("ul.fr").find("li")); //初始化值
	
		_this.on("click", ".btn_l_cur", function(){ //向左移动选中
			liMove(_this, "ul.fr", "ul.fl", "li.cur");
		});
	
		_this.on("click", ".btn_r_cur", function(){ //向右移动选中
			liMove(_this, "ul.fl", "ul.fr", "li.cur");
		});
	
		_this.on("click", ".btn_l_all", function(){ //向左移动全部
			liMove(_this, "ul.fr", "ul.fl", "li");
		});
	
		_this.on("click", ".btn_r_all", function(){ //向右移动全部
			liMove(_this, "ul.fl", "ul.fr", "li");
		});
	});
	
	function init(li_l, li_r){
		var txt_l = "",
			txt_r = "";

		if(li_l.length > 0 && li_r.length > 0) {
			for(var i=0; i<li_r.length; i++) {
				txt_r = $.trim(li_r.eq(i).text());
				for(var j=0; j<li_l.length; j++) {
					txt_l = $.trim(li_l.eq(j).text());
					if(txt_r == txt_l) {
						li_l.eq(j).remove();
						break;
					}
				}
			}
		}
	}
	
	function liMove(_this, c1, c2, c3){
		var li_cur = _this.find(c1).find(c3);
		if(li_cur.length > 0) {
			li_cur.removeClass("cur");
			_this.find(c2).append(li_cur);
		}
	}
}


;(function() {
	if (!window.applicationCache) {
		var e = "abbr, article, aside, audio, canvas, datalist, details, dialog, eventsource, figure, footer, header, hgroup, mark, menu, meter, nav, output, progress, section, time, video".split(', ');
		var i= e.length;
		while (i--){
			document.createElement(e[i])
		} 
	}
})();