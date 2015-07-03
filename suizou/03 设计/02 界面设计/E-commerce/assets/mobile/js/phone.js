    var isdian = true;
    var isdian1 = true;
    $(".cbs_ul li").each(function(){
        $(this).hover(function(){
            $(this).css({"background":"#ccc"});
            $(this).siblings().css({"background":""})
        });
        $(this).on("click",function(){
            $(this).parent().prev().prev().val($(this).text());
            $(this).parent().removeClass("show");
            isdian = true;
            isdian1 = true;
        })
    });

    $("#cbs_ul1").on("click",function(){
        if(isdian == true){
            $(this).next(".cbs_ul").addClass("show");
            isdian = false;
        }
        else if(isdian == false){
            $(this).next(".cbs_ul").removeClass("show");
            isdian = true;
        }
    });

    $("#cbs_ul2").on("click",function(){
        if(isdian1 == true){
            $(this).next(".cbs_ul").addClass("show");
            isdian1 = false;
        }
        else if(isdian1 == false){
            $(this).next(".cbs_ul").removeClass("show");
            isdian1 = true;
        }
    });

    var d = $(".daily .state>li");
    var s = $(".state_daily>li");
    d.each(function(i){
        $(this).on("click",function(){
            $(this).addClass("active");
            $(this).siblings().removeClass("active");
            s.eq(i).removeClass("hide").addClass("block");
            s.eq(i).siblings().removeClass("block").addClass("hide")
        })
    });

    var content0 = '<ul>'+
                    '<li class="first" onclick="Addfirst(this)">'+
                    '<span class="company">易优弧科技团队</span>'+
                    '<i class="fa fa-angle-right fr"></i>'+
                    '</li>'+
                    '</ul>';

    var content = '<ul>'+
                   '<li class="second">'+
                   '<ul class="department">'+
                   '<li onclick="Addsecond(this)">'+
                   '<span class="company">研发部</span>'+
                   '<i class="fa fa-angle-right fr"></i>'+
                   '</li>'+
                   '<li onclick="Addsecond(this)">'+
                   '<span class="company">技术部</span>'+
                   '<i class="fa fa-angle-right fr"></i>'+
                   '</li>'+
                   '<li class="last" onclick="Addsecond(this)">'+
                   '<span class="company">市场部</span>'+
                   '<i class="fa fa-angle-right fr"></i>'+
                   '</li>'+
                   '</ul>'+
                   '</li>'+
                   '</ul>';

    var content1 = '<ul>'+
                    '<li class="three">'+
                    '<ul class="personal_information">'+
                    '<li onclick="Addthree(this)">'+
                    '<img src="../images/daily/person_type.png" alt="" width="40"/>'+
                    '<span class="name">陈小洁</span>'+
                    '<span class="f12">cto</span>'+
                    '<i class="fa fa-check-circle-o fr"></i>'+
                    '</li>'+
                    '<li onclick="Addthree(this)">'+
                    '<img src="../images/daily/person_type.png" alt="" width="40"/>'+
                    '<span class="name">高新</span>'+
                    '<span class="f12">开发经理</span>'+
                    '<i class="fa fa-check-circle-o fr"></i>'+
                    '</li>'+
                    '<li class="last" onclick="Addthree(this)">'+
                    '<img src="../images/daily/person_type.png" alt="" width="40"/>'+
                    '<span class="name">王洪波</span>'+
                    '<span class="f12">前端开发</span>'+
                    '<i class="fa fa-check-circle-o fr"></i>'+
                    '</li>'+
                    '</ul>'+
                    '</li>'+
                    '<li>'+
                    '<ul>'+
                    '<li class="second">'+
                    '<ul class="department">'+
                    '<li onclick="Addfoure(this)">'+
                    '<span class="company">技术部</span>'+
                    '<i class="fa fa-angle-right fr"></i>'+
                    '</li>'+
                    '<li class="last" onclick="Addfoure(this)">'+
                    '<span class="company">市场部</span>'+
                    '<i class="fa fa-angle-right fr"></i>'+
                    '</li>'+
                    '</ul>'+
                    '</li>'+
                    '</ul>'+
                    '</li>'+
                    '</ul>';

    var content2 = '<ul>'+
                    '<li class="three">'+
                    '<ul class="personal_information">'+
                    '<li onclick="Addthree(this)">'+
                    '<img src="../images/daily/person_type.png" alt="" width="40"/>'+
                    '<span class="name">周梦媛</span>'+
                    '<span class="f12">cto</span>'+
                    '<i class="fa fa-check-circle-o fr"></i>'+
                    '</li>'+
                    '<li onclick="Addthree(this)">'+
                    '<img src="../images/daily/person_type.png" alt="" width="40"/>'+
                    '<span class="name">韩永华</span>'+
                    '<span class="f12">开发经理</span>'+
                    '<i class="fa fa-check-circle-o fr"></i>'+
                    '</li>'+
                    '<li class="last" onclick="Addthree(this)">'+
                    '<img src="../images/daily/person_type.png" alt="" width="40"/>'+
                    '<span class="name">刘唐</span>'+
                    '<span class="f12">前端开发</span>'+
                    '<i class="fa fa-check-circle-o fr"></i>'+
                    '</li>'+
                    '</ul>'+
                    '</li>'+
                    '<li>'+
                    '</li>'+
                    '</ul>';

    var cd = $(".common");
    cd.find(".delete").each(function(){
        $(this).on("click",function(){
            $(this).parent().remove()
        });
    });

    var af = $(".add_human_information ul>.first"),
        rph = $(".registered_person_head"),
        re = $(".return"),
        rcn = $(".receive_person .common .name"),
        p = $(".plus"),
        co = $(".concrete_operation");
    p.eq(0).on("click",function(){
        $("#left>.one").hide();
        $("#left>.two").slideDown();
        $(".add_human_information").append(content0);
       Addfirst = function(obj0){
           $(".add_human_information").empty().append(content);

               rph.html('<i class="fa fa-arrow-left"></i> <span class="company">'+$(obj0).find(".company").text()+'</span>');
               re.addClass("yi");
               $(".yi").on("click",function(){
                   $(".add_human_information").empty().append(content0);
                   $(".yi").html('<span class="company">王洪波</span>');
                   re.removeClass("yi");
               });


           Addsecond = function(obj){
               $(".add_human_information").empty().append(content1);

                   re.html('<i class="fa fa-arrow-left"></i> <span class="company">'+$(obj).find(".company").text()+'</span>');
                   re.removeClass("yi");
                   re.addClass("er");
                   $(".er").on("click",function(){
                       $(".add_human_information").empty().append(content);
                       $(".er").html('<i class="fa fa-arrow-left"></i> <span class="company">'+$(obj0).find(".company").text()+'</span>');
                       re.removeClass("er");
                   });

               Addthree = function(obj1){
                   $(obj1).find(".fa").removeClass("fa-check-circle-o").addClass("fa-check-circle");
                           setTimeout(function(){
                                $("#left>.two").hide();
                                $("#left>.one").slideDown();
                                $(".add_human_information").empty();
                               rcn.text($(obj1).find(".name").text())
                            },1000)
               }
           };
           Addfoure = function(obj){
                   rph.html('<i class="fa fa-arrow-left"></i> <span class="company">'+$(obj).find(".company").text()+'</span>');
                   $(".add_human_information").empty().append(content2);
                   re.addClass("san");
                   re.removeClass("er");
                   $(".san").html('<i class="fa fa-arrow-left"></i> <span class="company">'+$(obj).find(".company").text()+'</span>');
                   $(".san").on("click",function(){

                       $(".add_human_information").empty().append(content1);
                       $(".san").html('<i class="fa fa-arrow-left"></i> <span class="company">'+$(obj).find(".company").text()+'</span>');
                       re.removeClass("san");
                   });

               Addthree = function(obj1){
                   $(obj1).find(".fa").removeClass("fa-check-circle-o").addClass("fa-check-circle");
                   re.addClass("san");
                   re.html('<i class="fa fa-arrow-left"></i> <span class="company">'+$(obj).find(".company").text()+'</span>');
                   re.on("click",function(){
                       $(".add_human_information").empty().append(content);
                       re.html('<i class="fa fa-arrow-left"></i> <span class="company">'+$(obj).find(".company").text()+'</span>');
                   });
                   setTimeout(function(){
                       $("#left>.two").hide();
                       $("#left>.one").slideDown();
                       $(".add_human_information").empty();
                       rcn.text($(obj1).find(".name").text())
                   },1000)
               }
           }
       }
    });















