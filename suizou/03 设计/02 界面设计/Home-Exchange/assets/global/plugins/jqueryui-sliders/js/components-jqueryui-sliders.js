
var ComponentsjQueryUISliders = function () {

    return {
        //main function to initiate the module
        init: function () {
            // range slider
            $("#slider-range").slider({
                range: true,
                min: 0,
                max: 3000,
                values: [1, 2000],
                slide: function (event, ui) {
                    $("#slider-range-amount").text("￥" + ui.values[0] + " - ￥" + ui.values[1]);
                }
            });
            $("#slider-range-amount").text("￥" + $("#slider-range").slider("values", 0) + " - ￥" + $("#slider-range").slider("values", 1));
        }

    };

}();