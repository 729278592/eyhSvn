/**
 * Created by eyohu023 on 2015/11/26.
 */
(function($){
    /*服务快速下单让时间控制*/
    var scl  =  $(".sever-content>li");
    var omla = $(".order-meun li");
    var date = new Date();
    var day,week,str,str1;
    omla.each(function(i){
        str ='<tr>';
        for(var a=1; a<8; a++){
            var pluDay = date.getDay();
            week = "周" + "日一二三四五六日一二三四五六".charAt((pluDay+a));
            day = (date.getMonth()+1)+"."+(date.getDate()+a) ;
            str += '<th>'+
                       '<span class="large-week">'+week+'</span><br/>'+
                       '<span>'+day+'</span>'+
                   '</th>';
        }
        str += '</tr>';
        str1 = '<tr>';
        for(var b=1; b<8; b++){
            day =date.getFullYear() +"-"+ (date.getMonth()+1)+"-"+(date.getDate()+b) ;
            str1 +='<td>'+
                        '<label>'+
                            '<input type="radio" value='+day+' name="radio"/>'+
                        '</label>'+
                    '</td>';
        }
        str1 += '</tr>';

        scl.eq(0).find(".de-table").html(str+str1);
        $(this).on("click",function(){
            scl.eq(i).addClass("active");
            scl.eq(i).siblings("li").removeClass("active");
            scl.eq(i).find(".de-table").html(str+str1);
        })
    });


//    $(".btn-buy").on("click",function(e){
//        e.preventDefault();
//        var time = $(".de-table tr input:checked").val();
//        var url = $(this).attr("dataUrl");
//
//
//        if(time){
//            window.location.href = url+"?"+time;
//        }
//        else{
//            alert("请选择服务时间");
//        }
//    });

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


    /*搜索条件选择*/
    $(".chioce-menu li").on("click",function(){
        $(".chioce-style .title span").text($(this).text())
    })
})(jQuery);