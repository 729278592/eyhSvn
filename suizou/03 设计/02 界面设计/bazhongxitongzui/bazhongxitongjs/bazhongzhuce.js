
    $(".header .header_ul ul li:first-child").on("click", function () {
        $(this).css({"background": "#e84d42", "color": "white"})
        $(this).siblings().css({"background": "#f1f1f1", "color": "#9d9d9d"})
        $(".hui").css({"border-left-color": "#f1f1f1"})
        $(".lan").css({"border-left-color": "#e84d42"})
    })
    $(".header .header_ul ul .li").on("click", function () {
        $(this).css({"background": "#e84d42", "color": "white"})
        $(this).siblings().css({"background": "#f1f1f1", "color": "#9d9d9d"})
        $(".hui").css({"border-left-color": "#e84d42"})
        $(".lan").css({"border-left-color": "#f1f1f1"})
    })
    $(".header .header_ul ul li:last-child").on("click", function () {
        $(this).css({"background": "#e84d42", "color": "white"})
        $(this).siblings().css({"background": "#f1f1f1", "color": "#9d9d9d"})
        $(".hui").css({"border-left-color": "#f1f1f1"})
        $(".lan").css({"border-left-color": "#f1f1f1"})
    })



    $(".riqi .nian").hide();
    var isdian = false;
    $(".content_yi .sanjiao").on("click", function () {
        if (isdian == false) {
            $(".riqi .nian").show();
            isdian = true
            if (isdian1 == true) {
                $(".riqi .yue").hide();
                isdian1 = false
            } else if (isdian2 == true) {
                $(".riqi .ri").hide();
                isdian2 = false
            } else if (isdian3 == true) {
                $(".cheng").hide();
                isdian3 = false
            } else if (isdian4 == true) {
                $(".zhuangkuang").hide();
                isdian4 = false
            } else if (isdian5 == true) {
                $(".dangyuan").hide();
                isdian5 = false
            } else if (isdian6 == true) {
                $(".kouyu").hide();
                isdian6 = false
            } else if (isdian7 == true) {
                $(" .keyi").hide();
                isdian7 = false
            }
        } else if (isdian == true) {

            $(".riqi .nian").hide();

            isdian = false
        }
    })
//function sow(){
//    $(".riqi .nian").hide();
//    isdian = false
//}
//var a = setInterval(sow,10000)

    $(".riqi .nian ul li").each(function () {
        $(this).hover(function () {
            $(this).css({"background": "#bbb"})
            clearInterval(a)
        }, function () {
            $(this).css({"background": ""})
            a = setInterval(sow, 1000)
        })
        $(this).on("click", function () {
            $(".riqi .nian").hide();
            isdian = false
            $(".riqi .yi").val($(this).html())
        })
    })


    $(".riqi .yue").hide();
    var isdian1 = false;
    $(".content_yi .sanjiao1").on("click", function () {
        if (isdian1 == false) {
            $(".riqi .yue").show();
            isdian1 = true
            if (isdian == true) {
                $(".riqi .nian").hide();
                isdian = false
            } else if (isdian2 == true) {
                $(".riqi .ri").hide();
                isdian2 = false
            } else if (isdian3 == true) {
                $(".cheng").hide();
                isdian3 = false
            } else if (isdian4 == true) {
                $(".zhuangkuang").hide();
                isdian4 = false
            } else if (isdian5 == true) {
                $(".dangyuan").hide();
                isdian5 = false
            } else if (isdian6 == true) {
                $(".kouyu").hide();
                isdian6 = false
            } else if (isdian7 == true) {
                $(" .keyi").hide();
                isdian7 = false
            }
        } else if (isdian1 == true) {
            $(".riqi .yue").hide();
            isdian1 = false
        }
    })
//function sow1(){
//    $(".riqi .yue").hide();
//    isdian1 = false
//}
//var b = setInterval(sow1,10000)
    $(".riqi .yue ul li").each(function () {
        $(this).hover(function () {
            $(this).css({"background": "#bbb"})
            clearInterval(b)
        }, function () {
            $(this).css({"background": ""})
            b = setInterval(sow1, 10000)
        })
        $(this).on("click", function () {
            $(".riqi .yue").hide();
            isdian1 = false
            $(".riqi .er_input").val($(this).html())
        })
    })


    $(".riqi .ri").hide();
    var isdian2 = false;
    $(".content_yi .sanjiao2").on("click", function () {
        if (isdian2 == false) {
            $(".riqi .ri").show();
            isdian2 = true
            if (isdian == true) {
                $(".riqi .nian").hide();
                isdian = false
            } else if (isdian1 == true) {
                $(".riqi .yue").hide();
                isdian1 = false
            } else if (isdian3 == true) {
                $(".cheng").hide();
                isdian3 = false
            } else if (isdian4 == true) {
                $(".zhuangkuang").hide();
                isdian4 = false
            } else if (isdian5 == true) {
                $(".dangyuan").hide();
                isdian5 = false
            } else if (isdian6 == true) {
                $(".kouyu").hide();
                isdian6 = false
            } else if (isdian7 == true) {
                $(" .keyi").hide();
                isdian7 = false
            }
        } else if (isdian2 == true) {
            $(".riqi .ri").hide();
            isdian2 = false
        }
    })
    $(".riqi .ri ul li").each(function () {
        $(this).hover(function () {
            $(this).css({"background": "#bbb"})

        }, function () {
            $(this).css({"background": ""})
        })
        $(this).on("click", function () {
            $(".riqi .ri").hide();
            isdian2 = false
            $(".riqi .er_er").val($(this).html())
        })
    })


    $(" .cheng").hide();
    var isdian3 = false;
    $(".content_er .sanjiao").on("click", function () {
        if (isdian3 == false) {
            $(".cheng").show();
            isdian3 = true
            if (isdian == true) {
                $(".riqi .nian").hide();
                isdian = false
            } else if (isdian1 == true) {
                $(".riqi .yue").hide();
                isdian1 = false
            } else if (isdian2 == true) {
                $(".riqi .ri").hide();
                isdian2 = false
            } else if (isdian4 == true) {
                $(".zhuangkuang").hide();
                isdian4 = false
            } else if (isdian6 == true) {
                $(".kouyu").hide();
                isdian6 = false
            } else if (isdian5 == true) {
                $(".dangyuan").hide();
                isdian5 = false
            } else if (isdian7 == true) {
                $(" .keyi").hide();
                isdian7 = false
            }
        } else if (isdian3 == true) {
            $(" .cheng").hide();
            isdian3 = false
        }
    })
    $(".cheng ul li").each(function () {
        $(this).hover(function () {
            $(this).css({"background": "#bbb"})

        }, function () {
            $(this).css({"background": ""})
        })
        $(this).on("click", function () {
            $(".cheng").hide();
            isdian3 = false
            $(".cheng_input").val($(this).html())
        })
    })


    $(" .zhuangkuang").hide();
    var isdian4 = false;
    $(".content_er .sanjiao1").on("click", function () {
        if (isdian4 == false) {
            $(".zhuangkuang").show();
            isdian4 = true
            if (isdian == true) {
                $(".riqi .nian").hide();
                isdian = false
            } else if (isdian1 == true) {
                $(".riqi .yue").hide();
                isdian1 = false
            } else if (isdian2 == true) {
                $(".riqi .ri").hide();
                isdian2 = false
            } else if (isdian3 == true) {
                $(".cheng").hide();
                isdian3 = false
            } else if (isdian5 == true) {
                $(".dangyuan").hide();
                isdian5 = false
            } else if (isdian6 == true) {
                $(".kouyu").hide();
                isdian6 = false
            } else if (isdian7 == true) {
                $(" .keyi").hide();
                isdian7 = false
            }
        } else if (isdian4 == true) {
            $(" .zhuangkuang").hide();
            isdian4 = false
        }
    })
    $(".zhuangkuang ul li").each(function () {
        $(this).hover(function () {
            $(this).css({"background": "#bbb"})

        }, function () {
            $(this).css({"background": ""})
        })
        $(this).on("click", function () {
            $(".zhuangkuang").hide();
            isdian4 = false
            $(".zhuang_input").val($(this).html())
        })
    })


    $(" .dangyuan").hide();
    var isdian5 = false;
    $(".content_er .sanjiao2").on("click", function () {
        if (isdian5 == false) {
            $(".dangyuan").show();
            isdian5 = true
            if (isdian == true) {
                $(".riqi .nian").hide();
                isdian = false
            } else if (isdian1 == true) {
                $(".riqi .yue").hide();
                isdian1 = false
            } else if (isdian2 == true) {
                $(".riqi .ri").hide();
                isdian2 = false
            } else if (isdian3 == true) {
                $(".cheng").hide();
                isdian3 = false
            } else if (isdian4 == true) {
                $(".zhuangkuang").hide();
                isdian4 = false
            } else if (isdian6 == true) {
                $(".kouyu").hide();
                isdian6 = false
            } else if (isdian7 == true) {
                $(" .keyi").hide();
                isdian7 = false
            }
        } else if (isdian5 == true) {
            $(" .dangyuan").hide();
            isdian5 = false
        }
    })
    $(".dangyuan ul li").each(function () {
        $(this).hover(function () {
            $(this).css({"background": "#bbb"})

        }, function () {
            $(this).css({"background": ""})
        })
        $(this).on("click", function () {
            $(".dangyuan").hide();
            isdian5 = false
            $(".dangyuan_input").val($(this).html())
        })
    })


    $(" .kouyu").hide();
    var isdian6 = false;
    $(".content_er .sanjiao3").on("click", function () {
        if (isdian6 == false) {
            $(".kouyu").show();
            isdian6 = true
            if (isdian == true) {
                $(".riqi .nian").hide();
                isdian = false
            } else if (isdian1 == true) {
                $(".riqi .yue").hide();
                isdian1 = false
            } else if (isdian2 == true) {
                $(".riqi .ri").hide();
                isdian2 = false
            } else if (isdian3 == true) {
                $(".cheng").hide();
                isdian3 = false
            } else if (isdian4 == true) {
                $(".zhuangkuang").hide();
                isdian4 = false
            } else if (isdian5 == true) {
                $(".dangyuan").hide();
                isdian5 = false
            } else if (isdian7 == true) {
                $(" .keyi").hide();
                isdian7 = false
            }
        } else if (isdian6 == true) {
            $(" .kouyu").hide();
            isdian6 = false
        }
    })
    $(".kouyu ul li").each(function () {
        $(this).hover(function () {
            $(this).css({"background": "#bbb"})

        }, function () {
            $(this).css({"background": ""})
        })
        $(this).on("click", function () {
            $(".kouyu").hide();
            isdian6 = false
            $(".kouyu_input").val($(this).html())
        })
    })


    $(" .keyi").hide();
    var isdian7 = false;
    $(".content_san .sanjiao").on("click", function () {
        if (isdian7 == false) {
            $(".keyi").show();
            isdian7 = true
            if (isdian == true) {
                $(".riqi .nian").hide();
                isdian = false
            } else if (isdian1 == true) {
                $(".riqi .yue").hide();
                isdian1 = false
            } else if (isdian2 == true) {
                $(".riqi .ri").hide();
                isdian2 = false
            } else if (isdian3 == true) {
                $(".cheng").hide();
                isdian3 = false
            } else if (isdian4 == true) {
                $(".zhuangkuang").hide();
                isdian4 = false
            } else if (isdian5 == true) {
                $(".dangyuan").hide();
                isdian5 = false
            } else if (isdian6 == true) {
                $(" .kouyu").hide();
                isdian6 = false
            }
        } else if (isdian7 == true) {
            $(" .keyi").hide();
            isdian7 = false
        }
    })
    $(".keyi ul li").each(function () {
        $(this).hover(function () {
            $(this).css({"background": "#bbb"})

        }, function () {
            $(this).css({"background": ""})
        })
        $(this).on("click", function () {
            $(".keyi").hide();
            isdian7 = false
            $(".keyi_input").val($(this).html())
        })
    })
    if ((navigator.userAgent.indexOf('MSIE') >= 0) && (navigator.userAgent.indexOf('Opera') < 0)) {
        $(".techang span").css({"position": "relitive", "top": "-115px"})
        $(".zhiyuan span").css({"position": "relitive", "top": "-115px"})
        $(".shanchang span").css({"position": "relitive", "top": "-115px"})
        $(":checkbox").css({"border": "1px solid transparent", "outline": "none"})
        $(":radio").css({"border": "1px solid transparent", "outline": "none"})
        $("#im").hide()
        $("#riqi").hide();
        $("#nian").hide();
        $("#yue").hide();
        $("#ri").hide();
        $("input").on("focus", function () {
            $(this).css({"-ms-transition": "border 2s ease", "border": "1px solid #4f9cf3"})
            $(":checkbox").css({"border": "1px solid transparent", "outline": "none"})
            $(":radio").css({"border": "1px solid transparent", "outline": "none"})

        })
        $("input").on("blur", function () {
            $(this).css({"-ms-transition": "border 2s ease", "border": "1px solid #d5d5d5"})
            $(":checkbox").css({"border": "1px solid transparent", "outline": "none"})
            $(":radio").css({"border": "1px solid transparent", "outline": "none"})
        })
        $("riqi").html("")
    }else if (navigator.userAgent.indexOf('Firefox') >= 0) {
        $(".techang span").css({"position": "relitive", "top": "-115px"})
        $(".zhiyuan span").css({"position": "relitive", "top": "-115px"})
        $(".shanchang span").css({"position": "relitive", "top": "-115px"})
        $(".riqi .nian").css({"position": "absolute", "left": "88px"})
        $(".riqi .yue").css({"position": "absolute", "left": "201px", "width": "78px"})
        $(".riqi .ri").css({"position": "absolute", "left": "287px"})
        $(".cheng").css({"position": "absolute", "left": "268px"})
        $(".zhuangkuang").css({"position": "absolute", "left": "268px"})
        $(".dangyuan").css({"position": "absolute", "left": "670px"})
        $(".kouyu").css({"position": "absolute", "left": "671px"})
        $(".keyi").css({"position": "absolute", "left": "268px"})
    }
    else if (navigator.userAgent.indexOf('Safari') >= 0){
        $(".cheng").css({"position": "absolute", "left": "268px"})
        $(".er_input").css({"position":"relitive","top":"-0px"})
        $(".er_er").css({"position":"relitive","top":"-0px"})
    }
    else if (navigator.userAgent.indexOf('Chrome') >= 0){
        $(".er_input").css({"position":"relitive","top":"-0px"})
        $(".er_er").css({"position":"relitive","top":"-0px"})
        $(".riqi .nian").css({"position": "absolute", "left": "88px"})
        $(".riqi .yue").css({"position": "absolute", "left": "203px", "width": "78px"})
        $(".riqi .ri").css({"position": "absolute", "left": "288px"})
    }





