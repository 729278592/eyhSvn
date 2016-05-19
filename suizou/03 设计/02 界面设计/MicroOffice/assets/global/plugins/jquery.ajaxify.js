/*
 * Ajaxify - $ Plugin
 * version: 2.1 2015-05-13
 * Created by: gaoxin
 */
(function($){
    /* Application Generic Variables */
    var $window = $(window),
        $body = $(document.body),
        $content = null,
        rootUrl = History.getRootUrl(),
        scrollOptions = {
            duration: 800,
            easing:'swing'
        };

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

    $.defaultSettings = {
        event:'click', /*specify the event*/
        link:false, /* specify the link, priority is for the href attr.*/
        target:'#content', /*the data loaded via ajax will be placed here*/
        method: 'GET', /* the request method GET or POST*/
        loadHash:false, /* for use this to resolve bookmarking issues, see example for more details*/
        title:false, /* change page title along with the request. */
        forms:false, /* send form data along with th request (forms, input , radio ... etc $ selector) */
        params:'ajax=true',/*extend parameters for the webpage. it can be set to function since v2*/
        timeout:false, /*in ms.  there is a problem in this option on linux servers*/
        contentType:"application/x-www-form-urlencoded",
        dataType:'html',
        cache:false, /* force the browser not to cache*/
        username:false, /*username HTTP access authentication*/
        password:false, /*password HTTP access authentication*/
        onStart:function(op){
            return true;
        }, /* a callback function before start requesting.*/
        onError:function(op){
            return false;
        }, /* a callback function if error happened while requesting*/
        onSuccess:function(op){},/* a callback function if the request finished successfuly*/
        onComplete:function(op){}//*a callback function when the request finished weather it was a successful one or not.*/
    };

    // Ajaxify Helper
    $.fn.ajaxify = function(options) {
        $.defaultSettings = $.extend({},$.defaultSettings, options);

        if ( $($.defaultSettings.target) === 0 ) {
            $content = $body;
        } else {
            $content = $($.defaultSettings.target);
        }

        return this.each(function() {
            var $this = $(this);
            if($.defaultSettings.event){
                $this.on($.defaultSettings.event,function(event){
                    // Prepare
                    var
                        $this = $(this),
                        url = $this.attr('href'),
                        title = $this.attr('title')||null;
                    // Continue as normal for cmd clicks etc
                    //  event.which == 2 ����м�(���ּ�)
                    if ( event.which == 2 || event.metaKey ) { return true; }

                    // Ajaxify this link
                    History.pushState(null,title,url);
                    console.log(History)
                    event.preventDefault();
                    return false;
                });
            }


        });
    }; // end ajaxify fn

    // Hook into State Changes
    $window.bind('statechange',function(){
        // Prepare Variables
        var
            State = History.getState(),
            url = State.url,
            relativeUrl = url.replace(rootUrl,'');
        // Set Loading
        //$body.addClass('loading');

        // Start Fade Out
        // Animating to opacity to 0 still keeps the element's height intact
        // Which prevents that annoying pop bang issue when loading in new content
        $content.animate({opacity:0},800);

        // Ajax Request the Traditional Page
        $.ajax({
            url: url,
            success: function(data, textStatus, jqXHR){
                // Prepare
               var $data = $(documentHtml(data));
                    $dataBody = $data.find('.document-body:first'),
                    $dataContent = $dataBody.find($.defaultSettings.target).filter(':first');

                // Fetch the scripts
                var $scripts = $dataContent.find('.document-script');
                if ( $scripts.length ) {
                    $scripts.detach();
                }

                // Fetch the content
                var contentHtml = $dataContent.html()||$data.html();
                if ( !contentHtml ) {
                    document.location.href = url;
                    return false;
                }

                // Update the menu
//                $menu = $dataContent;
//                var $menuChildren = $menu.find("main-nav-list");
//                $menuChildren.filter("li.active").removeClass("active");
//                $menuChildren = $menuChildren.has('a[href^="'+relativeUrl+'"],a[href^="/'+relativeUrl+'"],a[href^="'+url+'"]');
//                if ( $menuChildren.length ) { $menuChildren.addClass("active");}

                // Update the content
                $content.stop(true,true);
                $content.html(contentHtml).ajaxify().css('opacity',100).show(); /* you could fade in here if you'd like */

                // Update the title
                document.title = $data.find('.document-title:first').text();
                try {
                    document.getElementsByTagName('title')[0].innerHTML = document.title.replace('<','&lt;').replace('>','&gt;').replace(' & ',' &amp; ');
                } catch ( Exception ) { }

                // Add the scripts
                var contentNode = $content.get(0);
                $scripts.each(function(){
                    var $script = $(this), scriptText = $script.text(), scriptNode = document.createElement('script');

                    if ( $script.attr('src') ) {
                        if ( !$script[0].async ) { scriptNode.async = false; }
                        scriptNode.src = $script.attr('src');
                    }
                    scriptNode.appendChild(document.createTextNode(scriptText));
                    contentNode.appendChild(scriptNode);
                });

                // Complete the change
                //if ( $body.ScrollTo||false ) { $body.ScrollTo(scrollOptions); } /* http://balupton.com/projects/jquery-scrollto */
               /* $body.removeClass('loading');
                $window.trigger(completedEventName);*/

                // Inform Google Analytics of the change
                if ( typeof window._gaq !== 'undefined' ) {
                    window._gaq.push(['_trackPageview', relativeUrl]);
                }

                // Inform ReInvigorate of a state change
                if ( typeof window.reinvigorate !== 'undefined' && typeof window.reinvigorate.ajax_track !== 'undefined' ) {
                    reinvigorate.ajax_track(url);
                    // ^ we use the full url here as that is what reinvigorate supports
                }
            },
            error: function(jqXHR, textStatus, errorThrown){
                document.location.href = url;
                return false;
            }
        }); // end ajax

    }); // end onStateChange


})(jQuery);
