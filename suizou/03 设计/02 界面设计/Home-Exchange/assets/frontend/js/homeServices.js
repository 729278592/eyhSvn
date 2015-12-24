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
                rentalMode.removeClass("active");
                rentalMode.find("input").attr({checked:false}).removeClass("checked");
            })
        },
        radioClick:function(){
            radio.parent(rentalMode).on("click",function(){
                var tfr = $(this).find(radio).get(0);
                if(tfr.className == ""){
                    tfr.checked = true;
                    tfr.className = "checked";
                    $(this).siblings(rentalMode).find(radio).removeClass("checked");
                    $(this).siblings(rentalMode).removeClass("active");
                    $(this).addClass("active");
                }
                else if(tfr.className == "checked"){
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
                    tfg.className = "checked";
                    $(this).addClass("active");
                }
                else if(tfg.className == "checked"){
                    tfg.checked = false;
                    tfg.className = "";
                    $(this).removeClass("active");
                }
            })
        }
    };
    Method.init($(".search-terms,.service-type,.com_list,.hd-mask"));
})(jQuery);

