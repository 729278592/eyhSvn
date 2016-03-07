/**
 * Created by eyohu023 on 2015/12/9.
 */
(function($){
    /*条件赛选的控制*/
    var Method = {
        init:function(_this){
            rentalMode = _this.find(".rental_mode");
            radio      = _this.find("input:radio");
            checkbox   = _this.find("input:checkbox");
            btnClear   = $(".btn-clear");
            noAction   = _this.find(".no-action");
            maxPrice   =$("#maxPrice:hidden").val();
            minPrice   =$("#minPrice:hidden").val();
            Method.radioClick();
            Method.checkboxClick();
            Method.clearClick()
        },
        clearClick:function(){
            btnClear.on("click",function(){
                rentalMode.removeClass("active");
                noAction.addClass("active");
                rentalMode.find("input").attr({checked:false});
                noAction.find("input").attr({checked:true});
                $("#slider-range").slider({
                    range: true,
                    min: 0,
                    max: 3000,
                    values: [minPrice, maxPrice]
                });
                $("#slider-range-amount").text("￥" + minPrice + " - ￥" + maxPrice);
            })
        },
        radioClick:function(){
            radio.parent(rentalMode).each(function(){
                $(this).on("click",function(){
                    if($(this).find("input:radio")[0].checked==true){
                        $(this).siblings(rentalMode).removeClass("active");
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
    Method.init($(".search-terms,.service-type,.com_list,.hd-mask"));

    /*多行打省略号*/
    function ellipsisShow(){
        var ds = $(".deatils-p");
        ds.each(function(){
            var divH = $(this).height();
            var $p = $("p", $(this)).eq(0);
            while ($p.outerHeight() > divH) {
                $p.text($p.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
            }
        });
    }
    ellipsisShow();

    var sl = $(".sc-menu li");
    var s = $(".sc-list");
    sl.each(function(i){
        $(this).on("click",function(){
            $(this).addClass("active");
            $(this).siblings(sl).removeClass("active");
            s.eq(i).addClass("active");
            s.eq(i).siblings(s).removeClass("active");
            ellipsisShow();
        })
    });


})(jQuery);

