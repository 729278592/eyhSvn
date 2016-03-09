/**
 * Created by eyohu023 on 2015/12/22.
 */

$(function(){
    var rul = $(".se-ul li,.server-types li,.sca-ul li");
    var rl = $(".se-div,.bonus.joined-money,.scSlider1");
    function ellipsisShow(){
        var ds = $(".deatils-p");
        ds.each(function(){
            var divH = $(this).height();
            var $p = $("p", $(this)).eq(0);
            while ($p.outerHeight() > divH) {
                $p.text($p.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
            }
        });
    }

    rul.each(function(i){
        $(this).on("click",function(){
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
            rl.eq(i).addClass("active");
            rl.eq(i).siblings(rl).removeClass("active");
            ellipsisShow();
        })
    });


    /*服务蒙版控制*/
    function maskShow(){
        var jai = $(".js-active .item a img");
        var w   = $(".wrapper");
        jai.each(function(){
            $(this).on("click",function(e){
                var commonInfor = $(this).next(".common-infor.hide").html();
                e.preventDefault();
                var str = '<div class="mask-bg"></div>'+
                          '<div class="mask">'+
                              '<div class="mask-content">'+
                                   commonInfor+
                              '</div>'+
                          '</div>';
                w.append(str);
                /*多行打省略号*/

                var ds = $(".server-infors");
                ds.each(function(){
                    var divH = $(this).height();
                    var $div = $("span", $(this)).eq(0);
                    while ($div.outerHeight() > divH) {
                        $div.text($div.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
                    }
                });
            });
            w.delegate(".fa-remove","click",function(){
                $(this).closest(".mask").prev(".mask-bg").remove().end().closest(".mask").remove();
            });
        });
    }
    maskShow();


    function maskShow1(){
        var jai = $(".js-active .item .btn-look");
        var w   = $(".wrapper");
        jai.each(function(){
            $(this).on("click",function(e){
                e.preventDefault();
                var commonInfor = $(this).closest(".nws-infor").prev(".common-infor.hide").html();
                var str1 = '<div class="mask-bg"></div>'+
                           '<div class="mask">'+
                               '<div class="mask-content">'+
                                   commonInfor+
                               '</div>'+
                           '</div>';
                w.append(str1);
                /*多行打省略号*/
                var ds = $(".server-infors");
                ds.each(function(){
                    var divH = $(this).height();
                    var $div = $("span", $(this)).eq(0);
                    while ($div.outerHeight() > divH) {
                        $div.text($div.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
                    }
                });
            });
            w.delegate(".fa-remove","click",function(){
                $(this).closest(".mask").prev(".mask-bg").remove().end().closest(".mask").remove();
            });
        });
    }
    maskShow1();


    /*服务类型切换*/
    var jad = $(".jsActive>div");
    var sm = $(".sch-menu li");
    sm.each(function(i){
        $(this).on("click",function(){
            $(this).addClass("active");
            $(this).siblings(sm).removeClass("active");
            jad.eq(i).addClass("active");
            jad.eq(i).siblings(jad).removeClass("active");
        });
    });
    $(".sch-menu.bg li").off("click");

    /*售后服务切换*/
    var cil = $(".chioce-infors li");
    var sd = $(".ser-div>div");
    cil.each(function(i){
        $(this).on("click",function(){
            $(this).addClass("active");
            $(this).siblings(cil).removeClass("active");
            sd.eq(i).addClass("active");
            sd.eq(i).siblings(sd).removeClass("active");
        });
    });


    /*护理等级切换*/
    var nml = $(".nwd-menu li");
    var ndd = $(".nuw-div>div");
    nml.each(function(i){
        $(this).on("click",function(){
            $(this).addClass("active");
            $(this).siblings(nml).removeClass("active");
            ndd.eq(i).addClass("active");
            ndd.eq(i).siblings(ndd).removeClass("active");
        });
    });


    var ft = $(".fl-type");
    var bt = $(".btn-type");
    ft.each(function(){
       $(this).find(bt).on("click",function(){
           $(this).addClass("active");
           $(this).siblings(bt).removeClass("active");
       })
    });


    /*未知元素高度垂直居中*/
    function heightAuto(){
        var d = $(".seavice-menu");
        d.each(function(){
            var ht = -$(this).get(0).offsetHeight/2+"px";
            $(this).get(0).style.marginTop = ht;
        });
    }
    heightAuto();


    /*服务信息的详情*/
    $(".server-ul li,.nus-list li").each(function(i){
        $(this).find("img").on("click",function(){
            $(".service-step-bg,.service-step").removeClass("hide");
            $(".seavice-menu>li").eq(i).addClass("active");
            $(".seavice-menu>li").eq(i).siblings().removeClass("active");
            heightAuto();
        });
    });

    $(".service-div .fa").on("click",function(){
        $(this).closest(".service-step").addClass("hide");
        $(this).closest(".service-step").prev().addClass("hide");
    });

//    $(".server-ul li").hover(function(){},
//        function(){
//            $(this).find(".service-infor").hide();
//        });



    /*护理时间选择*/
    var date = new Date();
    var str1;
    var num1,num;
    function getFirstAndLastMonthDay( year, month){
        var day = new Date(year,month,0);
        //给文本控件赋值。同下
        var date = new Date();
        var str = '<div class="time-date">'+
            '<div class="head-time">'+date.getFullYear()+'年'+(date.getMonth()+1)+'月'+'</div>'+
            '<ul class="time-menu clearfix">';
        for(var i = 1; i<=day.getDate() ;i++){
            str += '<li>'+i+'</li>'
        }
        str += '</ul></div>';
        $(".after").after(str);
        var tm = $(".time-menu");
        tm.each(function(i){
            var tl = tm.eq(i).find("li").eq(date.getDate()-1);
            var cc = $(".chiocetime");
            var text = tl.text();
            var next = tl.nextAll();
            var prev = tl.prevAll();
            if(text==date.getDate()){
                tl.addClass("active");
                next.addClass("next-active");
                prev.addClass("prev-active");
            }
            next.each(function(){
                $(this).on("click",function(e){
                    e.stopPropagation();
                    $(this).closest(".reserve").find(cc).removeClass("hide");
                })
            });
                $(".reserve").each(function(i){
                    $(".reserve").eq(i).delegate(".btn-sureTime","click",function(){
                        $(this).closest(".chiocetime").addClass("hide");
                });

                $(".select1").each(function(){
                    $(this).closest(".reserve").delegate(".select1","change",function(){
                        num1 = parseInt($(this).find("option:selected").text());
                        num  = parseInt($(this).find("option:last").text())-num1;
                        str1 = "";
                        for(var i = 0;i<num;i++){
                            str1 += '<option value="">'+ ++num1 +':00</option>';
                        }
                        $(this).closest(".reserve").find(".select2").html(str1);
                    })
                });

            });
        });

//        $("html").on("click",function(){
//            cc.addClass("hide")
//        })
    }
    getFirstAndLastMonthDay(date.getFullYear(),(date.getMonth()+1));


    /*服务流程蒙版控制*/
    $(".wrapper").delegate(".close-serice","click",function(){
        $(this).closest(".service-step").addClass("hide");
        $(this).closest(".service-step").prev().addClass("hide");
    })
});
