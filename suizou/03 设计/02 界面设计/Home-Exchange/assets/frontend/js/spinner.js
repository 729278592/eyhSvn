/**
 * Created by eyohu023 on 2015/12/10.
 */
(function($){
    $.fn.spinner = function(optinos){
        var define = {
            defineNum:0,
            maxNum:100,
            isNum:"只能输入数字哦"
        };
        var opts = $.extend({},define,optinos);
        var methods = {
            init:function(_this){
                spinner   = _this.find(".spinner");
                reduce    = _this.find(".btn-reduce");
                plus      = _this.find(".btn-plus");
                unitPrice = $(".unit-price");
                total     = $(".total");
                methods.clickPlus();
                methods.clickReduce();
                methods.keydown();
                spinner.val(opts.defineNum);
                if(spinner.val() == opts.defineNum){
                    reduce.addClass("to_disabled");
                }
            },
            isNaN:function(){/*输入框非数字*/
                if(isNaN(spinneriNow)){
                    spinner.val(opts.defineNum);
                    spinner.removeClass("cuo");
                    reduce.addClass("to_disabled");
                    total.text(opts.defineNum);
                }
            },
            totalMoney:function(){
                total.text(unitPrice.text()*spinneriNow);
            },
            clickPlus:function(){/*点击增加购买数量*/
                plus.on("click",function(){
                    spinneriNow = spinner.val();
                    ++spinneriNow;
                    spinner.val(spinneriNow);
                    if(spinneriNow>opts.defineNum){
                        reduce.removeClass("to_disabled");
                        reduce.attr({"disabled":false})
                    }
                    methods.totalMoney();
                    if(spinneriNow>opts.maxNum){
                        spinner.val('购买数量不能超过'+opts.maxNum+'哦');
                        spinner.addClass("cuo");
                        total.text("NaN");
                    }
                    methods.isNaN();
                });
            },
            clickReduce:function(){/*点击减少购买数量*/
                reduce.on("click",function(){
                    spinneriNow = spinner.val();
                    if(spinneriNow > opts.defineNum){
                        spinner.val(--spinneriNow);
                        $(this).removeClass("to_disabled");
                        if(spinneriNow == opts.defineNum){
                            $(this).addClass("to_disabled");
                            $(this).attr({"disabled":"disabled"});
                            spinner.val(opts.defineNum);
                        }
                    }
                    else{
                        $(this).attr({"disabled":"disabled"})
                    }
                    methods.totalMoney();
                    methods.isNaN();
                });
            },
            keydown:function(){/*键盘输入购买数量*/
                spinner.keydown(function(event) {
                    var keyCode = event.which;
                    spinneriNow = spinner.val();
                    if(keyCode==48||keyCode == 96){
                        reduce.addClass("to_disabled");
                        spinner.removeClass("cuo");
                        reduce.attr({"disabled":"disabled"});
                        if(spinneriNow>opts.defineNum){
                            reduce.removeClass("to_disabled");
                            reduce.attr({"disabled":false});
                        }
                        methods.totalMoney();
                    }
                    else if((keyCode >= 49 && keyCode <=57)||(keyCode >= 97 && keyCode <=105)){
                        reduce.removeClass("to_disabled");
                        spinner.removeClass("cuo");
                        reduce.attr({"disabled":false});
                        methods.totalMoney();
                    }
                    else if(keyCode == 8){
                        spinner.removeClass("cuo");

                        if((spinneriNow==opts.defineNum)||(spinneriNow==" ")){
                            reduce.addClass("to_disabled");
                            reduce.attr({"disabled":"disabled"});
                        }
                        else{
                            reduce.removeClass("to_disabled");
                            reduce.attr({"disabled":false});
                        }
                    }
                    else{
                        spinner.val(opts.isNum);
                        spinner.addClass("cuo");
                        total.text("NaN");
                        return false;
                    }
                    if(spinneriNow>opts.maxNum){
                        spinner.val('购买数量不能超过'+opts.maxNum+'哦');
                        spinner.addClass("cuo");
                        total.text("NaN");
                    }
                })
            }
        };
        methods.init($(this))
    }
})(jQuery);