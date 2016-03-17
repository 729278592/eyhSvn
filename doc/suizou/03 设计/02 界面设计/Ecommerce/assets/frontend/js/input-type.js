/**
 * Created by WHB on 2016/3/16.
 */
(function($){
    /*场景类型条件的赛选控制*/
    var Method = {
        init:function(_this){
                rentalMode = _this.find("label");
                radio      = _this.find("input:radio");
                checkbox   = _this.find("input:checkbox");
                typeDebugging = _this.find(".type-debugging");
                Method.radioClick();
                Method.checkboxClick();
            },
        radioClick:function(){
            radio.parent(rentalMode).each(function(){
                $(this).on("click",function(){
                    if($(this).find("input:radio")[0].checked==true){
                        $(this).closest(typeDebugging).siblings(typeDebugging).find(rentalMode).removeClass("active");
                        $(this).addClass("active");
                        $(this).find("input :radio").attr("checked", false);
                    }
                    else{
                        $(this).removeClass("active");
                        $(this).find("input :radio").attr("checked", true);
                    }
                })
            })
        },
        checkboxClick:function(){
            checkbox.parent(rentalMode).each(function(){
                $(this).on("click",function(){
                    if($(this).find("input:checkbox")[0].checked==true){

                        $(this).addClass("active");
                        $(this).find("input :radio").attr("checked", false);
                    }
                    else{
                        $(this).removeClass("active");
                        $(this).find("input :radio").attr("checked", true);
                    }
                })
            })
        }
    };
    Method.init($(".td-ul").each(function(i){
        return $(".td-ul").eq(i);
    }));


    /*场景条件的赛选*/
    $(".div-group").delegate("span .btn-plus","click",function(e){
        e.stopPropagation();
        var left = ($(this).position().left+$(this).closest(".div-label").position().left+18)+"px";
        $(this).closest("li").next(".chiove-infor").removeClass("hide");
        $(this).closest("li").next(".chiove-infor").find(".bgfff").css({left:left});
        $(this).closest("li").addClass("bb0");
        $(this).closest(".div-group").siblings(".div-group").find(".chiove-infor").addClass("hide")
    });

    $(document).on("click",function(){
        $(".chiove-infor").addClass("hide");
        $(".sence-ul li.bb0").removeClass("bb0");
    });

    $(".sence-ul").delegate(".chiove-infor","click",function(e){
        e.stopPropagation();
    });

    $(".sence-ul").delegate(".chiove-infor label","click",function(e){
        var text = $(this).find(".sence-name").text();
        var str = '<label>'+
                      '<span class="sence-name">'+text+'</span>'+
                  '</label>';
        if($(this).find("input")[0].checked==true){
            $(this).closest(".chiove-infor").prev("li.bb0").find(".btn-plus").parent("span").before(str);
            var left = ($(this).closest(".chiove-infor").prev("li").find(".btn-plus").position().left + $(this).closest(".chiove-infor").prev("li").find(".div-label").position().left+18)+"px";
            $(this).closest(".chiove-infor").find(".bgfff").css({left:left});
        }
        else{
            var that = $(this);
            that.closest(".chiove-infor").prev("li.bb0").find(".sence-name").each(function(){
                var removeText = $(this).text();
                if(removeText == text){
                    $(this).parent("label").remove();
                    var left = (that.closest(".chiove-infor").prev("li").find(".btn-plus").position().left + that.closest(".chiove-infor").prev("li").find(".div-label").position().left+18)+"px";
                    that.closest(".chiove-infor").find(".bgfff").css({left:left});
                }
            });
        }
    });
})(jQuery);