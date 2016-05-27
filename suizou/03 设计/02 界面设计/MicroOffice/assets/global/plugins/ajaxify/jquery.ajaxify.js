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
        debug = false,
        completedEventName = 'statechangecomplete',
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


    /**
     * ��־���
     * @param message
     */
    function ajaxifyLog(message) {
        if(debug){
            if(window.console) {
                console.debug(message);
            } else {
                alert(message);
            }
        }
    }

    var settings = {
        event: 'click', /*specify the event*/
        url: false, /* specify the url, priority is for the href attr.*/
        target:'#content', /*the data loaded via ajax will be placed here*/
        type: 'GET', /* the request method GET or POST*/
        tagToload: false, /* inserts just the tag from the data loaded, it can be specified as t a second argument in the 'target' attr(#box,#result)*/
        manip: false,
        animateOut: false,
        animateIn: false,
        animateOutSpeed: 'normal',
        animateInSpeed: 'normal',
        title: false, /* change page title along with the request. */
        forms: false, /* send form data along with th request (forms, input , radio ... etc $ selector) */
        params: 'ajax=true',/*extend parameters for the webpage*/
        contentType: "application/x-www-form-urlencoded",
        dataType: 'html',
        cache: false, /* force the browser not to cache*/
        onStart: function(opts){}, /* a callback function before start requesting.*/
        onError: function(opts){}, /* a callback function if error happened while requesting*/
        onSuccess: function(opts){},/* a callback function if the request finished successfuly*/
        onComplete: function(opts){}//*a callback function when the request finished weather it was a successful one or not.*/
    };

    // Ajaxify Helper
    $.fn.ajaxify = function(options) {

        settings = $.extend({}, settings, options);

        if($.metadata){ // �Ƿ�����metadata֧��
            settings = jQuery.extend(settings,$(this).metadata());
        }

        if ( $(settings.target).size() === 0  || !$(settings.target)) {
            $content = $body; // δָ��targetʱ��Ĭ��Ϊdocument.body
        } else {
            $content = $(settings.target);
        }

        return this.each(function() {

            if(settings.event){
                // �¼���
                $(this).on(settings.event,function(event){
                    // Prepare
                    var $this = $(this);


                    if($this.is('a')){
                        if($this.attr('href')){
                            var url = $(this).attr('href').replace(/^#/, "");
                            var title = $this.attr('title') || null;
                            settings.url = url || settings.url;
                            settings.title = title || settings.title;
                        }

                        if(settings.tagToload && typeof settings.tagToload != 'object' && $this.attr('target')){
                            settings.target = $this.attr('target');
                        }
                    }

                    if(settings.forms){
                        var text = $(settings.forms).serialize();
                        if(text) {
                            settings.params += '&' + params;
                        }
                    }

                    var len = settings.target.length - 1;
                    if(typeof settings.tagToload != 'object') {
                        if (settings.target.charAt(len) == '+' || settings.target.charAt(len) == '-') {
                            settings.manip = settings.target.charAt(len);
                            settings.target = settings.target.substr(0, len);
                        }
                    }

                    // Continue as normal for cmd clicks etc
                    if ( event.which == 2 || event.metaKey ) { return true; }

                    // Ajaxify this link
                    if(_internal(settings.url)) {
                        History.pushState(null,title,settings.url);
                    }
                    event.preventDefault();
                    return false;
                });
            } else {
                // ���¼�������ֱ������
                alert(111);
                //History.pushState(null,settings.title,settings.url);
            }


        });

    }; // end ajaxify fn

    // Hook into State Changes
    $window.on('statechange',function(){
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
            type: settings.type,
            dataType: settings.dataType,
            data: settings.params,
            contentType:settings.contentType,
            cache:settings.cache,
            success: function(data, textStatus, jqXHR){
                // Prepare
                var $data = $(documentHtml(data));
                    $dataBody = $data.find('.document-body:first'),
                    $dataContent = $dataBody.find(settings.target).filter(':first');

                if(settings.tagToload) {
                    if(typeof settings.tagToload == 'string') {
                        $dataContent = $dataBody.find(settings.tagToload);
                    } else if(typeof settings.tagToload == 'object') {
                        $.each(settings.tagToload, function(tag, target) {
                            if($dataBody.find(tag).size())
                                $dataContent = $dataBody.find(tag);
                            else {
                                $.ajaxifyLog('Warning: Tag "'+tag+'" couldn\'t be found.');
                            }

                        });
                    }
                }

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
/*              var $menuChildren = $menu.find(menuChildrenSelector);
                $menuChildren.filter(activeSelector).removeClass(activeClass);
                $menuChildren = $menuChildren.has('a[href^="'+relativeUrl+'"],a[href^="/'+relativeUrl+'"],a[href^="'+url+'"]');
                if ( $menuChildren.length === 1 ) { $menuChildren.addClass(activeClass); }*/

                // Update the content
                $content.stop(true,true);
                if(settings.manip == '+') {
                    $content.append(contentHtml).css('opacity',100).show(); /* you could fade in here if you'd like */
                } else if(settings.manip == '-') {
                    $content.prepend(contentHtml).css('opacity',100).show(); /* you could fade in here if you'd like */
                } else {
                    $content.html(contentHtml).css('opacity',100).show(); /* you could fade in here if you'd like */
                }


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

                    try {
                        scriptNode.appendChild(document.createTextNode(scriptText));
                    } catch ( Exception ) {
                        //IE8�Լ����£�����ʹ��text����
                        scriptNode.text = scriptText;
                    }
                    contentNode.appendChild(scriptNode);

                });

                // Complete the change
                if ( $body.ScrollTo || false ) { $body.ScrollTo(scrollOptions); } /* http://balupton.com/projects/jquery-scrollto */
               // $body.removeClass('loading');
                $window.trigger(completedEventName);

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


})(window,jQuery); // end closure
