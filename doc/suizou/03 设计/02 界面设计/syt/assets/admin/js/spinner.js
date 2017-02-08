;(function ($) {
  $.fn.spinner = function () {

      /*手动输入*/
      $(this).delegate('.buycount',"keyup",function() {
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
      $(this).delegate(".plus","click",function() {
        var buycount = $(this).closest(".num").find(".buycount");
        var number = parseInt(buycount.val());
        number++;
        buycount.val(number);
      });

      /*数量减1*/
      $(this).delegate(".minus","click",function() {
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