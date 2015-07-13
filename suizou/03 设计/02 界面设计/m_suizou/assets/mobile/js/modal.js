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
	$.fn.confirm = function(opts){
		var defaults = {
				id     : "pop_up_box",
				title  : "添加批注"
		};
		var opts = $.extend({}, defaults, opts);

		//$("div.meng").removeClass("hide");

        var content = '<div class="mask fail">'+
                      '<div id="'+opts.id+'"><div class="pop_up_box_head">'+
                      '<span>'+opts.title+'</span>'+
                      '<div class="close"><i class="fa fa-remove"></i></div>'+
                      '</div>'+
                      '<div class="pop_up_box_content"><textarea name="" id="2" cols="30" rows="4" style="resize: none;" class="textarea" placeholder="内容..."></textarea></div>'+
                      '<div class="pop_up_box_footer">' +
                      '<ul class="operation operation1">'+
                      '<li><input type="submit" value="取消"id="btn_cancel"/></li>'+
                      '<li><input type="submit" value="确认" class="last submit"id="btn_sure"/></li>'+
                      '</ul>'+
                      '</div>'+
                      '</div>';
		$(".content").append(content);
		$("#" + opts.id).stop(true, false).animate({
        top:'50%',
        marginTop:"-60px"
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
				$("div.mask").addClass("hide");
			});
		});
		
		//Button exit
		$("#btn_cancel,.close").on("click", function(){
			if(typeof opts.exit == "function") {
				opts.exit();
			}
			$("#" + opts.id).animate({
				top : '-250px'
			}, 300, function(){
				$("#" + opts.id).remove();
				$("#" + opts.id).removeClass("dong");
				$("div.mask").addClass("hide");
			});
		})

	};
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
        var content  = '<div class="meng">'+
                       '<div id="'+opts.id+'"><div class="ts_head"><span>'+opts.title+'</span></div>'+
                       '<div class="ts_body"><span style="color: #fc2626;">'+opts.text+'</span></div>'+
                       '<div class="ts_foot">'+
                       '<button class="inblock wr_a btn_dian" style="background: #fb9766;" id="btn_sure">确认</button><span class="inblock inblock0"></span>'+
                       '<button class="inblock wr_a btn_dian" style="background: #969696;" id="btn_cancel">取消</button>'+
                       '</div></div></div>';
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
            id             : "pop_up_box",
            title          : "操作提示",
            text_fail     : "提交失败 ! 请完善资料 !",
            text_success  : "恭喜 提交成功!",
            src_fail      : "../images/daily/fail.png",
            src_success   : "../images/daily/success.png"
        };
        var opts = $.extend({}, defaults, opts);
        //$("div.meng").removeClass("hide");
        var content = '<div class="mask fail">'+
                      '<div id="'+opts.id+'"><div class="pop_up_box_head"><img src="'+opts.src_fail+'" alt="" width="60"/>'+
                      '<span>'+opts.title+'</span>'+
                      '<div class="close"><i class="fa fa-remove"></i></div>'+
                      '</div>'+
                      '<div class="pop_up_box_content">'+opts.text_fail+'</div>'+
                      '</div>';
        $(".content").append(content);
        $("#" + opts.id).stop(true, false).animate({
            top:'50%',
            marginTop:"-60px"
        },400,function(){
            $("#" + opts.id).addClass("dong");
        });
        //Button exit
        $(".close").on("click", function(){
            if(typeof opts.exit == "function") {
                opts.exit();
            }
            $("#" + opts.id).animate({
                top : '-250px'
            }, 300, function(){
                $("#" + opts.id).remove();
                $("#" + opts.id).removeClass("dong");
                $("div.mask").addClass("hide");
            });
        })
    }
})(jQuery);