/*
	 * 小栗子对应JS
	  By C -20160519 
	 * */

;
(function($) {

	$.extend({
		ww: {
			times: null,
		}
	}); //对象

	$.extend($.ww, {
		inputbox: function() {
			/* 单选复选框*/
			$(".check-group").on("click", "input", function() {
				var type = $(this).attr("type"),
					name = $(this).attr("name");

				if(type == "radio") {
					$("input[type=radio][name=" + name + "]").prop("checked", false).parent().removeClass("checked");
					$(this).prop("checked", true).parent().addClass("checked");
				} else {
					if($(this).prop("checked")) {
						$(this).parent().addClass("checked");
					} else {
						$(this).parent().removeClass("checked");
					}
				}
			});

			return this;
		},

		dropdown: function($obj) {
			/*下拉选择 * */
			var $dd = $obj != undefined ? $obj : $(".ww-dropdown");
			$dd.find("input").prop("readonly", true);

			$dd.on("click", function(e) {
				var a = $(this).attr("data-disable");
				if(a == "disable") return;

				var flag = $(this).hasClass("open");
				$dd.removeClass("open");

				if(!flag) $(this).addClass("open");
				e.stopPropagation();
			});

			$(document).on("click", function() {
				$dd.removeClass("open");
			});

			$(".droplist").on("click", "li", function(e) {
				var $p = $(this).parent().siblings(".droppanel"),
					str = '';

				var t = $.trim($(this).text()),
					v = $(this).attr("data");
				$p.find("input[type=text]").val(t);
				$p.find("input[type=hidden]").val(v);
				$(this).addClass("selected").siblings().removeClass("selected");

				$(this).parents($dd).removeClass("open");
				e.stopPropagation();
			});
			return this;
		},

		markStar: function() {
			$(".mark-star").on("click", "label", function() {
				var li = $(this).index();

				$(this).parent().find("label").each(function(i, o) {
					if(i <= li) $(o).addClass("on");
					else $(o).removeClass("on");
				});
				$(this).siblings("input").val(li + 1);
			});
			
			return this;
		},
	});

})(jQuery);