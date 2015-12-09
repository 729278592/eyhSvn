/**
 * Created by eyohu023 on 2015/11/26.
 */
(function($){

    /*最新小区百叶窗效果*/
    $.fn.baye =function(options){
        var defaulBai = {
            setBai:4000,
            setBai1:30
        };
        var opts = $.extend({},defaulBai,options);
        var MethodsBai = {
            init:function(_this){
                aDiv = $(".baiye");
                inowBai = 0;
                timerBai = null;
                btnBai = true;
                timerBai1 = null;
                MethodsBai.mouseover(_this);
                MethodsBai.mouseout(_this);
                MethodsBai.toShow();
            },
            toShow:function(){
                timerBai1 = setInterval(MethodsBai.toChange,opts.setBai);
            },
            toChange:function(){
                timerBai = setInterval(function(){
                    if(inowBai == aDiv.length){
                        clearInterval(timerBai);
                        inowBai = 0;
                        btnBai = !btnBai;
                    }else if(btnBai){
                        move(aDiv[inowBai],{top:0},function(){
                            inowBai++;
                        });
                    }
                    else{
                        move(aDiv[inowBai],{top:-30},function(){
                            inowBai++;
                        });
                    }
                },opts.setBai1);
            },
            mouseover:function(_this){
                _this.on("mouseover",function(){
                    clearInterval(timerBai1)
                })
            },
            mouseout:function(_this){
                _this.on("mouseout",function(){
                    timerBai1 = setInterval(MethodsBai.toChange,opts.setBai);
                })
            }
        };
        MethodsBai.init($(this))
    };

    /*服务内容切换*/
            var scl  =  $(".sever-content>li");
            var omla = $(".order-meun li a");
            omla.each(function(){
                $(this).on("click",function(ev){
                    ev.preventDefault();
                    clearInterval(timerServers);
                    scl.html('<div class="serversSlider left">'+
                                '<div class="servers-slider">'+
                                    '<ul class="servers-ul clearfix">'+
                                        '<li>'+
                                            '<img src="../../assets/frontend/images/servers-img1.jpg" alt=""/>'+
                                        '</li>'+
                                        '<li>'+
                                            '<img src="../../assets/frontend/images/servers-img1.jpg" alt=""/>'+
                                        '</li>'+
                                        '<li>'+
                                            '<img src="../../assets/frontend/images/servers-img1.jpg" alt=""/>'+
                                        '</li>'+
                                    '</ul>'+
                                '</div>'+
                                '<div class="servers-pagination">'+
                                    '<a href="javascript:void(0)" class="active">'+
                                        '<img src="../../assets/frontend/images/pagination-img1.jpg" alt=""/>'+
                                    '</a>'+
                                    '<a href="javascript:void(0)">'+
                                        '<img src="../../assets/frontend/images/pagination-img1.jpg" alt=""/>'+
                                    '</a>'+
                                    '<a href="javascript:void(0)" class="last">'+
                                        '<img src="../../assets/frontend/images/pagination-img1.jpg" alt=""/>'+
                                    '</a>'+
                                '</div>'+
                            '</div>'
                    );
                    $(".serversSlider").serversSlider({});
                })
            });

    /*服务幻灯切换*/
    $.fn.serversSlider = function(options){
        var serversDefaul = {
            setsSlider:5000
        };
        var serversOpts = $.extend({},serversDefaul,options);
        var serversMethods = {
            init:function(_this){
                serversPaginationA = _this.find("a");
                serversUl = _this.find(".servers-ul");
                oLiServers = _this.find("li");
                liWidthservers = oLiServers[0].offsetWidth;
                serversUlWidth = serversUl.offset().width;
                serversUlWidth = liWidthservers*oLiServers.size() + "px";
                serversUl.width(serversUlWidth);
                timerServers = setInterval(serversMethods.autoPlay,serversOpts.setsSlider);
                inowServers = 0;
                btnServers = true;
                serversMethods.mouseover(_this);
                serversMethods.mouseout(_this);
                serversMethods.paginatioaClick();
            },
            autoPlay:function(){
                if(btnServers == true){
                    btnServers = false;
                    if(inowServers == oLiServers.size()-1){
                        inowServers = 0;
                        serversPaginationA.eq(inowServers).addClass("active");
                        serversPaginationA.eq(inowServers).siblings().removeClass("active");
                        move(serversUl[0], {left : -inowServers * liWidthservers},function(){
                            btnServers = true;
                        });
                        btnServers = true;
                    }else{

                        inowServers++;
                        serversPaginationA.eq(inowServers).addClass("active");
                        serversPaginationA.eq(inowServers).siblings().removeClass("active");
                        move(serversUl[0], {left : -inowServers * liWidthservers},function(){
                            btnServers = true;
                        });
                    }
                }
            },
            paginatioaClick:function(){
                serversPaginationA.each(function(i){
                    $(this).on("click",function(){
                        clearInterval(timerServers);
                        inowServers = i;
                        move(serversUl[0], {left : -inowServers * liWidthservers},function(){

                        });
                        $(this).addClass("active");
                        $(this).siblings().removeClass("active");
                    })
                });
            },
            mouseover:function(_this){
                _this.on("mouseover",function(){
                    clearInterval(timerServers)
                })
            },
            mouseout:function(_this){
                _this.on("mouseout",function(){
                    timerServers = setInterval(serversMethods.autoPlay,serversOpts.setsSlider);
                })
            }
        };
        serversMethods.init($(this))
    };

    /*活动切换*/
    $.fn.activeSlider = function(options){
        var defaul = {
            setActive:5000
        };
        var opts = $.extend({},defaul,options);
        var Methods = {
            init:function(_this){
                activeLeft  = _this.find(".active-left");
                activeRight = _this.find(".active-right");
                activeUl = $(".active-ul");
                oLiActive = _this.find("li");
                liWidthActive = oLiActive[0].offsetWidth;
                activeUlWidth = activeUl.offset().width;
                activeUlWidth = liWidthActive*oLiActive.size() + "px";
                activeUl.width(activeUlWidth);
                timerActive = setInterval(Methods.autoPlay,opts.setActive);
                inowActive = 0;
                btnActive = true;
                Methods.mouseover(_this);
                Methods.mouseout(_this);
                Methods.left();
                Methods.right();
            },
            left:function(){
                activeLeft.on("click",function(){
                    Methods.autoPlay()
                })
            },
            right:function(){
                activeRight.on("click",function(){
                    if(btnActive == true){
                        if(inowActive==0){
                            inowActive = oLiActive.size()-1;
                            move(activeUl[0], {left : -inowActive * liWidthActive},function(){
                                btnActive = true;
                            });
                        }else{
                            inowActive--;
                            move(activeUl[0], {left : -inowActive * liWidthActive},function(){
                                btnActive = true;
                            });
                        }
                    }
                })
            },
            autoPlay:function(){
                if(btnActive == true){
                    btnActive = false;
                    if(inowActive == oLiActive.size()-1){
                        inowActive = 0;
                        move(activeUl[0], {left : -inowActive * liWidthActive},function(){
                            btnActive = true;
                        });
                        btnActive = true;
                    }else{
                        inowActive++;
                        move(activeUl[0], {left : -inowActive * liWidthActive},function(){
                            btnActive = true;
                        });
                    }
                }
            },
            mouseover:function(_this){
                _this.on("mouseover",function(){
                    clearInterval(timerActive)
                })
            },
            mouseout:function(_this){
                _this.on("mouseout",function(){
                    timerActive = setInterval(Methods.autoPlay,opts.setActive);
                })
            }
        };
        Methods.init($(this))
    };

    /*保障切换*/
    $.fn.securitySlider = function(options){
        var securityDefaults = {
            setSecurity:5000
        };
        var securityOpts = $.extend({}, securityDefaults, options);
        var securityMethods = {
            init: function (_this) {
                securityLeft   = _this.find(".securityleft");
                securityRight  = _this.find(".securityright");
                securityoLi    = _this.find("li");
                securityDiv    = _this.find(".security-div");
                securityslider = $(".security-slider");
                securityliWidth = securityoLi[0].offsetWidth;
                securitysliderWidth =securityliWidth*securityoLi.size() + "px";
                securityslider.width(securitysliderWidth);
                securityBtn = true;
                securityInow = 0;
                securityTimer = setInterval(securityMethods.autoPlay,securityOpts.setSecurity);
                securityNum = Math.ceil(securityDiv[0].offsetWidth/securityliWidth);
                securityMethods.mouseover();
                securityMethods.mouseout();
                securityMethods.left();
                securityMethods.right();
            },
            left:function(){
                securityLeft.on("click",function(){
                    securityMethods.autoPlay()
                })
            },
            right:function(){
                securityRight.on("click",function(){
                    if(securityBtn == true){
                        if(securityInow==0){
                            securityInow = securityoLi.size()-securityNum;
                            move(securityslider[0], {left : -securityInow * securityliWidth},function(){
                                securityBtn = true;
                            });
                        }else{
                            securityInow--;
                            move(securityslider[0], {left : -securityInow * securityliWidth},function(){
                                securityBtn = true;
                            });
                        }
                    }
                })
            },
            autoPlay:function(){
                if(securityBtn == true){
                    securityBtn = false;
                    if(securityInow == securityoLi.size()-securityNum){
                        securityInow = 0;
                        move(securityslider[0], {left : -securityInow * securityliWidth},function(){
                            securityBtn = true;
                        });
                        securityBtn = true;
                    }else{
                        securityInow++;
                        move(securityslider[0], {left : -securityInow * securityliWidth},function(){
                            securityBtn = true;
                        });
                    }
                }
            },
            hover:function(){

            },
            mouseover:function(){
                securityDiv.on("mouseover",function(){
                    clearInterval(securityTimer)
                });
                securityLeft.on("mouseover",function(){
                    clearInterval(securityTimer)
                });
                securityRight.on("mouseover",function(){
                    clearInterval(securityTimer)
                });
            },
            mouseout:function(){
                securityDiv.on("mouseout",function(){
                    securityTimer = setInterval(securityMethods.autoPlay,securityOpts.setSecurity);
                });
                securityRight.on("mouseout",function(){
                    securityTimer = setInterval(securityMethods.autoPlay,securityOpts.setSecurity);
                });
                securityLeft.on("mouseout",function(){
                    securityTimer = setInterval(securityMethods.autoPlay,securityOpts.setSecurity);
                });
            }
        };
        securityMethods.init($(this))
    };

    /*返回顶部&&联系我们的操作*/
    $.BackToTop = {
        defaults: {
            text : 'Back to top',
            autoShow : true,
            timeEffect : 500,
            effectScroll : 'linear',
            appearMethod : 'slide'
        },
        init:function(options){
            /* vars **/
            opts = $.extend({}, $.BackToTop.defaults ,options);
            $.BackToTop._constructLink();

            if(opts.autoShow) {
                $(window).scroll(function(){
                    if($(this).scrollTop() != 0) {
                        switch (opts.appearMethod) {
                            case 'fade' : aBack.fadeIn('fast'); break;
                            case 'slide' : aBack.slideDown('fast'); break;
                            default : aBack.show();
                        }
                    }
                    else {
                        switch (opts.appearMethod) {
                            case 'fade' : aBack.fadeOut('fast'); break;
                            case 'slide' : aBack.slideUp('fast'); break;
                            default : aBack.hide();
                        }
                    }
                });
            }

            $('#BackToTop').click(function(e) {
                e.preventDefault();
                $('body,html').animate({scrollTop:0},opts.timeEffect,opts.effectScroll);
            });
            $('#BackToTop').hover(function(){
                $(this).html('返回顶部');
            },function(){
                $(this).html(opts.text);
            });
        },

        _constructLink:function() {
            aBack = $('<div />',{
                id : 'BackToTop',
                class:'weibo',
                href : '#body',
                html : opts.text
            }).appendTo('.we .top');
            if(!opts.autoShow) aBack.show();
        }

    };

    BackToTop = function(options) {
        $.BackToTop.init(options);
    };
    function weHover(){
        var mpt = $(".message,.phone,.tuo_code");
        mpt.hover(function () {
                $(this).find(".qqgroup-show").removeClass("hide");
                $(this).find(".telphone-show").removeClass("hide");
                $(this).find(".qrcode").removeClass("hide");
            },
            function () {
                $(this).find(".qqgroup-show").addClass("hide");
                $(this).find(".telphone-show").addClass("hide");
                $(this).find(".qrcode").addClass("hide");
            }
        );
    }
    weHover()




})(jQuery);