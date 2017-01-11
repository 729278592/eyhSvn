;(function ($) {
  $.fn.spinner = function (options) {
    return this.each(function () {
      var buycount = $(this).find(".buycount");
      var plus = $(this).find(".plus");
      var minus = $(this).find(".minus");

      /*手动输入*/
      buycount.keyup(function() {
        var number = parseInt(buycount.val());
        if (isNaN(number))
          number = 1;
        if (number < 1){
            number = 1;
        }
        buycount.val(number);
      });

      /*数量+*/
      plus.click(function() {
        var number = parseInt(buycount.val());
        number++;
        buycount.val(number);

      });

      /*数量-*/
      minus.click(function() {
        var number = parseInt(buycount.val());
        number--;
        if (number <= 0){
            number = 1;
        }
          buycount.val(number);
      });

      /*数量改变*/
      function changeVal(){
          return options.val;
      }

    })
  }
})(jQuery);