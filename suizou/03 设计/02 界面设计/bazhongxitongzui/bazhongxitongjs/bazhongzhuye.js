window.onload = function() {
    var tempimg = ["../bazhongxitongimg/图片一_03.jpg", "../bazhongxitongimg/积分1_03.png", "../bazhongxitongimg/积分2_03.png", "../bazhongxitongimg/积分3_03.png"];
    var i = 1;
    var tempul = $(".huan_ul ul");
    function sr() {
        $(".huan_ul ul .liyi").animate({}, 1000, function () {
            $(this).css({marginLeft: "-3px"});
            i++;
            if (i == 4) {
                i = 0
            }
            if (i == 1) {
                $(".lie ul .liyi").css({"background": "#ed4331"});
                $(".lie ul .liyi").siblings().css({"background": "#dbdbdb"});
                $(".meng p").html("“第十二届中国教育信息化创新与发展”")
                $(".huan_ul ul img").attr("src", "../bazhongxitongimg/图片一_03.jpg");
            } else if (i == 2) {

                $(".lie ul .lier").css({"background": "#ed4331"});
                $(".lie ul .lier").siblings().css({"background": "#dbdbdb"});
                $(".huan_ul ul img").attr("src", "../bazhongxitongimg/积分1_03.png");
                $(".meng p").html("“1”")
            } else if (i == 3) {
                $(".lie ul .lisan").css({"background": "#ed4331"});
                $(".lie ul .lisan").siblings().css({"background": "#dbdbdb"});
                $(".huan_ul ul img").attr("src", "../bazhongxitongimg/积分2_03.png");
                $(".meng p").html("“2”")
            } else if (i == 0) {
                $(".lie ul .lisi").css({"background": "#ed4331"});
                $(".lie ul .lisi").siblings().css({"background": "#dbdbdb"});
                $(".huan_ul ul img").attr("src", "../bazhongxitongimg/积分3_03.png");
                $(".meng p").html("“3”")
            }
            tempul.append($(this));
        });
    }
    var stop = setInterval(sr, 2000);
    $(".huan_ul ul").hover(function () {
        clearInterval(stop)

    }, function () {
        stop = setInterval(sr, 2000);
    })
    $(".lie ul .liyi").hover(function () {
            $(this).css({"background": "#ed4331"});
            $(this).siblings().css({"background": "#dbdbdb"});
            $(".huan ul li img").attr("src", "../bazhongxitongimg/图片一_03.jpg");

            $(".meng p").html("“第十二届中国教育信息化创新与发展”");

            clearInterval(stop)
        }, function () {
            $(this).siblings().css({"background": "#dbdbdb"});

            setTimeout(function(){

            },2000)
            if (i == 1) {
                setTimeout(function () {
                 i=1;

                }, 2000)
            } else if (i == 2) {
                setTimeout(function () {
                    i = 1;

                }, 2000)
            } else if (i == 3) {
                setTimeout(function () {
                    i = 1;

                }, 2000)
            } else if (i == 0) {
                setTimeout(function () {
                    i = 1;


                }, 2000)
            }
            stop = setInterval(sr, 2000);
        }
    );
    $(".lie ul .lier").hover(function () {
            $(this).css({"background": "#ed4331"});
            $(this).siblings().css({"background": "#dbdbdb"});
            $(".lie ul li:first-child").css({"background": "#dbdbdb"});
            $(".huan ul li img").attr("src", "../bazhongxitongimg/积分1_03.png");
            $(".meng p").html("“1”");
            clearInterval(stop)
        }, function () {
            $(this).siblings().css({"background": "#dbdbdb"});

            if (i == 1) {
                setTimeout(function () {
                    i = 2;
                }, 2000)
            } else if (i == 3) {
                setTimeout(function () {
                    i = 2;
                }, 2000)
            } else if (i == 2) {
                setTimeout(function () {
                    i = 2;
                }, 2000)
            } else if (i == 0) {
                setTimeout(function () {
                    i = 2;
                }, 2000)
            }
            stop = setInterval(sr, 2000);
        }
    );
    $(".lie ul .lisan").hover(function () {
            $(this).css({"background": "#ed4331"});
            $(this).siblings().css({"background": "#dbdbdb"});
            $(".huan ul li img").attr("src", "../bazhongxitongimg/积分2_03.png");
            $(".lie ul li:first-child").css({"background": "#dbdbdb"});
            $(".meng p").html("“2”");
            clearInterval(stop)
        }, function () {
            $(this).siblings().css({"background": "#dbdbdb"});

            if (i == 1) {
                setTimeout(function () {
                    i = 3;
                }, 2000)
            } else if (i == 2) {
                setTimeout(function () {
                    i = 3;
                }, 2000)
            } else if (i == 3) {
                setTimeout(function () {
                    i = 3;
                }, 8000)
            } else if (i == 0) {
                setTimeout(function () {
                    i = 3;
                }, 2000)
            }
            stop = setInterval(sr, 2000);
        }
    );
    $(".lie ul .lisi").hover(function () {
            $(this).css({"background": "#ed4331"});
            $(this).siblings().css({"background": "#dbdbdb"});
            $(".huan ul li img").attr("src", "../bazhongxitongimg/积分3_03.png");
            $(".lie ul li:first-child").css({"background": "#dbdbdb"});
            $(".meng p").html("“3”");
            clearInterval(stop)
        }, function () {
            $(this).siblings().css({"background": "#dbdbdb"});

            if (i == 1) {
                setTimeout(function () {
                    i = 0;
                }, 2000)
            } else if (i == 2) {
                setTimeout(function () {
                    i = 0;
                }, 2000)
            } else if (i == 3) {
                setTimeout(function () {
                    i = 0;
                }, 2000)
            } else if (i == 0) {
                setTimeout(function () {
                    i = 0;
                }, 2000)
            }
            stop = setInterval(sr, 2000);
        }
    );
    var JPlaceHolder = {
        //检测
        _check: function () {
            return 'placeholder' in document.createElement('input');
        },
        //初始化
        init: function () {
            if (!this._check()) {
                this.fix();
                $("input").css({"border": "none", "width": "112px"})

            }
        },
        //修复
        fix: function () {
            jQuery(':input[placeholder]').each(function () {
                var self = $(this), txt = self.attr('placeholder');
                self.wrap($('<div></div>').css({position: 'relative', zoom: '1', border: 'none', background: 'none', "padding": "2px 10px", margin: 'none'}));
                var pos = self.position(), h = self.outerHeight(true), paddingleft = self.css('padding-left');
                var holder = $('<span></span>').text(txt).css({position: 'absolute', left: pos.left, top: pos.top, height: h, lienHeight: h,
                    paddingLeft: paddingleft, color: '#aaa', "border": "none", "padding": "5px 1px", "fontSize": "12px"}).appendTo(self.parent());

                self.focusin(function () {
                    holder.hide();
                }).focusout(function () {
                    if (!self.val()) {
                        holder.show();
                    }
                });
                holder.click(function () {
                    holder.hide();
                    self.focus();
                });
            });
        }
    };
//执行
    jQuery(function () {
        JPlaceHolder.init();
    });

}