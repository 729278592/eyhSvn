/**
 * Created by eyohu023 on 2015/12/9.
 */
(function($){
    /*条件赛选的控制*/
    var Method = {
        init:function(_this){
            rentalMode = _this.find(".rental_mode");
            radio      = _this.find("input:radio");
            checkbox   = _this.find("input:checkbox");
            btnClear   = $(".btn-clear");
            Method.radioClick();
            Method.checkboxClick();
            Method.clearClick()
        },
        clearClick:function(){
            btnClear.on("click",function(){
                rentalMode.removeClass("active");
                rentalMode.find("input").attr({checked:false}).removeClass("checked");
            })
        },
        radioClick:function(){
            radio.parent(rentalMode).on("click",function(){
                var tfr = $(this).find(radio).get(0);
                if(tfr.className == ""){
                    tfr.checked = true;
                    tfr.className = "checked";
                    $(this).siblings(rentalMode).find(radio).removeClass("checked");
                    $(this).siblings(rentalMode).removeClass("active");
                    $(this).addClass("active");
                }
                else if(tfr.className == "checked"){
                    tfr.checked = false;
                    tfr.className = "";
                    $(this).removeClass("active");
                }
            })
        },
        checkboxClick:function(){
            checkbox.parent(rentalMode).on("click",function(){
                var tfg = $(this).find(checkbox).get(0);
                if(tfg.className == ""){
                    tfg.checked = true;
                    tfg.className = "checked";
                    $(this).addClass("active");
                }
                else if(tfg.className == "checked"){
                    tfg.checked = false;
                    tfg.className = "";
                    $(this).removeClass("active");
                }
            })
        }
    };
    Method.init($(".search-terms,.service-type,.com_list,.hd-mask"));

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
    ellipsisShow();


    /*搜索条件控制*/
    var bs = $(".btn-search1");
    var hmb = $(".hd-mask-bg,.hd-mask");
    var hmc = $(".hd-mask .fa-remove");
    bs.on("click",function(){
        hmb.removeClass("hide")
    });
    hmc.on("click",function(){
        hmb.addClass("hide")
    });

    var sil1 = $(".server-input .label-input1 input");
    var sil2 = $(".server-input .label-input2 input");
    var sb = $(".server-input>label .btn-search1");
    var hd = $(".hd-mask>div");
    sb.on("click",function(){
        if(sil1.is(":checked")){
            hd.eq(0).addClass("active");
            hd.eq(0).siblings(hd).removeClass("active");
        }
        else if(sil2.is(":checked")){
            hd.eq(1).addClass("active");
            hd.eq(1).siblings(hd).removeClass("active");
        }
    });

    var ib = $(".input-search .button");
    ib.on("click",function(e){
        e.preventDefault();
        if(sil1.is(":checked")){
            window.location.href = "homeServices-nanny.html"
        }
        else if(sil2.is(":checked")){
            window.location.href = "chioce-server1.html"
        }
    })
})(jQuery);

