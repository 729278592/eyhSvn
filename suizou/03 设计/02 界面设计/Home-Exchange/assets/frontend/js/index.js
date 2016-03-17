/**
 * Created by eyohu023 on 2015/11/26.
 */
(function($){
    /*服务幻灯切换*/
    var SerSlider = function (serSlider,options){
        var serversDefaul = {
            setsSlider:5000
        };
        var serversOpts = $.extend({},serversDefaul,options);
        var serversMethods = {
            init:function(_this){
                serversPaginationA = _this.find("a");
                serversUl = _this.find(".servers-ul");
                oLiServers = _this.find("li");
                liWidthservers = oLiServers.get(0).offsetWidth;
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
                    clearInterval(timerServers);
                })
            },
            mouseout:function(_this){
                _this.on("mouseout",function(){
                    timerServers = setInterval(serversMethods.autoPlay,serversOpts.setsSlider);
                })
            }
        };
        serversMethods.init(serSlider)
    };
    new SerSlider($(".serversSlider"),{
        setsSlider:5000
    });


    /*服务内容切换*/
    var scl  =  $(".sever-content>li");
    var omla = $(".order-meun li a");
    omla.each(function(){
        $(this).on("click",function(ev){
            imgs0 = $(this).find(".div-group").eq(0).attr("src");
//            imgs1 = $(this).find("img.hide").eq(0).attr("src");
//            imgs2 = $(this).find("img.hide").eq(1).attr("src");
            dataTitle = $(this).find(".div-group").attr("dataTitle");
            dataContent = $(this).find(".div-group").attr("dataContent");
            dataCommunity = $(this).find(".div-group").attr("dataCommunity");
            dataHerf = $(this).find(".div-group").attr("dataHerf");
            ev.preventDefault();
            clearInterval(timerServers);
            scl.html('<div class="serversSlider left">'+
                        '<div class="servers-slider">'+
                            '<ul class="servers-ul clearfix">'+
                                '<li>'+
                                    '<img src= "'+imgs0+'" alt=""/>'+
                                '</li>'+
//                                '<li>'+
//                                    '<img src= "'+imgs1+'" alt=""/>'+
//                                '</li>'+
//                                '<li>'+
//                                    '<img src= "'+imgs2+'" alt=""/>'+
//                                '</li>'+
                            '</ul>'+
                        '</div>'+
//                        '<div class="servers-pagination">'+
//                            '<a href="javascript:void(0)" class="active">'+
//                            '</a>'+
//                            '<a href="javascript:void(0)">'+
//                            '</a>'+
//                            '<a href="javascript:void(0)" class="last">'+
//                            '</a>'+
//                        '</div>'+
                    '</div>'+
                    '<div class="left Sdetails">'+
                        '<p class="title">'+
                            '<span class="large">'+dataTitle+'</span>'+
                        '</p>'+
                        '<p>'+dataContent+'</p>'+
                        '<table class="de-table">'+
                            '<tr>'+
                                '<th>'+
                                    '<span class="large-week">周五</span><br/>'+
                                    '<span>11.06</span>'+
                                '</th>'+
                                '<th>'+
                                    '<span class="large-week">周六</span><br/>'+
                                    '<span>11.07</span>'+
                                '</th>'+
                                '<th>'+
                                    '<span class="large-week">周日</span><br/>'+
                                    '<span>11.08</span>'+
                                '</th>'+
                                '<th>'+
                                    '<span class="large-week">周一</span><br/>'+
                                    '<span>11.09</span>'+
                                '</th>'+
                                '<th>'+
                                    '<span class="large-week">周二</span><br/>'+
                                    '<span>11.10</span>'+
                                '</th>'+
                                '<th>'+
                                    '<span class="large-week">周三</span><br/>'+
                                    '<span>11.11</span>'+
                                '</th>'+
                                '<th>'+
                                    '<span class="large-week">周四</span><br/>'+
                                    '<span>11.12</span>'+
                                '</th>'+
                            '</tr>'+
                            '<tr>'+
                                '<td>'+
                                    '<label>'+
                                        '<input type="checkbox"/>'+
                                    '</label>'+
                                '</td>'+
                                '<td>'+
                                    '<label>'+
                                        '<input type="checkbox"/>'+
                                    '</label>'+
                                '</td>'+
                                '<td>'+
                                    '<label>'+
                                        '<input type="checkbox"/>'+
                                    '</label>'+
                                '</td>'+
                                '<td>'+
                                    '<label>'+
                                        '<input type="checkbox"/>'+
                                    '</label>'+
                                '</td>'+
                                '<td>'+
                                    '<label>'+
                                        '<input type="checkbox"/>'+
                                    '</label>'+
                                '</td>'+
                                '<td>'+
                                    '<label>'+
                                        '<input type="checkbox"/>'+
                                    '</label>'+
                                '</td>'+
                                '<td>'+
                                    '<label>'+
                                        '<input type="checkbox"/>'+
                                    '</label>'+
                                '</td>'+
                            '</tr>'+
                        '</table>'+
                        '<div class="server-address">社区服务区域 :'+dataCommunity+'</div>'+
                        '<p style="text-align: center;">'+
                            '<a href='+dataHerf+' class="btn-buy">立刻订购</a>'+
                        '</p>'+
                    '</div>'
            );
            new SerSlider($(".serversSlider"),{
                setsSlider:5000
            })
        })
    });


    /*最新小区百叶窗效果*/
    var Baye = function(baye,options){
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
        MethodsBai.init(baye)
    };
    new Baye($(".new-quarters"),{
        setBai:4000,
        setBai1:30
    });


    /*保障切换*/
    var SecuritySlider = function(securitySlider,options){
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
                securityliWidth = securityoLi.get(0).offsetWidth;
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
                    clearInterval(securityTimer);
                    securityMethods.autoPlay();
                })
            },
            right:function(){
                securityRight.on("click",function(){
                    clearInterval(securityTimer);
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
                    clearInterval(securityTimer);
                });
                securityLeft.on("mouseover",function(){
                    clearInterval(securityTimer);
                });
                securityRight.on("mouseover",function(){
                    clearInterval(securityTimer);
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
        securityMethods.init(securitySlider)
    };
    new SecuritySlider($(".security"),{
        setSecurity:5000
    });


    /*活动切换*/
    var ActiveSlider = function(activeSlider,options){
        var defaul = {
            setActive:5000
        };
        var opts = $.extend({},defaul,options);
        var Methods = {
            init:function(_this){
                activeLeft  = _this.find(".active-left");
                activeRight = _this.find(".active-right");
                activeUl = _this.find(".active-ul");
                oLiActive = _this.find(".item");
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
                    Methods.autoPlay();
                    clearInterval(timerActive)
                })
            },
            right:function(){
                activeRight.on("click",function(){
                    clearInterval(timerActive);
                    if(btnActive == true){
                        if(inowActive==0){
                            inowActive = oLiActive.size()-1;
                            move(activeUl.get(0), {left : -inowActive * liWidthActive},function(){
                                btnActive = true;
                            });
                        }else{
                            inowActive--;
                            move(activeUl.get(0), {left : -inowActive * liWidthActive},function(){
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
                        move(activeUl.get(0), {left : -inowActive * liWidthActive},function(){
                            btnActive = true;
                        });
                        btnActive = true;
                    }else{
                        inowActive++;
                        move(activeUl.get(0), {left : -inowActive * liWidthActive},function(){
                            btnActive = true;
                        });
                    }
                }
            },
            mouseover:function(_this){
                _this.on("mouseover",function(){
                    clearInterval(timerActive);
                })
            },
            mouseout:function(_this){
                _this.on("mouseout",function(){
                    timerActive = setInterval(Methods.autoPlay,opts.setActive);
                })
            }
        };
        Methods.init(activeSlider)
    };
    new ActiveSlider($(".active-slider"),{
        setActive:5000
    });


    /*返回顶部&&联系我们的操作*/
    var BackToTop = function(_this,options){
        defaults = {
            autoShow : true,
            timeEffect : 500,
            effectScroll : 'linear',
            appearMethod : 'slide'
        };
        var opts = $.extend({}, defaults,options);
        var backTotopMethod = {
            init:function(_this){
                backTotopMethod.Click(_this);
                _this.hide();
                if(opts.autoShow) {
                    $(window).scroll(function(){
                        if($(this).scrollTop() != 0) {
                            switch (opts.appearMethod) {
                                case 'fade' : _this.fadeIn('fast'); break;
                                case 'slide' : _this.slideDown('fast'); break;
                                default : _this.show();
                            }
                        }
                        else {
                            switch (opts.appearMethod) {
                                case 'fade' : _this.fadeOut('fast'); break;
                                case 'slide' : _this.slideUp('fast'); break;
                                default : _this.hide();
                            }
                        }
                    });
                }
            },

            Click:function(_this){
               $(".we").delegate(_this,"click",function(){
                   $('body,html').animate({scrollTop:0},opts.timeEffect,opts.effectScroll);
               });
           }
        };
        backTotopMethod.init(_this)
    };
    new BackToTop($(".weibo"),{
        autoShow : true,
        appearMethod : 'fade',
        timeEffect : 500,
        effectScroll :  'linear',
        autoShowOffset :  '0',
        opacity :  1,
        top :  100
    });


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
    weHover();


    $(".chioce-menu li").on("click",function(){
        $(".chioce-style .title span").text($(this).text())
    })
})(jQuery);