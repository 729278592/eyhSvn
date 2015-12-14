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
            Method.radioClick();
            Method.checkboxClick();
            Method.clearClick()
        },
        clearClick:function(){
            btnClear.on("click",function(){
                rentalMode.find("input").removeClass("selected");
                rentalMode.removeClass("active");
            })
        },
        radioClick:function(){
            radio.parent(rentalMode).on("click",function(){
                var tfr = $(this).find(radio).get(0);
                if(tfr.className == ""){
                    tfr.checked = true;
                    tfr.className = "selected";
                    $(this).siblings(rentalMode).find(radio).removeClass("selected");
                    $(this).siblings(rentalMode).removeClass("active");
                    $(this).addClass("active");
                }
                else if(tfr.className == "selected"){
                    tfr.checked = false;
                    tfr.className = "";
                    $(this).removeClass("active");
                }
            })
        },
        checkboxClick:function(){
            checkbox.parent(rentalMode).on("click",function(){
                var tfg = $(this).find(checkbox).get(0);
                if(tfg.className == ""){
                    tfg.checked = true;
                    tfg.className = "selected";
                    $(this).addClass("active");
                }
                else if(tfg.className == "selected"){
                    tfg.checked = false;
                    tfg.className = "";
                    $(this).removeClass("active");
                }
            })
        }
    };
    Method.init($(".search-terms,.service-type"));
})(jQuery);

