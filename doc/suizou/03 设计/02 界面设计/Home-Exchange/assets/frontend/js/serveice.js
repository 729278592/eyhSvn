/**
 * Created by eyohu023 on 2015/12/22.
 */

$(function(){
    var rul = $(".se-ul li,.server-types li,.sca-ul li");
    var rl = $(".se-div,.bonus.joined-money,.scSlider1");
    rul.each(function(i){
        $(this).on("click",function(){
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
            rl.eq(i).addClass("active");
            rl.eq(i).siblings(rl).removeClass("active");
        })
    });



    function maskShow(){
        var jai = $(".js-active1 .item img,.nws-infor .btn-look");
        var m = $(".mask");
        var w   = $(".wrapper");
        jai.each(function(){
            $(this).on("click",function(e){
                e.preventDefault();
                var str = '<div class="mask-bg"></div>'+
                          '<div class="mask">'+
                              '<div class="mask-content">'+
                                  '<i class="fa fa-remove"></i>'+
                                  '<div class="left">'+
                                      '<img src="'+$(this).closest(".item").find("img").attr('src')+'" alt="">'+
                                  '</div>'+
                                  '<div class="mask-p left">'+
                                      '<p class="title">'+
                                          '<span class="name">家具保养</span><span class="num">10元</span>/m²'+
                                      '</p>'+
                                      '<p><span class="list">①</span><span class="type-name">防范于未然</span></p>'+
                                      '<p class="server-infors"><span>大多是的真皮沙发在购买的时候都会送你一个保养蜡，如果不送的话，自己可以去买。沙发安装完成后，就要给真皮沙发打一层蜡</span></p>'+
                                      '<p><span class="list">②</span><span class="type-name">常清洁</span></p>'+
                                      '<p class="server-infors"><span>真皮沙发需要经常的清洁一下，推荐依然是用保养蜡，如果没这么多时间打蜡的话，可以考虑用软布擦拭一下</span></p>'+
                                      '<p><span class="list">③</span><span class="type-name">尽量少用水</span></p>'+
                                      '<p class="server-infors"><span>真皮虽然防水，但是千万不要经常用水去清洁它，偶尔用水的话，也要尽快的擦干，否则的话会让真皮沙发慢慢的变硬</span></p>'+
                                      '<p><span class="list">④</span><span class="type-name">冰袋清洁</span></p>'+
                                      '<p class="server-infors"><span>这个主要是口香糖粘到沙发上，如果当时没有发现，等发现的时候口香糖已经变干，这个时候尽量的用冰袋冰敷一会口香糖，然后拿</span></p>'+
                                  '</div>'+
                              '</div>'+
                          '</div>';
                w.append(str);
                function heightAuto(){
                    var d = $(".mask-content");
                    d.each(function(){
                        var ht = -$(this).get(0).offsetHeight/2+"px";
                        $(this).get(0).style.marginTop = ht;
                    });
                }
                heightAuto();
                var ds = $(".server-infors");
                ds.each(function(){
                    var divH = $(this).height();
                    var $div = $("span", $(this)).eq(0);
                    while ($div.outerHeight() > divH) {
                        $div.text($div.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
                    }
                });
            });
            /*多行打省略号*/

            w.delegate(".fa-remove","click",function(){
                $(this).closest(".mask").prev(".mask-bg").remove().end().closest(".mask").remove();
            });
        });
    }
    maskShow();



    function maskShow1(){
        var jai = $(".js-active .item img");
        var m = $(".mask");
        var w   = $(".wrapper");
        jai.each(function(){
            $(this).on("click",function(e){
                console.log();
                e.preventDefault();
                var str = '<div class="mask-bg"></div>'+
                    '<div class="mask">'+
                    '<div class="mask-content">'+
                    '<i class="fa fa-remove"></i>'+
                    '<div class="left">'+
                    '<img src="'+$(this).attr('src')+'" alt="">'+
                    '</div>'+
                    '<div class="mask-p left">'+
                    '<p class="title">'+
                    '<span class="name">家具保养</span><span class="num">10元</span>/m²'+
                    '</p>'+
                    '<p><span class="list">①</span><span class="type-name">防范于未然</span></p>'+
                    '<p class="server-infors"><span>大多是的真皮沙发在购买的时候都会送你一个保养蜡，如果不送的话，自己可以去买。沙发安装完成后，就要给真皮沙发打一层蜡</span></p>'+
                    '<p><span class="list">②</span><span class="type-name">常清洁</span></p>'+
                    '<p class="server-infors"><span>真皮沙发需要经常的清洁一下，推荐依然是用保养蜡，如果没这么多时间打蜡的话，可以考虑用软布擦拭一下</span></p>'+
                    '<p><span class="list">③</span><span class="type-name">尽量少用水</span></p>'+
                    '<p class="server-infors"><span>真皮虽然防水，但是千万不要经常用水去清洁它，偶尔用水的话，也要尽快的擦干，否则的话会让真皮沙发慢慢的变硬</span></p>'+
                    '<p><span class="list">④</span><span class="type-name">冰袋清洁</span></p>'+
                    '<p class="server-infors"><span>这个主要是口香糖粘到沙发上，如果当时没有发现，等发现的时候口香糖已经变干，这个时候尽量的用冰袋冰敷一会口香糖，然后拿</span></p>'+
                    '</div>'+
                    '<div class="order-chioce left">' +
                    '<div class="div-wdate left">' +
                    '<input id="d4311" class="Wdate" type="text" placeholder="2015-10-10" onFocus="WdatePicker()"/>'+
                    '<i class="fa fa-calendar"></i>' +
                    '</div>'+
                    '<select name="" id="" class="select-time left">'+
                    '<option value="时间">时间</option>'+
                    '<option value="8:00">8:00</option>'+
                    '<option value="10:00">10:00</option>'+
                    '<option value="13:00">13:00</option>'+
                    '<option value="16:00">16:00</option>'+
                    '</select>'+
                    '<input class="area-input left" placeholder="请输入房屋面积"/><span class="area-span left">m²</span>'+
                    '<input type="submit" value="下单" class="btn-order"/>'+
                    '</div>'+
                    '</div>'+
                    '</div>';
                w.append(str);
                function heightAuto(){
                    var d = $(".mask-content");
                    d.each(function(){
                        var ht = -$(this).get(0).offsetHeight/2+"px";
                        $(this).get(0).style.marginTop = ht;
                    });
                }
                heightAuto();
                var ds = $(".server-infors");
                ds.each(function(){
                    var divH = $(this).height();
                    var $div = $("span", $(this)).eq(0);
                    while ($div.outerHeight() > divH) {
                        $div.text($div.text().replace(/(\s)*([a-zA-Z0-9]+|\W)(\.\.\.)?$/, "..."));
                    }
                });
            });
            /*多行打省略号*/

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



    /*保洁里的活动切换*/
    var ul = $(".ulActivy li");
    var at = $(".activeTable");
    ul.each(function(i){
        $(this).on("click",function(){
            $(this).addClass("active");
            $(this).siblings(ul).removeClass("active");
            at.eq(i).addClass("active");
            at.eq(i).siblings(at).removeClass("active");
        });
    });


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



    /*保洁表单的控制*/
    var jdt = $(".jsDisabledType");
    var di = $(".div-inputs1");
    var id = $(".inputDisable,.keeper-stype li button");
    var dw = $(".div-wdate,.select-time,.s-spinner .hours,.btn-plus,.btn-reduce ,.div-inputs2 input,.div-inputs2,.s-spinner .spinner,.reserve-indormation .textarea");
    jdt.click(function(){
        if($(this).find("input")[0].checked==true){
            di.find("input").removeAttr("disabled");
            di.find("input").addClass("active");
            di.addClass("active");
            id.attr("disabled","disabled");
            id.addClass("disabl");
            dw.css({background:"#d6d6d6"});
            $(".btn-plus,.btn-reduce").attr("disabled","disabled");
        }
        else{
            di.find("input").attr("disabled","disabled");
            di.find("input").removeClass("active");
            di.removeClass("active");
            id.removeAttr("disabled");
            id.removeClass("disabl");
            dw.css({background:"#fff"});
            $(".btn-plus,.btn-reduce").removeAttr("disabled");
        }
    });


    $(".keeper-stype li").each(function(i){
        $(this).on("click",function(){
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
            if($(".keeper-stype li").eq(1).hasClass("active")){
                $(".active-div").addClass("hide");
            }else{
                $(".active-div").removeClass("hide");
            }

        });

    });

    /*服务信息的详情*/
    $(".server-ul li img").on("click",function(){
        $(this).parent().find(".service-infor").show();
    });
    $(".server-ul li").hover(function(){},
        function(){
            $(this).find(".service-infor").hide();
        });



    /*护理时间选择*/
    var select2 = $(".select2");
    var date = new Date();
    var str1;
    var num1,num;
    $(".jsActive>div.active").delegate(".btn-sureTime","click",function(){
        $(this).closest(".chiocetime").addClass("hide");
    });
    $(".select1").on("change",function(){
        num1 = parseInt($(".select1 option:selected").text());
        num  = parseInt($(".select1 option:last").text())-num1;
        str1 = "";
        for(var i = 0;i<num;i++){
            str1 += ' <option value="">'+ ++num1 +':00</option>';
        }
        select2.html(str1);
    });

    function getFirstAndLastMonthDay( year, month){
        var firstdate = year + '-' + month + '-01';
        var day = new Date(year,month,0);
        var lastdate = year + '-' + month + '-' + day.getDate();//获取当月最后一天日期
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
        var tml = $(".time-menu li");
        var tl = tml.eq(date.getDate()-1);
        var cc = $(".chiocetime");
        var text = tl.text();
        var next = tl.nextAll();
        var prev = tl.prevAll();
        if(text==date.getDate()){
            tl.addClass("active");
            next.addClass("next-active");
            prev.addClass("prev-active");
        }
        next.each(function(i){
            $(this).on("click",function(e){
                e.stopPropagation();
                cc.removeClass("hide");
            })
        });
//        $("html").on("click",function(){
//            cc.addClass("hide")
//        })
    }
    getFirstAndLastMonthDay(date.getFullYear(),(date.getMonth()+1));
});
