/*
 * Ajaxify - $ Plugin
 * version: 2.1 2015-05-13
 * Created by: gaoxin
 */
(function(window,$){

    // Prepare our Variables
    var History = window.History,
        document = window.document;

    // Check to see if History.js is enabled for our Browser
    if ( !History.enabled ) {
        return false;
    }


    /* Application Generic Variables */
    var $window = $(window),
        $body = $(document.body),
        $content = $body,
        rootUrl = History.getRootUrl(),
        completedEventName = 'statechangecomplete';

    // Internal Helper
    $.expr[':'].internal = function(obj, index, meta, stack){
        // Prepare
        var
            $this = $(obj),
            url = $this.attr('href')||'',
            isInternalLink;

        // Check link
        isInternalLink = url.substring(0,rootUrl.length) === rootUrl || url.indexOf(':') === -1;

        // Ignore or Keep
        return isInternalLink;
    };

    function _internal(url) {
        if (!url) return false;
        if(typeof(url) === 'object') url = url.href;
        if (url==='') return true;
        return url.substring(0,rootUrl.length) === rootUrl || url.indexOf(':') === -1;
    }

    // HTML Helper
    var documentHtml = function(html){

        // Prepare
        var result = String(html)
                .replace(/<\!DOCTYPE[^>]*>/i, '')
                .replace(/<(html|head|body|title|meta|script)([\s\>])/gi,'<div class="document-$1"$2')
                .replace(/<\/(html|head|body|title|meta|script)\>/gi,'</div>')
            ;

        // Return
        return $.trim(result);
    };

    var settings = {
        url: false, /* specify the url, priority is for the href attr.*/
        target:'#content', /*the data loaded via ajax will be placed here*/
        type: 'GET', /* the request method GET or POST*/
        title: false, /* change page title along with the request. */
        dataType: 'html',
        cache: false /* force the browser not to cache*/

    };

    // Ajaxify Helper
    $.fn.ajaxify = function(options) {

        settings = $.extend({}, settings, options);

        if($.metadata){ // 是否引入metadata支持
            settings = jQuery.extend(settings,$(this).metadata());
        }

        $(this).each(function(index) {

            $(this).on('click', function(e) { //not a real click, or target = "_blank"
                if (e.shiftKey || e.ctrlKey || e.metaKey || e.which == 2) {
                    return true;
                }
                var target = e.currentTarget;
                if ($(target).is('a')) {
                    e.preventDefault();
                    var url = $(target).attr('href').replace(/^(#\!?|\.)/, '');
                    if(_internal(url)) {
                        History.pushState(null,null,url);
                    }
                }
            }).on('submit', function(e) {
                var target = e.currentTarget;
                if ($(target).is('form')) {
                    e.preventDefault();
                    var action = $(target).attr('action'),
                        url = (action.indexOf('?') != -1 ? action.replace(/&$/, '') : action + '?') + $(target).serialize();
                    if(_internal(url)) {
                        History.pushState(null,null,url);
                    }
                }
            });

        });

        return this;

    }; // end ajaxify fn

    // Hook into State Changes
    $window.on('statechange',function(){
        // Prepare Variables
        var
            State = History.getState(),
            url = State.url,
            relativeUrl = url.replace(rootUrl,'');


        if ( $(settings.target).size() === 0  || !$(settings.target)) {
            $content = $body; // 未指定target时，默认为document.body
        } else {
            $content = $(settings.target);
        }

        // Set Loading
        //$body.addClass('loading');

        // Start Fade Out
        // Animating to opacity to 0 still keeps the element's height intact
        // Which prevents that annoying pop bang issue when loading in new content
        $content.animate({opacity:0},800);

        // Ajax Request the Traditional Page
        $.ajax({
            url: url,
            type: "GET",
            dataType: "html",
            success: function(data, textStatus, jqXHR){
                // Prepare
                var $data = $(documentHtml(data));
                $dataBody = $data.find('.document-body:first'),
                    $dataContent = $dataBody.find(settings.target).filter(':first');


                // Fetch the scripts
                var $scripts = $dataContent.find('.document-script');
                console.log($scripts)
                if ( $scripts.length ) {
                    $scripts.detach();
                }

                // Fetch the content
                var contentHtml = $dataContent.html()||$data.html();
                if ( !contentHtml ) {
                    document.location.href = url;
                    return false;
                }

                // Update the content
                $content.stop(true,true);
                $content.html(contentHtml).css('opacity',100).show(); /* you could fade in here if you'd like */

                // Update the title
                document.title = $data.find('.document-title:first').text();
                try {
                    document.getElementsByTagName('title')[0].innerHTML = document.title.replace('<','&lt;').replace('>','&gt;').replace(' & ',' &amp; ');
                } catch ( Exception ) { }

                // Add the scripts
                $scripts.each(function(){
                    var $script = "";

                    if ( $(this).attr("src") ) {

                        $script = '<script type="text\/javascript" src="*" ><\/script>'.replace('*', $(this).attr("src"));

                    } else {
                        $script = '<script type="text/javascript">'+$(this).text()+'<\/script>'
                    }

                    $content.append($script);

                });

                // $body.removeClass('loading');
                $window.trigger(completedEventName);

            },
            error: function(jqXHR, textStatus, errorThrown){
                document.location.href = url;
                return false;
            }
        }); // end ajax

    }); // end onStateChange


})(window,jQuery); // end closure
