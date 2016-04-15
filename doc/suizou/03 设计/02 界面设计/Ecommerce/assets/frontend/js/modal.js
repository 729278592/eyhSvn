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
		var content  = '<div id="'+opts.id+'"><div class="ts_head"><span>'+opts.title+'</span><span class="block close">×</span></div>'+
				       '<div class="ts_body">' +
                            '<span class="error" id="error">手机号或密码错误!</span>'+
                            '<form action="" class="form1" onsubmit="return false">'+
                                '<span class="login_name">登录名:</span><br>'+
                                '<label for=""> <input type="text" name="" class="inpu"placeholder="邮箱/手机号码 :"/></label><br/>'+
                                '<span class="login_password">登录密码:</span><a  href="confirm-admin.html" class="forget_password">忘记密码?</a><br>'+
                                '<label for=""> <input type="text" name="" class="inpu" placeholder="密码 :"/></label><br/>'+
                                '<label for=""> <input type="submit" value="立即登录" class="block inpu inpu1"/></label><br/>'+
                                '<a href="person-register.html" class="free_register">免费注册</a>'+
                            '</form>'+
                       '</div>'+
                       '<div class="ts_foot">'+

                       '</div></div>';
		$(".wapper").append(content);
		$("#" + opts.id).stop(true, false).animate({
        top:'250px'
    },400,function(){
        $("#" + opts.id).addClass("dong");
    });
		$(".close").on("click", function(){
			if(typeof opts.exit == "function") {
				opts.exit();
			}
			$("#" + opts.id).animate({
				top : '-610px'
			}, 300, function(){
				$("#" + opts.id).removeClass("dong");
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