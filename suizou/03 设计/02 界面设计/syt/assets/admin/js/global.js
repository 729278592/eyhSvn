$(function () {





    /*账号操作*/
    $(".inBlock a").on("click",function(e){
        e.stopPropagation();
        if($(".account-selection").is(".hide")){
            $(".account-selection").removeClass("hide");
        }else{
            $(".account-selection").addClass("hide");
        }
    });

    var linkDiv = $(".linkDiv");
    var li = $(".li");
    var navMeuns = $(".navMeuns");

    li.each(function (i) {
        $(this).hover(function () {
            linkDiv.eq(i).removeClass("hide");
        },function () {
            linkDiv.eq(i).addClass("hide");
        })
    });


    linkDiv.hover(function () {
        $(this).removeClass("hide");
    },function () {
        $(this).addClass("hide");
    });

//表格偶数行背景色
    $("table tr:even").addClass("on");



    /*分页居中*/
    if($(".paging").get(0)){
        var ml = ($(".paging").outerWidth()+$(".page-num").outerWidth()+$(".btn-jump").outerWidth())/2;
        $(".paging").get(0).style.marginLeft = -ml+"px";
    }


    //兼容IE8
    function getIE(){
        if(navigator.appName == "Microsoft Internet Explorer")
        {
            if(navigator.appVersion.match(/8./i)=='8.')
            {
                /*IE支持placeholder属性*/
                var doc = document,
                    inputs = doc.getElementsByTagName('input'),
                    supportPlaceholder = 'placeholder'in doc.createElement('input'),
                    placeholder = function (input) {
                        if($("input").is(".input")){
                            return false;
                        }
                        var text = input.getAttribute('placeholder'),
                            defaultValue = input.defaultValue;
                        if (defaultValue == '') {
                            input.value = text;
                        }
                        input.onfocus = function () {
                            if (input.value === text) {
                                this.value = ''
                            }
                        };
                        input.onblur = function () {
                            if (input.value === '') {
                                this.value = text
                            }
                        }
                    };
                if (!supportPlaceholder) {
                    for (var i = 0, len = inputs.length; i < len; i++) {
                        var input = inputs[i],
                            text = input.getAttribute('placeholder');
                        if (((input.type == 'text')||(input.type == 'password')) && text) {
                            placeholder(input)
                        }

                    }
                }
            }
        }
    }
    getIE();
})