/**
 * Created by eyohu023 on 2015/12/22.
 */

$(function(){

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
                heightAuto();
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




    /*未知元素高度垂直居中*/
    function heightAuto(){
        var d = $(".mask-content");
        d.each(function(){
            var ht = -$(this).get(0).offsetHeight/2+"px";
            $(this).get(0).style.marginTop = ht;
        });
    }
    heightAuto();



});
