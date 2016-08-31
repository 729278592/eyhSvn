var homeservice = {
	toggleTabs: function() {
		/*切换*/
		$(".toggle-tabs").on("click", ".tt-item", function() {
			var target = $(this).data("toggle"),
				index = $(this).data("index");
			$(this).parents(".toggle-tabs").find(".tt-item").removeClass("active");
			$(this).addClass("active");
			if(target) {
				var $to = $(target).find(".item").eq(index),
					cls = $(target).data('class');

				if($to.length < 1) return;

				if($(target).data('class')) {
					$to.addClass(cls).siblings(".item").removeClass(cls);
				} else {
					$to.removeClass("hidden").show().siblings(".item").hide();
				}
			}
		});
	},

	fiveservice: function() {
		/*5大项目 产品内容切换*/
		$(".tabs-block").on("click", ".btn-hollow", function() {
			var $p = $(this).parents(".secon-menu");
			if($p.length > 0 && $p.attr("data-more") === "true") {
				$(this).toggleClass("selected");
			} else {
				$(this).parents(".tab-pane,.secon-menu").find(".btn-hollow").removeClass("selected");
				$(this).addClass("selected");
			}

			if($(this).parent().hasClass("tab-pane")) {
				var id = $(this).data("second");
				$(".secon-menu,.tab-attached,.minispan").removeClass("selected");
				$(id).addClass("selected").siblings(".secon-menu").removeClass("selected");
			}
		});
	},

	and_sub: function() {
		$(".add-sub>input").on("blur", function() {
			var n = $(this).val(),
				z = /^[0-9]*$/;
			if(!z.test(n)) $(this).val(1);
		});

		$(".add-sub").on("click", ".icon-and,.icon-sub", function() {

			var $o = $(this).parents(".add-sub").find("input"),
				n = $.trim($o.val());
			if(n == "" || n == undefined) n = 0;

			if($(this).hasClass("icon-and")) {
				$o.val((parseInt(n) + 1));
			} else if($(this).hasClass("icon-sub")) {
				if(n > 1) $o.val(parseInt(n) - 1);
			}
		});
	},

	srcoll: function() {
		$(window).scroll(function() {
			var o = $(this).scrollTop();
			var sH = $(window).height();
			var c = o + sH;

			if($("#index_SERVICE").length > 0) {
				var so = $("#index_SERVICE").offset().top;
				if((so - c) < 0) {
					$("#index_SERVICE").find(".servicea").addClass("active");
				}
			}
		});
	},

	address: function() {

		$(".had-address").on("click", ".edit", function(e) {
			$(this).parents(".had-address").addClass("active");
			e.stopPropagation();
		}).on("click", function(e) {
			e.stopPropagation();
		});

		$(document).on("click", ":not(.had-address)", function() {
			$(".had-address").removeClass("active");
		});
	},

	money: function() {
		$(".money").on("click", ".btn,input", function() {

			if($(this)[0].tagName == "INPUT") {
				$(this).parent().siblings().removeClass("selected");
			} else {
				$(this).addClass("selected").siblings().removeClass("selected");
			}
		});
	},
	tabsFixed: function() {

		$(".tab-panel").each(function(i, o) {
			$(o).attr('data-srolltop', $(o).offset().top);
		});

		$(window).scroll(function() {
			var top = $("body").scrollTop() || $(document).scrollTop() || $(window).scrollTop();
			var target = $(".tab-panel").data("srolltop");

			if(top > (target - 77)) {
				$(".tab-panel").addClass("fixed");
			} else {
				$(".tab-panel").removeClass("fixed");
			}

			if(top > 300) {
				$(".go-top").show();
			} else {
				$(".go-top").hide();
			}

		});
	},

	other: function() {
		$("#link_menus").on("click", function() { //header 二级菜单
			$("#menus").toggleClass("selected");
		});

		$(".tab-content").on("click", ".btn[data-active]", function(e) {
			$(this).parents(".panel").removeClass("active-invoice active-mark").addClass($(this).data("active"));
			e.stopPropagation();
		});

		$(".ticket-month").on("click", ".btn", function(e) {
			$(this).parents("li").removeClass("active");
			e.stopPropagation();
		}).on("click", "li:not(.disabled) .status", function(e) {
			$(this).parents("li").toggleClass("active");
			e.stopPropagation();
		});

		$(".invoice-block,.mark-block,.ticket-month").click(function(e) {
			//阻止冒泡儿
			e.stopPropagation();
		});

		$("body").on("click", function() {
			$(".tab-content .panel").removeClass("active-invoice active-mark");
			$(".ticket-month").find("li").removeClass('active');
		});
	},

	init: function() {
		this.toggleTabs();
		this.fiveservice();
		this.srcoll();
		this.and_sub();
		this.address();
		this.money();
		this.tabsFixed();
		this.other();
	}
}

/*
  弹窗
 * */

var modals = {
	sh: 0,

	init: function() {
		var self = this;
		var $close = $("[data-mymodal=close]"),
			$idclose = $("[mymodal-close]"),
			$open = $("[mymodal-open]");

		self.close(".mymodal");
		self.sh = $(window).height();
		$(".mymoda-dialog").height(self.sh);

		$close.one("click", function() {
			self.close($(this).parents(".mymodal"));
		});

		$idclose.one("click", function() {
			self.close($(this).attr("mymodal-close"));
		});

		$open.one("click", function() {
			self.open($(this).attr("mymodal-open"));
		});
	},

	open: function(tart) {
		var self = this,
			event = window.event;
		self.init();

		var id = tart === "underfine" ? ".mymodal" : tart;
		$('body').append('<div class="mymodal-shadow"></div>');
		$(id).show();

		$(id).each(function(i, o) {
			var $t = $(o).find(".mymoda-content"),
				h = $t.outerHeight();
			if(h < self.sh) $t.css({
				"top": ((self.sh - h) / 2) + "px"
			});
		});
		$("body").addClass("ovh");
		event.stopPropagation();
	},

	close: function(tart) {
		var id = tart === "underfine" ? ".mymodal" : tart;
		$(id).hide();

		$("body").find(".mymodal-shadow").remove();
		$("body").removeClass("ovh");
	}
}

$(document).ready(function() {

	modals.init();
	homeservice.init();
	$.ww.dropdown().inputbox().markStar(); //下拉、单复选、评价打星 

	$(".picker:not(.picker-date)").datetimepicker({ //年月日 时分
		format: 'yyyy-mm-dd hh:ii',
		minView: 0,
		language: 'zh-CN',
		autoclose: true
	});

	$(".picker.picker-date").datetimepicker({ //年月日
		format: 'yyyy-mm-dd',
		minView: 2,
		language: 'zh-CN',
		autoclose: true
	});

	$(".icon-date").on("click", function() { //图标调用日历
		var name = $(this).data("picker");
		if(typeof name == undefined) {
			$(".picker[name=" + name + "]").datetimepicker("remove");
		} else {
			$(this).siblings(".picker").datetimepicker("show");
		}
		console.log(name)
	});

	$(".carousel-card").find("li .btn,li .shadow").on("click", function(e) { //附加产品处理
		$(this).parents("li").toggleClass("selected").siblings("li").removeClass("selected");
		e.stopPropagation();
	});

	$(".address-check-group").on("click", "input", function() { //处理默认地址处
		var c = _confirm($(this).parent().siblings("h5"));
		if(c) $(this).prop("disabled", true);
		else $(this).prop("disabled", false).parent().removeClass("checked");
	});

	$(".choose").on("click", "input", function() { //处理默认地址处
		var cc = _confirms($(this).parent().siblings("h5"));
		if(!cc) $(this).parent().removeClass("checked").next('.handle').find("h5").addClass("hidden");
		else $(this).parent().next('.handle').find("h5").removeClass("hidden");
	});

	$('.fmp-list').on("click", "a", function() { //锚点定位
		var id = $(this).attr("href");
		console.log($(id).offset().top);

		$("body").animate({
			scrollTop: $(id).offset().top - 80
		}, 200);
	});

	$(".go-top").find(".top").on("click", function() {
		$("html,body").animate({
			scrollTop: 0
		}, 500);
	});

	// 验证码
	var wait=30;
	function time(o) {
		if (wait == 0) { 
			o.removeAttribute("disabled");
			o.value="获取验证码"; 
			o.innerHTML="获取验证码";
			wait = 30; 
		} else { 
			o.setAttribute("disabled", true);
			o.value= wait+"s后重新发送";
			o.innerHTML= wait+"s后重新发送";
			wait--; 
			setTimeout(function() { 
				time(o) 
			},1000);
		} 
	}
	$(".btn-cole").on("click", function() {
		time(this);
	})

});

$(document).ready(function() {
	/*
	 处理不同产品跳链情况
	 * */
	var urls = [{
		typename: "日常清洁-终点保洁",
		typenum: 11,
		tourl: "selectionCleaning_FillOrder.html"
	}, {
		typename: "日常清洁-包月清洁",
		typenum: 13,
		tourl: "selectionCleaning_FillOrder1.html"
	},{
		typename: "日常清洁-开荒清洁",
		typenum: 12,
		tourl: "selectionCleaning_FillOrder0.html"
	},{
		typename: "鞋具护理-上门擦鞋",
		typenum: 15,
		tourl: "shoesWithCare_FillOrder.html"
	},{
		typename: "鞋具护理-鞋柜清理",
		typenum: 16,
		tourl: "shoesWithCare_FillOrder1.html"
	},{
		typename: "衣橱管理-衣柜整理",
		typenum: 17,
		tourl: "wardrobe_FillOrder.html"
	},{
		typename: "衣橱管理-衣柜管理规划",
		typenum: 19,
		tourl: "wardrobe_FillOrder1.html"
	},{
		typename: "衣橱管理-服饰搭配",
		typenum: 18,
		tourl: "wardrobe_FillOrder2.html"
	},{
		typename: "家电保洁-空调清洗",
		typenum: 20,
		tourl: "selectionCleaning_FillOrder2.html"
	},{
		typename: "家电保洁-抽油烟机清洗",
		typenum: 21,
		tourl: "selectionCleaning_FillOrder3.html"
	},{
		typename: "家电保洁-冰箱清洗",
		typenum: 22,
		tourl: "selectionCleaning_FillOrder4.html"
	},{
		typename: "家电保洁-洗衣机清洗",
		typenum: 23,
		tourl: "selectionCleaning_FillOrder7.html"
	},{
		typename: "家居保洁-沙发清洁",
		typenum: 24,
		tourl: "selectionCleaning_FillOrder5.html"
	},{
		typename: "精选保洁-厨房清洗",
		typenum: 25,
		tourl: "selectionCleaning_FillOrder6.html"
	},{
		typename: "精选保洁-卫生间清洗",
		typenum: 26,
		tourl: "selectionCleaning_FillOrder8.html"
	},{
		typename: "医患护理-一级",
		typenum: 27,
		tourl: "patientEscort_FillOrder.html"
	},{
		typename: "医患护理-二级",
		typenum: 28,
		tourl: "patientEscort_FillOrder1.html"
	},{
		typename: "医患护理-三级",
		typenum: 29,
		tourl: "patientEscort_FillOrder2.html"
	},{
		typename: "母婴护理-月嫂服务",
		typenum: 31,
		tourl: "maternityMatron_FillOrder2.html"
	}, {
		typename: "母婴护理-催乳师",
		typenum: 32,
		tourl: "prolactinDivision_FillOrder2.html"
	}, {
		typename: "母婴护理-入户指导师",
		typenum: 33,
		tourl: "tutorHouse_FillOrder2.html"
	}]

	$(".tabs-block .tab-pane").on("click", ".btn", function() {
		var tonum = $(this).data("typenum"),
			tourl = null;

		if(!tonum) return;
		$(urls).each(function(i, o) {
			if(o.typenum == tonum) {
				tourl = o.tourl;
			}
		});

		$("#postbtns").attr("onclick", "window.location.href='" + tourl + "'");
	});
});

//默认地址 处理询问框
function _confirm($h5) {
	var c = confirm("确认设置为默认地址？");
	var $t = $(".defult-address:not(.hidden)");

	if(c == true) {
		$(".had-address").find("h5").addClass("hidden");
		$h5.parents(".had-address").siblings(".had-address").find(".check-group").removeClass("checked").find("input").prop("checked", false).prop("disabled", false);
		$h5.removeClass("hidden");
		return true;
	} else {
		$t.parents(".had-address").find(".check-group").addClass("checked").find("input").prop("checked", true);
		return false;
	}
}

function _confirms($h5) {
	var cc = confirm("确认设置为默认地址？");
	var $tt = $(".defult-address:not(.hidden)");

	if(cc == true) {
		console.log($h5.html())
		$(".choose-add").find("h5").addClass("hidden");
		$h5.parents(".choose-add").siblings(".choose-add").find(".check-group").removeClass("checked").find("input").prop("checked", false);
		$h5.parents(".choose-add").find("h5").removeClass("hidden");
		return true;
	} else {
		$tt.parents(".choose-add").find(".check-group").addClass("checked").find("input").prop("checked", true);
		return false;
	}
}