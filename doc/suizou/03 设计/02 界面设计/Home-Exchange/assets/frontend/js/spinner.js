/**
 * Created by eyohu023 on 2015/12/10.
 */
(function($){
    $.fn.spinner = function(optinos){
        var define = {
            defineNum:5,
            maxNum:100,
            one:25,
            isNum:"只能输入数字哦"
            },
        opts = $.extend({},define,optinos);
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
                    total.text(opts.defineNum);
                    reduce.addClass("to_disabled");
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
                        spinner.val(opts.maxNum);
                        total.text(opts.maxNum*unitPrice.text());
                        alert('购买数量不能超过'+opts.maxNum+'哦');
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
                spinner.keyup(function(event) {
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
                        alert(opts.isNum);
                        spinner.val(opts.defineNum);
//                      spinner.addClass("cuo");
                        total.text(opts.one*opts.defineNum);
                        return false;
                    }
                    if(spinneriNow>opts.maxNum){
                        spinner.val(opts.maxNum);
//                      spinner.addClass("cuo");
                        total.text(opts.maxNum*unitPrice.text());
                        alert('购买数量不能超过'+opts.maxNum+'哦');
                    }
                })
            }
        };
        methods.init($(this))
    }
})(jQuery);