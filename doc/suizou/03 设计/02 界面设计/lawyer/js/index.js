/**
 * Created by WHB on 2016/8/22.
 */
(function($){
    /*slider*/
    $(".nav").slider({
        defauTime:5000,
        moveTime:300
    });

    $(".service_menu li").hover(
        function(){
            $(".service_menu li").removeClass("active");
            $(this).addClass("active");
        },
        function(){

        });

    $(".l_step_menu li").hover(
        function(){
            $(".l_step_menu li").removeClass("active");
            $(this).addClass("active");
        },
        function(){

        });

})(jQuery);