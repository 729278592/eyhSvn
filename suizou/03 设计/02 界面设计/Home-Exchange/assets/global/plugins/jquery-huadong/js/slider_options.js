(function($){
    jQuery.noConflict();
    jQuery(window).bind('load', function(){
        jQuery().prepare_slider();
        //Download by http://www.codefans.net
        //=======intro================
        var slider_link = jQuery('#right_but');
        var slider_link_index = 1;
        var slider_count = jQuery('#slider_list > li').size();

        function slider_intro(){
            if(slider_link_index <= slider_count){
                slider_link.trigger('click');
                slider_link_index++;
                start = setTimeout(function(){slider_intro()}, 5000); //select change time
            }
        }
        start = setTimeout(function(){slider_intro()}, 5000);
        //===============
        jQuery(".indent-col-main").hover(function(){
                clearInterval(start)
            },
            function(){
                start = setTimeout(function(){slider_intro()}, 5000);
            });


    });
})(jQuery)
