/* 对话框
 * @id     : ID
 * @width  : 宽度
 * @title  : 提示窗口标题
 * @text  : 提示文字
 * 回调函数
 * @sure(){}  : 点击确定后操作
 * @exit(){}  : 点击取消后操作
 */
(function($){
	$.fn.dialog = function(opts){
		var defaults = {
				id     : "tishi",
				width  : "480px",
				title  : "操作提示",
				text   : "您确定进行此操作吗？",
				sure   : null,
				exit   : null
		};
		
		var opts = $.extend({}, defaults, opts);

		//$("div.meng").removeClass("hide");
		var content  = '<div id="'+opts.id+'"><div class="ts_head"><span>'+opts.title+'</span></div>'+
				       '<div class="ts_body">' +
                       '<span class="span_input"><label for=""></label><span>性别</span> <span style="color: #fc2626;">*</span> <input type="text" class="wc_in" value="" placeholder=""/></span><br/>' +
                       '<span class="span_input"><label for=""></label><span>姓名</span> <span style="color: #fc2626;">*</span> <input type="text" class="wc_in" value="" placeholder=""/></span><br/>' +
                       '</div>'+
                       '<div class="ts_foot">'+
                       '<button class="inblock wr_a btn_dian" style="background: #fb9766;" id="btn_sure">确认</button><span class="inblock inblock0"></span>'+
                       '<button class="inblock wr_a btn_dian" style="background: #969696;" id="btn_cancel">取消</button>'+
                       '</div></div>';
		$(".w_rc").append(content);
		$("#" + opts.id).stop(true, false).animate({
        top:'250px'
    },400,function(){
        $("#" + opts.id).addClass("dong");
    });
		//Button sure
		$("#btn_sure").on("click", function(){
			if(typeof opts.sure == "function") {
				opts.sure();
			}
			$("#" + opts.id).animate({
				top : '1250px'
			}, 300, function(){
				$("#" + opts.id).remove();
				$("#" + opts.id).removeClass("dong");
				$("#" + opts.id).css({"top":"-200px"});
				$("div.meng").addClass("hide");
			});
		});
		
		//Button exit
		$("#btn_cancel").on("click", function(){
			if(typeof opts.exit == "function") {
				opts.exit();
			}
			$("#" + opts.id).animate({
				top : '-250px'
			}, 300, function(){
				$("#" + opts.id).remove();
				$("#" + opts.id).removeClass("dong");
				$("div.meng").addClass("hide");
			});
		})

	};
    $.fn.alert = function(opts){
        var defaults = {
            id     : "tishi",
            width  : "480px",
            title  : "操作提示",
            text   : "您确定进行此操作吗？",
            sure   : null,
            exit   : null
        };

        var opts = $.extend({}, defaults, opts);
        //$("div.meng").removeClass("hide");
        var content  = '<div id="'+opts.id+'"><div class="ts_head"><span>'+opts.title+'</span></div>'+
            '<div class="ts_body"><span style="color: #fc2626;">'+opts.text+'</span></div>'+
            '<div class="ts_foot">'+
            '<button class="inblock wr_a btn_dian" style="background: #fb9766;" id="btn_sure">确认</button><span class="inblock inblock0"></span>'+
            '<button class="inblock wr_a btn_dian" style="background: #969696;" id="btn_cancel">取消</button>'+
            '</div></div>';
        $(".w_rc").append(content);
        $("#" + opts.id).stop(true, false).animate({
            top:'250px'
        },400,function(){
            $("#" + opts.id).addClass("dong");
        });
        //Button sure
        $("#btn_sure").on("click", function(){
            if(typeof opts.sure == "function") {
                opts.sure();
            }
            $("#" + opts.id).animate({
                top : '1250px'
            }, 300, function(){
                $("#" + opts.id).remove();
                $("#" + opts.id).removeClass("dong");
                $("#" + opts.id).css({"top":"-200px"});
                $("div.meng").addClass("hide");
            });
        });
        //Button exit
        $("#btn_cancel").on("click", function(){
            if(typeof opts.exit == "function") {
                opts.exit();
            }
            $("#" + opts.id).animate({
                top : '-250px'
            }, 300, function(){
                $("#" + opts.id).remove();
                $("#" + opts.id).removeClass("dong");
                $("div.meng").addClass("hide");
            });
        })

    };
    $.fn.confirm = function(opts){
        var defaults = {
            id     : "tishi",
            width  : "480px",
            title  : "操作提示",
            text   : "您确定进行此操作吗？",
            sure   : null,
            exit   : null
        };
        var opts = $.extend({}, defaults, opts);
        //$("div.meng").removeClass("hide");
        var content  = '<div id="'+opts.id+'"><div class="ts_head"><span>'+opts.title+'</span></div>'+
            '<div class="ts_body"><span style="color: #fc2626;">'+opts.text+'</span></div>'+
            '<div class="ts_foot">'+
            '<button class="inblock wr_a btn_dian" style="background: #fb9766;" id="btn_sure">确认</button><span class="inblock inblock0"></span>'+

            '</div></div>';
        $(".w_rc").append(content);
        $("#" + opts.id).stop(true, false).animate({
            top:'250px'
        },400,function(){
            $("#" + opts.id).addClass("dong");
        });
        //Button sure
        $("#btn_sure").on("click", function(){
            if(typeof opts.sure == "function") {
                opts.sure();
            }
            $("#" + opts.id).animate({
                top : '1250px'
            }, 300, function(){
                $("#" + opts.id).remove();
                $("#" + opts.id).removeClass("dong");
                $("#" + opts.id).css({"top":"-200px"});
                $("div.meng").addClass("hide");
            });
        });

        //Button exit
        $("#btn_cancel").on("click", function(){
            if(typeof opts.exit == "function") {
                opts.exit();
            }
            $("#" + opts.id).animate({
                top : '-250px'
            }, 300, function(){
                $("#" + opts.id).remove();
                $("#" + opts.id).removeClass("dong");
                $("div.meng").addClass("hide");
            });
        })

    }
})(jQuery);