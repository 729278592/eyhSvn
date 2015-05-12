$(function(){
	//成品展示
	$.showCut();
});

/*成品展示*/
$.showCut = function(){
	var l = $("#LeftArr"),
		r = $("#RightArr"),
		o = $("#ISL_Cont_1"),
		W = 196;

	l.on("click", function(){
		o.append(o.find("div").eq(0).clone());
		o.stop(true, false).animate({
			"marginLeft" : 0
		}, 300, function(){
			o.find("div").eq(0).remove();
			o.css("marginLeft", W);
		});
	});

	r.on("click", function(){
		o.prepend(o.find("div").eq(o.find("div").length-1).clone());
		o.css("marginLeft", 0);
		o.find("div").eq(o.find("div").length-1).remove();
		o.stop(true, false).animate({
			"marginLeft" : W
		}, 300);
	});
}