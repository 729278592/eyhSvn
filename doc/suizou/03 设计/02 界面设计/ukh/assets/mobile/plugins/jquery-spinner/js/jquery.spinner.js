;(function ($) {
    $.fn.spinner = function () {

      /*手动输入*/
        $(this).on("keyup",'.buycount',function() {
            var buycount = $(this).closest(".num").find(".buycount");
            var number = parseInt(buycount.val());
            if (isNaN(number))
                number = 1;
            if (number < 1){
                number = 1;
            }
            buycount.val(number);
        });

      /*数量加1*/
        $(this).on("click",".plus",function() {
            var buycount = $(this).closest(".num").find(".buycount");
            var number = parseInt(buycount.val());
            number++;
            buycount.val(number);
        });

      /*数量减1*/
        $(this).on("click",".minus",function() {
            var buycount = $(this).closest(".num").find(".buycount");
            var number = parseInt(buycount.val());
            number--;
            if (number <= 0){
                number = 1;
            }
            buycount.val(number);
        })

    }
})(jQuery);