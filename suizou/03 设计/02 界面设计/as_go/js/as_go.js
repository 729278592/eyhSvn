/**
 * Created by WHB on 2015/7/27.
 */
$(function() {
    /*顶部菜单适应手机效果*/
    var hg = $(".head_mobile .glyphicon-th-list");
    var mm = $(".menu_mobile");
    var mml = $(".menu_mobile li");
    hg.on("click", function () {
        if (mm.css("display") == "none") {
            mm.css({"display": "inline-block"});
            mm.animate({"marginLeft": "0"}, 500);
            mml.animate({"width": "25%"})
        }

    });

    mm.on("click", function () {
        mm.css({"display": "none"});
        mm.animate(mml.animate({"width": "0%"}));
    });


    var pl = $(".product_ul li");
    pl.hover(
        function () {
            $(".title_box").show();
            $(this).find(".title_box").animate({
                "top": "100%"
            }, 200);
            $(this).find(".plus").fadeOut(500)
        },
        function () {
            $(this).find(".title_box").animate({
                "top": "0"
            }, 200);
            $(this).find(".plus").fadeIn(500)
        });

    var ii = $(".item_div").parent();
    ii.hover(
        function () {
            $(this).find(".item_box").animate({
                "top": "0%"
            }, 200);
        },
        function () {
            $(this).find(".item_box").animate({
                "top": "101%"
            }, 200);
        });


    var jp = $(".js_product"),
        m = $(".myCarousel"),
        mi = $(".myCarousel .item"),
        mid = $(".myCarousel .item .describe");
    pl.each(function (i) {
        $(this).on("click", function () {
            jp.addClass("hide");
            m.removeClass("hide");
            mi.eq(i).addClass('active');
            mi.eq(i).siblings().removeClass("active");
            mi.find("img").fadeIn(2000);
            mid.animate({
                "top": "13%"
            }, 3000);
            var mc = $(".myCarousel .close");
            mc.on("click", function () {
                mc.parent().addClass("hide");
                jp.removeClass("hide");
                mi.find("img").hide();
                mid.animate({
                    "top": "-20%"
                }, 0);
            });
        });
    });

/*登录方式切换*/
    var nl = $(".nav-pills>li"),
        lt = $(".login_type");
    nl.each(function (i) {
        $(this).on("click", function () {
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
            lt.eq(i).removeClass("hide");
            lt.eq(i).siblings(".login_type").addClass("hide")
        });
    });

/*招聘职位信息切换*/
    var sls = $(".station_head li .station_name"),
        s = $(".station_name"),
        sl = $(".station_content li");
    sls.each(function (i) {
        $(this).on("click", function () {
            $(this).addClass("active");
            $(this).parent().siblings().find(s).removeClass("active");
            $(this).parent().parent().siblings().find(s).removeClass("active");
            $(this).parent().parent().siblings(".station_content").find("li").css({"display": 'none'});
            sl.eq(i).css({"display": 'inline-block'});
            sl.eq(i).siblings().css({"display": 'none'});
        });
    });


    /*index return top*/
    var w = $(".we .top");
    w.hide();
    $(window).scroll(function () {  //jquery的scroll()方法
        if ($(this).scrollTop() > 250) {
            w.fadeIn(1000);
        }  //jquery的fadeIn()显示方法
        else {
            w.fadeOut(1000);
        }  //jquery的fadeIn()隐藏方法
    });

    w.on("click", function () {
        $("html,body").animate({scrollTop: 0}, "fast");

        return false;
    });

    w.mouseover(function () {
        $(this).find("i").removeClass("fa-angle-up");
        $(this).html("返回顶部");
        $(this).find("i").css({"fontSize": "13px"})
    });

    w.mouseout(function () {
        $(this).find("i").addClass("fa-angle-up");
        $(this).html('<i class="fa fa-angle-up" style="top: 3px;font-size: 30px;"></i>');
        $(this).find("i").css({"fontSize": "30px"})
    });

    $(".message,.phone").hover(function () {
            $(this).find(".qqgroup-show").removeClass("hide");
            $(this).find(".telphone-show").removeClass("hide");
        },
        function () {
            $(this).find(".qqgroup-show").addClass("hide");
            $(this).find(".telphone-show").addClass("hide");
        }
    );

    var t = $(".tuo_code");
    t.hover(
        function () {
            $(this).find(".qrcode").removeClass("hide");
        },
        function () {
            $(this).find(".qrcode").addClass("hide");
        }
    );


    var ql = $(".question li");
    ql.find("p").on("click", function () {
        if ($(this).next().css("display") == "none") {
            $(this).next().slideDown();
            $(this).parent().siblings().find("div").slideUp()
        }
        else {
            $(this).next().slideUp()
        }
    });


    /*login*/
    var il = $(".immediately_log");
    var iN = $("#inputName");
    var iP = $("#inputPassword");
    var ne = $(".NameEmpty");
    var pe = $(".PasswordEmpty");
    var e = $(".Exists");
    var NE = $(".NotExists");
    var eP = $(".errorPassword");
    il.on("click", function () {
        if ((iN.val() == "") && (iP.val() == "")) {
            ne.removeClass("hide");
            pe.removeClass("hide")
        }
        else if ((iN.val() == "") && (iP.val() != "")) {
            ne.removeClass("hide");
            pe.addClass("hide");
            e.addClass("hide");
            NE.addClass("hide");
        }
        else if ((iN.val() != "") && (iP.val() == "")) {
            ne.addClass("hide");
            pe.removeClass("hide");
            eP.addClass("hide");
        }
        else if ((iN.val() != "") && (iP.val() != "")) {
            ne.addClass("hide");
            pe.addClass("hide");
            e.addClass("hide");
            NE.addClass("hide");
            eP.addClass("hide");
            $(this).val("正在登录中...");
            if (iN.val() == "已存在") {
                e.removeClass("hide");
                NE.addClass("hide");
            }
            else if (iN.val() == "不存在") {
                NE.removeClass("hide");
                e.addClass("hide");
            }
            else if (iP.val() == "as") {
                eP.removeClass("hide");
            } else {
                e.addClass("hide");
                NE.addClass("hide");
                eP.addClass("hide");
            }
        }
    });

/*手机上应用左边菜单切换*/
    var wh = $(".wrap-h");
    var wc = $(".wrap-c");
    var wcl = wc.find("li");
    wh.on("click", function () {
        if (wc.css("display") == "none") {
            wc.slideDown();
            $(this).find("i").removeClass("glyphicon-triangle-top").addClass("glyphicon-triangle-bottom");
        } else {
            wc.slideUp();
            $(this).find("i").removeClass("glyphicon-triangle-bottom").addClass("glyphicon-triangle-top");
        }
    });

//    wcl.on("click", function () {
//        wc.slideUp();
//        wh.find("span").text($(this).text());
//
//        var text = wh.find("span").text();
//        if (text == "任务协同套件") {
//            window.location.href = "task_coordination_suite.html";
//        }
//        else if (text == "移动营销套件") {
//            window.location.href = "mobile_marketing_suite.html";
//        }
//        else if (text == "企业文化套件") {
//            window.location.href = "enterprise_culture_suite.html";
//        }
//        else if (text == "移动办公套件") {
//            window.location.href = "mobile_office_suite.html";
//        }
//        else if (text == "新手入门") {
//            window.location.href = "novice_entry.html";
//        }
//        else if (text == "常见问题") {
//            window.location.href = "common_problem.html";
//        }
//        else if (text == "产品特性") {
//            window.location.href = "product_features.html";
//        }
//    });

});














